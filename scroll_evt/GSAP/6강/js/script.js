$(function () {
  // 스플리팅 호출
  Splitting();

  // header영역 스크롤 방향 감지 이벤트
  var prevSCrollTop = 0;
  document.addEventListener("scroll", function () {
    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevSCrollTop) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
    prevSCrollTop = nowScrollTop;
  });

  // 스크롤라 호출
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });

  // svg path 길이 구하기
  // each() 매서드는 object와 배열 모두 사용할 수 있는 반복함수, length 속성을 갖는 배열과 유사 배열객체들의 index를 기준으로 첫번째 매개변수로 배열이나 객체를 받고, 두번째 매개변수로 콜백함수 값을 인자로 받음
  $(".svg_ani")
    .find("#svgAni05")
    .each(function (i, path) {
      var length = path.getTotalLength();
      // alert(length)
    });

  // gsap
  //   gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )
    .to(".svg_ani path", { stroke: "#000", ease: "none", duration: 5 }, 0)
    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".con01 .imgWrap img",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      {
        "clip-path": "inset(0% 0% 0% 0% round 0%)",
        ease: "none",
        duration: 10,
      },
      0
    );

  // worklist 시작할 떄 title ani
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".con02 .title .a",
      { x: "-100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    )
    .fromTo(
      ".con02 .title .b",
      { x: "100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    );

  // work list ani
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    )
    .to(
      ".con02 .title",
      {
        position: "fixed",
        ease: "none",
        top: "0",
        left: "0",
        width: "100%",
        duration: 5,
      },
      0
    )
    .fromTo(
      ".workList",
      {
        margin: "0 auto",
      },
      {
        margin: "100vh auto 0",
        position: "relative",
        zIndex: "10",
        duration: 1,
      },
      0
    );

  // worklist 끝날때 타이틀이 화면 밖으로
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "100% 50%",
        end: "100% 0%",
        scrub: 1,
        markers: true,
      },
    })
    .to(".con02 .title .a", { x: "-100%", ease: "none", duration: 5 }, 0)
    .to(".con02 .title .b", { x: "100%", ease: "none", duration: 5 }, 0);

  //simplyscroll
  $(".con03 .list").simplyScroll({
    speed: 4,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});
