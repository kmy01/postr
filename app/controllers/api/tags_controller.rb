class Api::TagsController < ApplicationController
  def index
    @tagged_posts = Tag.find_by_name(params[:tag]).posts.includes(:likes, :tags, author: :followers)
  end
end
