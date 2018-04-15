module Api
  module V1
    class SubscriptionsController < ApplicationController
      # before_action :authenticate_user!
      before_action :set_user

      def create
        stripe_customer = Stripe::Customer.create(
          :description => "Customer for #{@user.email}",
          :source => subscription_params[:token]
        )

        stripe_subscription = Stripe::Subscription.create(
          :customer => stripe_customer.id,
          :items => [
            {
              :plan => STRIPE_CONFIG[:plan_id],
            },
          ]
        )

        @subscription = Subscription.new(
          user: @user,
          stripe_customer_id: stripe_customer.id,
          stripe_subscription_id: stripe_subscription.id,
        )

        if @subscription.save
          render :show, status: :ok
        else
          head :bad_request
        end
      end

      def destroy
        @subscription = @user.subscription

        stripe_subscription = Stripe::Subscription.retrieve(@subscription.stripe_subscription_id)
        stripe_subscription.delete

        @subscription.destroy
        head :ok
      end

      private

      def set_user
        @user = User.find(params[:user_id])
      end

      def subscription_params
        params.require(:subscription).permit(:token)
      end
    end
  end
end
