class AddUserNameToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :user_name, :string
  end
end
