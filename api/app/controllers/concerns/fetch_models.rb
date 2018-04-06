module FetchModels
  extend ActiveSupport::Concern

  def fetch_place
    @place = Place.find(params[:place_id])
  end
end
