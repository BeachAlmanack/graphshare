json.datasets do
  json.array! @datasets do |dataset|
    json.extract! dataset, :id, :title, :header, :file_name, :author_id, :created_at
    json.like_count dataset.likes.count
    json.post_count dataset.posts.count
  end
end

users = @datasets.map { |dataset| dataset.user}.uniq

json.users do
  json.array! users do |user|
    json.extract! user, :id, :username, :email, :avatar_url
  end
end
