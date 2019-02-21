import { Parts } from "../common";
import anime from "animejs";
import { Scene, SceneManager } from "../../../common/Scene";

function handleTransitionFromContactToArticles(cb: () => void) {
  anime({
    targets: ".contact",
    opacity: 0,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
}

export default function init(Scenes: SceneManager) {
  Scenes.addSceneTransitionAnimation(
    Parts.CONTACT,
    Parts.ARTICLES,
    handleTransitionFromContactToArticles
  );
  Scenes.setScene(Parts.CONTACT, new Scene(Parts.CONTACT, Scenes));
}
