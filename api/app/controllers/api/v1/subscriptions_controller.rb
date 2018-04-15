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
        logger.info "xxxxxxxxxxxxxxxxxxxx"
        logger.info stripe_customer

        stripe_subscription = Stripe::Subscription.create(
          :customer => stripe_customer.id,
          :items => [
            {
              :plan => STRIPE_CONFIG[:plan_id],
            },
          ]
        )
        logger.info "xxxxxxxxxxxxxxxxxxxx"
        logger.info stripe_subscription

        @subscription = Subscription.new(
          user: @user,
          stripe_customer_id: stripe_customer.id,
          stripe_subscription_id: stripe_subscription.id,
        )

        if @subscription.save
          render :show, status: :ok
        else
          render nothing: true, status: 404
        end
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
