class AddAvatarUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :avatar_url, :string, default: 'https://res.cloudinary.com/dunj0n6sb/image/upload/v1512006039/0_m4syrq.svg'
  end
end
