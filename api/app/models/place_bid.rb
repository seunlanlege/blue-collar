class PlaceBid < ApplicationRecord
    belongs_to :places, foreign_key: :place_id
    belongs_to :users, foreign_key: :user_id
    
    enum bid: { yes: 0, no: 1 }
end
