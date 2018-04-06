module Api
  module V1
    class PlaceBidsController < ApplicationController
      include ParamsWhitelist

      before_action :authenticate_user!
      before_action :set_place, only: [:create]

      def create
        # Is @user set by devise?
        place = Place.find_or_create_by(place_params)

        @place_bid = PlaceBid.new({
          place_id: place.id,
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
