module Api
  module V1
    class SubscriptionsController < ApplicationController
      before_action :authenticate_user!

      def create
        @user = current_user
        source = subscription_params[:token]

        stripe_customer = Stripe::Customer.create(
          description: @user.email,
          source: source,
        )

        stripe_subscription = Stripe::Subscription.create(
          customer: stripe_customer.id,
          items: [{plan: STRIPE_CONFIG[:plan_id]}],
          trial_end: 1.month.from_now.to_i,
        )

        @subscription = Subscription.new(
          user: @user,
          stripe_customer_id: stripe_customer.id,
          stripe_subscription_id: stripe_subscription.id,
          stripe_customer_source: stripe_customer.source,
        )

        if @subscription.save
          render "api/v1/users/show", status: :ok
        else
          head :bad_request
        end
      end

      def destroy
        @user = current_user
        @subscription = @user.subscription

        stripe_subscription = Stripe::Subscription.retrieve(@subscription.stripe_subscription_id)
        stripe_subscription.delete

        @subscription.destroy

        render "api/v1/users/show", status: :ok
      end
    end
  end
end
