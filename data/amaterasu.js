define({
  bmp: {
    file: [
      {
        "file(0-50)": "sprite/amaterasu.png", w: 110, h: 170, row: 5, col: 10
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 14, state: 18, wait: 2, next: 1, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -999999, y: -77685693330, w: 99999999, h: 9900
    }
  },
  1: { name: "flying",
    pic: 14, state: 18, wait: 2, next: 2, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -999999, y: -77685693330, w: 99999999, h: 9900
    }
  },
  2: { name: "flying",
    pic: 15, state: 18, wait: 2, next: 3, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -999999, y: -77685693330, w: 99999999, h: 9900
    }
  },
  3: { name: "flying",
    pic: 16, state: 18, wait: 2, next: 4, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -999999, y: -77685693330, w: 99999999, h: 9900
    }
  },
  4: { name: "flying",
    pic: 17, state: 18, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -999999, y: -77685693330, w: 99999999, h: 9900
    }
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
    pic: 999, state: 18, wait: 0, next: 31, dvx: 550, dvy: 550, dvz: 550, centerx: 111, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078"
  },
  31: { name: "hiting",
    pic: 999, state: 18, wait: 0, next: 430, dvx: 550, dvy: 0, centerx: 111, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "hiting",
    pic: 999, state: 18, wait: 2, next: 33, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "hiting",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 9, y: 165, action: 80, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  34: { name: "hiting",
    pic: 6, state: 3005, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
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
      kind: 0, x: -9999, y: -922848643544945, w: 99999, h: 9999, zwidth: 9999, injury: 0, fall: -1, arest: 20, effect: 5
    }
  },
  37: { name: "kak_in",
    pic: 7, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -922848643544945, w: 99999, h: 9999, zwidth: 9999, injury: 0, fall: 1, arest: 20, effect: 5
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
      kind: 1, x: 60, y: 80, action: 90, dvx: 0, dvy: 0, oid: 240, facing: 30
    },
    itr: {
      kind: 0, x: 5, y: 45, w: 103, h: 41, dvx: 10, dvy: -25, fall: 70, vrest: 20, bdefend: 100, injury: 55, effect: 0
    }
  },
  87: { name: "hidan",
    pic: 47, state: 15, wait: 0, next: 88, dvx: 550, dvy: 550, dvz: 550, centerx: 57, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 80, action: 90, dvx: 0, dvy: 0, oid: 240, facing: 31
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
  },
  111: { name: "genjutsu",
    pic: 4, state: 3005, wait: 1, next: 112, dvx: 550, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 48
  },
  112: { name: "genjutsu",
    pic: 5, state: 3003, wait: 1, next: 113, dvx: 550, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 4, effect: 1000
    },
    opoint: {
      kind: 1, x: 39, y: 600, action: 56, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  113: { name: "genjutsu",
    pic: 6, state: 3003, wait: 40, next: 129, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 15, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 150, y: 50, w: 150, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 4, effect: 5
    }
  },
  114: { name: "genjutsu",
    pic: 6, state: 3003, wait: 1, next: 136, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 4, effect: 5
    }
  },
  115: { name: "genjutsu",
    pic: 4, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0
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
    pic: 5, state: 3003, wait: 1, next: 130, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  130: { name: "genjutsu",
    pic: 4, state: 3003, wait: 1, next: 131, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  131: { name: "genjutsu",
    pic: 5, state: 3003, wait: 1, next: 132, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  132: { name: "genjutsu",
    pic: 6, state: 3003, wait: 2, next: 133, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 15, hit_d: 114, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  133: { name: "genjutsu",
    pic: 5, state: 3003, wait: 1, next: 134, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  134: { name: "genjutsu",
    pic: 4, state: 3003, wait: 1, next: 135, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  135: { name: "genjutsu",
    pic: 5, state: 3003, wait: 1, next: 114, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 8, hit_d: 114, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 9999, dvx: 0, dvy: 0, fall: 70, vrest: 1, bdefend: 1, injury: 2, effect: 5
    }
  },
  136: { name: "genjutsu",
    pic: 5, state: 3003, wait: 5, next: 115, dvx: 0, dvy: 0, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 100, y: 50, w: 300, h: 400, dvx: 20, dvy: -5, fall: 5000, vrest: 15, bdefend: 100, injury: 4, effect: 5
    }
  },
  410: { name: "amaterasu2",
    pic: 1, state: 3005, wait: 1, next: 411, dvx: 550, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067"
  },
  411: { name: "amaterasu2",
    pic: 2, state: 3003, wait: 1, next: 412, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  412: { name: "amaterasu2",
    pic: 3, state: 3003, wait: 1, next: 413, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  413: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 415, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 25, effect: 5, fall: 10, arest: 50
    }
  },
  414: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 415, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  415: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 416, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  416: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 417, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  417: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 418, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  418: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 419, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  419: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 420, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  420: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 421, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  421: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 422, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  422: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 423, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  423: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 424, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  424: { name: "amaterasu2",
    pic: 10, state: 3003, wait: 2, next: 425, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  425: { name: "amaterasu2",
    pic: 11, state: 3003, wait: 2, next: 426, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  426: { name: "amaterasu2",
    pic: 12, state: 3003, wait: 1, next: 427, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  427: { name: "amaterasu2",
    pic: 13, state: 3003, wait: 1, next: 428, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  428: { name: "amaterasu2",
    pic: 14, state: 3003, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  430: { name: "amaterasu2",
    pic: 1, state: 3005, wait: 1, next: 431, dvx: 550, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067"
  },
  431: { name: "amaterasu2",
    pic: 2, state: 3003, wait: 1, next: 432, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  432: { name: "amaterasu2",
    pic: 3, state: 3003, wait: 1, next: 433, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  433: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 435, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 25, effect: 5, fall: 10, arest: 50
    }
  },
  435: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 436, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 40, effect: 5, fall: 10, arest: 50
    }
  },
  436: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 437, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  437: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 438, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  438: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 439, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  439: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 440, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  440: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 441, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  441: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 442, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  442: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 443, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  443: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 444, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  444: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 445, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  445: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 446, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  446: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 447, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  447: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 448, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  448: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 450, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  450: { name: "amaterasu2",
    pic: 10, state: 3003, wait: 2, next: 451, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  451: { name: "amaterasu2",
    pic: 11, state: 3003, wait: 2, next: 452, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  452: { name: "amaterasu2",
    pic: 12, state: 3003, wait: 1, next: 453, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  453: { name: "amaterasu2",
    pic: 13, state: 3003, wait: 1, next: 454, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  454: { name: "amaterasu2",
    pic: 14, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
    }
  },
  460: { name: "amaterasu2",
    pic: 999, state: 400, wait: 2, next: 461, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  461: { name: "amaterasu2",
    pic: 999, state: 18, wait: 2, next: 462, dvx: 30, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  462: { name: "amaterasu2",
    pic: 41, state: 18, wait: 0, next: 463, dvx: -1, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 165, y: 165, action: 463, dvx: 0, dvy: 0, oid: 241, facing: 0
    }
  },
  463: { name: "amaterasu2",
    pic: 41, state: 18, wait: 2, next: 464, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  464: { name: "amaterasu2",
    pic: 42, state: 18, wait: 2, next: 465, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  465: { name: "amaterasu2",
    pic: 43, state: 18, wait: 2, next: 466, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  466: { name: "amaterasu2",
    pic: 14, state: 18, wait: 2, next: 467, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  467: { name: "amaterasu2",
    pic: 15, state: 18, wait: 2, next: 468, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  468: { name: "amaterasu2",
    pic: 16, state: 18, wait: 2, next: 469, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  469: { name: "amaterasu2",
    pic: 17, state: 18, wait: 2, next: 410, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});