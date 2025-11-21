function initTestimonialSlider() {
  const component = document.querySelector(".testimonial_slider_component");
  if (!component) return;

  const swiperEl = component.querySelector(".swiper.is-testimonial");
  const prevBtn = component.querySelector(".swiper-button-prev");
  const nextBtn = component.querySelector(".swiper-button-next");
  if (!swiperEl) return;

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 1,
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

export { initTestimonialSlider };
