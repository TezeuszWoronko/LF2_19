define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/earth_creature.png", w: 140, h: 130, row: 5, col: 5
      }
    ]
  },
  frame: {
  10: { name: "body_atk",
    pic: 0, state: 3003, wait: 1, next: 15, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  11: { name: "body_atk",
    pic: 5, state: 18, wait: 1, next: 12, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -2, y: 80051, w: 137, h: 76, dvx: 30, dvy: -15, fall: 70, vrest: 20, bdefend: 70, injury: 65, effect: 0
    }
  },
  12: { name: "body_atk",
    pic: 6, state: 18, wait: 1, next: 13, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -2, y: 80051, w: 137, h: 76, dvx: 30, dvy: -15, fall: 70, vrest: 20, bdefend: 70, injury: 65, effect: 0
    }
  },
  13: { name: "body_atk",
    pic: 7, state: 18, wait: 1, next: 14, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -2, y: 80051, w: 137, h: 76, dvx: 30, dvy: -15, fall: 70, vrest: 20, bdefend: 70, injury: 65, effect: 0
    }
  },
  14: { name: "body_atk",
    pic: 8, state: 18, wait: 1, next: 15, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -2, y: 80051, w: 137, h: 76, dvx: 30, dvy: -15, fall: 70, vrest: 20, bdefend: 70, injury: 65, effect: 0
    }
  },
  15: { name: "body_atk",
    pic: 0, state: 3003, wait: 5, next: 65, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "body_atk",
    pic: 81, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "body_atk",
    pic: 12, state: 18, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: 800000, w: 140, h: 630, dvx: 81
    }
  },
  31: { name: "body_atk",
    pic: 12, state: 3003, wait: 5, next: 80, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -10000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 383, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  66: { name: "flying",
    pic: 1, state: 3000, wait: 3, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -10000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 383, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  67: { name: "flying",
    pic: 2, state: 3000, wait: 3, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 8, x: 0, y: -10000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 383, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  68: { name: "flying",
    pic: 3, state: 3000, wait: 3, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -10000000, w: 100, zwidth: 50, h: 79, dvx: 85
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 383, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  70: { name: "summon",
    pic: 999, state: 3005, wait: 0, next: 71, dvx: 550, dvy: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "summon",
    pic: 999, state: 3005, wait: 5, next: 65, dvx: 550, dvy: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 50, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  80: { name: "dead",
    pic: 12, state: 3000, wait: 1, next: 0, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 5800065, w: 95, h: 65
    }
  },
  81: { name: "revived",
    pic: 12, state: 3000, wait: 0, next: 82, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "revived",
    pic: 12, state: 3000, wait: 20, next: 65, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 115, action: 356, dvx: 0, dvy: 0, oid: 57, facing: 0
    }
  },
  85: { name: "bigatk",
    pic: 4, state: 3000, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "bigatk",
    pic: 4, state: 3000, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "bigatk",
    pic: 4, state: 3000, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "bigatk",
    pic: 4, state: 3000, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "bigatk",
    pic: 4, state: 3000, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "bigatk",
    pic: 4, state: 3000, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "bigatk",
    pic: 4, state: 3000, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 60, y: 120, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  92: { name: "bigatk",
    pic: 13, state: 3000, wait: 5, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 110, action: 0, dvx: 50, dvy: -1, oid: 507, facing: 30
    }
  }
  }
});