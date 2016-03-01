class HistoryDaysController < ApplicationController
  before_action :set_history_day, only: [:show, :edit, :update, :destroy]

  # GET /history_days
  # GET /history_days.json
  def index
    @history_days = HistoryDay.all
  end

  # GET /history_days/1
  # GET /history_days/1.json
  def show
  end

  # GET /history_days/new
  def new
    @history_day = HistoryDay.new
  end

  # GET /history_days/1/edit
  def edit
  end

  # POST /history_days
  # POST /history_days.json
  def create
    @history_day = HistoryDay.new(history_day_params)
    @history_day.symbol = @history_day.symbol.upcase
    respond_to do |format|
      if @history_day.save
        format.html { redirect_to @history_day, notice: 'History day was successfully created.' }
        format.json { render :show, status: :created, location: @history_day }
      else
        format.html { render :new }
        format.json { render json: @history_day.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /history_days/1
  # PATCH/PUT /history_days/1.json
  def update
    respond_to do |format|
      if @history_day.update(history_day_params)
        format.html { redirect_to @history_day, notice: 'History day was successfully updated.' }
        format.json { render :show, status: :ok, location: @history_day }
      else
        format.html { render :edit }
        format.json { render json: @history_day.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /history_days/1
  # DELETE /history_days/1.json
  def destroy
    @history_day.destroy
    respond_to do |format|
      format.html { redirect_to history_days_url, notice: 'History day was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_history_day
      @history_day = HistoryDay.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def history_day_params
      params.require(:history_day).permit(:date, :open, :close, :high, :low, :volume, :points, :weekOfYear)
    end
end
