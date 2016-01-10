class ScrapeLogic
  require 'mechanize'
  require 'day'
  
  #this method will build a link that spans two years from the current date
  #defaults start number at 0 and how many records we show at a time to 200
  def buildGoogLink(symbol, startNum = 0, numToScrape = 200)
    currDate = Time.now
    symbol.gsub!(':','%3A') #clean out any index colons
    startYear = (currDate.strftime("%Y").to_i - 2).to_s #take two years off current date...
    link = 'https://www.google.com/finance/historical?' +
             '&q='+ symbol + 
             '&startdate=' + currDate.strftime('%b') +
             '%20' + currDate.strftime("%d") + 
             '%2C%20' + startYear +
             '&enddate=' + currDate.strftime('%b') +
             '%20' + currDate.strftime("%d") + 
             '%2C%20' + currDate.strftime("%Y") + 
             '&num=' + numToScrape.to_s + '&start=' + startNum.to_s
    puts link #lets print out the link for debugging
    return link
  end
  
  #lets check to see if there is any data for this symbol
  def isSymbolValid(symbol)
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
  
  #no data for the symbol found? lets try matching it with an index
  def tryMatchIndex(symbol)
    mechanize = Mechanize.new
    sl = ScrapeLogic.new
    indexSymbol = ''
    if symbol != nil
      indexArray = ['NYSEMKT', 'NYSE', 'NASDAQ']
      indexArray.each do |index|
        tempSymbol = index + ':' + symbol
        if sl.isSymbolValid(tempSymbol)
          return indexSymbol = index + ':' + symbol
        end
      end
    end
    return indexSymbol
  end
  
  #pass in a symbol and get 2 years worth of data
  #or also pass in how many days to scrape
  def scrapeAll(symbol, daysSinceSync = 0)
    if symbol != nil
      mechanize = Mechanize.new
      sl = ScrapeLogic.new
      startNum = 0
      if daysSinceSync == 0
        googLink = sl.buildGoogLink(symbol)
      else
        googLink = sl.buildGoogLink(symbol,0,daysSinceSync)
      end
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
    #lets split up and throw it into our Day object to make it easier to access
    #This is ugly because of the way the data gets scarped..
    stockHistory = []
    prices.each do |data|
      day = Day.new
      day.date = data.children[1].text.strip
      day.open = data.children[2].text.strip
      day.high = data.children[3].text.strip
      day.low = data.children[4].text.strip
      day.close = data.children[5].text.strip
      day.volume = data.children[6].text.strip
      day.symbol = symbol.upcase
      stockHistory.push(day)
    end
    return stockHistory 
    else
      #if not given a symbol return false
      return false 
    end
  
  
  end
end
  
