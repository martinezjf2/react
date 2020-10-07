class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :degree, :phone_number, :email
end
