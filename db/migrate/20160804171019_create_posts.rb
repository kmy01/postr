class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :type, null: false
      t.string :title
      t.text :body
      t.string :photo_url
      t.string :link_url
      t.string :audio_url
      t.string :video_url
      t.timestamps null: false
    end
  end
end
