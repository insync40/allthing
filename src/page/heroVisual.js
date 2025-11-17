import { loadRiveFile } from "../utils/loadRiveFile";
import { setupRiveInstance } from "../utils/setupRiveInstance";

export function heroVisual() {
	const section = document.querySelector(".hero_main_wrap");
	const riveSrc = document.querySelector("#homeSrcRive");
	const riveUrl = riveSrc?.dataset?.riveUrl;

	if (!section) return;

	loadRiveFile(
		riveUrl,
		(file) => {
			setupRiveInstance(
				file,
				"hero_visual",
				"hero_visual",
				"State Machine 1"
			);
		},
		(error) => {
			console.error("Failed to load Rive file:", error);
		}
	);
}
