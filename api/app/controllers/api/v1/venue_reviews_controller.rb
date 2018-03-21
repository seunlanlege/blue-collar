class VenueReviewsController < ApplicationController
  before_action :set_venue_review, only: [:show, :update, :destroy]

  # GET /venue_reviews
  # GET /venue_reviews.json
  def index
    @venue_reviews = VenueReview.all
  end

  # GET /venue_reviews/1
  # GET /venue_reviews/1.json
  def show
  end

  # POST /venue_reviews
  # POST /venue_reviews.json
  def create
    @venue_review = VenueReview.new(venue_review_params)

    if @venue_review.save
      render :show, status: :created, location: @venue_review
    else
      render json: @venue_review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /venue_reviews/1
  # PATCH/PUT /venue_reviews/1.json
  def update
    if @venue_review.update(venue_review_params)
      render :show, status: :ok, location: @venue_review
    else
      render json: @venue_review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /venue_reviews/1
  # DELETE /venue_reviews/1.json
  def destroy
    @venue_review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_venue_review
      @venue_review = VenueReview.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def venue_review_params
      params.require(:venue_review).permit(:point_of_contact_type, :comments, :star_bid_process, :star_change_orders_accepted, :star_time_respected, :star_job_completed, :star_payments_satifaction, :star_work_with_again, :star_overall, :bought, :other_party_involved, :dollars_lost)
    end
end
