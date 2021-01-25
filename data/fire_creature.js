define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/fire_creature.png", w: 140, h: 130, row: 5, col: 5
      },
      {
        "file(20-36)": "sprite/poison.png", w: 81, h: 82, row: 4, col: 10
      },
      {
        "file(37-106)": "sprite/kakashi_3.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(137-123)": "sprite/smokes.png", w: 81, h: 82, row: 4, col: 10
      },
      {
        "file(124-199)": "sprite/smokes2.png", w: 140, h: 130, row: 5, col: 5
      }
    ]
  },
  frame: {
  10: { name: "body_atk",
    pic: 0, state: 3003, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "body_atk",
    pic: 1, state: 3003, wait: 0, next: 12, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "body_atk",
    pic: 2, state: 3003, wait: 15, next: 65, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "body_atk",
    pic: 81, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "die",
    pic: 12, state: 18, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 0, y: 800000, w: 140, h: 630, dvx: 81
      },
      {
        kind: 0, x: -99999, y: 5800065, w: 9999999999, h: 500, dvx: 0, effect: 5, injury: 200
      }
    ]
  },
  31: { name: "body_atk",
    pic: 12, state: 3003, wait: 5, next: 80, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "flying",
    pic: 0, state: 15, wait: 3, next: 66, dvx: 3, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -8000000, w: 100, zwidth: 50, h: 79, dvx: 75
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 381, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  66: { name: "flying",
    pic: 1, state: 15, wait: 3, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -8000000, w: 100, zwidth: 50, h: 79, dvx: 75
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 381, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  67: { name: "flying",
    pic: 2, state: 3000, wait: 3, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 8, x: 0, y: -8000000, w: 100, zwidth: 50, h: 79, dvx: 75
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 381, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  68: { name: "flying",
    pic: 3, state: 3000, wait: 3, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -8000000, w: 100, zwidth: 50, h: 79, dvx: 75
    },
    opoint: {
      kind: 1, x: 67, y: 130, action: 381, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  69: { name: "flying",
    pic: 4, state: 3000, wait: 3, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -8000000, w: 100, zwidth: 50, h: 79, dvx: 75
    },
    opoint: {
      kind: 1, x: 67, y: 59, action: 60, dvx: 0, dvy: 0, oid: 450, facing: 0
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
  75: { name: "body_atk",
    pic: 10, state: 3003, wait: 1, next: 76, dvx: 550, dvy: 550, dvz: 550, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "body_atk",
    pic: 10, state: 3003, wait: 1, next: 77, dvx: 550, dvy: 550, dvz: 550, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "body_atk",
    pic: 10, state: 3003, wait: 1, next: 78, dvx: 550, dvy: 550, dvz: 550, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "body_atk",
    pic: 10, state: 3003, wait: 1, next: 115, dvx: 550, dvy: 550, dvz: 550, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
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
  85: { name: "gas",
    pic: 13, state: 15, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 0, effect: 5
    }
  },
  86: { name: "gas",
    pic: 14, state: 5, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: -1, arest: 7, bdefend: 999, injury: 0, effect: 5
    }
  },
  87: { name: "gas",
    pic: 15, state: 15, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 0, effect: 5
    }
  },
  88: { name: "gas",
    pic: 16, state: 15, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 0, effect: 5
    }
  },
  89: { name: "gas",
    pic: 17, state: 15, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: -1, arest: 7, bdefend: 999, injury: 0, effect: 5
    }
  },
  90: { name: "gas",
    pic: 18, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 0, effect: 5
    }
  },
  95: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 96, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 85, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  96: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 97, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  97: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 98, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 85, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  98: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 99, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  99: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 1000, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 85, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  100: { name: "fire_Ball",
    pic: 7, state: 18, wait: 0, next: 101, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    itr: [
      {
        kind: 0, x: 42, y: 80000, w: 70, h: 800, zwidth: 15, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2
      },
      {
        kind: 0, x: 32, y: 35, w: 30, h: 315, zwidth: 25, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 5
      }
    ]
  },
  101: { name: "fire_Ball",
    pic: 7, state: 18, wait: 0, next: 102, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 42, y: 80000, w: 70, h: 800, zwidth: 15, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2
      },
      {
        kind: 0, x: 32, y: 35, w: 30, h: 135, zwidth: 25, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 5
      }
    ]
  },
  102: { name: "fire_Ball",
    pic: 9, state: 18, wait: 0, next: 100, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 42, y: 80000, w: 70, h: 800, zwidth: 15, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2
      },
      {
        kind: 0, x: 32, y: 35, w: 30, h: 135, zwidth: 25, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 5
      }
    ]
  },
  105: { name: "gas2",
    pic: 13, state: 18, wait: 1, next: 106, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 10, effect: 5
    }
  },
  106: { name: "gas2",
    pic: 14, state: 18, wait: 1, next: 107, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: -1, arest: 7, bdefend: 999, injury: 10, effect: 5
    }
  },
  107: { name: "gas2",
    pic: 15, state: 18, wait: 1, next: 108, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 10, effect: 5
    }
  },
  108: { name: "gas2",
    pic: 16, state: 18, wait: 1, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 10, effect: 5
    }
  },
  109: { name: "gas2",
    pic: 17, state: 18, wait: 1, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: -1, arest: 7, bdefend: 999, injury: 10, effect: 5
    }
  },
  110: { name: "gas2",
    pic: 18, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 80000, w: 70, h: 800, dvx: 0, dvy: 0, fall: 3, arest: 7, bdefend: 999, injury: 10, effect: 5
    }
  },
  115: { name: "body_atk",
    pic: 5, state: 3003, wait: 0, next: 116, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "body_atk",
    pic: 6, state: 3003, wait: 0, next: 117, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    opoint: {
      kind: 1, x: 59, y: 129, action: 65, dvx: 0, dvy: 0, oid: 408, facing: 30
    }
  },
  117: { name: "body_atk",
    pic: 11, state: 3003, wait: 15, next: 65, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 125, action: 0, dvx: 0, dvy: 0, oid: 514, facing: 0
    }
  },
  160: { name: "poison",
    pic: 25, state: 3005, wait: 1, next: 161, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  161: { name: "poison",
    pic: 26, state: 3005, wait: 1, next: 162, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  162: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 163, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  163: { name: "poison",
    pic: 28, state: 3005, wait: 1, next: 164, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  164: { name: "poison",
    pic: 29, state: 3005, wait: 1, next: 165, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  165: { name: "poison",
    pic: 30, state: 3005, wait: 1, next: 166, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  166: { name: "poison",
    pic: 31, state: 3005, wait: 1, next: 167, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  167: { name: "poison",
    pic: 32, state: 3005, wait: 1, next: 168, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  168: { name: "poison",
    pic: 33, state: 3005, wait: 1, next: 169, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  169: { name: "poison",
    pic: 34, state: 3005, wait: 1, next: 170, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  170: { name: "poison",
    pic: 35, state: 3005, wait: 1, next: 171, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  171: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 172, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  172: { name: "poison",
    pic: 25, state: 3005, wait: 1, next: 173, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  173: { name: "poison",
    pic: 26, state: 3005, wait: 1, next: 174, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  174: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 175, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  175: { name: "poison",
    pic: 28, state: 3005, wait: 1, next: 176, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  176: { name: "poison",
    pic: 29, state: 3005, wait: 1, next: 177, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  177: { name: "poison",
    pic: 30, state: 3005, wait: 1, next: 178, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  178: { name: "poison",
    pic: 31, state: 3005, wait: 1, next: 179, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  179: { name: "poison",
    pic: 32, state: 3005, wait: 1, next: 180, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  180: { name: "poison",
    pic: 33, state: 3005, wait: 1, next: 181, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  181: { name: "poison",
    pic: 34, state: 3005, wait: 1, next: 182, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  182: { name: "poison",
    pic: 35, state: 3005, wait: 1, next: 183, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  183: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 184, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  184: { name: "poison",
    pic: 25, state: 3005, wait: 1, next: 185, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  185: { name: "poison",
    pic: 26, state: 3005, wait: 1, next: 186, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  186: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 187, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  187: { name: "poison",
    pic: 28, state: 3005, wait: 1, next: 188, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  188: { name: "poison",
    pic: 29, state: 3005, wait: 1, next: 189, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  189: { name: "poison",
    pic: 30, state: 3005, wait: 1, next: 190, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  190: { name: "poison",
    pic: 31, state: 3005, wait: 1, next: 191, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  191: { name: "poison",
    pic: 32, state: 3005, wait: 1, next: 192, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  192: { name: "poison",
    pic: 33, state: 3005, wait: 1, next: 193, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  193: { name: "poison",
    pic: 34, state: 3005, wait: 1, next: 194, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  194: { name: "poison",
    pic: 35, state: 3005, wait: 1, next: 195, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  195: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 208, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  208: { name: "poison",
    pic: 25, state: 3005, wait: 1, next: 209, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  209: { name: "poison",
    pic: 26, state: 3005, wait: 1, next: 210, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  210: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  211: { name: "poison",
    pic: 28, state: 3005, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  212: { name: "poison",
    pic: 29, state: 3005, wait: 1, next: 213, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  213: { name: "poison",
    pic: 30, state: 3005, wait: 1, next: 214, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  214: { name: "poison",
    pic: 31, state: 3005, wait: 1, next: 215, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  215: { name: "poison",
    pic: 32, state: 3005, wait: 1, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  216: { name: "poison",
    pic: 33, state: 3005, wait: 1, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  217: { name: "poison",
    pic: 34, state: 3005, wait: 1, next: 218, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  218: { name: "poison",
    pic: 35, state: 3005, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  219: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 220, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  220: { name: "poison",
    pic: 25, state: 3005, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  221: { name: "poison",
    pic: 26, state: 3005, wait: 1, next: 222, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  222: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  223: { name: "poison",
    pic: 28, state: 3005, wait: 1, next: 224, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  224: { name: "poison",
    pic: 29, state: 3005, wait: 1, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  225: { name: "poison",
    pic: 30, state: 3005, wait: 1, next: 226, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  226: { name: "poison",
    pic: 31, state: 3005, wait: 1, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  227: { name: "poison",
    pic: 32, state: 3005, wait: 1, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  228: { name: "poison",
    pic: 33, state: 3005, wait: 1, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  229: { name: "poison",
    pic: 34, state: 3005, wait: 1, next: 230, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  230: { name: "poison",
    pic: 35, state: 3005, wait: 1, next: 231, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 1, effect: 50
    }
  },
  231: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 232, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  232: { name: "poison",
    pic: 25, state: 3005, wait: 1, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  233: { name: "poison",
    pic: 26, state: 3005, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  234: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 235, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  235: { name: "poison",
    pic: 28, state: 3005, wait: 1, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  236: { name: "poison",
    pic: 29, state: 3005, wait: 1, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  237: { name: "poison",
    pic: 30, state: 3005, wait: 1, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  238: { name: "poison",
    pic: 31, state: 3005, wait: 1, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  239: { name: "poison",
    pic: 32, state: 3005, wait: 1, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  240: { name: "poison",
    pic: 33, state: 3005, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  241: { name: "poison",
    pic: 34, state: 3005, wait: 1, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  242: { name: "poison",
    pic: 35, state: 3005, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  243: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 22, zwidth: 8, h: 780, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 6, effect: 50
    }
  },
  300: { name: "gas",
    pic: 13, state: 15, wait: 1, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  301: { name: "gas",
    pic: 14, state: 15, wait: 1, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  302: { name: "gas",
    pic: 15, state: 15, wait: 1, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  303: { name: "gas",
    pic: 16, state: 15, wait: 1, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  304: { name: "gas",
    pic: 17, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  305: { name: "gas",
    pic: 18, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  306: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 307, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 311, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  307: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 308, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 311, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  308: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 309, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 311, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  309: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 310, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 311, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  310: { name: "gas",
    pic: 18, state: 18, wait: 1, next: 1000, dvx: 15, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 311, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  311: { name: "gas",
    pic: 13, state: 15, wait: 1, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "gas",
    pic: 14, state: 15, wait: 1, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "gas",
    pic: 15, state: 15, wait: 1, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  314: { name: "gas",
    pic: 16, state: 15, wait: 1, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  315: { name: "gas",
    pic: 17, state: 15, wait: 1, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  316: { name: "gas",
    pic: 18, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  317: { name: "cloak",
    pic: 44, state: 15, wait: 1, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  320: { name: "smoke_stay",
    pic: 135, state: 3005, wait: 1, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  321: { name: "smoke_stay",
    pic: 136, state: 3005, wait: 1, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  322: { name: "smoke_stay",
    pic: 137, state: 3005, wait: 1, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  323: { name: "smoke_stay",
    pic: 138, state: 3005, wait: 1, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  324: { name: "smoke_stay",
    pic: 139, state: 3005, wait: 1, next: 325, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  325: { name: "smoke_stay",
    pic: 140, state: 3005, wait: 1, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  326: { name: "smoke_stay",
    pic: 141, state: 3005, wait: 1, next: 327, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  327: { name: "poison",
    pic: 142, state: 3005, wait: 1, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  328: { name: "poison",
    pic: 143, state: 3005, wait: 1, next: 329, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  329: { name: "poison",
    pic: 144, state: 3005, wait: 1, next: 357, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 80000, w: 5, zwidth: 2, h: 800, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 999, injury: 0, effect: 50
    }
  },
  335: { name: "smokes_cast",
    pic: 178, state: 18, wait: 1, next: 336, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 320, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  336: { name: "smokes",
    pic: 178, state: 18, wait: 1, next: 337, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 340, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  337: { name: "smokes",
    pic: 178, state: 18, wait: 1, next: 338, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 320, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  338: { name: "smokes",
    pic: 178, state: 18, wait: 1, next: 339, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 340, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  339: { name: "smokes",
    pic: 178, state: 18, wait: 1, next: 1000, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 110, action: 320, dvx: 10, dvy: 0, oid: 452, facing: 50
    }
  },
  340: { name: "smokes_cast2",
    pic: 178, state: 15, wait: 1, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "smokes",
    pic: 179, state: 15, wait: 1, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  342: { name: "smokes",
    pic: 180, state: 15, wait: 1, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  343: { name: "smokes",
    pic: 181, state: 15, wait: 1, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  344: { name: "smokes",
    pic: 182, state: 15, wait: 1, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  345: { name: "smokes",
    pic: 183, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  357: { name: "smoke_explode",
    pic: 108, state: 3005, wait: 1, next: 358, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "poison",
    pic: 104, state: 3005, wait: 1, next: 359, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 27, w: 22, zwidth: 8, h: 50, dvx: 10, dvy: 1, fall: 100, vrest: 40, bdefend: 16, injury: 40, effect: 2
    }
  },
  359: { name: "poison",
    pic: 105, state: 3005, wait: 1, next: 360, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 27, w: 22, zwidth: 8, h: 50, dvx: 10, dvy: 1, fall: 100, vrest: 40, bdefend: 16, injury: 40, effect: 2
    }
  },
  360: { name: "poison",
    pic: 106, state: 3005, wait: 1, next: 361, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 27, w: 22, zwidth: 8, h: 50, dvx: 10, dvy: 1, fall: 100, vrest: 40, bdefend: 16, injury: 40, effect: 2
    }
  },
  361: { name: "poison",
    pic: 107, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 27, w: 22, zwidth: 8, h: 50, dvx: 10, dvy: 1, fall: 100, vrest: 40, bdefend: 16, injury: 40, effect: 2
    }
  },
  365: { name: "sword",
    pic: 109, state: 3003, wait: 1, next: 366, dvx: 60, dvy: 550, dvz: 550, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 45, effect: 1
    }
  },
  366: { name: "sword",
    pic: 110, state: 3003, wait: 1, next: 367, dvx: 30, dvy: 550, dvz: 550, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 45, effect: 1
    }
  },
  367: { name: "sword",
    pic: 111, state: 3003, wait: 1, next: 366, dvx: 30, dvy: 550, dvz: 550, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 21, y: 22, w: 50, h: 9, zwidth: 11, dvx: 5, dvy: -10, vrest: 20, fall: 70, bdefend: 70, injury: 45, effect: 1
    }
  }
  }
});