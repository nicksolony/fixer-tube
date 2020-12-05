class MainCategoriesController < ApplicationController
    def index
        main_categories = MainCategory.all
        brands = Brand.all
        categories = Category.all
        videos = Video.all
        render json: {
            main_categories: main_categories,
            categories: categories,
            brands: brands,
            videos: videos
        }
    end
end