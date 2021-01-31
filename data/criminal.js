define({
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/criminal.png", w: 79, h: 79, row: 10, col: 4
      },
      {
        "file(40-79)": "sprite/criminal2.png", w: 79, h: 79, row: 10, col: 4
      },
      {
        "file(80-119)": "sprite/criminal3.png", w: 79, h: 79, row: 10, col: 4
      }
    ]
  },
  frame: {
  0: { name: "kakashi",
    pic: 0, state: 0, wait: 7, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "kakashi",
    pic: 0, state: 0, wait: 165, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 0, action: 103, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  2: { name: "kakashi",
    pic: 4, state: 0, wait: 63, next: -6, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 0, action: 105, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  3: { name: "kakashi",
    pic: 1, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1004, x: 21, y: 18, w: 43, h: 62
    }
  },
  4: { name: "kakashi",
    pic: 4, state: 0, wait: 3, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/SNDDATA_2283"
  },
  5: { name: "kakashi",
    pic: 4, state: 4003, wait: 3, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "kakashi",
    pic: 1, state: 0, wait: 95, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "kakashi",
    pic: 1, state: 0, wait: 70, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 107, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  8: { name: "kakashi",
    pic: 1, state: 0, wait: 0, next: -3, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1004, x: 21, y: 18, w: 43, h: 62
    }
  },
  10: { name: "naruto",
    pic: 20, state: 0, wait: 3, next: -11, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "naruto",
    pic: 20, state: 3000180, wait: 0, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 10, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  12: { name: "naruto",
    pic: 21, state: 0, wait: 4, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1016, x: 21, y: 18, w: 43, h: 62
    }
  },
  13: { name: "naruto",
    pic: 22, state: 0, wait: 4, next: 14, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1016, x: 21, y: 18, w: 43, h: 62
    }
  },
  14: { name: "naruto",
    pic: 23, state: 0, wait: 4, next: 15, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1016, x: 21, y: 18, w: 43, h: 62
    }
  },
  15: { name: "naruto",
    pic: 20, state: 0, wait: 4, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1016, x: 21, y: 18, w: 43, h: 62
    }
  },
  16: { name: "naruto",
    pic: 20, state: 8002, wait: 0, next: 16, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "kankuro",
    pic: 3, state: 0, wait: 0, next: -18, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "kankuro",
    pic: 3, state: 3000180, wait: 0, next: 19, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 30, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  19: { name: "kankuro",
    pic: 3, state: 0, wait: 0, next: 19, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "chyio",
    pic: 6, state: 0, wait: 3, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "chyio",
    pic: 6, state: 3000180, wait: 0, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 40, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  22: { name: "chyio",
    pic: 6, state: 0, wait: 4, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1026, x: 21, y: 18, w: 43, h: 62
    }
  },
  23: { name: "chyio",
    pic: 7, state: 0, wait: 4, next: 24, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1026, x: 21, y: 18, w: 43, h: 62
    }
  },
  24: { name: "chyio",
    pic: 8, state: 0, wait: 4, next: 25, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1026, x: 21, y: 18, w: 43, h: 62
    }
  },
  25: { name: "chyio",
    pic: 9, state: 0, wait: 4, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1026, x: 21, y: 18, w: 43, h: 62
    }
  },
  26: { name: "chyio",
    pic: 6, state: 8074, wait: 0, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "chyio2",
    pic: 999, state: 0, wait: 3, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  28: { name: "chyio2",
    pic: 999, state: 3000090, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 50, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  30: { name: "kakashi",
    pic: 0, state: 0, wait: 3, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "kakashi",
    pic: 0, state: 3000180, wait: 0, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 60, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  32: { name: "kakashi",
    pic: 0, state: 0, wait: 4, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1036, x: 21, y: 18, w: 43, h: 62
    }
  },
  33: { name: "kakashi",
    pic: 0, state: 0, wait: 4, next: 34, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1036, x: 21, y: 18, w: 43, h: 62
    }
  },
  34: { name: "kakashi",
    pic: 0, state: 0, wait: 4, next: 35, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1036, x: 21, y: 18, w: 43, h: 62
    }
  },
  35: { name: "kakashi",
    pic: 0, state: 0, wait: 4, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1036, x: 21, y: 18, w: 43, h: 62
    }
  },
  36: { name: "kakashi",
    pic: 0, state: 8003, wait: 0, next: 36, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "sakura_speak",
    pic: 2, state: 0, wait: 3, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "sakura",
    pic: 2, state: 3000080, wait: 0, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 20, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  62: { name: "sakura",
    pic: 10, state: 0, wait: 3, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1066, x: 21, y: 18, w: 43, h: 62
    }
  },
  63: { name: "sakura",
    pic: 11, state: 0, wait: 3, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1066, x: 21, y: 18, w: 43, h: 62
    }
  },
  64: { name: "sakura",
    pic: 12, state: 0, wait: 3, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1066, x: 21, y: 18, w: 43, h: 62
    }
  },
  65: { name: "sakura",
    pic: 13, state: 0, wait: 3, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1066, x: 21, y: 18, w: 43, h: 62
    }
  },
  66: { name: "sakura",
    sound: "1/013",
    pic: 2, state: 8001, wait: 0, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "zabuza",
    pic: 40, state: 0, wait: 3, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "zabuza",
    pic: 40, state: 3000180, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 66, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  72: { name: "zabuza",
    pic: 40, state: 0, wait: 4, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1076, x: 21, y: 18, w: 43, h: 62
    }
  },
  73: { name: "zabuza",
    pic: 41, state: 0, wait: 4, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1076, x: 21, y: 18, w: 43, h: 62
    }
  },
  74: { name: "zabuza",
    pic: 42, state: 0, wait: 4, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1076, x: 21, y: 18, w: 43, h: 62
    }
  },
  75: { name: "zabuza",
    pic: 43, state: 0, wait: 4, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1076, x: 21, y: 18, w: 43, h: 62
    }
  },
  76: { name: "zabuza",
    pic: 40, state: 8003, wait: 0, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "tsunade",
    pic: 44, state: 0, wait: 3, next: -81, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "tsunade",
    pic: 44, state: 3000270, wait: 0, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 62, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  82: { name: "tsunade",
    pic: 44, state: 0, wait: 4, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1086, x: 21, y: 18, w: 43, h: 62
    }
  },
  83: { name: "tsunade",
    pic: 45, state: 0, wait: 4, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1086, x: 21, y: 18, w: 43, h: 62
    }
  },
  84: { name: "tsunade",
    pic: 46, state: 0, wait: 4, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1086, x: 21, y: 18, w: 43, h: 62
    }
  },
  85: { name: "tsunade",
    pic: 47, state: 0, wait: 4, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1086, x: 21, y: 18, w: 43, h: 62
    }
  },
  86: { name: "tsunade",
    pic: 44, state: 8043, wait: 0, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "madara1",
    pic: 999, state: 0, wait: 3, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "madara1",
    pic: 999, state: 3000090, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 65, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  90: { name: "gaara",
    pic: 48, state: 0, wait: 0, next: -92, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "gaara",
    pic: 48, state: 0, wait: 4, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1096, x: 21, y: 18, w: 43, h: 62
    }
  },
  93: { name: "gaara",
    pic: 49, state: 0, wait: 4, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1096, x: 21, y: 18, w: 43, h: 62
    }
  },
  94: { name: "gaara",
    pic: 50, state: 0, wait: 4, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1096, x: 21, y: 18, w: 43, h: 62
    }
  },
  95: { name: "gaara",
    pic: 51, state: 0, wait: 4, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1096, x: 21, y: 18, w: 43, h: 62
    }
  },
  96: { name: "gaara",
    pic: 51, state: 8016, wait: 0, next: 96, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  145: { name: "garra",
    pic: 5, state: 0, wait: 4, next: 145, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "mine_expl",
    pic: 999, state: 0, wait: 0, next: 191, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "mine_expl",
    pic: 999, state: 0, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78,
    sound: "1/020",
    opoint: {
      kind: 1, x: 39, y: 81, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  195: { name: "spider_mine",
    pic: 15, state: 0, wait: 1, next: 196, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 8, x: 15, y: 65, w: 40, h: 5, dvx: 190, injury: 0
    }
  },
  196: { name: "spider_mine",
    pic: 16, state: 0, wait: 1, next: 197, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 8, x: 15, y: 65, w: 40, h: 5, dvx: 190, injury: 0
    }
  },
  197: { name: "spider_mine",
    pic: 15, state: 0, wait: 1, next: 198, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 8, x: 15, y: 65, w: 40, h: 5, dvx: 190, injury: 0
    }
  },
  198: { name: "spider_mine",
    pic: 16, state: 0, wait: 1, next: 195, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 8, x: 15, y: 65, w: 40, h: 5, dvx: 190, injury: 0
    }
  },
  320: { name: "tobi_main",
    pic: 70, state: 3, wait: 2, next: 321, dvx: 550, dvy: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 370, hit_j: 380,
    bdy: {
      kind: 0, x: 39, y: -99999, w: 21, h: 61
    }
  },
  321: { name: "tobi",
    pic: 71, state: 3, wait: 2, next: 322, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 380, hit_d: 370, hit_j: 360,
    itr: {
      kind: 8, x: -150, y: 65, w: 320, zwidth: 999, h: 5, dvx: 340, injury: 0
    }
  },
  322: { name: "tobi",
    pic: 72, state: 3, wait: 2, next: 323, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 360, hit_d: 370, hit_j: 355,
    itr: {
      kind: 8, x: -250, y: 65, w: 350, zwidth: 999, h: 5, dvx: 325, injury: 0
    }
  },
  323: { name: "tobi",
    pic: 73, state: 3, wait: 2, next: 350, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 370, hit_j: 360,
    itr: {
      kind: 8, x: -9999, y: 65, w: 999999, zwidth: 999, h: 5, dvx: 330, injury: 0
    }
  },
  324: { name: "tobi_die",
    pic: 999, state: 15, wait: 0, next: 334, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  325: { name: "tobi",
    pic: 36, state: 15, wait: 0, next: 326, dvx: -50, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 360, hit_d: 355, hit_j: 0,
    sound: "1/017"
  },
  326: { name: "tobi",
    pic: 74, state: 15, wait: 1, next: 327, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 44, w: 44, h: 14, vrest: 5, dvx: 25, dvy: -3, fall: 100, bdefend: 16, injury: 25
    }
  },
  327: { name: "tobi",
    pic: 75, state: 15, wait: 1, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  328: { name: "tobi",
    pic: 76, state: 15, wait: 2, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  330: { name: "tobi",
    pic: 36, state: 15, wait: 1, next: 331, dvx: -50, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 360, hit_d: 370, hit_j: 355,
    sound: "1/017"
  },
  331: { name: "tobi",
    pic: 77, state: 15, wait: 1, next: 332, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 44, w: 44, h: 14, vrest: 5, dvx: 25, dvy: -3, fall: 100, bdefend: 16, injury: 25
    }
  },
  332: { name: "tobi",
    pic: 78, state: 15, wait: 1, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  333: { name: "tobi",
    pic: 79, state: 15, wait: 2, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  334: { name: "tobi_die",
    pic: 999, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 85, action: 80, dvx: 0, dvy: 0, dvz: 0, oid: 200
    }
  },
  335: { name: "tobi",
    pic: 36, state: 400, wait: 0, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 380, hit_d: 370, hit_j: 360,
    sound: "1/017"
  },
  336: { name: "tobi",
    pic: 80, state: 15, wait: 1, next: 337, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 44, w: 44, h: 14, vrest: 5, dvx: 25, dvy: -3, fall: 100, bdefend: 16, injury: 25
    }
  },
  337: { name: "tobi",
    pic: 81, state: 15, wait: 1, next: 338, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  338: { name: "tobi",
    pic: 82, state: 15, wait: 2, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "tobi",
    pic: 36, state: 15, wait: 2, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 10, y: 16, w: 50, zwidth: 55, h: 65,
      catchingact: [341, 341], caughtact: [130, 130]
    }
  },
  341: { name: "tobi",
    pic: 83, state: 9, wait: 0, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 35, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 45, decrease: 3
    }
  },
  342: { name: "tobi",
    pic: 84, state: 9, wait: 2, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067",
    cpoint: {
      kind: 1, x: 60, y: 35, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 45, decrease: 3
    },
    opoint: {
      kind: 1, x: 60, y: 65, action: 106, dvx: 0, dvy: 0, dvz: 0, oid: 300
    }
  },
  343: { name: "tobi",
    pic: 85, state: 9, wait: 2, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 35, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 25, decrease: 3
    }
  },
  344: { name: "tobi",
    pic: 83, state: 9, wait: 2, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 35, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 25, decrease: 3
    }
  },
  345: { name: "tobi",
    pic: 84, state: 9, wait: 2, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 35, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 25, decrease: 3
    }
  },
  346: { name: "tobi",
    pic: 85, state: 15, wait: 2, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 53, vaction: 180, throwvx: 8, throwvy: -5, throwvz: 3, throwinjury: 30
    }
  },
  350: { name: "tobi",
    pic: 70, state: 3, wait: 2, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 380,
    itr: {
      kind: 8, x: -9950, y: 65, w: 350, zwidth: 10, h: 5, dvx: 340, injury: 0
    }
  },
  351: { name: "tobi",
    pic: 71, state: 3, wait: 2, next: 352, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 370, hit_j: 380
  },
  352: { name: "tobi",
    pic: 72, state: 3, wait: 2, next: 353, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 360, hit_d: 380, hit_j: 370
  },
  353: { name: "tobi",
    pic: 73, state: 3, wait: 2, next: 370, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 360, hit_d: 355, hit_j: 370,
    itr: {
      kind: 8, x: -250, y: 65, w: 9950, zwidth: 990, h: 5, dvx: 335, injury: 0
    }
  },
  355: { name: "tobi_rain",
    pic: 87, state: 15, wait: 2, next: 356, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  356: { name: "tobi_rain",
    pic: 88, state: 15, wait: 1, next: 357, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067",
    opoint: {
      kind: 1, x: 23, y: 5, action: 80, dvx: 0, dvy: 0, oid: 210, facing: 0
    }
  },
  357: { name: "tobi_rain",
    pic: 89, state: 15, wait: 9, next: 358, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "tobi_rain",
    pic: 87, state: 15, wait: 1, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  360: { name: "tobi_katon",
    pic: 90, state: 15, wait: 2, next: 361, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  361: { name: "tobi_katon",
    pic: 91, state: 15, wait: 2, next: 362, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  362: { name: "tobi_katon",
    pic: 92, state: 15, wait: 2, next: 363, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067",
    opoint: {
      kind: 1, x: 85, y: 35, action: 0, dvx: 15, dvy: 0, oid: 408, facing: 0
    }
  },
  363: { name: "tobi_katon",
    pic: 93, state: 15, wait: 2, next: 364, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 39, y: 35, action: 6, dvx: 15, dvy: 0, oid: 408, facing: 20
    }
  },
  364: { name: "tobi_katon",
    pic: 94, state: 15, wait: 1, next: 365, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  365: { name: "tobi_katon",
    pic: 95, state: 15, wait: 1, next: 366, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  366: { name: "tobi_katon",
    pic: 90, state: 15, wait: 1, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  370: { name: "tobi_run",
    pic: 100, state: 3006, wait: 1, next: 371, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 336, hit_d: 380, hit_j: 355
  },
  371: { name: "tobi_run",
    pic: 101, state: 301, wait: 1, next: 372, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 336
  },
  372: { name: "tobi_run",
    pic: 102, state: 301, wait: 1, next: 373, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 326, hit_d: 331, hit_j: 355,
    itr: {
      kind: 8, x: -250, y: 65, w: 9950, zwidth: 990, h: 5, dvx: 325, injury: 0
    }
  },
  373: { name: "tobi_run",
    pic: 103, state: 301, wait: 1, next: 374, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 331
  },
  374: { name: "tobi_run",
    pic: 104, state: 301, wait: 1, next: 375, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 331, hit_d: 355, hit_j: 355,
    itr: {
      kind: 8, x: -250, y: 65, w: 9950, zwidth: 990, h: 5, dvx: 330, injury: 0
    }
  },
  375: { name: "tobi_run",
    pic: 105, state: 301, wait: 1, next: 376, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 360, hit_d: 360, hit_j: 380,
    itr: {
      kind: 8, x: -99999, y: 65, w: 999, zwidth: 999, h: 5, dvx: 335, injury: 0
    }
  },
  376: { name: "tobi_run",
    pic: 100, state: 301, wait: 1, next: 377, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 331
  },
  377: { name: "tobi_run",
    pic: 101, state: 301, wait: 1, next: 378, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 331
  },
  378: { name: "tobi_run",
    pic: 102, state: 301, wait: 1, next: 385, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 331
  },
  379: { name: "tobi_run",
    pic: 110, state: 301, wait: 1, next: 360, dvx: -25, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 355,
    itr: {
      kind: 8, x: -99999, y: 65, w: 999, zwidth: 999, h: 5, dvx: 335, injury: 0
    }
  },
  380: { name: "tobi_earth",
    pic: 96, state: 15, wait: 1, next: 381, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  381: { name: "tobi_earth",
    pic: 97, state: 15, wait: 1, next: 382, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  382: { name: "tobi_earth",
    pic: 98, state: 15, wait: 1, next: 383, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 39, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  383: { name: "tobi_earth",
    pic: 99, state: 15, wait: 1, next: 384, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  384: { name: "tobi_earth",
    pic: 106, state: 15, wait: 1, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  385: { name: "tobi_run",
    pic: 115, state: 3006, wait: 1, next: 386, dvx: -25, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 336, hit_d: 380, hit_j: 355
  },
  386: { name: "tobi_run",
    pic: 114, state: 301, wait: 1, next: 387, dvx: -25, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 336
  },
  387: { name: "tobi_run",
    pic: 113, state: 301, wait: 1, next: 388, dvx: -25, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 326, hit_d: 331, hit_j: 355,
    itr: {
      kind: 8, x: -250, y: 65, w: 9950, zwidth: 990, h: 5, dvx: 325, injury: 0
    }
  },
  388: { name: "tobi_run",
    pic: 112, state: 301, wait: 1, next: 389, dvx: -25, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 355, hit_d: 360, hit_j: 331
  },
  389: { name: "tobi_run",
    pic: 111, state: 301, wait: 1, next: 379, dvx: -25, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 331, hit_d: 355, hit_j: 355,
    itr: {
      kind: 8, x: -250, y: 65, w: 9950, zwidth: 990, h: 5, dvx: 330, injury: 0
    }
  },
  399: { name: "come_here",
    pic: 0, state: 0, wait: 60, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});