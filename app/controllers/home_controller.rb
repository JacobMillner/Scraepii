class HomeController < ApplicationController
  require 'mechanize'
  
  def index
    mechanize = Mechanize.new
    page = mechanize.get('https://www.google.com/finance/historical?q=NASDAQ%3AAAPL')
    @title = page.title
    @historicalData = page.search('.historical_price')
    #@date = @date.split(' ')
  end
end
