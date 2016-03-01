class SyncLogic
  require 'mechanize'
  require 'scrapeLogic'
  require 'htmlMachine'
  require 'common'
  
  #pass in a symbolId and scrape + add up to date data. Returns string message.
  def syncOne(symbolId)
    sl = ScrapeLogic.new
    stockRecords = StockDatum.find(symbolId)
    if stockRecords != nil
      @days = stockRecords.history_day.all
      if @days.count == 0
        #scrape all the records
        priceData = sl.scrapeAll(stockRecords.symbol)
        priceData = Common.prepDataForDatabase(priceData)
        priceData.each do |day|
          newDay = HistoryDay.new
          newDay.date = day.date
          newDay.open = day.open
          newDay.close = day.close
          newDay.high = day.high
          newDay.low = day.low
          newDay.volume = day.volume
          newDay.points = day.points
          newDay.weekOfYear = day.weekOfYear
	        newDay.up = day.up
          newDay.symbol = day.symbol
          newDay.stock_datum_id = symbolId
          newDay.save
        end
        message = 'Sync Successful! Symbol: ' + stockRecords.symbol + " Num of records: " + @days.count.to_s
      else
        #scrape only records from our last date
        daysSince = (Date.today - @days.first.date).to_i
        priceData = sl.scrapeAll(stockRecords.symbol, daysSince)
        priceData = Common.prepDataForDatabase(priceData)
        daysAdded = 0
        priceData.each do |day|
          #only add the day if comes after our last date in the db
          if day.date > @days.first.date
            newDay = HistoryDay.new
            newDay.date = day.date
            newDay.open = day.open
            newDay.close = day.close
            newDay.high = day.high
            newDay.low = day.low
            newDay.volume = day.volume
            newDay.points = day.points
            newDay.weekOfYear = day.weekOfYear
	          newDay.up = day.up
            newDay.symbol = day.symbol
            newDay.stock_datum_id = symbolId
            newDay.save
            daysAdded += 1
          end
        end
        message = 'Current Date: ' + DateTime.now.to_s + ' Number of days since sync:' + daysSince.to_s  + '. Days added to DB:' + daysAdded.to_s
      end
    else
      message = 'ERROR: Symbol does not exist!'
    end
    return message
  end
  
end
