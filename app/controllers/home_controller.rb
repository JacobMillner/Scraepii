class HomeController < ApplicationController
  require 'mechanize'
  require 'scrapeLogic'
  
  def index
    mechanize = Mechanize.new
    if params[:symbol] != nil
      page = mechanize.get('https://www.google.com/finance/historical?q='+ params[:symbol] + '&startdate=Oct%208%2C%202013&enddate=Oct%207%2C%202015&num=200&ei=mxkcVpDiI8WFmAHYvqeQAQ&start=0')
          @title = page.title
          @priceData =ScrapeLogic.scrapeAll(params[:symbol])
    else
      #default
      @title = "Please Input A Symbol"
      @priceData = []
    end 
  end
end
