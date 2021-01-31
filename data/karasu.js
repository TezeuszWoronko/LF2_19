define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/karasu.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-109)": "sprite/kankuro_special.png", w: 125, h: 95, row: 5, col: 4
      }
    ]
  },
  frame: {
  0: { name: "special1",
    pic: 42, state: 3003, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 3, bdefend: 100, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  1: { name: "special1",
    pic: 43, state: 3003, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 3, bdefend: 100, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  2: { name: "special1",
    pic: 44, state: 3003, wait: 1, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 3, bdefend: 100, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  3: { name: "special1",
    pic: 45, state: 3003, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 100, vrest: 3, bdefend: 100, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  4: { name: "special1",
    pic: 46, state: 3003, wait: 1, next: 6, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  5: { name: "special1",
    pic: 999, state: 3005, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  6: { name: "special1",
    pic: 47, state: 3003, wait: 1, next: 7, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 3, bdefend: 100, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  7: { name: "special1",
    pic: 48, state: 3003, wait: 5, next: 8, dvx: -40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 5, dvy: -10, fall: 100, vrest: 3, bdefend: 100, injury: 35
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  8: { name: "special1",
    pic: 49, state: 3003, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  10: { name: "hit",
    pic: 8, state: 3005, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hit",
    pic: 9, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  20: { name: "hitting",
    pic: 8, state: 3005, wait: 0, next: 21, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hitting",
    pic: 9, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  25: { name: "special1_fly",
    pic: 42, state: 3003, wait: 1, next: 26, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: [
      {
        kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 2, bdefend: 100, injury: 20, effect: 1
      },
      {
        kind: 8, x: -9999, y: -49999841354687, w: 99999, h: 200, zwidth: 9999, dvx: 6
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  26: { name: "special1_fly",
    pic: 43, state: 3003, wait: 1, next: 27, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: [
      {
        kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 2, bdefend: 100, injury: 20, effect: 1
      },
      {
        kind: 8, x: -9999, y: -49999841354687, w: 99999, h: 200, zwidth: 9999, dvx: 6
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  27: { name: "special1_fly",
    pic: 44, state: 3003, wait: 1, next: 28, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: [
      {
        kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 2, bdefend: 100, injury: 20, effect: 1
      },
      {
        kind: 8, x: -9999, y: -49999841354687, w: 99999, h: 200, zwidth: 9999, dvx: 6
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  28: { name: "special1_fly_start",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  29: { name: "special1_fly_start",
    pic: 999, state: 3005, wait: 0, next: 28, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebound",
    pic: 8, state: 3005, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebound",
    pic: 9, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  39: { name: "Kuroari",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -100, y: 0, zwidth: 999, w: 600, h: 100, dvx: 40
    }
  },
  40: { name: "Kuroari",
    pic: 55, state: 3005, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  41: { name: "Kuroari",
    pic: 56, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -11, y: 24, w: 103, h: 56, effect: 0, dvx: 5, dvy: -8, fall: 100, vrest: 5, bdefend: 100, injury: 70
    }
  },
  42: { name: "Kuroari",
    pic: 57, state: 3005, wait: 10, next: 43, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "Kuroari",
    pic: 58, state: 3005, wait: 1, next: 44, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "Kuroari",
    pic: 59, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "special_kill",
    pic: 4, state: 9, wait: 1, next: 51, dvx: 40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_fa: 1,
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65,
      catchingact: [55, 55], caughtact: [130, 130]
    }
  },
  51: { name: "special_kill",
    pic: 5, state: 9, wait: 1, next: 52, dvx: 40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_fa: 1,
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65,
      catchingact: [55, 55], caughtact: [130, 130]
    }
  },
  52: { name: "special_kill",
    pic: 6, state: 9, wait: 1, next: 53, dvx: 40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_fa: 1,
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65,
      catchingact: [55, 55], caughtact: [130, 130]
    }
  },
  53: { name: "special_kill",
    pic: 7, state: 9, wait: 1, next: 54, dvx: 40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_fa: 1,
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65,
      catchingact: [55, 55], caughtact: [130, 130]
    }
  },
  54: { name: "special_kill",
    pic: 8, state: 9, wait: 1, next: 4, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65,
      catchingact: [55, 55], caughtact: [130, 130]
    }
  },
  55: { name: "special2_catcg",
    pic: 8, state: 9, wait: 0, next: 77, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/013",
    cpoint: {
      kind: 1, x: 39, y: 50, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  56: { name: "special2_catcg",
    pic: 8, state: 9, wait: 4, next: 57, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 50, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  57: { name: "special2_catcg",
    pic: 70, state: 9, wait: 3, next: 58, dvx: 550, dvy: 0, centerx: 68, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 66, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    },
    opoint: {
      kind: 1, x: 68, y: 70, action: 90, dvx: 0, dvy: 0, oid: 230, facing: 0
    }
  },
  58: { name: "special2_catcg",
    pic: 71, state: 9, wait: 2, next: 59, dvx: 550, dvy: 0, centerx: 68, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 66, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  59: { name: "special2_catcg",
    pic: 72, state: 9, wait: 2, next: 60, dvx: 550, dvy: 0, centerx: 68, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 66, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  60: { name: "special2_catcg",
    pic: 73, state: 9, wait: 2, next: 61, dvx: 550, dvy: 0, centerx: 68, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 66, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  61: { name: "special2_catcg",
    pic: 74, state: 9, wait: 1, next: 62, dvx: 550, dvy: 0, centerx: 68, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 66, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  62: { name: "special2_catcg",
    pic: 75, state: 9, wait: 1, next: 63, dvx: 550, dvy: 0, centerx: 68, centery: 93, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  63: { name: "special2_catcg",
    pic: 76, state: 9, wait: 1, next: 64, dvx: 550, dvy: 0, centerx: 68, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  64: { name: "special2_catcg",
    pic: 77, state: 9, wait: 1, next: 65, dvx: 550, dvy: 0, centerx: 68, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  65: { name: "special2_catcg",
    pic: 78, state: 9, wait: 1, next: 66, dvx: 550, dvy: 0, centerx: 68, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  66: { name: "special2_catcg",
    pic: 79, state: 9, wait: 1, next: 67, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  67: { name: "special2_catcg",
    pic: 80, state: 9, wait: 1, next: 68, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  68: { name: "special2_catcg",
    pic: 81, state: 9, wait: 7, next: 69, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  69: { name: "special2_catcg",
    pic: 82, state: 9, wait: 1, next: 80, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 145, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  70: { name: "poison",
    pic: 27, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  71: { name: "poison",
    pic: 35, state: 3005, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  72: { name: "poison",
    pic: 36, state: 3005, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  73: { name: "poison",
    pic: 37, state: 3005, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/060",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 60, y: 94, action: 9, dvx: 50, dvy: 0, oid: 222, facing: 0
    }
  },
  74: { name: "poison",
    pic: 38, state: 3005, wait: 2, next: 75, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  75: { name: "poison",
    pic: 39, state: 3005, wait: 2, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  76: { name: "poison",
    pic: 40, state: 3005, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  77: { name: "special2_catcg",
    pic: 8, state: 9, wait: 1, next: 56, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 50, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 355, dvx: 0, dvy: 0, oid: 14, facing: 0
    }
  },
  80: { name: "special2_catcg",
    pic: 83, state: 9, wait: 1, next: 81, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  81: { name: "special2_catcg",
    pic: 84, state: 9, wait: 1, next: 82, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  82: { name: "special2_catcg",
    pic: 85, state: 9, wait: 1, next: 83, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  83: { name: "special2_catcg",
    pic: 86, state: 9, wait: 1, next: 84, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  84: { name: "special2_catcg",
    pic: 87, state: 9, wait: 15, next: 85, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 99999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  85: { name: "special2_catcg",
    pic: 87, state: 15, wait: 1, next: 86, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 68, y: 10, injury: 0, vaction: 180, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7, cover: 11
    }
  },
  86: { name: "special2_catcg",
    pic: 87, state: 15, wait: 5, next: 1000, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 10, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    itr: {
      kind: 0, x: 35, y: 34, w: 50, h: 14, dvx: -1, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 0, effect: 5
    }
  },
  90: { name: "kill_split",
    pic: 23, state: 3005, wait: 4, next: 91, dvx: 0, dvy: -1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "kill_split",
    pic: 50, state: 3005, wait: 7, next: 92, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "kill_split",
    pic: 60, state: 3005, wait: 0, next: 93, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 65, action: 100, dvx: 0, dvy: 0, oid: 230, facing: 0
    }
  },
  93: { name: "kill_split",
    pic: 60, state: 3005, wait: 0, next: 94, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 85, action: 105, dvx: 0, dvy: 0, oid: 230, facing: 0
    }
  },
  94: { name: "kill_split",
    pic: 60, state: 3005, wait: 0, next: 96, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 105, dvx: 0, dvy: 0, oid: 230, facing: 0
    }
  },
  96: { name: "kill_split",
    pic: 60, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 60, action: 115, dvx: 0, dvy: 0, oid: 230, facing: 0
    }
  },
  100: { name: "kill_head",
    pic: 61, state: 3005, wait: 1, next: 101, dvx: 0, dvy: -3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "kill_head",
    pic: 62, state: 3005, wait: 0, next: 102, dvx: 0, dvy: -3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029"
  },
  102: { name: "kill_head",
    pic: 63, state: 3005, wait: 3, next: 103, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "kill_head",
    pic: 63, state: 3005, wait: 9, next: 104, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "kill_head",
    pic: 64, state: 3005, wait: 4, next: 1000, dvx: 0, dvy: 10, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018"
  },
  105: { name: "kill_armL",
    pic: 65, state: 3005, wait: 0, next: 111, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "kill_armL",
    pic: 65, state: 3005, wait: 1, next: 107, dvx: -8, dvy: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  107: { name: "kill_armL",
    pic: 66, state: 3005, wait: 0, next: 108, dvx: -8, dvy: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029"
  },
  108: { name: "kill_armL",
    pic: 67, state: 3005, wait: 3, next: 109, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  109: { name: "kill_armL",
    pic: 67, state: 3005, wait: 9, next: 110, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "kill_armL",
    pic: 68, state: 3005, wait: 2, next: 1000, dvx: 15, dvy: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018"
  },
  111: { name: "kill_armL",
    pic: 65, state: 3005, wait: 0, next: 106, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 80, action: 111, dvx: 0, dvy: 0, oid: 230, facing: 1
    }
  },
  115: { name: "kill_armL2",
    pic: 51, state: 3005, wait: 0, next: 116, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "kill_armL2",
    pic: 51, state: 3005, wait: 0, next: 117, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 80, action: 116, dvx: 0, dvy: 0, oid: 230, facing: 1
    }
  },
  117: { name: "kill_armL2",
    pic: 51, state: 3005, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "kill_armL2",
    pic: 52, state: 3005, wait: 0, next: 119, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029"
  },
  119: { name: "kill_armL2",
    pic: 53, state: 3005, wait: 3, next: 120, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "kill_armL2",
    pic: 53, state: 3005, wait: 9, next: 121, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "kill_armL2",
    pic: 54, state: 3005, wait: 2, next: 1000, dvx: 1, dvy: 4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018"
  },
  125: { name: "dog5",
    pic: 88, state: 3006, wait: 1, next: 126, dvx: 20, dvy: 0, centerx: 68, centery: 85, hit_a: 30, hit_d: 127, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 6, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 30
    }
  },
  126: { name: "dog5",
    pic: 89, state: 3006, wait: 1, next: 125, dvx: 20, dvy: 0, centerx: 68, centery: 85, hit_a: 30, hit_d: 127, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 6, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 30
    }
  },
  127: { name: "dog5",
    pic: 89, state: 3002, wait: 0, next: 128, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 6, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 30
    },
    opoint: {
      kind: 1, x: 68, y: 80, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  128: { name: "dog5",
    pic: 89, state: 3002, wait: 0, next: 1000, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 80, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  130: { name: "kurai_ex",
    pic: 999, state: 3005, wait: 0, next: 131, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "kurai_ex",
    pic: 70, state: 3005, wait: 3, next: 132, dvx: 550, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 80, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  132: { name: "kurai_ex",
    pic: 70, state: 3005, wait: 1, next: 133, dvx: 5, dvy: -2, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "kurai_ex",
    pic: 71, state: 3005, wait: 1, next: 134, dvx: 5, dvy: -2, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "kurai_ex",
    pic: 72, state: 3005, wait: 1, next: 135, dvx: 5, dvy: -2, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "kurai_ex",
    pic: 73, state: 3005, wait: 0, next: 136, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 60, action: 0, dvx: 0, dvy: -1, oid: 422, facing: 60
    }
  },
  136: { name: "kurai_ex",
    pic: 73, state: 3005, wait: 0, next: 137, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 60, action: 0, dvx: 0, dvy: -3, oid: 422, facing: 60
    }
  },
  137: { name: "kurai_ex",
    pic: 73, state: 3005, wait: 0, next: 138, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 60, action: 0, dvx: 0, dvy: -1, oid: 422, facing: 80
    }
  },
  138: { name: "kurai_ex",
    pic: 73, state: 3005, wait: 0, next: 139, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 60, action: 0, dvx: 0, dvy: -1, oid: 422, facing: 60
    }
  },
  139: { name: "kurai_ex",
    pic: 73, state: 3005, wait: 0, next: 140, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 60, action: 0, dvx: 0, dvy: -2, oid: 422, facing: 90
    }
  },
  140: { name: "kurai_ex",
    pic: 73, state: 3005, wait: 0, next: 141, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 60, action: 0, dvx: 0, dvy: -5, oid: 422, facing: 90
    }
  },
  141: { name: "kurai_ex",
    pic: 71, state: 3005, wait: 15, next: 142, dvx: 0, dvy: 0, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "kurai_ex",
    pic: 70, state: 3005, wait: 15, next: 143, dvx: 550, dvy: 550, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "kurai_ex",
    pic: 70, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 68, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 68, y: 80, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  145: { name: "replacement",
    pic: 999, state: 3005, wait: 3, next: 152, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  146: { name: "replacement",
    pic: 55, state: 3005, wait: 1, next: 147, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019"
  },
  147: { name: "replacement",
    pic: 56, state: 3005, wait: 1, next: 148, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "replacement",
    pic: 57, state: 3005, wait: 1, next: 149, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "replacement",
    pic: 58, state: 3005, wait: 1, next: 150, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "special1",
    pic: 42, state: 3005, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 2, bdefend: 100, injury: 40, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  151: { name: "special1",
    pic: 43, state: 3005, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 2, bdefend: 100, injury: 40, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  152: { name: "special1",
    pic: 44, state: 3005, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 1, vrest: 2, bdefend: 100, injury: 40, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  153: { name: "special1",
    pic: 45, state: 3005, wait: 1, next: 154, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 1, dvy: -15, fall: 100, vrest: 2, bdefend: 100, injury: 40, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  154: { name: "special1",
    pic: 46, state: 3005, wait: 1, next: 8, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    bdy: {
      kind: 0, x: 21, y: 18, w: 30, h: 62
    }
  },
  155: { name: "poisonmist",
    pic: 999, state: 3005, wait: 0, next: 156, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "poisonmist",
    pic: 999, state: 3005, wait: 1, next: 165, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  157: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 158, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  158: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 159, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  159: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 160, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  160: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 161, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  161: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 162, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  162: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 163, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  163: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 164, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  164: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 166, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  165: { name: "poisonmist",
    pic: 69, state: 3005, wait: 35, next: 157, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  166: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 167, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  167: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 168, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  168: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 169, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  169: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 170, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  170: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 171, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  171: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 172, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  172: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 173, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  173: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 174, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  174: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 175, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  175: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 176, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  176: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 177, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  177: { name: "poisonmist",
    pic: 69, state: 3005, wait: 0, next: 178, dvx: 3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 110, action: 160, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  178: { name: "poisonmist",
    pic: 69, state: 3005, wait: 2, next: 179, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 15, y: 90, action: 300, dvx: 10, dvy: 0, oid: 452, facing: 51
    }
  },
  179: { name: "poisonmist",
    pic: 69, state: 3005, wait: 7, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  }
  }
});