class DayTrendsController < ApplicationController
  before_action :set_day_trend, only: [:show, :edit, :update, :destroy]

  # GET /day_trends
  # GET /day_trends.json
  def index
    @day_trends = DayTrend.all
  end

  # GET /day_trends/1
  # GET /day_trends/1.json
  def show
  end

  # GET /day_trends/new
  def new
    @day_trend = DayTrend.new
  end

  # GET /day_trends/1/edit
  def edit
  end

  # POST /day_trends
  # POST /day_trends.json
  def create
    @day_trend = DayTrend.new(day_trend_params)

    respond_to do |format|
      if @day_trend.save
        format.html { redirect_to @day_trend, notice: 'Day trend was successfully created.' }
        format.json { render :show, status: :created, location: @day_trend }
      else
        format.html { render :new }
        format.json { render json: @day_trend.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /day_trends/1
  # PATCH/PUT /day_trends/1.json
  def update
    respond_to do |format|
      if @day_trend.update(day_trend_params)
        format.html { redirect_to @day_trend, notice: 'Day trend was successfully updated.' }
        format.json { render :show, status: :ok, location: @day_trend }
      else
        format.html { render :edit }
        format.json { render json: @day_trend.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /day_trends/1
  # DELETE /day_trends/1.json
  def destroy
    @day_trend.destroy
    respond_to do |format|
      format.html { redirect_to day_trends_url, notice: 'Day trend was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_day_trend
      @day_trend = DayTrend.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def day_trend_params
      params.require(:day_trend).permit(:type, :percent, :count, :startDate, :endDate, :symbolID, :dayID)
    end
end
