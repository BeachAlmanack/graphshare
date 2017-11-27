class CreateCharts < ActiveRecord::Migration[5.1]
  def change
    create_table :charts do |t|
      t.string :title, null: false
      t.string :chart_type, null: false
      t.jsonb :data, null: false
      t.integer :author_id, null: false
      t.integer :dataset_id
      t.timestamps
   end

    add_index :charts, :author_id
  end
end
