class SyncController < ApplicationController
  require 'scrapeLogic'
  
  def syncSymbol()
    @stock_datum = StockDatum.find(params[:symbol])
    flash[:notice] = 'Sync Successful! Symbol: ' + @stock_datum.symbol + " Num of records: " + @stock_datum.history_day.count.to_s
    redirect_to stock_data_path
  end
  
  def syncAll()
  end
  
end