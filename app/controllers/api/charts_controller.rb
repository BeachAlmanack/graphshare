class Api::ChartsController < ApplicationController
    def create
    @chart = Chart.new(chart_params)
    @chart.user = User.find_by(id: chart_params[:author_id])
    @chart.dataset = Dataset.find_by(id: chart_params[:dataset_id])
    if @chart.save
      render :show
    else
      debugger
      render json: { chart: @chart.errors.full_messages }, status: 422
    end
  end

  def show
    @chart = Chart.find(params[:id])
    render :show
  end


  def index
    @charts = Chart.includes(:user).where(author_id: params[:author_id])
    render :index
  end


  private
  def chart_params
    params.require(:chart).permit(:title, :chart_type, :author_id, :dataset_id, data: {})
  end
end
