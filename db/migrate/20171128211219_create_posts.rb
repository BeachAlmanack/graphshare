class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description
      t.references :postable, polymorphic: true
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :posts, :author_id
  end
end
