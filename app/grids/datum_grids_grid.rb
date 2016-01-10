class DatumGridsGrid

  include Datagrid

  scope do
    HistoryDay
  end

  filter(:symbol, :string)
  filter(:id, :integer)
  filter(:stock_datum_id, :integer)
  filter(:high, :float, :range => true)
  filter(:up, :boolean)

  column(:id)
  column(:symbol)
  column(:date)
  column(:high)
  column(:low)
  column(:volume)
  column(:points)
  column(:weekOfYear)
  column(:stock_datum_id)
  column(:up)

end
