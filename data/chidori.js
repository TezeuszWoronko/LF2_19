define({
  bmp: {
    file: [
      {
        "file(0-27)": "sprite/chidori.png", w: 81, h: 82, row: 4, col: 7
      },
      {
        "file(28-31)": "sprite/thunder.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(32-35)": "sprite/thunder2.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(36-40)": "sprite/thunder3.png", w: 199, h: 404, row: 4, col: 1
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 9, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 0, state: 3000, wait: 0, next: 2, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  2: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 3, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  3: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 4, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  4: { name: "flying",
    pic: 0, state: 3000, wait: 0, next: 5, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 6, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  6: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 10, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  7: { name: "flying",
    pic: 0, state: 3000, wait: 0, next: 10, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  8: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 9, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  9: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 10, dvx: 25, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  10: { name: "hiting",
    pic: 1, state: 3006, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 25, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  11: { name: "hiting",
    pic: 2, state: 3006, wait: 0, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 25, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  12: { name: "hiting",
    pic: 0, state: 3006, wait: 0, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 25, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  13: { name: "hiting",
    pic: 2, state: 3006, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 27, w: 25, h: 27, dvx: 7, fall: 80, vrest: 10, bdefend: 16, injury: 40, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  20: { name: "hit",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3005, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 65, y: 60, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  40: { name: "rebounding",
    pic: 999, state: 5, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "spark",
    pic: 8, state: 3005, wait: 0, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "spark",
    pic: 9, state: 3005, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "spark",
    pic: 10, state: 3005, wait: 0, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "spark",
    pic: 11, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "chidori_spark",
    pic: 3, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "chidori_hand",
    pic: 6, state: 3003, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "chidori_hand",
    pic: 7, state: 3005, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "chidori_hand",
    pic: 15, state: 3005, wait: 1, next: 64, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "chidori_hand",
    pic: 12, state: 3005, wait: 1, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "chidori_hand",
    pic: 13, state: 3005, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "chidori_hand",
    pic: 14, state: 3005, wait: 33, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "sgrab2",
    pic: 999, state: 400, wait: 3, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "col",
    pic: 999, state: 3005, wait: 50, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "col",
    pic: 999, state: 3005, wait: 0, next: 70, dvx: 150, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "col",
    pic: 27, state: 15, wait: 0, next: 71, dvx: -1, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 250, zwidth: 37, effect: 1
    }
  },
  71: { name: "col",
    pic: 29, state: 15, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 250, zwidth: 37, effect: 1
    }
  },
  72: { name: "col",
    pic: 30, state: 15, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 250, zwidth: 37, effect: 1
    }
  },
  73: { name: "col",
    pic: 31, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 250, zwidth: 37, effect: 1
    }
  },
  80: { name: "flying_needle",
    pic: 16, state: 3005, wait: 2, next: 81, dvx: 50, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 40, h: 35, dvx: 2, bdefend: 16, injury: 45, fall: 30, effect: 1
    }
  },
  81: { name: "flying_needle",
    pic: 16, state: 3005, wait: 2, next: 1000, dvx: 50, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 40, h: 35, dvx: 2, bdefend: 16, injury: 40, fall: 30, effect: 1
    }
  },
  83: { name: "flying_needle2",
    pic: 16, state: 3005, wait: 0, next: 84, dvx: 30, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 27, w: 100, h: 16, dvx: 5, dvy: -5, bdefend: 100, arest: 5, injury: 6, fall: 100, effect: 1
    }
  },
  84: { name: "flying_needle2",
    pic: 16, state: 3005, wait: 0, next: 83, dvx: 40, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 2, dvy: -2, bdefend: 100, arest: 5, injury: 6, fall: 1, effect: 1
    }
  },
  85: { name: "web_spin",
    pic: 17, state: 3006, wait: 0, next: 86, dvx: 50, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 10, dvy: -7, bdefend: 16, injury: 15, fall: 10, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  86: { name: "web_spin",
    pic: 18, state: 3006, wait: 0, next: 85, dvx: 50, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 10, dvy: -7, injury: 15, fall: 10, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  90: { name: "dark_chidori",
    pic: 20, state: 3005, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "dark_chidori",
    pic: 21, state: 3005, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "dark_chidori",
    pic: 22, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "chidori_hand2",
    pic: 6, state: 3003, wait: 1, next: 96, dvx: 3, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "chidori_hand2",
    pic: 7, state: 3003, wait: 1, next: 97, dvx: 3, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "chidori_hand2",
    pic: 15, state: 3003, wait: 1, next: 98, dvx: 3, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "chidori_hand2",
    pic: 19, state: 3003, wait: 2, next: 1000, dvx: 3, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  99: { name: "zetsu_hand",
    pic: 19, state: 3003, wait: 35, next: 1000, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "ground_chidori",
    pic: 24, state: 18, wait: 1, next: 101, dvx: 1, dvy: 0, dvz: 0, centerx: 43, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: [
      {
        kind: 0, x: 10, y: 59, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      },
      {
        kind: 0, x: 10, y: 30000, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      }
    ]
  },
  101: { name: "ground_chidori",
    pic: 25, state: 18, wait: 1, next: 102, dvx: 1, dvy: 0, dvz: 0, centerx: 43, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 59, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      },
      {
        kind: 0, x: 10, y: 30000, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      }
    ]
  },
  102: { name: "ground_chidori",
    pic: 26, state: 18, wait: 1, next: 103, dvx: 1, dvy: 0, dvz: 0, centerx: 43, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 59, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      },
      {
        kind: 0, x: 10, y: 30000, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      }
    ],
    opoint: {
      kind: 1, x: 80, y: 74, action: 102, dvx: 0, dvy: 0, oid: 440, facing: 20
    }
  },
  103: { name: "ground_chidori",
    pic: 24, state: 18, wait: 0, next: 104, dvx: 3, dvy: 0, dvz: 0, centerx: 43, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 59, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      },
      {
        kind: 0, x: 10, y: 30000, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      }
    ]
  },
  104: { name: "ground_chidori",
    pic: 25, state: 18, wait: 0, next: 105, dvx: 4, dvy: 0, dvz: 0, centerx: 43, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 59, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      },
      {
        kind: 0, x: 10, y: 30000, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      }
    ]
  },
  105: { name: "ground_chidori",
    pic: 26, state: 18, wait: 0, next: 1000, dvx: 5, dvy: 0, dvz: 0, centerx: 43, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 59, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      },
      {
        kind: 0, x: 10, y: 30000, w: 60, h: 25, dvx: 0, dvy: -5, fall: 10, vrest: 14, bdefend: 100, injury: 25, zwidth: 10, effect: 1
      }
    ]
  },
  110: { name: "blood",
    pic: 23, state: 3005, wait: 0, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  111: { name: "blood",
    pic: 7, state: 3005, wait: 0, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "blood",
    pic: 27, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "hell_thunder",
    pic: 999, state: 3005, wait: 0, next: 116, dvx: 20, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 40, action: 120, dvx: 0, dvy: 0, oid: 440, facing: 20
    }
  },
  116: { name: "hell_thunder",
    pic: 999, state: 3005, wait: 0, next: 115, dvx: 20, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "col",
    pic: 999, state: 3005, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "col",
    pic: 32, state: 3005, wait: 1, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "col",
    pic: 33, state: 3005, wait: 0, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "col",
    pic: 34, state: 15, wait: 0, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 155, zwidth: 37, effect: 1
    }
  },
  124: { name: "col",
    pic: 35, state: 15, wait: 0, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 155, zwidth: 37, effect: 1
    }
  },
  125: { name: "col",
    pic: 36, state: 15, wait: 0, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 155, zwidth: 37, effect: 1
    }
  },
  126: { name: "col",
    pic: 37, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -25, fall: 70, vrest: 30, bdefend: 100, injury: 155, zwidth: 37, effect: 1
    }
  },
  130: { name: "smite",
    pic: 36, state: 3005, wait: 0, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "smite",
    pic: 37, state: 3005, wait: 0, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "smite",
    pic: 28, state: 18, wait: 0, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: [
      {
        kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      },
      {
        kind: 0, x: 55, y: 30000, w: 90, h: 405, dvx: 0, dvy: 15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      }
    ]
  },
  133: { name: "smite",
    pic: 39, state: 18, wait: 0, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      },
      {
        kind: 0, x: 55, y: 30000, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      }
    ]
  },
  134: { name: "smite",
    pic: 40, state: 18, wait: 0, next: 135, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      },
      {
        kind: 0, x: 55, y: 30000, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      }
    ]
  },
  135: { name: "smite",
    pic: 39, state: 18, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 404, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 55, y: 0, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      },
      {
        kind: 0, x: 55, y: 30000, w: 90, h: 405, dvx: 0, dvy: -15, fall: 70, vrest: 30, bdefend: 100, injury: 120, zwidth: 37, effect: 1
      }
    ]
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }
});