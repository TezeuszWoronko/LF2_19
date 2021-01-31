define({
  bmp: {
    file: [
      {
        "file(0-5)": "sprite/sword.png", w: 97, h: 47, row: 3, col: 2
      },
      {
        "file(6-25)": "sprite/ground.png", w: 195, h: 165, row: 4, col: 5
      },
      {
        "file(26-29)": "sprite/hakke.png", w: 385, h: 180, row: 2, col: 2
      },
      {
        "file(30-50)": "sprite/cave.png", w: 250, h: 115, row: 3, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 550, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3000, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 19, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 999, state: 3000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 19, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 19, y: 7, action: 50, dvx: 0, dvy: 0, oid: 209, facing: 0
    }
  },
  20: { name: "hit",
    pic: 999, state: 3000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 19, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "ground",
    pic: 6, state: 3005, wait: 2, next: 36, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "ground",
    pic: 7, state: 3005, wait: 2, next: 37, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 36, y: 100, w: 125, h: 64, dvx: 0, dvy: -4, fall: 100, arest: 15, bdefend: 100, injury: 40
    }
  },
  37: { name: "ground",
    pic: 8, state: 3005, wait: 2, next: 38, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  38: { name: "ground",
    pic: 9, state: 3005, wait: 2, next: 39, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  39: { name: "ground",
    pic: 10, state: 3005, wait: 2, next: 40, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "ground",
    pic: 11, state: 3005, wait: 2, next: 41, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "ground",
    pic: 12, state: 3005, wait: 2, next: 42, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "ground",
    pic: 13, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "ground2",
    pic: 14, state: 3005, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -25, y: 145, action: 46, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  45: { name: "ground2",
    pic: 14, state: 3005, wait: 0, next: 44, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "ground2",
    pic: 15, state: 3005, wait: 2, next: 47, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "ground2",
    pic: 16, state: 3003, wait: 2, next: 48, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "ground2",
    pic: 17, state: 3003, wait: 2, next: 49, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 95, w: 85, h: 87, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 25
    }
  },
  49: { name: "ground2",
    pic: 18, state: 3003, wait: 2, next: 50, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 95, w: 85, h: 87, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 25
    }
  },
  50: { name: "ground2",
    pic: 19, state: 3003, wait: 2, next: 51, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 95, w: 85, h: 87, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 25
    }
  },
  51: { name: "ground2",
    pic: 20, state: 3003, wait: 2, next: 52, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 95, w: 85, h: 87, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 25
    }
  },
  52: { name: "ground2",
    pic: 21, state: 3003, wait: 2, next: 53, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 77, w: 85, h: 87, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 25
    }
  },
  53: { name: "ground2",
    pic: 22, state: 3003, wait: 2, next: 54, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "ground2",
    pic: 23, state: 3003, wait: 2, next: 55, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "ground2",
    pic: 24, state: 3003, wait: 2, next: 56, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "ground2",
    pic: 25, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 72, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  72: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 80, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  74: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 76, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  75: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 78, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  76: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  77: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 81, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  78: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  79: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 82, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  80: { name: "sandstorm",
    pic: 100, state: 3005, wait: 2, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "sandstorm (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 115, y: 60, action: 45, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  84: { name: "ground",
    pic: 6, state: 3005, wait: 2, next: 85, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "ground",
    pic: 7, state: 3005, wait: 2, next: 86, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "ground",
    pic: 8, state: 3005, wait: 2, next: 87, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 5, dvy: -20, fall: 100, arest: 20, bdefend: 100, injury: 20
    }
  },
  87: { name: "ground",
    pic: 9, state: 3005, wait: 2, next: 88, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 5, dvy: -20, fall: 100, arest: 20, bdefend: 100, injury: 20
    }
  },
  88: { name: "ground",
    pic: 10, state: 3005, wait: 2, next: 89, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 5, dvy: -20, fall: 100, arest: 20, bdefend: 100, injury: 20
    }
  },
  89: { name: "ground",
    pic: 11, state: 3005, wait: 2, next: 105, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 92, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  92: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 0, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 100, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  94: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 0, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 96, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  95: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 98, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  96: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 1, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  97: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 101, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  98: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 1, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  99: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 102, dvx: 0, dvy: 0, oid: 208, facing: 1
    }
  },
  100: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "earth_tobi",
    pic: 100, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "earth_tobi (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 115, y: 65, action: 84, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  105: { name: "ground",
    pic: 12, state: 3005, wait: 2, next: 106, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "ground",
    pic: 13, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "strikes",
    pic: 999, state: 9997, wait: 2, next: 111, dvx: 550, dvy: 0, dvz: 0, centerx: 193, centery: 85, hit_a: 0, hit_d: 0, hit_j: 49
  },
  111: { name: "strikes",
    pic: 26, state: 9997, wait: 1, next: 112, dvx: 550, dvy: 550, dvz: 0, centerx: 193, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "strikes",
    pic: 27, state: 9997, wait: 1, next: 113, dvx: 550, dvy: 0, dvz: 0, centerx: 193, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "strikes",
    pic: 28, state: 9997, wait: 2, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 193, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "sword",
    pic: 4, state: 3003, wait: 3, next: 115, dvx: 80, dvy: 0, dvz: 550, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 65, effect: 1
    }
  },
  116: { name: "sword",
    pic: 4, state: 3003, wait: 3, next: 115, dvx: 60, dvy: 0, dvz: 550, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 65, effect: 1
    }
  },
  117: { name: "arrow",
    pic: 2, state: 3003, wait: 3, next: 117, dvx: 60, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 65, effect: 1
    }
  },
  118: { name: "arrow",
    pic: 2, state: 3003, wait: 0, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 65, effect: 1
    }
  },
  120: { name: "ground_line",
    pic: 999, state: 3000, wait: 0, next: 121, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 125, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  121: { name: "ground_line",
    pic: 999, state: 3000, wait: 0, next: 120, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "ground2_line",
    pic: 6, state: 3005, wait: 1, next: 126, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  126: { name: "ground",
    pic: 7, state: 3005, wait: 1, next: 127, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "ground",
    pic: 8, state: 3005, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 5, dvy: -10, fall: 100, arest: 20, bdefend: 100, injury: 35, zwidth: 10
    }
  },
  128: { name: "ground",
    pic: 9, state: 3005, wait: 1, next: 129, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 5, dvy: -10, fall: 100, arest: 20, bdefend: 100, injury: 35, zwidth: 10
    }
  },
  129: { name: "ground",
    pic: 10, state: 3005, wait: 1, next: 130, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 5, dvy: -10, fall: 100, arest: 20, bdefend: 100, injury: 35, zwidth: 10
    }
  },
  130: { name: "ground",
    pic: 11, state: 3005, wait: 1, next: 131, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "ground",
    pic: 12, state: 3005, wait: 1, next: 132, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "ground",
    pic: 13, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "cave",
    pic: 30, state: 18, wait: 1, next: 156, dvx: 0, dvy: 0, centerx: 150, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "cave",
    pic: 31, state: 18, wait: 1, next: 157, dvx: 0, dvy: 0, centerx: 150, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "cave",
    pic: 32, state: 18, wait: 0, next: 158, dvx: 0, dvy: 0, centerx: 150, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 83, y: 24, w: 129, h: 9999999, dvx: 0, dvy: 0, fall: 0, vrest: 10, bdefend: 100, injury: 0, effect: 3
    },
    opoint: {
      kind: 1, x: 82, y: 95, action: 160, dvx: 10, dvy: 0, oid: 208, facing: 0
    }
  },
  158: { name: "cave",
    pic: 999, state: 18, wait: 0, next: 157, dvx: 0, dvy: 0, centerx: 150, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 83, y: 24, w: 129, h: 9999999, dvx: 0, dvy: 0, fall: 0, vrest: 10, bdefend: 100, injury: 0, effect: 3
    },
    opoint: {
      kind: 1, x: 212, y: 105, action: 160, dvx: -10, dvy: 0, oid: 208, facing: 0
    }
  },
  160: { name: "paralyze",
    pic: 999, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 0, y: 16, w: 10, h: 65,
      catchingact: [165, 165], caughtact: [130, 130]
    }
  },
  165: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 165, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 0, vaction: 131, cover: 0, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  170: { name: "punch",
    pic: 0, state: 3003, wait: 0, next: 171, dvx: 100, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 30, injury: 75, effect: 0
    }
  },
  171: { name: "punch",
    pic: 0, state: 3003, wait: 0, next: 172, dvx: 100, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 30, injury: 75, effect: 0
    },
    opoint: {
      kind: 1, x: -155, y: 25, action: 176, dvx: 0, dvy: 0, oid: 208, facing: 50
    }
  },
  172: { name: "punch",
    pic: 0, state: 3003, wait: 0, next: 172, dvx: 100, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 30, injury: 75, effect: 0
    }
  },
  175: { name: "suck",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/077"
  },
  176: { name: "extra",
    pic: 1, state: 3003, wait: 0, next: 177, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  177: { name: "extra",
    pic: 5, state: 3003, wait: 0, next: 178, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  178: { name: "extra",
    pic: 1, state: 3003, wait: 0, next: 179, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  179: { name: "extra",
    pic: 5, state: 3003, wait: 0, next: 180, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  180: { name: "extra",
    pic: 1, state: 3003, wait: 0, next: 181, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  181: { name: "extra",
    pic: 5, state: 3003, wait: 0, next: 182, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  182: { name: "extra",
    pic: 1, state: 3003, wait: 0, next: 183, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  183: { name: "extra",
    pic: 5, state: 3003, wait: 0, next: 184, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  184: { name: "extra",
    pic: 1, state: 3003, wait: 0, next: 184, dvx: 70, dvy: 0, dvz: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -7, vrest: 5, fall: 60, bdefend: 30, injury: 15, effect: 0
    }
  },
  187: { name: "ground",
    pic: 8, state: 3005, wait: 2, next: 188, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 27, w: 65, h: 135, dvx: 0, dvy: 20, fall: 100, arest: 20, bdefend: 100, injury: 15, zwidth: 10
    }
  },
  188: { name: "ground",
    pic: 9, state: 3005, wait: 2, next: 189, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  189: { name: "ground",
    pic: 10, state: 3005, wait: 2, next: 190, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "ground",
    pic: 11, state: 3005, wait: 2, next: 191, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "ground",
    pic: 12, state: 3005, wait: 2, next: 192, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  192: { name: "ground",
    pic: 13, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  196: { name: "naruto_uppercut",
    pic: 999, state: 3003, wait: 5, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 15, dvx: 5, dvy: -20, vrest: 20, fall: 70, bdefend: 70, injury: 80, effect: 0
    }
  }
  }
});