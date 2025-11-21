import { recruitmentAnim } from "./page/about/recruitment";
import { initHeroVisual } from "./page/home/heroVisual";
import { setupTextLinesReveal } from "./page/textLinesReveal";
import { initVisualScroll } from "./page/home/visualScroll";
import { initLenisSmoothScrolling } from "./utils/lenisSmoothScrolling";
import { initTestimonialSlider } from "./page/home/testimonialSlider";
import { initTestimonialSecondSlider } from "./page/about/testimonialSecondSlider";
import { initInvestorSlider } from "./page/about/investorSlider";

document.addEventListener("DOMContentLoaded", () => {
  initLenisSmoothScrolling();

  // Home Page
  initHeroVisual();
  initVisualScroll();
  initTestimonialSlider();

  // About Page Animations
  recruitmentAnim();
  initTestimonialSecondSlider();
  initInvestorSlider();

  document.fonts.ready.then(() => {
    setupTextLinesReveal();
  });
});
