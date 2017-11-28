# == Schema Information
#
# Table name: posts
#
#  id            :integer          not null, primary key
#  title         :string
#  description   :string
#  postable_type :string
#  postable_id   :integer
#  author_id     :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Post < ApplicationRecord
  belongs_to :postable, polymorphic: true

  belongs_to :user,
  foreign_key: :author_id,
  inverse_of: :posts
end
