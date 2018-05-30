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

  // $(".select2-multiple").select2MultiCheckboxes({
  //   width: "auto",
  //   placeholder: "Your placeholder",
  //   allowClear: false,
  //   templateSelection: function(selected, total) {
  //     return "Selected " + selected.length + " of " + total;
  //   }
  // });
});

$("#q")
  .val("fsdfsdf")
  .trigger("change");
