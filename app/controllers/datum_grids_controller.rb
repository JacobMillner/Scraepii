class DatumGridsController < ApplicationController

  def index
    @params = params[:datum_grids_grid]
    @grid = DatumGridsGrid.new(params[:datum_grids_grid])
    respond_to do |f|
      f.html do
        @grid.scope {|scope| scope.page(params[:page]) }
      end
      f.csv do
        csvGrid = @grid.to_csv
        csvGrid = csvGrid.split.join("\n")
        send_data csvGrid, 
          type: "text/csv", 
          disposition: 'inline', 
          filename: "grid-#{Time.now.to_s}.csv"
      end
    end
  end

end

