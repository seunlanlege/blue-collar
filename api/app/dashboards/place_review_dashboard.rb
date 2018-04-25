require "administrate/base_dashboard"

class PlaceReviewDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    place: Field::BelongsTo,
    user: Field::BelongsTo,
    id: Field::Number,
    poc_name: Field::String,
    client_name: Field::String,
    string: Field::String,
    poc_type: Field::String.with_options(searchable: false),
    star_bid_process: Field::Number,
    star_change_orders_accepted: Field::Number,
    star_time_respected: Field::Number,
    star_job_completed: Field::Number,
    star_payments_satifaction: Field::Number,
    star_work_with_again: Field::Number,
    comments: Field::Text,
    bought_materials: Field::Boolean,
    other_party_involved: Field::Boolean,
    dollars_lost: Field::String.with_options(searchable: false),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    star_overall: Field::Number,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :place,
    :user,
    :id,
    :poc_name,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :place,
    :user,
    :id,
    :poc_name,
    :client_name,
    :string,
    :poc_type,
    :star_bid_process,
    :star_change_orders_accepted,
    :star_time_respected,
    :star_job_completed,
    :star_payments_satifaction,
    :star_work_with_again,
    :comments,
    :bought_materials,
    :other_party_involved,
    :dollars_lost,
    :created_at,
    :updated_at,
    :star_overall,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :place,
    :user,
    :poc_name,
    :client_name,
    :string,
    :poc_type,
    :star_bid_process,
    :star_change_orders_accepted,
    :star_time_respected,
    :star_job_completed,
    :star_payments_satifaction,
    :star_work_with_again,
    :comments,
    :bought_materials,
    :other_party_involved,
    :dollars_lost,
    :star_overall,
  ].freeze

  # Overwrite this method to customize how place reviews are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(place_review)
  #   "PlaceReview ##{place_review.id}"
  # end
end
