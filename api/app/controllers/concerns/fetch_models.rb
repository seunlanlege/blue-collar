module FetchModels
  extend ActiveSupport::Concern

  # Note: This is dependent on ParamsWhitelist to also be included.
  def fetch_or_create_place
    @place = Place
      .find_or_create_by(google_id: place_params.google_id)
      .create_with(place_params)
  end
end
