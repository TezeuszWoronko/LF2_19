define({
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/spider.png", w: 79, h: 79, row: 10, col: 4
      },
      {
        "file(40-43)": "sprite/kidomaru_3.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(44-113)": "sprite/peinO_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(114-117)": "sprite/windblade.png", w: 415, h: 241, row: 2, col: 2
      }
    ]
  },
  frame: {
  0: { name: "disap",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "paralyze",
    pic: 14, state: 3005, wait: 27, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50,
      catchingact: [6, 6], caughtact: [130, 130]
    }
  },
  2: { name: "paralyz",
    pic: 15, state: 3005, wait: 27, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50,
      catchingact: [6, 6], caughtact: [130, 130]
    }
  },
  3: { name: "paralyze",
    pic: 16, state: 3005, wait: 27, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50,
      catchingact: [6, 6], caughtact: [130, 130]
    }
  },
  4: { name: "paralyze",
    pic: 17, state: 3005, wait: 27, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50,
      catchingact: [6, 6], caughtact: [130, 130]
    }
  },
  5: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 6, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 50, injury: 4, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  6: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 7, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 35, y: 60, injury: 5, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  7: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: -5, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 55, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  10: { name: "body_atk",
    pic: 4, state: 3003, wait: 2, next: 11, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "body_atk",
    pic: 5, state: 3003, wait: 10, next: 50, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: 35, y: 95, action: 100, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  20: { name: "body_atk",
    pic: 5, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "body_atk",
    pic: 5, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "body_atk",
    pic: 6, state: 3003, wait: 1, next: 32, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "body_atk",
    pic: 7, state: 3003, wait: 1, next: 33, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "body_atk",
    pic: 8, state: 3003, wait: 100, next: 34, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  34: { name: "body_atk",
    pic: 999, state: 3003, wait: 1, next: 35, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "body_atk",
    pic: 8, state: 3003, wait: 1, next: 36, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "body_atk",
    pic: 999, state: 3003, wait: 1, next: 37, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "body_atk",
    pic: 8, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "spider",
    pic: 0, state: 3000, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 9, hit_d: 30, hit_j: 0, hit_Fa: 14,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  51: { name: "body",
    pic: 1, state: 3000, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  52: { name: "body",
    pic: 2, state: 3000, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  53: { name: "body",
    pic: 3, state: 3000, wait: 1, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 15, y: 80000, w: 350, h: 100, bdefend: 16, injury: 0, effect: 5, fall: -1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  54: { name: "body",
    pic: 4, state: 3000, wait: 1, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  55: { name: "string",
    pic: 9, state: 3002, wait: 250, next: 56, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 25, y: 10, zwidth: 10, w: 33, h: 100,
      catchingact: [57, 57], caughtact: [130, 130]
    }
  },
  56: { name: "string",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 60, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  57: { name: "hiting2",
    pic: 43, state: 9, wait: 1, next: 58, dvx: 0, dvy: 0, centerx: 108, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    cpoint: {
      kind: 1, x: 108, y: 380, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  58: { name: "hiting2",
    pic: 43, state: 9, wait: 1, next: 59, dvx: 0, dvy: 0, centerx: 108, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 108, y: 360, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  59: { name: "hiting2",
    pic: 43, state: 9, wait: 100, next: 1000, dvx: 0, dvy: 0, centerx: 108, centery: 500, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 108, y: 350, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  60: { name: "blast",
    pic: 10, state: 3002, wait: 1, next: 60, dvx: 50, dvy: 0, dvz: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: 10, zwidth: 20, w: 50, h: 100, dvx: 61
    }
  },
  61: { name: "blast",
    pic: 11, state: 18, wait: 1, next: 62, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 5, w: 350, h: 100, dvx: 10, dvy: -15, injury: 75, fall: 70, arest: 20
    }
  },
  62: { name: "blast",
    pic: 12, state: 18, wait: 1, next: 63, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 5, w: 350, h: 100, dvx: 10, dvy: -15, injury: 75, fall: 70, arest: 20
    }
  },
  63: { name: "blast",
    pic: 13, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 5, w: 350, h: 100, dvx: 10, dvy: -15, injury: 75, fall: 70, arest: 20
    }
  },
  81: { name: "fu",
    pic: 19, state: 3, wait: 1, next: 82, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  82: { name: "fu",
    pic: 19, state: 3, wait: 3, next: 81, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  85: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 86, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 45, injury: 10, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  86: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 87, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 45, injury: 10, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  87: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 88, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 45, injury: 10, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  88: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 89, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 35, y: 45, injury: 10, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  89: { name: "hiting2",
    pic: 999, state: 9, wait: 100, next: 1000, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 45, injury: 10, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  260: { name: "stab",
    pic: 20, state: 15, wait: 10, next: 261, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "stab",
    pic: 21, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "stab",
    pic: 22, state: 15, wait: 2, next: 263, dvx: 50, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: {
      kind: 3, x: 10, y: 16, w: 30, zwidth: 15, h: 65,
      catchingact: [267, 267], caughtact: [130, 130]
    }
  },
  263: { name: "stab",
    pic: 22, state: 15, wait: 2, next: 264, dvx: 50, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 10, y: 16, w: 30, h: 65, zwidth: 15,
      catchingact: [267, 267], caughtact: [130, 130]
    }
  },
  264: { name: "stab_finish",
    pic: 21, state: 9, wait: 5, next: 265, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "stab_finish",
    pic: 20, state: 18, wait: 3, next: 266, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  266: { name: "stab_finish",
    pic: 20, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 70, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  267: { name: "stabbing",
    pic: 22, state: 9, wait: 1, next: 268, dvx: 1, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    }
  },
  268: { name: "catching",
    pic: 23, state: 9, wait: 0, next: 269, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 100, decrease: 3
    },
    opoint: {
      kind: 1, x: 75, y: 78, action: 100, dvx: 0, dvy: 0, oid: 401, facing: 0
    }
  },
  269: { name: "catching",
    pic: 24, state: 9, wait: 1, next: 270, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  270: { name: "catching",
    pic: 25, state: 9, wait: 1, next: 271, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  271: { name: "catching",
    pic: 26, state: 9, wait: 25, next: 272, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  272: { name: "catching",
    pic: 26, state: 9, wait: 1, next: 264, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 53, vaction: 180, throwvx: 5, throwvy: -5, throwvz: 3, throwinjury: 30
    }
  },
  275: { name: "god_realm",
    pic: 999, state: 15, wait: 0, next: 276, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  276: { name: "god_realm",
    pic: 999, state: 15, wait: 2, next: 277, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  277: { name: "god_realm",
    pic: 27, state: 15, wait: 7, next: 278, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  278: { name: "god_realm",
    pic: 28, state: 15, wait: 1, next: 279, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  279: { name: "god_realm",
    pic: 29, state: 15, wait: 1, next: 280, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  280: { name: "god_realm",
    pic: 30, state: 18, wait: 13, next: 281, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 100, y: 0, w: 999999, h: 100, zwidth: 9, dvx: 180, dvy: -15, vrest: 30, bdefend: 1, fall: 100, injury: 50, effect: 5
      },
      {
        kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
      }
    ]
  },
  281: { name: "god_realm",
    pic: 27, state: 15, wait: 5, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 60, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  282: { name: "animal",
    pic: 999, state: 15, wait: 0, next: 283, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  283: { name: "animal",
    pic: 999, state: 15, wait: 2, next: 284, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  284: { name: "animal",
    pic: 51, state: 15, wait: 2, next: 285, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  285: { name: "animal",
    pic: 52, state: 15, wait: 2, next: 286, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  286: { name: "animal",
    pic: 53, state: 15, wait: 2, next: 287, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  287: { name: "animal",
    pic: 54, state: 18, wait: 2, next: 289, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 10, fall: 100
    }
  },
  289: { name: "animal",
    pic: 55, state: 15, wait: 6, next: 290, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -3, y: 90, action: 78, dvx: 0, dvy: 0, oid: 401, facing: 0
    }
  },
  290: { name: "animal",
    pic: 55, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 80, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  310: { name: "god_realm",
    pic: 999, state: 15, wait: 0, next: 311, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  311: { name: "god_realm",
    pic: 999, state: 15, wait: 2, next: 312, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  312: { name: "god_realm",
    pic: 27, state: 15, wait: 7, next: 313, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "god_realm",
    pic: 28, state: 15, wait: 1, next: 314, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  314: { name: "god_realm",
    pic: 29, state: 15, wait: 1, next: 315, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  315: { name: "god_realm",
    pic: 30, state: 18, wait: 13, next: 316, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 100, y: 0, w: 999999, h: 100, zwidth: 9, dvx: -70, dvy: -8, vrest: 30, bdefend: 1, fall: 100, injury: 50, effect: 5
      },
      {
        kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 10, fall: 100
      }
    ]
  },
  316: { name: "god_realm",
    pic: 27, state: 15, wait: 5, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 60, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  319: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 322, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 50, injury: 4, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  320: { name: "paralyze",
    pic: 999, state: 15, wait: 0, next: 321, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  321: { name: "paralyze",
    pic: 999, state: 15, wait: 6, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: -80, y: 80, w: 220, h: 50, zwidth: 30,
      catchingact: [319, 319], caughtact: [130, 130]
    }
  },
  322: { name: "hiting2",
    pic: 999, state: 9, wait: 1, next: 324, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 50, injury: 4, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    },
    opoint: {
      kind: 3, x: 0, y: 80, action: 320, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  323: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 324, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 50, injury: 5, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  324: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 325, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 35, y: 60, injury: 5, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  325: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: -323, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 55, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -13
    }
  },
  330: { name: "windblade",
    pic: 999, state: 3006, wait: 1, next: 331, dvx: 60, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50, zwidth: 17,
      catchingact: [332, 332], caughtact: [130, 130]
    }
  },
  331: { name: "windblade",
    pic: 999, state: 3006, wait: 2, next: 1000, dvx: 10, dvy: 0, dvz: 8, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 16, w: 20, h: 50, zwidth: 17,
      catchingact: [332, 332], caughtact: [130, 130]
    }
  },
  332: { name: "hiting2",
    pic: 999, state: 9, wait: 2, next: 333, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 30, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  333: { name: "hiting2",
    pic: 999, state: 9, wait: 3, next: 334, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 30, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    opoint: {
      kind: 1, x: -80, y: 85, action: 340, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  334: { name: "hiting2",
    pic: 999, state: 9, wait: 5, next: 335, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 30, injury: 40, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, effect: 1
    },
    opoint: {
      kind: 1, x: 35, y: 40, action: 110, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  335: { name: "hiting2",
    pic: 999, state: 9, wait: 5, next: 336, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 35, y: 30, injury: 40, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, effect: 1
    },
    opoint: {
      kind: 1, x: 35, y: 40, action: 110, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  336: { name: "hiting2",
    pic: 999, state: 9, wait: 5, next: 337, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 30, injury: 40, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, effect: 1
    },
    opoint: {
      kind: 1, x: 35, y: 40, action: 110, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  337: { name: "hiting2",
    pic: 999, state: 9, wait: 4, next: 1000, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 30, vaction: 180, throwvx: 5, throwvy: -5, throwvz: 3, throwinjury: 0
    }
  },
  340: { name: "windblades",
    pic: 114, state: 3, wait: 5, next: 341, dvx: 550, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "windblade",
    pic: 115, state: 3, wait: 5, next: 342, dvx: 550, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  342: { name: "windblade",
    pic: 116, state: 3, wait: 5, next: 1000, dvx: 550, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});