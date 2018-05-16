class Place < ApplicationRecord
  validates :google_id, :name, :formatted_address, :latitude, :longitude, :state, presence: true

  has_many :reviews, foreign_key: "place_id", class_name: "PlaceReview", dependent: :destroy
  has_many :bids, foreign_key: "place_id", class_name: "PlaceBid", dependent: :destroy

  validates_numericality_of(
    :category,
    only_integer: true,
    greater_than: 0, less_than_or_equal_to: 2,
  )

  enum category: {
    company: 1,
    venue: 2,
  }

  before_save :normalize_unit_id

  def normalize_unit_id
    self.unit_id = self.unit_id.upcase.delete("#").delete("APT.").delete("APT").strip unless self.unit_id.blank?
  end
end
