(function() {
  var ready;

  ready = function() {};

  $(document).ready(ready);

  $(document).on('turbolinks:load', ready);

}).call(this);
