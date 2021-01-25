define({
  bmp: {
    file: [
      {
        "file(0-14)": "sprite/iron_sand.png", w: 130, h: 140, row: 5, col: 3
      },
      {
        "file(15-24)": "sprite/smoke2.png", w: 174, h: 119, row: 5, col: 2
      },
      {
        "file(25-137)": "sprite/timer2.png", w: 79, h: 79, row: 10, col: 2
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 9, state: 3003, wait: 15, next: 1, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -16, y: 15, w: 135, h: 100, dvx: 30, dvy: -3, fall: 100, vrest: 15, bdefend: 100, injury: 75
    }
  },
  1: { name: "flying",
    pic: 9, state: 3003, wait: 15, next: 999, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -16, y: 15, w: 135, h: 100, dvx: 30, dvy: -3, fall: 100, vrest: 15, bdefend: 100, injury: 75
    }
  },
  9: { name: "flying",
    pic: 10, state: 3000, wait: 0, next: 9, dvx: 70, dvy: 0, dvz: 0, centerx: 67, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 60, w: 50, h: 60, dvx: 0, fall: 10, vrest: 15, bdefend: 100, injury: 10
    }
  },
  10: { name: "hitting",
    pic: 20, state: 3002, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  11: { name: "hitting",
    pic: 20, state: 3002, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 160, action: 20, dvx: 0, dvy: 0, oid: 222, facing: 20
    }
  },
  12: { name: "hitting",
    pic: 20, state: 3002, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 160, action: 20, dvx: 0, dvy: 0, oid: 222, facing: 20
    }
  },
  13: { name: "hitting",
    pic: 21, state: 3002, wait: 4, next: 14, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "hitting",
    pic: 22, state: 3002, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 120, y: 90, action: 218, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  15: { name: "hitting",
    pic: 22, state: 3002, wait: 4, next: 16, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 110, action: 218, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  16: { name: "hitting",
    pic: 23, state: 3005, wait: 4, next: 17, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "hitting",
    pic: 24, state: 3005, wait: 4, next: 1000, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hitting",
    pic: 20, state: 3002, wait: 4, next: 21, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  21: { name: "hitting",
    pic: 21, state: 3002, wait: 4, next: 22, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hitting",
    pic: 22, state: 3002, wait: 4, next: 23, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 100, action: 215, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  23: { name: "hitting",
    pic: 23, state: 3002, wait: 4, next: 24, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  24: { name: "hitting",
    pic: 24, state: 3002, wait: 4, next: 1000, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "hit",
    pic: 20, state: 3002, wait: 4, next: 11, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  40: { name: "tail",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 4, state: 3005, wait: 2, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 3, state: 3005, wait: 2, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "start",
    pic: 2, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "start",
    pic: 1, state: 3005, wait: 1, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "start",
    pic: 5, state: 3005, wait: 1, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "start",
    pic: 6, state: 3005, wait: 1, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "start",
    pic: 7, state: 3005, wait: 1, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  58: { name: "start",
    pic: 2, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 70, y: 120, action: 59, dvx: 0, dvy: 0, oid: 222, facing: 0
    }
  },
  59: { name: "start",
    pic: 8, state: 3006, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 70, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 999, state: 3001, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "just_smoke",
    pic: 20, state: 3005, wait: 3, next: 66, dvx: 0, dvy: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  66: { name: "just_smoke",
    pic: 21, state: 3005, wait: 3, next: 67, dvx: 0, dvy: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "just_smoke",
    pic: 22, state: 3005, wait: 3, next: 68, dvx: 0, dvy: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "just_smoke",
    pic: 23, state: 3005, wait: 3, next: 69, dvx: 0, dvy: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "just_smoke",
    pic: 24, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  209: { name: "life transfer2",
    pic: 999, state: 18, wait: 20, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -200, y: 0, w: 400, zwidth: 10, h: 79, fall: 70, dvx: -10, vrest: 100, bdefend: 100, injury: 250, effect: 5
    }
  },
  210: { name: "life transfer",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -200, y: 0, w: 400, zwidth: 10, h: 79, fall: -1, dvx: 0, vrest: 100, bdefend: 10, injury: -150, effect: 5
    }
  },
  211: { name: "life_heal",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -200, y: 7897897890000, w: 400, zwidth: 10, h: 500, dvx: 1000, injury: 150
    }
  },
  212: { name: "life_heal",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -200, y: 7897897890000, w: 400, zwidth: 10, h: 500, dvx: 1000, injury: -10
    }
  },
  213: { name: "zzz",
    pic: 999, state: 18, wait: 2, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -200, y: 55, w: 550, zwidth: 999, h: 70, dvx: 300
    }
  },
  215: { name: "tail",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -200, y: 55, w: 550, zwidth: 999, h: 70, dvx: 217
    }
  },
  217: { name: "tail",
    pic: 11, state: 18, wait: 1, next: 218, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 55, w: 20, h: 70, dvx: 10, dvy: -15, fall: 100, vrest: 15, bdefend: 100, injury: 45, effect: 1
    }
  },
  218: { name: "tail",
    pic: 12, state: 3003, wait: 3, next: 219, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  219: { name: "tail",
    pic: 13, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  220: { name: "timer",
    pic: 25, state: 9997, wait: 0, next: 239, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  221: { name: "timer",
    pic: 26, state: 9997, wait: 15, next: 222, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 79, action: 240, dvx: 0, dvy: 0, oid: 222, facing: 0
    }
  },
  222: { name: "timer",
    pic: 27, state: 9997, wait: 15, next: 223, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  223: { name: "timer",
    pic: 28, state: 9997, wait: 15, next: 224, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  224: { name: "timer",
    pic: 29, state: 9997, wait: 15, next: 225, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  225: { name: "timer",
    pic: 30, state: 9997, wait: 15, next: 226, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  226: { name: "timer",
    pic: 31, state: 9997, wait: 15, next: 227, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  227: { name: "timer",
    pic: 32, state: 9997, wait: 15, next: 228, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  228: { name: "timer",
    pic: 33, state: 9997, wait: 15, next: 229, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  229: { name: "timer",
    pic: 34, state: 9997, wait: 15, next: 230, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  230: { name: "timer",
    pic: 35, state: 9997, wait: 15, next: 231, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  231: { name: "timer",
    pic: 36, state: 9997, wait: 15, next: 232, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  232: { name: "timer",
    pic: 37, state: 9997, wait: 15, next: 233, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  233: { name: "timer",
    pic: 38, state: 9997, wait: 15, next: 234, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  234: { name: "timer",
    pic: 39, state: 9997, wait: 15, next: 235, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  235: { name: "timer",
    pic: 40, state: 9997, wait: 15, next: 236, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  236: { name: "timer",
    pic: 41, state: 9997, wait: 15, next: 237, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  237: { name: "timer",
    pic: 42, state: 9997, wait: 15, next: 238, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "timer",
    pic: 43, state: 9997, wait: 15, next: 1000, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  239: { name: "timer",
    pic: 25, state: 9997, wait: 10, next: 221, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 79, action: 240, dvx: 0, dvy: 0, oid: 222, facing: 0
    }
  },
  240: { name: "timer_hurt",
    pic: 999, state: 18, wait: 300, next: 1000, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -87667200, w: 99999, h: 600, zwidth: 9999, dvx: 0, dvy: 0, fall: 1, vrest: 8, bdefend: 100, injury: 0, effect: 5
    }
  },
  245: { name: "hitting",
    pic: 999, state: 3005, wait: 100, next: 246, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  246: { name: "hitting",
    pic: 999, state: 400, wait: 3, next: 245, dvx: 0, dvy: 0, centerx: 87, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 140, action: 10, dvx: 0, dvy: 0, oid: 222
    }
  },
  250: { name: "timer_hurt",
    pic: 999, state: 18, wait: 5, next: 250, dvx: 0, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -88888888888880000, w: 99999, h: 600, zwidth: 9999, arest: 50, effect: 6118
    }
  },
  300: { name: "tail",
    pic: 999, state: 18, wait: 0, next: 301, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  301: { name: "tail",
    pic: 999, state: 18, wait: 0, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 175, action: 350, dvx: 0, dvy: 0, oid: 77, facing: 0
    }
  },
  380: { name: "sasoribdy",
    pic: 44, state: 3003, wait: 2, next: 380, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});