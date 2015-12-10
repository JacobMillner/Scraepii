class SyncLogic
  require 'mechanize'
  require 'scrapeLogic'
  require 'htmlMachine'
  require 'common'
  
  class syncOne(symbolId)
    mechanize = Mechanize.new
    sl = ScrapeLogic.new
    @stock_datum = StockDatum.find(symbolId)
    if @stock_datum != nil
      @days = @stock_datum.history_day.all
      @priceData = ScrapeLogic.scrapeAll(@stock_datum.symbol)
      @priceData = Common.prepDataForDatabase(@priceData)
    else
      return false
    end
  end
  
  class syncAll
  end
  
end