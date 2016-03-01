class AddSymbolToHistoryDays < ActiveRecord::Migration
  def change
    add_column :history_days, :symbol, :string
  end
end
