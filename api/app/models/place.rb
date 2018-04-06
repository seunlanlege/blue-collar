class Place < ApplicationRecord
  validates :title, :google_place_id, :name, :vicinity, presence: true

  has_many :place_reviews, dependent: :destroy
  has_many :place_bids, dependent: :destroy

  validates_numericality_of(
    :category,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 2,
  )

  enum category: {
    venue: 1, company: 2,
  }

  scope :by_google_place, -> (google_place_id) { where google_place_id: google_place_id }
end
