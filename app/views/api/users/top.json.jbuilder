json.users do
  json.array! @users do |user|
    json.extract! user, :id, :username, :email, :avatar_url
    json.like_count user.likes.count
    json.post_count user.posts.count
  end
end