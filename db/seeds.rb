# Create 100 users generated from https://www.mockaroo.com 
# and 1 demo user with a password of password


json = ActiveSupport::JSON.decode(File.read('db/seeds/users.json'))
users = []
json.each do |row|
  users << User.create!(row)
end

