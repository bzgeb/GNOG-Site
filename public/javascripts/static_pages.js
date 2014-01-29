(function() {
  $("#mail-form").bind("ajaxComplete", function(xhr, status) {
    return $("#response").html(status.responseText);
  }).bind("beforeSend", function() {
    return $("#response").html("<p>Sending...</p>");
  });

  $("#mail-form-phone").bind("ajaxComplete", function(xhr, status) {
    return $("#response-phone").html(status.responseText);
  }).bind("beforeSend", function() {
    return $("#response-phone").html("<p>Sending...</p>");
  });
}).call(this);
