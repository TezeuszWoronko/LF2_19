define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/wind.png", w: 81, h: 82, row: 4, col: 6
      },
      {
        "file(24-29)": "sprite/hakke.png", w: 200, h: 95, row: 6, col: 1
      },
      {
        "file(30-41)": "sprite/smoke.png", w: 79, h: 79, row: 6, col: 2
      },
      {
        "file(42-49)": "sprite/temari_wind.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(50-54)": "sprite/temari_ww.png", w: 159, h: 320, row: 5, col: 1
      },
      {
        "file(55-60)": "sprite/temari_www.png", w: 145, h: 180, row: 4, col: 2
      }
    ],
    weapon_drop_sound: "1/001",
    weapon_broken_sound: "1/001"
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 55, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -25, w: 78, h: 127, dvx: 5, bdefend: 16, injury: 15
    }
  },
  2: { name: "flying3",
    pic: 999, state: 3005, wait: 4, next: 3, dvx: 35, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 17, dvy: -12, fall: 100, arest: 15, bdefend: 10, injury: 40
    }
  },
  3: { name: "flying3",
    pic: 999, state: 3005, wait: 3, next: 1000, dvx: 35, dvy: 0, centerx: 35, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 17, dvy: -12, fall: 100, arest: 15, bdefend: 10, injury: 40
    }
  },
  4: { name: "flying2",
    pic: 999, state: 3005, wait: 4, next: 5, dvx: 55, dvy: 0, dvz: 550, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 35, dvy: -7, zwidth: 15, fall: 100, vrest: 20, bdefend: 100, injury: 60
    }
  },
  5: { name: "flying",
    pic: 999, state: 3005, wait: 3, next: 6, dvx: 55, dvy: 0, dvz: 550, centerx: 35, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 35, dvy: -7, zwidth: 15, fall: 100, vrest: 20, bdefend: 100, injury: 60
    }
  },
  6: { name: "flying",
    pic: 999, state: 3005, wait: 2, next: 7, dvx: 55, dvy: 0, dvz: 550, centerx: 36, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 35, dvy: -7, zwidth: 15, fall: 100, vrest: 20, bdefend: 100, injury: 60
    }
  },
  7: { name: "flying",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 55, dvy: 0, dvz: 550, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 35, dvy: -7, zwidth: 15, fall: 100, vrest: 20, bdefend: 100, injury: 60
    }
  },
  8: { name: "flying2",
    pic: 0, state: 3005, wait: 1, next: 9, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "flying2",
    pic: 1, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 999, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 47, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 999, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 57, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 999, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 67, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 2, next: 21, dvx: 0, dvy: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 59, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 54, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 46, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 999, state: 3003, wait: 2, next: 33, dvx: 0, dvy: 0, centerx: 41, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 999, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 37, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "flying",
    pic: 999, state: 3005, wait: 2, next: 35, dvx: 55, dvy: 0, dvz: 550, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 35, dvy: -7, zwidth: 25, fall: 100, vrest: 20, bdefend: 100, injury: 97
    }
  },
  40: { name: "disappearing",
    pic: 0, state: 3005, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 1, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 2, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "hakke",
    pic: 24, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 100, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "hakke",
    pic: 24, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 100, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "hakke",
    pic: 26, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "rodulf_smoke",
    pic: 30, state: 3001, wait: 2, next: 61, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  61: { name: "rodulf_smoke",
    pic: 31, state: 3001, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "rodulf_smoke",
    pic: 32, state: 3001, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "rodulf_smoke",
    pic: 33, state: 3001, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "rodulf_smoke",
    pic: 34, state: 3001, wait: 2, next: 65, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "rodulf_smoke",
    pic: 35, state: 3001, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "rodulf_smoke",
    pic: 36, state: 3001, wait: 2, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "rodulf_smoke",
    pic: 37, state: 3001, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "rodulf_smoke",
    pic: 38, state: 3001, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "rodulf_smoke",
    pic: 39, state: 3001, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "rodulf_smoke",
    pic: 40, state: 3001, wait: 2, next: 75, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "rodulf_smoke",
    pic: 41, state: 3001, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 132, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  132: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 140, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  134: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 135, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 136, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  135: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 138, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  136: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 137, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  137: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 141, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  138: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 139, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  139: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 142, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  140: { name: "clone",
    pic: 100, state: 3005, wait: 2, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 143, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 2, action: 144, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  144: { name: "rodulf_smoke",
    pic: 30, state: 3001, wait: 2, next: 145, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  145: { name: "rodulf_smoke",
    pic: 31, state: 3001, wait: 2, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "rodulf_smoke",
    pic: 32, state: 3001, wait: 2, next: 147, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  147: { name: "rodulf_smoke",
    pic: 33, state: 3001, wait: 2, next: 148, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 78, action: 307, dvx: 0, dvy: 0, oid: 33, facing: 0
    }
  },
  148: { name: "rodulf_smoke",
    pic: 34, state: 3001, wait: 2, next: 149, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "rodulf_smoke",
    pic: 35, state: 3001, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "replacement",
    pic: 30, state: 3001, wait: 2, next: 151, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  151: { name: "replacement",
    pic: 31, state: 3001, wait: 2, next: 152, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "replacement",
    pic: 32, state: 3001, wait: 2, next: 153, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "replacement",
    pic: 33, state: 3001, wait: 2, next: 154, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 30, dvx: 0, dvy: 0, oid: 151, facing: 0
    }
  },
  154: { name: "replacement",
    pic: 34, state: 3001, wait: 2, next: 155, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "replacement",
    pic: 35, state: 3001, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 161, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  161: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 162, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 162, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  162: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 163, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  163: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 164, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 170, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  164: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 165, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 166, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  165: { name: "clone",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 168, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  166: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 167, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  167: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 171, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  168: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 169, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  169: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 172, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  170: { name: "clone",
    pic: 100, state: 3005, wait: 2, next: 171, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 172, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 173, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  173: { name: "clone",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 2, action: 174, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  174: { name: "rodulf_smoke",
    pic: 30, state: 3001, wait: 2, next: 175, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  175: { name: "rodulf_smoke",
    pic: 31, state: 3001, wait: 2, next: 176, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "rodulf_smoke",
    pic: 32, state: 3001, wait: 2, next: 177, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "rodulf_smoke",
    pic: 33, state: 3001, wait: 2, next: 178, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 81, action: 300, dvx: 0, dvy: 0, oid: 2, facing: 0
    }
  },
  178: { name: "rodulf_smoke",
    pic: 34, state: 3001, wait: 2, next: 179, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  179: { name: "rodulf_smoke",
    pic: 35, state: 3001, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "flying2",
    pic: 42, state: 3005, wait: 0, next: 181, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 55, hit_d: 183, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 0, dvy: -12, zwidth: 7, fall: 100, vrest: 10, bdefend: 100, injury: 45, effect: 1
    }
  },
  181: { name: "flying",
    pic: 43, state: 3005, wait: 0, next: 182, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 41, hit_a: 55, hit_d: 183, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 0, dvy: -12, zwidth: 7, fall: 100, vrest: 10, bdefend: 100, injury: 45, effect: 1
    }
  },
  182: { name: "flying",
    pic: 44, state: 3005, wait: 0, next: 180, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 41, hit_a: 55, hit_d: 183, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 0, dvy: -12, zwidth: 7, fall: 100, vrest: 10, bdefend: 100, injury: 45, effect: 1
    }
  },
  183: { name: "flying",
    pic: 42, state: 3005, wait: 0, next: 184, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 0, dvy: -12, zwidth: 7, fall: 100, vrest: 10, bdefend: 100, injury: 45, effect: 1
    }
  },
  184: { name: "flying",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "ww",
    pic: 50, state: 3003, wait: 1, next: 191, dvx: 0, dvy: 0, centerx: 79, centery: 320, hit_a: 8, hit_d: 194, hit_j: 0, hit_Fa: 12,
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  191: { name: "ww",
    pic: 51, state: 3003, wait: 1, next: 192, dvx: 4, dvy: 1, centerx: 79, centery: 320, hit_a: 8, hit_d: 194, hit_j: 0, hit_Fa: 12,
    itr: [
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 0, x: 0, y: 0, w: 79, h: 200, dvx: -3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 12, effect: 5
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 12, effect: 5
      }
    ]
  },
  192: { name: "ww",
    pic: 52, state: 3003, wait: 1, next: 193, dvx: 4, dvy: 0, centerx: 79, centery: 320, hit_a: 8, hit_d: 194, hit_j: 0, hit_Fa: 12,
    sound: "1/005",
    itr: [
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 0, x: 0, y: 0, w: 79, h: 200, dvx: -3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 12, effect: 5
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 12, effect: 5
      }
    ]
  },
  193: { name: "ww",
    pic: 53, state: 3003, wait: 1, next: 191, dvx: 4, dvy: 1, dvz: 0, centerx: 79, centery: 320, hit_a: 8, hit_d: 194, hit_Fa: 12,
    sound: "1/073",
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 79, h: 200, dvx: -3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 12, effect: 5
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 12, effect: 5
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  194: { name: "ww",
    pic: 54, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005"
  },
  195: { name: "kyubii",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 49, y: 60043, w: 30, h: 300, dvx: 0, dvy: 0, zwidth: 20, fall: -1, arest: 5, bdefend: 100, injury: -350, effect: 5
    }
  },
  200: { name: "ww",
    pic: 50, state: 3003, wait: 1, next: 201, dvx: 30, dvy: 0, centerx: 79, centery: 320, hit_a: 10, hit_d: 194, hit_j: 0,
    itr: [
      {
        kind: 0, x: 25, y: 150, w: 50, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 8, effect: 1
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 17, effect: 1
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 17
      }
    ]
  },
  201: { name: "ww",
    pic: 51, state: 3003, wait: 1, next: 202, dvx: 30, dvy: 0, centerx: 79, centery: 320, hit_a: 10, hit_d: 194, hit_j: 0,
    itr: [
      {
        kind: 0, x: 15, y: 150, w: 80, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 8, effect: 1
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 17, effect: 1
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 17
      }
    ]
  },
  202: { name: "ww",
    pic: 52, state: 3003, wait: 1, next: 203, dvx: 30, dvy: 0, centerx: 79, centery: 320, hit_a: 10, hit_d: 194, hit_j: 0, hit_Fa: 12,
    sound: "1/005",
    itr: {
      kind: 0, x: 15, y: 150, w: 100, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 8, effect: 1
    }
  },
  203: { name: "ww",
    pic: 53, state: 3003, wait: 1, next: -201, dvx: 30, dvy: 0, dvz: 0, centerx: 79, centery: 320, hit_a: 10, hit_d: 194, hit_j: 0,
    itr: [
      {
        kind: 0, x: 65, y: 150, w: 100, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 8, effect: 1
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 5, bdefend: 100, injury: 17, effect: 1
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 17
      }
    ]
  },
  205: { name: "flying",
    pic: 55, state: 3005, wait: 1, next: 206, dvx: 45, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/073",
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 70, arest: 1, bdefend: 100, injury: 29, effect: 1
    }
  },
  206: { name: "flying",
    pic: 56, state: 3005, wait: 1, next: 207, dvx: 0, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 70, arest: 1, bdefend: 100, injury: 29, effect: 1
    }
  },
  207: { name: "flying",
    pic: 57, state: 3005, wait: 1, next: 205, dvx: 45, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 70, arest: 1, bdefend: 100, injury: 29, effect: 1
    }
  },
  210: { name: "flying",
    pic: 59, state: 3005, wait: 1, next: 211, dvx: 550, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 100, vrest: 5, bdefend: 100, injury: 10, effect: 1
    }
  },
  211: { name: "flying",
    pic: 60, state: 3005, wait: 1, next: 212, dvx: 550, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 100, vrest: 5, bdefend: 100, injury: 10, effect: 1
    }
  },
  212: { name: "flying",
    pic: 61, state: 3005, wait: 1, next: 213, dvx: 550, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 100, vrest: 5, bdefend: 100, injury: 10, effect: 1
    }
  },
  213: { name: "flying",
    pic: 62, state: 3005, wait: 1, next: 214, dvx: 550, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 100, vrest: 5, bdefend: 100, injury: 10, effect: 1
    }
  },
  214: { name: "flying",
    pic: 58, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 73, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 0, y: 0, w: 135, h: 175, dvx: 3, dvy: -5, zwidth: 15, fall: 100, vrest: 5, bdefend: 100, injury: 10, effect: 1
    }
  },
  215: { name: "ww",
    pic: 50, state: 3003, wait: 1, next: 216, dvx: 0, dvy: 0, centerx: 79, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: [
      {
        kind: 0, x: 25, y: 175, w: 50, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 7, bdefend: 100, injury: 8, effect: 1
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 7, bdefend: 100, injury: 17
      }
    ]
  },
  216: { name: "ww",
    pic: 51, state: 3003, wait: 1, next: 217, dvx: 0, dvy: 0, centerx: 79, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: [
      {
        kind: 0, x: 25, y: 175, w: 50, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 7, bdefend: 100, injury: 8, effect: 1
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 7, bdefend: 100, injury: 17
      }
    ]
  },
  217: { name: "ww",
    pic: 52, state: 3003, wait: 1, next: 218, dvx: 0, dvy: 0, centerx: 79, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    sound: "1/005",
    itr: {
      kind: 0, x: 25, y: 175, w: 50, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 7, bdefend: 100, injury: 8, effect: 1
    }
  },
  218: { name: "ww",
    pic: 53, state: 3003, wait: 1, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: [
      {
        kind: 0, x: 25, y: 175, w: 50, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 7, bdefend: 100, injury: 8, effect: 1
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 7, bdefend: 100, injury: 17
      }
    ]
  },
  300: { name: "windpush",
    pic: 999, state: 3005, wait: 1, next: 301, dvx: 100, dvy: 0, dvz: 0, centerx: 79, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -90000, w: 300, h: 900000, zwidth: 999, dvx: 30, dvy: 0, fall: 10, vrest: 8, bdefend: 15, injury: 70, effect: 5
    }
  },
  301: { name: "windpush",
    pic: 999, state: 3005, wait: 10, next: 1000, dvx: 100, dvy: 0, dvz: 0, centerx: 79, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -90000, w: 300, h: 900000, zwidth: 999, dvx: 30, dvy: 0, fall: -1, vrest: 8, bdefend: 15, injury: 40, effect: 5
    }
  },
  305: { name: "stop",
    pic: 999, state: 18, wait: 5, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -999999, y: -555565665656666600, w: 999999999, h: 500, zwidth: 999, dvx: 0, dvy: 0, fall: 0, arest: 20, bdefend: 100, injury: 0, effect: 5
    }
  }
  }
});