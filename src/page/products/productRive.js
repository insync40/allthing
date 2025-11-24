import { loadRiveFile } from "../../utils/loadRiveFile";
import { setupRiveInstance } from "../../utils/setupRiveInstance";

export function initProductHeroVisual() {
  const section = document.querySelector(".solutions_hero_wrap");
  const riveSrc = document.querySelector("#productRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  if (!section) return;

  loadRiveFile(
    riveUrl,
    (file) => {
      setupRiveInstance(
        file,
        "productHero",
        "products_visual_hero",
        "State Machine 1",
      );
    },
    (error) => {
      console.error("Failed to load Rive file:", error);
    },
  );
}

export function initProductThumbnailVisual() {
  const section = document.querySelector(".solutions_items_wrap");
  const riveSrc = document.querySelector("#productRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  if (!section) return;

  const itemJsons = [
    {
      canvasId: "impulse",
      artboard: "products_07",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "build",
      artboard: "products_06",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "portale",
      artboard: "products_05",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "dossier",
      artboard: "products_04",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "echo",
      artboard: "products_03",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "community",
      artboard: "products_02",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "task",
      artboard: "products_01",
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

export function initProductHeroItem() {
  const section = document.querySelector(".solutions_hero_wrap");
  const riveSrc = document.querySelector("#productRive");
  const riveUrl = riveSrc?.dataset?.riveUrl;

  if (!section) return;

  const itemJsons = [
    {
      canvasId: "impulse",
      artboard: "products_07",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "build",
      artboard: "products_06",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "portale",
      artboard: "products_05",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "dossier",
      artboard: "products_04",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "echo",
      artboard: "products_03",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "community",
      artboard: "products_02",
      stateMachine: "State Machine 1",
    },
    {
      canvasId: "task",
      artboard: "products_01",
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
