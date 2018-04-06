class PlaceReview < ApplicationRecord
  validates(
    :poc_name,
    :poc_type,
    :star_change_orders_accepted,
    :star_time_respected,
    :star_job_completed,
    :star_payments_satifaction,
    :star_work_with_again,
    presence: true,
  )

  validates_numericality_of(
    :star_bid_process,
    :star_change_orders_accepted,
    :star_time_respected,
    :star_job_completed,
    :star_payments_satifaction,
    :star_work_with_again,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 5,
  )

  validates_numericality_of(
    :poc_type,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 3,
  )

  validates_numericality_of(
    :dollars_lost,
    greater_than: 0,
  )

  belongs_to :place, required: true
  belongs_to :user, required: true

  enum poc_type: {
    home_owner: 1,
    business_or_property_manager: 2,
    landlord: 3,
  }

  scope :chronological, -> { order(created_at: :desc) }
end
