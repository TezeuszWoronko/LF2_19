define({
  bmp: {
    file: [
      {
        "file(0-34)": "sprite/ink.png", w: 120, h: 65, row: 5, col: 7
      },
      {
        "file(35-69)": "sprite/ink2.png", w: 115, h: 90, row: 5, col: 7
      },
      {
        "file(70-77)": "sprite/crow.png", w: 81, h: 82, row: 4, col: 4
      }
    ],
    weapon_drop_sound: "1/lion"
  },
  frame: {
  0: { name: "hit",
    pic: 0, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "lion",
    pic: 5, state: 3000, wait: 1, next: 2, dvx: 20, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 100, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 60, h: 55
    }
  },
  2: { name: "lion",
    pic: 6, state: 3000, wait: 1, next: 3, dvx: 20, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 100, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 60, h: 55
    }
  },
  3: { name: "lion",
    pic: 7, state: 3000, wait: 1, next: 4, dvx: 20, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 100, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 60, h: 55
    }
  },
  4: { name: "lion",
    pic: 8, state: 3000, wait: 1, next: 1, dvx: 20, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 100, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 60, h: 55
    }
  },
  5: { name: "flying",
    pic: 3, state: 3006, wait: 3, next: 6, dvx: 20, dvy: 0, centerx: 60, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/lion",
    itr: {
      kind: 0, x: 45, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 100, vrest: 10, bdefend: 16, injury: 55
    }
  },
  6: { name: "flying",
    pic: 4, state: 3006, wait: 3, next: 1, dvx: 15, dvy: 0, centerx: 60, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 27, w: 55, h: 27, dvx: 10, dvy: -15, fall: 100, vrest: 10, bdefend: 16, injury: 55
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3006, wait: 5, next: 1, dvx: 20, dvy: 0, centerx: 60, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/growl"
  },
  11: { name: "hiting",
    pic: 1, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 2, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 0, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 0, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "ink",
    pic: 10, state: 3005, wait: 3, next: 41, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "ink",
    pic: 11, state: 3005, wait: 2, next: 42, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "ink",
    pic: 12, state: 3005, wait: 1, next: 43, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "ink",
    pic: 13, state: 3005, wait: 1, next: 44, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "ink",
    pic: 14, state: 3005, wait: 1, next: 45, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "ink",
    pic: 15, state: 3005, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "ink",
    pic: 16, state: 3005, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "ink",
    pic: 17, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "twirl",
    pic: 18, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "twirl",
    pic: 19, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "twirl",
    pic: 20, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "twirl",
    pic: 21, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "snake",
    pic: 22, state: 3003, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 60, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 16, w: 30, h: 65,
      catchingact: [65, 65], caughtact: [130, 130]
    }
  },
  61: { name: "snake",
    pic: 23, state: 3003, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 60, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 16, w: 30, h: 65,
      catchingact: [65, 65], caughtact: [130, 130]
    }
  },
  62: { name: "snake",
    pic: 24, state: 3003, wait: 3, next: 63, dvx: 18, dvy: 550, dvz: 0, centerx: 60, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3,
    itr: {
      kind: 3, x: 60, y: 16, w: 30, h: 65,
      catchingact: [65, 65]
    }
  },
  63: { name: "snake",
    pic: 25, state: 3003, wait: 3, next: 64, dvx: 18, dvy: 550, dvz: 0, centerx: 60, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3,
    itr: {
      kind: 3, x: 60, y: 16, w: 30, h: 65,
      catchingact: [65, 65]
    }
  },
  64: { name: "snake",
    pic: 26, state: 3003, wait: 3, next: 62, dvx: 18, dvy: 550, dvz: 0, centerx: 60, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 3,
    itr: {
      kind: 3, x: 60, y: 16, w: 30, h: 65,
      catchingact: [65, 65]
    }
  },
  65: { name: "snake_caught",
    pic: 27, state: 9, wait: 20, next: 66, dvx: 550, dvy: 550, dvz: 550, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 20, injury: 17, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  66: { name: "snake_caught",
    pic: 27, state: 9, wait: 20, next: 67, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 20, injury: 17, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  67: { name: "snake_caught",
    pic: 27, state: 9, wait: 20, next: 69, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 20, injury: 17, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  68: { name: "snake_caught",
    pic: 27, state: 9, wait: 25, next: 69, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 20, injury: 15, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  69: { name: "snake_caught",
    pic: 27, state: 9, wait: 15, next: 66, dvx: 0, dvy: 0, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 20, injury: 17, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  70: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 71, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/bird"
  },
  71: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 72, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 73, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  74: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 75, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  75: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 76, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  76: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 77, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  77: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 78, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  78: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 79, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  79: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 80, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  80: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 81, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  81: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 82, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  82: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 83, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  83: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 84, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  84: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 85, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  85: { name: "bird",
    pic: 38, state: 3003, wait: 6, next: 86, dvx: 10, dvy: 10, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  86: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 87, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  87: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 88, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  88: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 89, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  89: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 90, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  90: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 91, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  91: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 92, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  92: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 93, dvx: 10, dvy: -2, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 94, dvx: 10, dvy: -2, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  94: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 95, dvx: 10, dvy: -2, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 96, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  96: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 97, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  97: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 98, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1,
    sound: "1/bird"
  },
  98: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 99, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  99: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 100, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  100: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 101, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  101: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 102, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  102: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 103, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  103: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 104, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  104: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 105, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  105: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 106, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  106: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 107, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  107: { name: "bird",
    pic: 38, state: 3003, wait: 4, next: 108, dvx: 9, dvy: 9, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 80
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  108: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 109, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  109: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 110, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  110: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 111, dvx: 10, dvy: -5, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 90, h: 50, dvx: 10, dvy: -5, fall: 100, vrest: 10, bdefend: 10, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  111: { name: "bird",
    pic: 35, state: 3003, wait: 2, next: 112, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1,
    bdy: {
      kind: 0, x: 15, y: 10, w: 105, h: 50
    }
  },
  112: { name: "bird",
    pic: 36, state: 3003, wait: 2, next: 113, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  113: { name: "bird",
    pic: 37, state: 3003, wait: 2, next: 20, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 1
  },
  114: { name: "rat",
    pic: 32, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 57, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "rat",
    pic: 28, state: 3005, wait: 2, next: 116, dvx: 0, dvy: 0, centerx: 57, centery: 65, hit_a: 1, hit_d: 119, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 53, y: 80000, w: 15, h: 100, fall: -1, vrest: 60, bdefend: 0, injury: 1, effect: 5
    }
  },
  116: { name: "rat",
    pic: 28, state: 3005, wait: 1, next: 117, dvx: 5, dvy: 0, centerx: 57, centery: 65, hit_a: 1, hit_d: 119, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 53, y: 80000, w: 15, h: 100, fall: -1, vrest: 40, bdefend: 0, injury: 1, effect: 5
    }
  },
  117: { name: "rat",
    pic: 29, state: 3005, wait: 2, next: 118, dvx: 0, dvy: 0, centerx: 57, centery: 65, hit_a: 1, hit_d: 119, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 53, y: 80000, w: 15, h: 100, fall: -1, vrest: 40, bdefend: 0, injury: 1, effect: 5
    }
  },
  118: { name: "rat",
    pic: 30, state: 3005, wait: 1, next: 115, dvx: 5, dvy: 0, centerx: 57, centery: 65, hit_a: 1, hit_d: 119, hit_j: 0, hit_Fa: 14,
    itr: {
      kind: 0, x: 53, y: 80000, w: 15, h: 100, fall: -1, vrest: 40, bdefend: 0, injury: 1, effect: 5
    }
  },
  119: { name: "rat",
    pic: 31, state: 3005, wait: 2, next: 114, dvx: 0, dvy: 0, centerx: 57, centery: 65, hit_a: 0, hit_d: 0
  },
  120: { name: "rat",
    pic: 28, state: 3005, wait: 1, next: 116, dvx: 0, dvy: 0, centerx: 57, centery: 65, hit_a: 1, hit_d: 119, hit_j: 55, hit_Fa: 14,
    itr: {
      kind: 0, x: 53, y: 80000, w: 15, h: 100, fall: -1, vrest: 40, bdefend: 0, injury: 1, effect: 5
    }
  },
  121: { name: "rat",
    pic: 28, state: 3005, wait: 1, next: 116, dvx: 0, dvy: 0, centerx: 57, centery: 65, hit_a: 1, hit_d: 119, hit_j: 45, hit_Fa: 14,
    itr: {
      kind: 0, x: 53, y: 80000, w: 15, h: 100, fall: -1, vrest: 40, bdefend: 0, injury: 1, effect: 5
    }
  },
  122: { name: "uhm",
    pic: 0, state: 3005, wait: 3, next: 123, dvx: 0, dvy: 550, centerx: 60, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "uhm",
    pic: 1, state: 3005, wait: 2, next: 124, dvx: 0, dvy: 550, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "uhm",
    pic: 1, state: 3005, wait: 0, next: 125, dvx: 0, dvy: 550, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 39, action: 236, dvx: 0, dvy: 0, oid: 207, facing: 0
    }
  },
  125: { name: "uhm",
    pic: 2, state: 3005, wait: 0, next: 126, dvx: 0, dvy: 550, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 39, action: 240, dvx: 5, dvy: 0, oid: 207, facing: 0
    }
  },
  126: { name: "uhm",
    pic: 2, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, centerx: 60, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 39, action: 244, dvx: 10, dvy: 0, oid: 207, facing: 0
    }
  },
  236: { name: "itachi",
    pic: 70, state: 3006, wait: 1, next: 237, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 15, hit_d: 30, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  237: { name: "itachi",
    pic: 71, state: 3006, wait: 2, next: 238, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  238: { name: "itachi",
    pic: 72, state: 3006, wait: 1, next: 239, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  239: { name: "itachi",
    pic: 73, state: 3006, wait: 2, next: 236, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  240: { name: "itachi",
    pic: 70, state: 3006, wait: 1, next: 241, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 10, hit_d: 30, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  241: { name: "itachi",
    pic: 71, state: 18, wait: 2, next: 242, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  242: { name: "itachi",
    pic: 72, state: 3006, wait: 1, next: 243, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  243: { name: "itachi",
    pic: 73, state: 18, wait: 2, next: 240, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  244: { name: "itachi",
    pic: 70, state: 18, wait: 1, next: 245, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 5, hit_d: 30, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 53, y: 60, w: 15, h: 9999, dvx: 0, fall: -1, vrest: 300, bdefend: 0, injury: 0, effect: 5
    },
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  245: { name: "itachi",
    pic: 71, state: 18, wait: 2, next: 246, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  246: { name: "itachi",
    pic: 72, state: 18, wait: 1, next: 247, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  247: { name: "itachi",
    pic: 73, state: 18, wait: 2, next: 244, dvx: 0, dvy: 550, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 44, y: 17, action: 385, dvx: 0, dvy: 0, oid: 9
    }
  },
  250: { name: "bird_feather",
    pic: 39, state: 3003, wait: 4, next: 251, dvx: 10, dvy: 9, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 63, y: 31, w: 31, h: 30, dvx: 1, dvy: -10, fall: 10, vrest: 3, bdefend: 10, injury: 15, effect: 1
      },
      {
        kind: 0, x: 50, y: 57, w: 36, h: 19, dvx: 1, dvy: -10, fall: 10, vrest: 3, bdefend: 10, injury: 15, effect: 1
      },
      {
        kind: 0, x: 27, y: 15, w: 47, h: 39, dvx: 1, dvy: -10, fall: 10, vrest: 3, bdefend: 10, injury: 15, effect: 1
      }
    ]
  },
  251: { name: "bird_feather",
    pic: 39, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0
  },
  255: { name: "bird_ground",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -6, y: 16, w: 127, h: 62, zwidth: 15, dvx: 5, dvy: -10, fall: 100, vrest: 15, bdefend: 100, injury: 95, effect: 0
    }
  },
  260: { name: "raibunshin",
    pic: 40, state: 3003, wait: 1, next: 261, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "raibunshin",
    pic: 41, state: 3003, wait: 1, next: 262, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 37, w: 70, h: 56, dvx: 0, dvy: -5, fall: 1, vrest: 5, bdefend: 20, injury: 35, effect: 1
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  262: { name: "raibunshin",
    pic: 42, state: 3003, wait: 1, next: 263, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 37, w: 70, h: 56, dvx: 0, dvy: -5, fall: 1, vrest: 5, bdefend: 20, injury: 35, effect: 1
    }
  },
  263: { name: "raibunshin",
    pic: 43, state: 3003, wait: 1, next: 264, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 37, w: 70, h: 56, dvx: 0, dvy: -5, fall: 1, vrest: 5, bdefend: 20, injury: 35, effect: 1
    }
  },
  264: { name: "raibunshin",
    pic: 44, state: 3003, wait: 1, next: 265, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 37, w: 70, h: 56, dvx: 0, dvy: -5, fall: 1, vrest: 5, bdefend: 20, injury: 35, effect: 1
    }
  },
  265: { name: "raibunshin",
    pic: 45, state: 3003, wait: 1, next: 266, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 22, w: 79, h: 69, dvx: 0, dvy: -5, fall: 1, vrest: 5, bdefend: 20, injury: 35, effect: 1
    }
  },
  266: { name: "raibunshin",
    pic: 46, state: 3003, wait: 1, next: 267, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 21, w: 69, h: 67, dvx: 0, dvy: -5, fall: 1, vrest: 5, bdefend: 20, injury: 35, effect: 1
    }
  },
  267: { name: "raibunshin",
    pic: 47, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});