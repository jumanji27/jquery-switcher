// Nikita Lebedev's blog, jumanji.name/jquery_switcher
(function($) {
  $.fn.switcher = function() {

    var checkbox = {

      // Events
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

      // Switch checkbox
      change: function(self) {

        var parent = self.closest(".js__s_checkbox");
        // We learn to switch and lock in a pinch if you have an active
        if ( parent.hasClass("js__s_left") && self.hasClass("js__s_noactive") ) {
          checkbox.toRight(parent);
        }
        else if ( parent.hasClass("js__s_right") && self.hasClass("js__s_noactive") ) {
          checkbox.toLeft(parent);
        }

      },

      // Switch left
      toLeft: function(self) {

        var parent = self.closest(".js__s_checkbox");
        // Toggle switch only if in the right position
        if ( parent.hasClass("js__s_right") ) {
          parent
            .removeClass("js__s_right")
            .addClass("js__s_left");
          checkbox.help.switchSpan(parent);
        }

      },

      // Switch right
      toRight: function(self) {

        var parent = self.closest(".js__s_checkbox");
        // Toggle switch only if in the left position
        if ( parent.hasClass("js__s_left") ) {
          parent
            .removeClass("js__s_left")
            .addClass("js__s_right");
          checkbox.help.switchSpan(parent);
        }

      },

      help: {

        // Helper function that swaps the spans
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

    // In loop looking for what is called
    return this.each(function() {
      var self = $(this);
      checkbox.initialize(self);
    });

  };
})(jQuery);

