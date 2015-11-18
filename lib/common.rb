class Common
  #prep all the data, changing strings into dts, ints, etc...
  def self.prepDataForDatabase(priceData)
    common = Common.new
    
    count = 0
    priceData.each do |day|
      #Start By Converting all the strings to correct type
      day.date = day.date.to_datetime
      #day[0] = day[0].to_datetime
      if common.is_number?(day.open)
        day.open = day.open.to_f
      else
        day.open = 0
      end
      if common.is_number?(day.high)
        day.high = day.high.to_f
      else
        day.high = 0
      end
      if common.is_number?(day.low)
        day.low = day.low.to_f
      else
        day.low = 0
      end
      if common.is_number?(day.close)
        day.close = day.close.to_f
      else
        day.close = 0
      end
      if common.is_number?(common.safeTo_i(day.volume)) 
        day.volume = common.safeTo_i(day.volume)
      else
        day.volume = 0
      end
      #figure out what week of the year each record is
      day.weekOfYear = day.date.strftime("%U").to_i
      #calculate ups and down
      if priceData[count+1] != nil
        day.points = (day.close.to_f - priceData[count+1].close.to_f)
      else
        day.points = 0
      end
      if day.points < 0
        day.up = false
      else
        day.up = true
      end
      count = count + 1
    end
    return priceData
  end
  
  #strips the commas out of a string and does .to_i
  def safeTo_i(num)
    num.gsub!(',','') if num.is_a?(String)
    return num.to_i
  end
  
  def is_number? string
    true if Float(string) rescue false
  end
end