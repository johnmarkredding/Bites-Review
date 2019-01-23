class Restaurant < ApplicationRecord
  has_many :items
  has_many :comments, through: :items
end
