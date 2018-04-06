class PlaceBid < ApplicationRecord
  belongs_to :place
  belongs_to :user

  scope :active, -> { where "created_at >= ?", 6.months.ago }
end
