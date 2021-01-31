define({
  bmp: {
    file: [
      {
        "file(0-50)": "sprite/amaterasu.png", w: 110, h: 170, row: 5, col: 10
      },
      {
        "file(51-67)": "sprite/sand2.png", w: 265, h: 190, row: 3, col: 6
      },
      {
        "file(68-137)": "sprite/timer.png", w: 79, h: 79, row: 10, col: 2
      }
    ],
    weapon_hit_sound: "1/020"
  },
  frame: {
  0: { name: "delete",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "paralyze",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [6, 6], caughtact: [130, 130]
    }
  },
  6: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  7: { name: "hiting2",
    pic: 999, state: 9, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  10: { name: "gate",
    pic: 0, state: 3005, wait: 0, next: 70, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  20: { name: "gate",
    pic: 0, state: 3005, wait: 0, next: 70, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ]
  },
  30: { name: "gate",
    pic: 0, state: 3005, wait: 0, next: 69, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ]
  },
  66: { name: "gate",
    pic: 999, state: 3005, wait: 3, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 40,
    itr: {
      kind: 0, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 4, dvx: 8, dvy: -15, fall: 999, bdefend: 100, injury: 65
    }
  },
  67: { name: "gate",
    pic: 999, state: 3005, wait: 3, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 55,
    itr: {
      kind: 0, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 4, dvx: 8, dvy: -15, fall: 999, bdefend: 100, injury: 65
    }
  },
  68: { name: "gate",
    pic: 0, state: 3005, wait: 0, next: 73, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_j: 0, hit_d: 73,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  69: { name: "gate",
    pic: 0, state: 3005, wait: 1, next: 68, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 1, hit_j: 0, hit_d: 68,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  70: { name: "gate",
    pic: 0, state: 3005, wait: 80, next: 69, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 1, hit_j: 0, hit_d: 68,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  71: { name: "gate",
    pic: 999, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  72: { name: "gate",
    pic: 999, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 50, y: 85, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  73: { name: "gate",
    pic: 0, state: 3005, wait: 7, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 50, y: 85, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  74: { name: "amaterasu",
    pic: 999, state: 3003, wait: 0, next: 80, dvx: 90, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "amaterasu",
    pic: 999, state: 400, wait: 1, next: 76, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "amaterasu",
    pic: 999, state: 3003, wait: 0, next: 80, dvx: 100, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "amaterasu",
    pic: 999, state: 400, wait: 3, next: 74, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "amaterasu",
    pic: 999, state: 400, wait: 3, next: 79, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "amaterasu",
    pic: 999, state: 3003, wait: 0, next: 80, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "amaterasu2",
    pic: 1, state: 3005, wait: 1, next: 81, dvx: 550, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067"
  },
  81: { name: "amaterasu2",
    pic: 2, state: 3003, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "amaterasu2",
    pic: 3, state: 18, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, zwidth: 9999, y: -6546832333, w: 10000000000000000, h: 999, dvx: 0, injury: 15, effect: 5, fall: -1
    }
  },
  83: { name: "amaterasu2",
    pic: 4, state: 18, wait: 1, next: 84, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, zwidth: 9999, y: -6546832333, w: 10000000000000000, h: 999, dvx: 0, injury: 15, effect: 5, fall: 7
    }
  },
  84: { name: "amaterasu2",
    pic: 5, state: 18, wait: 2, next: 85, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  85: { name: "amaterasu2",
    pic: 6, state: 18, wait: 2, next: 86, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      },
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      }
    ]
  },
  86: { name: "amaterasu2",
    pic: 7, state: 18, wait: 2, next: 87, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  87: { name: "amaterasu2",
    pic: 8, state: 18, wait: 2, next: 88, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      },
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      }
    ]
  },
  88: { name: "amaterasu2",
    pic: 9, state: 18, wait: 2, next: 84, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  89: { name: "amaterasu2",
    pic: 11, state: 3003, wait: 1, next: 90, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  90: { name: "amaterasu2",
    pic: 12, state: 3003, wait: 1, next: 91, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  91: { name: "amaterasu2",
    pic: 13, state: 3003, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  92: { name: "amaterasu2",
    pic: 14, state: 3003, wait: 1, next: 93, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  93: { name: "amaterasu2",
    pic: 15, state: 3003, wait: 1, next: 94, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  94: { name: "amaterasu2",
    pic: 16, state: 3003, wait: 1, next: 95, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  95: { name: "amaterasu2",
    pic: 17, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 90, h: 9999, dvx: 0, bdefend: 100, injury: 35, effect: 5, fall: 70, arest: 50
    }
  },
  96: { name: "amaterasu2",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "timer",
    pic: 999, state: 3005, wait: 0, next: 99, dvx: 0, dvy: 1, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 1
  },
  99: { name: "timer",
    pic: 68, state: 9997, wait: 10, next: 325, dvx: 0, dvy: 550, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "web",
    pic: 18, state: 3000, wait: 25, next: 100, dvx: 15, dvy: 0, centerx: 55, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 35, zwidth: 15, w: 25, h: 65,
      catchingact: [105, 105], caughtact: [130, 130]
    }
  },
  105: { name: "hiting2",
    pic: 19, state: 9, wait: 95, next: 1000, dvx: 0, dvy: 0, centerx: 30, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 30, y: 110, injury: 15, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  106: { name: "wood_trap",
    pic: 999, state: 18, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 38, y: 80000, w: 10, h: 65,
      catchingact: [111, 111], caughtact: [130, 130]
    }
  },
  110: { name: "wood_trap",
    pic: 20, state: 3006, wait: 0, next: 111, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "wood_trap",
    pic: 21, state: 3006, wait: 0, next: 112, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "wood_trap",
    pic: 22, state: 3006, wait: 0, next: 113, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "wood_trap",
    pic: 23, state: 3006, wait: 0, next: 114, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "wood_trap",
    pic: 24, state: 3006, wait: 0, next: 115, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "wood_trap",
    pic: 25, state: 3006, wait: 0, next: 116, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/036"
  },
  116: { name: "wood_trap",
    pic: 26, state: 3006, wait: 0, next: 117, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "wood_trap",
    pic: 27, state: 3006, wait: 10, next: 118, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 35, y: 80000, w: 37, h: 200, zwidth: 16,
      catchingact: [119, 119], caughtact: [130, 130]
    }
  },
  118: { name: "wood_trap",
    pic: 38, state: 3006, wait: 1, next: 130, dvx: 60, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 35, y: 80000, w: 37, h: 200, zwidth: 16,
      catchingact: [119, 119], caughtact: [130, 130]
    }
  },
  119: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 120, dvx: 0, dvy: 0, centerx: 45, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/036",
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  120: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 121, dvx: 0, dvy: 0, centerx: 65, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  121: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 122, dvx: 0, dvy: 0, centerx: 45, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  122: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 123, dvx: 0, dvy: 0, centerx: 65, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  123: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, centerx: 45, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  124: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 125, dvx: 0, dvy: 0, centerx: 50, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  125: { name: "wood_trap",
    pic: 27, state: 9, wait: 0, next: 126, dvx: 0, dvy: 0, centerx: 60, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  126: { name: "wood_trap",
    pic: 27, state: 9, wait: 65, next: 127, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: [
      {
        kind: 14, x: 2, y: 85, w: 90, h: 165, zwidth: 30, vrest: 1
      },
      {
        kind: 14, x: 2, y: 80000, w: 90, h: 165, zwidth: 30, vrest: 1
      }
    ]
  },
  127: { name: "wood_trap",
    pic: 26, state: 3006, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "wood_trap",
    pic: 25, state: 9, wait: 1, next: 129, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  129: { name: "wood_trap",
    pic: 24, state: 9, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "wood_trap",
    pic: 39, state: 3006, wait: 1, next: 131, dvx: 60, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 35, y: 80000, w: 37, h: 200, zwidth: 16,
      catchingact: [119, 119], caughtact: [130, 130]
    }
  },
  131: { name: "wood_trap",
    pic: 40, state: 3006, wait: 1, next: 118, dvx: 60, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 35, y: 80000, w: 37, h: 200, zwidth: 16,
      catchingact: [119, 119], caughtact: [130, 130]
    }
  },
  160: { name: "wood_attack",
    pic: 20, state: 15, wait: 0, next: 161, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  161: { name: "wood_attack",
    pic: 21, state: 15, wait: 0, next: 162, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/035"
  },
  162: { name: "wood_attack",
    pic: 28, state: 15, wait: 1, next: 163, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/036",
    itr: {
      kind: 0, x: 10, y: 100, w: 50, h: 50, vrest: 20, dvx: 10, dvy: -15, fall: 100, bdefend: 100, injury: 66
    }
  },
  163: { name: "wood_attack",
    pic: 29, state: 15, wait: 1, next: 164, dvx: 0, dvy: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 93, w: 50, h: 25, vrest: 20, dvx: 10, dvy: -15, fall: 100, bdefend: 100, injury: 66
    }
  },
  164: { name: "wood_attack",
    pic: 30, state: 15, wait: 1, next: 165, dvx: 0, dvy: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 83, w: 50, h: 25, dvx: 10, dvy: -15, fall: 100, bdefend: 100, injury: 66
    }
  },
  165: { name: "wood_attack",
    pic: 31, state: 15, wait: 3, next: 166, dvx: 0, dvy: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 73, w: 50, h: 25, dvx: 10, dvy: -15, vrest: 20, fall: 100, bdefend: 100, injury: 66
    }
  },
  166: { name: "wood_attack",
    pic: 30, state: 15, wait: 0, next: 167, dvx: 0, dvy: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "wood_attack",
    pic: 29, state: 15, wait: 0, next: 168, dvx: 0, dvy: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  168: { name: "wood_attack",
    pic: 28, state: 15, wait: 1, next: 169, dvx: 0, dvy: 0, centerx: 20, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  169: { name: "wood_attack",
    pic: 21, state: 15, wait: 1, next: 170, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "wood_attack",
    pic: 20, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "wood_attack2",
    pic: 20, state: 15, wait: 0, next: 176, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "wood_attack2",
    pic: 21, state: 15, wait: 0, next: 177, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "wood_attack2",
    pic: 22, state: 15, wait: 0, next: 178, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  178: { name: "wood_attack2",
    pic: 32, state: 15, wait: 0, next: 179, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 10, y: 140, w: 95, h: 5, zwidth: 15, dvx: 0, dvy: -25, vrest: 40, fall: 100, bdefend: 100, injury: 70
    }
  },
  179: { name: "wood_attack2",
    pic: 33, state: 15, wait: 1, next: 180, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/036",
    itr: {
      kind: 0, x: 10, y: 100, w: 95, h: 5, zwidth: 15, dvx: 0, dvy: -25, vrest: 40, fall: 100, bdefend: 100, injury: 70
    }
  },
  180: { name: "wood_attack2",
    pic: 34, state: 15, wait: 5, next: 181, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 95, h: 5, zwidth: 15, dvx: 0, dvy: -25, vrest: 40, fall: 100, bdefend: 100, injury: 70
    }
  },
  181: { name: "wood_attack2",
    pic: 33, state: 15, wait: 1, next: 182, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 10, y: 5, w: 95, h: 165, zwidth: 30, vrest: 1
    }
  },
  182: { name: "wood_attack2",
    pic: 32, state: 15, wait: 1, next: 183, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 2, y: 5, w: 90, h: 155, zwidth: 30, vrest: 1
    }
  },
  183: { name: "wood_attack2",
    pic: 22, state: 15, wait: 1, next: 184, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 2, y: 10, w: 90, h: 100, zwidth: 30, vrest: 1
    }
  },
  184: { name: "wood_attack2",
    pic: 21, state: 15, wait: 0, next: 185, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "wood_attack2",
    pic: 20, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0
  },
  188: { name: "sand",
    pic: 51, state: 15, wait: 1, next: 189, dvx: 550, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 80, y: 170, w: 110, h: 50, zwidth: 600, dvx: 297, injury: 1
    }
  },
  189: { name: "sand",
    pic: 50, state: 3006, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "sand",
    pic: 999, state: 3006, wait: 2, next: 191, dvx: 120, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "sand",
    pic: 50, state: 3006, wait: 1, next: 192, dvx: 550, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  192: { name: "sand",
    pic: 51, state: 3006, wait: 1, next: 193, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  193: { name: "sand",
    pic: 52, state: 15, wait: 1, next: 194, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 80, y: 170, w: 110, h: 50, zwidth: 600, dvx: 297, injury: 1
    }
  },
  194: { name: "sand",
    pic: 53, state: 15, wait: 1, next: 188, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 80, y: 170, w: 110, h: 50, zwidth: 600, dvx: 297, injury: 1
    }
  },
  295: { name: "sand_trap",
    pic: 51, state: 9, wait: 0, next: 296, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  296: { name: "sand_trap",
    pic: 52, state: 9, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  297: { name: "sand_trap",
    pic: 53, state: 9, wait: 0, next: 298, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 3, x: 80, y: 170, w: 110, h: 50, zwidth: 100,
      catchingact: [299, 299], caughtact: [130, 130]
    }
  },
  298: { name: "sand_trap",
    pic: 54, state: 9, wait: 0, next: 299, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 80, y: 170, w: 110, h: 50, zwidth: 100,
      catchingact: [299, 299], caughtact: [130, 130]
    }
  },
  299: { name: "sand_trap",
    pic: 55, state: 9, wait: 0, next: 300, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  300: { name: "sand_trap",
    pic: 56, state: 9, wait: 0, next: 301, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  301: { name: "sand_trap",
    pic: 57, state: 9, wait: 0, next: 302, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  302: { name: "sand_trap",
    pic: 58, state: 9, wait: 1, next: 303, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  303: { name: "sand_trap",
    pic: 59, state: 9, wait: 1, next: 304, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  304: { name: "sand_trap",
    pic: 60, state: 9, wait: 1, next: 305, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  305: { name: "sand_trap",
    pic: 61, state: 9, wait: 1, next: 306, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  306: { name: "sand_trap",
    pic: 62, state: 9, wait: 1, next: 307, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  307: { name: "sand_trap",
    pic: 63, state: 9, wait: 1, next: 308, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: -999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  308: { name: "sand_trap",
    pic: 64, state: 9, wait: 14, next: 309, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: -999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  309: { name: "sand_trap",
    pic: 65, state: 9, wait: 1, next: 310, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 170, y: 117, injury: 145, vaction: 230, throwvx: 0, throwvy: 50, cover: 0, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -3
    }
  },
  310: { name: "sand_trap",
    pic: 66, state: 15, wait: 2, next: 311, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  311: { name: "sand_trap",
    pic: 67, state: 15, wait: 10, next: 312, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "sand_trap",
    pic: 51, state: 3005, wait: 2, next: 313, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "sand_trap",
    pic: 50, state: 3005, wait: 0, next: 314, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 170, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  314: { name: "sand_trap",
    pic: 50, state: 3005, wait: 0, next: 318, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 170, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  315: { name: "snake",
    pic: 999, state: 3005, wait: 2, next: 316, dvx: 65, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 80000, w: 50, h: 65,
      catchingact: [320, 320], caughtact: [130, 130]
    }
  },
  316: { name: "snake",
    pic: 999, state: 3005, wait: 1, next: 317, dvx: 65, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 80000, w: 50, h: 65,
      catchingact: [320, 320], caughtact: [130, 130]
    }
  },
  317: { name: "snake",
    pic: 999, state: 3005, wait: 1, next: 315, dvx: 65, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 80000, w: 50, h: 65,
      catchingact: [320, 320], caughtact: [130, 130]
    }
  },
  318: { name: "sand_trap",
    pic: 50, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 170, action: 140, dvx: 8, dvy: 0, oid: 412, facing: 0
    }
  },
  320: { name: "snake",
    pic: 35, state: 9, wait: 2, next: 321, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 125, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  321: { name: "snake",
    pic: 37, state: 9, wait: 0, next: 322, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    cpoint: {
      kind: 1, x: 55, y: 20, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  322: { name: "snake",
    pic: 36, state: 9, wait: 50, next: 323, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 20, injury: 35, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  323: { name: "snake",
    pic: 37, state: 9, wait: 0, next: 324, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 20, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  324: { name: "snake",
    pic: 35, state: 9, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 20, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  325: { name: "timer",
    pic: 68, state: 9997, wait: 10, next: 326, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  326: { name: "timer",
    pic: 69, state: 9997, wait: 10, next: 327, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  327: { name: "timer",
    pic: 70, state: 9997, wait: 10, next: 328, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  328: { name: "timer",
    pic: 71, state: 9997, wait: 10, next: 329, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  329: { name: "timer",
    pic: 72, state: 9997, wait: 10, next: 330, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  330: { name: "timer",
    pic: 73, state: 9997, wait: 10, next: 331, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  331: { name: "timer",
    pic: 74, state: 9997, wait: 10, next: 332, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  332: { name: "timer",
    pic: 75, state: 9997, wait: 10, next: 333, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  333: { name: "timer",
    pic: 76, state: 9997, wait: 10, next: 334, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  334: { name: "timer",
    pic: 77, state: 9997, wait: 10, next: 335, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  335: { name: "timer",
    pic: 78, state: 9997, wait: 10, next: 336, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  336: { name: "timer",
    pic: 79, state: 9997, wait: 10, next: 337, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  337: { name: "timer",
    pic: 80, state: 9997, wait: 10, next: 338, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  338: { name: "timer",
    pic: 81, state: 9997, wait: 10, next: 339, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  339: { name: "timer",
    pic: 82, state: 9997, wait: 10, next: 380, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  340: { name: "god stop",
    pic: 999, state: 18, wait: 0, next: 342, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "clone stop",
    pic: 999, state: 18, wait: 450, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  342: { name: "madara stop",
    pic: 999, state: 18, wait: 8, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  343: { name: "god stop",
    pic: 999, state: 18, wait: 0, next: 343, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  344: { name: "sand_hell2",
    pic: 999, state: 400, wait: 3, next: 378, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  345: { name: "sand_hell",
    pic: 51, state: 3006, wait: 1, next: 346, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 80, y: 170, w: 110, h: 50,
      catchingact: [348, 348], caughtact: [130, 130]
    }
  },
  346: { name: "sand_hell",
    pic: 52, state: 3006, wait: 1, next: 347, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 80, y: 170, w: 110, h: 50,
      catchingact: [348, 348], caughtact: [130, 130]
    },
    opoint: {
      kind: 1, x: 400, y: 190, action: 346, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  347: { name: "sand_hell",
    pic: 53, state: 3006, wait: 1, next: 365, dvx: 550, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 80, y: 170, w: 110, h: 50,
      catchingact: [348, 348], caughtact: [130, 130]
    }
  },
  348: { name: "sand_trap_hell",
    pic: 53, state: 9, wait: 0, next: 349, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  349: { name: "sand_trap_hell",
    pic: 54, state: 9, wait: 0, next: 350, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  350: { name: "sand_trap_hell",
    pic: 55, state: 9, wait: 0, next: 351, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  351: { name: "sand_trap_hell",
    pic: 56, state: 9, wait: 0, next: 352, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  352: { name: "sand_trap_hell",
    pic: 57, state: 9, wait: 0, next: 353, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  353: { name: "sand_trap_hell",
    pic: 58, state: 9, wait: 1, next: 354, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  354: { name: "sand_trap_hell",
    pic: 59, state: 9, wait: 1, next: 355, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  355: { name: "sand_trap_hell",
    pic: 60, state: 9, wait: 1, next: 356, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  356: { name: "sand_trap_hell",
    pic: 61, state: 9, wait: 1, next: 357, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  357: { name: "sand_trap_hell",
    pic: 62, state: 9, wait: 1, next: 358, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: 150, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  358: { name: "sand_trap_hell",
    pic: 63, state: 9, wait: 1, next: 359, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: -999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  359: { name: "sand_trap_hell",
    pic: 64, state: 9, wait: 3, next: 360, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 133, y: -999, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  360: { name: "sand_trap_hell",
    pic: 65, state: 9, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 170, y: 117, injury: 500, vaction: 230, throwvx: 0, throwvy: 50, cover: 0, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -3
    }
  },
  361: { name: "sand_trap_hell",
    pic: 66, state: 15, wait: 2, next: 362, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  362: { name: "sand_trap_hell",
    pic: 67, state: 15, wait: 10, next: 363, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  363: { name: "sand_trap_hell",
    pic: 51, state: 3005, wait: 2, next: 364, dvx: 0, dvy: 0, centerx: 133, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  364: { name: "sand_trap_hell",
    pic: 50, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 135, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  365: { name: "sand_trap_hell",
    pic: 53, state: 3005, wait: 0, next: 366, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  366: { name: "sand_trap_hell",
    pic: 54, state: 3005, wait: 0, next: 367, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  367: { name: "sand_trap_hell",
    pic: 55, state: 3005, wait: 0, next: 368, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  368: { name: "sand_trap_hell",
    pic: 56, state: 3005, wait: 0, next: 369, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  369: { name: "sand_trap_hell",
    pic: 57, state: 3005, wait: 0, next: 370, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  370: { name: "sand_trap_hell",
    pic: 58, state: 3005, wait: 1, next: 371, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  371: { name: "sand_trap_hell",
    pic: 59, state: 3005, wait: 1, next: 372, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  372: { name: "sand_trap_hell",
    pic: 60, state: 3005, wait: 1, next: 373, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  373: { name: "sand_trap_hell",
    pic: 61, state: 3005, wait: 1, next: 374, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  374: { name: "sand_trap_hell",
    pic: 62, state: 3005, wait: 1, next: 375, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  375: { name: "sand_trap_hell",
    pic: 63, state: 3005, wait: 1, next: 376, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  376: { name: "sand_trap_hell",
    pic: 64, state: 3005, wait: 3, next: 377, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  377: { name: "sand_trap_hell",
    pic: 65, state: 3005, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  378: { name: "sand_hell2",
    pic: 999, state: 3005, wait: 0, next: 346, dvx: 15, dvy: 0, centerx: 133, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 190, action: 90, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  380: { name: "timer",
    pic: 83, state: 9997, wait: 10, next: 381, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  381: { name: "timer",
    pic: 84, state: 9997, wait: 10, next: 382, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  382: { name: "timer",
    pic: 85, state: 9997, wait: 10, next: 383, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  383: { name: "timer",
    pic: 86, state: 9997, wait: 0, next: 384, dvx: 0, dvy: 0, centerx: 40, centery: 850, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 3333, action: 341, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  384: { name: "timer over",
    pic: 999, state: 9997, wait: 0, next: 385, dvx: 0, dvy: 0, centerx: 40, centery: 670, hit_a: 0, hit_d: 0, hit_j: 0
  },
  385: { name: "timer over",
    pic: 999, state: 9997, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 670, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 666, action: 390, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  386: { name: "timer over",
    pic: 999, state: 9997, wait: 50, next: 385, dvx: 0, dvy: 0, centerx: 40, centery: 670, hit_a: 0, hit_d: 0, hit_j: 0
  },
  390: { name: "timer over",
    pic: 999, state: 18, wait: 5, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, fall: 60, effect: 5
    }
  },
  391: { name: "gate_sakon",
    pic: 999, state: 3005, wait: 0, next: 392, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    },
    itr: {
      kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
    }
  },
  392: { name: "gate_sakon",
    pic: 999, state: 3005, wait: 0, next: 393, dvx: 0, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 50, y: 85, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    itr: [
      {
        kind: 0, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 15, fall: 999, dvx: 10, dvy: -5, bdefend: 100, injury: 75
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  393: { name: "gate",
    pic: 0, state: 3005, wait: 14, next: 394, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_j: 0, hit_d: 0,
    itr: [
      {
        kind: 14, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  394: { name: "gate",
    pic: 0, state: 3005, wait: 3, next: 394, dvx: 70, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_j: 0, hit_d: 0,
    itr: [
      {
        kind: 0, x: 31, y: 21, w: 38, h: 143, zwidth: 35, vrest: 15, fall: 999, dvx: 15, dvy: -15, bdefend: 100, injury: 75
      },
      {
        kind: 14, x: 31, y: 80000, w: 38, h: 143, zwidth: 10, vrest: 1
      },
      {
        kind: 0, x: 31, y: 30000, w: 38, h: 143, zwidth: 35, vrest: 15, fall: 999, dvx: 15, dvy: -15, bdefend: 100, injury: 75
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 13, w: 78, h: 155, zwidth: 35
    }
  },
  395: { name: "gate",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 55, centery: 170, hit_a: 0, hit_j: 0, hit_d: 0,
    itr: {
      kind: 0, x: -9999, y: 66666666, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  396: { name: "god stop",
    pic: 999, state: 18, wait: 0, next: 397, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  397: { name: "naruto stop",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  },
  400: { name: "sexy",
    pic: 999, state: 3005, wait: 6, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 80000, w: 165, h: 65, zwidth: 25,
      catchingact: [401, 401], caughtact: [130, 130]
    }
  },
  401: { name: "sexy",
    pic: 999, state: 9, wait: 40, next: 402, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 128, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  402: { name: "sexy",
    pic: 999, state: 9, wait: 0, next: 403, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 128, injury: 35, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3, effect: 1
    },
    opoint: {
      kind: 1, x: 80, y: 110, action: 110, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  403: { name: "sexy",
    pic: 999, state: 9, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 128, vaction: 180, throwvx: 14, throwvy: -25, throwvz: 3, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 75, y: 115, action: 110, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  410: { name: "amaterasu2",
    pic: 1, state: 3005, wait: 1, next: 411, dvx: 550, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067"
  },
  411: { name: "amaterasu2",
    pic: 2, state: 3003, wait: 1, next: 412, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  412: { name: "amaterasu2",
    pic: 3, state: 3003, wait: 1, next: 413, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
    }
  },
  413: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 415, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 25, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  414: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 415, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  415: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 416, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  416: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 417, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  417: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 418, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  418: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 419, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  419: { name: "amaterasu2",
    pic: 5, state: 3003, wait: 2, next: 420, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  420: { name: "amaterasu2",
    pic: 6, state: 3003, wait: 2, next: 421, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  421: { name: "amaterasu2",
    pic: 7, state: 3003, wait: 2, next: 422, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  422: { name: "amaterasu2",
    pic: 8, state: 3003, wait: 2, next: 423, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  423: { name: "amaterasu2",
    pic: 9, state: 3003, wait: 2, next: 424, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  424: { name: "amaterasu2",
    pic: 10, state: 3003, wait: 2, next: 425, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  425: { name: "amaterasu2",
    pic: 11, state: 3003, wait: 2, next: 426, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  426: { name: "amaterasu2",
    pic: 12, state: 3003, wait: 1, next: 427, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  427: { name: "amaterasu2",
    pic: 13, state: 3003, wait: 1, next: 428, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  428: { name: "amaterasu2",
    pic: 14, state: 3003, wait: 1, next: 433, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 96
      },
      {
        kind: 0, x: 10, y: 80000, w: 90, h: 500, dvx: 0, bdefend: 100, injury: 55, effect: 5, fall: 10, arest: 50
      }
    ]
  },
  430: { name: "amaterasu2",
    pic: 999, state: 400, wait: 2, next: 431, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  431: { name: "amaterasu2",
    pic: 14, state: 18, wait: 2, next: 432, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  432: { name: "amaterasu2",
    pic: 14, state: 18, wait: 2, next: 433, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  433: { name: "amaterasu2",
    pic: 15, state: 18, wait: 2, next: 434, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  434: { name: "amaterasu2",
    pic: 16, state: 18, wait: 2, next: 435, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  435: { name: "amaterasu2",
    pic: 17, state: 18, wait: 2, next: 432, dvx: 0, dvy: 0, centerx: 55, centery: 165, hit_a: 0, hit_d: 0, hit_j: 0
  },
  440: { name: "god stop",
    pic: 999, state: 18, wait: 150, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 1, w: 999999, zwidth: 9999, h: 350, dvx: 0, vrest: 1, bdefend: 100, injury: 1, effect: 5
    }
  }
  }
});