define({
  bmp: {
    file: [
      {
        "file(0-1)": "sprite/gamabunta.png", w: 694, h: 495, row: 1, col: 2
      },
      {
        "file(2-6)": "sprite/blade.png", w: 162, h: 599, row: 5, col: 1
      }
    ]
  },
  frame: {
  0: { name: "bunta_stance",
    pic: 0, state: 3000, wait: 10, next: 1, dvx: 550, dvy: 550, dvz: 0, centerx: 325, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "bunta_stance",
    pic: 0, state: 3000, wait: 10, next: 2, dvx: 550, dvy: 550, dvz: 0, centerx: 323, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "bunta_stance",
    pic: 1, state: 3000, wait: 10, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 321, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "bunta_stance",
    pic: 1, state: 3000, wait: 10, next: 4, dvx: 550, dvy: 550, dvz: 550, centerx: 323, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "bunta_stance",
    pic: 0, state: 3000, wait: 10, next: 5, dvx: 550, dvy: 550, dvz: 0, centerx: 321, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "bunta_stance",
    pic: 0, state: 3000, wait: 10, next: 6, dvx: 550, dvy: 550, dvz: 550, centerx: 323, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "bunta_stance",
    pic: 1, state: 3000, wait: 10, next: 7, dvx: 550, dvy: 550, dvz: 0, centerx: 321, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "bunta_stance",
    pic: 1, state: 3000, wait: 10, next: 8, dvx: 550, dvy: 550, dvz: 550, centerx: 323, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 9, dvx: 550, dvy: 550, dvz: 550, centerx: 320, centery: 455, hit_a: 0, hit_d: 0, hit_j: 51
  },
  9: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 15, dvx: 550, dvy: 550, dvz: 550, centerx: 300, centery: 455, hit_a: 0, hit_d: 0, hit_j: 51
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
    pic: 1, state: 3000, wait: 2, next: 16, dvx: 550, dvy: 550, dvz: 0, centerx: 280, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 17, dvx: 550, dvy: 550, dvz: 0, centerx: 260, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 18, dvx: 550, dvy: 550, dvz: 0, centerx: 240, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 19, dvx: 550, dvy: 550, dvz: 0, centerx: 220, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  19: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 65, dvx: 550, dvy: 550, dvz: 0, centerx: 200, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "manda_injured",
    pic: 17, state: 3003, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 1, centerx: 273, centery: 393, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "manda_stance",
    pic: 0, state: 3000, wait: 5, next: 8, dvx: 550, dvy: 550, dvz: 0, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 49
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
    pic: 1, state: 3000, wait: 2, next: 66, dvx: 550, dvy: 550, dvz: 0, centerx: 180, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 67, dvx: 550, dvy: 550, dvz: 0, centerx: 160, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 68, dvx: 550, dvy: 550, dvz: 0, centerx: 140, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 69, dvx: 550, dvy: 550, dvz: 0, centerx: 120, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 70, dvx: 550, dvy: 550, dvz: 0, centerx: 100, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 71, dvx: 550, dvy: 550, dvz: 0, centerx: 80, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 72, dvx: 550, dvy: 550, dvz: 0, centerx: 60, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 73, dvx: 550, dvy: 550, dvz: 0, centerx: 40, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 74, dvx: 550, dvy: 550, dvz: 0, centerx: 20, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 75, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "manda_back",
    pic: 1, state: 3000, wait: 2, next: 76, dvx: 550, dvy: 550, dvz: 0, centerx: -20, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "manda_back",
    pic: 599, state: 3000, wait: 5, next: 77, dvx: 550, dvy: 550, dvz: 0, centerx: -20, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "manda_back_summon",
    pic: 599, state: 3005, wait: 60, next: 78, dvx: 550, dvy: 550, dvz: 0, centerx: -20, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 85, action: 350, dvx: 0, dvy: 0, oid: 242, facing: 0
    }
  },
  78: { name: "manda_back_summon",
    pic: 599, state: 3005, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: -20, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 450, action: 405, dvx: 0, dvy: 0, oid: 30, facing: 0
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
    pic: 999, state: 3005, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 0, centerx: -20, centery: 455, hit_a: 0, hit_d: 0, hit_j: 0
  },
  346: { name: "manda",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 550, dvy: 550, dvz: 550, centerx: 275, centery: 395, hit_a: 0, hit_d: 0, hit_j: 0
  },
  349: { name: "blade",
    pic: 999, state: 3005, wait: 0, next: 351, dvx: 350, dvy: 550, dvz: 550, centerx: 325, centery: 1200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  350: { name: "blade",
    pic: 999, state: 400, wait: 2, next: 349, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 1200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  351: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 352, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 1200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005"
  },
  352: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 353, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 1100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  353: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 354, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 1000, hit_a: 0, hit_d: 0, hit_j: 0
  },
  354: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 355, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 900, hit_a: 0, hit_d: 0, hit_j: 0
  },
  355: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 356, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 800, hit_a: 0, hit_d: 0, hit_j: 0
  },
  356: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 357, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 700, hit_a: 0, hit_d: 0, hit_j: 0
  },
  357: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 358, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "blade",
    pic: 3, state: 18, wait: 2, next: 359, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    itr: {
      kind: 0, x: 45, y: 0, w: 100, h: 600, zwidth: 25, dvx: 0, dvy: 15, vrest: 20, fall: 70, bdefend: 16, injury: 80, effect: 5
    }
  },
  359: { name: "blade",
    pic: 4, state: 18, wait: 2, next: 360, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 45, y: 600, w: 100, h: 500, zwidth: 25, dvx: 0, dvy: 15, vrest: 20, fall: 70, bdefend: 16, injury: 80, effect: 5
    }
  },
  360: { name: "blade",
    pic: 5, state: 3005, wait: 2, next: 361, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  361: { name: "blade",
    pic: 6, state: 3005, wait: 2, next: 362, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 600, hit_a: 0, hit_d: 0, hit_j: 0
  },
  362: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 363, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 900, hit_a: 0, hit_d: 0, hit_j: 0
  },
  363: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 364, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 1000, hit_a: 0, hit_d: 0, hit_j: 0
  },
  364: { name: "blade",
    pic: 2, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 325, centery: 1100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  375: { name: "stop",
    pic: 999, state: 18, wait: 2, next: 375, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: -9782457612, w: 99999999, h: 500, zwidth: 9999, dvx: 0, vrest: 20, fall: 1, bdefend: 1, injury: 0, effect: 5
    }
  }
  }
});