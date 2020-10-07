class UniversitySerializer < ActiveModel::Serializer
  attributes :id, :name, :state, :zip
  has_many :teachers
end
