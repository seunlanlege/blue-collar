class AddCompaniesUsers < ActiveRecord::Migration[5.1]
  def change
      create_table :companies_users do |t|
        t.integer :company_id
        t.integer :user_id
        t.integer :user_type

        t.timestamps
      end
  end
end
