class CreatePlaceReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :place_reviews do |t|
      t.integer :place_id
      t.integer :reviewer_id
      t.integer :point_of_contact_type
      t.text :comments
      t.integer :star_bid_process
      t.integer :star_change_orders_accepted
      t.integer :star_time_respected
      t.integer :star_job_completed
      t.integer :star_payments_satifaction
      t.integer :star_work_with_again
      t.integer :star_overall
      t.boolean :bought_materials
      t.boolean :other_party_involved
      t.decimal :dollars_lost, precision: 8, scale: 2

      t.timestamps
    end
  end
end
