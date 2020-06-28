import Phaser from "phaser";
import SceneMain from "./Scenes/sceneMain";

const isMobile = navigator.userAgent.indexOf("Mobile");

const config = {
  type: Phaser.AUTO,
  width: isMobile == -1 ? 480 : window.innerWidth,
  height: isMobile == -1 ? 640 : window.innerHeight,
  parent: "phaser-game",
  scene: [SceneMain],
};

export const game = new Phaser.Game(config);
