define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/coffin.png", w: 159, h: 159, row: 5, col: 4
      },
      {
        "file(20-50)": "sprite/chidori_2.png", w: 159, h: 159, row: 5, col: 4
      }
    ],
    weapon_hit_sound: "1/033"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3003, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 3003, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "flying",
    pic: 2, state: 3003, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "flying",
    pic: 3, state: 3003, wait: 2, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "flying",
    pic: 4, state: 3003, wait: 3, next: 5, dvx: 0, dvz: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "flying",
    pic: 5, state: 3003, wait: 9, next: 1000, dvx: 0, dvz: 0, dvy: 0, centerx: 78, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying x",
    pic: 0, state: 3005, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 5, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 6, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 6, state: 3001, wait: 4, next: 12, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 100, action: 110, dvx: 0, dvy: 0, oid: 440, facing: 20
    }
  },
  12: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 8, state: 3001, wait: 1, next: 14, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "hiting",
    pic: 9, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 6, state: 3002, wait: 4, next: 21, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 9, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 6, state: 3000, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3000, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "chidori current",
    pic: 10, state: 3003, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 23, y: 18, w: 120, h: 150, dvx: 0, dvy: -17, fall: 1, vrest: 17, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  51: { name: "chidori current",
    pic: 11, state: 3003, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 23, y: 18, w: 120, h: 150, dvx: 0, dvy: -17, fall: 1, vrest: 17, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  52: { name: "chidori current",
    pic: 12, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 23, y: 18, w: 120, h: 150, dvx: 0, dvy: -17, fall: 1, vrest: 17, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  55: { name: "sand_spike",
    pic: 13, state: 3003, wait: 0, next: 56, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "sand_spike",
    pic: 14, state: 3003, wait: 0, next: 57, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "sand_spike",
    pic: 15, state: 3003, wait: 3, next: 58, dvx: 0, dvy: 0, centerx: 76, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 23, y: 18, w: 120, h: 150, zwidth: 25, dvx: 0, dvy: -15, fall: 100, vrest: 17, bdefend: 100, injury: 50, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  58: { name: "sand_spike",
    pic: 16, state: 3003, wait: 1, next: 59, dvx: 0, dvy: 0, centerx: 76, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "sand_spike",
    pic: 17, state: 3003, wait: 1, next: 60, dvx: 0, dvy: 0, centerx: 76, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "sand_spike",
    pic: 18, state: 3003, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 76, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "sand_spike",
    pic: 19, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 76, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "chidori current2",
    pic: 20, state: 18, wait: 0, next: 66, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 7, effect: 1
    }
  },
  66: { name: "chidori current2",
    pic: 21, state: 18, wait: 0, next: 67, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 7, effect: 1
    }
  },
  67: { name: "chidori current2",
    pic: 22, state: 18, wait: 0, next: 68, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 7, effect: 1
    }
  },
  68: { name: "chidori current2",
    pic: 20, state: 18, wait: 0, next: 69, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 7, effect: 1
    }
  },
  69: { name: "chidori current2",
    pic: 21, state: 18, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 7, effect: 1
    }
  },
  70: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 72, dvx: 0, dvy: 0, oid: 226, facing: 1
    }
  },
  72: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 80, dvx: 0, dvy: 0, oid: 226, facing: 1
    }
  },
  74: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 76, dvx: 0, dvy: 0, oid: 226, facing: 1
    }
  },
  75: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 78, dvx: 0, dvy: 0, oid: 226, facing: 1
    }
  },
  76: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  77: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 81, dvx: 0, dvy: 0, oid: 226, facing: 1
    }
  },
  78: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  79: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 82, dvx: 0, dvy: 0, oid: 226, facing: 1
    }
  },
  80: { name: "sandstorm",
    pic: 100, state: 3005, wait: 2, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "sandstorm (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 0, action: 65, dvx: 0, dvy: 0, oid: 226, facing: 0
    }
  },
  85: { name: "slash_effect",
    pic: 27, state: 3003, wait: 1, next: 86, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  86: { name: "slash_effect",
    pic: 23, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 60, y: 159, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  87: { name: "slash_effect",
    pic: 24, state: 3003, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  88: { name: "slash_effect",
    pic: 25, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 60, y: 159, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  89: { name: "slash_effect",
    pic: 26, state: 3003, wait: 1, next: 90, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  90: { name: "slash_effect",
    pic: 27, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 18, w: 170, h: 150, zwidth: 25, dvx: 0, dvy: -10, fall: 60, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ],
    opoint: {
      kind: 1, x: 60, y: 159, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  95: { name: "dog",
    pic: 28, state: 3003, wait: 1, next: 96, dvx: 550, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "dog",
    pic: 29, state: 3003, wait: 5, next: 1000, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 75, y: 85, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  97: { name: "dog",
    pic: 999, state: 3003, wait: 0, next: 98, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "dog",
    pic: 36, state: 3003, wait: 1, next: 99, dvx: 5, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  99: { name: "dog",
    pic: 30, state: 3003, wait: 0, next: 100, dvx: 7, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "dog",
    pic: 31, state: 3003, wait: 0, next: 101, dvx: 5, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "dog",
    pic: 32, state: 3003, wait: 0, next: 102, dvx: 5, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "gatsuga",
    pic: 33, state: 3003, wait: 0, next: 103, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    },
    opoint: {
      kind: 1, x: 75, y: 100, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  103: { name: "gatsuga",
    pic: 34, state: 3003, wait: 0, next: 104, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  104: { name: "gatsuga",
    pic: 35, state: 3003, wait: 0, next: 105, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  105: { name: "gatsuga",
    pic: 33, state: 3003, wait: 0, next: 106, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    },
    opoint: {
      kind: 1, x: 75, y: 100, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  106: { name: "gatsuga",
    pic: 34, state: 3003, wait: 0, next: 107, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  107: { name: "gatsuga",
    pic: 35, state: 3003, wait: 0, next: 108, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  108: { name: "gatsuga",
    pic: 33, state: 3003, wait: 0, next: 109, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    },
    opoint: {
      kind: 1, x: 75, y: 100, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  109: { name: "gatsuga",
    pic: 34, state: 3003, wait: 0, next: 110, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  110: { name: "gatsuga",
    pic: 35, state: 3003, wait: 0, next: 111, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  111: { name: "gatsuga",
    pic: 33, state: 3003, wait: 0, next: 112, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    },
    opoint: {
      kind: 1, x: 75, y: 100, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  112: { name: "gatsuga",
    pic: 34, state: 3003, wait: 0, next: 113, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  113: { name: "gatsuga",
    pic: 35, state: 3003, wait: 0, next: 114, dvx: 35, dvy: 0, dvz: 2, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 40, y: 85, w: 115, h: 70, dvx: -2, vrest: 4, bdefend: 16, fall: 60, injury: 35, effect: 1
    }
  },
  114: { name: "dog",
    pic: 33, state: 3003, wait: 0, next: 115, dvx: 35, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "dog",
    pic: 34, state: 3003, wait: 0, next: 116, dvx: 35, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "dog",
    pic: 35, state: 3003, wait: 0, next: 117, dvx: 35, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "dog",
    pic: 33, state: 3003, wait: 0, next: 118, dvx: 35, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "dog",
    pic: 34, state: 3003, wait: 0, next: 119, dvx: 35, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "dog",
    pic: 35, state: 3003, wait: 0, next: 120, dvx: 35, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "dog",
    pic: 28, state: 3003, wait: 3, next: 121, dvx: 550, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "dog",
    pic: 29, state: 3003, wait: 5, next: 122, dvx: 0, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "dog",
    pic: 36, state: 3003, wait: 1, next: 1000, dvx: 5, dvy: 0, centerx: 75, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  130: { name: "wood",
    pic: 23, state: 3003, wait: 1, next: 131, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 54, y: 125, w: 55, h: 34, dvx: -3, dvy: -20, fall: 100, vrest: 10, bdefend: 70, injury: 75, effect: 0
    }
  },
  131: { name: "wood",
    pic: 24, state: 3003, wait: 1, next: 132, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 56, y: 93, w: 50, h: 63, dvx: -3, dvy: -20, fall: 100, vrest: 10, bdefend: 70, injury: 75, effect: 0
    }
  },
  132: { name: "wood",
    pic: 25, state: 3003, wait: 2, next: 133, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 52, y: 68, w: 56, h: 91, dvx: 0, dvy: -20, fall: 100, vrest: 10, bdefend: 70, injury: 75, effect: 0
    }
  },
  133: { name: "wood",
    pic: 24, state: 3003, wait: 0, next: 134, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "wood",
    pic: 23, state: 3003, wait: 0, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});