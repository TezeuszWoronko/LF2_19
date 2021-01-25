define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/frog.png", w: 130, h: 140, row: 5, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 15, state: 3000, wait: 2, next: 1, dvx: 23, dvy: 0, centerx: 65, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 127, w: 55, h: 27, dvx: 0, dvy: 0, fall: 999, vrest: 10, bdefend: 16, injury: 1, effect: 0
    },
    bdy: {
      kind: 0, x: 32, y: 127, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 16, state: 3000, wait: 2, next: 999, dvx: 23, dvy: 0, centerx: 53, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 127, w: 55, h: 27, dvx: 0, dvy: 0, fall: 999, vrest: 10, bdefend: 16, injury: 1, effect: 0
    },
    bdy: {
      kind: 0, x: 32, y: 127, w: 55, h: 27
    }
  },
  10: { name: "hit",
    pic: 12, state: 3003, wait: 2, next: 11, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "swamp",
    pic: 13, state: 3003, wait: 2, next: 12, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "swamp",
    pic: 14, state: 3003, wait: 2, next: 13, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 14, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  14: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 15, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  15: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 110, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 43, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 42, action: 0, dvx: 0, dvy: 0, oid: 210, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 46, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 999, state: 18, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "tail",
    pic: 999, state: 18, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "tail",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 999, state: 3005, wait: 1, next: 51, dvx: 550, dvy: 0, dvz: 550, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  51: { name: "start",
    pic: 12, state: 3005, wait: 1, next: 55, dvx: 550, dvy: -3, dvz: 550, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  55: { name: "flying2",
    pic: 12, state: 3000, wait: 2, next: 56, dvx: 0, dvy: 1, dvz: 0, centerx: 61, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  56: { name: "flying2",
    pic: 12, state: 3000, wait: 2, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 61, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  60: { name: "hiting",
    pic: 999, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  61: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 45, action: 10, dvx: 0, dvy: 0, oid: 239, facing: 1
    }
  },
  65: { name: "start",
    pic: 999, state: 3005, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 550, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  67: { name: "flying3",
    pic: 6, state: 3000, wait: 0, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 10, dvy: -10, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 2
    }
  },
  70: { name: "eye",
    pic: 20, state: 3005, wait: 2, next: 71, dvx: 550, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "eye",
    pic: 21, state: 3000, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "eye",
    pic: 22, state: 3000, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "eye",
    pic: 23, state: 3000, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "eye",
    pic: 17, state: 3000, wait: 2, next: 75, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "eye",
    pic: 18, state: 3000, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "fire_rain",
    pic: 4, state: 3005, wait: 1, next: 81, dvx: 550, dvy: -15, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "fire_rain",
    pic: 5, state: 3005, wait: 1, next: 82, dvx: 0, dvy: -15, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "fire_rain",
    pic: 4, state: 3005, wait: 1, next: 83, dvx: 0, dvy: -15, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "fire_rain",
    pic: 5, state: 3005, wait: 1, next: 84, dvx: 0, dvy: -15, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "fire_rain",
    pic: 4, state: 3005, wait: 0, next: 85, dvx: 0, dvy: -15, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 35, action: 65, dvx: 0, dvy: 0, oid: 210, facing: 0
    }
  },
  85: { name: "fire_rain",
    pic: 5, state: 3005, wait: 0, next: 86, dvx: 0, dvy: 550, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 35, action: 65, dvx: 0, dvy: 0, oid: 210, facing: 0
    }
  },
  86: { name: "fire_rain",
    pic: 5, state: 3005, wait: 0, next: 65, dvx: 0, dvy: 550, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 35, action: 65, dvx: 0, dvy: 0, oid: 210, facing: 0
    }
  },
  110: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 111, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  111: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 112, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  112: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 113, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  113: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 114, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  114: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 115, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  115: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 116, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  116: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 117, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  117: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 118, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  118: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 119, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  119: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 120, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  120: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 121, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  121: { name: "swamp",
    pic: 14, state: 3003, wait: 2, next: 122, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "swamp",
    pic: 13, state: 3003, wait: 2, next: 123, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "swamp",
    pic: 12, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});