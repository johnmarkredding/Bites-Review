class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :likes, :dislikes
  belongs_to :restaurant
  has_many :comments
end
