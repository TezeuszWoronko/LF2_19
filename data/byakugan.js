define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/area.png", w: 450, h: 145, row: 2, col: 3
      }
    ],
    weapon_hp: 200,
    weapon_drop_hurt: 35,
    weapon_hit_sound: "1/027",
    weapon_drop_sound: "1/034",
    weapon_broken_sound: "1/027"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 40, vrest: 10, bdefend: 16, injury: 45, effect: 0
    },
    2: {
      entry: "jump", dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 45, effect: 0
    },
    3: {
      entry: "run", dvx: 10, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 0
    },
    4: {
      entry: "dash", dvx: 12, fall: 70, vrest: 20, bdefend: 60, injury: 55, effect: 0
    }
  },
  frame: {
  0: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "on_hand",
    pic: 20, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 17, y: 2, w: 13, h: 44, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 25, y: 45, action: 155, dvx: 0, dvy: 0, oid: 203
    }
  },
  21: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  22: { name: "on_hand",
    pic: 22, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  23: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 240, y: 100, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  24: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 247, y: 111, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  25: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 240, y: 110, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  26: { name: "on_hand",
    pic: 26, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  27: { name: "on_hand",
    pic: 27, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  28: { name: "on_hand",
    pic: 28, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  29: { name: "on_hand",
    pic: 29, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  30: { name: "on_hand",
    pic: 30, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  31: { name: "on_hand",
    pic: 31, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  32: { name: "on_hand",
    pic: 32, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  33: { name: "on_hand",
    pic: 33, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  34: { name: "on_hand",
    pic: 34, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  35: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 77, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  36: { name: "on_hand",
    pic: 14, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 80, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  40: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "rasengan",
    pic: 0, state: 1000, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 78, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 255, y: 78, action: 396, dvx: 0, dvy: 0, oid: 444, facing: 0
    }
  },
  105: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 250, y: 78, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 245, y: 145, action: 100, dvx: 0, dvy: 0, oid: 209
    }
  },
  396: { name: "disapear",
    pic: 999, state: 18, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 0, y: 66660000, w: 79, h: 5, vrest: 7,
      catchingact: [397, 397], caughtact: [380, 380]
    }
  },
  397: { name: "disapear",
    pic: 999, state: 1000, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});