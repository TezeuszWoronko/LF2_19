define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/sand_shield.png", w: 81, h: 82, row: 4, col: 5
      }
    ],
    weapon_hit_sound: "1/002",
    weapon_drop_sound: "1/010",
    weapon_broken_sound: "1/002"
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  1: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  2: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  3: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  4: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  5: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  6: { name: "flying",
    pic: 999, state: 3000, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  7: { name: "flying",
    pic: 999, state: 9998, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 30, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3001, wait: 0, next: 30, dvx: 0, dvy: 0, centerx: 44, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 0, state: 7, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    }
  },
  31: { name: "rebounding",
    pic: 1, state: 7, wait: 0, next: 32, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    }
  },
  32: { name: "rebounding",
    pic: 2, state: 7, wait: 0, next: 33, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    }
  },
  33: { name: "rebounding",
    pic: 3, state: 7, wait: 0, next: 34, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    }
  },
  34: { name: "rebounding",
    pic: 4, state: 7, wait: 5, next: 35, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "rebounding",
    pic: 4, state: 7, wait: 0, next: 36, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0
  },
  36: { name: "rebounding",
    pic: 4, state: 9998, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  37: { name: "finish",
    pic: 8, state: 7, wait: 1, next: 38, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/069"
  },
  38: { name: "finish",
    pic: 9, state: 7, wait: 1, next: 39, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  39: { name: "finish",
    pic: 10, state: 7, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "sand clone",
    pic: 999, state: 3005, wait: 3, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "sand clone",
    pic: 5, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "sand clone",
    pic: 6, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "sand clone",
    pic: 7, state: 3005, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "sand clone",
    pic: 12, state: 3005, wait: 1, next: 55, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "sand clone",
    pic: 13, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 65, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  60: { name: "water clone",
    pic: 14, state: 3005, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "water clone",
    pic: 15, state: 3005, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "water clone",
    pic: 16, state: 3005, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "water clone",
    pic: 17, state: 3005, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "water clone",
    pic: 18, state: 3005, wait: 1, next: 65, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "water clone",
    pic: 19, state: 3005, wait: 1, next: 66, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "water clone",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "sand_spike1",
    pic: 0, state: 3003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "sand_spike1",
    pic: 1, state: 3003, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "sand_spike1",
    pic: 2, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "rebounding",
    pic: 0, state: 7, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    },
    itr: {
      kind: 0, x: 45, y: 0, w: 30, h: 25, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0
    }
  },
  81: { name: "rebounding",
    pic: 1, state: 7, wait: 0, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    },
    itr: {
      kind: 0, x: 45, y: 0, w: 30, h: 25, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0
    }
  },
  82: { name: "rebounding",
    pic: 2, state: 7, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    },
    itr: {
      kind: 0, x: 45, y: 0, w: 30, h: 25, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0
    }
  },
  83: { name: "rebounding",
    pic: 3, state: 7, wait: 0, next: 84, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    },
    itr: {
      kind: 0, x: 45, y: 0, w: 30, h: 25, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0
    }
  },
  84: { name: "rebounding",
    pic: 4, state: 7, wait: 5, next: 35, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 100, h: 80
    },
    itr: {
      kind: 0, x: 45, y: 0, w: 30, h: 25, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0
    }
  }
  }
});