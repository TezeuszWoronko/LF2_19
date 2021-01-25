define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/sand.png", w: 81, h: 82, row: 4, col: 3
      },
      {
        "file(12-40)": "sprite/sand3.png", w: 81, h: 82, row: 4, col: 7
      },
      {
        "file(41-99)": "sprite/sand_wave.png", w: 325, h: 278, row: 4, col: 2
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 4, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 5, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 6, state: 3000, wait: 1, next: 3, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 7, state: 3000, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  4: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    },
    opoint: {
      kind: 1, x: 30, y: 70, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  10: { name: "hiting",
    pic: 7, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 8, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  20: { name: "hit",
    pic: 7, state: 3002, wait: 0, next: 21, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 8, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  30: { name: "rebounding",
    pic: 7, state: 3001, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 8, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  40: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 42, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  42: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 50, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  44: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 46, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  45: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 48, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  46: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  47: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 51, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  48: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  49: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 52, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  50: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 2, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "sandstorm2 (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 0, action: 60, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  60: { name: "flying",
    pic: 4, state: 3000, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 25
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  61: { name: "flying",
    pic: 5, state: 3000, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 25
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  62: { name: "flying",
    pic: 6, state: 3000, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 25
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  63: { name: "flying",
    pic: 7, state: 3000, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 25
    },
    opoint: {
      kind: 1, x: 60, y: 72, action: 70, dvx: 0, dvy: 0, oid: 412, facing: 0
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  64: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 16, injury: 25
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  70: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 72, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  72: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 80, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  74: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 76, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  75: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 78, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  76: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  77: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 81, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  78: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  79: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 82, dvx: 0, dvy: 0, oid: 412, facing: 1
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
      kind: 1, x: 60, y: 0, action: 85, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  85: { name: "flying",
    pic: 4, state: 3000, wait: 1, next: 86, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  86: { name: "flying",
    pic: 5, state: 3000, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  87: { name: "flying",
    pic: 6, state: 3000, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  88: { name: "flying",
    pic: 7, state: 3000, wait: 1, next: 89, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  89: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 50, vrest: 10, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  90: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 92, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  92: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 100, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  94: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 96, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  95: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 98, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  96: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  97: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 101, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  98: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  99: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 102, dvx: 0, dvy: 0, oid: 412, facing: 1
    }
  },
  100: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "sandstorm2 ",
    pic: 100, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "sandstorm2 (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 0, action: 345, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  105: { name: "pein_shock",
    pic: 12, state: 3005, wait: 1, next: 106, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 72, hit_a: 10, hit_d: 109, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 100, h: 90, dvx: 10, dvy: -15, fall: 100, vrest: 7, bdefend: 100, injury: 25
      },
      {
        kind: 15, x: 50, y: 0, w: 100, h: 89, zwidth: 50, fall: 0, vrest: 1, bdefend: 0
      }
    ]
  },
  106: { name: "pein_shock",
    pic: 13, state: 3005, wait: 1, next: 107, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 72, hit_a: 10, hit_d: 109, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 100, h: 90, dvx: 10, dvy: -15, fall: 100, vrest: 7, bdefend: 100, injury: 25
      },
      {
        kind: 15, x: -100, y: 0, w: 200, h: 89, zwidth: 50, fall: 0, vrest: 1, bdefend: 0
      }
    ]
  },
  107: { name: "pein_shock",
    pic: 14, state: 3005, wait: 1, next: 108, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 72, hit_a: 10, hit_d: 109, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 100, h: 90, dvx: 10, dvy: -15, fall: 100, vrest: 7, bdefend: 100, injury: 25
      },
      {
        kind: 15, x: 0, y: 0, w: 50, h: 89, zwidth: 50, fall: 0, vrest: 1, bdefend: 0
      }
    ]
  },
  108: { name: "pein_shock",
    pic: 999, state: 3005, wait: 1, next: 105, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 72, hit_a: 10, hit_d: 109, hit_j: 0
  },
  109: { name: "pein_shock",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "sword_oro",
    pic: 16, state: 3005, wait: 1, next: 111, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "sword_oro",
    pic: 17, state: 3005, wait: 1, next: 112, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  112: { name: "sword_oro",
    pic: 18, state: 3005, wait: 1, next: 113, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  113: { name: "flying",
    pic: 19, state: 3005, wait: 2, next: 114, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  114: { name: "flying",
    pic: 20, state: 3005, wait: 1, next: 115, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  115: { name: "flying",
    pic: 21, state: 3005, wait: 1, next: 116, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  116: { name: "flying",
    pic: 22, state: 3005, wait: 1, next: 117, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  117: { name: "flying",
    pic: 23, state: 3005, wait: 1, next: 118, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  118: { name: "flying",
    pic: 24, state: 3005, wait: 1, next: 119, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  119: { name: "flying",
    pic: 25, state: 3005, wait: 1, next: 120, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: -3, dvy: -3, fall: 70, vrest: 3, bdefend: 100, injury: 18, effect: 1
    }
  },
  120: { name: "flying",
    pic: 26, state: 3005, wait: 1, next: 121, dvx: 2, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: 15, dvy: -5, fall: 100, vrest: 3, bdefend: 100, injury: 20, effect: 1
    }
  },
  121: { name: "flying",
    pic: 27, state: 3005, wait: 2, next: 122, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "flying",
    pic: 28, state: 3005, wait: 1, next: 123, dvx: 3, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: 15, dvy: -5, fall: 100, vrest: 3, bdefend: 100, injury: 20, effect: 1
    }
  },
  123: { name: "flying",
    pic: 29, state: 3005, wait: 2, next: 124, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "flying",
    pic: 30, state: 3005, wait: 1, next: 125, dvx: 3, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 40, y: 34, w: 35, h: 14, dvx: 15, dvy: -5, fall: 100, vrest: 3, bdefend: 100, injury: 20, effect: 1
    }
  },
  125: { name: "flying",
    pic: 31, state: 3005, wait: 1, next: 126, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "flying",
    pic: 32, state: 3005, wait: 1, next: 127, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "flying",
    pic: 33, state: 3005, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "flying",
    pic: 34, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "flying",
    pic: 36, state: 3005, wait: 1, next: 131, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "flying",
    pic: 37, state: 3005, wait: 1, next: 132, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "flying",
    pic: 38, state: 3005, wait: 1, next: 133, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "flying",
    pic: 39, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "flying",
    pic: 4, state: 3000, wait: 1, next: 136, dvx: 14, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: 1, fall: 50, vrest: 10, bdefend: 16, injury: 0
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  136: { name: "flying",
    pic: 5, state: 3000, wait: 1, next: 137, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: 1, fall: 50, vrest: 10, bdefend: 16, injury: 0
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  137: { name: "flying",
    pic: 6, state: 3000, wait: 1, next: 138, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: 1, fall: 50, vrest: 10, bdefend: 16, injury: 0
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    },
    opoint: {
      kind: 1, x: 60, y: 70, action: 0, dvx: 13, dvy: 0, oid: 412, facing: 0
    }
  },
  138: { name: "flying",
    pic: 7, state: 3000, wait: 1, next: 139, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: 1, fall: 50, vrest: 10, bdefend: 16, injury: 0
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  139: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 135, dvx: 0, dvy: 0, centerx: 29, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: 1, fall: 50, vrest: 10, bdefend: 16, injury: 0
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  140: { name: "SAND",
    pic: 12, state: 3003, wait: 2, next: 141, dvx: 5, dvy: 550, dvz: 550, centerx: 29, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 50, w: 60, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  141: { name: "SAND",
    pic: 13, state: 3003, wait: 2, next: 142, dvx: 0, dvy: 550, dvz: 550, centerx: 29, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 50, w: 60, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  142: { name: "SAND",
    pic: 14, state: 3003, wait: 40, next: 143, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 50, w: 60, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  143: { name: "SAND",
    pic: 15, state: 3003, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 29, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 50, w: 60, h: 999, zwidth: 6, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 0, effect: 5
    }
  },
  145: { name: "paralyze",
    pic: 999, state: 15, wait: 0, next: 146, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "paralyze",
    pic: 999, state: 15, wait: 6, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 20, y: 50, w: 135, h: 999, zwidth: 30,
      catchingact: [147, 147], caughtact: [130, 130]
    }
  },
  147: { name: "hiting2",
    pic: 999, state: 9, wait: 11, next: 148, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 130, y: -30, injury: 4, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  148: { name: "hiting2",
    pic: 999, state: 9, wait: 10, next: 149, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 130, y: -30, injury: 4, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  149: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 150, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 130, y: -30, injury: 110, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  150: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 1000, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 130, y: -30, injury: 4, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    }
  },
  151: { name: "sand_wave",
    pic: 40, state: 3005, wait: 3, next: 152, dvx: 0, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "sand_wave",
    pic: 41, state: 3005, wait: 3, next: 153, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 240, w: 230, h: 80, dvx: 12, dvy: -10, fall: 60, vrest: 3, bdefend: 100, injury: 58, effect: 0
    }
  },
  153: { name: "sand_wave",
    pic: 42, state: 3005, wait: 3, next: 154, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 240, w: 230, h: 80, dvx: 12, dvy: -10, fall: 60, vrest: 3, bdefend: 100, injury: 58, effect: 0
    }
  },
  154: { name: "sand_wave",
    pic: 43, state: 3005, wait: 3, next: 155, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 240, w: 230, h: 80, dvx: 12, dvy: -10, fall: 60, vrest: 3, bdefend: 100, injury: 58, effect: 0
    }
  },
  155: { name: "sand_wave",
    pic: 44, state: 3005, wait: 3, next: 156, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 240, w: 230, h: 80, dvx: 12, dvy: -10, fall: 60, vrest: 3, bdefend: 100, injury: 58, effect: 0
    }
  },
  156: { name: "sand_wave",
    pic: 44, state: 3005, wait: 0, next: 157, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 240, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  157: { name: "sand_wave",
    pic: 44, state: 3005, wait: 0, next: 158, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 240, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  158: { name: "sand_wave",
    pic: 44, state: 3005, wait: 0, next: 159, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 240, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  159: { name: "sand_wave",
    pic: 44, state: 3005, wait: 0, next: 160, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 180, y: 240, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  160: { name: "sand_wave",
    pic: 45, state: 3005, wait: 3, next: 1000, dvx: 2, dvy: 0, centerx: 29, centery: 242, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 180, y: 240, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  }
  }
});