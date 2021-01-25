define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/snake.png", w: 140, h: 125, row: 4, col: 2
      },
      {
        "file(8-43)": "sprite/snake_2.png", w: 60, h: 70, row: 6, col: 6
      },
      {
        "file(44-45)": "sprite/manda4.png", w: 370, h: 232, row: 2, col: 1
      },
      {
        "file(46-47)": "sprite/manda7.png", w: 370, h: 485, row: 2, col: 1
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3002, wait: 1, next: 1, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 3002, wait: 1, next: 2, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "flying",
    pic: 2, state: 3002, wait: 1, next: 3, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 100, h: 79, dvx: -10, dvy: -2, fall: 70, vrest: 5, bdefend: 100, injury: 55, effect: 1
    }
  },
  3: { name: "flying",
    pic: 3, state: 3002, wait: 1, next: 4, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 100, h: 79, dvx: -10, dvy: -2, fall: 70, vrest: 5, bdefend: 100, injury: 55, effect: 1
    }
  },
  4: { name: "flying",
    pic: 4, state: 3002, wait: 1, next: 5, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 110, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 100, injury: 55, effect: 1
    }
  },
  5: { name: "flying",
    pic: 5, state: 3002, wait: 1, next: 6, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 95, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 100, injury: 55, effect: 1
    }
  },
  6: { name: "flying",
    pic: 6, state: 3002, wait: 1, next: 7, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying",
    pic: 0, state: 3002, wait: 0, next: 1000, dvx: 1, dvy: 0, centerx: 55, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 8, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 9, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 10, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 11, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3005, wait: 0, next: 85, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 0, effect: 5
    }
  },
  30: { name: "rebounding",
    pic: 8, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 43, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 9, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 42, action: 0, dvx: 0, dvy: 0, oid: 210, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 10, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 46, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 11, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "manda",
    pic: 999, state: 400, wait: 2, next: 36, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "manda",
    pic: 999, state: 3005, wait: 0, next: 37, dvx: 120, dvy: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "manda",
    pic: 999, state: 3005, wait: 0, next: 38, dvx: 550, dvy: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0
  },
  38: { name: "manda",
    pic: 999, state: 3005, wait: 0, next: 39, dvx: 0, dvy: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0
  },
  39: { name: "manda",
    pic: 999, state: 3005, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "manda",
    pic: 45, state: 18, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 205, centery: 232, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 60, zwidth: 37, effect: 23
    }
  },
  41: { name: "manda",
    pic: 44, state: 18, wait: 2, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 205, centery: 232, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 60, zwidth: 37, effect: 23
    }
  },
  42: { name: "manda",
    pic: 46, state: 18, wait: 2, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 205, centery: 485, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 60, zwidth: 37, effect: 23
    }
  },
  43: { name: "manda",
    pic: 47, state: 18, wait: 2, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 205, centery: 485, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 60, zwidth: 37, effect: 23
    }
  },
  44: { name: "manda",
    pic: 45, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 205, centery: 232, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "kyubiselfdmg",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 86, w: 72, h: 50, dvx: 0, dvy: 0, bdefend: 100, fall: 0, injury: 20, vrest: 5, zwidth: 5, effect: 50
    }
  },
  46: { name: "kakuzuselfdmg",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 86, w: 72, h: 50, dvx: 0, dvy: 0, bdefend: 100, fall: 0, injury: 450, vrest: 5, zwidth: 5, effect: 5
    }
  },
  47: { name: "cursesealdmg",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 86, w: 72, h: 50, dvx: 0, dvy: 0, bdefend: 100, fall: 0, injury: 70, vrest: 5, zwidth: 5, effect: 50
    }
  },
  48: { name: "kbsealdmg",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 86, w: 72, h: 50, dvx: 0, dvy: 0, bdefend: 100, fall: 0, injury: 30, vrest: 5, zwidth: 5, effect: 50
    }
  },
  49: { name: "hidandmg",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 86, w: 72, h: 50, dvx: 0, dvy: 0, bdefend: 100, fall: 0, injury: 180, vrest: 5, zwidth: 5, effect: 50
    }
  },
  84: { name: "kyubi_scream2",
    pic: 999, state: 18, wait: 1, next: 89, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 10, effect: 5
    }
  },
  85: { name: "sharingan",
    pic: 999, state: 3005, wait: 210, next: 86, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 0, effect: 5
    }
  },
  86: { name: "sharingan",
    pic: 999, state: 3005, wait: 0, next: 85, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  87: { name: "kyubi_chakra",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 100, w: 55, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  88: { name: "kyubi_scream",
    pic: 999, state: 18, wait: 1, next: 89, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "kyubi_scream",
    pic: 999, state: 18, wait: 7, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 335, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  90: { name: "sasuke_genjutsu",
    pic: 8, state: 3005, wait: 2, next: 91, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "sasuke_genjutsu",
    pic: 9, state: 3005, wait: 2, next: 92, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "sasuke_genjutsu",
    pic: 10, state: 3005, wait: 2, next: 93, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "sasuke_genjutsu",
    pic: 11, state: 3005, wait: 2, next: 94, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  94: { name: "sasuke_genjutsu",
    pic: 12, state: 3005, wait: 1, next: 95, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "sasuke_genjutsu",
    pic: 13, state: 3005, wait: 1, next: 96, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "sasuke_genjutsu",
    pic: 14, state: 3005, wait: 1, next: 97, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "sasuke_genjutsu",
    pic: 15, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 30, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "4tk",
    pic: 999, state: 3005, wait: 0, next: 101, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "4tk",
    pic: 999, state: 3005, wait: 0, next: 102, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 34, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  102: { name: "4tk",
    pic: 999, state: 3005, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 34, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 31
    }
  },
  103: { name: "4tk",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  105: { name: "kill",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999999, y: 100, w: 99999999999999, h: 9999, zwidth: 9999, dvx: 15, dvy: -10, fall: 999, vrest: 20, bdefend: 100, injury: 999, effect: 2
    }
  },
  106: { name: "poison",
    pic: 999, state: 3005, wait: 15, next: 106, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 3, effect: 5
    }
  }
  }
});