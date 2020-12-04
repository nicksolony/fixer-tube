class Video < ApplicationRecord
  belongs_to :brand
  belongs_to :category
  validates :name,:url, :category_id,:brand_id, presence: true
  validates :name,:url, uniqueness: true

  


end


