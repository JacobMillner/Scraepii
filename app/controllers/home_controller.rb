class HomeController < ApplicationController
  require 'mechanize'
  
  def index
    mechanize = Mechanize.new
    
    page = mechanize.get('https://www.google.com/finance/historical?cid=22144&startdate=Oct%208%2C%202013&enddate=Oct%207%2C%202015&num=200&ei=mxkcVpDiI8WFmAHYvqeQAQ&start=0')
    page2 = mechanize.get('https://www.google.com/finance/historical?cid=22144&startdate=Oct%208%2C%202013&enddate=Oct%207%2C%202015&num=200&ei=mxkcVpDiI8WFmAHYvqeQAQ&start=200')
    
    @title = page.title
    @historicalData = page.search('.historical_price')
    @date = @historicalData.at('.bb').children[1].text
    @historicalDates = @historicalData.at('.lm').children[0].text
    @foo = @historicalData.children[2].children[3].text
    @count = @historicalData.children[2].count
    @bar = @historicalData.children[2].each {|x| @stuff.push(x.text)}
    
   #@historicalData.children[2].each do |td|
   #       @stuff.push(td.text.strip)
   #end
    @stuff = page.search('.historical_price').search('tr').map{ |n| n } #.text.strip }
    @stuff2 = page2.search('.historical_price').search('tr').map{ |n| n } #.text.strip }
    @stuff += @stuff2
    page.search('#top-results h3').each do |h3|
      puts h3.text.strip
    end
    
    #@date = @date.split(' ')
  end
end
