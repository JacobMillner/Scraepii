require 'test_helper'

class HistoryDaysControllerTest < ActionController::TestCase
  setup do
    @history_day = history_days(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:history_days)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create history_day" do
    assert_difference('HistoryDay.count') do
      post :create, history_day: { close: @history_day.close, date: @history_day.date, high: @history_day.high, low: @history_day.low, open: @history_day.open, points: @history_day.points, volume: @history_day.volume, weekOfYear: @history_day.weekOfYear }
    end

    assert_redirected_to history_day_path(assigns(:history_day))
  end

  test "should show history_day" do
    get :show, id: @history_day
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @history_day
    assert_response :success
  end

  test "should update history_day" do
    patch :update, id: @history_day, history_day: { close: @history_day.close, date: @history_day.date, high: @history_day.high, low: @history_day.low, open: @history_day.open, points: @history_day.points, volume: @history_day.volume, weekOfYear: @history_day.weekOfYear }
    assert_redirected_to history_day_path(assigns(:history_day))
  end

  test "should destroy history_day" do
    assert_difference('HistoryDay.count', -1) do
      delete :destroy, id: @history_day
    end

    assert_redirected_to history_days_path
  end
end
