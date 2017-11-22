class Dataset < ApplicationRecord
  validates :title, :file_name, :rows, :header, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  inverse_of: :datasets
end