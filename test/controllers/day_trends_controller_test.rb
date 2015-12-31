require 'test_helper'

class DayTrendsControllerTest < ActionController::TestCase
  setup do
    @day_trend = day_trends(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:day_trends)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create day_trend" do
    assert_difference('DayTrend.count') do
      post :create, day_trend: { count: @day_trend.count, dayID: @day_trend.dayID, endDate: @day_trend.endDate, percent: @day_trend.percent, startDate: @day_trend.startDate, symbolID: @day_trend.symbolID, type: @day_trend.type }
    end

    assert_redirected_to day_trend_path(assigns(:day_trend))
  end

  test "should show day_trend" do
    get :show, id: @day_trend
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @day_trend
    assert_response :success
  end

  test "should update day_trend" do
    patch :update, id: @day_trend, day_trend: { count: @day_trend.count, dayID: @day_trend.dayID, endDate: @day_trend.endDate, percent: @day_trend.percent, startDate: @day_trend.startDate, symbolID: @day_trend.symbolID, type: @day_trend.type }
    assert_redirected_to day_trend_path(assigns(:day_trend))
  end

  test "should destroy day_trend" do
    assert_difference('DayTrend.count', -1) do
      delete :destroy, id: @day_trend
    end

    assert_redirected_to day_trends_path
  end
end
