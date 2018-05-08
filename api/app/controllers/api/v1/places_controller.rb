module Api
  module V1
    class PlacesController < ApplicationController
      def show
        @place = Place.find_by_google_id(params[:id])
        @place.reviews.includes(:chronological)
        # TODO: Write a better query for this.
        @active_bids_count = @place.bids.active.uniq(&:user_id).count
        @group_bids = User.where(id: @place.bids.active.uniq(&:user_id).map(&:user_id)).group(:trade).count

        if @place
          render :show, status: :ok
        else
          render nothing: true, status: 404
        end
      end
    end
  end
end
