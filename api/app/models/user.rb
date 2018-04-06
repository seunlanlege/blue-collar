class User < ActiveRecord::Base
  before_create :add_referral_code

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  validates :email, presence: true

  validates_numericality_of(
    :trade,
    only_integer: true, allow_nil: true,
    greater_than_or_equal_to: 0, less_than_or_equal_to: 18,
  )

  has_many :place_reviews, dependent: :destroy
  has_many :place_bids, dependent: :destroy
  has_many :reward_transactions, dependent: :destroy
  belongs_to :place, required: false

  enum trade: {
         other: 0,
         carpenter: 1,
         cleanouts_demolition: 2,
         electrician: 3,
         general_contractor: 4,
         gutter: 5,
         fence: 6,
         framer: 7,
         flooring_tile: 8,
         hvac: 9,
         landscaping: 10,
         mason: 11,
         movers: 12,
         plasterer_or_drywall: 13,
         plumber: 14,
         painter: 15,
         roofer: 16,
         tree_services: 17,
       }

  private

  def add_referral_code
    code = gen_code
    while User.find_by(referral_code: code)
      code = gen_code
    end

    self.referral_code = code
  end

  def gen_code
    SecureRandom.urlsafe_base64(6)
  end
end
