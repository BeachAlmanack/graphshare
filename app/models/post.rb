# == Schema Information
#
# Table name: posts
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  description   :text
#  postable_type :string
#  postable_id   :integer
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Post < ApplicationRecord
  belongs_to :postable, polymorphic: true

  belongs_to :user,
  foreign_key: :author_id

  has_many :likes

  has_many :liking_users,
  through: :likes,
  source: :user
end
