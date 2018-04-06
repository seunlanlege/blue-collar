module Api
  module V1
    class PlacesController < ApplicationController
      before_action :authenticate_user!

      def show
        @place = Place.find(params[:id]).preload(:reviews)
        @active_bids_count = @place.bids.active.count

        if @place
          render :show, status: :ok
        else
          render nothing: true, status: 404
        end
      end
    end
  end
end
