# Phase 2: Feed / Posts Model, API, and components (3 days, W2 M 6pm)

## Rails
### Models
* Post

### Controllers
* Api::PostsController (create, destroy, index, show, update)

### Views
* posts/index.json.jbuilder
* posts/show.json.jbuilder

## Flux
### Views (React Components)
* PostsIndex
  - PostsIndexItem
* PostForm

### Stores
* Post

### Actions
* `ApiActions.receiveAllPosts`
* `ApiActions.receiveSinglePost`
* `ApiActions.deletePost`
* `PostActions.fetchAllPosts`
* `PostActions.fetchSinglePost`
* `PostActions.createPost`
* `PostActions.editPost`
* `PostActions.destroyPost`

### ApiUtil
* `ApiUtil.fetchAllPosts`
* `ApiUtil.fetchSinglePost`
* `ApiUtil.createPost`
* `ApiUtil.editPost`
* `ApiUtil.destroyPost`

## Gems/Libraries
