define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/katon2.png", w: 81, h: 82, row: 4, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 23, dvy: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 25, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 23, dvy: 0, centerx: 53, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 25, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 999, dvx: 23, dvy: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 25, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 8, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 9, state: 3001, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 10, state: 3001, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 11, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 9, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 10, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 11, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 8, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 43, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 9, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 42, action: 0, dvx: 0, dvy: 0, oid: 210, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 10, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 46, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 11, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 3, state: 18, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "tail",
    pic: 7, state: 18, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "tail",
    pic: 6, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 999, state: 3005, wait: 1, next: 55, dvx: 550, dvy: 0, dvz: 550, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  55: { name: "flying2",
    pic: 3, state: 3000, wait: 0, next: 55, dvx: 0, dvy: 1, dvz: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 10, dvy: -10, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 2
    }
  },
  60: { name: "hiting",
    pic: 8, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  61: { name: "hiting",
    pic: 8, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 45, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
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
  }
  }
});