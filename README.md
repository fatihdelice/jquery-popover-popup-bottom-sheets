# What is a Popover?
A popover is a small window component that typically appears when a button or link is clicked, offering additional information or actions. Popovers can provide extra details or allow for quick operations without navigating the user away from the current page.

In the example provided in this article, a popover is displayed when a button is clicked. Additionally, if the browser doesn't support the native popover feature, a fallback solution written with jQuery kicks in. This ensures that popovers can be used without creating a deficient user experience, even if the browser lacks native support.

# HTML Structure
In our code, the popover is defined as a component triggered by clicking a button. Here's the HTML part:

HTML
```html
<button popovertarget="my-popover" class="popover-button">Open Popover</button>
 
<div popover id="my-popover" class="popover-container mobilePopoverBottomSheet">
  <div class="popoverTitle">
    <span>Popup Title</span>
    <button class="closePopover">
      <i class="close-icon"></i>
    </button>
  </div>
  <div class="popoverContent">
    <span>Greetings, one and all!</span>
  </div>
</div>
```
This structure consists of two main components:

- Button: The button that triggers the popover to open. The popovertarget attribute specifies which popover to open.
- Popover Container: The container that holds the popover's content. This component, with the popover ID, is also optimized for mobile devices.

# Popover Design with CSS
CSS determines the popover's appearance and animations. There are a few key points to note here:

- Responsive Design: A @media query is used to create a special design for mobile devices. When the screen width falls below 767px, the popover is set to full screen width and opens with a bottom-to-top animation.
- Animations: Keyframes are used to design the popover's opening animation. On larger screens, the popover opens by increasing its opacity and scaling up. On mobile, it slides up vertically to be presented to the user.
CSS
```css
@keyframes popOver {
    from {
      opacity: 0;
      scale: 0.8;
    }
}
 
@media(max-width: 767px) {
  @keyframes mobilePopOver {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
  }
}
```
# Popover Functionality with JavaScript
The JavaScript code contains two main functions:

- Browser Compatibility: If modern browsers don't support the popover API, a fallback popover created with jQuery is used. HTMLElement.prototype.hasOwnProperty("popover") checks if the browser has the popover feature.
- Fallback Popover Solution: If the browser doesn't support popovers, the fallback solution kicks in. The popover is hidden, and the popover-fallback class is added, presenting a window in a fixed and centered position. Additionally, a darkening backdrop is added to the background when it opens. The popover can be opened by clicking the button, and it closes when the user clicks the backdrop.
JavaScript
```js
if(!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.hide();
  popover.addClass('popover-fallback');
  $('body').append('<div class="backdrop" style="display:none;"></div>')
 
  $(document).on('click', '[popovertarget]', function() {
    var popovertarget = $(this).attr('popovertarget');
    $('[id="'+popovertarget+'"], .backdrop').show();
  });
 
  $(document).on('click', '.backdrop', function() {
    $('.popover-fallback, .backdrop').hide();
  });
}
```
# Conclusion
Popovers are an important UI component that enhance user experience and save screen space. In this article, we examined a popover example created with jQuery and CSS, considering browser compatibility. This design, optimized especially for mobile devices, aims to provide a seamless experience on both desktop and mobile devices.

When using popovers and similar components, supporting both modern and older browsers is crucial. Thanks to the fallback solution in this article, a user-friendly experience is provided even for devices without native browser support.

For more projects and designs, you can use this method to present interactive content on your page and provide a better experience for your users.

You can visit this URL for the related code example.
