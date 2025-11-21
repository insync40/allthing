import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { BLUE_500, BRAND_COLOR } from "../utils/constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

function setupTextLinesReveal() {
  const textEls = gsap.utils.toArray("[data-heading-reveal]");

  if (textEls.length === 0) return;

  textEls.forEach((text) => {
    SplitText.create(text.childNodes, {
      type: "words, chars",
      wordsClass: "word",
      charsClass: "char",
      onSplit(self) {
        return gsap
          .timeline({
            scrollTrigger: {
              trigger: text,
              start: "top bottom",
              end: "top 80%",
              toggleActions: "none play none reset",
            },
            defaults: {
              ease: "power3",
            },
          })
          .set(self.words, {
            willChange: "transform, opacity, filter",
          })
          .set(self.chars, {
            willChange: "color",
          })
          .from(self.words, {
            yPercent: 110,
            filter: "blur(20px)",
            autoAlpha: 0,
            delay: 0.2,
            duration: 0.8,
            stagger: { each: 0.1 },
          })
          .to(
            self.chars,
            {
              keyframes: [
                { color: BLUE_500, duration: 0.2 },
                { color: BRAND_COLOR, duration: 0.2 },
                { color: "inherit", duration: 0.4 },
              ],
              duration: 0.8,
              stagger: { each: 0.01 },
            },
            "<",
          );
      },
    });
  });

  gsap.set("[data-prevent-flicker='true']", {
    visibility: "visible",
  });
}

export { setupTextLinesReveal };
