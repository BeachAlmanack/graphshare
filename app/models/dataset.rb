# == Schema Information
#
# Table name: datasets
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  file_name  :string           not null
#  rows       :jsonb            not null
#  header     :jsonb            not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dataset < ApplicationRecord
  validates :title, :file_name, :rows, :header, presence: true

  include Postable

  belongs_to :user,
  foreign_key: :author_id,
  inverse_of: :datasets

  has_many :charts,
  foreign_key: :dataset_id,
  inverse_of: :dataset
end