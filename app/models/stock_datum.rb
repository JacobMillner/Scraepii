class StockDatum < ActiveRecord::Base
  	has_many :history_day
end
