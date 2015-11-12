class StockDatum < ActiveRecord::Base
  has_many :history_days
end
