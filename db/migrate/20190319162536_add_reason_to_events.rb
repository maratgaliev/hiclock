class AddReasonToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :reason, :string, default: ''
  end
end
