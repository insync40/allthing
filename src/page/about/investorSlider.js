function initInvestorSlider() {
  const component = document.querySelector(".investor_slider_component");
  if (!component) return;

  const swiperEl = component.querySelector(".swiper.is-investor");
  const prevBtn = component.querySelector(".swiper-button-prev");
  const nextBtn = component.querySelector(".swiper-button-next");
  if (!swiperEl) return;

  const swiper = new Swiper(swiperEl, {
    slidesPerView: "auto",
    loop: true,
    grabCursor: true,
    speed: 800,
    keyboard: { enabled: true, pageUpDown: false },
    mousewheel: { enabled: true, forceToAxis: true, thresholdDelta: 25 },
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
  });
}

export { initInvestorSlider };
