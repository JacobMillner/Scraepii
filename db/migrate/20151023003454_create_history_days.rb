class CreateHistoryDays < ActiveRecord::Migration
  def change
    create_table :history_days do |t|
      t.date :date
      t.float :open
      t.float :close
      t.float :high
      t.float :low
      t.float :volume
      t.float :points
      t.integer :weekOfYear

      t.timestamps null: false
    end
  end
end
