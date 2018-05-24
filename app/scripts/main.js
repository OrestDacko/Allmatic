$(document).ready(function() {
  console.log('ready!');

  $('.category-menu-nav-label').click(function() {
    $(this)
      .toggleClass('active')
      .parent()
      .children('.category-menu-nav-tree')
      .toggle(200);
  });

  $('.spoiler-trigger').click(function() {
    $(this)
      .parent()
      .next()
      .collapse('toggle');
  });
});
