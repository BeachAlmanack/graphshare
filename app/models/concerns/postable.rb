module Postable

  extend ActiveSupport::Concern
  included do
    has_many :posts, as: :postable

    has_many :likes,
    through: :posts
  end

end