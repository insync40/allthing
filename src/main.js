import { recruitmentAnim } from "./page/about/recruitment";
import { heroVisual } from "./page/heroVisual";
import { visualScroll } from "./page/visualScroll";

document.addEventListener("DOMContentLoaded", () => {
    heroVisual();
    visualScroll();

    // About Page Animations
    recruitmentAnim();
});
