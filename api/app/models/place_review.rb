class PlaceReview < ApplicationRecord
    belongs_to :places, foreign_key: :place_id
    belongs_to :users, foreign_key: :user_id

    enum point_of_contact_type: { home_owner: 0, business_or_property_manager: 1, landlord: 2 }
end
