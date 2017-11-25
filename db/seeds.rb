# Create 100 users generated from https://www.mockaroo.com 
# and 1 demo user with a password of password


userJson = ActiveSupport::JSON.decode(File.read('db/seeds/users.json'))
users = []
userJson.each do |row|
  users << User.create!(row)
end

aaplJson = ActiveSupport::JSON.decode(File.read('db/seeds/AAPL.json'))
europeanCountriesJson = ActiveSupport::JSON.decode(File.read('db/seeds/european_countries.json'))
worldPovertyJson = ActiveSupport::JSON.decode(File.read('db/seeds/world_poverty.json'))
Dataset.create(aaplJson)
Dataset.create(europeanCountriesJson)
Dataset.create(worldPovertyJson)