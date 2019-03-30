FactoryBot.define do
  factory :message do
    body {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/uploads/message/image/5/no_image.jpg")}
    user
    group
  end
end
