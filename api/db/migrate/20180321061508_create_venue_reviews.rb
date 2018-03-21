class CreateVenueReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :venue_reviews do |t|
      t.integer :venue_id, index: true, foreign_key: true
      t.integer :reviewer_id, index: true, foreign_key: true
      t.enum :point_of_contact_type
      t.text :comments
      t.integer :star_bid_process
      t.integer :star_change_orders_accepted
      t.integer :star_time_respected
      t.integer :star_job_completed
      t.integer :star_payments_satifaction
      t.integer :star_work_with_again
      t.float :star_overall
      t.boolean :bought
      t.boolean :other_party_involved
      t.decimal :dollars_lost, precision: 8, scale: 2

      t.timestamps
    end
  end
end
