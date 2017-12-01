# Create 100 users generated from https://www.mockaroo.com 
# and 1 demo user with a password of password


userJson = ActiveSupport::JSON.decode(File.read('db/seeds/users.json'))
users = []
userJson.each do |row|
  users << User.create!(row)
end

datasets = []

demoDataJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/demo_data.json'))
demoDataJson.each do |row|
  datasets << Dataset.create(row)
end

hcornilleauJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/hcornilleau.json'))
hcornilleauJson.each do |row|
  datasets << Dataset.create(row)
  row[:author_id] = 30
  Dataset.create(row)
end

mblewisJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/mblewis.json'))
mblewisJson.each do |row|
  datasets << Dataset.create(row)
end

lorisgiggsJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/lorisgiggs.json'))
lorisgiggsJson.each do |row|
  datasets << Dataset.create(row)
end

msuffieldJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/msuffield.json'))
msuffieldJson.each do |row|
  datasets << Dataset.create(row)
end

require File.join(Rails.root,'db/seeds/charts.rb')

require File.join(Rails.root,'db/seeds/posts.rb')

posts = Post.all

100.times do |i|
  Like.create({user_id: users.sample.id, post_id: posts.sample.id})
end