# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Create 300 Teachers
300.times do
    name = Faker::Name.name
    university = Faker::Educator.university
    degree = Faker::Educator.degree
    phone_number = Faker::PhoneNumber.cell_phone
    email = Faker::Internet.email(domain: "#{university}")
    avatar = Faker::Avatar.image
    university_id = rand(1..10)
    Teacher.create(name: name, university_id: university_id, degree: degree, phone_number: phone_number, email: email, avatar: avatar)
end



# Create 10 Universities
10.times do
    name = Faker::Educator.university
    state = Faker::Address.state
    zip = Faker::Address.zip_code
    University.create(name: name, state: state, zip: zip)
end