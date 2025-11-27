import { loadRiveFile } from "../../utils/loadRiveFile";
import { setupRiveInstance } from "../../utils/setupRiveInstance";

export function solutionsHeroVisual() {
  const section = document.querySelector(".solutions_hero_wrap");
  const riveSrc = document.querySelector("#solutionsRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  if (!section) return;

  loadRiveFile(
    riveUrl,
    (file) => {
      setupRiveInstance(
        file,
        "solutionsHero",
        "solutions_visual_hero",
        "State Machine 1",
      );
    },
    (error) => {
      console.error("Failed to load Rive file:", error);
    },
  );
}

export function initSolutionsThumbnailVisual() {
  const section = document.querySelector(".solutions_items_wrap");
  if (!section) return;
  const riveSrc = document.querySelector("#solutionsRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  const itemJsons = [
    {
      canvasId: "transparente",
      artboard: "solutions_04",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "wertvolle",
      artboard: "solutions_03",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "communities",
      artboard: "solutions_02",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "efficient",
      artboard: "solutions_01",
      stateMachine: "State Machine 1",
    },
  ];

  loadRiveFile(
    riveUrl,
    (file) => {
      itemJsons.forEach(({ canvasId, artboard, stateMachine }) => {
        setupRiveInstance(file, canvasId, artboard, stateMachine);
      });
    },
    (error) => {
      console.error("Failed to load Rive file:", error);
    },
  );
}

export function initSolutionHeroItem() {
  const section = document.querySelector(".solutions_hero_wrap");

  if (!section) return;

  const riveSrc = document.querySelector("#solutionsRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  const itemJsons = [
    {
      canvasId: "transparente",
      artboard: "solutions_04",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "wertvolle",
      artboard: "solutions_03",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "communities",
      artboard: "solutions_02",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "efficient",
      artboard: "solutions_01",
      stateMachine: "State Machine 1",
    },
  ];

  loadRiveFile(
    riveUrl,
    (file) => {
      itemJsons.forEach(({ canvasId, artboard, stateMachine }) => {
        setupRiveInstance(file, canvasId, artboard, stateMachine);
      });
    },
    (error) => {
      console.error("Failed to load Rive file:", error);
    },
  );
}
