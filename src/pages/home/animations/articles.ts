import { Parts } from "../common";
import anime from "animejs";
import { Scene, SceneManager } from "../../../common/Scene";

function handleTransitionFromArticlesToContact(cb: () => void) {
  anime({
    targets: ".articles",
    opacity: 0,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
}

function handleTransitionFromArticlesToAchievement(cb: () => void) {
  anime({
    targets: ".articles",
    opacity: 0,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: cb
  });
}

export default function init(Scenes: SceneManager) {
  Scenes.addSceneTransitionAnimation(
    Parts.ARTICLES,
    Parts.ACHIEVEMENT,
    handleTransitionFromArticlesToAchievement
  );
  Scenes.addSceneTransitionAnimation(
    Parts.ARTICLES,
    Parts.CONTACT,
    handleTransitionFromArticlesToContact
  );
  Scenes.setScene(Parts.ARTICLES, new Scene(Parts.ARTICLES, Scenes));
}
