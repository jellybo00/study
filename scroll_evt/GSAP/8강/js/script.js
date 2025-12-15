$(function () {
  gsap.registerPlugin(ScrollTrigger);

  //  visual
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    })
    .to(".visual h1", { opacity: "1", ease: "none", duration: 10 }, 5)
    .to(
      ".visual img",
      {
        scale: "0.4",
        ease: "none",
        duration: 10,
        opacity: 0.3,
      },
      5
    );

  // imgBox
  gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: imgBox,
        start: "50% 100%",
        toggleClass: { targets: imgBox, className: "active" },
        scrub: 1,
        // markers: true,
      },
    });
  });

  //   textBox
  gsap.utils.toArray(".textBox").forEach(function (textBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: textBox,
        start: "50% 80%",
        end: "100% 0%",
        toggleClass: { targets: textBox, className: "active" },
        scrub: 1,
        markers: true,
      },
    });
  });
});
