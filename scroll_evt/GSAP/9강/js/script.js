$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });

  //   gsap
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width:1024px)": function () {
      //02. 가로스크롤
      let list = gsap.utils.toArray(".work ul li");
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1), // 가로스크롤 ::원래 리스트의 갯수보다 1을 빼ㅏ서 길이를 구한 후 가로로 이동
        ease: "none",
        scrollTrigger: {
          trigger: ".work",
          pin: true,
          scrub: 1,
          start: "center center",
          end: "300%", //뷰포트 높의의 300% -> 숫자가 클수록 느려짐
          //   markers: true,
        },
      });

      //   imgbox 모션
      gsap.utils.toArray(".work ul li .imgBox").forEach((imgBox) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center right",
              end: "center left",
              scrub: true,
              //   markers: true,
            },
          })
          // 커짐
          .to(imgBox, { clipPath: "inset(0%)", ease: "none", duration: 0.5 })
          // 다시 작아짐
          .to(imgBox, { clipPath: "inset(30%)", ease: "none", duration: 0.5 });
      });

      //   textbox
      gsap.utils.toArray(".work ul li .textBox").forEach((textBox) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 70%",
              end: "center 25%",
              scrub: true,
              //   markers: true,
            },
          })
          // 커짐
          .to(textBox, { opacity: "1", x: -100 })
          // 다시 작아짐
          .to(textBox, { opacity: "0" });

        gsap.utils.toArray(".num").forEach((text) => {
          let num = text.getAttribute("data-text");
          let counter = document.querySelector(".counter .now");

          ScrollTrigger.create({
            trigger: text,
            start: "0% center",
            end: "100% center",
            scrub: true,
            containerAnimation: scrollTween,
            // markers: true,
            onEnter: (self) => (counter.innerText = num), //스크롤 위치가 start를 지나 앞으로 이동할 때 .counter .now에 작성
            onEnterBack: (self) => (counter.innerText = num), //스크롤 위치가 enf를 지나 뒤로 이동할 때 .counter .now에 작성
          });
        });
      });
    },
  });
});
