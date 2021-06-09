class AddUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    add_index :users, :username, unique: true
    add_column :users, :is_signed_in, :boolean, default: true
  end
end
