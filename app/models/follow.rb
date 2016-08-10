class Follow < ActiveRecord::Base
  validates :follower_id, :followee_id, presence: true

  belongs_to :follower,
    class_name: 'User',
    foreign_key: :follower_id,
    primary_key: :id

  belongs_to :followee,
    class_name: 'User',
    foreign_key: :followee_id,
    primary_key: :id
end
