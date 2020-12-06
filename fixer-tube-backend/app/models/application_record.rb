class ApplicationRecord < ActiveRecord::Base
  before_create :set_slug
  before_update :set_slug
  
  self.abstract_class = true

  private
  def set_slug
      self.slug=self.name.parameterize
  end
end
