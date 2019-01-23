export class Scene {
  public name: string;
  private manager: SceneManager;

  constructor(name: string, manager: SceneManager) {
    this.name = name;
    this.manager = manager;
  }

  next() {
    const nextScene = this.manager.getNextSceneOf(this.name);
    if (nextScene) {
      const animation = this.manager.getSceneTransitionAnimation(
        this.name,
        nextScene
      );
      animation();
    }
  }

  previous() {
    const previousScene = this.manager.getPreviousSceneOf(this.name);
    if (previousScene) {
      const animation = this.manager.getSceneTransitionAnimation(
        this.name,
        previousScene
      );
      animation();
    }
  }
}

export class SceneManager {
  private scenes: string[];
  private sceneInstances: Map<string, Scene> = new Map();
  private transitionAnimations: Map<string, () => void> = new Map();

  getNextSceneOf(scene: string): string | null {
    const nextIndex = this.scenes.indexOf(scene) + 1;
    return nextIndex < this.scenes.length ? this.scenes[nextIndex] : null;
  }

  getPreviousSceneOf(scene: string): string | null {
    const nextIndex = this.scenes.indexOf(scene) - 1;
    return nextIndex > -1 ? this.scenes[nextIndex] : null;
  }

  getSceneTransitionAnimation(from: string, to: string): () => void {
    return this.transitionAnimations.get(`${from}->${to}`);
  }

  addSceneTransitionAnimation(from: string, to: string, animation: () => void) {
    this.transitionAnimations.set(`${from}->${to}`, animation);
  }

  setSceneList(list: string[]) {
    this.scenes = list;
  }

  getScene(name: string): Scene {
    return this.sceneInstances.get(name);
  }

  setScene(name: string, scene: Scene) {
    this.sceneInstances.set(name, scene);
  }
}
