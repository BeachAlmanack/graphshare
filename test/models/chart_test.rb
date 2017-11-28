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

require 'test_helper'

class ChartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
