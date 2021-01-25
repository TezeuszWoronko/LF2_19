define({
  bmp: {
    file: [
      {
        "file(0-1)": "sprite/manda1.png", w: 740, h: 395, row: 1, col: 2
      },
      {
        "file(2-3)": "sprite/manda3.png", w: 740, h: 395, row: 1, col: 2
      },
      {
        "file(4-7)": "sprite/julian_col.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(8-11)": "sprite/julian_col2.png", w: 159, h: 404, row: 4, col: 1
      },
      {
        "file(12-15)": "sprite/kyubi_ex.png", w: 322, h: 293, row: 2, col: 2
      },
      {
        "file(16-17)": "sprite/manda2.png", w: 740, h: 395, row: 1, col: 2
      }
    ]
  },
  frame: {
  0: { name: "manda_stance",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 300, h: 500, zwidth: 25, dvx: 0, arest: 20, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  1: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 2, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  2: { name: "manda_stance",
    pic: 1, state: 3000, wait: 5, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 271, centery: 391, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  3: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 4, dvx: 550, dvy: 550, dvz: 550, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  4: { name: "manda_stance",
    pic: 0, state: 3000, wait: 5, next: 5, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 300, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  5: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 6, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  6: { name: "manda_stance",
    pic: 1, state: 3000, wait: 5, next: 7, dvx: 550, dvy: 550, dvz: 0, centerx: 271, centery: 391, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  7: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 365, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  8: { name: "manda_back",
    pic: 0, state: 3000, wait: 2, next: 9, dvx: 550, dvy: 550, dvz: 550, centerx: 290, centery: 390, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 300, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  9: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 15, dvx: 550, dvy: 550, dvz: 550, centerx: 320, centery: 390, hit_a: 0, hit_d: 0, hit_j: 51,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  10: { name: "manda_atk1",
    pic: 3, state: 3003, wait: 1, next: 240, dvx: 550, dvy: 550, dvz: 550, centerx: 263, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "manda_atk1",
    pic: 39, state: 3003, wait: 3, next: 75, dvx: 550, dvy: 550, dvz: 550, centerx: 273, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "manda_atk1",
    pic: 38, state: 3003, wait: 1, next: 14, dvx: 550, dvy: 550, dvz: 550, centerx: 233, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "manda_atk1",
    pic: 38, state: 3003, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 223, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 16, dvx: 550, dvy: 550, dvz: 0, centerx: 340, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  16: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 17, dvx: 550, dvy: 550, dvz: 0, centerx: 360, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  17: { name: "manda_back",
    pic: 0, state: 3000, wait: 2, next: 18, dvx: 550, dvy: 550, dvz: 0, centerx: 380, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  18: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 19, dvx: 550, dvy: 550, dvz: 0, centerx: 400, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  19: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 65, dvx: 550, dvy: 550, dvz: 0, centerx: 420, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  20: { name: "manda_injured",
    pic: 17, state: 3003, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 1, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "manda_stance",
    pic: 0, state: 3000, wait: 5, next: 8, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 300, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  30: { name: "manda_injured",
    pic: 17, state: 3003, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 1, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "manda_ground",
    pic: 599, state: 400, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "manda_ground",
    pic: 599, state: 3005, wait: 1, next: 35, dvx: 120, dvy: 0, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "manda_ground",
    pic: 42, state: 3003, wait: 1, next: 36, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "manda_ground",
    pic: 41, state: 3003, wait: 1, next: 37, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "manda_ground",
    pic: 43, state: 3003, wait: 1, next: 38, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0
  },
  38: { name: "manda_ground",
    pic: 44, state: 3003, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "col",
    pic: 4, state: 18, wait: 3, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  41: { name: "col",
    pic: 5, state: 18, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  42: { name: "col",
    pic: 6, state: 18, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  43: { name: "col",
    pic: 5, state: 18, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  44: { name: "col",
    pic: 6, state: 18, wait: 0, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  45: { name: "col",
    pic: 7, state: 18, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  46: { name: "col",
    pic: 6, state: 18, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  47: { name: "col",
    pic: 7, state: 18, wait: 0, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 135, zwidth: 37, effect: 2
    }
  },
  48: { name: "col",
    pic: 8, state: 15, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "col",
    pic: 9, state: 15, wait: 0, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "col",
    pic: 10, state: 15, wait: 0, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "col",
    pic: 11, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "kcol",
    pic: 12, state: 18, wait: 2, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 172, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    }
  },
  56: { name: "kcol",
    pic: 13, state: 18, wait: 0, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 185, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    },
    opoint: {
      kind: 1, x: 50, y: 287, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  57: { name: "kcol",
    pic: 13, state: 18, wait: 0, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 185, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    },
    opoint: {
      kind: 1, x: 150, y: 287, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  58: { name: "kcol",
    pic: 13, state: 18, wait: 0, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 185, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    },
    opoint: {
      kind: 1, x: 260, y: 287, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  59: { name: "kcol",
    pic: 14, state: 18, wait: 2, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 250, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    }
  },
  60: { name: "kcol",
    pic: 15, state: 18, wait: 3, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 293, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    }
  },
  61: { name: "kcol",
    pic: 14, state: 18, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 322, h: 250, dvx: -10, dvy: -35, fall: 100, vrest: 30, bdefend: 100, injury: 105, zwidth: 37, effect: 0
    }
  },
  62: { name: "kcol",
    pic: 13, state: 3006, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 161, centery: 293, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 66, dvx: 550, dvy: 550, dvz: 0, centerx: 440, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  66: { name: "manda_back",
    pic: 0, state: 3000, wait: 2, next: 67, dvx: 550, dvy: 550, dvz: 0, centerx: 460, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  67: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 68, dvx: 550, dvy: 550, dvz: 0, centerx: 480, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  68: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 69, dvx: 550, dvy: 550, dvz: 0, centerx: 490, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  69: { name: "manda_back",
    pic: 0, state: 3000, wait: 2, next: 70, dvx: 550, dvy: 550, dvz: 0, centerx: 510, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  70: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 71, dvx: 550, dvy: 550, dvz: 0, centerx: 530, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  71: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 72, dvx: 550, dvy: 550, dvz: 0, centerx: 550, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  72: { name: "manda_back",
    pic: 0, state: 3000, wait: 2, next: 73, dvx: 550, dvy: 550, dvz: 0, centerx: 570, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  73: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 74, dvx: 550, dvy: 550, dvz: 0, centerx: 590, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  74: { name: "manda_back",
    pic: 2, state: 3000, wait: 2, next: 75, dvx: 550, dvy: 550, dvz: 0, centerx: 610, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  75: { name: "manda_back",
    pic: 0, state: 3000, wait: 2, next: 76, dvx: 550, dvy: 550, dvz: 0, centerx: 630, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  76: { name: "manda_back",
    pic: 599, state: 3000, wait: 5, next: 77, dvx: 550, dvy: 550, dvz: 0, centerx: 630, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  77: { name: "manda_back_summon",
    pic: 599, state: 3005, wait: 25, next: 344, dvx: 550, dvy: 550, dvz: 0, centerx: 630, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    opoint: {
      kind: 1, x: 39, y: 85, action: 35, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  240: { name: "manda_atk1",
    pic: 3, state: 3000, wait: 1, next: 241, dvx: 550, dvy: 550, dvz: 550, centerx: 253, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "manda_atk1",
    pic: 2, state: 3000, wait: 0, next: 242, dvx: 550, dvy: 550, dvz: 550, centerx: 273, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  242: { name: "manda_atk1",
    pic: 2, state: 8030, wait: 3, next: 1, dvx: -40, dvy: 550, dvz: 550, centerx: 273, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  344: { name: "manda_back_tack",
    pic: 999, state: 8062, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 0, centerx: 630, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  346: { name: "manda",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 550, dvy: 550, dvz: 550, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0
  },
  351: { name: "manda_stance_2",
    pic: 0, state: 3000, wait: 3, next: 352, dvx: 550, dvy: 550, dvz: 0, centerx: 600, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  352: { name: "manda_stance_2",
    pic: 2, state: 3000, wait: 3, next: 353, dvx: 550, dvy: 550, dvz: 0, centerx: 570, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  353: { name: "manda_stance_2",
    pic: 1, state: 3000, wait: 3, next: 354, dvx: 550, dvy: 550, dvz: 0, centerx: 540, centery: 391, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  354: { name: "manda_stance_2",
    pic: 0, state: 3000, wait: 3, next: 355, dvx: 550, dvy: 550, dvz: 0, centerx: 510, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  355: { name: "manda_stance_2",
    pic: 2, state: 3000, wait: 3, next: 356, dvx: 550, dvy: 550, dvz: 0, centerx: 480, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  356: { name: "manda_stance_2",
    pic: 1, state: 3000, wait: 3, next: 357, dvx: 550, dvy: 550, dvz: 0, centerx: 450, centery: 391, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  357: { name: "manda_stance_2",
    pic: 0, state: 3000, wait: 3, next: 358, dvx: 550, dvy: 550, dvz: 0, centerx: 420, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 500, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  358: { name: "manda_stance_2",
    pic: 2, state: 3000, wait: 3, next: 359, dvx: 550, dvy: 550, dvz: 0, centerx: 390, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  359: { name: "manda_stance_2",
    pic: 1, state: 3000, wait: 3, next: 999, dvx: 550, dvy: 550, dvz: 0, centerx: 360, centery: 391, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  360: { name: "manda_atk1",
    pic: 283, state: 15, wait: 2, next: 361, dvx: 100, dvy: 550, dvz: 0, centerx: 273, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  361: { name: "manda_atk1",
    pic: 284, state: 15, wait: 3, next: 362, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  362: { name: "manda_atk1",
    pic: 284, state: 15, wait: 10, next: 346, dvx: -50, dvy: 550, dvz: 0, centerx: 273, centery: 353, hit_a: 0, hit_d: 0, hit_j: 0
  },
  365: { name: "manda_stance",
    pic: 0, state: 3000, wait: 5, next: 366, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 300, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  366: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 367, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  367: { name: "manda_stance",
    pic: 1, state: 3000, wait: 5, next: 368, dvx: 550, dvy: 550, dvz: 0, centerx: 271, centery: 391, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  368: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 369, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  369: { name: "manda_stance",
    pic: 0, state: 3000, wait: 5, next: 370, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    },
    itr: {
      kind: 0, x: 433, y: 80000, w: 300, h: 500, zwidth: 25, dvx: 0, arest: 100, fall: -1, bdefend: 16, injury: 0, effect: 5
    }
  },
  370: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 371, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  371: { name: "manda_stance",
    pic: 1, state: 3000, wait: 5, next: 372, dvx: 550, dvy: 550, dvz: 0, centerx: 271, centery: 391, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  372: { name: "manda_stance",
    pic: 2, state: 3000, wait: 5, next: 8, dvx: 550, dvy: 550, dvz: 0, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 49,
    bdy: {
      kind: 0, x: 0, y: 55, w: 735, h: 265
    }
  },
  375: { name: "stop",
    pic: 999, state: 18, wait: 2, next: 375, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -9782457612, w: 99999999, h: 500, zwidth: 9999, dvx: 0, vrest: 20, fall: 1, bdefend: 1, injury: 0, effect: 5
    }
  }
  }
});