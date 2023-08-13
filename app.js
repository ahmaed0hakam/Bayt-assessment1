$(document).ready(function() {
  $('.show-more').on('click', function() {
    $('footer').toggleClass('expanded');
    $('.small-cyrcle img').toggleClass('rotate');
    $('.hidden').toggleClass('visible');
  });

  $('.add').on('click', function() {
    $('.secondary').toggleClass('primary');
    const $icon = $('.add img');
    $icon.toggleClass('rotate');

    if ($icon.attr('src') === 'icons/plus.png') {
      $icon.attr('src', 'icons/minus.png');
    } else {
      $icon.attr('src', 'icons/plus.png');
    }
  });
});

function smoothScrollToAnchor(anchorSelector) {
  document.querySelectorAll(anchorSelector).forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function showAlert(message) {
  alert(message);
}