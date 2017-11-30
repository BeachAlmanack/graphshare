json.dataset do
  json.extract! @dataset, :id, :title, :file_name, :rows, :header, :author_id
  json.like_count @dataset.likes.count
  json.post_count @dataset.posts.count
end

json.user do
  json.extract! @dataset.user, :id, :username, :avatar_url
end