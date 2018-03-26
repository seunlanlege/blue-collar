module Api
  module V1
    class VenuesController < ApplicationController
      before_action :authenticate_user!
      before_action :set_venue, only: [:show, :update, :destroy]

      # GET /venues
      # GET /venues.json
      def index
        @venues = Venue.all

        @venues = @venues.by_place(params[:place_id]) if params[:place_id].present?

        @venues = @venues.venue_reviews

        render json: { data: @venues }, status: :ok
      end

      # GET /venues/1
      # GET /venues/1.json
      def show
      end

      # POST /venues
      # POST /venues.json
      def create
        @venue = Venue.new(venue_params)

        if @venue.save
          render :show, status: :created, location: @venue
        else
          render json: @venue.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /venues/1
      # PATCH/PUT /venues/1.json
      def update
        if @venue.update(venue_params)
          render :show, status: :ok, location: @venue
        else
          render json: @venue.errors, status: :unprocessable_entity
        end
      end

      # DELETE /venues/1
      # DELETE /venues/1.json
      def destroy
        @venue.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_venue
        @venue = Venue.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def venue_params
        params.require(:venue).permit(:place_id, :name, :vicinity)
      end
    end
  end
end
