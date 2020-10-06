class UniversitiesController < ApplicationController
  before_action :set_university, only: [:show, :update, :destroy]

  # GET /universities
  def index
    @universities = University.all

    render json: @universities
  end

  # GET /universities/1
  def show
    render json: @university
  end

  # POST /universities
  def create
    @university = University.new(university_params)

    if @university.save
      render json: @university, status: :created, location: @university
    else
      render json: @university.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /universities/1
  def update
    if @university.update(university_params)
      render json: @university
    else
      render json: @university.errors, status: :unprocessable_entity
    end
  end

  # DELETE /universities/1
  def destroy
    @university.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_university
      @university = University.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def university_params
      params.require(:university).permit(:name, :state, :zip)
    end
end
