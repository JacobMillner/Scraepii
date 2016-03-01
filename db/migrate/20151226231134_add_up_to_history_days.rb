class AddUpToHistoryDays < ActiveRecord::Migration
  def change
    add_column :history_days, :up, :boolean
  end
end
