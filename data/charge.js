define({
  bmp: {
    file: [
      {
        "file(0-27)": "sprite/sys/charge.png", w: 81, h: 82, row: 4, col: 7
      },
      {
        "file(28-60)": "sprite/sys/charge2.png", w: 81, h: 82, row: 4, col: 7
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3005, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 3005, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  2: { name: "flying",
    pic: 2, state: 3005, wait: 1, next: 3, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "flying",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "flying",
    pic: 4, state: 3005, wait: 1, next: 5, dvx: 0, dvy: 0, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "flying",
    pic: 5, state: 3005, wait: 1, next: 6, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  6: { name: "flying",
    pic: 6, state: 3005, wait: 1, next: 7, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "flying",
    pic: 8, state: 3005, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -50, w: 240, h: 100, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 0, effect: 0
    }
  },
  41: { name: "flying",
    pic: 9, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 240, h: 200, dvx: 0, dvy: -1, fall: 100, vrest: 3, bdefend: 100, injury: 0, effect: 5
    }
  },
  42: { name: "flying",
    pic: 10, state: 3005, wait: 1, next: 43, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -50, w: 240, h: 100, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 0, effect: 5
    }
  },
  43: { name: "flying",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -50, w: 240, h: 100, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 0, effect: 0
      },
      {
        kind: 0, x: 0, y: 50, w: 240, h: 200, dvx: 0, dvy: -20, fall: 70, vrest: 13, bdefend: 100, injury: 5, effect: 0
      }
    ]
  },
  50: { name: "sharingan",
    pic: 12, state: 3005, wait: 1, next: 51, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  51: { name: "sharingan",
    pic: 13, state: 3005, wait: 1, next: 52, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 200, action: 50, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  52: { name: "sharingan",
    pic: 14, state: 3005, wait: 1, next: 1000, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "k_chakra",
    pic: 16, state: 3005, wait: 2, next: 56, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "k_chakra",
    pic: 17, state: 3005, wait: 2, next: 57, dvx: 0, dvz: 0, centerx: 44, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "k_chakra",
    pic: 18, state: 3005, wait: 2, next: 1000, dvx: 0, dvz: 0, centerx: 44, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "shuriken",
    pic: 36, state: 3005, wait: 1, next: 76, dvx: 50, dvy: 0, dvz: 15, centerx: 40, centery: 82,
    itr: {
      kind: 0, x: 30, y: 35, w: 20, h: 15, fall: 10, bdefend: 16, injury: 10, effect: 1
    }
  },
  76: { name: "shuriken",
    pic: 37, state: 3005, wait: 1, next: 75, dvx: 50, dvy: 0, dvz: 15, centerx: 40, centery: 82,
    itr: {
      kind: 0, x: 30, y: 35, w: 20, h: 15, fall: 10, bdefend: 16, injury: 10, effect: 1
    }
  },
  123: { name: "chakrashield",
    pic: 20, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  124: { name: "chakrashield",
    pic: 21, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  125: { name: "chakrashield",
    pic: 22, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  126: { name: "chakrashield",
    pic: 23, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  127: { name: "chakrashield",
    pic: 20, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  128: { name: "chakrashield",
    pic: 21, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  129: { name: "chakrashield",
    pic: 22, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  130: { name: "chakrashield",
    pic: 23, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  131: { name: "chakrashield",
    pic: 20, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  132: { name: "chakrashield",
    pic: 21, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 70, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  133: { name: "life chakra",
    pic: 24, state: 3005, wait: 1, next: 134, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  134: { name: "life chakra",
    pic: 25, state: 3005, wait: 1, next: 135, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  135: { name: "life chakra",
    pic: 26, state: 3005, wait: 1, next: 136, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  136: { name: "life chakra",
    pic: 27, state: 3005, wait: 1, next: 137, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  137: { name: "life chakra",
    pic: 24, state: 3005, wait: 1, next: 138, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  138: { name: "life chakra",
    pic: 25, state: 3005, wait: 1, next: 139, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  139: { name: "life chakra",
    pic: 26, state: 3005, wait: 1, next: 140, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  140: { name: "life chakra",
    pic: 27, state: 3005, wait: 1, next: 141, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  141: { name: "life chakra",
    pic: 24, state: 3005, wait: 1, next: 142, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  142: { name: "life chakra",
    pic: 25, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 0, w: 39, h: 89, dvx: 10, fall: 1, vrest: 7, bdefend: 100, injury: 1
      },
      {
        kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1
      }
    ]
  },
  150: { name: "wall_jump",
    pic: 3, state: 3005, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "wall_jump",
    pic: 7, state: 3005, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "wall_jump",
    pic: 19, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "rasengan",
    pic: 28, state: 3005, wait: 0, next: 156, dvx: 0, dvy: 0, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "rasengan",
    pic: 29, state: 3005, wait: 0, next: 157, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  157: { name: "rasengan",
    pic: 30, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "flying",
    pic: 8, state: 3005, wait: 1, next: 161, dvx: 0, dvy: 0, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  161: { name: "flying",
    pic: 9, state: 3005, wait: 1, next: 162, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  162: { name: "flying",
    pic: 10, state: 3005, wait: 1, next: 163, dvx: 0, dvy: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  163: { name: "flying",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 0, dvz: 0, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "wave",
    pic: 32, state: 3005, wait: 0, next: 167, dvx: 550, dvz: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "wave",
    pic: 33, state: 3005, wait: 0, next: 168, dvx: 550, dvz: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  168: { name: "wave",
    pic: 34, state: 3005, wait: 1, next: 169, dvx: 550, dvz: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  169: { name: "wave",
    pic: 35, state: 3005, wait: 1, next: 170, dvx: 550, dvz: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "wave",
    pic: 34, state: 3005, wait: 1, next: 171, dvx: 550, dvz: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "wave",
    pic: 35, state: 3005, wait: 1, next: 1000, dvx: 550, dvz: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "stimulant",
    pic: 40, state: 18, wait: 1, next: 176, dvx: 550, dvy: 550, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 0, w: 39, h: 89, fall: -200, arest: 20, bdefend: 100, injury: 0, effect: 1
    }
  },
  176: { name: "stimulant",
    pic: 41, state: 3005, wait: 1, next: 177, dvx: 550, dvy: 550, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "stimulant",
    pic: 42, state: 3005, wait: 1, next: 178, dvx: 550, dvy: 550, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  178: { name: "stimulant",
    pic: 43, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  179: { name: "stimulantKB",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 0, w: 39, h: 89, fall: -200, arest: 20, bdefend: 100, injury: 0, effect: 1
    }
  },
  180: { name: "chakra",
    pic: 999, state: 3005, wait: 0, next: 181, dvx: 550, dvy: 0, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  181: { name: "chakra",
    pic: 999, state: 3005, wait: 0, next: 182, dvx: 550, dvy: 0, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  182: { name: "chakra",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 44, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "rocks",
    pic: 44, state: 3005, wait: 1, next: 186, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  186: { name: "rocks",
    pic: 45, state: 3005, wait: 1, next: 187, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  187: { name: "rocks",
    pic: 46, state: 3005, wait: 1, next: 188, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  188: { name: "rocks",
    pic: 47, state: 3005, wait: 1, next: 189, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  189: { name: "rocks",
    pic: 48, state: 3005, wait: 1, next: 190, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "rocks",
    pic: 49, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  195: { name: "rocks",
    pic: 50, state: 3005, wait: 1, next: 196, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  196: { name: "rocks",
    pic: 51, state: 3005, wait: 1, next: 197, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  197: { name: "rocks",
    pic: 52, state: 3005, wait: 1, next: 198, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  198: { name: "rocks",
    pic: 53, state: 3005, wait: 1, next: 199, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  199: { name: "rocks",
    pic: 54, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "naruto1",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1881"
  },
  201: { name: "naruto1",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1882"
  },
  202: { name: "hearg",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/heart"
  },
  203: { name: "iron",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/iron"
  },
  204: { name: "katsu",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2037"
  },
  205: { name: "injured_dedaria1",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2053"
  },
  206: { name: "injured_dedaria2",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2054"
  },
  207: { name: "injured_sasuke1",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0574"
  },
  208: { name: "injured_sasuke2",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0575"
  },
  209: { name: "injured_itachi1",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2325"
  },
  210: { name: "injured_itachi2",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2326"
  },
  211: { name: "jiraya_chaaaa",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1330"
  },
  212: { name: "mangekyou_itachi",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/mangekyou"
  },
  213: { name: "sasori1",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/sasori1"
  },
  214: { name: "naruto2",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1911"
  },
  215: { name: "hidan",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/laugh2"
  },
  216: { name: "hidan",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/laugh"
  },
  217: { name: "naruto5",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1862"
  },
  315: { name: "heart_heal_small",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -876427836875656200, w: 500, h: 500, fall: -1, injury: -155, effect: 5
    }
  },
  316: { name: "heart_heal_full",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -876427836875656200, w: 500, h: 500, fall: -1, injury: -400, effect: 5
    }
  },
  317: { name: "heart_heal_smallest",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: -876427836875656200, w: 500, h: 500, fall: -1, injury: -80, effect: 5
    }
  },
  320: { name: "hiting",
    pic: 999, state: 3005, wait: 2, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -5, y: -15, w: 73, h: 84, dvx: -6, dvy: -10, fall: 80, arest: 20, bdefend: 70, injury: 7, effect: 1
    }
  },
  321: { name: "hiting",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  325: { name: "hidan",
    pic: 999, state: 3005, wait: 2, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 56, y: 23, w: 87, h: 59, dvx: 10, dvy: -15, fall: 70, arest: 0, bdefend: 30, injury: 7, effect: 1
    }
  },
  326: { name: "hidan",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  327: { name: "hidan",
    pic: 999, state: 3005, wait: 2, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 91, y: 71, w: 62, h: 82, dvx: 10, dvy: -15, fall: 70, arest: 0, bdefend: 30, injury: 7, effect: 1
    }
  },
  328: { name: "hidan",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  329: { name: "hidan",
    pic: 999, state: 3005, wait: 2, next: 330, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 25, y: 105, w: 122, h: 51, dvx: 10, dvy: -15, fall: 70, arest: 0, bdefend: 30, injury: 7, effect: 1
    }
  },
  330: { name: "hidan",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  331: { name: "hidan",
    pic: 999, state: 3005, wait: 2, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 16, y: 60, w: 60, h: 97, dvx: 10, dvy: -15, fall: 70, arest: 0, bdefend: 30, injury: 7, effect: 1
    }
  },
  332: { name: "hidan",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  333: { name: "bugs",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/insect"
  },
  334: { name: "elec",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103"
  },
  335: { name: "kyubi",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1992"
  }
  }
});