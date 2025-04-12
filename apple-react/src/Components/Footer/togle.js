import $ from "jquery"

// if ($(window).width() <= 768) {
//   $(".footer-links-wrapper").addClass("someClass");
// } else {
//   $(".footer-links-wrapper").removeClass("someClass");
// }
// $(window).on("resize", function (event) {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper").addClass("someClass");
//   } else {
//     $(".footer-links-wrapper").removeClass("someClass");
//     $(".footer-links-wrapper ul").show();
//   }
// });
// // Footer collapse functionality
// $(document).on("click", ".someClass h3", function () {
//   $(this).next("ul").slideToggle();
//   $(this).toggleClass("expanded");
// });

$(".footer-links-wrapper h3").on("click", function () {
  if ($(window).width() <= 768) {
    $(this).next().slideToggle();
    // $(this).parent().children("ul").slideToggle();
    $(this).toggleClass("expanded");
  }
});
$(window).on("resize", function () {
  // console.log("screen size changed")
  if ($(window).width() > 768) {
    location.reload();
  }
});