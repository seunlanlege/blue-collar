class CompanyUser < ApplicationRecord
    user_id: integer, company_id: integer, belongs_to: user, belongs_to: company
    validates :user_id, presence: true
    validates :company_id, presence: true
    validates :user_type, presence: true

    enum user_type: { owner: 0, employee: 1 }
end
