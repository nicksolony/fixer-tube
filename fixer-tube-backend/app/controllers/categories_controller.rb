class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :update, :destroy]

    def index
        categories = Category.all
        render json: categories, include: [:brands, :videos]
    end

    def show
        render json: @category
    end

    def create
        if category = Category.create(category_params)
            render json: category
        else
            render json: category.errors.full_messages
        end
    end

    def update
        @category.update(category_params)
        render json: @category
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find_by(slug: params[:slug])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:name,:main_category_id)
    end

end
