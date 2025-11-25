function initInvestorSlider() {
  const component = document.querySelector(".investor_slider_component");
  if (!component) return;

  const swiperEl = component.querySelector(".swiper.is-investor");
  const prevBtn = component.querySelector("[data-nav-btn='prev']");
  const nextBtn = component.querySelector("[data-nav-btn='next']");
  if (!swiperEl) return;

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 3,
    // loop: true,
    grabCursor: true,
    speed: 800,
    keyboard: { enabled: true, pageUpDown: false },
    mousewheel: { enabled: true, forceToAxis: true, thresholdDelta: 25 },
    watchSlidesProgress: true,
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
  });
}

export { initInvestorSlider };
