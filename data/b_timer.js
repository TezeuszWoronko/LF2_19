define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/sys/timer.png", w: 79, h: 79, row: 10, col: 2
      },
      {
        "file(20-99)": "sprite/timer2.png", w: 79, h: 79, row: 10, col: 2
      }
    ],
    weapon_hit_sound: "1/020"
  },
  frame: {
  0: { name: "timer",
    pic: 999, state: 3005, wait: 0, next: 2, dvx: 0, dvy: 1, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 1
  },
  2: { name: "timer",
    pic: 1, state: 9997, wait: 15, next: 3, dvx: 0, dvy: 550, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "timer",
    pic: 1, state: 9997, wait: 15, next: 4, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  4: { name: "timer",
    pic: 2, state: 9997, wait: 15, next: 5, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  5: { name: "timer",
    pic: 3, state: 9997, wait: 15, next: 6, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  6: { name: "timer",
    pic: 4, state: 9997, wait: 15, next: 7, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  7: { name: "timer",
    pic: 5, state: 9997, wait: 15, next: 8, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  8: { name: "timer",
    pic: 6, state: 9997, wait: 15, next: 9, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  9: { name: "timer",
    pic: 7, state: 9997, wait: 15, next: 10, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  10: { name: "timer",
    pic: 8, state: 9997, wait: 15, next: 11, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  11: { name: "timer",
    pic: 9, state: 9997, wait: 15, next: 12, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  12: { name: "timer",
    pic: 10, state: 9997, wait: 15, next: 13, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  13: { name: "timer",
    pic: 11, state: 9997, wait: 15, next: 14, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  14: { name: "timer",
    pic: 12, state: 9997, wait: 15, next: 15, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  15: { name: "timer",
    pic: 13, state: 9997, wait: 15, next: 16, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  16: { name: "timer",
    pic: 14, state: 9997, wait: 15, next: 17, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  17: { name: "timer",
    pic: 15, state: 9997, wait: 15, next: 19, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  18: { name: "clone stop",
    pic: 999, state: 18, wait: 15, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  19: { name: "timer",
    pic: 16, state: 9997, wait: 15, next: 20, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  20: { name: "timer",
    pic: 17, state: 9997, wait: 15, next: 21, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  21: { name: "timer",
    pic: 18, state: 9997, wait: 15, next: 22, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  22: { name: "timer",
    pic: 19, state: 9997, wait: 0, next: 23, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 4444, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  23: { name: "timer over",
    pic: 999, state: 9997, wait: 15, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 670, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 6666, action: 24, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  24: { name: "timer over",
    pic: 999, state: 18, wait: 5, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  25: { name: "timer",
    pic: 999, state: 3005, wait: 0, next: 26, dvx: 0, dvy: 1, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 1
  },
  26: { name: "timer",
    pic: 1, state: 9997, wait: 10, next: 27, dvx: 0, dvy: 550, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "timer",
    pic: 1, state: 9997, wait: 10, next: 28, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  28: { name: "timer",
    pic: 2, state: 9997, wait: 10, next: 29, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  29: { name: "timer",
    pic: 3, state: 9997, wait: 10, next: 30, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  30: { name: "timer",
    pic: 4, state: 9997, wait: 10, next: 31, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  31: { name: "timer",
    pic: 5, state: 9997, wait: 10, next: 32, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  32: { name: "timer",
    pic: 6, state: 9997, wait: 10, next: 33, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  33: { name: "timer",
    pic: 7, state: 9997, wait: 10, next: 34, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  34: { name: "timer",
    pic: 8, state: 9997, wait: 10, next: 35, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  35: { name: "timer",
    pic: 9, state: 9997, wait: 10, next: 36, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  36: { name: "timer",
    pic: 10, state: 9997, wait: 10, next: 37, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  37: { name: "timer",
    pic: 11, state: 9997, wait: 10, next: 38, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  38: { name: "timer",
    pic: 12, state: 9997, wait: 10, next: 39, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  39: { name: "timer",
    pic: 13, state: 9997, wait: 10, next: 40, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  40: { name: "timer",
    pic: 14, state: 9997, wait: 10, next: 41, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  41: { name: "timer",
    pic: 15, state: 9997, wait: 10, next: 42, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  42: { name: "timer",
    pic: 16, state: 9997, wait: 10, next: 43, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  43: { name: "timer",
    pic: 17, state: 9997, wait: 10, next: 44, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  44: { name: "timer",
    pic: 18, state: 9997, wait: 10, next: 45, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  45: { name: "timer",
    pic: 19, state: 9997, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 88888, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  46: { name: "timer over",
    pic: 999, state: 9997, wait: 15, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 670, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 89888, action: 24, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  50: { name: "timer",
    pic: 999, state: 3005, wait: 0, next: 51, dvx: 0, dvy: 1, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 1
  },
  51: { name: "timer",
    pic: 1, state: 9997, wait: 10, next: 52, dvx: 0, dvy: 550, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "timer",
    pic: 1, state: 9997, wait: 10, next: 53, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  53: { name: "timer",
    pic: 2, state: 9997, wait: 10, next: 54, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  54: { name: "timer",
    pic: 3, state: 9997, wait: 10, next: 55, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  55: { name: "timer",
    pic: 4, state: 9997, wait: 10, next: 56, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  56: { name: "timer",
    pic: 5, state: 9997, wait: 10, next: 57, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  57: { name: "timer",
    pic: 6, state: 9997, wait: 10, next: 58, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  58: { name: "timer",
    pic: 7, state: 9997, wait: 10, next: 59, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  59: { name: "timer",
    pic: 8, state: 9997, wait: 10, next: 60, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  60: { name: "timer",
    pic: 9, state: 9997, wait: 10, next: 61, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  61: { name: "timer",
    pic: 10, state: 9997, wait: 10, next: 62, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  62: { name: "timer",
    pic: 11, state: 9997, wait: 10, next: 63, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  63: { name: "timer",
    pic: 12, state: 9997, wait: 10, next: 64, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  64: { name: "timer",
    pic: 13, state: 9997, wait: 10, next: 65, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  65: { name: "timer",
    pic: 14, state: 9997, wait: 10, next: 66, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  66: { name: "timer",
    pic: 15, state: 9997, wait: 10, next: 67, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  67: { name: "timer",
    pic: 16, state: 9997, wait: 10, next: 68, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  68: { name: "timer",
    pic: 17, state: 9997, wait: 10, next: 69, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  69: { name: "timer",
    pic: 18, state: 9997, wait: 10, next: 70, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  70: { name: "timer",
    pic: 19, state: 9997, wait: 0, next: 71, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 18, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  71: { name: "timer over",
    pic: 999, state: 9997, wait: 15, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 670, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 999999, action: 24, dvx: 0, dvy: 0, oid: 517, facing: 0
    }
  },
  72: { name: "timer2",
    pic: 20, state: 3005, wait: 11, next: 73, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "timer2",
    pic: 21, state: 3005, wait: 11, next: 74, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "timer2",
    pic: 22, state: 3005, wait: 11, next: 75, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "timer2",
    pic: 23, state: 3005, wait: 11, next: 76, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "timer2",
    pic: 24, state: 3005, wait: 11, next: 77, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "timer2",
    pic: 25, state: 3005, wait: 11, next: 78, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "timer2",
    pic: 26, state: 3005, wait: 11, next: 79, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "timer2",
    pic: 27, state: 3005, wait: 11, next: 80, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "timer2",
    pic: 28, state: 3005, wait: 11, next: 81, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "timer2",
    pic: 29, state: 3005, wait: 11, next: 82, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "timer2",
    pic: 30, state: 3005, wait: 11, next: 83, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "timer2",
    pic: 31, state: 3005, wait: 11, next: 84, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "timer2",
    pic: 32, state: 3005, wait: 11, next: 85, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "timer2",
    pic: 33, state: 3005, wait: 11, next: 86, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "timer2",
    pic: 34, state: 3005, wait: 11, next: 87, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "timer2",
    pic: 35, state: 3005, wait: 11, next: 88, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "timer2",
    pic: 36, state: 3005, wait: 11, next: 89, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "timer2",
    pic: 37, state: 3005, wait: 12, next: 90, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "timer2",
    pic: 38, state: 3005, wait: 5, next: 72, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "timer2",
    pic: 20, state: 3005, wait: 10, next: 73, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});