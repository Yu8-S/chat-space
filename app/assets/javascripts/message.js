$(function(){
  $('#new_message').on('submit', function(e) {
    e.preventDefaul();
    var formData = new FormData(this);
    var href = window.location.href + '/message'
  })
});
