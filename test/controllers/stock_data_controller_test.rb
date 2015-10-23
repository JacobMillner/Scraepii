require 'test_helper'

class StockDataControllerTest < ActionController::TestCase
  setup do
    @stock_datum = stock_data(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:stock_data)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create stock_datum" do
    assert_difference('StockDatum.count') do
      post :create, stock_datum: { symbol: @stock_datum.symbol }
    end

    assert_redirected_to stock_datum_path(assigns(:stock_datum))
  end

  test "should show stock_datum" do
    get :show, id: @stock_datum
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @stock_datum
    assert_response :success
  end

  test "should update stock_datum" do
    patch :update, id: @stock_datum, stock_datum: { symbol: @stock_datum.symbol }
    assert_redirected_to stock_datum_path(assigns(:stock_datum))
  end

  test "should destroy stock_datum" do
    assert_difference('StockDatum.count', -1) do
      delete :destroy, id: @stock_datum
    end

    assert_redirected_to stock_data_path
  end
end
