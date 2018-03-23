class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :place_id
      t.string :name
      t.string :vicinity

      t.timestamps
    end
  end
end
