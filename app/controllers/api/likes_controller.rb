class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(user_id: current_user.id, post_id: like_params[:post_id])
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 400
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like
  end

  private

  def like_params
    params.require(:like).permit(:post_id)
  end
end
