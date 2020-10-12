class TeachersController < ApplicationController
  before_action :set_university

  # GET /teachers
  def index
    @teachers = Teacher.all
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
      render json: @university
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
    @teacher = Teacher.find(params["id"])
    @university = University.find(@teacher.university_id)
    @teacher.destroy
    # @teacher2 = Teacher.find_by(id: params[:id])
    # @university2 = University.find(params[:university_id])
    # @teacher2.destroy
    render json: @university
  
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_teacher
    #   @teacher = Teacher.find_by(id: params[:id])
    # end

    def set_university
      @university = University.find(params[:university_id])
    end

    # Only allow a trusted parameter "white list" through.
    def teacher_params
      params.require(:teacher).permit(:name, :degree, :university_id, :phone_number, :email)
    end
end
