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
|groupname|string|null: false|


### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members
