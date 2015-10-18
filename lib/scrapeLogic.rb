class ScrapeLogic
  require 'mechanize'
  
  #this method will build a link that spans two years from the current date
  def buildGoogLink(symbol)
    currDate = Time.now
    startYear = (currDate.strftime("%Y").to_i - 2).to_s #take two years off current date... I know this is ugly.
    link = 'https://www.google.com/finance/historical?q='+ symbol + 
             '&startdate=' + currDate.strftime('%b') +
             '%20' + currDate.strftime("%d") + 
             '%2C%20' + startYear +
             '&enddate=' + currDate.strftime('%b') +
             '%20' + currDate.strftime("%d") + 
             '%2C%20' + currDate.strftime("%Y") + 
             '&num=200&ei=mxkcVpDiI8WFmAHYvqeQAQ&start=0'
    return link
  end
  
  def self.scrapeAll(symbol)
    sl = ScrapeLogic.new
    googLink = sl.buildGoogLink(symbol)
    if symbol != nil
      return googLink
    else
      return "Default Symbol"
    end
  end
end
  
