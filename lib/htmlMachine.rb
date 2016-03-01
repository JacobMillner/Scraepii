#put all our html generators here
class HtmlMachine
  
  def self.genBasicTable(priceData)
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
                      <td>Week of Year</td>
                      <td>Points</td>
                    </tr>
                  </thead>'
        priceData.each do |day|
          #TODO: add this to db table
          #if day.up
            #html += '<tr class="success">'
          #else
            #html += '<tr class="danger">'
          #end
            html += '<td>' + day.date.strftime('%x') + '</td>'
            html += '<td>' + day.open.to_s + '</td>'
            html += '<td>' + day.high.to_s + '</td>'
            html += '<td>' + day.low.to_s + '</td>'
            html += '<td>' + day.close.to_s + '</td>'
            html += '<td>' + day.volume.to_s + '</td>'
            html += '<td>' + day.weekOfYear.to_s + '</td>'
            html += '<td>' + day.points.to_s + '</td>'
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