import { game } from "app";

export default class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    //load images or sounds
  }
  create() {
    //define our objects
    console.log(game);
  }
  update() {
    //constant running loop
  }
}
