import anime from "animejs";
import { Parts } from "../common";
import { Scene, SceneManager } from "../../../common/Scene";

function handleTransitionFromAchievementToWork(cb: () => void) {
  anime({
    targets: ".achievement",
    opacity: 0,
    delay: 300,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
}

export default function init(Scenes: SceneManager) {
  Scenes.addSceneTransitionAnimation(
    Parts.ACHIEVEMENT,
    Parts.WORK,
    handleTransitionFromAchievementToWork
  );

  Scenes.setScene(Parts.ACHIEVEMENT, new Scene(Parts.ACHIEVEMENT, Scenes));
}
