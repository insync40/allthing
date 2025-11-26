import { gsap } from "gsap";
import { Rive, Layout, Fit } from "@rive-app/webgl2";
import { loadRiveFile } from "../../utils/loadRiveFile";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initVisualScroll() {
  const section = document.querySelector(".values_wrap");
  const riveSrc = document.querySelector("#homeSrcRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  if (!section) return;

  loadRiveFile(
    riveUrl,
    (file) => {
      setupRiveVisualScroll(
        file,
        "visual_scroll",
        "visual_scroll_new",
        "State Machine 1",
      );
    },
    (error) => {
      console.error("Failed to load Rive file:", error);
    },
  );
}

function setupRiveVisualScroll(
  loadedRiveFile,
  canvasId,
  artboard,
  stateMachine,
) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const riveInstance = new Rive({
    riveFile: loadedRiveFile,
    useOffscreenRenderer: true,
    stateMachines: stateMachine,
    canvas: canvas,
    artboard: artboard,
    layout: new Layout({
      fit: Fit.Contain,
    }),
    autoplay: true,
    autoBind: true, // enable auto binding
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      const section = document.querySelector(".values_wrap");
      const items = section.querySelectorAll(".values_item");

      if (stateMachine) {
        try {
          const triggers = ["step_01", "step_02", "step_03"];
          const inputs = riveInstance.stateMachineInputs(stateMachine);
          let currentRiveIndex = -1;

          function fireRive(idx) {
            const trigger = inputs.find((j) => j.name === triggers[idx]);
            if (trigger) {
              trigger.fire();
              trigger.fire();
            }
          }
          items.forEach((item, index) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top 70%",
                end: "bottom 50%",
                onEnter: () => {
                  fireRive(index);
                },
                onEnterBack: () => {
                  fireRive(index);
                },
              },
            });
          });
        } catch (e) {
          console.error("Rive state machine input error:", e);
        }
      }
    },
  });
}

export function initVisualScrollMobile() {
  const section = document.querySelector(".values_wrap");
  const riveSrc = document.querySelector("#homeSrcRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  if (!section) return;

  const artboard = "visual_scroll_new";
  const sm = "State Machine 1";

  const canvasItems = [
    {
      canvasId: "#visual_scroll_1",
      trigger: "step_01",
    },
    {
      canvasId: "#visual_scroll_2",
      trigger: "step_02",
    },
    {
      canvasId: "#visual_scroll_3",
      trigger: "step_03",
    },
  ];

  const mm = gsap.matchMedia();

  mm.add("(max-width: 767px)", () => {
    canvasItems.forEach((item, index) => {
      const riveInstance = new Rive({
        src: riveUrl,
        useOffscreenRenderer: true,
        stateMachines: sm,
        canvas: document.querySelector(item.canvasId),
        artboard: artboard,
        isTouchScrollEnabled: true,
        layout: new Layout({
          fit: Fit.Contain,
        }),
        autoplay: true,
        onLoad: () => {
          riveInstance.resizeDrawingSurfaceToCanvas();
          const inputs = riveInstance.stateMachineInputs(sm);
          const triggerInput = inputs.find((i) => i.name === item.trigger);

          ScrollTrigger.create({
            trigger: item.canvasId,
            start: "top bottom",
            onEnter: () => {
              if (triggerInput && typeof triggerInput.fire === "function") {
                triggerInput.fire();
              }
            },
          });
        },
      });
    });
  });
}
