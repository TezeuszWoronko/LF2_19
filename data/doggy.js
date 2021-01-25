define({
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/doggy.png", w: 81, h: 82, row: 8, col: 5
      },
      {
        "file(40-50)": "sprite/big_dog.png", w: 255, h: 150, row: 3, col: 3
      }
    ],
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "rasenthrow",
    pic: 24, state: 3000, wait: 2, next: 1, dvx: 10, dvy: 0, dvz: 4, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [310, 310], caughtact: [130, 130]
    }
  },
  1: { name: "rasenthrow",
    pic: 25, state: 3000, wait: 2, next: 2, dvx: 30, dvy: 0, dvz: 4, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [310, 310], caughtact: [130, 130]
    }
  },
  2: { name: "rasenthrow",
    pic: 26, state: 3000, wait: 2, next: 999, dvx: 10, dvy: 0, dvz: 4, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [310, 310], caughtact: [130, 130]
    }
  },
  10: { name: "hitting",
    pic: 999, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "dog1",
    pic: 5, state: 400, wait: 2, next: 41, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007"
  },
  41: { name: "dog1",
    pic: 0, state: 3002, wait: 1, next: 42, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  42: { name: "dog1",
    pic: 1, state: 3002, wait: 1, next: 43, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  43: { name: "dog1",
    pic: 2, state: 3002, wait: 1, next: 44, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  44: { name: "dog1",
    pic: 3, state: 3002, wait: 1, next: 45, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    },
    opoint: {
      kind: 1, x: 145, y: 79, action: 85, dvx: 0, dvy: 0, oid: 216, facing: 1
    }
  },
  45: { name: "dog1",
    pic: 4, state: 3002, wait: 1, next: 80, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  50: { name: "rasenshuriken",
    pic: 32, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "rasenshuriken",
    pic: 33, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "rasenshuriken",
    pic: 34, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "rasenshuriken",
    pic: 35, state: 3005, wait: 1, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 55, dvx: 0, dvy: 0, oid: 216, facing: 0
    }
  },
  54: { name: "rasenshuriken",
    pic: 36, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "rasenshuriken2",
    pic: 24, state: 3005, wait: 1, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "rasenshuriken2",
    pic: 25, state: 3005, wait: 1, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "rasenshuriken2",
    pic: 26, state: 3005, wait: 1, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  58: { name: "rasenshuriken2",
    pic: 24, state: 3005, wait: 1, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "rasenshuriken2",
    pic: 25, state: 3005, wait: 1, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "rasenshuriken2",
    pic: 26, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "rasenshuriken2",
    pic: 26, state: 3000, wait: 3, next: 1000, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [10, 10], caughtact: [130, 130]
    }
  },
  65: { name: "rasengan2",
    pic: 29, state: 3005, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "rasengan2",
    pic: 30, state: 3005, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "rasengan2",
    pic: 31, state: 3005, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "rasengan2",
    pic: 37, state: 3005, wait: 1, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "rasengan2",
    pic: 38, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "rasengan3",
    pic: 32, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078"
  },
  71: { name: "rasengan3",
    pic: 33, state: 3005, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "rasengan3",
    pic: 34, state: 3005, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "rasengan3",
    pic: 35, state: 3005, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "rasengan3",
    pic: 36, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "sixty_four",
    pic: 18, state: 3005, wait: 0, next: 76, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "sixty_four",
    pic: 19, state: 3005, wait: 0, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "sixty_four",
    pic: 20, state: 3005, wait: 0, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "sixty_four",
    pic: 21, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "dog1",
    pic: 0, state: 3002, wait: 1, next: 81, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  81: { name: "dog1",
    pic: 1, state: 3002, wait: 1, next: 82, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  82: { name: "dog1",
    pic: 2, state: 3002, wait: 1, next: 83, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  83: { name: "dog1",
    pic: 3, state: 3002, wait: 1, next: 84, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 8
    }
  },
  84: { name: "dog1",
    pic: 4, state: 3002, wait: 1, next: 1000, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  85: { name: "dog2",
    pic: 5, state: 3002, wait: 1, next: 86, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    }
  },
  86: { name: "dog2",
    pic: 7, state: 3002, wait: 1, next: 87, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    }
  },
  87: { name: "dog2",
    pic: 8, state: 3002, wait: 1, next: 88, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    }
  },
  88: { name: "dog2",
    pic: 9, state: 3002, wait: 1, next: 89, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    }
  },
  89: { name: "dog1",
    pic: 10, state: 3002, wait: 1, next: 90, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "dog2",
    pic: 7, state: 3002, wait: 1, next: 91, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    }
  },
  91: { name: "dog2",
    pic: 8, state: 3002, wait: 1, next: 92, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    },
    opoint: {
      kind: 1, x: 145, y: 79, action: 95, dvx: 0, dvy: 0, oid: 216, facing: 1
    }
  },
  92: { name: "dog2",
    pic: 9, state: 3002, wait: 1, next: 93, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 10
    }
  },
  93: { name: "dog2",
    pic: 10, state: 3002, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  95: { name: "dog3",
    pic: 15, state: 400, wait: 2, next: 96, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  96: { name: "dog3",
    pic: 16, state: 3002, wait: 1, next: 97, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  97: { name: "dog3",
    pic: 17, state: 3002, wait: 1, next: 98, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  98: { name: "dog3",
    pic: 22, state: 3002, wait: 1, next: 99, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    },
    opoint: {
      kind: 1, x: 145, y: 79, action: 105, dvx: 0, dvy: 0, oid: 216, facing: 1
    }
  },
  99: { name: "dog3",
    pic: 23, state: 3002, wait: 1, next: 100, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  100: { name: "dog3",
    pic: 16, state: 3002, wait: 1, next: 101, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  101: { name: "dog3",
    pic: 17, state: 3002, wait: 1, next: 102, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  102: { name: "dog3",
    pic: 22, state: 3002, wait: 1, next: 103, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 15
    }
  },
  103: { name: "dog3",
    pic: 23, state: 3002, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  105: { name: "dog4",
    pic: 5, state: 15, wait: 1, next: 106, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  106: { name: "dog4",
    pic: 7, state: 3002, wait: 1, next: 107, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  107: { name: "dog4",
    pic: 8, state: 3002, wait: 1, next: 108, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    },
    opoint: {
      kind: 1, x: 145, y: 79, action: 115, dvx: 0, dvy: 0, oid: 216, facing: 0
    }
  },
  108: { name: "dog4",
    pic: 9, state: 3002, wait: 1, next: 109, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  109: { name: "dog4",
    pic: 10, state: 3002, wait: 1, next: 110, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  110: { name: "dog4",
    pic: 7, state: 3002, wait: 1, next: 111, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  111: { name: "dog4",
    pic: 8, state: 3002, wait: 1, next: 112, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  112: { name: "dog4",
    pic: 9, state: 3002, wait: 1, next: 113, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  113: { name: "dog4",
    pic: 10, state: 3002, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  115: { name: "dog4",
    pic: 15, state: 400, wait: 2, next: 116, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  116: { name: "dog4",
    pic: 27, state: 3002, wait: 1, next: 117, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  117: { name: "dog4",
    pic: 28, state: 3002, wait: 1, next: 118, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  118: { name: "dog4",
    pic: 39, state: 3002, wait: 1, next: 119, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  119: { name: "dog4",
    pic: 6, state: 3002, wait: 1, next: 120, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    },
    opoint: {
      kind: 1, x: 255, y: 70, action: 125, dvx: 0, dvy: 0, oid: 230, facing: 1
    }
  },
  120: { name: "dog4",
    pic: 27, state: 3002, wait: 1, next: 121, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  121: { name: "dog4",
    pic: 28, state: 3002, wait: 1, next: 122, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  122: { name: "dog4",
    pic: 39, state: 3002, wait: 1, next: 123, dvx: 16, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 56, w: 30, h: 22, dvx: 2, fall: 2, vrest: 10, bdefend: 1, injury: 20
    }
  },
  123: { name: "dog4",
    pic: 6, state: 3002, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  125: { name: "smoke_big",
    pic: 40, state: 3005, wait: 1, next: 126, dvx: 550, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  126: { name: "smoke_big",
    pic: 41, state: 3005, wait: 1, next: 127, dvx: 550, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "smoke_big",
    pic: 42, state: 3005, wait: 1, next: 128, dvx: 550, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "smoke_big",
    pic: 43, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "huge_dog",
    pic: 999, state: 3005, wait: 2, next: 131, dvx: 550, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089"
  },
  131: { name: "huge_dog",
    pic: 44, state: 3005, wait: 8, next: 132, dvx: 7, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "huge_dog",
    pic: 45, state: 3005, wait: 2, next: 133, dvx: 0, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "huge_dog",
    pic: 46, state: 3005, wait: 2, next: 134, dvx: 0, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "huge_dog",
    pic: 47, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, dvz: 550, centerx: 127, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0
  },
  305: { name: "rasenthrow",
    pic: 24, state: 3005, wait: 2, next: 306, dvx: 30, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [310, 310], caughtact: [130, 130]
    }
  },
  306: { name: "rasenthrow",
    pic: 25, state: 3005, wait: 2, next: 307, dvx: 10, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [310, 310], caughtact: [130, 130]
    }
  },
  307: { name: "rasenthrow",
    pic: 26, state: 3005, wait: 2, next: 305, dvx: 10, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [310, 310], caughtact: [130, 130]
    }
  },
  310: { name: "hiting2",
    pic: 88, state: 9, wait: 1, next: 311, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  311: { name: "hiting2",
    pic: 89, state: 9, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    opoint: {
      kind: 1, x: 50, y: 80, action: 179, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  312: { name: "hiting2",
    pic: 90, state: 9, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043",
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  }
  }
});