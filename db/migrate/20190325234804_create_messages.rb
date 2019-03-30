class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.string :image
      t.references :group, foeign_key: true
      t.references :user, foeign_key: true
      t.timestamps
    end
  end
end
