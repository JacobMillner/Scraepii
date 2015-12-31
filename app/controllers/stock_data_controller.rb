class StockDataController < ApplicationController
  before_action :set_stock_datum, only: [:show, :edit, :update, :destroy]
  require 'scrapeLogic'
  require 'htmlMachine'

  # GET /stock_data
  # GET /stock_data.json
  def index
    @stock_data = StockDatum.all
  end
  
  # GET /stock_data/1
  # GET /stock_data/1.json
  def show
    @priceData = @stock_datum.history_day.all
    @close1 = @priceData.group(:date).maximum(:close).first(10)
    @close2 = @priceData.group(:date).maximum(:close).first(100)
    foo = @close2.collect { |k, v| v }
    @graphMin = foo.min
    @graphMax = foo.max
    @table = HtmlMachine.genBasicTable(@priceData)
  end

  # GET /stock_data/new
  def new
    @stock_datum = StockDatum.new
  end

  # GET /stock_data/1/edit
  def edit
  end

  # POST /stock_data
  # POST /stock_data.json
  def create
    #add single
    if params[:stock_datum].present?
      stockForm = params[:stock_datum]
      if ScrapeLogic.isSymbolValid(stockForm[:symbol])
        if !StockDatum.where(:symbol => stockForm[:symbol]).present?
          @stock_datum = StockDatum.new(stock_datum_params)
          respond_to do |format|
            if @stock_datum.save
              format.html { redirect_to @stock_datum, notice: 'Stock datum was successfully created.' }
              format.json { render :show, status: :created, location: @stock_datum }
            else
              format.html { render :new }
              format.json { render json: @stock_datum.errors, status: :unprocessable_entity }
            end
          end
        else
          flash[:notice] = 'Symbol' + stockForm[:symbol] + ' is already in the database!'
        end
      else
        flash[:notice] = 'Symbol' + stockForm[:symbol] + ' does not exist.'
        redirect_to stock_data_path
      end
    end
    #multi-add
    if params[:multi_symbols].present?
      symbols = params[:multi_symbols].split(/\W+/)
      if symbols.count > 0
        symbolsAdded = []
        symbols.each do |symbol|
          symbol.upcase!
          if ScrapeLogic.isSymbolValid(symbol)
	    newSymbol =  StockDatum.new
	    newSymbol.symbol = symbol
	    newSymbol.save
            symbolsAdded.push(symbol)
          end
        end			
      	flash[:notice] = 'Valid Symbols added: ' + symbolsAdded.join(" ")
      end
      redirect_to stock_data_path
    end
  end

  # PATCH/PUT /stock_data/1
  # PATCH/PUT /stock_data/1.json
  def update
    respond_to do |format|
      if @stock_datum.update(stock_datum_params)
        format.html { redirect_to @stock_datum, notice: 'Stock datum was successfully updated.' }
        format.json { render :show, status: :ok, location: @stock_datum }
      else
        format.html { render :edit }
        format.json { render json: @stock_datum.errors, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /stock_data/1
  # DELETE /stock_data/1.json
  def destroy
    @stock_datum.history_day.destroy_all
    @stock_datum.destroy
    respond_to do |format|
      format.html { redirect_to stock_data_url, notice: 'Stock datum was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock_datum
        @stock_datum = StockDatum.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stock_datum_params
      params.require(:stock_datum).permit(:symbol)
    end
    
    def multi_stock_datum_params
      params.require(:multi_stock_datum)
    end
end
