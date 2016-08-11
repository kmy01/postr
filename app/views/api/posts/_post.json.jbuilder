json.id post.id
json.post_type post.post_type
# json.author post.author

json.author do
  json.id post.author.id
  json.username post.author.username
  json.avatar_url asset_path(post.author.avatar.url)
  json.followers post.author.followers.map(&:id)
end

json.likes post.likes

json.created_at post.created_at

case post.post_type
when 'text'
  json.title post.title
when 'link'
  json.link_url post.link_url
when 'photo'
  if post.photo_url
    json.photo_url post.photo_url
  else
    json.photo_url asset_path(post.media_content.url)
  end
when 'audio'
  if post.audio_url
    json.audio_url post.audio_url
  else
    json.audio_url asset_path(post.media_content.url)
  end
when 'video'
  if post.video_url
    json.video_url post.video_url
  else
    json.video_url asset_path(post.media_content.url)
  end
end

json.body post.body
json.tags post.tags.map(&:name)
