class PlaceBid < ApplicationRecord
  validates :place_id, :user_id, presence: true

  belongs_to :place
  belongs_to :user

  scope :active, -> { where "created_at >= ?", 6.months.ago }
end
