import anime from "animejs";
import { Parts } from "../common";
import { Scene, SceneManager } from "../../../common/Scene";

function handleTransitionFromIntroToAbout(cb: () => void) {
  document.getElementById("intro").style.userSelect = "none";
  anime({
    targets: ".intro .name, .intro .message",
    top: "-100px",
    opacity: 0,
    delay: 500,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
  anime({
    targets: ".right-nav",
    left: "50px",
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    delay: 400,
    duration: 1000
  });
}

export default function init(Scenes: SceneManager) {
  Scenes.addSceneTransitionAnimation(
    Parts.INTRO,
    Parts.ABOUT,
    handleTransitionFromIntroToAbout
  );

  Scenes.setScene(Parts.INTRO, new Scene(Parts.INTRO, Scenes));
}
