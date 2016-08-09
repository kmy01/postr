class RenameLikerIdInLikes < ActiveRecord::Migration
  def change
    rename_column :likes, :liker_id, :user_id
  end
end
