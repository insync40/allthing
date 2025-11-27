import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { BLUE_500, BRAND_COLOR } from "../utils/constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

function setupTextLinesReveal() {
  const textEls = gsap.utils.toArray("[data-heading-reveal]");

  if (textEls.length === 0) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 992px)", () => {
    textEls.forEach((text) => {
      let split = new SplitText(text, {
        type: "words, chars",
        wordsClass: "word",
        charsClass: "char",
      });

      // Create animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: text,
            start: "top bottom",
            end: "top 80%",
            toggleActions: "play none none none",
          },
          defaults: {
            ease: "power3",
          },
        })
        .set(split.words, {
          willChange: "transform, opacity, filter",
        })
        .set(split.chars, {
          willChange: "color",
        })
        .from(split.words, {
          yPercent: 110,
          filter: "blur(20px)",
          autoAlpha: 0,
          delay: 0.2,
          duration: 0.8,
          stagger: { each: 0.1 },
        })
        .to(
          split.chars,
          {
            keyframes: [
              {
                color: typeof BLUE_500 !== "undefined" ? BLUE_500 : "blue",
                duration: 0.2,
              }, // Fallback if var undefined
              {
                color:
                  typeof BRAND_COLOR !== "undefined" ? BRAND_COLOR : "black",
                duration: 0.2,
              },
              { color: "inherit", duration: 0.4 },
            ],
            duration: 0.8,
            stagger: { each: 0.01 },
          },
          "<",
        );
    });

    gsap.set("[data-prevent-flicker='true']", {
      visibility: "visible",
    });

    return () => {
      gsap.set("[data-prevent-flicker='true']", { clearProps: "visibility" });
    };
  });
}

export { setupTextLinesReveal };
