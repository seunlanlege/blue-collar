class PlaceReview < ApplicationRecord
    belongs_to :place
    belongs_to :user, foreign_key: :reviewer_id, required: false

    enum point_of_contact_type: { home_owner: 0, business_or_property_manager: 1, landlord: 2 }
end
