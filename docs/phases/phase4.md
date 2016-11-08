# Phase 4: Follows (1 days, W2 W 6pm)

## Rails

### Models
* Follows

### Controllers
* Api::FollowsController (index, create, destroy)

### Views
* follows/index.json.jbuilder

## Flux
### Views (React Components)
* FollowButton

### Stores
* Post

### Actions
* `ApiActions.receiveAllFollowedPost`
* `ApiActions.deleteFollowedPost`
* `FollowsActions.fetchAllFollowedPost`
* `FollowsActions.createFollows`
* `FollowsActions.destroyFollows`

### ApiUtil
* `ApiUtil.fetchAllFollowedPost`
* `ApiUtil.createFollows`
* `ApiUtil.destroyFollows`

## Gems/Libraries
