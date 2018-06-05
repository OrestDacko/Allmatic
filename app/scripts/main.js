$(document).ready(function() {
  console.log("ready!");
  $(".category-menu-nav-label").click(function() {
    $(this)
      .toggleClass("active")
      .parent()
      .children(".category-menu-nav-tree")
      .toggle(200);
  });

  $(".spoiler-trigger").click(function() {
    $(this)
      .parent()
      .next()
      .collapse("toggle");
  });

  $("#filter").bind("click", ".filter-select", function(e) {
    if (
      $(e.target).hasClass("material-icons") ||
      $(e.target).hasClass("chosen-item")
    ) {
      $(e.target)
        .parent()
        .toggleClass("active")
        .find(".options")
        .slideToggle();
    }
  });
  $("#filter").on("submit", function(e) {
    e.preventDefault();
    const data = $(this).serialize();
    const action = $(this).attr("action");
    const method = $(this).attr("method");

    console.log(data);
    console.log(action);
    console.log(method);
  });

  $(".minus").click(function() {
    var $input = $(this)
      .parent()
      .find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function() {
    var $input = $(this)
      .parent()
      .find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

$("#q")
  .val("fsdfsdf")
  .trigger("change");
