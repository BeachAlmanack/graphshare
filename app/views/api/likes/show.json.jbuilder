json.like do
  json.extract! @like, :id, :post_id, :user_id
end