define({
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/sakura_ball.png", w: 81, h: 82, row: 8, col: 5
      },
      {
        "file(40-45)": "sprite/kami.png", w: 230, h: 230, row: 3, col: 2
      },
      {
        "file(46-100)": "sprite/evil.png", w: 115, h: 80, row: 7, col: 6
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    bdy: {
      kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
    },
    itr: {
      kind: 8, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 9
    },
    opoint: {
      kind: 1, x: 41, y: 41, action: 36, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 3, next: 2, dvx: 0, dvy: 0, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    bdy: {
      kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
    },
    itr: {
      kind: 8, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 9
    },
    opoint: {
      kind: 1, x: 41, y: 41, action: 36, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 3, next: 999, dvx: 0, dvy: 0, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    bdy: {
      kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
    },
    itr: {
      kind: 8, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 9
    },
    opoint: {
      kind: 1, x: 41, y: 41, action: 36, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  3: { name: "flying",
    pic: 999, state: 18, wait: 3, next: 1000, dvx: 0, dvy: 0, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  4: { name: "flying",
    pic: 24, state: 3005, wait: 1, next: 5, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "flying",
    pic: 25, state: 3005, wait: 1, next: 6, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "flying",
    pic: 26, state: 3005, wait: 1, next: 7, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying",
    pic: 27, state: 3005, wait: 1, next: 8, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "flying",
    pic: 28, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "dis",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 0, next: 21, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078"
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 0, next: 22, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "mini ex",
    pic: 32, state: 3002, wait: 0, next: 24, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  24: { name: "mini ex",
    pic: 33, state: 3002, wait: 0, next: 25, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "mini ex",
    pic: 34, state: 3002, wait: 0, next: 26, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  26: { name: "mini ex",
    pic: 35, state: 3002, wait: 0, next: 27, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "mini ex",
    pic: 36, state: 3002, wait: 0, next: 28, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  28: { name: "mini ex",
    pic: 37, state: 3002, wait: 0, next: 29, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  29: { name: "mini ex",
    pic: 38, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "hiting",
    pic: 40, state: 18, wait: 2, next: 31, dvx: 550, dvy: 550, dvz: 550, centerx: 111, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078",
    itr: [
      {
        kind: 15, x: 0, y: 0, w: 230, h: 230, zwidth: 20, vrest: 3, effect: 5
      },
      {
        kind: 0, x: 32, y: 33, w: 160, h: 195, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 4
      }
    ]
  },
  31: { name: "hiting",
    pic: 41, state: 18, wait: 1, next: 32, dvx: 550, dvy: 0, centerx: 111, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 0, y: 0, w: 230, h: 230, zwidth: 25, vrest: 3, effect: 5
      },
      {
        kind: 0, x: 32, y: 33, w: 160, h: 195, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 4
      }
    ],
    opoint: {
      kind: 1, x: 111, y: 111, action: 35, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  32: { name: "hiting",
    pic: 4, state: 18, wait: 2, next: 33, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 0, y: 0, w: 230, h: 230, zwidth: 25, vrest: 3, effect: 5
      },
      {
        kind: 0, x: 32, y: 33, w: 160, h: 178, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 4
      }
    ]
  },
  33: { name: "hiting",
    pic: 5, state: 3005, wait: 2, next: 34, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 33, w: 160, h: 178, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 5
    }
  },
  34: { name: "hiting",
    pic: 6, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "hiting",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -80, y: -80, w: 160, h: 160, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 9999
    }
  },
  36: { name: "kak_in",
    pic: 7, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -922848643544945, w: 99999, h: 9999, zwidth: 9999, injury: 7, fall: -1, arest: 20, effect: 5
    }
  },
  37: { name: "kak_in",
    pic: 7, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -922848643544945, w: 99999, h: 9999, zwidth: 9999, injury: 10, fall: 1, arest: 20, effect: 5
    }
  },
  40: { name: "stars",
    pic: 16, state: 3002, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049"
  },
  41: { name: "stars",
    pic: 17, state: 3002, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "stars",
    pic: 18, state: 3002, wait: 1, next: 43, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "stars",
    pic: 19, state: 3002, wait: 1, next: 44, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "stars",
    pic: 20, state: 3002, wait: 1, next: 45, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "stars",
    pic: 21, state: 3002, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "stars",
    pic: 22, state: 3002, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "stars",
    pic: 999, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "chidori",
    pic: 8, state: 3005, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  51: { name: "chidori",
    pic: 9, state: 3005, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  52: { name: "chidori",
    pic: 10, state: 3005, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  53: { name: "chidori",
    pic: 11, state: 3005, wait: 0, next: 54, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  54: { name: "chidori",
    pic: 12, state: 3005, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  55: { name: "chidori",
    pic: 13, state: 3005, wait: 0, next: 56, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  56: { name: "chidori",
    pic: 14, state: 3005, wait: 0, next: 57, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  57: { name: "chidori",
    pic: 15, state: 3005, wait: 0, next: 58, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  58: { name: "chidori",
    pic: 23, state: 3005, wait: 0, next: 59, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  59: { name: "chidori",
    pic: 14, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 9, hit_d: 55, hit_j: 0
  },
  60: { name: "flying",
    pic: 4, state: 400, wait: 1, next: 61, dvx: 100, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 39, y: 16, w: 35, h: 265,
      catchingact: [60, 60], caughtact: [399, 399]
    }
  },
  61: { name: "flying",
    pic: 5, state: 3005, wait: 1, next: 62, dvx: 100, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 39, y: 16, w: 35, h: 265,
      catchingact: [60, 60], caughtact: [399, 399]
    }
  },
  62: { name: "flying",
    pic: 6, state: 3005, wait: 0, next: 63, dvx: 100, dvy: 0, centerx: 40, centery: 79, hit_d: 0, hit_j: 0,
    sound: "1/078",
    itr: {
      kind: 3, x: 39, y: 16, w: 35, h: 265,
      catchingact: [60, 60], caughtact: [399, 399]
    }
  },
  63: { name: "flying",
    pic: 7, state: 400, wait: 1, next: 60, dvx: 100, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 39, y: 16, w: 35, h: 265,
      catchingact: [60, 60], caughtact: [399, 399]
    }
  },
  70: { name: "healball",
    pic: 16, state: 3002, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 100, h: 34, dvx: 40, injury: 100
    }
  },
  71: { name: "healball",
    pic: 17, state: 3002, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 100, h: 34, dvx: 40, injury: 100
    }
  },
  72: { name: "healball",
    pic: 18, state: 3002, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 100, h: 34, dvx: 40, injury: 100
    }
  },
  73: { name: "healball",
    pic: 19, state: 3002, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 100, h: 34, dvx: 40, injury: 100
    }
  },
  74: { name: "healball",
    pic: 21, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 100, h: 34, dvx: 40, injury: 100
    }
  },
  80: { name: "hiting",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "hidan",
    pic: 46, state: 15, wait: 1, next: 86, dvx: 550, dvy: 550, dvz: 550, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  86: { name: "hidan",
    pic: 47, state: 15, wait: 1, next: 87, dvx: 550, dvy: 550, dvz: 550, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 80, action: 90, dvx: 0, dvy: 0, oid: 200, facing: 30
    },
    itr: {
      kind: 0, x: 5, y: 45, w: 103, h: 41, dvx: 10, dvy: -25, fall: 70, vrest: 20, bdefend: 100, injury: 55, effect: 0
    }
  },
  87: { name: "hidan",
    pic: 47, state: 15, wait: 0, next: 88, dvx: 550, dvy: 550, dvz: 550, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 80, action: 90, dvx: 0, dvy: 0, oid: 200, facing: 31
    },
    itr: {
      kind: 0, x: 5, y: 45, w: 103, h: 41, dvx: 10, dvy: -25, fall: 70, vrest: 20, bdefend: 100, injury: 55, effect: 0
    }
  },
  88: { name: "hidan",
    pic: 48, state: 15, wait: 1, next: 89, dvx: 550, dvy: 550, dvz: 550, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "hidan",
    pic: 49, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "floor",
    pic: 50, state: 3005, wait: 2, next: 91, dvx: 30, dvy: 550, dvz: 0, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    itr: {
      kind: 0, x: 23, y: 52, w: 77, h: 28, dvx: 5, dvy: -10, fall: 70, arest: 20, bdefend: 90, injury: 35, effect: 1
    }
  },
  91: { name: "floor",
    pic: 51, state: 3005, wait: 2, next: 92, dvx: 30, dvy: 550, dvz: 0, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 52, w: 77, h: 28, dvx: 5, dvy: -10, fall: 70, arest: 20, bdefend: 90, injury: 35, effect: 1
    }
  },
  92: { name: "floor",
    pic: 52, state: 3005, wait: 2, next: 1000, dvx: 30, dvy: 550, dvz: 0, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 52, w: 77, h: 28, dvx: 5, dvy: -10, fall: 70, arest: 20, bdefend: 90, injury: 35, effect: 1
    }
  },
  100: { name: "animation",
    pic: 40, state: 3003, wait: 1, next: 101, dvx: 0, dvy: 0, centerx: 111, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 0, y: 0, w: 230, h: 230, zwidth: 20, vrest: 3, effect: 5
      },
      {
        kind: 0, x: 32, y: 33, w: 160, h: 195, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 4
      }
    ]
  },
  101: { name: "animation",
    pic: 41, state: 3003, wait: 1, next: 102, dvx: 0, dvy: 0, centerx: 111, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 0, y: 0, w: 230, h: 230, zwidth: 20, vrest: 3, effect: 5
      },
      {
        kind: 0, x: 32, y: 33, w: 160, h: 195, zwidth: 25, vrest: 8, injury: 0, fall: -1, bdefend: 100, effect: 4
      }
    ]
  },
  102: { name: "aniamtion",
    pic: 4, state: 3003, wait: 1, next: 103, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "aniamtion",
    pic: 5, state: 3003, wait: 1, next: 104, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "aniamtion",
    pic: 6, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});