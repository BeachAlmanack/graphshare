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


populationChart = ActiveSupport::JSON.decode(File.read('db/seeds/charts/population.json'))
Chart.create(populationChart)

Post.create({title: 'Post test 1', 
  description: 'Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test', 
  postable: Dataset.first,
  user: User.last
})

Post.create({title: 'Post test 2', 
  description: 'Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test', 
  postable: Dataset.last,
  user: User.last
})

Post.create({title: 'Post test 3', 
  description: 'Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test', 
  postable: Chart.first,
  user: User.last
})

Post.create({title: 'Post test 4', 
  description: 'Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test', 
  postable: Chart.last,
  user: User.first
})

45.times { Like.create({ user_id: (1..30).to_a.sample, post_id: (1..4).to_a.sample}) }