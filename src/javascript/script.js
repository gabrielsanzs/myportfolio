$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".arrow-btn").click(function () {
    $("")
  });
});

var typed = new Typed(".typing", {
  strings: ["Front-end...", "Fullstack."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing2", {
  strings: ["Front-end,", "Fullstack!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
