class PlaceBid < ApplicationRecord
  belongs_to :place, required: true
  belongs_to :user, required: true

  scope :active, -> { where "created_at >= ?", 6.months.ago }
end
