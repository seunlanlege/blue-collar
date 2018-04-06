class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, presence: true

  has_many :place_reviews, dependent: :destroy
  has_many :place_bids, dependent: :destroy
  has_many :reward_transactions, dependent: :destroy
  belongs_to :place, required: false

  enum trade: {
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
         other: 18,
       }
  include DeviseTokenAuth::Concerns::User
end
