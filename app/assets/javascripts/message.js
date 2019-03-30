$(function() {
  function buildHTML(message) {
    var html = `%div.chatarea-main__user
                  %p.chatarea-main__user__name
                    = message.user.name
                  %p.chatarea-main__user__date
                     = message.created_at.strftime("%Y/%m/%d %H:%M")
                %p.chatarea-main__text
                  - if message.body.present?
                    = message.body
                    = image_tag message.image.url if message.image.present?`
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefaul();
    var formData = new FormData(this);
    var href = window.location.href + '/message'
    $.ajax ({
      url: href,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(date) {
      var html = buildHTML(date);
      $('.chatarea-main').append(html)
      $('#new_message')[0].reset()
      $('.chatarea-main').animate({ scrollTop:$('.chatarea-main')[0].scrollHeight }, 'fast');
    })
    .fail(function(date) {
      alert('非同期処理に失敗しました');
    })
  })
});
