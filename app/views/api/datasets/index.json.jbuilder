json.array! @datasets do |dataset|
  json.extract! dataset, :id, :title, :header
end