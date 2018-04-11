module FetchModels
  extend ActiveSupport::Concern

  # Note: This is dependent on ParamsWhitelist to also be included.
  def fetch_or_create_place
    @place = Place
      .create_with(place_params)
      .find_or_create_by(google_id: place_params[:google_id])
  end
end
