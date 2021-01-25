define({
  bmp: {
    file: [
      {
        "file(0-5)": "sprite/chibaku.png", w: 500, h: 500, row: 3, col: 2
      },
      {
        "file(6-11)": "sprite/meteor4.png", w: 500, h: 500, row: 3, col: 2
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
  5: { name: "air",
    pic: 5, state: 3000, wait: 3, next: 5, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: -111111111, w: 120, h: 640
    }
  },
  6: { name: "air",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999999999, y: 0, w: 10000000000000000, zwidth: 999, h: 100, vrest: 7, dvx: 1, bdefend: 0, injury: 0, effect: 5
    }
  },
  10: { name: "fall",
    pic: 999, state: 3005, wait: 0, next: 11, dvx: 200, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "fall",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: -381, action: 148, dvx: 0, dvy: 0, dvz: 0, oid: 237, facing: 0
    }
  },
  12: { name: "illusion",
    pic: 999, state: 3005, wait: 0, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "illusion",
    pic: 43, state: 3005, wait: 0, next: 14, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
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
  70: { name: "standing",
    pic: 999, state: 15, wait: 1, next: 71, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "standing",
    pic: 999, state: 15, wait: 25, next: 72, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 655, action: 210, dvx: 8, dvy: -6, dvz: 0, oid: 237, facing: 0
    }
  },
  72: { name: "standing",
    pic: 999, state: 15, wait: 25, next: 73, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 519, y: 655, action: 211, dvx: -8, dvy: -8, dvz: 0, oid: 237, facing: 0
    }
  },
  73: { name: "standing",
    pic: 0, state: 15, wait: 25, next: 74, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 185, y: 655, action: 212, dvx: 1, dvy: -6, dvz: 0, oid: 237, facing: 0
    }
  },
  74: { name: "standing",
    pic: 0, state: 15, wait: 25, next: 75, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -200, y: 655, action: 213, dvx: 11, dvy: -5, dvz: 0, oid: 237, facing: 0
    }
  },
  75: { name: "standing",
    pic: 1, state: 15, wait: 20, next: 76, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 400, y: 655, action: 212, dvx: -10, dvy: -13, dvz: 0, oid: 237, facing: 0
    }
  },
  76: { name: "standing",
    pic: 1, state: 15, wait: 25, next: 77, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 655, action: 210, dvx: 8, dvy: -6, dvz: 0, oid: 237, facing: 0
    }
  },
  77: { name: "standing",
    pic: 2, state: 15, wait: 25, next: 78, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 819, y: 320, action: 211, dvx: -9, dvy: 0, dvz: 0, oid: 237, facing: 0
    }
  },
  78: { name: "standing",
    pic: 2, state: 15, wait: 25, next: 79, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -200, y: 655, action: 210, dvx: 11, dvy: -5, dvz: 0, oid: 237, facing: 0
    }
  },
  79: { name: "standing",
    pic: 3, state: 15, wait: 25, next: 80, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 519, y: 655, action: 213, dvx: -8, dvy: -8, dvz: 0, oid: 237, facing: 0
    }
  },
  80: { name: "standing",
    pic: 3, state: 15, wait: 25, next: 81, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -200, y: 230, action: 212, dvx: 5, dvy: 2, dvz: 0, oid: 237, facing: 0
    }
  },
  81: { name: "standing",
    pic: 4, state: 15, wait: 40, next: 5, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 185, y: 655, action: 211, dvx: 1, dvy: -6, dvz: 0, oid: 237, facing: 0
    }
  },
  97: { name: "meteor_red",
    pic: 999, state: 400, wait: 3, next: 98, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "meteor_red",
    pic: 999, state: 15, wait: 0, next: 99, dvx: 150, dvy: -280, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 250, y: 610, action: 373, dvx: 0, dvy: 0, oid: 237, facing: 0
    }
  },
  99: { name: "meteor_red",
    pic: 999, state: 15, wait: 40, next: 100, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "meteor_red",
    pic: 6, state: 15, wait: 9, next: 101, dvx: 550, dvy: 1, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "meteor_red",
    pic: 7, state: 15, wait: 9, next: 102, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "meteor_red",
    pic: 8, state: 15, wait: 9, next: 103, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "meteor_red",
    pic: 9, state: 15, wait: 9, next: 104, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "meteor_red",
    pic: 10, state: 15, wait: 9, next: 105, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  105: { name: "meteor_red",
    pic: 11, state: 15, wait: 9, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "meteor_red",
    pic: 8, state: 15, wait: 6, next: 107, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  107: { name: "meteor_red",
    pic: 9, state: 15, wait: 6, next: 108, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  108: { name: "meteor_red",
    pic: 10, state: 15, wait: 6, next: 109, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  109: { name: "meteor_red",
    pic: 11, state: 15, wait: 6, next: 110, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "meteor_red",
    pic: 10, state: 15, wait: 6, next: 111, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "meteor_red",
    pic: 11, state: 15, wait: 6, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});