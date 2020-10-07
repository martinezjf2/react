class TeachersController < ApplicationController
  before_action :set_university, only: [:index, :show, :update, :destroy]

  # GET /teachers
  def index
    @teachers = @university.teachers
    render json: @teachers
    # associate only teachers for that specific university
  end

  # GET /teachers/1
  def show
    @teacher = Teacher.find(params[:id])
    # just find the specific teacher
    render json: @teacher
  end

  # POST /teachers
  def create
    @teacher = @university.teachers.new(teacher_params)

    if @teacher.save
      render json: @teacher, status: :created, location: @teacher
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teachers/1
  def update
    if @teacher.update(teacher_params)
      render json: @teacher
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teachers/1
  def destroy
    @teacher.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teacher
      @teacher = Teacher.find_by(id: params[:id])
    end

    def set_university
      @university = University.find(params[:university_id])
    end

    # Only allow a trusted parameter "white list" through.
    def teacher_params
      params.require(:teacher).permit(:name, :degree, :university_id, :phone_number, :email)
    end
end
