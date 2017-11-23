class Api::DatasetsController < ApplicationController
  def create
    @dataset = Dataset.new(dataset_params)
    @dataset.user = User.find_by(id: dataset_params[:author_id])
    if @dataset.save
      render :show
    else
      render json: { dataset: @dataset.errors.full_messages }, status: 422
    end
  end

  def index
    @datasets = Dataset.includes(:user).where(author_id: params[:author_id])
    render :index
  end

  def show
    @dataset = Dataset.find(params[:id])
    render :show
  end

  def destroy
    @dataset = Dataset.find(params[:id])
    @dataset.destroy
    render :show
  end

  private
  def dataset_params
    params.require(:dataset).permit(:title, :file_name, :author_id, rows: {}, header: {})
  end
end
