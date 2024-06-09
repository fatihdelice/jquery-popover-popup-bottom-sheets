$(document).ready(function () {
  var popover = $('[popover]');

  $('.closePopover').click(function (event) {
    var popover = $(this).closest('div[popover]');
    popover[0].hidePopover();
  });

  //mobile compatibility

  if (popover.length > 0) {
    if (!HTMLElement.prototype.hasOwnProperty("popover")) {
      popover.hide();
      popover.addClass('popover-fallback');
      $('body').append('<div class="backdrop" style="display:none;"></div>')

      $(document).on('click', '[popovertarget]', function () {
        var popovertarget = $(this).attr('popovertarget')
        $('[id="' + popovertarget + '"], .backdrop').show();
        var newEvent = $.Event('toggle', { originalEvent: { newState: "open" } });
        $('[id="' + popovertarget + '"]').trigger(newEvent);
      });
      $(document).on('click', '.backdrop', function () {
        $('.popover-fallback, .backdrop').hide();
      });
      HTMLElement.prototype.showPopover = function () {
        $('#' + this.attributes.id.value + ', .backdrop').show();
        var newEvent = $.Event('toggle', { originalEvent: { newState: "open" } });
        $('#' + this.attributes.id.value).trigger(newEvent);
      }
      HTMLElement.prototype.hidePopover = function () {
        $('.popover-fallback, .backdrop').hide();
      }
    }
  }
});
