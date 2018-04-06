class PlaceBid < ApplicationRecord
  belongs_to :place, required: true
  belongs_to :user, required: true

  # TODO: DISTINCT(place_id, user_id)
  default_scope { order(created_at: :desc) }
  scope :active, -> { where("created_at >= ?", 6.months.ago) }
end
