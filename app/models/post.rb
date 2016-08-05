class Post < ActiveRecord::Base
  validates :post_type, :author_id, presence: true
  validates :post_type, inclusion: { in: %w(text photo link audio video) }

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
end
