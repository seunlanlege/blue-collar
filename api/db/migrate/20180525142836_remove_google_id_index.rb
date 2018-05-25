class RemoveGoogleIdIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :places, :google_id
  end
end
