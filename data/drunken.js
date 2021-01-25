define({
  bmp: {
    file: [
      {
        "file(0-35)": "sprite/drunken.png", w: 79, h: 79, row: 4, col: 9
      },
      {
        "file(36)": "sprite/genjutsu1.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(37)": "sprite/white.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(38-61)": "sprite/slashes.png", w: 224, h: 224, row: 4, col: 6
      },
      {
        "file(62)": "sprite/genjutsu2.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(63)": "sprite/genjutsu3.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(64)": "sprite/genjutsu4.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(65)": "sprite/genjutsu5.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(66)": "sprite/meteor.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(67)": "sprite/meteor2.png", w: 500, h: 500, row: 1, col: 1
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 3000, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -25, y: 18, w: 120, h: 100
    }
  },
  1: { name: "zZz",
    pic: 2, state: 3005, wait: 10, next: 2, dvx: -1, dvy: -1, centerx: 2, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "zZz",
    pic: 3, state: 3005, wait: 10, next: 3, dvx: 1, dvy: 0, centerx: 4, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "zZz",
    pic: 7, state: 3005, wait: 10, next: 1000, dvx: -1, dvy: 0, centerx: 6, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "flyings",
    pic: 4, state: 3006, wait: 0, next: 7, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 30, dvy: -10, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 135, y: 109, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  7: { name: "flyings",
    pic: 5, state: 3006, wait: 0, next: 8, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 30, dvy: -10, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 39, y: 39, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  8: { name: "flyings",
    pic: 6, state: 3006, wait: 0, next: 9, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 30, dvy: -10, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 135, y: 109, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  9: { name: "flyings",
    pic: 5, state: 3006, wait: 0, next: 6, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 30, dvy: -10, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 39, y: 39, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  10: { name: "hiting",
    pic: 0, state: 3001, wait: 2, next: 1000, dvx: 27, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 1, state: 3001, wait: 2, next: 1000, dvx: 27, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3001, wait: 2, next: 1000, dvx: 27, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "kirby",
    pic: 8, state: 3006, wait: 10, next: 1000, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 30, dvy: -10, fall: 100, vrest: 25, bdefend: 100, injury: 30, effect: 1
    }
  },
  51: { name: "rasengan",
    pic: 9, state: 3005, wait: 2, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 19, h: 19, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 0
    }
  },
  52: { name: "rasengan",
    pic: 10, state: 3005, wait: 3, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 19, h: 19, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 0
    }
  },
  53: { name: "rasengan",
    pic: 11, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 19, h: 19, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 0
    }
  },
  54: { name: "chidori_charge",
    pic: 12, state: 3005, wait: 1, next: 55, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  55: { name: "chidori_charge",
    pic: 13, state: 3005, wait: 0, next: 56, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 5, action: 50, dvx: 0, dvy: 0, oid: 200, facing: 0
    },
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  56: { name: "chidori_charge",
    pic: 14, state: 3005, wait: 1, next: 57, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  57: { name: "chidori_charge",
    pic: 15, state: 3005, wait: 0, next: 58, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  58: { name: "chidori_charge",
    pic: 16, state: 3005, wait: 1, next: 59, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  59: { name: "chidori_charge",
    pic: 17, state: 3005, wait: 0, next: 60, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  60: { name: "chidori_charge",
    pic: 18, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 20, w: 39, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  61: { name: "chidori_speed",
    pic: 19, state: 3005, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  62: { name: "chidori_speed",
    pic: 20, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: 100, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  63: { name: "chidori",
    pic: 21, state: 3005, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  64: { name: "chidori",
    pic: 22, state: 3005, wait: 1, next: 65, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  65: { name: "chidori",
    pic: 23, state: 3005, wait: 1, next: 66, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  66: { name: "chidori",
    pic: 24, state: 3005, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  67: { name: "chidori",
    pic: 25, state: 3005, wait: 1, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  68: { name: "chidori",
    pic: 26, state: 3005, wait: 1, next: 69, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  69: { name: "chidori",
    pic: 27, state: 3005, wait: 1, next: 70, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  70: { name: "chidori",
    pic: 28, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  71: { name: "chidori",
    pic: 29, state: 3005, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  72: { name: "chidori",
    pic: 30, state: 3005, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 109, h: 39, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 10, effect: 1
    }
  },
  73: { name: "chidori",
    pic: 31, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "star",
    pic: 32, state: 3005, wait: 1, next: 75, dvx: 1, dvy: -2, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "star",
    pic: 33, state: 3005, wait: 1, next: 76, dvx: 2, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "star",
    pic: 34, state: 3005, wait: 1, next: 82, dvx: 3, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "sasori",
    pic: 999, state: 18, wait: 1, next: 78, dvx: 0, dvy: 550, dvz: 550, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 15, y: 70000, w: 100, h: 100, arest: 50, effect: 6291
      },
      {
        kind: 0, x: 15, y: 90000, w: 100, h: 100, arest: 50, effect: 6245
      },
      {
        kind: 0, x: 15, y: 100000, w: 100, h: 100, arest: 50, effect: 6255
      }
    ]
  },
  78: { name: "end",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 15, y: 110000, w: 100, h: 100, arest: 50, effect: 6346
      },
      {
        kind: 0, x: 15, y: 120000, w: 100, h: 100, arest: 50, effect: 6365
      },
      {
        kind: 0, x: 15, y: 130000, w: 100, h: 100, arest: 50, effect: 6370
      },
      {
        kind: 0, x: 15, y: 140000, w: 100, h: 100, arest: 50, effect: 6155
      }
    ]
  },
  82: { name: "star",
    pic: 35, state: 3005, wait: 1, next: 83, dvx: 4, dvy: -1, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "star",
    pic: 32, state: 3005, wait: 1, next: 84, dvx: 4, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "star",
    pic: 33, state: 3005, wait: 1, next: 85, dvx: 3, dvy: 1, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "star",
    pic: 34, state: 3005, wait: 1, next: 86, dvx: 2, dvy: 2, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "star",
    pic: 35, state: 3005, wait: 1, next: 1000, dvx: 1, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "kirby",
    pic: 999, state: 3005, wait: 5, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 39, w: 1, h: 39, dvx: 15, dvy: -2, fall: 70, vrest: 15, bdefend: 1, injury: 10, effect: 4
    }
  },
  88: { name: "ground_line",
    pic: 999, state: 3006, wait: 0, next: 89, dvx: 50, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 70, action: 0, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  89: { name: "ground_line",
    pic: 999, state: 3006, wait: 0, next: 88, dvx: 50, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 70, action: 0, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  90: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 92, dvx: 0, dvy: 0, oid: 435, facing: 1
    }
  },
  92: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 100, dvx: 0, dvy: 0, oid: 435, facing: 1
    }
  },
  94: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 96, dvx: 0, dvy: 0, oid: 435, facing: 1
    }
  },
  95: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 98, dvx: 0, dvy: 0, oid: 435, facing: 1
    }
  },
  96: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  97: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 101, dvx: 0, dvy: 0, oid: 435, facing: 1
    }
  },
  98: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  99: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 102, dvx: 0, dvy: 0, oid: 435, facing: 1
    }
  },
  100: { name: "sandstorm",
    pic: 100, state: 3005, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "sandstorm (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 190, dvx: 0, dvy: 0, oid: 462, facing: 0
    }
  },
  110: { name: "genjutsu",
    pic: 999, state: 3005, wait: 55, next: 1000, dvx: 50, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 100, y: 0, w: 300, h: 500, dvx: 111
    }
  },
  111: { name: "genjutsu",
    pic: 37, state: 3005, wait: 1, next: 112, dvx: 550, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 48
  },
  112: { name: "genjutsu",
    pic: 36, state: 3003, wait: 1, next: 113, dvx: 550, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 4, effect: 1000
    },
    opoint: {
      kind: 1, x: 39, y: 600, action: 56, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  113: { name: "genjutsu",
    pic: 36, state: 3003, wait: 2, next: 129, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 15, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 4, effect: 5
    }
  },
  114: { name: "genjutsu",
    pic: 36, state: 3003, wait: 1, next: 136, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 4, effect: 5
    }
  },
  115: { name: "genjutsu",
    pic: 37, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "spark",
    pic: 38, state: 3005, wait: 0, next: 117, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "spark",
    pic: 39, state: 3005, wait: 0, next: 118, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "spark",
    pic: 40, state: 3005, wait: 0, next: 119, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "spark",
    pic: 41, state: 3005, wait: 0, next: 120, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "spark",
    pic: 42, state: 3005, wait: 0, next: 121, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "spark",
    pic: 43, state: 3005, wait: 0, next: 122, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "spark",
    pic: 44, state: 3005, wait: 0, next: 123, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "spark",
    pic: 45, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "slash3",
    pic: 46, state: 3005, wait: 1, next: 125, dvx: 7, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "slash3",
    pic: 47, state: 3005, wait: 3, next: 126, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "slash3",
    pic: 48, state: 3005, wait: 1, next: 127, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "slash3",
    pic: 49, state: 3005, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "slash3",
    pic: 50, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 112, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  129: { name: "genjutsu",
    pic: 62, state: 3003, wait: 1, next: 130, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  130: { name: "genjutsu",
    pic: 65, state: 3003, wait: 1, next: 131, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  131: { name: "genjutsu",
    pic: 64, state: 3003, wait: 1, next: 132, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  132: { name: "genjutsu",
    pic: 63, state: 3003, wait: 2, next: 133, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 15, hit_d: 114, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  133: { name: "genjutsu",
    pic: 64, state: 3003, wait: 1, next: 134, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  134: { name: "genjutsu",
    pic: 65, state: 3003, wait: 1, next: 135, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  135: { name: "genjutsu",
    pic: 62, state: 3003, wait: 1, next: 114, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  136: { name: "genjutsu",
    pic: 36, state: 3003, wait: 5, next: 115, dvx: 0, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 400, dvx: 20, dvy: -5, fall: 5000, vrest: 15, bdefend: 100, injury: 4, effect: 5
    }
  },
  140: { name: "flash",
    pic: 37, state: 9997, wait: 5, next: 1000, dvx: 550, dvy: 550, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 48
  },
  141: { name: "white",
    pic: 37, state: 9997, wait: 80, next: 1000, dvx: 550, dvy: 550, centerx: 2000, centery: 600, hit_a: 0, hit_d: 0, hit_j: 100
  },
  161: { name: "genjutsu",
    pic: 37, state: 3005, wait: 1, next: 162, dvx: 550, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 48
  },
  162: { name: "genjutsu",
    pic: 36, state: 3003, wait: 1, next: 163, dvx: 550, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 7, effect: 1000
    },
    opoint: {
      kind: 1, x: 39, y: 600, action: 56, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  163: { name: "genjutsu",
    pic: 36, state: 3003, wait: 2, next: 169, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 15, hit_d: 164, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  164: { name: "genjutsu",
    pic: 36, state: 3003, wait: 1, next: 166, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  165: { name: "genjutsu",
    pic: 37, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "genjutsu",
    pic: 36, state: 3003, wait: 5, next: 165, dvx: 0, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 400, dvx: 20, dvy: -5, fall: 5000, vrest: 15, bdefend: 100, injury: 7, effect: 5
    }
  },
  169: { name: "genjutsu",
    pic: 62, state: 3003, wait: 1, next: 170, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 164, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  170: { name: "genjutsu",
    pic: 65, state: 3003, wait: 1, next: 171, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 164, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  171: { name: "genjutsu",
    pic: 64, state: 3003, wait: 1, next: 172, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 164, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  172: { name: "genjutsu",
    pic: 63, state: 3003, wait: 2, next: 173, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 15, hit_d: 164, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  173: { name: "genjutsu",
    pic: 64, state: 3003, wait: 1, next: 174, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 164, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  174: { name: "genjutsu",
    pic: 65, state: 3003, wait: 1, next: 175, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 164, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  },
  175: { name: "genjutsu",
    pic: 62, state: 3003, wait: 1, next: 164, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 164, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 7, effect: 5
    }
  }
  }
});