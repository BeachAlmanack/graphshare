# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  avatar_url      :string           default("http://res.cloudinary.com/dunj0n6sb/image/upload/v1512006039/0_m4syrq.svg")
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, presence: true
  validates_uniqueness_of :username, :email, case_sensitive: false
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  before_validation :ensure_session_token

  has_many :datasets,
  inverse_of: :user

  has_many :charts,
  inverse_of: :user

  has_many :posts,
  foreign_key: :author_id

  has_many :likes,
  through: :posts

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.where('lower(username) = ?', username.downcase).first 
    user && user.is_password?(password) ? user : nil
  end
end
