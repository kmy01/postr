# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Posts

- `GET /api/posts`
  - Posts index/search
  - accepts `tag_name` query param to list posts by tag
  - accepts pagination params (if I get there)
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Likes

- Shows if a post has been liked by the user on feed
- `GET /api/likes`
- `POST /api/posts/:post_id/likes`: create a like association
- `DELETE /api/likes/:like_id`: remove like by like_id

### Follows

- Shows if the post's author is followed by the user
- `GET /api/follows`
- `POST /api/posts/:post_id/follows`: create a follow association
- `DELETE /api/follows/:follow_id`: remove follow by follow_id

### Reblogs

- Shows reblogged post by the user on feed
- `GET /api/reblogs`
- `POST /api/posts/:post_id/reblogs`: create a reblog association
- `DELETE /api/reblogs/:reblog_id`: remove reblog by reblog_id

### Tags

- A post's tags will be included in the post show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/posts/:post_id/tags`: add tag to post by name
  - if post doesn't already exist, it will be created
- `DELETE /api/tags/:tag_name`: remove tag from post by
  name
