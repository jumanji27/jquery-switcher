# Блог Никиты Лебедева, nazz.me/jquery_switcher
(($) ->
  $.fn.switcher = ->

    checkbox =

      # Обработчики
      initialize: (self) ->

        span = self.children(".js__s_checkbox").children("span")
        left = self.children(".js__s_label_left")
        right = self.children(".js__s_label_right")

        span.on "click", ->
          self = $(this)
          checkbox.change(self)
          false

        left.on "click", ->
          checkbox.toLeft(span)

        right.on "click", ->
          checkbox.toRight(span)


      # Переключаем чекбокс
      change: (self) ->

        parent = self.closest(".js__s_checkbox")
        # Узнаем куда переключать и блокируем если жмут в уже активный
        if parent.hasClass("js__s_left") && self.hasClass("js__s_noactive")
          checkbox.toRight(parent)
        else if parent.hasClass("js__s_right") && self.hasClass("js__s_noactive")
          checkbox.toLeft(parent)


      # Переключаем влево
      toLeft: (self) ->

        parent = self.closest(".js__s_checkbox")
        # Переключаем только если свитч в положении вправо
        if parent.hasClass("js__s_right")
          parent
            .removeClass("js__s_right")
            .addClass("js__s_left")
          checkbox.help.switchSpan(parent)


      # Переключаем вправо
      toRight: (self) ->

        parent = self.closest(".js__s_checkbox")
        # Переключаем только если свитч в положении влево
        if parent.hasClass("js__s_left")
          parent
            .removeClass("js__s_left")
            .addClass("js__s_right")
          checkbox.help.switchSpan(parent)


      help:

        # Вспомогательная функция, меняет местами span'ы
        switchSpan: (parent) ->
          active = parent.children(".js__s_active")
          noactive = parent.children(".js__s_noactive")
          active
            .removeClass("js__s_active")
            .addClass("js__s_noactive")
          noactive
            .removeClass("js__s_noactive")
            .addClass("js__s_active")


    # Циклом ищем что вызвано
    @each ->
      self = $(this)
      checkbox.initialize(self)

) jQuery