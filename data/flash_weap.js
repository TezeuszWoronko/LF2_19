define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/kunai.png", w: 48, h: 48, row: 10, col: 10
      }
    ],
    weapon_hp: 200,
    weapon_drop_hurt: 5
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  1: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 24, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  2: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 24, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  3: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 23, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  4: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 24, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  5: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 24, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  6: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 24, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  7: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 22, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  8: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 26, centery: 15, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  9: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 27, centery: 15, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  10: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 25, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  11: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  12: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 25, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  13: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 25, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  14: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  15: { name: "in_the_sky",
    pic: 39, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 24, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    }
  },
  40: { name: "throwing",
    pic: 37, state: 1002, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 24, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 30, h: 19
    }
  },
  41: { name: "throwing",
    pic: 37, state: 1002, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 6, y: 16, w: 30, h: 19
    }
  },
  45: { name: "throwing",
    pic: 36, state: 1002, wait: 10, next: 46, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "throwing",
    pic: 36, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  47: { name: "throwing",
    pic: 36, state: 1002, wait: 0, next: 48, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 40, dvx: 20, dvy: 10, dvz: 0, oid: 448, facing: 50
    }
  },
  48: { name: "throwing",
    pic: 36, state: 1002, wait: 0, next: 49, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 5, action: 40, dvx: 20, dvy: 10, dvz: 0, oid: 448, facing: 51
    }
  },
  49: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 50, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 40, dvx: 40, dvy: 12, dvz: 0, oid: 448, facing: 50
    }
  },
  50: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 5, action: 40, dvx: 40, dvy: 12, dvz: 0, oid: 448, facing: 51
    }
  },
  51: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 40, dvx: 30, dvy: 15, dvz: 0, oid: 448, facing: 50
    }
  },
  52: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 5, action: 40, dvx: 30, dvy: 15, dvz: 0, oid: 448, facing: 51
    }
  },
  53: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 54, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 40, dvx: 20, dvy: 25, dvz: 0, oid: 448, facing: 50
    }
  },
  54: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 5, action: 40, dvx: 20, dvy: 25, dvz: 0, oid: 448, facing: 51
    }
  },
  55: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 56, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 40, dvx: 10, dvy: 25, dvz: 0, oid: 448, facing: 50
    }
  },
  56: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 5, action: 40, dvx: 10, dvy: 25, dvz: 0, oid: 448, facing: 51
    }
  },
  57: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 58, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 0, action: 40, dvx: 2, dvy: 45, dvz: 0, oid: 448, facing: 50
    }
  },
  58: { name: "throwing",
    pic: 999, state: 1002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 5, action: 40, dvx: 2, dvy: 45, dvz: 0, oid: 448, facing: 51
    }
  },
  60: { name: "on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  61: { name: "on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  62: { name: "on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  63: { name: "on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  64: { name: "on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  70: { name: "just_on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  71: { name: "just_on_on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  72: { name: "just_on_on_ground",
    pic: 39, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 69, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 0
    }
  },
  100: { name: "just_on_on_ground",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 55, action: 5, dvx: 0, dvy: 0, dvz: 0, oid: 433, facing: 1
    }
  },
  399: { name: "dummy",
    pic: 4, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});