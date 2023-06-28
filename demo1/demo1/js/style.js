function changeImage(anything) {
  document.getElementById("slider").src = anything;
}

$(window).bind("scroll", function () {
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
    $(".copy_none").addClass("dis_none");
  } else {
    $(".copy_none").removeClass("dis_none");
  }
});
