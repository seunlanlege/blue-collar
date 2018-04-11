class RewardTransaction < ApplicationRecord
  belongs_to :user

  validates_numericality_of(
    :tx_type,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 3,
  )

  validates_numericality_of(
    :redeem_type,
    only_integer: true, greater_than: 0, less_than_or_equal_to: 4,
  )

  validates_numericality_of(
    :amount,
    only_integer: true, greater_than: 0,
  )

  enum tx_type: {
         earned_review: 1,
         earned_referal: 2,
         redeemed: 3,
       }

  enum redeem_type: {
         hat: 1,
         shirt: 2,
         sweater: 3,
         truck: 4,
       }
end
