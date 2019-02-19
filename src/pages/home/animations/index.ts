import { SceneManager } from "../../../common/Scene";
import { Parts } from "../common";
import Intro from "./intro";
import About from "./about";
import Work from "./work";
import Achievement from "./achievement";
import Articles from "./articles";

const sceneManager = new SceneManager();

sceneManager.setSceneList([
  Parts.INTRO,
  Parts.ABOUT,
  Parts.WORK,
  Parts.ACHIEVEMENT,
  Parts.ARTICLES
]);

Intro(sceneManager);
About(sceneManager);
Work(sceneManager);
Achievement(sceneManager);
Articles(sceneManager);

export default sceneManager;
