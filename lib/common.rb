class Common
  #prep all the data, changing strings into dts, ints, etc...
  def self.prepDataForDatabase(priceData)
    common = Common.new
    
    count = 0
    priceData.each do |day|
      #Start By Converting all the strings to correct type
      day[0] = day[0].to_datetime
      if common.is_number?(day[1])
        day[1] = day[1].to_f
      else
        day[1] = 0
      end
      if common.is_number?(day[2])
        day[2] = day[2].to_f
      else
        day[2] = 0
      end
      if common.is_number?(day[3])
        day[3] = day[3].to_f
      else
        day[3] = 0
      end
      if common.is_number?(day[4])
        day[4] = day[4].to_f
      else
        day[4] = 0
      end
      if common.is_number?(common.safeTo_i(day[5])) 
        day[5] = common.safeTo_i(day[5])
      else
        day[5] = 0
      end
      
      #figure out what week of the year each record is
      day[6] = day[0].strftime("%U").to_i
      
      #calculate ups and down
      #if common.hasComparableDay?
          #day[7] = priceData[count-1][4].to_f
      #end
      
      count = count + 1
    end
    return priceData
  end
  
  #checks to see if there is a previous close to compare current close to
  #def hasComparableDay?(priceData, count)
    #if count >= 1 && priceData[count-1] != nil && priceData[count-1][4]
      #return true
    #else
      #return false
   # end
  #end
  
  #strips the commas out of a string and does .to_i
  def safeTo_i(num)
    num.gsub!(',','') if num.is_a?(String)
    return num.to_i
  end
  
  def is_number? string
    true if Float(string) rescue false
  end
end