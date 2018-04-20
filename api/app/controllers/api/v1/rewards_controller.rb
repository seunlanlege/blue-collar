module Api
  module V1
    class RewardsController < ApplicationController
      def create
        @user = current_user
        reward = RewardTransaction.new(rewards_params.merge({
          user_id: @user.id,
        }))

        if reward.save
          render "api/v1/users/show", status: :ok
        else
          render json: reward.errors, status: :unprocessable_entity
        end
      end
    end
  end
end
