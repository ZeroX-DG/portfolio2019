import { Parts } from "../pages/home/common";

export class Scene {
  public name: Parts;
  private manager: SceneManager;

  constructor(name: Parts, manager: SceneManager) {
    this.name = name;
    this.manager = manager;
  }

  next(cb: () => void) {
    const nextScene = this.manager.getNextSceneOf(this.name);
    if (nextScene) {
      const animation = this.manager.getSceneTransitionAnimation(
        this.name,
        nextScene
      );
      console.log(nextScene);
      animation(cb);
    }
  }

  previous(cb: () => void) {
    const previousScene = this.manager.getPreviousSceneOf(this.name);
    if (previousScene) {
      const animation = this.manager.getSceneTransitionAnimation(
        this.name,
        previousScene
      );
      console.log(previousScene);
      animation(cb);
    }
  }
}

export class SceneManager {
  private scenes: Parts[];
  private sceneInstances: Map<string, Scene> = new Map();
  private transitionAnimations: Map<
    string,
    (cb: () => void) => void
  > = new Map();

  getNextSceneOf(scene: Parts): Parts | null {
    const nextIndex = this.scenes.indexOf(scene) + 1;
    return nextIndex < this.scenes.length ? this.scenes[nextIndex] : null;
  }

  getPreviousSceneOf(scene: Parts): Parts | null {
    const nextIndex = this.scenes.indexOf(scene) - 1;
    return nextIndex > -1 ? this.scenes[nextIndex] : null;
  }

  getSceneTransitionAnimation(
    from: string,
    to: string
  ): (cb: () => void) => void {
    return this.transitionAnimations.get(`${from}->${to}`);
  }

  addSceneTransitionAnimation(
    from: string,
    to: string,
    animation: (cb: () => void) => void
  ) {
    this.transitionAnimations.set(`${from}->${to}`, animation);
  }

  setSceneList(list: Parts[]) {
    this.scenes = list;
  }

  getScene(name: string): Scene {
    return this.sceneInstances.get(name);
  }

  setScene(name: string, scene: Scene) {
    this.sceneInstances.set(name, scene);
  }
}
