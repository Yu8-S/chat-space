$(function() {
  function buildHTML(message) {
    var html = `<div class=chatarea-main__user id=chatarea-main__user data-id='${ message.id }'>
                  <p class=chatarea-main__user__name>${message.user_name}</p>
                  <p class=chatarea-main__user__date>${message.created_at}</p>
                </div>
                <p class=chatarea-main__text>${message.body}</p>`
    return html
  }

  var buildMessageHTML = function(message) {
    if (message.body && message.image.url) {
      var html = `<div class="message" data-id='${message.id}'>
        <div class="upper-message">'
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.body}
          </p>
          <img src="'${message.image.url}'" class="lower-message__image" >
        </div>
      </div>`
    } else if (message.body) {
      var html = `<div class="message" data-id='${message.id}'>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.body}
          </p>
        </div>
      </div>`
    } else if (message.image.url) {
      var html = `<div class="message" data-id='${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <img src='${message.image.url}' class=lower-message__image >
        </div>
      </div>`
    };
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
      console.log(html);
      $('.chatarea-main').append(html)
      $('#new_message')[0].reset()
      $('.chatarea-main').animate({ scrollTop:$('.chatarea-main')[0].scrollHeight });
      return false
    })
    .fail(function(date) {
      alert('非同期処理に失敗しました');
    })
  })

  var reloadMessages = function() {
    var last_message_id = $('#chatarea-main__user:last').data('id');
    console.log(last_message_id);
    $.ajax({
      url: location.href,
      type: 'get',
      dataType: 'json',
      data: {
        message: { id: last_message_id }
      }
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(insertHTML, messsage) {
        var html = buildMessageHTML(insertHTML);
        $('.chatarea-main').append(html)
        $('.chatarea-main').animate({ scrollTop:$('.chatarea-main')[0].scrollHeight });
      return false
      })
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
      console.log('error');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    });
  };
  setInterval(reloadMessages, 20000);
});
