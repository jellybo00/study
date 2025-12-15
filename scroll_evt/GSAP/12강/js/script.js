$(document).on("click", 'a[href="#"]', function (e) {
  e.preventDefault();
});

$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });

  Splitting();

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
      markers: true,
      snap: 1 / (section.length - 1),
    });
  });
});
