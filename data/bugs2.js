define({
  bmp: {
    file: [
      {
        "file(0-20)": "sprite/bugs2.png", w: 105, h: 105, row: 4, col: 4
      }
    ],
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "start ",
    pic: 9, state: 3005, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      }
    ]
  },
  1: { name: "flying",
    pic: 10, state: 3005, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      }
    ]
  },
  2: { name: "flying",
    pic: 11, state: 3005, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      }
    ]
  },
  3: { name: "start ",
    pic: 9, state: 3005, wait: 1, next: 4, dvx: 0, dvy: 10, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      }
    ]
  },
  4: { name: "flying",
    pic: 10, state: 3005, wait: 1, next: 5, dvx: 0, dvy: 10, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      }
    ]
  },
  5: { name: "flying",
    pic: 11, state: 3005, wait: 1, next: 3, dvx: 0, dvy: 10, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 1, effect: 0
      }
    ]
  },
  10: { name: "hiting",
    pic: 12, state: 3001, wait: 1, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 13, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 14, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 12, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 12, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 13, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 14, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 12, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 14, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 12, state: 3005, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
    }
  },
  41: { name: "tail",
    pic: 13, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
    }
  },
  42: { name: "tail",
    pic: 14, state: 3005, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
    }
  },
  43: { name: "tail",
    pic: 12, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
    }
  },
  50: { name: "start",
    pic: 11, state: 3000, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_Fa: 3, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "start",
    pic: 11, state: 3000, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_Fa: 3, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 9, state: 3001, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
      }
    ]
  },
  61: { name: "hiting_ground",
    pic: 10, state: 3001, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
      }
    ]
  },
  62: { name: "hiting_ground",
    pic: 11, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
      },
      {
        kind: 0, x: 18, y: 30000, w: 62, h: 62, dvx: 0, dvy: -2, fall: 70, arest: 1, bdefend: 2, injury: 2, effect: 0
      }
    ]
  },
  65: { name: "up ",
    pic: 9, state: 3005, wait: 2, next: 66, dvx: 0, dvy: -2, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "up ",
    pic: 10, state: 3005, wait: 2, next: 67, dvx: 0, dvy: -2, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 333, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  67: { name: "up ",
    pic: 10, state: 3005, wait: 2, next: 68, dvx: 0, dvy: -3, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "up ",
    pic: 9, state: 3005, wait: 2, next: 69, dvx: 0, dvy: -2, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "up ",
    pic: 10, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 550, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "up ",
    pic: 10, state: 3005, wait: 2, next: 50, dvx: 0, dvy: 550, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "pillar",
    pic: 999, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "pillar",
    pic: 999, state: 3005, wait: 0, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -70, y: 100, action: 75, dvx: 0, dvy: 0, oid: 421, facing: 0
    }
  },
  73: { name: "pillar",
    pic: 999, state: 3005, wait: 0, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 51
  },
  75: { name: "pillar",
    pic: 3, state: 3005, wait: 1, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 333, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  76: { name: "pillar",
    pic: 4, state: 3005, wait: 0, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 53, y: 130, action: 80, dvx: 0, dvy: 0, oid: 421, facing: 0
    }
  },
  77: { name: "pillar",
    pic: 4, state: 3005, wait: 0, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 53, y: 90, action: 80, dvx: 0, dvy: 0, oid: 421, facing: 0
    }
  },
  78: { name: "pillar",
    pic: 4, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 53, y: 50, action: 80, dvx: 0, dvy: 0, oid: 421, facing: 0
    }
  },
  80: { name: "pillar",
    pic: 12, state: 3005, wait: 2, next: 81, dvx: 0, dvy: -2, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  81: { name: "pillar",
    pic: 14, state: 3005, wait: 2, next: 82, dvx: 0, dvy: -2, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  82: { name: "pillar",
    pic: 12, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: -2, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -8, fall: 70, arest: 1, bdefend: 2, injury: 6, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  85: { name: "fward1",
    pic: 9, state: 3003, wait: 3, next: 86, dvx: 15, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 2, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  86: { name: "fward1",
    pic: 10, state: 3003, wait: 3, next: 87, dvx: 15, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 2, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 43, y: 81, action: 333, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  87: { name: "fward1",
    pic: 11, state: 3003, wait: 3, next: 1000, dvx: 15, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 2, effect: 0
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  88: { name: "fward2",
    pic: 9, state: 3003, wait: 3, next: 89, dvx: 10, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 2, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  89: { name: "fward2",
    pic: 10, state: 3003, wait: 3, next: 90, dvx: 10, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 2, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  90: { name: "fward2",
    pic: 11, state: 3003, wait: 3, next: 1000, dvx: 10, dvy: 0, dvz: 0, centerx: 53, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 18, y: 19, w: 62, h: 62, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 2, effect: 5005
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  94: { name: "track_dis",
    pic: 15, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 56, w: 5, h: 300, dvx: 97
    }
  },
  95: { name: "track",
    pic: 15, state: 3005, wait: 1, next: 96, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 35, hit_a: 3, hit_d: 94, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 56, w: 5, h: 300, dvx: 97
    }
  },
  96: { name: "track",
    pic: 15, state: 3005, wait: 1, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 35, hit_a: 3, hit_d: 94, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 8, x: 56, w: 5, h: 300, dvx: 97
    }
  },
  97: { name: "track",
    pic: 15, state: 3005, wait: 0, next: 98, dvx: 550, dvy: 550, dvz: 550, centerx: 52, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "track",
    pic: 15, state: 3005, wait: 0, next: 99, dvx: 550, dvy: 550, dvz: 550, centerx: 52, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 52, y: 70, action: 100, dvx: 0, dvy: 0, oid: 421, facing: 30
    }
  },
  99: { name: "track",
    pic: 15, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 52, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 52, y: 70, action: 100, dvx: 0, dvy: 0, oid: 421, facing: 31
    }
  },
  100: { name: "tracking ",
    pic: 12, state: 3005, wait: 1, next: 101, dvx: 10, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 17, y: 31, w: 60, h: 43, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 9, effect: 0
      },
      {
        kind: 0, x: 17, y: 30000, w: 60, h: 43, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 9, effect: 0
      }
    ]
  },
  101: { name: "tracking ",
    pic: 13, state: 3005, wait: 1, next: 102, dvx: 10, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 17, y: 31, w: 60, h: 43, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 9, effect: 0
      },
      {
        kind: 0, x: 17, y: 30000, w: 60, h: 43, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 9, effect: 0
      }
    ]
  },
  102: { name: "tracking ",
    pic: 14, state: 3005, wait: 1, next: 1000, dvx: 10, dvy: 0, dvz: 0, centerx: 53, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 17, y: 31, w: 60, h: 43, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 9, effect: 0
      },
      {
        kind: 0, x: 17, y: 30000, w: 60, h: 43, dvx: 0, dvy: -5, fall: 70, arest: 1, bdefend: 1, injury: 9, effect: 0
      }
    ]
  }
  }
});