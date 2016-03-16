//Responsive Tabs
(function ($) {
  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function (e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
    $current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function ($el, position) {
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass('pull-xs-' + position);
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');

    updateDropdownMenu($prev, 'left');
    updateDropdownMenu($current, 'center');
    updateDropdownMenu($next, 'right');
  });

})(jQuery);

//Placement functions
(function ($) {
  // goTo
  // use: $("#element").goTo();
  $.fn.goTo = function () {
    var fromTop = 90;
    $('html, body').animate({
      scrollTop: $(this).offset().top - fromTop
    }, 'fast');
    return this; // for chaining...
  }
  // end goTo
  //center
  $.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
    return this;
  }
  //end center
})(jQuery);

//Font-Awesome 'beautiful' checkbox
function faCheckbox() {
  $('.input-group-addon.beautiful').each(function () {
    var $widget = $(this),
        $input = $widget.find('input'),
        type = $input.attr('type');
    settings = {
      checkbox: {
        on: { icon: 'fa fa-2x fa-check-circle-o' },
        off: { icon: 'fa fa-2x fa-circle-o' }
      },
      radio: {
        on: { icon: 'fa fa-2x fa-dot-circle-o' },
        off: { icon: 'fa fa-2x fa-circle-o' }
      }
    };

    if ($widget.children('span[disabled="disabled"]').length > 0) {
      var $input = $widget.children('span[disabled="disabled"]').find('input');
      $input.unwrap();
      $widget.addClass('not-allowed');
    }

    if ($widget.children('span').length == 0) {
      $widget.prepend('<span class="' + settings[type].off.icon + '"></span>');
    }

    $widget.on('click', function () {
      if (!$input.is('[disabled="disabled"]')) {
        $input.prop('checked', !$input.is(':checked'));
        updateDisplay();
      }
    });

    function updateDisplay() {
      var isChecked = $input.is(':checked') ? 'on' : 'off';

      $widget.find('.fa').attr('class', settings[type][isChecked].icon);
      if (isChecked === "on") {
        $widget.closest('.input-group').find('.beautiful').css("color", "#00CC00");
      } else {
        $widget.closest('.input-group').find('.beautiful').css("color", "inherit");
      }
    }
    updateDisplay();
  });
}

//Second Level Dropdown
function secondLevelDropdown() {
  $(".dropdown-menu > li > a.trigger").on("click", function (e) {
    var current = $(this).next();
    var grandparent = $(this).parent().parent();
    if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret'))
      $(this).toggleClass('right-caret left-caret');
    grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
    grandparent.find(".sub-menu:visible").not(current).hide();
    current.toggle();
    e.stopPropagation();
  });
  $(".dropdown-menu > li > a:not(.trigger)").on("click", function () {
    var root = $(this).closest('.dropdown');
    root.find('.left-caret').toggleClass('right-caret left-caret');
    root.find('.sub-menu:visible').hide();
  });
}

/* Adds tooltip where the data-toggle is set */
function registerTooltips() {
  //$('[data-toggle="tooltip"]').tooltip({ placement: 'top', trigger: 'hover' });
  //$('[data-toggle="tooltip-bottom"]').tooltip({ placement: 'bottom', trigger: 'hover' });
  $(document).popover({
    selector: '[data-toggle=popover-focus]',
    trigger: 'focus'
  });
  $('[data-toggle="popover"]').popover();
}

/* DateTimePicker */
function registerDateTimePicker() {

  var dp = $('[data-datetime="date"]');
  var tp = $('[data-datetime="time"]');
  var dtp = $('[data-datetime="both"]');
  var dtps = $('[data-datetime="both-side"]');

  dp.datetimepicker({
    format: 'MM/DD/YYYY',
    widgetPositioning: {
      horizontal: 'auto',
      vertical: 'bottom'
    },
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-dot-circle-o',
      clear: 'fa fa-trash',
      close: 'fa fa-times'
    },
    ignoreReadonly: true
  });

  tp.datetimepicker({
    format: 'LT',
    showClose: true,
    widgetPositioning: {
      horizontal: 'auto',
      vertical: 'bottom'
    },
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-dot-circle-o',
      clear: 'fa fa-trash',
      close: 'fa fa-times'
    },
    ignoreReadonly: true
  });

  dtp.datetimepicker({
    showClose: true,
    widgetPositioning: {
      horizontal: 'auto',
      vertical: 'bottom'
    },
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-dot-circle-o',
      clear: 'fa fa-trash',
      close: 'fa fa-times'
    },
    ignoreReadonly: true
  });

  dtps.datetimepicker({
    showClose: true,
    widgetPositioning: {
      horizontal: 'auto',
      vertical: 'bottom'
    },
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-dot-circle-o',
      clear: 'fa fa-trash',
      close: 'fa fa-times'
    },
    ignoreReadonly: true,
    sideBySide: true
  });
}
/* End DateTimePicker */
