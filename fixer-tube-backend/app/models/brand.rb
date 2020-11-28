class Brand < ApplicationRecord
    has_many :videos
    has_many :categories, through: :videos
    validates :name, presence: true
    validates :name, uniqueness: true
    


end
