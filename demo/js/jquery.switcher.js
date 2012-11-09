// Блог Никиты Лебедева, nazz.me/jquery_switcher
(function($) {
  $.fn.switcher = function() {

    var checkbox = {
      // Переключаем чекбокс
      change: function( self ) {

        var parent = self.closest(".js__s_checkbox");
        // Узнаем куда переключать и блокируем если жмут в уже активный
        if ( parent.hasClass("js__s_left") && self.hasClass("js__s_noactive") ) {
          checkbox.toRight( parent );
        }
        else if ( parent.hasClass("js__s_right") && self.hasClass("js__s_noactive") ) {
          checkbox.toLeft( parent );
        }

      },
      // Переключаем налево
      toLeft: function( self ) {

        var parent = self.closest(".js__s_checkbox");
        // Переключаем только если свитч в положении вправо
        if ( parent.hasClass("js__s_right") ) {
          parent
            .addClass("js__s_left")
            .removeClass("js__s_right");
          checkbox.help.switchSpan( parent );
        }

      },
      // Переключаем вправо
      toRight: function( self ) {

        var parent = self.closest(".js__s_checkbox");
        // Переключаем только если свитч в положении влево
        if ( parent.hasClass("js__s_left") ) {
          parent
            .addClass("js__s_right")
            .removeClass("js__s_left");
          checkbox.help.switchSpan( parent );
        }

      },

      help: {
        // Вспомогательная функция, меняет местами span'ы
        switchSpan: function( parent ) {

          var active = parent.children(".js__s_active");
          var noactive = parent.children(".js__s_noactive");
          active
            .addClass("js__s_noactive")
            .removeClass("js__s_active");
          noactive
            .removeClass("js__s_noactive")
            .addClass("js__s_active");

        }

      }

    }

    return this.each(function() {

      var that = $(this);
      var span = that.children(".js__s_checkbox").children("span");
      var left = that.children(".js__s_label_left");
      var right = that.children(".js__s_label_right");

      span.on("click", function() {
        var that = $(this);
        checkbox.change( that );
        return false;
      });

      left.on("click", function() {
        checkbox.toLeft( span );
      });

      right.on("click", function() {
        checkbox.toRight( span );
      });

    });

  }
})(jQuery);