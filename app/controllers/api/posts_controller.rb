class Api::PostsController < ApplicationController
  # before action require sign in
  # before ction require user be owner
  def index
    @posts = Post.all.includes(:likes, :author)
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    params_with_tags = post_params
    params_with_tags[:tag_ids] = get_tag_ids(params[:tags])

    @post = Post.new(params_with_tags)
    @post.author_id = current_user.id
    if @post.save
      render partial: 'api/posts/post', object: @post
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render partial: 'api/posts/post', object: @post
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: {}
  end

  private

  def post_params
    params.require(:post).permit(
      :post_type,
      :title,
      :body,
      :photo_url,
      :link_url,
      :audio_url,
      :video_url,
      :media_content,
      :author_id,
      tag_ids: []
    )
  end

  def get_tag_ids(tag_string)
    tag_names = tag_string.split(' ')
    tag_ids = []

    tag_names.each do |tag_name|
      unless Tag.find_by_name(tag_name)
        Tag.create(name: tag_name)
      end
      tag_ids << Tag.find_by_name(tag_name).id
    end

    tag_ids
  end
end
