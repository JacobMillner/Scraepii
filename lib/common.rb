class Common
  #prep all the data, changing strings into dts, ints, etc...
  def self.prepDataForDatabase(priceData)
    priceData.each do |day|
      day[0] = day[0].to_datetime
      day[1] = day[1].to_f
      day[2] = day[2].to_f
      day[3] = day[3].to_f
      day[4] = day[4].to_f
      #having problems with the volume
      #day[5] = day[5].to_i
    end
    return priceData
  end
end