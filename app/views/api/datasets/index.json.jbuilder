json.datasets do
  json.array! @datasets do |dataset|
    json.extract! dataset, :id, :title, :header, :file_name, :author_id
  end
end

users = @datasets.map { |dataset| dataset.user}.uniq

json.users do
  json.array! users do |user|
    json.extract! user, :id, :username, :email
  end
end
