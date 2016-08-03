# Postr

[Heroku link][heroku]

[heroku]: https://postr-kmy.herokuapp.com

## Minimum Viable Product

Postr is a web application inspired by Tumblr that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Form for posting for various types of media
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Feed for user's dashboard
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Follow other users
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Likes, liking post
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

<<<<<<< 16c9289362d408d08c2e8b24663167c5a1c962fe
- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `APIUtil` to interact with the API
- [x] set up flux cycle for frontend auth
- [x] user signup/signin components
- [x] blank landing component after signin
- [x] style signin/signup components
- [x] seed users
=======
- [X] create new project
- [X] create `User` model
- [X] authentication backend setup
- [X] create `StaticPages` controller and root view
- [X] set up webpack & flux scaffold with skeleton files
- [X] setup `APIUtil` to interact with the API
- [X] set up flux cycle for frontend auth
- [X] user signup/signin components
- [X] blank landing component after signin
- [ ] style signin/signup components
- [ ] seed users
>>>>>>> add button styling

### Phase 2: Feed / Posts Model, API, and components (3 days, W2 M 6pm)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [ ] create `Post` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for posts (`PostsController`)
- [ ] jBuilder views for posts
- [ ] test out API interaction in the console.
- implement each post component, building out the flux loop as needed.
  - [ ] `PostsIndex`
  - [ ] `PostIndexItem`
  - [ ] `PostForm`
- [ ] save Posts to the DB when the form loses focus or is left idle after editing.
- [ ] style posts components
- [ ] seed posts

### Phase 3: Likes (1 days, W2 Tu 6pm)

**Objective:** Posts can be liked by multiple users

- [ ] create `Like` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching post liked by user
  - [ ] adding likes to post
- [ ] Style new elements
- [ ] Seed liked post

### Phase 4: Follows (1 days, W2 W 6pm)

**Objective:** Posts can be followed by multiple users

- [ ] create `Follow` join table
- build out API, Flux loop, and components for:
  - [ ] fetching post of author followed by user
  - [ ] follow a user
- [ ] Style new elements
- [ ] Seed followers/followee

### Phase 5: Tags (1 days, W2 Th 6pm)

**Objective:** Posts can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for post
  - [ ] adding tags to post
  - [ ] creating tags while adding to post
- [ ] Style new elements
- [ ] Seed tags and tag the seeded post

## Bonus 1: Reblogs

**Objective:** Posts can be reblogged by multiple users

- [ ] create `Reblog` join table
- build out API, Flux loop, and components for:
  - [ ] fetching post reblogged by user
  - [ ] adding reblog for user
- [ ] Style new elements
- [ ] Seed reblogged posts

### Bonus 2: - Pagination / infinite scroll for Posts Index

**objective:** Add infinite scroll to Posts Index

- [ ] Paginate Posts Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Make sure styling still looks good
- [ ] Ensure we have enough seeded posts to demo infinite scroll


[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
