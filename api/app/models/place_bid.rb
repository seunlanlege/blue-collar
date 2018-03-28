class PlaceBid < ApplicationRecord
    belongs_to :place
    belongs_to :user

    enum bid: { yes: 0, no: 1 }
end
