import { Rive, Layout, Fit } from "@rive-app/webgl2";
import { loadRiveFile } from "../utils/loadRiveFile";

export function visualScroll() {
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
				"visual_scroll",
				"State Machine 1"
			);
		},
		(error) => {
			console.error("Failed to load Rive file:", error);
		}
	);
}

function setupRiveVisualScroll(
	loadedRiveFile,
	canvasId,
	artboard,
	stateMachine
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
		onLoad: () => {
			riveInstance.resizeDrawingSurfaceToCanvas();
			const section = document.querySelector(".values_wrap");

			if (stateMachine) {
				try {
					const triggers = ["step 01", "step 02", "step 03"];
					const inputs =
						riveInstance.stateMachineInputs(stateMachine);
					let currentRiveIndex = -1;

					function fireRive(idx) {
						const trigger = inputs.find(
							(j) => j.name === triggers[idx]
						);
						if (trigger) trigger.fire();
					}

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: section,
							start: "top top",
							end: "bottom bottom",
							onUpdate: (self) => {
								const riveProgress = Math.min(
									self.progress * 3,
									3.99
								);
								const newIndex = Math.min(
									Math.floor(riveProgress),
									triggers.length - 1
								);

								if (currentRiveIndex != newIndex) {
									fireRive(newIndex);
								}
								currentRiveIndex = newIndex;
							},
						},
					});
				} catch (e) {
					console.error("Rive state machine input error:", e);
				}
			}
		},
	});
}
