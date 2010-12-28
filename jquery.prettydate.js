/*
* JavaScript Pretty Date
* Copyright (c) 2008 John Resig (jquery.com)
* Licensed under the MIT license.
*/
(function($) {
  var methods = {
    formatDate: function(time) {
      var date = new Date(time),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);

      if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 ) {
        return;
      }

      return day_diff === 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
    }
  };

  $.fn.prettyDate = function() {
    return this.each(function() {
      var date = methods.formatDate($(this).data('time'));
      if (date) {
        $(this).text(date);
      }
    });
  };

})(jQuery);

