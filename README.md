## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :group, dependent => :destroy
- belongs_to :user

##  usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|text|null: false|
|password|text|null: false|
|e-mail|string|null: false|

### Association
- has_many :messages
- has_many :groups, through :member
