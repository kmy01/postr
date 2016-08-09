json.extract! user, :username, :id
json.avatar_url asset_path(user.avatar.url)

debugger
json.liked_posts user.liked_posts
