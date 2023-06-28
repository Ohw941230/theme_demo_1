var i = 0;

$(document).on("click", ".slider-next", function () {
  var next = i + 20;
  if (i === 80) {
    $("div.scroll-wrapper ul.row li").removeAttr("style");
    $("div.scroll-wrapper ul.row li").attr(
      "style",
      "left:0%;-webkit-transition:left 1s;transition:left 1s;"
    );
    i = 0;
  } else {
    $("div.scroll-wrapper ul.row li").removeAttr("style");
    $("div.scroll-wrapper ul.row li").attr(
      "style",
      "left:-" + next + ".1%;-webkit-transition:left 1s;transition:left 1s;"
    );
    i = next;
  }
});

$(document).on("click", ".slider-previous", function () {
  var previous = i - 20;
  if (i === 0) {
    $("div.scroll-wrapper ul.row li").removeAttr("style");
    $("div.scroll-wrapper ul.row li").attr(
      "style",
      "left:-100%;-webkit-transition:left 1s;transition:left 1s;"
    );
    i = 80;
  } else {
    $("div.scroll-wrapper ul.row li").removeAttr("style");
    $("div.scroll-wrapper ul.row li").attr(
      "style",
      "left:-" + previous + ".1%;-webkit-transition:left 1s;transition:left 1s;"
    );
    i = previous;
  }
});
