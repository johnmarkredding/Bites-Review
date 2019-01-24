class Api::V1::CommentsController < ApplicationController
  def index
    @comments = Item.find(params[:item_id]).comments
    render json: @comments
  end
  def create
    @comment = Comment.create(comment_params)
    render json: @comment
  end

  private

  def comment_params
    params.permit(:content, :item_id);
  end
end
