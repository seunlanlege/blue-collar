class Place < ApplicationRecord
    has_many :place_reviews, dependent: :destroy
    has_many :place_bids, dependent: :destroy

    scope :by_google_place, -> (google_place_id) { where google_place_id: google_place_id }
end
