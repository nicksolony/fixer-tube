class MainCategoriesController < ApplicationController
    def index
        categories = MainCategory.all
        render json: {categories: categories}
    end
end
