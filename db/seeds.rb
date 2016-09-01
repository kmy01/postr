User.create!(username: 'kmy', password: 'password123')
User.create!(username: 'musiclife', password: 'password123')
User.create!(username: 'earth', password: 'password123')
User.create!(username: 'allthingsaboutcars', password: 'password123')
User.create!(username: 'petspetspets', password: 'password123')
User.create!(username: 'guest', password: 'password123')
User.create!(username: 'homedesign', password: 'password123')
User.create!(username: 'consumerTech', password: 'password123')

Tag.create(name: 'music') # 1
Tag.create(name: 'edm') # 2
Tag.create(name: 'earth') # 3
Tag.create(name: 'photos') # 4
Tag.create(name: 'views') # 5
Tag.create(name: 'travel') # 6
Tag.create(name: 'nature') # 7
Tag.create(name: 'cars') # 8
Tag.create(name: '2fast') # 9
Tag.create(name: 'rants') # 10
Tag.create(name: 'pets') # 11
Tag.create(name: 'cute') # 12
Tag.create(name: 'adventure') # 13
Tag.create(name: 'home') #14
Tag.create(name: 'design') #15
Tag.create(name: 'electronics') #16
Tag.create(name: 'tech') #17
Tag.create(name: 'gadgets') #18
Tag.create(name: 'food') #19


Post.create!(
  post_type: 'text',
  author_id: 1,
  title: 'What is for dinner today?',
  body: 'Pizza',
  tag_ids: [10]
) # 1

Post.create!(
  post_type: 'video',
  author_id: 3,
  video_url: 'https://www.youtube.com/embed/PdCylcA_c40',
  body: 'Yosemite',
  tag_ids: [3, 6, 13]
) # 2

Post.create!(
  post_type: 'text',
  author_id: 6,
  title: 'Rant Post',
  body: '*Ranting* More Ranting * Done Ranting*',
  tag_ids: [10]
) # 3

Post.create!(
  post_type: 'video',
  author_id: 2,
  video_url: 'https://www.youtube.com/embed/gqbEDgGvnwM',
  body: '[Progressive House] - Trivecta - Into The Limelight (feat. Danyka Nadeau)',
  tag_ids: [1, 2]
) # 4

Post.create!(
  post_type: 'photo',
  author_id: 5,
  photo_url: 'https://i.ytimg.com/vi/bx7BjjqHf2U/maxresdefault.jpg',
  body: 'a beagle',
  tag_ids: [11, 12]
) # 5

Post.create!(
  post_type: 'photo',
  author_id: 4,
  photo_url: 'https://tctechcrunch2011.files.wordpress.com/2015/08/tesla_model_s.jpg',
  body: 'Tesla Model S',
  tag_ids: [8, 9, 6]
) # 6

Post.create!(
  post_type: 'link',
  author_id: 6,
  link_url: 'http://www.nytimes.com/2016/08/07/opinion/sunday/do-your-friends-actually-like-you.html?action=click&module=TrendingGrid&region=TrendingTop&pgtype=collection&_r=0',
  body: 'Friends?',
  tag_ids: [5]
) # 7

Post.create!(
post_type: 'photo',
author_id: 4,
photo_url: 'http://st.motortrend.com/uploads/sites/5/2015/10/2016-BMW-M2-Coupe-front-three-quarter-04.jpg',
body: 'BMW M2',
tag_ids: [8, 9, 12]
) # 8

Post.create!(
  post_type: 'text',
  author_id: 1,
  title: 'Cool Things',
  body: 'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference.',
  tag_ids: [10]
) # 9

Post.create!(
  post_type: 'photo',
  author_id: 3,
  photo_url: 'http://www.icelandprocruises.com/media/img/gallery/home/0002-gallery-iceland-waterfall-1.jpg',
  body: 'Iceland',
  tag_ids: [3, 4, 5, 6, 7, 13]
) # 10

Post.create!(
  post_type: 'photo',
  author_id: 3,
  photo_url: 'http://i.imgur.com/Kr1VorB.jpg?1',
  body: 'Beautiful',
  tag_ids: [3, 4, 5, 6, 7]
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
  body: 'Adventure',
  tag_ids: [13]
) # 13

Post.create!(
  post_type: 'audio',
  author_id: 2,
  audio_url: 'https://s3.amazonaws.com/postr-dev/posts/media_contents/000/000/019/original/laurabrehm.m4a',
  body: 'AK, Brenton Mattheus & Laura Brehm - Falling',
  tag_ids: [1, 2]
) # 14

Post.create!(
  post_type: 'photo',
  author_id: 1,
  photo_url: 'http://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3675/SITours/hong-kong-island-half-day-tour-in-hong-kong-114439.jpg',
  body: 'Hong Kong Peak View',
  tag_ids: [4, 5, 6]
) # 15

Post.create!(
  post_type: 'text',
  author_id: 6,
  title: 'Programmer\'s life',
  body: "Coding err day!",
  tag_ids: [10, 12]
) # 16

Post.create!(
  post_type: 'video',
  author_id: 3,
  video_url: 'https://player.vimeo.com/video/178300706',
  body: 'Aerial View',
  tag_ids: [5, 7, 13]
) # 17

Post.create!(
  post_type: 'photo',
  author_id: 5,
  photo_url: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-11/10/16/enhanced/webdr07/edit-11431-1415655953-15.jpg?no-auto',
  body: 'Cute Hedge Hog',
  tag_ids: [11, 12]
) # 18

Post.create!(
  post_type: 'link',
  author_id: 8,
  link_url: 'http://arstechnica.com/gadgets/2016/09/intel-quietly-releases-apollo-lake-new-low-cost-chips-for-cheap-pcs/',
  tag_ids: [15, 16, 17]
) # 19

Post.create!(
  post_type: 'photo',
  author_id: 7,
  photo_url: 'http://media.interiordesign.net.s3.amazonaws.com/West-Elm-Workspace-1-Mid-Century.jpg',
  body: 'Home Office',
  tag_ids: [14, 15]
) # 20

Post.create!(
  post_type: 'link',
  author_id: 1,
  link_url: 'http://arstechnica.com/science/2016/09/spacexs-falcon-9-rocket-apparently-blew-up-during-a-test-firing-thursday/',
  tag_ids: [17]
) # 21

Post.create!(
  post_type: 'photo',
  author_id: 8,
  photo_url: 'http://i.amz.mshcdn.com/Rz-FNT8ZevjX-zE_dRpXgyzQi2o=/950x534/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F196254%2Fasus-zenbook3-thumb.jpg',
  body: 'New Asus Zenbook 3',
  tag_ids: [15,16, 17, 18]
) # 22

Post.create!(
  post_type: 'photo',
  author_id: 7,
  photo_url: 'http://cdn.home-designing.com/wp-content/uploads/2009/07/living-room-interior-design.jpg',
  body: 'Modern Home design',
  tag_ids: [14, 15]
) # 23

Post.create!(
  post_type: 'photo',
  author_id: 1,
  photo_url: 'http://allthingsruby101.weebly.com/uploads/2/9/4/8/29483869/7680799_orig.jpg',
  body: 'Puppy with glasses!',
  tag_ids: [4, 12]
) # 24

Post.create!(
  post_type: 'video',
  author_id: 2,
  video_url: 'https://www.youtube.com/embed/PT2_F-1esPk',
  body: 'The Chainsmokers - Closer ft. Halsey',
  tag_ids: [1, 2]
) # 25

Post.create!(
  post_type: 'photo',
  author_id: 8,
  photo_url: 'http://www.samsung.com/global/galaxy/galaxy-note7/images/galaxy-note7_highlights_kv.jpg',
  body: 'Samsung Note 7',
  tag_ids: [15,16, 17, 18]
) # 26

Post.create!(
  post_type: 'photo',
  author_id: 1,
  photo_url: 'http://getbento.imgix.net/accounts/a28dc4cd5a54613bcf0768489248ab80/media/images/9902BURNER3-articleLarge.jpg?w=1920&fit=crop&auto=compress,format&h=900',
  body: 'Dough Doughnuts. So Good!',
  tag_ids: [19]
) # 27

Post.create!(
  post_type: 'photo',
  author_id: 3,
  photo_url: 'http://mattmacpherson.com/new003.jpg',
  body: 'Stunning!',
  tag_ids: [3, 4, 5, 7]
) # 28

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
Like.create(post_id: 2, user_id: 6)
Like.create(post_id: 5, user_id: 6)


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
