class CreateRewardTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :reward_transactions do |t|
      t.belongs_to :user, null: false, index: true

      t.integer :tx_type, null: false
      t.integer :redeem_type, null: false
      t.integer :redeem_type, null: false
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
