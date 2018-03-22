class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
        t.integer :place_id
        t.integer :name
        t.integer :vicinity

        t.timestamps
    end
  end
end
