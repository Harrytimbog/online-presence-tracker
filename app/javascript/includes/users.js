const userUpdate = (() => {
  $(document).ready((function(_this) {
    return function() {
      var addLoggenInUser, channel, pusher, removeLoggedOutUser;
      addLoggenInUser = function(user) {
        $('.left').append("<p class=\"active-user bg-white\" data-id=\"" + user.id + "\">\n  <span class=\"online-icon d-inline-block bg-success\"></span>\n  <span class=\"username\">@" + user.username + "</span>\n</p>");
      };
      removeLoggedOutUser = function(user) {
        user = $('p[data-id=\'' + user.id + '\']');
        $(user).remove();
      };
      pusher = new Pusher('<%= ENV["PUSHER_KEY"] %>', {
        cluster: '<%= ENV["PUSHER_CLUSTER"] %>',
        encrypted: true
      });
      channel = pusher.subscribe('activity');
      channel.bind('login', function(data) {
        return addLoggenInUser(data);
      });
      channel.bind('logout', function(data) {
        removeLoggedOutUser(data);
      });
    };
  })(this));

});

export { userUpdate };