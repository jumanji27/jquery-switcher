(($) ->
  $.fn.switcher = ->
    switcher =
      initialize: (checkbox) ->
        button = checkbox.children('.js__s_checkbox').children('span')
        left = checkbox.children('.js__s_label_left')
        right = checkbox.children('.js__s_label_right')

        button.on('click', ->
          checkbox = $(this)
          switcher.change(checkbox)
          false
        )

        left.on('click', ->
          switcher.toLeft(button)
        )

        right.on('click', ->
          switcher.toRight(button)
        )


      change: (checkbox) ->
        parent = checkbox.closest('.js__s_checkbox')
        if parent.hasClass('js__s_left') && checkbox.hasClass('js__s_noactive')
          switcher.toRight(parent)
        else if parent.hasClass('js__s_right') && checkbox.hasClass('js__s_noactive')
          switcher.toLeft(parent)

      toLeft: (button) ->
        parent = button.closest('.js__s_checkbox')
        if parent.hasClass('js__s_right')
          parent
            .removeClass('js__s_right')
            .addClass('js__s_left')
          switcher.help.switchSpan(parent)

      toRight: (button) ->
        parent = button.closest('.js__s_checkbox')
        if parent.hasClass('js__s_left')
          parent
            .removeClass('js__s_left')
            .addClass('js__s_right')
          switcher.help.switchSpan(parent)


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
      checkbox = $(this)
      switcher.initialize(checkbox)
    )
)(jQuery)