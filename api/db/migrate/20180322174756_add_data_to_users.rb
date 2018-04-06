class AddDataToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :trade, :integer
    add_column :users, :contactable, :boolean
    add_column :users, :job_position, :integer
    add_column :users, :referral_code, :string, null: false

    add_reference :users, :place, index: true

    add_index :users, :referral_code, unique: true
  end
end
