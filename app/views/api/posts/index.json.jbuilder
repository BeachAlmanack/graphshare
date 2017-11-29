json.posts do
  json.array! @posts do |post|
    json.extract! post, :id, :title, :description, :postable_id, :postable_type, :created_at
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
    json.extract! user, :id, :username, :email
  end
end

json.datasets do
  json.array! datasets.uniq do |dataset|
    json.extract! dataset, :id, :title, :file_name, :header, :author_id
  end
end

json.charts do
  json.array! charts.uniq do |chart|
    json.extract! chart, :id, :title, :chart_type, :data, :author_id, :dataset_id
  end
end