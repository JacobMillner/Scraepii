class CreateDayTrends < ActiveRecord::Migration
  def change
    create_table :day_trends do |t|
      t.integer :type
      t.decimal :percent
      t.integer :count
      t.datetime :startDate
      t.datetime :endDate
      t.integer :symbolID
      t.integer :dayID

      t.timestamps null: false
    end
  end
end
