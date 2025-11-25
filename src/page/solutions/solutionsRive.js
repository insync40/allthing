import { loadRiveFile } from "../../utils/loadRiveFile";
import { setupRiveInstance } from "../../utils/setupRiveInstance";

const RIVE_URL =
  "https://cdn.prod.website-files.com/691298781fedcbca4aba115b/6925133fce2f2b8f837cca29_570c0f2fabf2cb939eb0fed8c3629364_adjust_insync-allthings-solutions_overview_hero.riv";

export function solutionsHeroVisual() {
  const section = document.querySelector(".solutions_hero_wrap");

  if (!section) return;

  loadRiveFile(
    RIVE_URL,
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
    RIVE_URL,
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
    RIVE_URL,
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
