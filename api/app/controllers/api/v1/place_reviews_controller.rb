module Api
  module V1
    class PlaceReviewsController < ApplicationController
      before_action :authenticate_user!
      before_action :set_place_review, only: [:show, :update, :destroy]

      # GET /place_reviews
      # GET /place_reviews.json
      def index
        @place_reviews = PlaceReview.all
        render :index, status: :ok
      end

      def show
      end

      # POST /place_reviews
      # POST /place_reviews.json
      def create
        place = Place.find_or_create_by(place_params)
        @place_review = PlaceReview.new(place_review_params.merge({place_id: place.id}))

        if @place_review.save
          render :show, status: :ok
        else
          render json: @place_review.errors, status: :unprocessable_entity
        end
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_place_review
        @place_review = PlaceReview.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def place_review_params
        params.require(:place_review).permit(
          :place,
          :reviewer_id,
          :client_name,
          :point_of_contact_type,
          :comments,
          :star_bid_process,
          :star_change_orders_accepted,
          :star_time_respected,
          :star_job_completed,
          :star_payments_satifaction,
          :star_work_with_again,
          :star_overall,
          :bought_materials,
          :other_party_involved,
          :dollars_lost
        )
      end

      def place_params
        params[:place_review].require(:place).permit(:google_place_id, :name, :vicinity, :category)
      end
    end
  end
end
