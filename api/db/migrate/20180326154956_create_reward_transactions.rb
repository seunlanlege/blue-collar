class CreateRewardTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :reward_transactions do |t|
      t.integer :user_id
      t.integer :tx_type
      t.integer :redeem_type
      t.integer :redeem_type
      t.integer :amount

      t.timestamps
    end
  end
end
