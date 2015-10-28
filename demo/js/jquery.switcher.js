(function($) {
  $.fn.switcher = function() {
    var switcher = {
      initialize: function(checkbox) {
        var button = checkbox.children(".js__s_checkbox").children("span");
        var left = checkbox.children(".js__s_label_left");
        var right = checkbox.children(".js__s_label_right");

        button.on("click", function() {
          var checkbox = $(this);
          switcher.change(checkbox);
          return false;
        });

        left.on("click", function() {
          switcher.toLeft(button);
        });

        right.on("click", function() {
          switcher.toRight(button);
        });
      },


      change: function(checkbox) {
        var parent = checkbox.closest(".js__s_checkbox");
        if (parent.hasClass("js__s_left") && checkbox.hasClass("js__s_noactive")) {
          switcher.toRight(parent);
        }
        else if (parent.hasClass("js__s_right") && checkbox.hasClass("js__s_noactive")) {
          switcher.toLeft(parent);
        }
      },

      toLeft: function(button) {
        var parent = button.closest(".js__s_checkbox");
        if (parent.hasClass("js__s_right")) {
          parent
            .removeClass("js__s_right")
            .addClass("js__s_left");
          switcher.help.switchSpan(parent);
        }
      },

      toRight: function(button) {
        var parent = button.closest(".js__s_checkbox");
        if (parent.hasClass("js__s_left")) {
          parent
            .removeClass("js__s_left")
            .addClass("js__s_right");
          switcher.help.switchSpan(parent);
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
      var checkbox = $(this);
      switcher.initialize(checkbox);
    });
  };
})(jQuery);