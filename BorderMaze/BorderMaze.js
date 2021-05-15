/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BorderMaze extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("maze", "./BorderMaze/costumes/maze.png", { x: 324, y: 324 })
    ];

    this.sounds = [new Sound("meow", "./BorderMaze/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.visible = false;
  }
}
