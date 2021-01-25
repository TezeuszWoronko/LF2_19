define({
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/kunai.png", w: 48, h: 48, row: 10, col: 4
      },
      {
        "file(40-54)": "sprite/yellow.png", w: 85, h: 85, row: 5, col: 3
      },
      {
        "file(55-99)": "sprite/spiral.png", w: 135, h: 160, row: 4, col: 3
      }
    ]
  },
  frame: {
  0: { name: "fly",
    pic: 37, state: 3000, wait: 1, next: 1, dvx: 64, dvy: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 5, w: 30, h: 27, zwidth: 15, dvx: 0, fall: -1, bdefend: 100, injury: 1, effect: 5
    }
  },
  1: { name: "fly",
    pic: 37, state: 3000, wait: 1, next: 999, dvx: 64, dvy: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 5, w: 30, h: 27, zwidth: 15, dvx: 0, fall: -1, bdefend: 100, injury: 1, effect: 5
    }
  },
  5: { name: "ground",
    pic: 38, state: 3000, wait: 3, next: 5, dvx: 550, dvy: 550, dvz: 550, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: -555555555, w: 120, h: 40
    }
  },
  6: { name: "ground",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999999999, y: 0, w: 10000000000000000, zwidth: 999, h: 100, vrest: 7, dvx: 1, bdefend: 0, injury: 0, effect: 5
    }
  },
  10: { name: "illusion",
    pic: 40, state: 3005, wait: 0, next: 11, dvx: 200, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "illusion",
    pic: 41, state: 3005, wait: 0, next: 12, dvx: 550, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 59, action: 373, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  12: { name: "illusion",
    pic: 42, state: 3005, wait: 0, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "illusion",
    pic: 43, state: 3005, wait: 0, next: 14, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 49, action: 26, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  14: { name: "illusion",
    pic: 44, state: 3005, wait: 0, next: 15, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "illusion",
    pic: 45, state: 3005, wait: 0, next: 16, dvx: 550, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "illusion",
    pic: 46, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "illusion",
    pic: 40, state: 3005, wait: 0, next: 11, dvx: 550, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "illusion",
    pic: 40, state: 3005, wait: 0, next: 11, dvx: 550, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 999, state: 3005, wait: 1, next: 55, dvx: 550, dvy: 0, dvz: 550, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  55: { name: "flying2",
    pic: 3, state: 3000, wait: 0, next: 55, dvx: 550, dvy: 2, dvz: 0, centerx: 24, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  60: { name: "hiting",
    pic: 999, state: 3005, wait: 0, next: 61, dvx: 550, dvy: 550, dvz: 550, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  70: { name: "spiral",
    pic: 55, state: 3003, wait: 0, next: 71, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "spiral",
    pic: 56, state: 3003, wait: 0, next: 72, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "spiral",
    pic: 57, state: 3003, wait: 0, next: 73, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "spiral",
    pic: 58, state: 3003, wait: 0, next: 74, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "spiral",
    pic: 59, state: 3003, wait: 0, next: 75, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "spiral",
    pic: 60, state: 3003, wait: 0, next: 76, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "spiral",
    pic: 61, state: 3003, wait: 0, next: 77, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "spiral",
    pic: 59, state: 3003, wait: 0, next: 78, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "spiral",
    pic: 60, state: 3003, wait: 0, next: 79, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "spiral",
    pic: 61, state: 3003, wait: 0, next: 80, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "spiral",
    pic: 59, state: 3003, wait: 0, next: 81, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "spiral",
    pic: 60, state: 3003, wait: 0, next: 82, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "spiral",
    pic: 61, state: 3003, wait: 0, next: 83, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "spiral",
    pic: 62, state: 3003, wait: 0, next: 84, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "spiral",
    pic: 63, state: 3003, wait: 0, next: 85, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "spiral",
    pic: 64, state: 3003, wait: 0, next: 86, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "spiral",
    pic: 65, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "ink",
    pic: 47, state: 3005, wait: 1, next: 96, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "ink",
    pic: 48, state: 3005, wait: 1, next: 97, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "ink",
    pic: 49, state: 3005, wait: 1, next: 98, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "ink",
    pic: 50, state: 3005, wait: 1, next: 99, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  99: { name: "ink",
    pic: 51, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "plant",
    pic: 52, state: 3002, wait: 2, next: 101, dvx: 550, dvy: 550, dvz: 0, centerx: 42, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "plant",
    pic: 53, state: 3002, wait: 2, next: 102, dvx: 550, dvy: 550, dvz: 0, centerx: 42, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "plant",
    pic: 54, state: 3002, wait: 1, next: 102, dvx: 550, dvy: 550, dvz: 0, centerx: 42, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 35, y: 63, w: 18, h: 22, dvx: 103
    }
  },
  103: { name: "plant",
    pic: 999, state: 3005, wait: 0, next: 104, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "plant",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 160, action: 110, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  }
  }
});