# Postr

[Postr live][heroku]

[heroku]: http://postr-kmy.herokuapp.com

Postr is a full-stack web application inspired by Tumblr.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Blogging App

Postr is a multi purpose blogging platform that allows users to easily find new and interesting content. Upon entering the root page, the application listens for any active users through a `SessionStore` using the `SessionStore.currentUser()` method. The application makes a redirect when a user signs in or a new user is created.

### Blogging through different forms of media

  On Postr users are able to create post in various different forms (text, photo, link, audio, video). Each post is stored within a table on the database that has columns for accommodating the different types of media the user wishes to post. Posts are fetched through an API call to the database where it is then stored in a `PostStore`.

  The `Dashboard` component and the `Explore` component handles the job of rendering the post. The former renders post from other users that the user follows and the latter renders all existing post that is not created by the user. Each of the main components have a `PostFeed` component and within that it has a `PostFeedItem` component that holds each individual post.

  There are five main forms: `TextForm`, `PhotoForm`, `LinkForm`, `AudioForm`, `VideoForm` that users can utilize to post their different contents.

![dashboard](docs/dashboard.png)
![explore](docs/explore.png)
![text form](docs/textform.png)

### Liking Posts

Users are able to like and unlike any post that they come across whether in the dashboard or in the explore locations. This is done through a `likes` join table in the database. The table joins a `user_id` to a `post_id`. The data is passed with the post json data when fetched.

### Following Other Users

Users are able to follow other users. A followee's post will appear on the follower's dashboard. This gives users easy access to all their followers. This is done through a `follows` join table in the database. This table joins a `follower_id` to a `followee_id`. Each of the id is associated to a user.

### Tags

Users are able to create tags with their post that they've created. Clicking on the tags displayed on the post will direct users to another page with all post that relates to the tag. This is done with a `tags` table and a `taggings` join table. When a user creates a post with tags, the controller first checks if the tags exist in the tags table, if not it creates a new tag. Then it creates new taggings that associates the tag to the post. There is an inverse of relationship between the taggings and the post since both are being created at the same time.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Postr are outlined below.

### Search

Searching will allow users to search the database for keywords which will check any existing tags that match the search term.

### Reblogging

This feature will allow users to reblog another user's post. This will create a new post that is associated to the original post.
