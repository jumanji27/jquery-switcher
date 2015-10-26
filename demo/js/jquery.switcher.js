(function($) {
  $.fn.switcher = function() {
    var checkbox = {
      initialize: function(self) {
        var span = self.children(".js__s_checkbox").children("span");
        var left = self.children(".js__s_label_left");
        var right = self.children(".js__s_label_right");

        span.on("click", function() {
          var self = $(this);
          checkbox.change(self);
          return false;
        });

        left.on("click", function() {
          checkbox.toLeft(span);
        });

        right.on("click", function() {
          checkbox.toRight(span);
        });
      },


      change: function(self) {
        var parent = self.closest(".js__s_checkbox");
        if (parent.hasClass("js__s_left") && self.hasClass("js__s_noactive")) {
          checkbox.toRight(parent);
        }
        else if (parent.hasClass("js__s_right") && self.hasClass("js__s_noactive")) {
          checkbox.toLeft(parent);
        }
      },

      toLeft: function(self) {
        var parent = self.closest(".js__s_checkbox");
        if (parent.hasClass("js__s_right")) {
          parent
            .removeClass("js__s_right")
            .addClass("js__s_left");
          checkbox.help.switchSpan(parent);
        }
      },

      toRight: function(self) {
        var parent = self.closest(".js__s_checkbox");
        if (parent.hasClass("js__s_left")) {
          parent
            .removeClass("js__s_left")
            .addClass("js__s_right");
          checkbox.help.switchSpan(parent);
        }
      },


      help: {
        switchSpan: function(parent) {
          var active = parent.children(".js__s_active");
          var noactive = parent.children(".js__s_noactive");
          active
            .removeClass("js__s_active")
            .addClass("js__s_noactive");
          noactive
            .removeClass("js__s_noactive")
            .addClass("js__s_active");
        }
      }
    };


    return this.each(function() {
      var self = $(this);
      checkbox.initialize(self);
    });
  };
})(jQuery);