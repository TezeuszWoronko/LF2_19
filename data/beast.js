define({
  bmp: {
    file: [
      {
        "file(0-5)": "sprite/beast.png", w: 415, h: 241, row: 2, col: 3
      },
      {
        "file(6-15)": "sprite/danzo_wind.png", w: 159, h: 159, row: 5, col: 2
      },
      {
        "file(16-55)": "sprite/supports.png", w: 79, h: 79, row: 10, col: 4
      },
      {
        "file(56-87)": "sprite/manhit.png", w: 147, h: 144, row: 4, col: 8
      },
      {
        "file(88-119)": "sprite/sys/susanoo_itachi.PNG", w: 415, h: 241, row: 4, col: 8
      },
      {
        "file(120-151)": "sprite/sys/susanoo_sasuke.PNG", w: 415, h: 241, row: 4, col: 8
      },
      {
        "file(152-182)": "sprite/sys/susanoo_sasuke2.PNG", w: 415, h: 241, row: 4, col: 8
      },
      {
        "file(183-220)": "sprite/sys/susanoo_madara.PNG", w: 415, h: 390, row: 6, col: 5
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 17, next: 1, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 50, y: 0, w: 160, h: 240
    },
    opoint: {
      kind: 1, x: 50, y: 79, action: 375, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  1: { name: "flying",
    pic: 2, state: 3005, wait: 2, next: 2, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    bdy: {
      kind: 0, y: 0, w: 160, h: 240
    },
    opoint: {
      kind: 1, x: 50, y: 79, action: 375, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  2: { name: "flying",
    pic: 3, state: 3005, wait: 2, next: 3, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, y: 0, w: 160, h: 240
    },
    itr: {
      kind: 0, x: 160, y: 115, w: 210, h: 79, dvx: 20, dvy: -7, zwidth: 20, fall: 100, vrest: 50, bdefend: 100, injury: 70, effect: 0
    }
  },
  3: { name: "flying",
    pic: 1, state: 3005, wait: 2, next: 4, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    bdy: {
      kind: 0, y: 0, w: 160, h: 240
    },
    itr: {
      kind: 0, x: 160, y: 115, w: 240, h: 79, dvx: 20, dvy: -7, zwidth: 20, fall: 100, vrest: 50, bdefend: 100, injury: 70, effect: 0
    }
  },
  4: { name: "flying",
    pic: 4, state: 3005, wait: 2, next: 5, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, y: 0, w: 160, h: 240
    },
    itr: {
      kind: 0, x: 160, y: 115, w: 210, h: 79, dvx: 20, dvy: -7, zwidth: 20, fall: 100, vrest: 50, bdefend: 100, injury: 70, effect: 0
    }
  },
  5: { name: "flying",
    pic: 5, state: 3000, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, y: 0, w: 160, h: 240
    },
    opoint: {
      kind: 1, x: 50, y: 79, action: 375, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  10: { name: "hiting",
    pic: 0, state: 3006, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 0, state: 3006, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 35, y: 115, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  12: { name: "hiting",
    pic: 0, state: 3006, wait: 7, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 135, y: 115, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  20: { name: "hit",
    pic: 0, state: 3006, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 0, state: 3006, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "ww",
    pic: 6, state: 3003, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  41: { name: "ww",
    pic: 7, state: 3003, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  42: { name: "ww",
    pic: 8, state: 3003, wait: 1, next: 43, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  43: { name: "ww",
    pic: 9, state: 3003, wait: 1, next: 44, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/073",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  44: { name: "ww",
    pic: 10, state: 3003, wait: 1, next: 45, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  45: { name: "ww",
    pic: 11, state: 3003, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  46: { name: "ww",
    pic: 12, state: 3003, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  47: { name: "ww",
    pic: 13, state: 3003, wait: 1, next: 48, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  48: { name: "ww",
    pic: 9, state: 3003, wait: 1, next: 49, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  49: { name: "ww",
    pic: 10, state: 3003, wait: 1, next: 50, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  50: { name: "ww",
    pic: 11, state: 3003, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  51: { name: "ww",
    pic: 12, state: 3003, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  52: { name: "ww",
    pic: 13, state: 3003, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  53: { name: "ww",
    pic: 14, state: 3003, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  54: { name: "ww",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 79, y: 0, w: 179, h: 350, dvx: -5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      },
      {
        kind: 15, x: -10, y: 0, w: 170, h: 350, dvx: 5, dvy: -7, zwidth: 37, fall: 0, vrest: 5, bdefend: 100, injury: 12
      }
    ]
  },
  55: { name: "ww2",
    pic: 999, state: 3003, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 100, centery: 170, hit_a: 10, hit_d: 194, hit_j: 0,
    itr: [
      {
        kind: 0, x: 25, y: 150, w: 50, h: 150, dvx: -3, dvy: -5, zwidth: 20, fall: 100, vrest: 4, bdefend: 100, injury: 25, effect: 1
      },
      {
        kind: 0, x: 79, y: 0, w: 79, h: 200, dvx: 3, dvy: -17, zwidth: 20, fall: 100, vrest: 4, bdefend: 100, injury: 25, effect: 1
      }
    ]
  },
  60: { name: "torune",
    pic: 16, state: 3, wait: 2, next: 61, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "torune",
    pic: 17, state: 3, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "torune",
    pic: 18, state: 3, wait: 2, next: 63, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "torune",
    pic: 19, state: 3, wait: 2, next: 64, dvx: 4, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 44, w: 33, h: 14, dvx: 5, bdefend: 16, injury: 35
    }
  },
  64: { name: "torune",
    pic: 20, state: 3, wait: 2, next: 65, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "torune",
    pic: 21, state: 3, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "torune",
    pic: 22, state: 3, wait: 2, next: 67, dvx: 4, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 44, w: 33, h: 14, dvx: 5, bdefend: 16, injury: 35
    }
  },
  67: { name: "torune",
    pic: 23, state: 3, wait: 1, next: 68, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "torune",
    pic: 24, state: 3, wait: 1, next: 69, dvx: 2, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "torune",
    pic: 25, state: 3, wait: 1, next: 70, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/insect"
  },
  70: { name: "torune",
    pic: 26, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "torune",
    pic: 27, state: 3, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 44, w: 50, h: 14, dvx: 7, dvy: -15, fall: 70, arest: 15, bdefend: 40, injury: 60
    }
  },
  72: { name: "torune",
    pic: 28, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "torune",
    pic: 29, state: 3, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "torune",
    pic: 24, state: 3, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  75: { name: "fu",
    pic: 34, state: 3, wait: 3, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "fu",
    pic: 30, state: 3, wait: 4, next: 77, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "fu",
    pic: 31, state: 3, wait: 1, next: 78, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007"
  },
  78: { name: "fu",
    pic: 32, state: 3, wait: 8, next: 79, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "fu",
    pic: 33, state: 3, wait: 20, next: 80, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/047",
    opoint: {
      kind: 1, x: 35, y: 70, action: 81, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  80: { name: "fu",
    pic: 34, state: 3, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  81: { name: "web_spin",
    pic: 36, state: 3006, wait: 1, next: 82, dvx: 10, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 53, y: 27, w: 50, h: 60, dvx: 10, dvy: 0, bdefend: 16, injury: 13, fall: 70, effect: 1
    }
  },
  82: { name: "web_spin",
    pic: 37, state: 3006, wait: 1, next: 83, dvx: 50, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 53, y: 27, w: 50, h: 60, dvx: 10, dvy: 0, bdefend: 16, injury: 13, fall: 70, effect: 1
    }
  },
  83: { name: "web_spin",
    pic: 38, state: 3006, wait: 1, next: 81, dvx: 10, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 53, y: 27, w: 50, h: 60, dvx: 10, dvy: 0, bdefend: 16, injury: 13, fall: 70, effect: 1
    }
  },
  84: { name: "staff",
    pic: 39, state: 3005, wait: 2, next: 84, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "koto",
    pic: 56, state: 3, wait: 1, next: 86, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "koto",
    pic: 57, state: 3, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "koto",
    pic: 58, state: 3, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "koto",
    pic: 59, state: 3, wait: 1, next: 89, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "koto",
    pic: 60, state: 3, wait: 1, next: 90, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "koto",
    pic: 61, state: 3, wait: 1, next: 91, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "koto",
    pic: 62, state: 3, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "koto",
    pic: 63, state: 3, wait: 1, next: 93, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "koto",
    pic: 64, state: 3, wait: 1, next: 94, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  94: { name: "koto",
    pic: 65, state: 3, wait: 1, next: 95, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "koto",
    pic: 66, state: 3, wait: 1, next: 96, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "koto",
    pic: 67, state: 3, wait: 1, next: 97, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "koto",
    pic: 68, state: 3, wait: 1, next: 98, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "koto",
    pic: 69, state: 3, wait: 1, next: 99, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  99: { name: "koto",
    pic: 70, state: 3, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "koto",
    pic: 71, state: 3, wait: 1, next: 101, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "koto",
    pic: 72, state: 3, wait: 1, next: 102, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "koto",
    pic: 73, state: 3, wait: 1, next: 103, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "koto",
    pic: 74, state: 3, wait: 1, next: 104, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "koto",
    pic: 75, state: 3, wait: 1, next: 105, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  105: { name: "koto",
    pic: 76, state: 3, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "wind",
    pic: 77, state: 3, wait: 1, next: 107, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  107: { name: "wind",
    pic: 78, state: 3, wait: 1, next: 108, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  108: { name: "wind",
    pic: 79, state: 3, wait: 1, next: 109, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  109: { name: "wind",
    pic: 80, state: 3, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "wind",
    pic: 81, state: 3, wait: 1, next: 111, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "wind",
    pic: 82, state: 3, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 109, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0
  },
  216: { name: "susanoo_itachi_walk_1",
    pic: 88, state: 15, wait: 4, next: 217, dvx: 2, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  217: { name: "susanoo_itachi_walk_1",
    pic: 89, state: 15, wait: 4, next: 1000, dvx: 2, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  218: { name: "susanoo_itachi_walk_2",
    pic: 90, state: 15, wait: 4, next: 219, dvx: 2, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  219: { name: "susanoo_itachi_walk_2",
    pic: 91, state: 15, wait: 4, next: 1000, dvx: 2, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  224: { name: "susanoo_itachi_ATTACK1",
    pic: 92, state: 15, wait: 4, next: 225, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  225: { name: "susanoo_itachi_ATTACK1",
    pic: 93, state: 15, wait: 4, next: 226, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  226: { name: "susanoo_itachi_ATTACK1",
    pic: 100, state: 15, wait: 2, next: 227, dvx: 0, dvy: 0, centerx: 160, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  227: { name: "susanoo_itachi_ATTACK1",
    pic: 94, state: 15, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 160, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  230: { name: "susanoo_itachi_ATTACK2",
    pic: 98, state: 15, wait: 4, next: 231, dvx: 0, dvy: 0, centerx: 160, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  231: { name: "susanoo_itachi_ATTACK2",
    pic: 102, state: 15, wait: 2, next: 232, dvx: 0, dvy: 0, centerx: 110, centery: 240, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  232: { name: "susanoo_itachi_ATTACK2",
    pic: 99, state: 15, wait: 12, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 240, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  234: { name: "susanoo_itachi_ATTACK3",
    pic: 96, state: 15, wait: 4, next: 235, dvx: 0, dvy: 0, centerx: 160, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  235: { name: "susanoo_itachi_ATTACK3",
    pic: 101, state: 15, wait: 2, next: 236, dvx: 0, dvy: 0, centerx: 160, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  236: { name: "susanoo_itachi_ATTACK3",
    pic: 97, state: 15, wait: 18, next: 1000, dvx: 0, dvy: 0, centerx: 160, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  250: { name: "susanoo_itachi",
    pic: 88, state: 15, wait: 3, next: 251, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  251: { name: "susanoo_itachi",
    pic: 89, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  252: { name: "susanoo_itachi",
    pic: 90, state: 15, wait: 3, next: 253, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  253: { name: "susanoo_itachi",
    pic: 91, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  260: { name: "susanoo_awaken",
    pic: 103, state: 15, wait: 2, next: 261, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "susanoo_awaken",
    pic: 104, state: 15, wait: 2, next: 262, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "susanoo_awaken",
    pic: 105, state: 15, wait: 2, next: 263, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  263: { name: "susanoo_awaken",
    pic: 106, state: 15, wait: 2, next: 264, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  264: { name: "susanoo_awaken",
    pic: 107, state: 15, wait: 2, next: 265, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "susanoo_awaken",
    pic: 108, state: 15, wait: 2, next: 266, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "susanoo_awaken",
    pic: 109, state: 15, wait: 2, next: 267, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "susanoo_awaken",
    pic: 110, state: 15, wait: 2, next: 268, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  268: { name: "susanoo_awaken",
    pic: 111, state: 15, wait: 2, next: 269, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "susanoo_awaken",
    pic: 112, state: 15, wait: 2, next: 270, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "susanoo_awaken",
    pic: 113, state: 15, wait: 2, next: 271, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  271: { name: "susanoo_awaken",
    pic: 114, state: 15, wait: 2, next: 272, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  272: { name: "susanoo_awaken",
    pic: 115, state: 15, wait: 2, next: 273, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  273: { name: "susanoo_awaken",
    pic: 116, state: 15, wait: 2, next: 274, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  274: { name: "susanoo_awaken",
    pic: 117, state: 15, wait: 2, next: 275, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  275: { name: "susanoo_awaken",
    pic: 118, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  300: { name: "susanoo_sasuke",
    pic: 120, state: 15, wait: 5, next: 301, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  301: { name: "susanoo_sasuke",
    pic: 120, state: 15, wait: 5, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  302: { name: "susanoo_sasuke",
    pic: 120, state: 15, wait: 5, next: 303, dvx: 0, dvy: 0, centerx: 110, centery: 198, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  303: { name: "susanoo_sasuke",
    pic: 120, state: 15, wait: 5, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  305: { name: "susanoo_sasuke_atk1",
    pic: 121, state: 15, wait: 4, next: 306, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  306: { name: "susanoo_sasuke_atk1",
    pic: 122, state: 15, wait: 5, next: 307, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  307: { name: "susanoo_sasuke_atk1",
    pic: 123, state: 15, wait: 7, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  308: { name: "susanoo_sasuke_atk1",
    pic: 122, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  309: { name: "susanoo_dissapear",
    pic: 124, state: 15, wait: 2, next: 310, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  310: { name: "susanoo_dissapear",
    pic: 125, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  311: { name: "susanoo_apear",
    pic: 125, state: 15, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "susanoo_apear",
    pic: 124, state: 15, wait: 1, next: 313, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "susanoo_apear",
    pic: 120, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  315: { name: "susanoo_sasuke_atk2",
    pic: 126, state: 15, wait: 5, next: 316, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  316: { name: "susanoo_sasuke_atk2",
    pic: 127, state: 15, wait: 4, next: 317, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  317: { name: "susanoo_sasuke_atk2",
    pic: 128, state: 15, wait: 7, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  320: { name: "susanoo_awaken2",
    pic: 132, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  321: { name: "susanoo_awaken2",
    pic: 133, state: 15, wait: 1, next: 322, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  322: { name: "susanoo_awaken2",
    pic: 134, state: 15, wait: 1, next: 323, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  323: { name: "susanoo_awaken2",
    pic: 135, state: 15, wait: 1, next: 324, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  324: { name: "susanoo_awaken2",
    pic: 136, state: 15, wait: 1, next: 325, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  325: { name: "susanoo_awaken2",
    pic: 137, state: 15, wait: 1, next: 326, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  326: { name: "susanoo_awaken2",
    pic: 138, state: 15, wait: 1, next: 327, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  327: { name: "susanoo_awaken2",
    pic: 139, state: 15, wait: 1, next: 328, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  328: { name: "susanoo_awaken2",
    pic: 140, state: 15, wait: 1, next: 329, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  329: { name: "susanoo_awaken2",
    pic: 141, state: 15, wait: 1, next: 330, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  330: { name: "susanoo_awaken2",
    pic: 142, state: 15, wait: 1, next: 331, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  331: { name: "susanoo_awaken2",
    pic: 143, state: 15, wait: 1, next: 332, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  332: { name: "susanoo_awaken2",
    pic: 144, state: 15, wait: 1, next: 333, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  333: { name: "susanoo_awaken2",
    pic: 145, state: 15, wait: 1, next: 334, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  334: { name: "susanoo_awaken2",
    pic: 146, state: 15, wait: 1, next: 335, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  335: { name: "susanoo_awaken2",
    pic: 147, state: 15, wait: 1, next: 336, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  336: { name: "susanoo_awaken2",
    pic: 148, state: 15, wait: 1, next: 337, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  337: { name: "susanoo_awaken2",
    pic: 149, state: 15, wait: 1, next: 338, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  338: { name: "susanoo_awaken2",
    pic: 150, state: 15, wait: 1, next: 339, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  339: { name: "susanoo_awaken2",
    pic: 151, state: 15, wait: 1, next: 340, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "susanoo_awaken2",
    pic: 129, state: 15, wait: 1, next: 341, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "susanoo_awaken2",
    pic: 120, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  375: { name: "stop",
    pic: 999, state: 18, wait: 20, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -123444444, w: 9999999999999, zwidth: 99999, h: 1000, dvx: 0, vrest: 20, fall: 1, bdefend: 1, injury: 0, effect: 5
    }
  },
  400: { name: "susanoo_awaken3",
    pic: 152, state: 15, wait: 1, next: 401, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  401: { name: "susanoo_awaken3",
    pic: 153, state: 15, wait: 1, next: 402, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  402: { name: "susanoo_awaken3",
    pic: 154, state: 15, wait: 1, next: 403, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  403: { name: "susanoo_awaken3",
    pic: 155, state: 15, wait: 1, next: 404, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  404: { name: "susanoo_awaken3",
    pic: 156, state: 15, wait: 1, next: 405, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  405: { name: "susanoo_awaken3",
    pic: 157, state: 15, wait: 1, next: 406, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  406: { name: "susanoo_awaken3",
    pic: 158, state: 15, wait: 1, next: 407, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  407: { name: "susanoo_awaken3",
    pic: 159, state: 15, wait: 1, next: 408, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  408: { name: "susanoo_awaken3",
    pic: 160, state: 15, wait: 1, next: 409, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  409: { name: "susanoo_awaken3",
    pic: 161, state: 15, wait: 1, next: 410, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  410: { name: "susanoo_awaken3",
    pic: 162, state: 15, wait: 1, next: 411, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  411: { name: "susanoo_awaken3",
    pic: 163, state: 15, wait: 1, next: 412, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  412: { name: "susanoo_awaken3",
    pic: 164, state: 15, wait: 1, next: 413, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  413: { name: "susanoo_awaken3",
    pic: 165, state: 15, wait: 1, next: 414, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  414: { name: "susanoo_awaken3",
    pic: 166, state: 15, wait: 1, next: 415, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  415: { name: "susanoo_awaken3",
    pic: 167, state: 15, wait: 1, next: 416, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  416: { name: "susanoo_awaken3",
    pic: 168, state: 15, wait: 1, next: 417, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  417: { name: "susanoo_awaken3",
    pic: 169, state: 15, wait: 1, next: 418, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  418: { name: "susanoo_awaken3",
    pic: 170, state: 15, wait: 1, next: 419, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  419: { name: "susanoo_awaken3",
    pic: 171, state: 15, wait: 2, next: 420, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  420: { name: "susanoo_awaken3",
    pic: 172, state: 15, wait: 2, next: 421, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  421: { name: "susanoo_awaken3",
    pic: 173, state: 15, wait: 2, next: 422, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  422: { name: "susanoo_awaken3",
    pic: 174, state: 15, wait: 5, next: 423, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  423: { name: "susanoo_awaken3",
    pic: 175, state: 15, wait: 8, next: 424, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  424: { name: "susanoo_awaken3",
    pic: 176, state: 15, wait: 5, next: 425, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  425: { name: "susanoo_awaken3",
    pic: 177, state: 15, wait: 8, next: 426, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  426: { name: "susanoo_awaken3",
    pic: 178, state: 15, wait: 2, next: 427, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  427: { name: "susanoo_awaken3",
    pic: 179, state: 15, wait: 5, next: 428, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  428: { name: "susanoo_awaken3",
    pic: 180, state: 15, wait: 8, next: 429, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  429: { name: "susanoo_awaken3",
    pic: 181, state: 15, wait: 2, next: 430, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  430: { name: "susanoo_awaken3",
    pic: 182, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 130, w: 135, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  450: { name: "susanoo_madara",
    pic: 184, state: 15, wait: 1, next: 451, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  451: { name: "susanoo_madara",
    pic: 185, state: 15, wait: 1, next: 452, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  452: { name: "susanoo_madara",
    pic: 186, state: 15, wait: 1, next: 453, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  453: { name: "susanoo_madara",
    pic: 187, state: 15, wait: 1, next: 454, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  454: { name: "susanoo_madara",
    pic: 188, state: 15, wait: 1, next: 455, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  455: { name: "susanoo_madara",
    pic: 189, state: 15, wait: 1, next: 456, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  456: { name: "susanoo_madara",
    pic: 190, state: 15, wait: 1, next: 457, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  457: { name: "susanoo_madara",
    pic: 191, state: 15, wait: 1, next: 458, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  458: { name: "susanoo_madara",
    pic: 192, state: 15, wait: 1, next: 459, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  459: { name: "susanoo_madara",
    pic: 193, state: 15, wait: 1, next: 460, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  460: { name: "susanoo_madara",
    pic: 194, state: 15, wait: 1, next: 461, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  461: { name: "susanoo_madara",
    pic: 195, state: 15, wait: 1, next: 462, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  462: { name: "susanoo_madara",
    pic: 196, state: 15, wait: 1, next: 463, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  463: { name: "susanoo_madara",
    pic: 197, state: 15, wait: 1, next: 464, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  464: { name: "susanoo_madara",
    pic: 198, state: 15, wait: 1, next: 465, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  465: { name: "susanoo_madara",
    pic: 199, state: 15, wait: 1, next: 466, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  466: { name: "susanoo_madara",
    pic: 200, state: 15, wait: 1, next: 467, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  467: { name: "susanoo_madara",
    pic: 201, state: 15, wait: 1, next: 468, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  468: { name: "susanoo_madara",
    pic: 202, state: 15, wait: 1, next: 469, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  469: { name: "susanoo_madara",
    pic: 203, state: 15, wait: 5, next: 470, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  470: { name: "susanoo_madara",
    pic: 204, state: 15, wait: 2, next: 471, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  471: { name: "susanoo_madara",
    pic: 205, state: 15, wait: 2, next: 472, dvx: 0, dvy: 0, centerx: 260, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 300, w: 150, h: 9999, zwidth: 35, dvx: 15, dvy: -25, fall: 70, vrest: 8, bdefend: 100, injury: 100, effect: 5
    }
  },
  472: { name: "susanoo_madara",
    pic: 206, state: 15, wait: 2, next: 473, dvx: 0, dvy: 0, centerx: 260, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 300, w: 150, h: 9999, zwidth: 35, dvx: 15, dvy: -25, fall: 70, vrest: 8, bdefend: 100, injury: 100, effect: 5
    }
  },
  473: { name: "susanoo_madara",
    pic: 207, state: 15, wait: 2, next: 474, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  474: { name: "susanoo_madara",
    pic: 208, state: 15, wait: 2, next: 475, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  475: { name: "susanoo_madara",
    pic: 209, state: 15, wait: 0, next: 476, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 250, y: 300, action: 72, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  476: { name: "susanoo_madara",
    pic: 209, state: 15, wait: 0, next: 477, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 400, y: 300, action: 72, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  477: { name: "susanoo_madara",
    pic: 210, state: 15, wait: 2, next: 480, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 550, y: 300, action: 72, dvx: 0, dvy: 0, oid: 208, facing: 0
    },
    itr: [
      {
        kind: 0, x: 200, y: 300, w: 250, h: 9999, zwidth: 35, dvx: 10, dvy: 5, fall: 70, vrest: 8, bdefend: 100, injury: 250, effect: 5
      },
      {
        kind: 0, x: 200, y: 300, w: 300, h: 9999, zwidth: 35, dvx: 10, dvy: 5, fall: 70, vrest: 8, bdefend: 100, injury: 250, effect: 5
      }
    ]
  },
  480: { name: "susanoo_madara",
    pic: 211, state: 15, wait: 10, next: 481, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  481: { name: "susanoo_madara",
    pic: 212, state: 15, wait: 2, next: 482, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  },
  482: { name: "susanoo_madara",
    pic: 213, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 110, centery: 380, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});