# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the success callback.

* `createPost`
  0. invoked from new post button `onClick`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the success callback.

<!-- * `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the success callback. -->

* `updatePost`
  0. invoked from `PostForm` `onSubmit`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the success callback.

* `destroyPost`
  0. invoked from delete post button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the success callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `Post` store updates `_posts` and emits change.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. `Post` store updates `_posts[id]` and emits change.

* `removePost`
  0. invoked from an API callback.
  0. `Post` store removes `_posts[id]` and emits change.

### Store Listeners

* `PostsIndex` component listens to `Post` store.
<!-- * `PostDetail` component listens to `Post` store. -->

## Like Cycles

### Likes API Request Actions

* `fetchLikes`
  0. invoked from `LikesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/likes` is called.
  0. `receiveAllLikes` is set as the success callback.

  * `fetchSingleLike`
  0. invoked from `LikeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/like/:id` is called.
  0. `receiveSingleLike` is set as the success callback.

* `createLike`
  0. invoked from new like button `onClick`
  0. `POST /api/likes` is called.
  0. `receiveSingleLike` is set as the success callback.

* `destroyLike`
  0. invoked from delete like button `onClick`
  0. `DELETE /api/likes/:id` is called.
  0. `removeLike` is set as the success callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback.
  0. `Like` store updates `_likes` and emits change.

* `receiveSingleLike`
  0. invoked from an API callback.
  0. `Like` store updates `_likes[id]` and emits change.

* `removeLike`
  0. invoked from an API callback.
  0. `Like` store removes `_likes[id]` and emits change.

### Store Listeners

* `LikesIndex` component listens to `Like` store.
* `LikeDetail` component listens to `Like` store.

## Follow Cycles

### Follows API Request Actions

* `fetchFollows`
  0. invoked from `FollowsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/follows` is called.
  0. `receiveAllFollows` is set as the success callback.

  * `fetchSingleLike`
  0. invoked from `FollowDetail` `didMount`/`willReceiveProps`
  0. `GET /api/like/:id` is called.
  0. `receiveSingleFollow` is set as the success callback.

* `createFollow`
  0. invoked from new follow button `onClick`
  0. `POST /api/follows` is called.
  0. `receiveSingleFollow` is set as the success callback.

* `destroyFollow`
  0. invoked from delete follow button `onClick`
  0. `DELETE /api/follows/:id` is called.
  0. `removeFollow` is set as the success callback.

### Follows API Response Actions

* `receiveAllFollows`
  0. invoked from an API callback.
  0. `Follow` store updates `_follows` and emits change.

* `receiveSingleFollow`
  0. invoked from an API callback.
  0. `Follow` store updates `_follows[id]` and emits change.

* `removeFollow`
  0. invoked from an API callback.
  0. `Follow` store removes `_follows[id]` and emits change.

### Store Listeners

* `FollowsIndex` component listens to `Follow` store.
* `FollowDetail` component listens to `Follow` store.


## Tag Cycles

### Tags API Request Actions

* `fetchTags`
  0. invoked from `TagsDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tags` is called.
  0. `receiveAllTags` is set as the success callback.

  * `fetchSingleTag`
  0. invoked from `TagsDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tags/:id` is called.
  0. `receiveSingleTag` is set as the success callback.

* `createTag`
  0. invoked from new like button `onClick`
  0. `POST /api/tags` is called.
  0. `receiveSingleTag` is set as the success callback.

* `destroyTag`
  0. invoked from delete like button `onClick`
  0. `DELETE /api/tags/:id` is called.
  0. `removeTag` is set as the success callback.

### Tags API Response Actions

* `receiveAllTags`
  0. invoked from an API callback.
  0. `Tag` store updates `_tags` and emits change.

* `receiveSingleTag`
  0. invoked from an API callback.
  0. `Tag` store updates `_tags[id]` and emits change.

* `removeTag`
  0. invoked from an API callback.
  0. `Tag` store removes `_tags[id]` and emits change.

### Store Listeners

* `TagsDetail` component listens to `Tag` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/posts` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
