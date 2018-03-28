class RewardTransaction < ApplicationRecord
    belongs_to :user

    enum tx_type: { earned_review: 0, earned_referal: 1, redeemed: 2 }
    enum redeem_type: { hat: 0, shirt: 1, sweater: 2, truck: 3 }
end
