import anime from "animejs";
import { Parts } from "../common";
import { Scene, SceneManager } from "../../../common/Scene";

function handleTransitionFromWorkToAbout(cb: () => void) {
  document.getElementById("work").style.userSelect = "none";
  anime({
    targets: ".work",
    opacity: 0,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
}

function handleTransitionFromWorkToAchievement(cb: () => void) {
  document.getElementById("work").style.userSelect = "none";
  anime({
    targets: ".work",
    opacity: 0,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
}

export default function init(Scenes: SceneManager) {
  Scenes.addSceneTransitionAnimation(
    Parts.WORK,
    Parts.ABOUT,
    handleTransitionFromWorkToAbout
  );

  Scenes.addSceneTransitionAnimation(
    Parts.WORK,
    Parts.ACHIEVEMENT,
    handleTransitionFromWorkToAchievement
  );

  Scenes.setScene(Parts.WORK, new Scene(Parts.WORK, Scenes));
}
