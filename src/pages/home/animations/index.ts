import { SceneManager } from "../../../common/Scene";
import { Parts } from "../common";
import Intro from "./intro";
import About from "./about";
import Work from "./work";
import Achievement from "./achievement";
import Articles from "./articles";
import Contact from "./contact";

const sceneManager = new SceneManager();

sceneManager.setSceneList([
  Parts.INTRO,
  Parts.ABOUT,
  Parts.WORK,
  Parts.ACHIEVEMENT,
  Parts.ARTICLES,
  Parts.CONTACT
]);

Intro(sceneManager);
About(sceneManager);
Work(sceneManager);
Achievement(sceneManager);
Articles(sceneManager);
Contact(sceneManager);

export default sceneManager;
