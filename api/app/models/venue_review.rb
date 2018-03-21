class VenueReview < ApplicationRecord
    belongs_to :user, foreign_key: :reviewer_id
    belongs_to :venue, foreign_key: :venue_id
    
    validates :venue_id presence: true
    validates :reviewer_id presence: true
    validates :star_bid_process, numericality: { only_integer: true, less_than_or_equal_to: 5 }
    validates :star_change_orders_accepted, numericality: { only_integer: true, less_than_or_equal_to: 5 }
    validates :star_time_respected, numericality: { only_integer: true, less_than_or_equal_to: 5 }
    validates :star_job_completed, numericality: { only_integer: true, less_than_or_equal_to: 5 }
    validates :star_payments_satifaction, numericality: { only_integer: true, less_than_or_equal_to: 5 }
    validates :star_work_with_again, numericality: { only_integer: true, less_than_or_equal_to: 5 }
    validates :star_overall, numericality: { less_than_or_equal_to: 5 }

    enum point_of_contact_type: [ :home_owner, :business_or_property_manager, :landlord]
end
