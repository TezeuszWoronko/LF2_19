define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/snail.png", w: 130, h: 140, row: 5, col: 2
      },
      {
        "file(20)": "sprite/start2.png", w: 795, h: 506, row: 1, col: 1
      }
    ]
  },
  frame: {
  0: { name: "snail",
    pic: 0, state: 3000, wait: 4, next: 1, dvx: 3, dvy: 550, centerx: 65, centery: 140, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  1: { name: "snail",
    pic: 1, state: 3000, wait: 3, next: 2, dvx: 3, dvy: 550, centerx: 65, centery: 140, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  2: { name: "snail",
    pic: 2, state: 3000, wait: 3, next: 3, dvx: 3, dvy: 550, centerx: 65, centery: 140, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  3: { name: "snail",
    pic: 3, state: 3000, wait: 3, next: 45, dvx: 2, dvy: 550, centerx: 65, centery: 140, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  6: { name: "flying",
    pic: 3, state: 400, wait: 1, next: 7, dvx: 0, dvy: 0, centerx: 65, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying",
    pic: 4, state: 400, wait: 1, next: 8, dvx: 0, dvy: 0, centerx: 65, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 9, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 2, state: 3006, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 65, y: 60, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  11: { name: "hiting",
    pic: 2, state: 3006, wait: 7, next: 1000, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0,
    opoint: {
      kind: 3, x: 65, y: 60, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  12: { name: "flying",
    pic: 0, state: 3003, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    itr: {
      kind: 0, x: -30, y: 75, w: 230, h: 40, zwidth: 150, dvx: 10, dvy: -20, fall: 100, vrest: 20, bdefend: 50, injury: 95
    },
    opoint: {
      kind: 1, x: 65, y: 100, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 31
    }
  },
  13: { name: "flying",
    pic: 0, state: 3003, wait: 10, next: 10, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 100, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 30
    }
  },
  20: { name: "hit",
    pic: 2, state: 3006, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 2, state: 3006, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  39: { name: "snail",
    pic: 999, state: 3005, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "snail",
    pic: 0, state: 3000, wait: 20, next: 41, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 65, y: 60, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  41: { name: "snail_walk",
    pic: 0, state: 3000, wait: 4, next: 42, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  42: { name: "snail",
    pic: 1, state: 3000, wait: 3, next: 43, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  43: { name: "snail",
    pic: 2, state: 3000, wait: 3, next: 44, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  44: { name: "snail",
    pic: 3, state: 3000, wait: 3, next: 45, dvx: 2, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  45: { name: "snail",
    pic: 2, state: 3000, wait: 5, next: 46, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  46: { name: "snail_walk",
    pic: 0, state: 3000, wait: 4, next: 47, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  47: { name: "snail",
    pic: 1, state: 3000, wait: 3, next: 48, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  48: { name: "snail",
    pic: 2, state: 3000, wait: 3, next: 49, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  49: { name: "snail",
    pic: 3, state: 3000, wait: 3, next: 50, dvx: 2, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  50: { name: "snail",
    pic: 2, state: 3000, wait: 5, next: 51, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  51: { name: "snail_FIRE",
    pic: 4, state: 3000, wait: 3, next: 52, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  52: { name: "snail",
    pic: 5, state: 3000, wait: 3, next: 53, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 100, action: 50, dvx: 0, dvy: -10, oid: 219, facing: 0
    }
  },
  53: { name: "snail",
    pic: 6, state: 3000, wait: 3, next: 54, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  54: { name: "snail",
    pic: 3, state: 3000, wait: 3, next: 55, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  55: { name: "snail",
    pic: 2, state: 3000, wait: 3, next: -56, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  56: { name: "snail_walk",
    pic: 0, state: 3000, wait: 4, next: 57, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  57: { name: "snail",
    pic: 1, state: 3000, wait: 3, next: 58, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  58: { name: "snail",
    pic: 2, state: 3000, wait: 3, next: 59, dvx: 3, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  59: { name: "snail",
    pic: 3, state: 3000, wait: 3, next: 60, dvx: 2, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  60: { name: "snail",
    pic: 2, state: 3000, wait: 5, next: 41, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  70: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 72, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  72: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 80, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  74: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 76, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  75: { name: "swamp",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 78, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  76: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  77: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 81, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  78: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  79: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 82, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  80: { name: "swamp",
    pic: 100, state: 3005, wait: 2, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "swamp",
    pic: 100, state: 3005, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "swamp (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 0, action: 50, dvx: 0, dvy: 0, oid: 215, facing: 0
    }
  },
  90: { name: "flute",
    pic: 999, state: 3005, wait: 40, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/058",
    itr: {
      kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 1, effect: 5
    }
  },
  91: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 92, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  92: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 93, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  93: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 94, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  94: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 95, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  95: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 96, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  96: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 97, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  97: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 98, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  98: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 99, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  99: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 100, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  100: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 101, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  101: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 102, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  102: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 103, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  103: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 104, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  104: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 105, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  105: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 106, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  106: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 107, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  107: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 108, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  108: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 109, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  109: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 125, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  110: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 111, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  111: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 112, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  112: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 113, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  113: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 114, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  114: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 115, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  115: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 116, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  116: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 117, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  117: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 118, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  118: { name: "swamp",
    pic: 10, state: 3003, wait: 7, next: 119, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  119: { name: "swamp",
    pic: 9, state: 3003, wait: 7, next: 120, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  120: { name: "swamp",
    pic: 11, state: 3003, wait: 7, next: 121, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 128, w: 120, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  121: { name: "swamp",
    pic: 14, state: 3003, wait: 2, next: 122, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "swamp",
    pic: 13, state: 3003, wait: 2, next: 123, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "swamp",
    pic: 12, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 126, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  126: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 127, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  127: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 128, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  128: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 129, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  129: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 130, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  130: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 131, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  131: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 132, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  132: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 133, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  133: { name: "flying_fire",
    pic: 8, state: 3000, wait: 3, next: 134, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    }
  },
  134: { name: "flying_fire",
    pic: 7, state: 3000, wait: 3, next: 136, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    bdy: {
      kind: 0, x: 15, y: 85, w: 100, h: 55
    },
    opoint: {
      kind: 1, x: 110, y: 105, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  135: { name: "flying",
    pic: 0, state: 3000, wait: 7, next: 136, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  136: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 2, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  150: { name: "minato",
    pic: 0, state: 3000, wait: 2, next: 151, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  151: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 152, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  152: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 153, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/frog",
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  153: { name: "flying",
    pic: 3, state: 3005, wait: 2, next: 154, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "flying",
    pic: 4, state: 3005, wait: 5, next: 158, dvx: 11, dvy: -5, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  156: { name: "flying",
    pic: 2, state: 3005, wait: 2, next: 157, dvx: 550, dvy: 550, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 159, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  158: { name: "flying",
    pic: 4, state: 3000, wait: 0, next: 155, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  159: { name: "flying",
    pic: 0, state: 3003, wait: 0, next: 160, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    itr: {
      kind: 0, x: -30, y: 75, w: 230, h: 40, zwidth: 150, dvx: 10, dvy: -20, fall: 100, vrest: 20, bdefend: 50, injury: 95
    },
    opoint: {
      kind: 1, x: 65, y: 100, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 31
    }
  },
  160: { name: "flying",
    pic: 0, state: 3003, wait: 5, next: 161, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 100, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 30
    }
  },
  161: { name: "hiting",
    pic: 0, state: 3006, wait: 0, next: 162, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  162: { name: "hiting",
    pic: 0, state: 3006, wait: 3, next: 163, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0
  },
  163: { name: "minato",
    pic: 0, state: 3000, wait: 2, next: 164, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  164: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 165, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  165: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 166, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/frog",
    bdy: {
      kind: 0, x: 35, y: 50, w: 150, h: 40
    }
  },
  166: { name: "flying",
    pic: 3, state: 3005, wait: 2, next: 167, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "flying",
    pic: 4, state: 3005, wait: 5, next: 168, dvx: 11, dvy: -5, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  168: { name: "flying",
    pic: 4, state: 3000, wait: 0, next: 169, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "flying",
    pic: 2, state: 3005, wait: 2, next: 171, dvx: 550, dvy: 550, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 172, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "flying",
    pic: 0, state: 3003, wait: 0, next: 173, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    itr: {
      kind: 0, x: -30, y: 75, w: 230, h: 40, zwidth: 150, dvx: 10, dvy: -20, fall: 100, vrest: 20, bdefend: 50, injury: 95
    },
    opoint: {
      kind: 1, x: 65, y: 100, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 31
    }
  },
  173: { name: "flying",
    pic: 0, state: 3003, wait: 5, next: 10, dvx: 0, dvy: 0, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 100, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 30
    }
  },
  {
    name: "169 flying",
    pic: 3, state: 3005, wait: 5, next: 170, dvx: 0, dvy: 15, centerx: 65, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});