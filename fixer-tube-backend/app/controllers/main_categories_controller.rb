class MainCategoriesController < ApplicationController
    def index
        main_categories = MainCategory.all
        # render json: categories, include: :categories
        render json: main_categories, :include => {
            :categories => {
                # :only => [:id, :name, :main_category_id], :include=> {
                #     :videos => {
                #         :except => [:created_at,:updated_at], :include=>{
                #             :brand => {
                #                 :except => [:created_at,:updated_at]
                #             }
                #         }
                #         }
                #     }
                }
            }
        # , :except => [:created_at, :updated_at]
    end
end
