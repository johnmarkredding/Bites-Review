class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :price
      t.integer :likes
      t.integer :dislikes
      t.belongs_to :restaurant
      t.timestamps
    end
  end
end
