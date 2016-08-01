# Phase 5: Tags (1 days, W2 Th 6pm)

## Rails
### Models
* Tags
* Taggings

### Controllers
* Api::TagsController (index, create, destroy)

### Views
* tags/index.json.jbuilder

## Flux
### Views (React Components)
* TagsForm

### Stores
* Tag

### Actions
* `ApiActions.receiveAllTaggedPost`
* `ApiActions.deleteTaggedPost`
* `TagsActions.fetchAllTaggedPost`
* `TagsActions.createTags`
* `TagsActions.destroyTags`

### ApiUtil
* `ApiUtil.fetchAllTaggedPost`
* `ApiUtil.createTags`
* `ApiUtil.destroyTags`

## Gems/Libraries
