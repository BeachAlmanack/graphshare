# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :post_id, uniqueness: { scope: :user_id, message: 'Already liked' }
  belongs_to :user,
  inverse_of: :likes

  belongs_to :post
  
end
