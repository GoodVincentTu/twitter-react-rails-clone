class ProfileController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def update
      redirect_to '/'
  end
end
