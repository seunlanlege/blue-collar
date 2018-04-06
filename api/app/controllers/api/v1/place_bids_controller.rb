module Api
  module V1
    class PlaceBidsController < ApplicationController
      include ParamsWhitelist
      include FetchModels

      before_action :authenticate_user!
      before_action :fetch_or_create_place, only: [:create]

      def create
        # Is @user set by devise?

        @place_bid = PlaceBid.new({
          place_id: @place.id,
          reviewer_id: @user.id,
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
