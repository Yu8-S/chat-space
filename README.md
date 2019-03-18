## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group|references|foreign_key: true|
|user|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##  usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true, unique: true|
|password|text|null: false|
|e-mail|string|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

##  groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members
