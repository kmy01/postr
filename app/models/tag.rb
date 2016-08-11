class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :taggings,
    class_name: 'Tagging',
    foreign_key: :tag_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :tag

  has_many :posts,
    through: :taggings,
    source: :post
end
