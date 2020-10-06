class CreateTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :degree
      t.integer :university_id
      t.string :phone_number
      t.string :email
      t.string :avatar

      t.timestamps
    end
  end
end
