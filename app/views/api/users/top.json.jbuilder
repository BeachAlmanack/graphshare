json.users do
  json.array! @users.each_with_index.to_a do |user, index|
    json.extract! user, :id, :username, :email, :avatar_url
    json.like_count user.likes.count
    json.post_count user.posts.count
    json.top_rank index
  end
end