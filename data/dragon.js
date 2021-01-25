define({
  bmp: {
    file: [
      {
        "file(0-8)": "sprite/dragon.png", w: 95, h: 55, row: 3, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3005, wait: 1, next: 1, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 20, y: 30, action: 70, dvx: 0, dvy: 0, oid: 400, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  1: { name: "flying",
    pic: 1, state: 3005, wait: 1, next: 2, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 20, y: 30, action: 70, dvx: 0, dvy: 0, oid: 400, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  2: { name: "flying",
    pic: 2, state: 3005, wait: 1, next: 3, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 20, y: 30, action: 70, dvx: 0, dvy: 0, oid: 400, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  3: { name: "flying",
    pic: 1, state: 3005, wait: 1, next: 999, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 20, y: 30, action: 70, dvx: 0, dvy: 0, oid: 400, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  5: { name: "flying",
    pic: 2, state: 3005, wait: 1, next: 5, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    opoint: {
      kind: 1, x: 20, y: 30, action: 70, dvx: 0, dvy: 0, oid: 400, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  10: { name: "hiting",
    pic: 0, state: 3005, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 0, state: 3005, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 0, state: 3002, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 3, state: 3005, wait: 4, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  41: { name: "tail",
    pic: 4, state: 3005, wait: 5, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  42: { name: "tail",
    pic: 5, state: 3005, wait: 9, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  43: { name: "tail",
    pic: 4, state: 3005, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 8, bdefend: 100, injury: 20
    }
  },
  44: { name: "tail",
    pic: 6, state: 3005, wait: 4, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "tail",
    pic: 6, state: 3005, wait: 4, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "tail",
    pic: 7, state: 3005, wait: 4, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "tail",
    pic: 7, state: 3005, wait: 4, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "tail",
    pic: 8, state: 3005, wait: 4, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "tail",
    pic: 8, state: 3005, wait: 4, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 51, dvx: 3, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 52, dvx: 2, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "flying",
    pic: 100, state: 3005, wait: 0, next: 71, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  71: { name: "flying",
    pic: 100, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  72: { name: "flying",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  }
  }
});