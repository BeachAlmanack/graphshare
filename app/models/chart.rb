# == Schema Information
#
# Table name: charts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  chart_type :string           not null
#  data       :jsonb            not null
#  author_id  :integer          not null
#  dataset_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chart < ApplicationRecord
  validates :title, :data, :chart_type, presence: true
  validates :chart_type, inclusion: { in: %w(line bar pie area) }

  include Postable

  belongs_to :user,
  foreign_key: :author_id,
  inverse_of: :charts

  belongs_to :dataset,
  foreign_key: :dataset_id,
  inverse_of: :charts,
  optional: true
end
