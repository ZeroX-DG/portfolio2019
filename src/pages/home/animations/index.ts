import { SceneManager } from "../../../common/Scene";
import { Parts } from "../common";
import Intro from "./intro";
import About from "./about";
import Work from "./work";

const sceneManager = new SceneManager();

sceneManager.setSceneList([Parts.INTRO, Parts.ABOUT, Parts.WORK]);

Intro(sceneManager);
About(sceneManager);
Work(sceneManager);

export default sceneManager;
