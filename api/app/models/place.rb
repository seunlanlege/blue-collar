class Place < ApplicationRecord
  validates :title, :google_id, :name, :vicinity, presence: true

  has_many :reviews, foreign_key: "place_id", class_name: "PlaceReview", dependent: :destroy
  has_many :bids, foreign_key: "place_id", class_name: "PlaceBid", dependent: :destroy

  validates_numericality_of(
    :category,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 2,
  )

  enum category: {
    venue: 1, company: 2,
  }

  # This should be a find_by...
  scope :by_google_place, -> (google_id) { where google_id: google_id }
end
