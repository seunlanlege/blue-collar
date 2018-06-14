module Api
  module V1
    class ReviewsController < ApplicationController
      def index
        @place_reviews = PlaceReview.recent(20)
        @users = User.where(id: @place_reviews.map(&:user_id))
        @places = Place.where(id: @place_reviews.map(&:place_id))

        render :index, status: :ok
      end
    end
  end
end
