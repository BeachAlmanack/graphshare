json.charts do
  json.array! @charts do |chart|
    json.extract! chart, :id, :title, :chart_type, :author_id, :dataset_id, :created_at
    json.like_count chart.likes.count
    json.post_count chart.posts.count
  end
end

users = @charts.map { |chart| chart.user}.uniq

json.users do
  json.array! users do |user|
    json.extract! user, :id, :username, :email, :avatar_url
  end
end
