(($) ->
  $.fn.switcher = ->
    checkbox =
      initialize: (self) ->
        span = self.children('.js__s_checkbox').children('span')
        left = self.children('.js__s_label_left')
        right = self.children('.js__s_label_right')

        span.on('click', ->
          self = $(this)
          checkbox.change(self)
          false
        )

        left.on('click', ->
          checkbox.toLeft(span)
        )

        right.on('click', ->
          checkbox.toRight(span)
        )


      change: (self) ->
        parent = self.closest('.js__s_checkbox')
        if parent.hasClass('js__s_left') && self.hasClass('js__s_noactive')
          checkbox.toRight(parent)
        else if parent.hasClass('js__s_right') && self.hasClass('js__s_noactive')
          checkbox.toLeft(parent)

      toLeft: (self) ->
        parent = self.closest('.js__s_checkbox')
        if parent.hasClass('js__s_right')
          parent
            .removeClass('js__s_right')
            .addClass('js__s_left')
          checkbox.help.switchSpan(parent)

      toRight: (self) ->
        parent = self.closest('.js__s_checkbox')
        if parent.hasClass('js__s_left')
          parent
            .removeClass('js__s_left')
            .addClass('js__s_right')
          checkbox.help.switchSpan(parent)


      help:
        switchSpan: (parent) ->
          active = parent.children('.js__s_active')
          noactive = parent.children('.js__s_noactive')
          active
            .removeClass('js__s_active')
            .addClass('js__s_noactive')
          noactive
            .removeClass('js__s_noactive')
            .addClass('js__s_active')


    @each( ->
      self = $(this)
      checkbox.initialize(self)
    )
)(jQuery)