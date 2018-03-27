module Api
  module V1
    class PlaceReviewsController < ApplicationController
      before_action :authenticate_user!
      before_action :set_place_review, only: [:show, :update, :destroy]

      # GET /place_reviews
      # GET /place_reviews.json
      def index
        @place_reviews = PlaceReview.all
      end

      # GET /place_reviews/1
      # GET /place_reviews/1.json
      def show
      end

      # POST /place_reviews
      # POST /place_reviews.json
      def create
        place = Place.find_or_create_by(place_params)
        @place_review = PlaceReview.new(place_review_params.merge({place_id: place.id}))

        if @place_review.save
          render json: {data: @place_review}, status: :ok
        else
          render json: @place_review.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /place_reviews/1
      # PATCH/PUT /place_reviews/1.json
      def update
        if @place_review.update(place_review_params)
          render :show, status: :ok, location: @place_review
        else
          render json: @place_review.errors, status: :unprocessable_entity
        end
      end

      # DELETE /place_reviews/1
      # DELETE /place_reviews/1.json
      def destroy
        @place_review.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_place_review
        @place_review = PlaceReview.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def place_review_params
        params.require(:place_review).permit(:place, :reviewer_id, :point_of_contact_type, :comments, :star_bid_process, :star_change_orders_accepted, :star_time_respected, :star_job_completed, :star_payments_satifaction, :star_work_with_again, :star_overall, :bought_materials, :other_party_involved, :dollars_lost)
      end

      def place_params
        params[:place_review].require(:place).permit(:google_place_id, :name, :vicinity)
      end
    end
  end
end
