$(function () {

  /* ===== 다크모드 토글 ===== */
  var $html = $('html');
  var $themeToggle = $('#themeToggle');

  function syncTheme() {
    $themeToggle.attr('aria-pressed', $html.hasClass('dark') ? 'true' : 'false');
  }
  syncTheme();

  $themeToggle.on('click', function () {
    $html.toggleClass('dark');
    try {
      localStorage.setItem('theme', $html.hasClass('dark') ? 'dark' : 'light');
    } catch (e) {}
    syncTheme();
    return false;
  });


  /* ===== 모바일 메뉴 ===== */
  var $menuToggle = $('#menuToggle');
  var $mobileNav = $('#mobileNav');

  $menuToggle.on('click', function () {
    var isOpen = !$mobileNav.hasClass('is_active');
    $mobileNav.toggleClass('is_active', isOpen);
    $menuToggle.toggleClass('is_active', isOpen).attr('aria-expanded', isOpen ? 'true' : 'false');
    $menuToggle.find('.blind').text(isOpen ? '메뉴 닫기' : '메뉴 열기');
    return false;
  });

  function closeMobileNav() {
    $mobileNav.removeClass('is_active');
    $menuToggle.removeClass('is_active').attr('aria-expanded', 'false').find('.blind').text('메뉴 열기');
  }


  /* ===== 헤더 스크롤 상태 ===== */
  var $header = $('#header');

  function headerState() {
    $header.toggleClass('is_fixed', $(window).scrollTop() > 10);
  }
  headerState();
  $(window).on('scroll', headerState);


  /* ===== 앵커 스무스 스크롤 ===== */
  $('a[href^="#"]').not('.skip_nav').on('click', function () {
    var $target = $($(this).attr('href'));
    if (!$target.length) return true;

    closeMobileNav();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top - ($target.attr('id') === 'hero' ? 0 : 64)
    }, 600);
    return false;
  });


  /* ===== GSAP 스크롤 애니메이션 ===== */
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // 단일 요소 : 아래에서 올라오며 등장
  gsap.utils.toArray('[data-anim]').forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: .8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        // markers: true,
        toggleActions: 'play none none none'
      }
    });
  });

  // 카드 묶음 : 순차(stagger) 등장
  gsap.utils.toArray('[data-anim-group]').forEach(function (group) {
    gsap.from($(group).find('[data-anim-item]').toArray(), {
      opacity: 0,
      y: 36,
      duration: .7,
      stagger: .12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        // markers: true,
        toggleActions: 'play none none none'
      }
    });
  });

  // 현재 보고 있는 섹션의 네비 활성화
  gsap.utils.toArray('main section[id]').forEach(function (sec) {
    var id = '#' + sec.id;
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 50%',
      end: 'bottom 50%',
      // markers: true,
      onToggle: function (self) {
        $('.nav_link[href="' + id + '"]').toggleClass('is_active', self.isActive);
      }
    });
  });

});
