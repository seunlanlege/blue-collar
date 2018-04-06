module Api
  module V1
    class PlacesController < ApplicationController
      before_action :authenticate_user!

      def show
        @place = Place.find(params[:id]).preload(:reviews)
        # TODO: Write a better query for this.
        @active_bids_count = @place.bids.active.uniq(&:user_id).count

        if @place
          render :show, status: :ok
        else
          render nothing: true, status: 404
        end
      end
    end
  end
end
