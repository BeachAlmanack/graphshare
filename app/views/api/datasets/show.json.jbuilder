json.dataset do
  json.extract! @dataset, :id, :title, :file_name, :rows, :header, :author_id
end

json.user do
  json.extract! @dataset.user, :id, :username, :avatar_url
end