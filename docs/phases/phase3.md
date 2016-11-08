# Phase 3: Likes (1 days, W2 Tu 6pm)

## Rails
### Models
* Likes

### Controllers
* Api::LikesController (index, create, destroy)

### Views
* likes/index.json.jbuilder
<!-- * likes/show.json.jbuilder -->

## Flux
### Views (React Components)
* LikeButton

### Stores
* Post

### Actions
* `ApiActions.receiveAllLikedPost`
<!-- * `ApiActions.receiveSingleLikedPost` -->
* `ApiActions.deleteLikedPost`
* `LikesActions.fetchAllLikedPost`
<!-- * `LikesActions.fetchSingleLikePost` -->
* `LikesActions.createLikes`
* `LikesActions.destroyLikes`

### ApiUtil
* `ApiUtil.fetchAllLikedPost`
<!-- * `ApiUtil.fetchSingleLikedPost` -->
* `ApiUtil.createLikes`
* `ApiUtil.destroyLikes`

## Gems/Libraries
