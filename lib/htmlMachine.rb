#put all our html generators here
class HtmlMachine
  
  #TODO: make this less ugly
  def self.genTable(priceData)
    html = ''
    if priceData != nil
      html = '<div class="col-lg-8 col-centered well well-xs">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr class="info">
                      <td>Date</td>
                      <td>Open</td>
                      <td>High</td>
                      <td>Low</td>
                      <td>Close</td>
                      <td>Volume</td>
                    </tr>
                  </thead>'
        priceData.each do |hist|
          html += '<tr>'
          hist.each do |day|
            #switch on the type and turn it into a string
            case day
            when DateTime
              day = day.strftime('%x')
            when Float
              day = day.to_s
            when Integer
              day = day.to_s
            end
            html += '<td>' + day + '</td>'
          end
          html += '</tr>'
        end
        html += '</table></div>'
    end
    return html
  end
  
  def self.genChart(prideData)
    html = "<B>Unemplemented!</B>"
    return html
  end
  
end