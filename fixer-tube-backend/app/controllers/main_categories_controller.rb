class MainCategoriesController < ApplicationController
    def index
        main_categories = MainCategory.all
        # render json: categories, include: :categories
        render json: main_categories, :include => {
            :categories => { :except => [:created_at,:updated_at]},
            :brands => {:except => [:created_at,:updated_at]},
            :videos => {:except => [:created_at,:updated_at]}
            }
        # , :except => [:created_at, :updated_at]
    end
end


# (:include => {:questions => {:include => :subject}, :bonuses => {:include => :subject}})