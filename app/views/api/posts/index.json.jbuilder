json.posts do
  json.array! @posts do |post|
    json.extract! post, :id, :title, :description, :postable_id, :postable_type, :created_at, :author_id, :liking_user_ids
  end
end

users = @posts.map { |post| post.user}.uniq
datasets = []
charts = []
@posts.each do |post| 
  if post.postable_type == 'Dataset'
    datasets << post.postable
  else
    charts << post.postable
  end
end


json.users do
  json.array! users do |user|
    json.extract! user, :id, :username, :email, :avatar_url
  end
end

json.datasets do
  json.array! datasets.uniq do |dataset|
    json.extract! dataset, :id, :title, :file_name, :header, :author_id
    json.like_count dataset.likes.count
    json.post_count dataset.posts.count
  end
end

json.charts do
  json.array! charts.uniq do |chart|
    json.extract! chart, :id, :title, :chart_type, :data, :author_id, :dataset_id
    json.like_count chart.likes.count
    json.post_count chart.posts.count
  end
end

json.likes do
  @posts.each do |post| 
    json.array! post.likes do |like|
      json.extract! like, :id, :user_id, :post_id
    end
  end
end