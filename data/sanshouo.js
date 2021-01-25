define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/sanshouo.png", w: 134, h: 44, row: 3, col: 4
      },
      {
        "file(12-50)": "sprite/sanshouo2.png", w: 125, h: 95, row: 5, col: 4
      }
    ]
  },
  frame: {
  0: { name: "sanshou",
    pic: 6, state: 3005, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 69, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  1: { name: "sanshou",
    pic: 7, state: 3005, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 69, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  2: { name: "sanshou",
    pic: 8, state: 3005, wait: 1, next: 3, dvx: 0, dvy: 0, centerx: 69, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  3: { name: "sanshou",
    pic: 9, state: 3005, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 69, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  4: { name: "sanshou",
    pic: 10, state: 3005, wait: 1, next: 5, dvx: 0, dvy: 0, centerx: 69, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  5: { name: "sanshou",
    pic: 11, state: 3000, wait: 1, next: 6, dvx: 0, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    },
    bdy: {
      kind: 0, x: 0, y: 40000, w: 134, h: 500
    }
  },
  6: { name: "sanshou",
    pic: 2, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    },
    opoint: {
      kind: 1, x: 68, y: -35, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  7: { name: "sanshou",
    pic: 1, state: 3000, wait: 1, next: 6, dvx: 0, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    },
    bdy: {
      kind: 0, x: 0, y: 40000, w: 134, h: 500
    }
  },
  10: { name: "sanshou",
    pic: 2, state: 3006, wait: 2, next: 11, dvx: 12, dvy: 1, dvz: 3, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    sound: "1/002",
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  11: { name: "sanshou",
    pic: 3, state: 3006, wait: 2, next: 12, dvx: 550, dvy: 550, dvz: 550, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  12: { name: "sanshou",
    pic: 4, state: 3006, wait: 2, next: 13, dvx: 12, dvy: 1, dvz: 3, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    },
    opoint: {
      kind: 1, x: 135, y: 25, action: 0, dvx: 7, dvy: 0, oid: 211, facing: 0
    }
  },
  13: { name: "sanshou",
    pic: 5, state: 3006, wait: 2, next: 14, dvx: 550, dvy: 550, dvz: 550, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    },
    opoint: {
      kind: 1, x: 135, y: 25, action: 0, dvx: 7, dvy: 0, oid: 211, facing: 0
    }
  },
  14: { name: "sanshou",
    pic: 0, state: 3006, wait: 2, next: 15, dvx: 0, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    sound: "1/002",
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  15: { name: "sanshou",
    pic: 1, state: 3006, wait: 2, next: 7, dvx: 0, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  20: { name: "sanshou",
    pic: 2, state: 3006, wait: 2, next: 11, dvx: 12, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002",
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  30: { name: "sanshou",
    pic: 2, state: 3006, wait: 2, next: 11, dvx: 8, dvy: 0, centerx: 68, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002",
    itr: {
      kind: 0, x: 0, y: 10, w: 135, h: 34, dvx: 15, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 40
    }
  },
  40: { name: "walking",
    pic: 999, state: 18, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 69, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -300000, y: 0, w: 600135, h: 500, fall: 10, vrest: 5, bdefend: 100, injury: 1, effect: 5, zwidth: 300
    }
  },
  49: { name: "shield",
    pic: 999, state: 3005, wait: 9, next: 51, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 10, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  50: { name: "shield",
    pic: 999, state: 3005, wait: 0, next: 49, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "shield",
    pic: 12, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "shield",
    pic: 13, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "shield",
    pic: 14, state: 3005, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "shield",
    pic: 15, state: 3003, wait: 1, next: 55, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 51, y: 21, w: 60, h: 74
    }
  },
  55: { name: "shield",
    pic: 16, state: 3003, wait: 1, next: 56, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 51, y: 21, w: 60, h: 74
    }
  },
  56: { name: "shield",
    pic: 17, state: 3003, wait: 41, next: 57, dvx: 550, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 51, y: 21, w: 60, h: 74
      },
      {
        kind: 0, x: 69, y: 27, w: 14, h: 64, dvx: 0, dvy: 0, fall: -1, vrest: 15, bdefend: 100, injury: 0, effect: 5
      }
    ]
  },
  57: { name: "shield",
    pic: 999, state: 3005, wait: 4, next: 1000, dvx: 0, dvy: 0, centerx: 68, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 10, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  }
  }
});