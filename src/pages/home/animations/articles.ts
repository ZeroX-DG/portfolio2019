import { Parts } from "../common";
import { Scene, SceneManager } from "../../../common/Scene";

export default function init(Scenes: SceneManager) {
  Scenes.setScene(Parts.ARTICLES, new Scene(Parts.ARTICLES, Scenes));
}
