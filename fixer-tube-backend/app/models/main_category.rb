class MainCategory < ApplicationRecord
    has_many :categories
    has_many :videos, through: :categories
    has_many :brands, through: :videos
end
