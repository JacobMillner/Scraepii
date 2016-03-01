class AddStockDatumIdToHistoryDay < ActiveRecord::Migration
  def change
    add_column :history_days, :stock_datum_id, :integer
  end
end
