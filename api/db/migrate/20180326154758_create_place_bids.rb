class CreatePlaceBids < ActiveRecord::Migration[5.1]
  def change
    create_table :place_bids do |t|
      t.integer :place_id
      t.integer :user_id
      t.integer :bid

      t.timestamps
    end
  end
end
