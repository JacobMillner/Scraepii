class SyncController < ApplicationController
  require 'scrapeLogic'
  def syncSymbol
    flash[:notice] = 'Sync Successful!'
    redirect_to stock_data_path
  end
end