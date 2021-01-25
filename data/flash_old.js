define({
  bmp: {
    file: [
      {
        "file(0-13)": "sprite/flash.png", w: 414, h: 193, row: 2, col: 7
      },
      {
        "file(14)": "sprite/sharingan1_b.png", w: 880, h: 569, row: 1, col: 1
      },
      {
        "file(15)": "sprite/sharingan2_b.png", w: 880, h: 569, row: 1, col: 1
      },
      {
        "file(16)": "sprite/sharingan3_b.png", w: 880, h: 569, row: 1, col: 1
      },
      {
        "file(17)": "sprite/sharingan4_b.png", w: 880, h: 569, row: 1, col: 1
      },
      {
        "file(18)": "sprite/red.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(19)": "sprite/black.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(20)": "sprite/gray.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(21-23)": "sprite/lee_slash.png", w: 313, h: 37, row: 1, col: 3
      },
      {
        "file(24-36)": "sprite/lee_punches.png", w: 51, h: 38, row: 3, col: 5
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3005, wait: 0, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 50, hit_d: 15, hit_j: 0,
    sound: "1/017"
  },
  1: { name: "flying",
    pic: 1, state: 3005, wait: 0, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 50, hit_d: 15, hit_j: 0,
    sound: "1/014"
  },
  2: { name: "flying",
    pic: 2, state: 3005, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 50, hit_d: 15, hit_j: 0,
    sound: "1/017"
  },
  3: { name: "flying",
    pic: 3, state: 3005, wait: 0, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 85, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  4: { name: "flying",
    pic: 4, state: 3005, wait: 0, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 195, y: 135, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  5: { name: "flying",
    pic: 5, state: 3005, wait: 0, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 235, y: 105, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  6: { name: "flying",
    pic: 6, state: 3005, wait: 0, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 135, y: 145, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  7: { name: "flying",
    pic: 7, state: 3005, wait: 0, next: 8, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 175, y: 105, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  8: { name: "flying",
    pic: 8, state: 3005, wait: 0, next: 9, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  9: { name: "flying",
    pic: 9, state: 3005, wait: 0, next: 10, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 285, y: 145, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  10: { name: "flying",
    pic: 10, state: 3005, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  11: { name: "flying",
    pic: 11, state: 3005, wait: 0, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 75, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  12: { name: "flying",
    pic: 12, state: 3005, wait: 0, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  13: { name: "flying",
    pic: 13, state: 3005, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 195, y: 145, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  15: { name: "flying",
    pic: 6, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 207, centery: 193, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    opoint: {
      kind: 1, x: 200, y: 130, action: 50, dvx: 0, dvy: 0, oid: 209, facing: 0
    }
  },
  45: { name: "sharingan_black",
    pic: 14, state: 9997, wait: 2, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 440, centery: 482, hit_a: 0, hit_d: 0, hit_j: 1
  },
  46: { name: "sharingan_black",
    pic: 15, state: 9997, wait: 2, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 440, centery: 482, hit_a: 0, hit_d: 0, hit_j: 1
  },
  47: { name: "sharingan_black",
    pic: 16, state: 9997, wait: 2, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 440, centery: 482, hit_a: 0, hit_d: 0, hit_j: 1
  },
  48: { name: "sharingan_black",
    pic: 17, state: 9997, wait: 2, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 440, centery: 482, hit_a: 8, hit_d: 49, hit_j: 1
  },
  49: { name: "disapear",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 1, dvy: 0, dvz: 0, centerx: 440, centery: 452, hit_a: 0, hit_d: 0, hit_j: 1
  },
  50: { name: "sharingan_red",
    pic: 18, state: 9997, wait: 300, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  54: { name: "disapear",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 1, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  55: { name: "black",
    pic: 19, state: 9997, wait: 25, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  56: { name: "black2",
    pic: 19, state: 9997, wait: 60, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  57: { name: "black",
    pic: 19, state: 9997, wait: 20, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 100
  },
  60: { name: "gray",
    pic: 20, state: 9997, wait: 110, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  65: { name: "black2",
    pic: 19, state: 9997, wait: 3, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 54
    }
  },
  70: { name: "gray",
    pic: 20, state: 9997, wait: 45, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  71: { name: "black",
    pic: 19, state: 9997, wait: 185, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 100
  },
  72: { name: "gray",
    pic: 20, state: 9997, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1
  },
  75: { name: "gray",
    pic: 20, state: 9997, wait: 10, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1,
    itr: {
      kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 77
    }
  },
  76: { name: "gray",
    pic: 20, state: 9997, wait: 10, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 1,
    itr: {
      kind: 8, x: -9999, y: -9848643599945, w: 999999, h: 99999, zwidth: 9999, dvx: 77
    }
  },
  77: { name: "gray",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 700, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "leeslahs",
    pic: 21, state: 3005, wait: 1, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "leeslahs",
    pic: 22, state: 3005, wait: 1, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "leeslahs",
    pic: 23, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: -25, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "leepunches",
    pic: 999, state: 3005, wait: 2, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "leepunches",
    pic: 999, state: 3005, wait: 5, next: 1000, dvx: 45, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 880, x: 0, y: 80000, w: 79, h: 62, dvy: 11111, dvx: 83, respond: 2
    }
  },
  83: { name: "leepunches",
    pic: 999, state: 3005, wait: 11, next: -84, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 880, x: 0, y: 80000, w: 79, h: 62, dvy: 1111, respond: 2
      },
      {
        kind: 20, x: 21, y: 80000, w: 43, h: 62, fall: 0, dvx: 0, dvy: 0, bdefend: 100, vrest: 1, effect: 7
      }
    ]
  },
  84: { name: "leepunches",
    pic: 24, state: 3005, wait: 1, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 4, w: 31, h: 23, dvx: 0, fall: 20, vrest: 4, bdefend: 100, injury: 70
    }
  },
  85: { name: "leepunches",
    pic: 25, state: 3005, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "leepunches",
    pic: 26, state: 3005, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "leepunches",
    pic: 27, state: 3005, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 2, w: 23, h: 24, dvx: 0, fall: 40, vrest: 4, bdefend: 100, injury: 40
    }
  },
  88: { name: "leepunches",
    pic: 28, state: 3005, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "leepunches",
    pic: 29, state: 3005, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "leepunches",
    pic: 30, state: 3005, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 27, y: 0, w: 22, h: 22, dvx: 0, fall: 10, vrest: 4, bdefend: 100, injury: 40
    }
  },
  91: { name: "leepunches",
    pic: 31, state: 3005, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "leepunches",
    pic: 32, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "leedust",
    pic: 33, state: 3005, wait: 1, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  94: { name: "leedust",
    pic: 34, state: 3005, wait: 1, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "leedust",
    pic: 35, state: 3005, wait: 1, next: 96, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "leedust",
    pic: 36, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});