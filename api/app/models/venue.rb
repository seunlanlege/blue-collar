class Venue < ApplicationRecord
    has_many :venue_reviews, dependent: :destroy
    
    validates :place_id, presence: true
    validates :name, presence: true
    validates :vicinity, presence: true
end
