/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("Sound track", "./Sprite1/sounds/Sound track.wav"),
      new Sound("Action 52 Alferd", "./Sprite1/sounds/Action 52 Alferd.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Action 52 Alferd");
      yield;
    }
  }
}
