define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/sand.png", w: 81, h: 82, row: 4, col: 3
      },
      {
        "file(12-20)": "sprite/spear.png", w: 230, h: 60, row: 3, col: 3
      },
      {
        "file(21-40)": "sprite/sys/zabuza2.png", w: 200, h: 206, row: 5, col: 4
      },
      {
        "file(41-56)": "sprite/sys/zabuza4.png", w: 200, h: 135, row: 4, col: 4
      },
      {
        "file(57-72)": "sprite/raikiri4.png", w: 425, h: 500, row: 3, col: 1
      },
      {
        "file(73-120)": "sprite/new.png", w: 200, h: 135, row: 4, col: 10
      }
    ],
    weapon_hit_sound: "1/001",
    weapon_drop_sound: "1/001",
    weapon_broken_sound: "1/008"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    }
  },
  4: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 5, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    }
  },
  5: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    },
    opoint: {
      kind: 1, x: 30, y: 70, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  6: { name: "flying x",
    pic: 9, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 15, dvy: -15, fall: 100, vrest: 10, bdefend: 100, injury: 75
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 40, h: 27
    }
  },
  10: { name: "hiting",
    pic: 2, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 3, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  20: { name: "hit",
    pic: 2, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 3, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  30: { name: "rebounding",
    pic: 2, state: 3001, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 3, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  35: { name: "spear_summon_sand",
    pic: 0, state: 3005, wait: 1, next: 36, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "spear_summon_sand",
    pic: 1, state: 3005, wait: 1, next: 37, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "spear_summon_sand",
    pic: 2, state: 3005, wait: 1, next: 38, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  38: { name: "spear_summon_sand",
    pic: 3, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 65, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  39: { name: "spear_summon_sand",
    pic: 999, state: 3005, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "spear_summon_sand",
    pic: 999, state: 3005, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 35, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  41: { name: "spear_summon_sand",
    pic: 999, state: 3005, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    opoint: {
      kind: 1, x: 30, y: 70, action: 35, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  42: { name: "spear_summon_sand",
    pic: 999, state: 3005, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 70, action: 35, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  43: { name: "spear_summon_sand",
    pic: 999, state: 3005, wait: 0, next: 44, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 70, y: 70, action: 35, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  44: { name: "spear_summon_sand",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 70, action: 35, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  45: { name: "spear",
    pic: 999, state: 3005, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "spear",
    pic: 999, state: 3005, wait: 3, next: 47, dvx: 0, dvy: 0, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 60, action: 40, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  47: { name: "spear",
    pic: 12, state: 3005, wait: 1, next: 48, dvx: 0, dvy: -1, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "spear",
    pic: 13, state: 3005, wait: 1, next: 49, dvx: 0, dvy: -1, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "spear",
    pic: 14, state: 3005, wait: 1, next: 50, dvx: 0, dvy: 550, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "spear",
    pic: 15, state: 3005, wait: 4, next: 51, dvx: 0, dvy: 550, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054"
  },
  51: { name: "spear",
    pic: 15, state: 15, wait: 2, next: 51, dvx: 60, dvy: 550, centerx: 115, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 72, y: 5, w: 146, h: 53, dvx: 5, dvy: -15, fall: 100, vrest: 20, bdefend: 100, injury: 85, effect: 1
    }
  },
  215: { name: "sands2",
    pic: 4, state: 3005, wait: 1, next: 216, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  216: { name: "sands2",
    pic: 5, state: 3005, wait: 1, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  217: { name: "sands2",
    pic: 6, state: 3005, wait: 1, next: 218, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  218: { name: "sands2",
    pic: 7, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 55, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  220: { name: "sands",
    pic: 4, state: 3005, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  221: { name: "sands",
    pic: 5, state: 3005, wait: 1, next: 222, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  222: { name: "sands",
    pic: 6, state: 3005, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  223: { name: "sands",
    pic: 7, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  224: { name: "water",
    pic: 21, state: 3005, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  225: { name: "water",
    pic: 22, state: 3005, wait: 1, next: 226, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 10, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 10, effect: 0
      }
    ]
  },
  226: { name: "water",
    pic: 23, state: 3005, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 15, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 15, effect: 0
      }
    ]
  },
  227: { name: "water",
    pic: 24, state: 3005, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 20, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 20, effect: 0
      }
    ]
  },
  228: { name: "water",
    pic: 25, state: 3005, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 20, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 20, effect: 0
      }
    ]
  },
  229: { name: "water",
    pic: 26, state: 3005, wait: 1, next: 230, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 25, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 25, effect: 0
      }
    ]
  },
  230: { name: "water",
    pic: 27, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 30, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 30, effect: 0
      }
    ]
  },
  231: { name: "water",
    pic: 28, state: 3005, wait: 1, next: 232, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      }
    ]
  },
  232: { name: "water",
    pic: 29, state: 3005, wait: 1, next: 233, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      }
    ]
  },
  233: { name: "water",
    pic: 30, state: 3005, wait: 1, next: 234, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      }
    ]
  },
  234: { name: "water",
    pic: 31, state: 3005, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      }
    ]
  },
  235: { name: "water",
    pic: 32, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 85, y: 0, w: 43, h: 175, dvx: 15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      },
      {
        kind: 0, x: 45, y: 0, w: 35, h: 175, dvx: -15, dvy: -5, zwidth: 15, fall: 100, vrest: 50, bdefend: 100, injury: 40, effect: 0
      }
    ]
  },
  236: { name: "water",
    pic: 25, state: 3005, wait: 1, next: 237, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  237: { name: "water",
    pic: 24, state: 3005, wait: 1, next: 238, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "water",
    pic: 23, state: 3005, wait: 1, next: 239, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  239: { name: "water",
    pic: 22, state: 3005, wait: 1, next: 240, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  240: { name: "water",
    pic: 21, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "sword",
    pic: 37, state: 3005, wait: 1, next: 242, dvx: 0, dvy: 0, centerx: 98, centery: 224, hit_a: 0, hit_d: 0, hit_j: 0
  },
  242: { name: "sword",
    pic: 38, state: 3005, wait: 1, next: 243, dvx: 0, dvy: 0, centerx: 98, centery: 224, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "sword",
    pic: 39, state: 3005, wait: 1, next: 244, dvx: 0, dvy: 0, centerx: 98, centery: 224, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "sword",
    pic: 40, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 98, centery: 224, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "kick",
    pic: 999, state: 9, wait: 0, next: 262, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 262, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 164, y: 95, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  262: { name: "combo1",
    pic: 999, state: 9, wait: 0, next: 263, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 184, y: 90, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  263: { name: "combo1",
    pic: 999, state: 9, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 204, y: 85, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  264: { name: "combo1",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 224, y: 90, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  265: { name: "last_stand",
    pic: 53, state: 3005, wait: 1, next: 265, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "last_stand2",
    pic: 54, state: 3005, wait: 1, next: 266, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "raikiri",
    pic: 57, state: 3005, wait: 0, next: 268, dvx: 550, dvy: 550, dvz: 550, centerx: 217, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  268: { name: "raikiri",
    pic: 58, state: 3005, wait: 0, next: 269, dvx: 550, dvy: 550, dvz: 550, centerx: 217, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "raikiri",
    pic: 59, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 217, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "fake",
    pic: 56, state: 3005, wait: 55, next: 271, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  271: { name: "fake",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  272: { name: "madara",
    pic: 999, state: 3005, wait: 1, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  273: { name: "madara",
    pic: 60, state: 3005, wait: 1, next: 274, dvx: 0, dvy: 0, centerx: 217, centery: 500, hit_a: 0, hit_d: 0, hit_j: 0
  },
  274: { name: "madara",
    pic: 61, state: 3005, wait: 1, next: 273, dvx: 0, dvy: 0, centerx: 217, centery: 500, hit_a: 0, hit_d: 0, hit_j: 0
  },
  275: { name: "madara",
    pic: 76, state: 3005, wait: 1, next: 276, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  276: { name: "madara",
    pic: 77, state: 3005, wait: 1, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  277: { name: "madara",
    pic: 77, state: 3005, wait: 8, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  278: { name: "cloak_itachi",
    pic: 74, state: 3005, wait: 2, next: 280, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  279: { name: "pain",
    pic: 75, state: 3005, wait: 1, next: 279, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  280: { name: "deidara",
    pic: 73, state: 3005, wait: 1, next: 280, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  281: { name: "naruto",
    pic: 72, state: 3005, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  282: { name: "haku",
    pic: 71, state: 3005, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  290: { name: "flying",
    pic: 60, state: 3003, wait: 2, next: 291, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0
  },
  291: { name: "flying",
    pic: 61, state: 3003, wait: 2, next: 292, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 107, w: 130, h: 100, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 2
    }
  },
  292: { name: "flying",
    pic: 67, state: 3003, wait: 2, next: 293, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 107, w: 130, h: 100, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 2
    }
  },
  293: { name: "flying",
    pic: 62, state: 3003, wait: 3, next: 294, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 107, w: 130, h: 100, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 2
    }
  },
  294: { name: "flying",
    pic: 63, state: 3003, wait: 3, next: 295, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 107, w: 130, h: 100, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 2
    }
  },
  295: { name: "flying",
    pic: 64, state: 3003, wait: 2, next: 296, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 107, w: 130, h: 100, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 2
    }
  },
  296: { name: "flying",
    pic: 65, state: 3003, wait: 2, next: 297, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 107, w: 130, h: 100, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 2
    }
  },
  297: { name: "flying",
    pic: 66, state: 3003, wait: 2, next: 1000, dvx: 23, dvy: 0, centerx: 98, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0
  },
  310: { name: "samehada",
    pic: 76, state: 3005, wait: 100, next: 311, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  311: { name: "samehada",
    pic: 77, state: 3005, wait: 100, next: 312, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "samehada",
    pic: 78, state: 3005, wait: 100, next: 313, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "samehada",
    pic: 79, state: 3005, wait: 100, next: 314, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  314: { name: "samehada",
    pic: 80, state: 3005, wait: 100, next: 315, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  315: { name: "samehada",
    pic: 81, state: 3005, wait: 100, next: 316, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  316: { name: "samehada",
    pic: 82, state: 3005, wait: 100, next: 317, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  317: { name: "samehada",
    pic: 83, state: 3005, wait: 100, next: 318, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  318: { name: "samehada",
    pic: 84, state: 3005, wait: 100, next: 319, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  319: { name: "samehada",
    pic: 85, state: 3005, wait: 100, next: 320, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  320: { name: "samehada",
    pic: 86, state: 3005, wait: 8, next: 321, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  321: { name: "samehada",
    pic: 87, state: 3005, wait: 4, next: 322, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005"
  },
  322: { name: "samehada",
    pic: 86, state: 3005, wait: 4, next: 323, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  323: { name: "samehada",
    pic: 87, state: 3005, wait: 4, next: 324, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  324: { name: "samehada",
    pic: 86, state: 3005, wait: 4, next: 325, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  325: { name: "samehada",
    pic: 87, state: 3005, wait: 4, next: 326, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  326: { name: "samehada",
    pic: 86, state: 3005, wait: 4, next: 327, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  327: { name: "samehada",
    pic: 88, state: 3005, wait: 3, next: 328, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  328: { name: "samehada",
    pic: 89, state: 3005, wait: 3, next: 329, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  329: { name: "samehada",
    pic: 90, state: 3005, wait: 3, next: 330, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  330: { name: "samehada",
    pic: 91, state: 3005, wait: 3, next: 331, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  331: { name: "samehada",
    pic: 92, state: 3005, wait: 3, next: 332, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  332: { name: "samehada",
    pic: 93, state: 3005, wait: 0, next: 333, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 97, action: 60, dvx: 0, dvy: 0, oid: 509, facing: 0
    }
  },
  333: { name: "samehada",
    pic: 93, state: 3005, wait: 1, next: 333, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: 111918, w: 100, h: 100, zwidth: 500, dvx: 334
    }
  },
  334: { name: "samehada",
    pic: 93, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "susanoo_arrow1",
    pic: 70, state: 15, wait: 2, next: 341, dvx: 50, dvy: 6, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 20, w: 100, h: 80, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 0
    }
  },
  341: { name: "susanoo_arrow1",
    pic: 94, state: 15, wait: 18, next: 342, dvx: 550, dvy: 550, centerx: 68, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 72, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  342: { name: "susanoo_arrow1",
    pic: 95, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, centerx: 68, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0
  },
  343: { name: "susanoo_arrow2",
    pic: 96, state: 15, wait: 5, next: 344, dvx: 80, dvy: 4, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 20, w: 100, h: 80, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 0
    }
  },
  344: { name: "susanoo_arrow2",
    pic: 97, state: 15, wait: 18, next: 345, dvx: 550, dvy: 550, centerx: 98, centery: 114, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 72, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  345: { name: "susanoo_arrow2",
    pic: 98, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, centerx: 98, centery: 114, hit_a: 0, hit_d: 0, hit_j: 0
  },
  346: { name: "susanoo_arrow3",
    pic: 99, state: 15, wait: 2, next: 347, dvx: 80, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 20, w: 160, h: 50, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 0
    }
  },
  347: { name: "susanoo_arrow3",
    pic: 99, state: 15, wait: 2, next: 347, dvx: 43, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 20, w: 160, h: 50, dvx: 10, dvy: -15, fall: 999, vrest: 10, bdefend: 16, injury: 100, effect: 0
    }
  },
  350: { name: "kisame_water_clone",
    pic: 44, state: 15, wait: 1, next: 351, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  351: { name: "kisame_water_clone",
    pic: 45, state: 15, wait: 1, next: 352, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  352: { name: "kisame_water_clone",
    pic: 46, state: 15, wait: 1, next: 353, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  353: { name: "kisame_water_clone",
    pic: 47, state: 15, wait: 1, next: 354, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  354: { name: "kisame_water_clone",
    pic: 48, state: 15, wait: 1, next: 355, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  355: { name: "kisame_water_clone",
    pic: 49, state: 15, wait: 1, next: 356, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  356: { name: "kisame_water_clone",
    pic: 50, state: 15, wait: 1, next: 357, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  357: { name: "kisame_water_clone",
    pic: 51, state: 15, wait: 1, next: 358, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "kisame_water_clone",
    pic: 52, state: 15, wait: 2, next: 359, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  359: { name: "kisame_water_clone",
    pic: 41, state: 15, wait: 1, next: 360, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 106, y: 86, w: 85, h: 70, dvx: 7, dvy: -19, vrest: 0, bdefend: 100, fall: 100, injury: 100, effect: 1
    }
  },
  360: { name: "kisame_water_clone",
    pic: 42, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 106, y: 86, w: 85, h: 70, dvx: 7, dvy: -19, vrest: 0, bdefend: 100, fall: 100, injury: 100, effect: 1
    }
  },
  361: { name: "kisame_water_clone",
    pic: 43, state: 15, wait: 3, next: 362, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  362: { name: "kisame_water_clone",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 98, y: 130, action: 60, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  363: { name: "kick",
    pic: 999, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 156, y: 86, w: 45, h: 70, zwidth: 20,
      catchingact: [261, 261], caughtact: [130, 130]
    }
  }
  }
});