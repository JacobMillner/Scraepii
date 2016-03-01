json.array!(@day_trends) do |day_trend|
  json.extract! day_trend, :id, :type, :percent, :count, :startDate, :endDate, :symbolID, :dayID
  json.url day_trend_url(day_trend, format: :json)
end
