class Company < ApplicationRecord
    has_and_belongs_to_many :users, through: :companies_users
end
