define({
  bmp: {
    file: [
      {
        "file(0-8)": "sprite/bugs1.png", w: 95, h: 55, row: 3, col: 3
      },
      {
        "file(9-20)": "sprite/bugs2.png", w: 105, h: 105, row: 4, col: 4
      }
    ],
    weapon_hit_sound: "1/insect",
    weapon_drop_sound: "1/insect",
    weapon_broken_sound: "1/insect"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3002, wait: 1, next: 1, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 50, y: 30, action: 70, dvx: 0, dvy: 0, oid: 228, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -5, fall: 20, vrest: 7, bdefend: 100, injury: 27, effect: 5005
    }
  },
  1: { name: "flying",
    pic: 1, state: 3002, wait: 1, next: 2, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 50, y: 30, action: 70, dvx: 0, dvy: 0, oid: 228, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -5, fall: 20, vrest: 7, bdefend: 100, injury: 27, effect: 5005
    }
  },
  2: { name: "flying",
    pic: 2, state: 3002, wait: 1, next: 3, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 50, y: 30, action: 70, dvx: 0, dvy: 0, oid: 228, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -5, fall: 20, vrest: 7, bdefend: 100, injury: 27, effect: 5005
    }
  },
  3: { name: "flying",
    pic: 1, state: 3002, wait: 1, next: 999, dvx: 10, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    opoint: {
      kind: 1, x: 50, y: 30, action: 70, dvx: 0, dvy: 0, oid: 228, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -5, fall: 20, vrest: 7, bdefend: 100, injury: 27, effect: 5005
    }
  },
  5: { name: "flying",
    pic: 2, state: 3002, wait: 1, next: 5, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    opoint: {
      kind: 1, x: 30, y: 30, action: 70, dvx: 0, dvy: 0, oid: 228, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -5, fall: 20, vrest: 7, bdefend: 100, injury: 27, effect: 5005
    }
  },
  10: { name: "hiting",
    pic: 999, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "hiting",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 0, state: 3002, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 3, state: 3002, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 13, bdefend: 100, injury: 15, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  41: { name: "tail",
    pic: 4, state: 3002, wait: 0, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 13, bdefend: 100, injury: 15, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  42: { name: "tail",
    pic: 5, state: 3002, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 13, bdefend: 100, injury: 15, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  43: { name: "tail",
    pic: 4, state: 3002, wait: 0, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 1, vrest: 13, bdefend: 100, injury: 15, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  44: { name: "tail",
    pic: 6, state: 3002, wait: 0, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "tail",
    pic: 6, state: 3002, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "tail",
    pic: 7, state: 3002, wait: 0, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "tail",
    pic: 7, state: 3002, wait: 0, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "tail",
    pic: 8, state: 3002, wait: 0, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "tail",
    pic: 8, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 100, state: 3002, wait: 1, next: 51, dvx: 3, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 100, state: 3002, wait: 1, next: 52, dvx: 2, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "start",
    pic: 100, state: 3002, wait: 1, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 100, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "flying",
    pic: 100, state: 3002, wait: 0, next: 71, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  71: { name: "flying",
    pic: 100, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3
  },
  72: { name: "flying",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  80: { name: "up_atk",
    pic: 13, state: 3005, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "up_atk",
    pic: 14, state: 3005, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 333, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  82: { name: "up_atk",
    pic: 15, state: 3002, wait: 1, next: 83, dvx: 0, dvy: -3, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 8, y: 3, w: 84, h: 89, dvx: 8, dvy: -10, fall: 100, arest: 1, bdefend: 20, injury: 15, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  83: { name: "up_atk",
    pic: 16, state: 3002, wait: 1, next: 84, dvx: -3, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 8, y: 3, w: 84, h: 89, dvx: 8, dvy: -10, fall: 100, arest: 1, bdefend: 20, injury: 15, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  84: { name: "up_atk",
    pic: 17, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "replacement",
    pic: 9, state: 3005, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "replacement",
    pic: 10, state: 3005, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 333, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  87: { name: "replacement",
    pic: 11, state: 3005, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "replacement",
    pic: 12, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "bugs_ground",
    pic: 6, state: 3005, wait: 1, next: 91, dvx: 8, dvy: 0, dvz: 0, centerx: 52, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14
  },
  91: { name: "bugs_ground",
    pic: 7, state: 3005, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14
  },
  92: { name: "bugs_ground",
    pic: 8, state: 3005, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14
  },
  95: { name: "air_atk",
    pic: 3, state: 3002, wait: 2, next: 96, dvx: 5, dvy: 1, dvz: 0, centerx: 52, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 15, w: 75, h: 30, dvx: 8, dvy: 0, fall: 100, arest: 1, bdefend: 20, injury: 35, effect: 0
    }
  },
  96: { name: "air_atk",
    pic: 4, state: 3002, wait: 2, next: 97, dvx: 5, dvy: 1, dvz: 0, centerx: 52, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 333, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    itr: {
      kind: 0, x: 10, y: 15, w: 75, h: 30, dvx: 8, dvy: 0, fall: 100, arest: 1, bdefend: 20, injury: 35, effect: 0
    }
  },
  97: { name: "air_atk",
    pic: 6, state: 3002, wait: 2, next: 1000, dvx: 5, dvy: 1, dvz: 0, centerx: 52, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 15, w: 75, h: 30, dvx: 8, dvy: 0, fall: 100, arest: 1, bdefend: 20, injury: 35, effect: 0
    }
  },
  100: { name: "hell",
    pic: 0, state: 3000, wait: 0, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 6, hit_d: 10, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    }
  },
  101: { name: "hell",
    pic: 1, state: 3000, wait: 0, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    }
  },
  102: { name: "hell",
    pic: 2, state: 3000, wait: 0, next: 100, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    }
  },
  105: { name: "hell",
    pic: 0, state: 3003, wait: 0, next: 106, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 20, hit_d: 100, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 100, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  106: { name: "hell",
    pic: 1, state: 3003, wait: 0, next: 107, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 100, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  107: { name: "hell",
    pic: 2, state: 3003, wait: 0, next: 105, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 100, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  108: { name: "hell",
    pic: 2, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 100, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  110: { name: "crawl",
    pic: 6, state: 3003, wait: 1, next: 111, dvx: 0, dvy: 0, centerx: 48, centery: 40, hit_a: 3, hit_d: 113, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 20, y: 16, w: 48, h: 28, dvx: -8, dvy: -8, fall: 5, arest: 1, bdefend: 2, injury: 7, effect: 0
    }
  },
  111: { name: "crawl",
    pic: 7, state: 3003, wait: 2, next: 112, dvx: 0, dvy: 0, centerx: 48, centery: 40, hit_a: 3, hit_d: 113, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 20, y: 30000, w: 48, h: 28, dvx: -8, dvy: -8, fall: 5, arest: 1, bdefend: 2, injury: 7, effect: 0
    }
  },
  112: { name: "crawl",
    pic: 8, state: 3003, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 48, centery: 40, hit_a: 3, hit_d: 113, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 20, y: 16, w: 48, h: 28, dvx: -8, dvy: -8, fall: 5, arest: 1, bdefend: 2, injury: 7, effect: 0
    }
  },
  113: { name: "crawl",
    pic: 12, state: 3003, wait: 2, next: 1000, dvx: 550, dvy: 0, centerx: 52, centery: 105, hit_a: 8, hit_d: 113, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 20, y: 16, w: 48, h: 28, dvx: -8, dvy: -8, fall: 5, arest: 1, bdefend: 2, injury: 7, effect: 0
    }
  },
  115: { name: "hell",
    pic: 0, state: 3005, wait: 0, next: 116, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 23, hit_d: 108, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 120, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  116: { name: "hell",
    pic: 1, state: 3005, wait: 0, next: 117, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 23, hit_d: 108, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 120, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  117: { name: "hell",
    pic: 2, state: 3005, wait: 0, next: 115, dvx: 0, dvy: -1, dvz: 0, centerx: 30, centery: 30, hit_a: 23, hit_d: 108, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    },
    opoint: {
      kind: 1, x: 65, y: 85, action: 120, dvx: 0, dvy: 0, oid: 228, facing: 0
    }
  },
  120: { name: "hell",
    pic: 0, state: 3005, wait: 0, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 23, hit_d: 108, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    }
  },
  121: { name: "hell",
    pic: 1, state: 3005, wait: 0, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 23, hit_d: 108, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    }
  },
  122: { name: "hell",
    pic: 2, state: 3005, wait: 0, next: 120, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 30, hit_a: 23, hit_d: 108, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 20, vrest: 13, bdefend: 100, injury: 5, effect: 5005
    }
  }
  }
});