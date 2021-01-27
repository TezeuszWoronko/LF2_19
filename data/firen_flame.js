define({
  bmp: {
    file: [
      {
        "file(0-17)": "sprite/firen_flame.png", w: 59, h: 63, row: 6, col: 3
      },
      {
        "file(18-33)": "sprite/firen_grd.png", w: 35, h: 49, row: 4, col: 4
      },
      {
        "file(34-48)": "sprite/firen_exp.png", w: 159, h: 159, row: 5, col: 3
      }
    ],
    weapon_hit_sound: "1/068",
    weapon_drop_sound: "1/068",
    weapon_broken_sound: "1/068"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 3, dvy: 0, centerx: 6, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 18, wait: 1, next: 2, dvx: 3, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 80000, w: 34, h: 25, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  2: { name: "flying",
    pic: 2, state: 18, wait: 1, next: 3, dvx: 2, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 80000, w: 34, h: 25, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  3: { name: "flying",
    pic: 3, state: 18, wait: 1, next: 4, dvx: 2, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 80000, w: 37, h: 23, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  4: { name: "flying",
    pic: 4, state: 18, wait: 1, next: 5, dvx: 2, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 80000, w: 40, h: 29, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  5: { name: "flying",
    pic: 5, state: 18, wait: 1, next: 6, dvx: 3, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 80000, w: 44, h: 38, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  6: { name: "flying",
    pic: 6, state: 18, wait: 1, next: 7, dvx: 4, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 80000, w: 44, h: 42, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  7: { name: "flying",
    pic: 7, state: 18, wait: 1, next: 8, dvx: 4, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 43, h: 39, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  8: { name: "flying",
    pic: 8, state: 18, wait: 1, next: 9, dvx: 4, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 80000, w: 46, h: 46, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  9: { name: "flying",
    pic: 9, state: 18, wait: 1, next: 100, dvx: 3, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 80000, w: 44, h: 49, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 38, effect: 21
    }
  },
  10: { name: "hiting",
    pic: 15, state: 18, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 15, state: 18, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 15, state: 18, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "ground_fire",
    pic: 18, state: 3003, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "ground_fire",
    pic: 19, state: 3003, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -1, y: 80000, action: 54, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  52: { name: "ground_fire",
    pic: 20, state: 3003, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 80000, w: 36, h: 32, dvx: -1, dvy: -6, fall: 999, vrest: 20, bdefend: 3, injury: 20, effect: 20
    }
  },
  53: { name: "ground_fire",
    pic: 21, state: 3003, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "ground_fire",
    pic: 22, state: 3003, wait: 1, next: 55, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "ground_fire",
    pic: 23, state: 3003, wait: 1, next: 56, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "ground_fire",
    pic: 24, state: 3003, wait: 1, next: 57, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "ground_fire",
    pic: 25, state: 3003, wait: 1, next: 58, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 30, hit_d: 70, hit_j: 0
  },
  58: { name: "ground_fire",
    pic: 18, state: 3003, wait: 1, next: 59, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "ground_fire",
    pic: 19, state: 3003, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "ground_fire",
    pic: 26, state: 3003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "ground_fire",
    pic: 27, state: 3003, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "ground_fire",
    pic: 28, state: 3003, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "ground_fire",
    pic: 33, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "ground_fire",
    pic: 30, state: 3003, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "ground_fire",
    pic: 31, state: 3003, wait: 1, next: 76, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "ground_fire",
    pic: 32, state: 3003, wait: 1, next: 77, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "flying",
    pic: 10, state: 18, wait: 1, next: 101, dvx: 3, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 10, effect: 21
    }
  },
  101: { name: "flying",
    pic: 11, state: 18, wait: 1, next: 102, dvx: 2, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 10, effect: 21
    }
  },
  102: { name: "flying",
    pic: 12, state: 18, wait: 1, next: 103, dvx: 2, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 10, effect: 21
    }
  },
  103: { name: "flying",
    pic: 13, state: 18, wait: 1, next: 104, dvx: 2, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 10, effect: 21
    }
  },
  104: { name: "flying",
    pic: 14, state: 18, wait: 1, next: 1000, dvx: 2, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 10, dvy: -10, fall: 999, vrest: 300, bdefend: 16, injury: 10, effect: 21
    }
  },
  109: { name: "explosion",
    pic: 48, state: 3000, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  110: { name: "explosion",
    pic: 34, state: 18, wait: 1, next: 111, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  111: { name: "explosion",
    pic: 35, state: 18, wait: 1, next: 112, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 16, w: 122, h: 135, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  112: { name: "explosion",
    pic: 36, state: 18, wait: 1, next: 113, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 18, w: 127, h: 131, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  113: { name: "explosion",
    pic: 37, state: 18, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 16, w: 146, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  114: { name: "explosion",
    pic: 38, state: 18, wait: 1, next: 115, dvx: 0, dvy: 0, centerx: 78, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 13, w: 137, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  115: { name: "explosion",
    pic: 39, state: 18, wait: 1, next: 116, dvx: 0, dvy: 0, centerx: 78, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 14, w: 145, h: 117, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  116: { name: "explosion",
    pic: 40, state: 18, wait: 1, next: 117, dvx: 0, dvy: 0, centerx: 78, centery: 157, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  117: { name: "explosion",
    pic: 41, state: 18, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 78, centery: 164, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  118: { name: "explosion",
    pic: 42, state: 18, wait: 1, next: 119, dvx: 0, dvy: 0, centerx: 78, centery: 171, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "explosion",
    pic: 43, state: 18, wait: 1, next: 120, dvx: 0, dvy: 0, centerx: 78, centery: 177, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "explosion",
    pic: 44, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 76, centery: 172, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 140, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  134: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 135, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 136, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  135: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 138, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  136: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 137, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  137: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 141, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  138: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 139, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  139: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 142, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  140: { name: "explosion_start",
    pic: 100, state: 3005, wait: 2, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 143, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "explosion_start (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 2, action: 144, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  144: { name: "explosion",
    pic: 48, state: 3000, wait: 1, next: 145, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  145: { name: "explosion",
    pic: 34, state: 18, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  146: { name: "explosion",
    pic: 35, state: 18, wait: 1, next: 147, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 16, w: 122, h: 135, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  147: { name: "explosion",
    pic: 36, state: 18, wait: 1, next: 148, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 18, w: 127, h: 131, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  148: { name: "explosion",
    pic: 37, state: 18, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 16, w: 146, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  149: { name: "explosion",
    pic: 38, state: 18, wait: 1, next: 150, dvx: 0, dvy: 0, centerx: 78, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 13, w: 137, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  150: { name: "explosion",
    pic: 39, state: 18, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 78, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 14, w: 145, h: 117, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  151: { name: "explosion",
    pic: 40, state: 18, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 78, centery: 157, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  152: { name: "explosion",
    pic: 41, state: 18, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 78, centery: 164, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 2
    }
  },
  153: { name: "explosion",
    pic: 42, state: 18, wait: 1, next: 154, dvx: 0, dvy: 0, centerx: 78, centery: 171, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "explosion",
    pic: 43, state: 18, wait: 1, next: 155, dvx: 0, dvy: 0, centerx: 78, centery: 177, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "explosion",
    pic: 44, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 76, centery: 172, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "explosion",
    pic: 48, state: 3000, wait: 1, next: 161, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  161: { name: "explosion",
    pic: 34, state: 18, wait: 1, next: 162, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 100, injury: 50, zwidth: 37, effect: 21
    }
  },
  162: { name: "explosion",
    pic: 35, state: 18, wait: 1, next: 163, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 16, w: 122, h: 135, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  163: { name: "explosion",
    pic: 36, state: 18, wait: 1, next: 164, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 18, w: 127, h: 131, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  164: { name: "explosion",
    pic: 37, state: 18, wait: 1, next: 169, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 16, w: 146, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  165: { name: "explosion",
    pic: 38, state: 18, wait: 1, next: 166, dvx: 0, dvy: 0, centerx: 78, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 13, w: 137, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  166: { name: "explosion",
    pic: 39, state: 18, wait: 1, next: 167, dvx: 0, dvy: 0, centerx: 78, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 14, w: 145, h: 117, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  167: { name: "explosion",
    pic: 40, state: 18, wait: 1, next: 168, dvx: 0, dvy: 0, centerx: 78, centery: 157, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  168: { name: "explosion",
    pic: 41, state: 18, wait: 1, next: 169, dvx: 0, dvy: 0, centerx: 78, centery: 164, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 50, zwidth: 37, effect: 21
    }
  },
  169: { name: "explosion",
    pic: 42, state: 18, wait: 1, next: 170, dvx: 0, dvy: 0, centerx: 78, centery: 171, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "explosion",
    pic: 43, state: 18, wait: 1, next: 171, dvx: 0, dvy: 0, centerx: 78, centery: 177, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "explosion",
    pic: 44, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 76, centery: 172, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "ground_fire",
    pic: 999, state: 3005, wait: 1, next: 172, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 70, hit_d: 173, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  173: { name: "ground_fire",
    pic: 999, state: 3005, wait: 0, next: 174, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  174: { name: "ground_fire",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 175, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  175: { name: "explosion",
    pic: 40, state: 18, wait: 0, next: 176, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 5, zwidth: 37, effect: 2
    }
  },
  176: { name: "explosion",
    pic: 40, state: 18, wait: 0, next: 177, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 78, y: 100, action: 0, dvx: -3, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 5, zwidth: 37, effect: 2
    }
  },
  177: { name: "explosion",
    pic: 41, state: 18, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 5, zwidth: 37, effect: 2
    },
    opoint: {
      kind: 1, x: 78, y: 100, action: 0, dvx: -3, dvy: 0, oid: 211, facing: 1
    }
  },
  231: { name: "explosion",
    pic: 48, state: 20, wait: 0, next: 232, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  232: { name: "explosion",
    pic: 34, state: 20, wait: 0, next: 162, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 100, injury: 80, zwidth: 37, effect: 21
    }
  }
  }
});