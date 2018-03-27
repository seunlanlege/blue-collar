class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :place_reviews, dependent: :destroy
  has_many :place_bids, dependent: :destroy
  has_many :reward_transactions, dependent: :destroy
  belongs_to :place, required: false

  enum trade: {
      carpenter: 0,
      cleanouts_demolition: 1,
      electrician: 2,
      general_contractor: 3,
      gutter: 4,
      fence: 5, framer: 6,
      flooring_tile: 7,
      hvac: 8,
      landscaping: 9,
      mason: 10,
      movers: 11,
      plasterer_or_drywall: 12,
      plumber: 13,
      painter: 14,
      roofer: 15,
      tree_services: 16,
      other: 17 }
  include DeviseTokenAuth::Concerns::User
end
