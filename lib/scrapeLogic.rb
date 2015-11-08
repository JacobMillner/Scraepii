class ScrapeLogic
  require 'mechanize'
  
  #this method will build a link that spans two years from the current date
  def buildGoogLink(symbol, startNum = 0)
    currDate = Time.now
    startYear = (currDate.strftime("%Y").to_i - 2).to_s #take two years off current date... I know this is ugly.
    link = 'https://www.google.com/finance/historical?' +
             '&q='+ symbol + 
             '&startdate=' + currDate.strftime('%b') +
             '%20' + currDate.strftime("%d") + 
             '%2C%20' + startYear +
             '&enddate=' + currDate.strftime('%b') +
             '%20' + currDate.strftime("%d") + 
             '%2C%20' + currDate.strftime("%Y") + 
             '&num=200&start=' + startNum.to_s
    puts link #lets print out the link for debugging
    return link
  end
  
  #lets check to see if there is any data for this symbol
  def self.isSymbolValid(symbol)
    mechanize = Mechanize.new
    sl = ScrapeLogic.new
    check = false
    
    if symbol != nil
      googLink = sl.buildGoogLink(symbol)
      page = mechanize.get(googLink)
      prices = page.search('.historical_price').search('tr').map{ |n| n }
      prices = prices.drop(1)
      if prices.count >= 1
        check = true
      end
    end
    
    return check
  end
  
  #pass in a symbol and get 2 years worth of data
  def self.scrapeAll(symbol)
    if symbol != nil
      mechanize = Mechanize.new
      sl = ScrapeLogic.new

      startNum = 0
      googLink = sl.buildGoogLink(symbol)
      page = mechanize.get(googLink)
      prices = page.search('.historical_price').search('tr').map{ |n| n }
      prices = prices.drop(1)
      recordCount = prices.count
      
      #loop through each page until there are less than 200 records..
      #this should mean we have reached the last page
      until recordCount <= 199 do
        startNum += 200
        tempGoogLink = sl.buildGoogLink(symbol, startNum)
        tempPage = mechanize.get(tempGoogLink)
        tempPrices = tempPage.search('.historical_price').search('tr').map{ |n| n }
        prices += tempPrices.drop(1)
        recordCount = tempPrices.count    
      end
      priceList = prices.each_slice(6)
 
    return prices
    
    #if not given a symbol return false
    else
      return false 
    end
  
  
  end
end
  
