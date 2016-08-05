class Post < ActiveRecord::Base
  validates :post_type, :author_id, presence: true
  validates :post_type, inclusion: { in: %w(text photo link audio video) }

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  # has_attached_file :media_content, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :media_content,
    content_type: {
      content_type: 'image/jpeg',
                    'image/png',
                    'audio/mpeg',
                    'video/mp4',
                    'video/avi'
    }
  validates_attachment_file_name :avatar,
    matches: [/png\Z/, /jpe?g\Z/, /mp3\Z/, /mp4\Z/, /avi\Z/]

end
