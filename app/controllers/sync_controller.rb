class SyncController < ApplicationController
  require 'syncLogic'
  
  def syncSymbol()
    syncl = SyncLogic.new
    @stock_datum = StockDatum.find(params[:symbol])
    @days = @stock_datum.history_day.all
    flash[:notice] = 'Sync Successful! Symbol: ' + @stock_datum.symbol + " Num of records: " + @days.count.to_s
    if @days.count > 0
      
    else
      syncl.syncOne(params[:symbol])
      @priceData = ScrapeLogic.scrapeAll(@stock_datum.symbol)
      @priceData = Common.prepDataForDatabase(@priceData)
      #foreach day in
    end
    redirect_to stock_data_path
  end
  
  def syncAll()
  end
  
end