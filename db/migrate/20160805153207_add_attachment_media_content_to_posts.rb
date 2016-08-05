class AddAttachmentMediaContentToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :media_content
    end
  end

  def self.down
    remove_attachment :posts, :media_content
  end
end
