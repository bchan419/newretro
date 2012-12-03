class Retro < ActiveRecord::Base
  attr_accessible :captured_on
  
  has_many :items, dependent: :destroy
  
  def stats
    [items.for_category(Category.fuzzy).count,
      items.for_category(Category.aha).count]
  end
end
