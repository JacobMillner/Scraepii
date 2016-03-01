json.array!(@stock_data) do |stock_datum|
  json.extract! stock_datum, :id, :symbol
  json.url stock_datum_url(stock_datum, format: :json)
end
