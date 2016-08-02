class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )

    if user
      log_in(user)
      render json: user
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    log_out
  end
end
