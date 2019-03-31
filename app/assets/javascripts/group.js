$(function() {
  $("#user-search-field").keydown(function() {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      date: {keyword: input},
      dataType: 'json'
    })
  })
});
