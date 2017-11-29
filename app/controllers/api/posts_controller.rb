class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: { errors: @post.errors.full_messages }, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :description, :postable_type, :postable_id, :author_id)
  end
end
