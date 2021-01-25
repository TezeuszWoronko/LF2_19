define({
  bmp: {
    file: [
      {
        "file(0-20)": "sprite/summon.png", w: 220, h: 140, row: 4, col: 4
      },
      {
        "file(21-27)": "sprite/rineneye.png", w: 448, h: 92, row: 1, col: 7
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 100, dvy: 0, dvz: 550, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -1, y: 12, w: 75, h: 9999, dvx: 20, fall: 100, vrest: 15, bdefend: 100, injury: 120, effect: 0
    }
  },
  1: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 999, dvx: 100, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -1, y: 12, w: 75, h: 9999, dvx: 20, fall: 100, vrest: 15, bdefend: 100, injury: 120, effect: 0
    }
  },
  10: { name: "hit",
    pic: 4, state: 3000, wait: 3, next: 60, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 0, dvy: 0, fall: 100, arest: 15, bdefend: 100, injury: 55, effect: 5
    }
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 0, next: 21, dvx: 550, dvy: 0, centerx: 110, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 4, state: 3002, wait: 0, next: 1000, dvx: 550, dvy: 0, centerx: 110, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 110, y: 140, action: 10, dvx: 0, dvy: 0, oid: 222, facing: 0
    }
  },
  30: { name: "rebounding"
  },
  40: { name: "rebounding"
  },
  50: { name: "dog_big",
    pic: 999, state: 3003, wait: 0, next: 51, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "dog_big",
    pic: 999, state: 3003, wait: 6, next: 52, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 110, y: 60, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  52: { name: "dog_big",
    pic: 0, state: 3003, wait: 5, next: 53, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "dog_big",
    pic: 1, state: 3003, wait: 5, next: 54, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "dog_big",
    pic: 2, state: 3003, wait: 5, next: 55, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "dog_big",
    pic: 0, state: 3003, wait: 5, next: 56, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "dog_big",
    pic: 1, state: 3003, wait: 5, next: 57, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "dog_big",
    pic: 2, state: 3003, wait: 3, next: 58, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 110, y: 140, action: 10, dvx: 0, dvy: 0, oid: 222, facing: 0
    }
  },
  58: { name: "dog_big",
    pic: 0, state: 3003, wait: 3, next: 59, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 110, y: 140, action: 70, dvx: 0, dvy: 0, oid: 401, facing: 0
    }
  },
  59: { name: "dog_big",
    pic: 1, state: 3003, wait: 3, next: 60, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 110, y: 140, action: 60, dvx: 0, dvy: 0, oid: 401, facing: 10
    }
  },
  60: { name: "dog_small",
    pic: 7, state: 3000, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  61: { name: "dog_small",
    pic: 6, state: 3000, wait: 1, next: 62, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  62: { name: "dog_small",
    pic: 5, state: 3000, wait: 1, next: 63, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  63: { name: "dog_small",
    pic: 4, state: 3000, wait: 1, next: 64, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  64: { name: "dog_small",
    pic: 7, state: 3000, wait: 1, next: 65, dvx: 0, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  65: { name: "dog_small",
    pic: 6, state: 3000, wait: 1, next: 66, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  66: { name: "dog_small",
    pic: 5, state: 3000, wait: 1, next: 67, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  67: { name: "dog_small",
    pic: 4, state: 3000, wait: 1, next: 60, dvx: 8, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  70: { name: "dog_small1",
    pic: 7, state: 3000, wait: 1, next: 71, dvx: 15, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  71: { name: "dog_small1",
    pic: 6, state: 3000, wait: 1, next: 72, dvx: 15, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  72: { name: "dog_small1",
    pic: 5, state: 3000, wait: 1, next: 73, dvx: 15, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  73: { name: "dog_small1",
    pic: 4, state: 3000, wait: 1, next: 70, dvx: 15, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0,
    itr: {
      kind: 0, x: 110, y: 60, w: 87, h: 70, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 35, effect: 5
    }
  },
  78: { name: "bird",
    pic: 999, state: 3003, wait: 0, next: 79, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "bird",
    pic: 999, state: 3003, wait: 6, next: 80, dvx: 550, dvy: 0, centerx: 110, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 110, y: 60, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  80: { name: "bird",
    pic: 8, state: 3003, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1
  },
  81: { name: "bird",
    pic: 9, state: 3003, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1
  },
  82: { name: "bird",
    pic: 10, state: 3003, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 110, centery: 158, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1
  },
  83: { name: "bird",
    pic: 8, state: 3003, wait: 1, next: 84, dvx: 0, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1
  },
  84: { name: "bird",
    pic: 9, state: 3003, wait: 1, next: 85, dvx: 0, dvy: 0, centerx: 110, centery: 141, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1
  },
  85: { name: "bird",
    pic: 10, state: 3003, wait: 1, next: 86, dvx: 0, dvy: 0, centerx: 110, centery: 158, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1
  },
  86: { name: "bird",
    pic: 11, state: 3003, wait: 1, next: 87, dvx: 70, dvy: 0, centerx: 110, centery: 158, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 110, y: 85, w: 87, h: 40, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 80, effect: 5
    }
  },
  87: { name: "bird",
    pic: 12, state: 3003, wait: 3, next: 88, dvx: 70, dvy: 0, centerx: 110, centery: 158, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 110, y: 85, w: 87, h: 40, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 80, effect: 5
    }
  },
  88: { name: "bird",
    pic: 11, state: 3003, wait: 1, next: 89, dvx: 70, dvy: 0, centerx: 110, centery: 158, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 110, y: 85, w: 87, h: 40, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 80, effect: 5
    }
  },
  89: { name: "bird",
    pic: 12, state: 3003, wait: 3, next: 80, dvx: 70, dvy: 0, centerx: 110, centery: 158, hit_a: 3, hit_d: 20, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 110, y: 85, w: 87, h: 40, dvx: 15, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 80, effect: 5
    }
  },
  100: { name: "two_eyes",
    pic: 16, state: 3005, wait: 1, next: 101, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "two_eyes",
    pic: 17, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "two_eyes",
    pic: 18, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "two_eyes",
    pic: 19, state: 3005, wait: 1, next: 104, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "two_eyes",
    pic: 20, state: 3005, wait: 1, next: 105, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  105: { name: "two_eyes",
    pic: 21, state: 3005, wait: 1, next: 106, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "two_eyes",
    pic: 22, state: 3005, wait: 1, next: 107, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  107: { name: "two_eyes",
    pic: 21, state: 3005, wait: 1, next: 108, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  108: { name: "two_eyes",
    pic: 20, state: 3005, wait: 1, next: 109, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  109: { name: "two_eyes",
    pic: 19, state: 3005, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "two_eyes",
    pic: 18, state: 3005, wait: 1, next: 111, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "two_eyes",
    pic: 17, state: 3005, wait: 1, next: 112, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "two_eyes",
    pic: 16, state: 3005, wait: 1, next: 113, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "two_eyes",
    pic: 17, state: 3005, wait: 1, next: 114, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "two_eyes",
    pic: 18, state: 3005, wait: 1, next: 115, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "two_eyes",
    pic: 19, state: 3005, wait: 1, next: 116, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "two_eyes",
    pic: 20, state: 3005, wait: 1, next: 117, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "two_eyes",
    pic: 21, state: 3005, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "two_eyes",
    pic: 22, state: 3005, wait: 1, next: 119, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "two_eyes",
    pic: 21, state: 3005, wait: 1, next: 120, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "two_eyes",
    pic: 20, state: 3005, wait: 1, next: 121, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "two_eyes",
    pic: 19, state: 3005, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "two_eyes",
    pic: 18, state: 3005, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "two_eyes",
    pic: 17, state: 3005, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "two_eyes",
    pic: 16, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 224, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});