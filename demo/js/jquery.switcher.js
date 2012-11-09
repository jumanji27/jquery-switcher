// Блог Никиты Лебедева, nazz.me/jquery_switcher
(function($) {
  $.fn.switcher = function() {

    var checkbox = {
      // Переключаем чекбокс
      change: function( self ) {

        var parent = $(".js__s_checkbox");
        // Узнаем куда переключать и блокируем если жмут в уже активный
        if ( parent.hasClass("js__s_left") && self.hasClass("js__s_noactive") ) {
          checkbox.toRight();
        }
        else if ( parent.hasClass("js__s_right") && self.hasClass("js__s_noactive") ) {
          checkbox.toLeft();
        }

      },
      // Переключаем налево
      toLeft: function() {

        var parent = $(".js__s_checkbox");
        // Переключаем только если свитч в положении вправо
        if ( parent.hasClass("js__s_right") ) {
          parent
            .addClass("js__s_left")
            .removeClass("js__s_right");
          checkbox.help.switchSpan();
          checkbox.help.hiddenInputs( "left" );
        }

      },
      // Переключаем вправо
      toRight: function() {

        var parent = $(".js__s_checkbox");
        // Переключаем только если свитч в положении влево
        if ( parent.hasClass("js__s_left") ) {
          parent
            .addClass("js__s_right")
            .removeClass("js__s_left");
          checkbox.help.switchSpan();
          checkbox.help.hiddenInputs( "right" );
        }

      },

      help: {
        // Вспомогательная функция, меняет местами span'ы
        switchSpan: function() {

          var active = $(".js__s_active");
          var noactive = $(".js__s_noactive");

          active
            .addClass("js__s_noactive")
            .removeClass("js__s_active");
          noactive
            .removeClass("js__s_noactive")
            .addClass("js__s_active");

        },

        hiddenInputs: function( type ) {

          var left = $(".js__left_input");
          var right = $(".js__right_input");

          if ( type === "left" ) {
            right.removeClass("js__none");
            left.addClass("js__none");
          }
          else if ( type === "right" ) {
            left.removeClass("js__none");
            right.addClass("js__none");
          }

        }

      }

    }

    return this.each(function() {

      var that = $(this);
      var span = that.children(".js__s_checkbox").children("span");
      var left = that.children(".js__s_label_left");
      var right = that.children(".js__s_label_right");

      span.on("click", function() {
        var self = $(this)
        checkbox.change( self );
        return false;
      });

      left.on("click", function() {
        checkbox.toLeft();
      });

      right.on("click", function() {
        checkbox.toRight();
      });

    });

  }
})(jQuery);