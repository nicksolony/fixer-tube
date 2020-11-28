class AddSlugToMainCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :main_categories, :slug, :string
  end
end
