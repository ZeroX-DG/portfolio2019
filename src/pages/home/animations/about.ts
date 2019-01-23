import anime from "animejs";
import { Parts } from "../common";
import { Scene, SceneManager } from "../../../common/Scene";

function handleTransitionFromAboutToWork(cb: () => void) {
  document.getElementById("about").style.userSelect = "none";
  anime({
    targets: ".about .overflow-image",
    width: 0,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: () => {
      anime({
        targets: ".about",
        opacity: 0,
        duration: 1000,
        easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
        complete: cb
      });
    }
  });
}

export default function init(Scenes: SceneManager) {
  Scenes.addSceneTransitionAnimation(
    Parts.ABOUT,
    Parts.WORK,
    handleTransitionFromAboutToWork
  );

  Scenes.setScene(Parts.ABOUT, new Scene(Parts.ABOUT, Scenes));
}
