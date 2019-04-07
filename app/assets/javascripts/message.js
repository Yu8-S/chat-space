$(function() {
  function buildHTML(message) {
    var html = `<div class=chatarea-main__user data-id=${message.id}>
                  <p class=chatarea-main__user__name>${message.user_name}</p>
                  <p class=chatarea-main__user__date>${message.created_at}</p>
                </div>
                <p class=chatarea-main__text>${message.body}</p>`
    return html
  }

  var buildMessageHTML = function(message) {
    var html = `<div class=chatarea-main__user data-id=${message.id}>
                  <p class=chatarea-main__user__name>${message.user_name}</p>
                  <p class=chatarea-main__user__date>${message.created_at}</p>
                </div>
                <p class=chatarea-main__text>${message.body}</p>`
    return html;
  };

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var form = $('#new_message');
    var $this = $(this);

    $('.submit').removeAttr('data-disable-with');

    var formData = new FormData($this.get(0));
    $.ajax ({
      url: location.href,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chatarea-main').append(html)
      $('#new_message')[0].reset()
      $('.chatarea-main').animate({ scrollTop:$('.chatarea-main')[0].scrollHeight });
    })
    .fail(function(date) {
      alert('非同期処理に失敗しました');
    })
  })

  function reloadMessages() {
    var last_message_id = $('.chatarea-main__user:last').data('id')
    var href = location.href.replace('/messages', '/api/messages')
    $.ajax({
      url: href,
      type: 'GET',
      data: {id: last_message_id},
      dataType: 'json'
    })
    .done(function(data) {
      $.each(data, function(i, data) {
        var html = buildMessageHTML(data);
        $('.chatarea-main').append(html)
      })
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
      console.log('error');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    })
  }

  setInterval(reloadMessages, 5000);
});
