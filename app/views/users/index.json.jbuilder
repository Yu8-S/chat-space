json.array! @users do |user|
  unless user.name == current_user.name
    json.name user.name
    json.user_id user.id
  end
end
