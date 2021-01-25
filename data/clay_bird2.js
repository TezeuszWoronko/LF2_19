define({
  bmp: {
    file: [
      {
        "file(0-31)": "sprite/clay_bird2.png", w: 81, h: 82, row: 4, col: 10
      },
      {
        "file(32-40)": "sprite/big_dog.png", w: 255, h: 150, row: 3, col: 3
      },
      {
        "file(41-80)": "sprite/poison.png", w: 81, h: 82, row: 4, col: 10
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "start ",
    pic: 4, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  1: { name: "flying",
    pic: 7, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  2: { name: "flying",
    pic: 4, state: 3000, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  3: { name: "flying",
    pic: 7, state: 3000, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  4: { name: "fish",
    pic: 5, state: 3000, wait: 5, next: 8, dvx: 10, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "fish",
    pic: 8, state: 3000, wait: 1, next: 6, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "fish",
    pic: 9, state: 3000, wait: 1, next: 7, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "fish",
    pic: 8, state: 3000, wait: 1, next: 9, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "fish",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 5, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 89, action: 5, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  9: { name: "fish",
    pic: 9, state: 3000, wait: 1, next: 130, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3000, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 999, state: 3000, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 81, action: 144, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "puff",
    pic: 0, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  42: { name: "puff",
    pic: 1, state: 3005, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "puff",
    pic: 2, state: 3005, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "puff",
    pic: 3, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 0, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  51: { name: "start",
    pic: 1, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "start",
    pic: 2, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "start",
    pic: 3, state: 3005, wait: 1, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "start",
    pic: 4, state: 3000, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_Fa: 3, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 999, state: 3001, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 81, action: 144, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  70: { name: "spark",
    pic: 16, state: 3005, wait: 2, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "spark",
    pic: 17, state: 3005, wait: 2, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "spark",
    pic: 18, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "spark2",
    pic: 12, state: 3005, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  74: { name: "spark2",
    pic: 13, state: 3005, wait: 1, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "spark2",
    pic: 14, state: 3005, wait: 1, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "spark2",
    pic: 15, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "arm",
    pic: 19, state: 3005, wait: 10, next: 81, dvx: 20, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "arm",
    pic: 22, state: 3005, wait: 1, next: 82, dvx: -1, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "arm",
    pic: 23, state: 3005, wait: 1, next: 83, dvx: 1, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    opoint: {
      kind: 1, x: 42, y: 47, action: 86, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  83: { name: "arm",
    pic: 22, state: 9997, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "spark3",
    pic: 20, state: 3006, wait: 1, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019"
  },
  85: { name: "spark3",
    pic: 21, state: 9997, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 47, action: 80, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  86: { name: "kunai",
    pic: 999, state: 3005, wait: 0, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "kunai",
    pic: 999, state: 3005, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: 60, y: 20, action: 40, dvx: 40, dvy: 0, oid: 515, facing: 50
    }
  },
  88: { name: "kunai",
    pic: 999, state: 3005, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 20, action: 40, dvx: 40, dvy: 0, oid: 515, facing: 51
    }
  },
  89: { name: "kunai",
    pic: 999, state: 3005, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: 60, y: 20, action: 40, dvx: 40, dvy: 0, oid: 515, facing: 50
    }
  },
  90: { name: "kunai",
    pic: 999, state: 3005, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 20, action: 40, dvx: 40, dvy: 0, oid: 515, facing: 51
    }
  },
  91: { name: "kunai",
    pic: 999, state: 3005, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: 60, y: 20, action: 40, dvx: 40, dvy: 0, oid: 515, facing: 50
    }
  },
  92: { name: "kunai",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 15, action: 40, dvx: 40, dvy: 0, oid: 515, facing: 51
    }
  },
  95: { name: "iron",
    pic: 24, state: 3005, wait: 1, next: 96, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "iron",
    pic: 25, state: 3005, wait: 1, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "iron",
    pic: 26, state: 3005, wait: 1, next: 98, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "iron",
    pic: 27, state: 3005, wait: 1, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  99: { name: "iron",
    pic: 28, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "iron",
    pic: 29, state: 3005, wait: 1, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "iron",
    pic: 30, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "iron",
    pic: 31, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 70, action: 103, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  103: { name: "iron",
    pic: 10, state: 3006, wait: 1, next: 104, dvx: 30, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -10, fall: 70, arest: 10, bdefend: 1, injury: 20, effect: 1
    }
  },
  104: { name: "iron",
    pic: 11, state: 3006, wait: 1, next: 105, dvx: 30, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -10, fall: 70, arest: 10, bdefend: 1, injury: 20, effect: 1
    }
  },
  105: { name: "iron",
    pic: 11, state: 3006, wait: 1, next: 104, dvx: 30, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -10, fall: 70, arest: 10, bdefend: 1, injury: 20, effect: 1
    }
  },
  110: { name: "iron2",
    pic: 24, state: 3005, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "iron2",
    pic: 25, state: 3005, wait: 1, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "iron2",
    pic: 26, state: 3005, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "iron2",
    pic: 27, state: 3005, wait: 1, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "iron2",
    pic: 28, state: 3005, wait: 1, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "iron2",
    pic: 29, state: 3005, wait: 1, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "iron2",
    pic: 30, state: 3005, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "iron2",
    pic: 31, state: 3005, wait: 1, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 65, action: 120, dvx: 0, dvy: 0, oid: 206, facing: 30
    }
  },
  118: { name: "iron2",
    pic: 30, state: 3005, wait: 1, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 65, action: 120, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  119: { name: "iron2",
    pic: 31, state: 3005, wait: 1, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 65, action: 120, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  120: { name: "flying",
    pic: 10, state: 3006, wait: 5, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -10, fall: 70, arest: 10, bdefend: 1, injury: 3, effect: 1
    }
  },
  121: { name: "flying",
    pic: 11, state: 3006, wait: 5, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -10, fall: 70, arest: 10, bdefend: 1, injury: 3, effect: 1
    }
  },
  122: { name: "flying",
    pic: 10, state: 3006, wait: 5, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -2, fall: 70, arest: 5, bdefend: 1, injury: 3, effect: 1
    }
  },
  123: { name: "flying",
    pic: 11, state: 3006, wait: 5, next: 121, dvx: 15, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 5, dvy: -2, fall: 70, arest: 5, bdefend: 1, injury: 3, effect: 1
    }
  },
  125: { name: "iron2",
    pic: 30, state: 3005, wait: 1, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 65, action: 120, dvx: 10, dvy: 0, oid: 206, facing: 30
    }
  },
  126: { name: "iron2",
    pic: 31, state: 3005, wait: 1, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "iron2",
    pic: 30, state: 3005, wait: 1, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 65, action: 120, dvx: 10, dvy: 0, oid: 206, facing: 20
    }
  },
  128: { name: "iron2",
    pic: 31, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 65, action: 120, dvx: 0, dvy: 0, oid: 206, facing: 30
    }
  },
  130: { name: "fish",
    pic: 8, state: 3000, wait: 1, next: 131, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "fish",
    pic: 9, state: 3000, wait: 1, next: 132, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "fish",
    pic: 8, state: 3000, wait: 1, next: 133, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "fish",
    pic: 9, state: 3000, wait: 1, next: 134, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 100, action: 130, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  134: { name: "fish",
    pic: 8, state: 3000, wait: 4, next: 1000, dvx: 15, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0,
    opoint: {
      kind: 1, x: 50, y: 100, action: 130, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  135: { name: "BOMB",
    pic: 6, state: 3003, wait: 850, next: 136, dvx: 550, dvy: 550, dvz: 550, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  136: { name: "BOMB",
    pic: 999, state: 3003, wait: 0, next: 137, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 750, y: 55, action: 137, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  137: { name: "selfdestruct2",
    pic: 999, state: 3003, wait: 0, next: 138, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -750, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  138: { name: "selfdestruct2",
    pic: 999, state: 3003, wait: 0, next: 139, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 950, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  139: { name: "selfdestruct2",
    pic: 999, state: 3003, wait: 0, next: 140, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -950, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  140: { name: "selfdestruct2",
    pic: 999, state: 3003, wait: 0, next: 141, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  141: { name: "selfdestruct2",
    pic: 999, state: 400, wait: 0, next: 142, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 1250, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    },
    itr: {
      kind: 0, x: -99999999, y: -99, w: 99999999, h: 9999999, dvx: 2, fall: 9999, vrest: 20, bdefend: 999, injury: 99999, effect: 2
    }
  },
  142: { name: "selfdestruct2",
    pic: 999, state: 400, wait: 0, next: 143, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  143: { name: "selfdestruct2",
    pic: 999, state: 400, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 55, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  145: { name: "BOMB2",
    pic: 6, state: 3003, wait: 780, next: 146, dvx: 550, dvy: 550, dvz: 550, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "BOMB2",
    pic: 999, state: 3003, wait: 0, next: 147, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 55, action: 323, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  147: { name: "BOMB2",
    pic: 999, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "big_bird",
    pic: 48, state: 3000, wait: 3, next: 151, dvx: 8, dvy: 13, dvz: 0, centerx: 139, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "big_bird",
    pic: 48, state: 3000, wait: 0, next: 152, dvx: 550, dvy: 550, dvz: 0, centerx: 139, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 139, y: 132, action: 130, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  152: { name: "big_bird",
    pic: 48, state: 3000, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 139, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "sasori",
    pic: 999, state: 18, wait: 3, next: 155, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -444444444, w: 99999999, h: 500, zwidth: 999, effect: 6260
    }
  },
  158: { name: "poison_ef",
    pic: 999, state: 3005, wait: 4, next: 159, dvx: 0, dvy: 0, dvz: -10, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0
  },
  159: { name: "poison_ef",
    pic: 999, state: 3005, wait: 0, next: 172, dvx: 0, dvy: 0, dvz: 1, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "poison",
    pic: 49, state: 3005, wait: 1, next: 161, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  161: { name: "poison",
    pic: 50, state: 3005, wait: 1, next: 162, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  162: { name: "poison",
    pic: 51, state: 3005, wait: 1, next: 163, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  163: { name: "poison",
    pic: 52, state: 3005, wait: 1, next: 164, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  164: { name: "poison",
    pic: 53, state: 3005, wait: 1, next: 165, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  165: { name: "poison",
    pic: 54, state: 3005, wait: 1, next: 166, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  166: { name: "poison",
    pic: 55, state: 3005, wait: 1, next: 167, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  167: { name: "poison",
    pic: 56, state: 3005, wait: 1, next: 168, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  168: { name: "poison",
    pic: 57, state: 3005, wait: 1, next: 169, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  169: { name: "poison",
    pic: 58, state: 3005, wait: 1, next: 170, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  170: { name: "poison",
    pic: 59, state: 3005, wait: 1, next: 171, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  171: { name: "poison",
    pic: 60, state: 3005, wait: 1, next: 160, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 5
    }
  },
  172: { name: "poison_ef",
    pic: 999, state: 3005, wait: 0, next: 173, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0
  },
  173: { name: "poison_ef",
    pic: 999, state: 3005, wait: 0, next: 174, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 52, action: 163, dvx: 0, dvy: 0, oid: 452
    }
  },
  174: { name: "poison_ef",
    pic: 999, state: 3005, wait: 0, next: 175, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 155, y: 52, action: 165, dvx: 0, dvy: 0, oid: 452
    }
  },
  175: { name: "poison_ef",
    pic: 999, state: 3005, wait: 0, next: 176, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 78, y: 52, action: 166, dvx: 0, dvy: 0, oid: 452
    }
  },
  176: { name: "poison_ef",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 120, y: 52, action: 168, dvx: 0, dvy: 0, oid: 452
    }
  },
  180: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 181, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  181: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 182, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 66, y: 0, action: 182, dvx: 0, dvy: 0, oid: 206, facing: 1
    }
  },
  182: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 183, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 103, y: 0, action: 184, dvx: 0, dvy: 0, oid: 206, facing: 1
    }
  },
  183: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 184, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  184: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 185, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 64, y: 0, action: 186, dvx: 0, dvy: 0, oid: 206, facing: 1
    }
  },
  185: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 188, dvx: 0, dvy: 0, oid: 206, facing: 1
    }
  },
  186: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 187, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 180
  },
  187: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  188: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 189, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  189: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 62, y: 0, action: 192, dvx: 0, dvy: 0, oid: 206, facing: 1
    }
  },
  190: { name: "swamp",
    pic: 100, state: 3005, wait: 2, next: 191, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 192, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  192: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 193, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  193: { name: "swamp (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 0, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  194: { name: "swamp",
    pic: 100, state: 3005, wait: 2, next: 195, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  195: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 196, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  196: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 197, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  197: { name: "swamp (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 0, action: 163, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  }
  }
});