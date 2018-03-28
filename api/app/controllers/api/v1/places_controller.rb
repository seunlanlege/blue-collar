module Api
  module V1
    class PlacesController < ApplicationController
      before_action :authenticate_user!
      before_action :set_place, only: [:show, :update, :destroy]

      # GET /places
      # GET /places.json
      def index
        @places = Place.all

        @places = @places.by_google_place(params[:google_place_id]) if params[:google_place_id].present?

        render :index, status: :ok

      end

      # GET /places/1
      # GET /places/1.json
      def show
      end

      # POST /places
      # POST /places.json
      def create
        @place = Place.new(place_params)

        if @place.save
          render :show, status: :created
        else
          render json: @place.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /places/1
      # PATCH/PUT /places/1.json
      def update
        if @place.update(place_params)
          render :show, status: :ok
        else
          render json: @place.errors, status: :unprocessable_entity
        end
      end

      # DELETE /places/1
      # DELETE /places/1.json
      def destroy
        @place.destroy
        render body: nil, status: :no_content
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_place
        @place = Place.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def place_params
        params.require(:place).permit(:google_place_id, :name, :vicinity, :category)
      end
    end
  end
end
