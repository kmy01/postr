class AddNullConstraintToAuthorId < ActiveRecord::Migration
  def change
    change_column_null :posts, :author_id, false
  end
end
