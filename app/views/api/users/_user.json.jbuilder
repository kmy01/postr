json.extract! user, :username, :id
json.avatar_url asset_path(user.avatar.url)

json.liked_posts user.liked_posts

json.liked_posts do
  json.array! user.liked_posts do |post|
    json.extract! post, :id, :post_type, :title, :body, :photo_url, :link_url, :audio_url, :video_url, :created_at, :author_id, :media_content
    json.author do
      json.username post.author.username
      json.avatar_url asset_path(post.author.avatar.url)
    end
    json.likes post.likes
  end
end
