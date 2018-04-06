module Api
  module V1
    class PlaceBidsController < ApplicationController
      before_action :authenticate_user!
      before_action :fetch_or_create_place, only: [:create]

      def create
        @user = current_user

        @place_bid = PlaceBid.new({
          place_id: @place.id,
          user_id: @user.id,
        })

        if @place_bid.save
          render :show, status: :ok
        else
          render json: @place_bid.errors, status: :unprocessable_entity
        end
      end
    end
  end
end
