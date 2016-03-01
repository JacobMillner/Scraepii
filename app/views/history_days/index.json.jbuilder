json.array!(@history_days) do |history_day|
  json.extract! history_day, :id, :date, :open, :close, :high, :low, :volume, :points, :weekOfYear
  json.url history_day_url(history_day, format: :json)
end
