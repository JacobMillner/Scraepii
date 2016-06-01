class StaticPagesController < ApplicationController
  def landing
      render :layout => false
  end
end
