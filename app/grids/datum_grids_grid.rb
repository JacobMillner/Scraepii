class DatumGridsGrid

  include Datagrid

  scope do
    HistoryDay
  end

  filter(:id, :integer)

  column(:id)
  column(:date)
  column(:high)
  column(:low)
  column(:volume)
  column(:points)
  column(:weekOfYear)
  column(:stock_datum_id)
  column(:up)

end
