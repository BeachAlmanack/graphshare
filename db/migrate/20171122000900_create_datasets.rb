class CreateDatasets < ActiveRecord::Migration[5.1]
  def change
    create_table :datasets do |t|
      t.string :title, null: false
      t.string :file_name, null: false
      t.jsonb :rows, null: false
      t.jsonb :header, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :datasets, :author_id
  end
end