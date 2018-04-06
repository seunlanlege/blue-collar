class PlaceReview < ApplicationRecord
  validates(
    :point_of_contact_type,
    :star_bid_process,
    :star_change_orders_accepted,
    :star_time_respected,
    :star_job_completed,
    :star_payments_satifaction,
    :star_work_with_again,
    :star_overall,
    presence: true,
  )

  validates_numericality_of(
    :star_bid_process,
    :star_change_orders_accepted,
    :star_time_respected,
    :star_job_completed,
    :star_payments_satifaction,
    :star_work_with_again,
    :star_overall,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 5,
  )

  belongs_to :place, required: true
  belongs_to :user, required: true

  enum point_of_contact_type: {
         home_owner: 1,
         business_or_property_manager: 2,
         landlord: 3,
       }
end
