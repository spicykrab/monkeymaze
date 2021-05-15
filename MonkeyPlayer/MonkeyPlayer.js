/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MonkeyPlayer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MonkeyPlayer/costumes/costume1.png", {
        x: 118,
        y: 112
      }),
      new Costume("costume10", "./MonkeyPlayer/costumes/costume10.png", {
        x: 118,
        y: 112
      }),
      new Costume("costume11", "./MonkeyPlayer/costumes/costume11.png", {
        x: 113,
        y: 112
      }),
      new Costume("costume4", "./MonkeyPlayer/costumes/costume4.png", {
        x: 113,
        y: 112
      })
    ];

    this.sounds = [new Sound("meow", "./MonkeyPlayer/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(15, -150);
    this.size = 20;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 6;
        yield* this.wait(0.25);
        this.costumeNumber += 1;
        if (!(this.stage.vars.intangibility == "on")) {
          if (this.touching(Color.rgb(0, 0, 0))) {
            this.x += -6;
          }
        }
      }
      if (this.keyPressed("left arrow")) {
        this.x += -6;
        yield* this.wait(0.25);
        this.costumeNumber += 1;
        if (!(this.stage.vars.intangibility == "on")) {
          if (this.touching(Color.rgb(0, 0, 0))) {
            this.x += 6;
          }
        }
      }
      if (this.keyPressed("up arrow")) {
        this.y += 6;
        yield* this.wait(0.25);
        this.costumeNumber += 1;
        if (!(this.stage.vars.intangibility == "on")) {
          if (this.touching(Color.rgb(0, 0, 0))) {
            this.y += -6;
          }
        }
      }
      if (this.keyPressed("down arrow")) {
        this.y += -6;
        yield* this.wait(0.25);
        this.costumeNumber += 1;
        if (!(this.stage.vars.intangibility == "on")) {
          if (this.touching(Color.rgb(0, 0, 0))) {
            this.y += 6;
          }
        }
      }
      yield;
    }
  }
}
