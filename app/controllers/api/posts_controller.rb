class Api::PostsController < ApplicationController
  # before action require sign in
  # before ction require user be owner
  def index

  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.create(post_params)
    @post.author_id = current_user.id
    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update
      render json: @post
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(
      :type,
      :title,
      :body,
      :photo_url,
      :link_url,
      :audio_url,
      :video_url,
      :author_id
    )
  end
end
