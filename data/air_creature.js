define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/air_creature.png", w: 120, h: 70, row: 4, col: 4
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    },
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    },
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 67, y: 59, action: 60, dvx: 0, dvy: 0, oid: 450, facing: 0
    },
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    }
  },
  10: { name: "body_atk",
    pic: 4, state: 3000, wait: 0, next: 11, dvx: 550, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "body_atk",
    pic: 5, state: 3000, wait: 0, next: 12, dvx: 550, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "body_atk",
    pic: 6, state: 3000, wait: 0, next: 13, dvx: 550, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "body_atk",
    pic: 7, state: 3000, wait: 0, next: 14, dvx: 550, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "body_atk",
    pic: 3, state: 3000, wait: 5, next: 15, dvx: 550, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 16, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  16: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 17, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  17: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 18, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  18: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 19, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  19: { name: "flying",
    pic: 1, state: 3005, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  20: { name: "body_atk",
    pic: 81, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 0, y: -6000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 386, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  30: { name: "die",
    pic: 2, state: 18, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: 800000, w: 120, h: 630, dvx: 81
    }
  },
  31: { name: "die",
    pic: 2, state: 4507, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "wind",
    pic: 8, state: 15, wait: 1, next: 51, dvx: 100, dvy: 0, dvz: 550, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043",
    itr: {
      kind: 0, x: 19, y: 80015, w: 71, h: 40, dvx: 15, dvy: -15, fall: 100, arest: 10, bdefend: 100, injury: 60, effect: 1
    }
  },
  51: { name: "wind",
    pic: 9, state: 15, wait: 1, next: 52, dvx: 100, dvy: 0, dvz: 550, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 80015, w: 71, h: 40, dvx: 15, dvy: -15, fall: 100, arest: 10, bdefend: 100, injury: 60, effect: 1
    }
  },
  52: { name: "wind",
    pic: 10, state: 15, wait: 1, next: 50, dvx: 100, dvy: 0, dvz: 550, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 80015, w: 71, h: 40, dvx: 15, dvy: -15, fall: 100, arest: 10, bdefend: 100, injury: 60, effect: 1
    }
  },
  55: { name: "thunder",
    pic: 11, state: 15, wait: 2, next: 56, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: [
      {
        kind: 0, x: 39, y: 17, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      },
      {
        kind: 0, x: 39, y: 30000, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      }
    ]
  },
  56: { name: "thunder",
    pic: 12, state: 15, wait: 0, next: 57, dvx: 3, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 39, y: 17, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      },
      {
        kind: 0, x: 39, y: 30000, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      }
    ],
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  57: { name: "thunder",
    pic: 13, state: 15, wait: 0, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 39, y: 17, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      },
      {
        kind: 0, x: 39, y: 30000, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      }
    ]
  },
  58: { name: "thunder",
    pic: 11, state: 15, wait: 0, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 39, y: 17, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      },
      {
        kind: 0, x: 39, y: 30000, w: 40, h: 37, dvx: 5, dvy: -7, fall: 70, arest: 4, bdefend: 70, injury: 10, zwidth: 25, effect: 5
      }
    ]
  },
  60: { name: "flying",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -45456635779800, w: 10000000000000000, h: 9999, zwidth: 999, dvx: 0, dvy: 0, fall: -1, arest: 200, bdefend: 0, injury: -15, effect: 6165
    }
  },
  65: { name: "summon",
    pic: 999, state: 3000, wait: 0, next: 66, dvx: 550, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "flying",
    pic: 999, state: 3000, wait: 5, next: 999, dvx: 550, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 50, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  67: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    bdy: {
      kind: 0, x: 9, y: 30, w: 92, h: 25
    }
  },
  80: { name: "dead",
    pic: 2, state: 3000, wait: 1, next: 0, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 9, y: 5800030, w: 92, h: 25
    }
  },
  81: { name: "revived",
    pic: 2, state: 3000, wait: 0, next: 82, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "revived",
    pic: 2, state: 3000, wait: 20, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 45, action: 356, dvx: 0, dvy: 0, oid: 57, facing: 0
    }
  },
  85: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 86, dvx: 550, dvy: 0, dvz: 0, centerx: 62, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 59, action: 95, dvx: 0, dvy: 0, oid: 450, facing: 0
    }
  },
  86: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 87, dvx: 550, dvy: 0, dvz: 0, centerx: 72, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 88, dvx: 550, dvy: 0, dvz: 0, centerx: 62, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 89, dvx: 550, dvy: 0, dvz: 0, centerx: 72, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 90, dvx: 550, dvy: 0, dvz: 0, centerx: 62, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 91, dvx: 550, dvy: 0, dvz: 0, centerx: 72, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 92, dvx: 550, dvy: 0, dvz: 0, centerx: 62, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 59, action: 50, dvx: 0, dvy: 0, oid: 450, facing: 0
    }
  },
  92: { name: "body_atk2",
    pic: 3, state: 15, wait: 1, next: 999, dvx: 550, dvy: 0, dvz: 0, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "wind",
    pic: 8, state: 15, wait: 1, next: 96, dvx: 10, dvy: 0, dvz: 550, centerx: 57, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/073"
  },
  96: { name: "wind",
    pic: 9, state: 15, wait: 1, next: 97, dvx: 10, dvy: 0, dvz: 550, centerx: 57, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "wind",
    pic: 10, state: 15, wait: 1, next: 1000, dvx: 10, dvy: 0, dvz: 550, centerx: 57, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});