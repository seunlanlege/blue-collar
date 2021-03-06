require "administrate/base_dashboard"

class PlaceDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    reviews: Field::HasMany.with_options(class_name: "PlaceReview"),
    bids: Field::HasMany.with_options(class_name: "PlaceBid"),
    id: Field::Number,
    google_id: Field::String,
    name: Field::String,
    formatted_address: Field::String,
    category: Field::String.with_options(searchable: false),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    latitude: Field::String,
    longitude: Field::String,
    state: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :google_id,
    :unit_id,
    :formatted_address,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :reviews,
    :bids,
    :id,
    :google_id,
    :name,
    :formatted_address,
    :category,
    :created_at,
    :updated_at,
    :latitude,
    :longitude,
    :state,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :reviews,
    :bids,
    :google_id,
    :name,
    :formatted_address,
    :category,
    :latitude,
    :longitude,
    :state,
  ].freeze

  # Overwrite this method to customize how places are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(place)
  #   "Place ##{place.id}"
  # end
end
