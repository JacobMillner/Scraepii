class HomeController < ApplicationController
  require 'mechanize'
  require 'scrapeLogic'
  require 'htmlMachine'
  require 'common'

  def each_with_prev_next &block
    [nil, *self, nil].each_cons(3, &block)
  end
  
  def index
    @stock_data = StockDatum.all
    mechanize = Mechanize.new
    if params[:symbol] != nil
      page = mechanize.get('https://www.google.com/finance/historical?q='+ params[:symbol] + '&startdate=Oct%208%2C%202013&enddate=Oct%207%2C%202015&num=200&ei=mxkcVpDiI8WFmAHYvqeQAQ&start=0')
      @title = page.title
      @priceData = ScrapeLogic.scrapeAll(params[:symbol])
      @priceData = Common.prepDataForDatabase(@priceData)
      upData = []
      @priceData.each_with_prev_next do |prev, current, nex|      
        if !current.up
          percentDown = current.points * 100 / prev.close
          upData.push(percentDown)
        end
      end
      @meanFin = upData.inject{ |sum, el| sum + el }.to_f / upData.size
      @meanFin
      @table = HtmlMachine.genBasicTable(@priceData)
    else
      #default
      @title = "Please Input A Symbol"
      @priceData = []
      @meanFin = 0
      @table = HtmlMachine.genBasicTable(@priceData)
    end 
  end
end
