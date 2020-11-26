class Category < ApplicationRecord
  belongs_to :main_category
  has_many :videos
  has_many :brands, through: :videos
  validates :name, presence: true
  validates :name, uniqueness: true
end
