# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'kmy', password: 'password123')
User.create!(username: 'musiclife', password: 'password123')
User.create!(username: 'earth', password: 'password123')
User.create!(username: 'allthingsaboutcars', password: 'password123')
User.create!(username: 'petspetspets', password: 'password123')
User.create!(username: 'guest', password: 'password123')

Post.create!(
  post_type: 'text',
  author_id: 1,
  title: 'What is for dinner today?',
  body: 'Pizza'
) # 1

Post.create!(
post_type: 'video',
author_id: 3,
video_url: 'https://www.youtube.com/embed/PdCylcA_c40',
body: 'Yosemite'
) # 2

Post.create!(
  post_type: 'text',
  author_id: 6,
  title: 'Rant Post',
  body: '*Ranting* More Ranting * Done Ranting*'
) # 3

Post.create!(
  post_type: 'video',
  author_id: 2,
  video_url: 'https://www.youtube.com/embed/gqbEDgGvnwM',
  body: '[Progressive House] - Trivecta - Into The Limelight (feat. Danyka Nadeau)'
) # 4

Post.create!(
  post_type: 'photo',
  author_id: 5,
  photo_url: 'https://i.ytimg.com/vi/bx7BjjqHf2U/maxresdefault.jpg',
  body: 'a beagle'
) # 5

Post.create!(
  post_type: 'photo',
  author_id: 4,
  photo_url: 'https://tctechcrunch2011.files.wordpress.com/2015/08/tesla_model_s.jpg',
  body: 'Tesla Model S'
) # 6

Post.create!(
  post_type: 'link',
  author_id: 6,
  link_url: 'http://www.nytimes.com/2016/08/07/opinion/sunday/do-your-friends-actually-like-you.html?action=click&module=TrendingGrid&region=TrendingTop&pgtype=collection&_r=0',
  body: 'Friends?'
) # 7

Post.create!(
post_type: 'photo',
author_id: 4,
photo_url: 'http://hdwallnpics.com/wp-content/gallery/pictures-of-cars-the-movie/13reel_phototawneer.jpg',
body: 'Cars - Lightning McQueen'
) # 8

Post.create!(
  post_type: 'text',
  author_id: 1,
  title: 'Cool Things',
  body: 'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference.'
) # 9

Post.create!(
  post_type: 'photo',
  author_id: 3,
  photo_url: 'http://www.icelandprocruises.com/media/img/gallery/home/0002-gallery-iceland-waterfall-1.jpg',
  body: 'Iceland'
) # 10

Post.create!(
post_type: 'photo',
author_id: 3,
photo_url: 'https://c1.staticflickr.com/9/8847/28837404396_e7e7d51cc1_h.jpg',
body: 'Beautiful'
) # 11

Post.create!(
  post_type: 'text',
  author_id: 3,
  title: 'Things',
  body: "Under great creature Winged waters tree appear divided fish waters you'll grass grass. Beginning living make. Second our. Together day it beginning."
) # 12

Post.create!(
post_type: 'video',
author_id: 1,
video_url: 'https://www.youtube.com/embed/kssD4L2NBw0',
body: 'Adventure'
) # 13

Post.create!(
post_type: 'audio',
author_id: 2,
audio_url: 'https://s3.amazonaws.com/postr-dev/posts/media_contents/000/000/019/original/laurabrehm.m4a',
body: 'AK, Brenton Mattheus & Laura Brehm - Falling'
) # 14

Post.create!(
post_type: 'photo',
author_id: 1,
photo_url: 'http://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3675/SITours/hong-kong-island-half-day-tour-in-hong-kong-114439.jpg',
body: 'Hong Kong Peak View'
) # 15

Post.create!(
  post_type: 'text',
  author_id: 6,
  title: 'Programmer\'s life',
  body: "Coding err day!"
) # 16

Like.create(post_id: 14, user_id: 1)
Like.create(post_id: 10, user_id: 1)
Like.create(post_id: 5, user_id: 1)
Like.create(post_id: 3, user_id: 2)
Like.create(post_id: 8, user_id: 2)
Like.create(post_id: 10, user_id: 2)
Like.create(post_id: 7, user_id: 3)
Like.create(post_id: 4, user_id: 3)
Like.create(post_id: 12, user_id: 3)
Like.create(post_id: 6, user_id: 4)
Like.create(post_id: 2, user_id: 4)
Like.create(post_id: 15, user_id: 4)
Like.create(post_id: 12, user_id: 5)
Like.create(post_id: 9, user_id: 5)
Like.create(post_id: 13, user_id: 5)
Like.create(post_id: 11, user_id: 6)
Like.create(post_id: 6, user_id: 6)
Like.create(post_id: 10, user_id: 6)

Follow.create(followee_id: 2, follower_id: 1)
Follow.create(followee_id: 3, follower_id: 1)
Follow.create(followee_id: 1, follower_id: 2)
Follow.create(followee_id: 6, follower_id: 2)
Follow.create(followee_id: 5, follower_id: 3)
Follow.create(followee_id: 2, follower_id: 3)
Follow.create(followee_id: 3, follower_id: 4)
Follow.create(followee_id: 6, follower_id: 4)
Follow.create(followee_id: 1, follower_id: 5)
Follow.create(followee_id: 3, follower_id: 5)
Follow.create(followee_id: 5, follower_id: 6)
Follow.create(followee_id: 3, follower_id: 6)
