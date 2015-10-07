class HomeController < ApplicationController
  require 'mechanize'
  
  def index
    mechanize = Mechanize.new
    page = mechanize.get('https://www.google.com/finance/historical?q=NASDAQ%3AAAPL')
    @title = page.title
    @historicalData = page.search('.historical_price')
    @date = @historicalData.at('.bb').children[1].text
    @historicalDates = @historicalData.at('.lm').children[0].text
    #@date = @date.split(' ')
  end
end
