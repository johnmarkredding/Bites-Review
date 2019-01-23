class Comment < ApplicationRecord
  belongs_to :item
  has_many :restaurant, through: :item
end
