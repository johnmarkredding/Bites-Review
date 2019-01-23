class Api::V1::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end
  def search
    @restaurant = Restaurant.find_by(name: restaurant_params[:name])
    render json: @restaurant
  end

  private
  def restaurant_params
    params.permit(:name)
  end
end
