class Item < ApplicationRecord
  belongs_to :restaurant
  has_many :comments
end
