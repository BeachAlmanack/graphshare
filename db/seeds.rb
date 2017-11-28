# Create 100 users generated from https://www.mockaroo.com 
# and 1 demo user with a password of password


userJson = ActiveSupport::JSON.decode(File.read('db/seeds/users.json'))
users = []
userJson.each do |row|
  users << User.create!(row)
end

aaplJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/AAPL.json'))
europeanCountriesJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/european_countries.json'))
worldPovertyJson = ActiveSupport::JSON.decode(File.read('db/seeds/datasets/world_poverty.json'))
Dataset.create(aaplJson)
Dataset.create(europeanCountriesJson)
Dataset.create(worldPovertyJson)

populationChart = ActiveSupport::JSON.decode(File.read('db/seeds/charts/population.json'))
Chart.create(populationChart)

Post.create({title: 'Post test', 
  description: 'Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test', 
  postable: Dataset.first,
  user: User.last
})

Post.create({title: 'Post test 2', 
  description: 'Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test. Wow this is such a test', 
  postable: Chart.first,
  user: User.last
})