class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :items
end
