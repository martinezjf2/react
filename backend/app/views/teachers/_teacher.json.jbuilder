json.extract! teacher, :id, :name, :degree, :university_id, :phone_number, :email, :avatar, :created_at, :updated_at
json.url teacher_url(teacher, format: :json)
