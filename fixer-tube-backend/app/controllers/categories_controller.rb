class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :update, :destroy]

    def index
        categories = Category.all
        # render json: categories, include: :main_category
        render json: categories
    end

    def show
        render json: category
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:name,:main_category_id)
    end

end
