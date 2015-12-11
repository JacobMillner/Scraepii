class SyncLogic
  require 'mechanize'
  require 'scrapeLogic'
  require 'htmlMachine'
  require 'common'
  
  def syncOne(symbolId)
    mechanize = Mechanize.new
    sl = ScrapeLogic.new
    @stock_datum = StockDatum.find(symbolId)
    if @stock_datum != nil
      @days = @stock_datum.history_day.all
      @priceData = ScrapeLogic.scrapeAll(@stock_datum.symbol)
      @priceData = Common.prepDataForDatabase(@priceData)
      @priceData.each do |day|
        newDay = HistoryDay.new
        newDay.date = day.date
        newDay.open = day.open
        newDay.close = day.close
        newDay.high = day.high
        newDay.low = day.low
        newDay.volume = day.volume
        newDay.points = day.points
        newDay.weekOfYear = day.weekOfYear
        newDay.stock_datum_id = symbolId
        newDay.save
      end
    else
      return false
    end
  end 
end