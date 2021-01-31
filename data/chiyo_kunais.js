define({
  bmp: {
    file: [
      {
        "file(0-17)": "sprite/chiyo_kunais.png", w: 79, h: 79, row: 6, col: 3
      },
      {
        "file(18-27)": "sprite/hakke_blast.png", w: 345, h: 145, row: 2, col: 5
      },
      {
        "file(28-37)": "sprite/hakke_blast2.png", w: 345, h: 145, row: 2, col: 5
      },
      {
        "file(38-47)": "sprite/hakke_blast3.png", w: 345, h: 145, row: 2, col: 5
      },
      {
        "file(48-55)": "sprite/chiyo_chakra.png", w: 199, h: 99, row: 4, col: 2
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 999, dvx: 50, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 27, w: 12, h: 5, dvx: 10, dvy: -10, fall: 70, vrest: 3, bdefend: 70, injury: 55, effect: 1
      },
      {
        kind: 0, x: 20, y: 26, w: 12, h: 5, dvx: 10, dvy: -10, fall: 70, vrest: 3, bdefend: 70, injury: 55, effect: 1
      },
      {
        kind: 0, x: 15, y: 30, w: 12, h: 5, dvx: 10, dvy: -10, fall: 70, vrest: 3, bdefend: 70, injury: 55, effect: 1
      },
      {
        kind: 0, x: 0, y: 37, w: 12, h: 5, dvx: 10, dvy: -10, fall: 70, vrest: 3, bdefend: 70, injury: 55, effect: 1
      },
      {
        kind: 0, x: 7, y: 42, w: 12, h: 5, dvx: 10, dvy: -10, fall: 70, vrest: 3, bdefend: 70, injury: 55, effect: 1
      }
    ],
    opoint: {
      kind: 1, x: 42, y: 79, action: 1, dvx: 23, dvy: 0, oid: 419, facing: 0
    }
  },
  1: { name: "flying",
    pic: 1, state: 3002, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "flying",
    pic: 2, state: 3002, wait: 1, next: 3, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "flying",
    pic: 3, state: 3002, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "flying",
    pic: 4, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 5, state: 3002, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 79, y: 42, action: 40, dvx: 20, dvy: 0, oid: 120, facing: 50
    }
  },
  20: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 79, y: 42, action: 40, dvx: 20, dvy: 0, oid: 120, facing: 50
    }
  },
  30: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 79, y: 42, action: 40, dvx: 20, dvy: 0, oid: 120, facing: 50
    }
  },
  32: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 33, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  33: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 34, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  34: { name: "flying",
    pic: 3, state: 3000, wait: 0, next: 35, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  35: { name: "flying",
    pic: 4, state: 3000, wait: 0, next: 36, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  36: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 37, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  37: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 38, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  38: { name: "flying",
    pic: 3, state: 3000, wait: 0, next: 1000, dvx: 60, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 42, y: 79, action: 39, dvx: 10, dvy: 0, oid: 419, facing: 0
    }
  },
  39: { name: "flying",
    pic: 1, state: 3005, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "flying",
    pic: 2, state: 3005, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "flying",
    pic: 3, state: 3005, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "flying",
    pic: 4, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "chakra catch",
    pic: 999, state: 9, wait: 2, next: 1000, dvx: 550, centerx: 34, centery: 79,
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [44, 44], caughtact: [132, 132]
    }
  },
  44: { name: "chakra catch",
    pic: 999, state: 9, wait: 5, next: 45, centerx: 34, centery: 79,
    cpoint: {
      kind: 1, x: 40, y: 34, vaction: 133, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    }
  },
  45: { name: "chakra catch",
    pic: 999, state: 9, wait: 2, next: 46, dvy: -50, centerx: 34, centery: 79,
    cpoint: {
      kind: 1, x: 40, y: 34, vaction: 136, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  46: { name: "chakra catch",
    pic: 999, state: 9, wait: 3, next: 47, dvy: 550, centerx: 34, centery: 79,
    cpoint: {
      kind: 1, x: 40, y: 34, vaction: 135, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  47: { name: "chakra catch",
    pic: 999, state: 9, wait: 2, next: 48, dvy: 53, centerx: 34, centery: 79,
    cpoint: {
      kind: 1, x: 40, y: 34, vaction: 136, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  48: { name: "chakra catch",
    pic: 999, state: 9, wait: 0, next: 49, dvx: 20, dvy: 550, centerx: 34, centery: 79,
    sound: "1/021",
    cpoint: {
      kind: 1, x: 40, y: 34, vaction: 136, injury: 70, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  49: { name: "chakra catch",
    pic: 999, state: 9, wait: 0, next: 1000, dvx: 20, dvy: 550, centerx: 34, centery: 79,
    cpoint: {
      kind: 1, x: 40, y: 34, injury: 100, cover: 11, vaction: 181, throwvx: 13, throwvy: -5, throwinjury: 0
    },
    opoint: {
      kind: 1, x: 40, y: 65, action: 35, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  50: { name: "scroll",
    pic: 6, state: 3005, wait: 3, next: 51, dvx: 10, dvy: -7, centerx: 34, centery: 79
  },
  51: { name: "scroll",
    pic: 7, state: 3005, wait: 1, next: 52, dvx: 550, dvy: 550, centerx: 34, centery: 79
  },
  52: { name: "scroll",
    pic: 8, state: 3005, wait: 0, next: 53, dvx: 550, dvy: 550, centerx: 34, centery: 79,
    sound: "1/061",
    opoint: {
      kind: 1, x: 42, y: 70, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  53: { name: "scroll",
    pic: 8, state: 3005, wait: 0, next: 60, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 70, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 1
    }
  },
  54: { name: "scroll",
    pic: 999, state: 3005, wait: 2, next: 55, dvx: 550, centerx: 34, centery: 79, hit_a: 40, hit_d: 58,
    opoint: {
      kind: 1, x: 32, y: 45, action: 40, dvx: 85, dvy: 5, oid: 120, facing: 50
    }
  },
  55: { name: "scroll",
    pic: 999, state: 3005, wait: 2, next: 56, dvx: 550, centerx: 34, centery: 79, hit_a: 40, hit_d: 58,
    opoint: {
      kind: 1, x: 32, y: 40, action: 40, dvx: 65, dvy: 5, oid: 121, facing: 50
    }
  },
  56: { name: "scroll",
    pic: 999, state: 3005, wait: 2, next: 57, dvx: 550, centerx: 34, centery: 79, hit_a: 40, hit_d: 58,
    opoint: {
      kind: 1, x: 32, y: 36, action: 40, dvx: 45, dvy: 5, oid: 120, facing: 50
    }
  },
  57: { name: "scroll",
    pic: 999, state: 3005, wait: 3, next: 54, dvx: 550, centerx: 34, centery: 79, hit_a: 40, hit_d: 58,
    opoint: {
      kind: 1, x: 32, y: 44, action: 40, dvx: 25, dvy: 5, oid: 121, facing: 50
    }
  },
  58: { name: "scroll",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, centerx: 34, centery: 79
  },
  60: { name: "scroll",
    pic: 9, state: 3005, wait: 0, next: 61, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 50, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  61: { name: "scroll",
    pic: 9, state: 3005, wait: 0, next: 62, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 50, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 1
    }
  },
  62: { name: "scroll",
    pic: 9, state: 3005, wait: 0, next: 63, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 30, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  63: { name: "scroll",
    pic: 10, state: 3005, wait: 0, next: 64, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 30, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 1
    }
  },
  64: { name: "scroll",
    pic: 10, state: 3005, wait: 0, next: 65, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 0, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  65: { name: "scroll",
    pic: 10, state: 3005, wait: 5, next: 66, dvx: 550, centerx: 34, centery: 79,
    opoint: {
      kind: 1, x: 42, y: 0, action: 54, dvx: 0, dvy: 0, oid: 419, facing: 1
    }
  },
  66: { name: "scroll_scream",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, effect: 5
    }
  },
  68: { name: "hakke_blast",
    pic: 12, state: 15, wait: 1, next: 69, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "hakke_blast",
    pic: 18, state: 3005, wait: 1, next: 71, dvx: 550, dvy: 550, dvz: 550, centerx: 102, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "hakke_blast",
    pic: 13, state: 15, wait: 1, next: 68, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "hakke_blast",
    pic: 19, state: 15, wait: 1, next: 72, dvx: 550, dvy: 550, dvz: 550, centerx: 102, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "hakke_blast",
    pic: 20, state: 15, wait: 1, next: 73, dvx: 550, dvy: 550, dvz: 550, centerx: 102, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/059"
  },
  73: { name: "hakke_blast",
    pic: 21, state: 15, wait: 1, next: 74, dvx: 550, dvy: 550, dvz: 550, centerx: 102, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 92, y: 61, w: 110, h: 999, dvx: 0, dvy: 0, fall: 0, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  74: { name: "hakke_blast",
    pic: 22, state: 15, wait: 1, next: 75, dvx: 550, dvy: 550, dvz: 550, centerx: 102, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 99, y: 62, w: 185, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    },
    opoint: {
      kind: 1, x: 135, y: 115, action: 165, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  75: { name: "hakke_blast",
    pic: 23, state: 15, wait: 1, next: 76, dvx: 550, dvy: 550, dvz: 550, centerx: 102, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 275, y: 145, action: 80, dvx: 10, dvy: 0, oid: 419
    },
    itr: {
      kind: 0, x: 99, y: 62, w: 250, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  76: { name: "hakke_blast",
    pic: 24, state: 15, wait: 1, next: 77, dvx: 550, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 275, y: 145, action: 80, dvx: 10, dvy: 0, oid: 419
    },
    itr: {
      kind: 0, x: 99, y: 62, w: 250, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  77: { name: "hakke_blast",
    pic: 25, state: 15, wait: 1, next: 78, dvx: 550, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 275, y: 145, action: 81, dvx: 10, dvy: 0, oid: 419
    },
    itr: {
      kind: 0, x: 99, y: 62, w: 250, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  78: { name: "hakke_blast",
    pic: 26, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 275, y: 145, action: 82, dvx: 10, dvy: 0, oid: 419
    },
    itr: {
      kind: 0, x: 99, y: 62, w: 250, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  80: { name: "hakke_blast",
    pic: 27, state: 15, wait: 2, next: 1000, dvx: 20, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 62, w: 345, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  81: { name: "hakke_blast",
    pic: 28, state: 15, wait: 2, next: 1000, dvx: 20, dvy: 550, dvz: 550, centerx: 48, centery: 146, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 62, w: 345, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  82: { name: "hakke_blast",
    pic: 29, state: 15, wait: 2, next: 1000, dvx: 20, dvy: 550, dvz: 550, centerx: 48, centery: 146, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 62, w: 345, h: 9999, dvx: 0, dvy: 0, fall: 100, arest: 3, bdefend: 100, injury: 25, effect: 5
    }
  },
  85: { name: "water_gun",
    pic: 30, state: 3003, wait: 1, next: 86, dvx: 0, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043"
  },
  86: { name: "water_gun",
    pic: 31, state: 3003, wait: 1, next: 87, dvx: 0, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "water_gun",
    pic: 32, state: 3003, wait: 1, next: 88, dvx: 2, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 72, w: 280, h: 11, dvx: 0, dvy: -5, fall: 100, vrest: 15, bdefend: 100, injury: 80, effect: 1
    }
  },
  88: { name: "water_gun",
    pic: 33, state: 3003, wait: 0, next: 89, dvx: 0, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 72, w: 335, h: 11, dvx: 0, dvy: -5, fall: 100, vrest: 15, bdefend: 100, injury: 80, effect: 1
    }
  },
  89: { name: "water_gun",
    pic: 34, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "sand_glide",
    pic: 14, state: 3005, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "sand_glide",
    pic: 15, state: 3005, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "sand_glide",
    pic: 16, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "dark_chidori_sword",
    pic: 35, state: 18, wait: 3, next: 94, dvx: 0, dvy: 550, dvz: 550, centerx: 35, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 68, w: 255, h: 18, dvx: 5, dvy: -7, fall: 100, vrest: 15, bdefend: 100, injury: 20, effect: 1
    }
  },
  94: { name: "dark_chidori_sword",
    pic: 36, state: 18, wait: 2, next: 95, dvx: 0, dvy: 550, dvz: 550, centerx: 48, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 68, w: 255, h: 16, dvx: 5, dvy: -7, fall: 100, vrest: 15, bdefend: 100, injury: 20, effect: 1
    }
  },
  95: { name: "dark_chidori_sword",
    pic: 37, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 68, w: 255, h: 16, dvx: 5, dvy: -7, fall: 100, vrest: 15, bdefend: 100, injury: 20, effect: 1
    }
  },
  100: { name: "itachi_slash",
    pic: 38, state: 15, wait: 1, next: 101, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "itachi_slash",
    pic: 39, state: 15, wait: 1, next: 102, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 350, h: 100, dvx: 15, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 70, effect: 1
      },
      {
        kind: 0, x: 0, y: 30000, w: 350, h: 100, dvx: -5, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 70, effect: 1
      }
    ]
  },
  102: { name: "itachi_slash",
    pic: 40, state: 15, wait: 1, next: 103, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 350, h: 100, dvx: 15, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 70, effect: 1
      },
      {
        kind: 0, x: 0, y: 30000, w: 350, h: 100, dvx: -5, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 70, effect: 1
      }
    ]
  },
  103: { name: "itachi_slash",
    pic: 41, state: 15, wait: 1, next: 1000, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "chakra_strings",
    pic: 48, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 0, y: 3, w: 68, h: 60, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  121: { name: "chakra_strings",
    pic: 49, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 0, y: 23, w: 160, h: 45, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  122: { name: "chakra_strings",
    pic: 50, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 20, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 0, y: 37, w: 128, h: 60, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  123: { name: "chakra_strings",
    pic: 51, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 40, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 0, y: 13, w: 53, h: 60, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  124: { name: "chakra_strings",
    pic: 52, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 20, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 10, y: 10, w: 70, h: 60, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  125: { name: "chakra_strings",
    pic: 53, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 25, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 0, y: 45, w: 145, h: 30, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  126: { name: "chakra_strings",
    pic: 54, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    itr: {
      kind: 0, x: 0, y: 15, w: 53, h: 53, dvx: 5, dvy: -7, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 1
    }
  },
  127: { name: "zab_slash",
    pic: 38, state: 15, wait: 1, next: 128, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028"
  },
  128: { name: "zab_slash",
    pic: 39, state: 15, wait: 1, next: 129, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 350, h: 100, dvx: 15, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 270, effect: 1
      },
      {
        kind: 0, x: 0, y: 30000, w: 350, h: 100, dvx: -5, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 270, effect: 1
      }
    ]
  },
  129: { name: "zab_slash",
    pic: 40, state: 15, wait: 1, next: 130, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 350, h: 100, dvx: 15, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 270, effect: 1
      },
      {
        kind: 0, x: 0, y: 30000, w: 350, h: 100, dvx: -5, dvy: -12, fall: 100, vrest: 25, bdefend: 100, injury: 270, effect: 1
      }
    ]
  },
  130: { name: "zab_slash",
    pic: 41, state: 15, wait: 1, next: 1000, dvx: 30, dvy: 550, dvz: 550, centerx: 50, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});