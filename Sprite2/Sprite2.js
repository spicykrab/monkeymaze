/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.png", {
        x: 16,
        y: 16
      }),
      new Costume(
        "Screen_DoorDoor06",
        "./Sprite2/costumes/Screen_DoorDoor06.png",
        { x: 480, y: 360 }
      ),
      new Costume("costume2", "./Sprite2/costumes/costume2.png", {
        x: 56,
        y: 51
      }),
      new Costume("costume3", "./Sprite2/costumes/costume3.png", {
        x: 38,
        y: 44
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [];
  }
}
