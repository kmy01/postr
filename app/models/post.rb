class Post < ActiveRecord::Base
  validates :post_type, :author_id, presence: true
  validates :post_type, inclusion: { in: %w(text photo link audio video) }

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :likes,
    class_name: 'Like',
    foreign_key: :post_id,
    primary_key: :id

  has_many :likers,
    through: :likes,
    source: :user

  has_many :taggings,
    class_name: 'Tagging',
    foreign_key: :post_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :post

  has_many :tags,
    through: :taggings,
    source: :tag

  has_attached_file :media_content
  validates_attachment_content_type :media_content,
    content_type: ['image/jpeg','image/png','audio/mpeg','audio/x-m4a','video/mp4','video/avi']
  validates_attachment_file_name :media_content,
    matches: [/png\Z/i, /jpe?g\Z/i, /m4a\Z/i, /mp3\Z/i, /mp4\Z/i, /avi\Z/i]

end
