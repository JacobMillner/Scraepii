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
    	syncl = SyncLogic.new
	finishedMessage = "Sync Finished: "
	symbols = StockDatum.all
	if symbols != nil
		symbols.each do |stock|
			message = syncl.syncOne(stock.id)
			finishedMessage += message + ' '
		end
	end
  	flash[:notice] = finishedMessage
  	redirect_to stock_data_path
  end
  
end
