import { SceneManager } from "../../../common/Scene";
import { Parts } from "../common";
import Intro from "./intro";
import About from "./about";
import Work from "./work";
import Achievement from "./achievement";

const sceneManager = new SceneManager();

sceneManager.setSceneList([
  Parts.INTRO,
  Parts.ABOUT,
  Parts.WORK,
  Parts.ACHIEVEMENT
]);

Intro(sceneManager);
About(sceneManager);
Work(sceneManager);
Achievement(sceneManager);

export default sceneManager;
