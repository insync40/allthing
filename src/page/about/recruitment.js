import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function recruitmentAnim() {
    const section = document.querySelector(".recruitment_wrap");
    if (!section) return;
    gsap.context(() => {
        const items = section.querySelectorAll(".recruitment_list_item");
        if (items.length === 0) return;

        items.forEach((item, index) => {
            if (index === items.length - 1) return;
            ScrollTrigger.create({
                trigger: item,
                start: "top 20%",
                scrub: true,
                onEnter: () => {
                    gsap.to(item, { scale: 0.85, filter: "blur(2px)" });
                },
                onLeaveBack: () => {
                    gsap.to(item, { scale: 1, filter: "blur(0px)" });
                },
            });
        });
    });
}
