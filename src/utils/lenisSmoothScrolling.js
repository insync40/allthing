import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initLenisSmoothScrolling() {
    let lenis = new Lenis({
        lerp: 0.125,
        wheelMultiplier: 0.8,
        gestureOrientation: "vertical",
        normalizeWheel: false,
        smoothTouch: false,
        autoResize: true,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

export { initLenisSmoothScrolling };
