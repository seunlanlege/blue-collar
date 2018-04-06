module Api
  module V1
    class PlaceBidsController < ApplicationController
      include ParamsWhitelist

      before_action :authenticate_user!
      before_action :set_place, only: [:create]

      def create
        # Is @user set by devise?

        @place_bid = PlaceBid.new()
        @place_bid.user = @user
        @place_bid.place = Place.find_or_create_by(place_params)

        if @place_bid.save
          render :show, status: :ok
        else
          render json: @place_bid.errors, status: :unprocessable_entity
        end
      end
    end
  end
end
