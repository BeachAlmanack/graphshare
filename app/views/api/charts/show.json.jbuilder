json.chart do
  json.extract! @chart, :id, :title, :chart_type, :data, :author_id, :dataset_id
  json.like_count @chart.likes.count
  json.post_count @chart.posts.count
end

json.user do
  json.extract! @chart.user, :id, :username, :email, :avatar_url
end