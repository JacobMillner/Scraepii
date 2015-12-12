class SyncController < ApplicationController
  require 'syncLogic'
  
  def syncSymbol()
    syncl = SyncLogic.new
    @stock_datum = StockDatum.find(params[:symbol])
    if @stock_datum != nil
      message = syncl.syncOne(params[:symbol])
      flash[:notice] = message
      redirect_to stock_data_path
    else
      flash[:notice] = 'ERROR: Unknown symbol buddy!'
      redirect_to stock_data_path
    end
  end
  
  def syncAll()
  end
  
end