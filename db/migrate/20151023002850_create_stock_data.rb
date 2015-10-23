class CreateStockData < ActiveRecord::Migration
  def change
    create_table :stock_data do |t|
      t.string :symbol

      t.timestamps null: false
    end
  end
end
