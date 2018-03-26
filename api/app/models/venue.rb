class Venue < ApplicationRecord
    has_many :venue_reviews, dependent: :destroy

    scope :by_place, -> (place_id) { where place_id: place_id }
end
