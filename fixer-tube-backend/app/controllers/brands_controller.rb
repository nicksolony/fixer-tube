class BrandsController < ApplicationController
    before_action :set_brand, only: [:show, :update, :destroy]

    def index
        brands = Brand.all
        render json: brands, include: [:categories, :videos]
        
    end

    def show
        render json: @brand
    end

    def create
        if brand = Brand.create(brand_params)
            render json: brand
        else
            render json: brand.errors.full_messages
        end
    end

    def update
        @brand.update(brand_params)
        render json: @brand
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_brand
      @brand = Brand.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def brand_params
      params.require(:brand).permit(:name)
    end
end
