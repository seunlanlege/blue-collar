module Api
  module V1
    class PlaceReviewsController < ApplicationController
      include ParamsWhitelist
      include FetchModels

      before_action :authenticate_user!
      before_action :fetch_or_create_place, only: [:create]

      def create
        @place_review = PlaceReview.new(place_review_params.merge({
          place_id: @place.id,
          user_id: @user_id,
        }))

        if @place_review.save
          render :show, status: :ok
        else
          render json: @place_review.errors, status: :unprocessable_entity
        end
      end
    end
  end
end
