class StockDatum < ActiveRecord::Base
  	has_many :history_day
    before_save :upcaseSymbol
  
  def upcaseSymbol
    self.symbol.upcase!
  end
end
