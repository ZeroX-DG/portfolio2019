import { SceneManager } from "../../../common/Scene";
import { Parts } from "../common";
import Intro from "./intro";

const sceneManager = new SceneManager();

sceneManager.setSceneList([Parts.INTRO, Parts.ABOUT, Parts.WORK]);

Intro(sceneManager);

export default sceneManager;
