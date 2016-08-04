class Api::PostsController < ApplicationController
  def index

  end

  def show

  end

  def create

  end

  def edit

  end

  def destroy

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
