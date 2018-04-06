class AddDataToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :trade, :integer
    add_column :users, :strip_token, :string # what is this?
    add_column :users, :contactable, :boolean
    add_column :users, :job_position, :string

    add_reference :users, :place, index: true
  end
end
