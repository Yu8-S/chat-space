$(function() {
  var search = $('#user-search-result');
  var adduser = $('#user-add-member');
  function buildHTML(user) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ user.name }</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${ user.user_id } data-user-name=${  user.name}>追加</a>
              </div>`
    search.append(html)
  }

  function addMember(id, name) {
    var html = `<div class='chat-group-user clearfix js-chat-member'id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value=${ id }>
                  <p class='chat-group-user__name'>${ name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
    adduser.append(html)
  }

  $("#user-search-field").on('keyup', function() {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
    })


    .done(function(data) {
      $("#user-search-result").empty();
      if (data.length !== 0) {
        data.forEach(function(html) {
          buildHTML(html);
        })
      }

    })
    .fail(function(data) {
      alert('非同期処理に失敗しました');
    })
  })

  $(document).on('click', 'a', function() {
    var name = $(this).attr('data-user-name')
    var id = $(this).attr('data-user-id')
    addMember(id, name)
    $("#user-search-result").empty();
  })

  $('#user-add-member').on('click', 'a', function() {
    $("#user-add-member").empty();
  })
});
