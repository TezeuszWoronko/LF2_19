define({
  bmp: {
    file: [
      {
        "file(0-8)": "sprite/water.png", w: 145, h: 120, row: 3, col: 3
      },
      {
        "file(9-10)": "sprite/water_prison.png", w: 118, h: 110, row: 2, col: 1
      },
      {
        "file(11-26)": "sprite/shark.png", w: 115, h: 145, row: 4, col: 4
      },
      {
        "file(27-32)": "sprite/shark_multi.png", w: 360, h: 290, row: 3, col: 2
      },
      {
        "file(33-38)": "sprite/shark_multi2.png", w: 360, h: 290, row: 3, col: 2
      },
      {
        "file(39-46)": "sprite/nckakuzu_water.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(47-99)": "sprite/god.png", w: 221, h: 232, row: 4, col: 4
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "die",
    pic: 999, state: 3005, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "die",
    pic: 999, state: 3005, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 120, y: 145, action: 14, dvx: 0, dvy: 0, oid: 416, facing: 0
    }
  },
  2: { name: "die",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 139, action: 60, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  5: { name: "water_sharks",
    pic: 27, state: 3003, wait: 0, next: 6, dvx: 550, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "water_sharks",
    pic: 28, state: 3003, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "water_sharks",
    pic: 29, state: 3003, wait: 1, next: 8, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 63, y: 205, w: 235, h: 90, dvx: 5, dvy: -35, fall: 100, vrest: 5, bdefend: 100, injury: 60
    }
  },
  8: { name: "water_sharks",
    pic: 30, state: 3003, wait: 1, next: 9, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 147, w: 320, h: 155, dvx: 5, dvy: -35, fall: 100, vrest: 5, bdefend: 100, injury: 60
    }
  },
  9: { name: "water_sharks",
    pic: 31, state: 3003, wait: 1, next: 65, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 75, w: 315, h: 230, dvx: 5, dvy: -35, fall: 100, vrest: 5, bdefend: 100, injury: 60
    }
  },
  10: { name: "hiting",
    pic: 13, state: 3006, wait: 2, next: 11, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 14, state: 3006, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 145, action: 12, dvx: 0, dvy: 0, oid: 416, facing: 0
    }
  },
  12: { name: "hiting",
    pic: 17, state: 3006, wait: 2, next: 13, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 18, state: 3006, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 17, y: -50, w: 115, h: 200, dvx: 5, dvy: -10, fall: 100, arest: 10, bdefend: 100, injury: 30, effect: 1
    },
    opoint: {
      kind: 1, x: 90, y: 100, action: 17, dvx: 0, dvy: 0, oid: 416, facing: 0
    }
  },
  14: { name: "splash",
    pic: 19, state: 3005, wait: 1, next: 15, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "splash",
    pic: 20, state: 3005, wait: 1, next: 16, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "splash",
    pic: 21, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "splash2",
    pic: 19, state: 3005, wait: 2, next: 18, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "splash2",
    pic: 20, state: 3005, wait: 2, next: 19, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  19: { name: "splash2",
    pic: 21, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 19, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 41, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 145, action: 22, dvx: 10, dvy: 0, oid: 416, facing: 0
    }
  },
  22: { name: "hit",
    pic: 20, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 44, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 21, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 145, action: 30, dvx: 10, dvy: 0, oid: 416, facing: 0
    }
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "prison",
    pic: 9, state: 3005, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 60, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "prison",
    pic: 10, state: 3006, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "fin",
    pic: 11, state: 3000, wait: 1, next: 46, dvx: 20, dvy: 0, dvz: "centerx", centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 100, w: 80, h: 79, dvx: -5, dvy: -45, fall: 100, vrest: 10, bdefend: 100, injury: 30
    }
  },
  46: { name: "fin",
    pic: 12, state: 3000, wait: 1, next: 45, dvx: 20, dvy: 0, dvz: "centerx", centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 100, w: 80, h: 79, dvx: -5, dvy: -45, fall: 100, vrest: 10, bdefend: 100, injury: 30
    }
  },
  55: { name: "dragon",
    pic: 0, state: 3002, wait: 1, next: 56, dvx: 0, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "dragon",
    pic: 1, state: 3002, wait: 2, next: 57, dvx: 4, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 40, y: 27, w: 100, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 16, injury: 45
    }
  },
  57: { name: "dragon",
    pic: 2, state: 3002, wait: 2, next: 58, dvx: 4, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 27, w: 100, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 16, injury: 45
    }
  },
  58: { name: "dragon",
    pic: 3, state: 3002, wait: 2, next: 59, dvx: 4, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 27, w: 100, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 16, injury: 45
    }
  },
  59: { name: "dragon",
    pic: 4, state: 3002, wait: 2, next: 60, dvx: 4, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 27, w: 100, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 16, injury: 45
    }
  },
  60: { name: "dragon",
    pic: 5, state: 3002, wait: 2, next: 61, dvx: 4, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 27, w: 100, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 16, injury: 45
    }
  },
  61: { name: "dragon",
    pic: 6, state: 3002, wait: 1, next: 62, dvx: 1, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 27, w: 100, h: 79, dvx: 10, dvy: -10, fall: 70, vrest: 10, bdefend: 16, injury: 45
    }
  },
  62: { name: "dragon",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 1, dvy: 0, centerx: 75, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "water_sharks",
    pic: 32, state: 3003, wait: 1, next: 66, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 75, w: 315, zwidth: 25, h: 230, dvx: 5, dvy: -27, fall: 100, vrest: 5, bdefend: 100, injury: 35
    }
  },
  66: { name: "water_sharks",
    pic: 33, state: 3003, wait: 1, next: 68, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 15, w: 340, zwidth: 25, h: 270, dvx: 5, dvy: -17, fall: 100, vrest: 5, bdefend: 100, injury: 35
      },
      {
        kind: 0, x: 10, y: 15, w: 340, zwidth: 25, h: 270, dvx: 5, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 35
      }
    ]
  },
  68: { name: "water_sharks",
    pic: 35, state: 3003, wait: 1, next: 69, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 20, w: 300, zwidth: 25, h: 150, dvx: 5, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 35
    }
  },
  69: { name: "water_sharks",
    pic: 36, state: 3003, wait: 1, next: 70, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 20, w: 300, zwidth: 25, h: 150, dvx: 5, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 35
    }
  },
  70: { name: "water_sharks",
    pic: 37, state: 3003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 60, y: 35, w: 200, zwidth: 25, h: 105, dvx: 5, dvy: -10, fall: 100, vrest: 10, bdefend: 100, injury: 35
    }
  },
  71: { name: "water_sharks",
    pic: 38, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 180, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "water_clone",
    pic: 22, state: 3000, wait: 1, next: 76, dvx: 0, dvy: 0, centerx: 57, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "water_clone",
    pic: 23, state: 3000, wait: 1, next: 77, dvx: 0, dvy: 0, centerx: 57, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "water_clone",
    pic: 24, state: 3000, wait: 1, next: 78, dvx: 20, dvy: 0, centerx: 57, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 45, y: 75, w: 70, h: 65,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  78: { name: "water_clone",
    pic: 24, state: 3000, wait: 1, next: 79, dvx: 20, dvy: 0, centerx: 57, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 45, y: 75, w: 70, h: 65,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  79: { name: "water_clone",
    pic: 24, state: 3000, wait: 1, next: 80, dvx: 20, dvy: 0, centerx: 57, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 45, y: 75, w: 70, h: 65,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  80: { name: "water_clone",
    pic: 25, state: 3000, wait: 0, next: 81, dvx: 20, dvy: 0, centerx: 57, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 45, y: 75, w: 70, h: 65,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  81: { name: "water_clone",
    pic: 25, state: 3000, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 57, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 45, y: 75, w: 70, h: 65,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  82: { name: "water_clone",
    pic: 25, state: 3000, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 57, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 145, action: 62, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    itr: {
      kind: 3, x: 45, y: 75, w: 70, h: 65,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  85: { name: "water_clone_catch",
    pic: 15, state: 9, wait: 1, next: 86, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 7, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 120, y: 80, injury: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 35, y: 68, w: 55, h: 77
    }
  },
  86: { name: "water_clone_catch",
    pic: 16, state: 9, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 7, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 120, y: 80, injury: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 35, y: 68, w: 55, h: 77
    }
  },
  87: { name: "water_clone_catch",
    pic: 26, state: 9, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 7, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 120, y: 80, injury: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 35, y: 68, w: 55, h: 77
    }
  },
  88: { name: "water_clone_catch",
    pic: 16, state: 9, wait: 1, next: 85, dvx: 0, dvy: 0, centerx: 57, centery: 147, hit_a: 7, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 120, y: 80, injury: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 35, y: 68, w: 55, h: 77
    }
  },
  90: { name: "water_wave",
    pic: 43, state: 3005, wait: 2, next: 91, dvx: -10, dvy: 0, centerx: 41, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 50, w: 30, zwidth: 8, h: 30, dvx: 0, dvy: -10, fall: 70, vrest: 10, bdefend: 100, injury: 8, effect: 5
    }
  },
  91: { name: "water_wave",
    pic: 44, state: 3005, wait: 2, next: 92, dvx: 0, dvy: 0, centerx: 41, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 50, w: 30, zwidth: 8, h: 30, dvx: 0, dvy: -10, fall: 70, vrest: 10, bdefend: 100, injury: 8, effect: 5
    }
  },
  92: { name: "water_wave",
    pic: 45, state: 3005, wait: 2, next: 93, dvx: 0, dvy: 0, centerx: 41, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 50, w: 30, zwidth: 8, h: 30, dvx: 0, dvy: -10, fall: 70, vrest: 10, bdefend: 100, injury: 8, effect: 5
    }
  },
  93: { name: "water_wave",
    pic: 46, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 50, w: 30, zwidth: 8, h: 30, dvx: 0, dvy: -10, fall: 70, vrest: 10, bdefend: 100, injury: 8, effect: 5
    }
  },
  94: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 95, dvx: 22, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/wave",
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 71
    }
  },
  95: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 96, dvx: 21, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 61
    }
  },
  96: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 97, dvx: 20, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 51
    }
  },
  97: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 98, dvx: 18, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 41
    }
  },
  98: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 99, dvx: 16, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 31
    }
  },
  99: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 101, dvx: 12, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 21
    }
  },
  100: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 94, dvx: 0, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "water_wave",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 8, dvy: 0, centerx: 81, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 90, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 1
    }
  },
  165: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 166, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 167, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 168, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  168: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 169, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  169: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 170, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 171, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 172, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 211, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "god",
    pic: 51, state: 3005, wait: 2, next: 176, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "god",
    pic: 52, state: 3005, wait: 4, next: 177, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "god",
    pic: 53, state: 3005, wait: 4, next: 211, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  178: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 179, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  179: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 180, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 181, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  181: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 182, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  182: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 183, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  183: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 184, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  184: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 185, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 186, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  186: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 187, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  187: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 188, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  188: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 189, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  189: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 193, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "god",
    pic: 52, state: 3005, wait: 4, next: 191, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "god",
    pic: 53, state: 3005, wait: 4, next: 192, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  192: { name: "god",
    pic: 54, state: 3005, wait: 4, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  193: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 194, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  194: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 195, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  195: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 196, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  196: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 197, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  197: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 198, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  198: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 199, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  199: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 200, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 201, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  201: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 202, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  202: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 203, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  203: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 204, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  204: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 205, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  205: { name: "god",
    pic: 47, state: 3005, wait: 4, next: 206, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  206: { name: "god",
    pic: 48, state: 3005, wait: 4, next: 207, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  207: { name: "god",
    pic: 49, state: 3005, wait: 4, next: 208, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  208: { name: "god",
    pic: 50, state: 3005, wait: 4, next: 175, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  },
  211: { name: "god",
    pic: 54, state: 3005, wait: 4, next: 190, dvx: 0, dvy: 0, centerx: 110, centery: 231, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});