import { recruitmentAnim } from "./page/about/recruitment";
import { initHeroVisual } from "./page/home/heroVisual";
import { setupTextLinesReveal } from "./page/textLinesReveal";
import {
  initVisualScroll,
  initVisualScrollMobile,
} from "./page/home/visualScroll";
import { initLenisSmoothScrolling } from "./utils/lenisSmoothScrolling";
import { initTestimonialSlider } from "./page/home/testimonialSlider";
import { initTestimonialSecondSlider } from "./page/about/testimonialSecondSlider";
import { initInvestorSlider } from "./page/about/investorSlider";
import {
  initProductHeroItem,
  initProductHeroVisual,
  initProductThumbnailVisual,
} from "./page/products/productRive";
import {
  initSolutionHeroItem,
  initSolutionsThumbnailVisual,
  solutionsHeroVisual,
} from "./page/solutions/solutionsRive";

document.addEventListener("DOMContentLoaded", () => {
  initLenisSmoothScrolling();

  // Home Page
  initHeroVisual();
  initVisualScroll();
  initTestimonialSlider();
  initVisualScrollMobile();

  // About Page Animations
  recruitmentAnim();
  initTestimonialSecondSlider();
  initInvestorSlider();

  //   Product Page Animations
  initProductHeroVisual();
  initProductThumbnailVisual();
  initProductHeroItem();

  // Solutions Page Animations
  solutionsHeroVisual();
  initSolutionsThumbnailVisual();
  initSolutionHeroItem();

  document.fonts.ready.then(() => {
    setupTextLinesReveal();
  });
});
