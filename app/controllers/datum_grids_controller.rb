class DatumGridsController < ApplicationController

  def index
    @grid = DatumGridsGrid.new(params[:datum_grids_grid]) do |scope|
      scope.page(params[:page])
    end
  end

end

