class AddDataToUsers < ActiveRecord::Migration[5.1]
  def change
      add_column :users, :first_name, :string
      add_column :users, :last_name, :string
      add_column :users, :trade, :integer
      add_column :users, :strip_token, :string
      add_column :users, :contactable, :boolean
  end
end
