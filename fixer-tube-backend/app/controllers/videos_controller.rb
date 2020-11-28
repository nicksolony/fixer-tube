class VideosController < ApplicationController
    before_action :set_video, only: [:show, :update, :destroy]

    def index
        videos = Video.all
        render json: videos
        
    end

    def show
        render json: @video
    end

    def create
        if video = Video.create(video_params)
            render json: video
        else
            render json: video.errors.full_messages
        end
    end

    def update
        @video.update(video_params)
        render json: @video
    end

    def destroy
        @video.destroy
      end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find_by(slug: params[:slug])
    end

    # Only allow a trusted parameter "white list" through.
    def video_params
      params.require(:video).permit(:name,:description,:url,:brand_id, :category_id)
    end
end
