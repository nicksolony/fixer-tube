class MainCategoriesController < ApplicationController
    def index
        categories = MainCategory.all
        render json: categories, include: :categories
    end
end
