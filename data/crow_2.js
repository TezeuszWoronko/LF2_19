define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/crow.png", w: 81, h: 82, row: 4, col: 3
      },
      {
        "file(12-26)": "sprite/itachi_exp.png", w: 159, h: 159, row: 5, col: 3
      },
      {
        "file(27-44)": "sprite/bones.png", w: 90, h: 135, row: 6, col: 3
      },
      {
        "file(45-76)": "sprite/crow2.png", w: 81, h: 82, row: 4, col: 8
      },
      {
        "file(77-100)": "sprite/genjutsu_t.png", w: 280, h: 280, row: 3, col: 3
      }
    ]
  },
  frame: {
  0: { name: "terminate",
    pic: 999, state: 3005, wait: 0, next: 1, dvx: 550, dvy: 550, dvz: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "terminate",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 386, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  40: { name: "tail",
    pic: 0, state: 3006, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 45, state: 3005, wait: 2, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 46, state: 3005, wait: 2, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "start",
    pic: 47, state: 3005, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "start",
    pic: 48, state: 3005, wait: 2, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "start",
    pic: 49, state: 3005, wait: 2, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "start",
    pic: 50, state: 3005, wait: 2, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "start",
    pic: 51, state: 3005, wait: 2, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 57, state: 3005, wait: 0, next: 61, dvx: 550, dvy: 550, dvz: 0, centerx: -140, centery: 182, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    pic: 58, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: -140, centery: 182, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -140, y: 17, action: 70, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  68: { name: "start",
    pic: 51, state: 3005, wait: 1, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "hiting_ground",
    pic: 57, state: 3005, wait: 2, next: 71, dvx: 5, dvy: 5, dvz: 0, centerx: 38, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 17, y: 33, w: 50, h: 20, zwidth: 5, dvx: 10, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 55, effect: 1
    }
  },
  71: { name: "hiting_ground",
    pic: 58, state: 3005, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 17, y: 33, w: 50, h: 20, zwidth: 5, dvx: 10, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 55, effect: 1
    }
  },
  72: { name: "hiting_ground",
    pic: 59, state: 3005, wait: 1, next: 73, dvx: 70, dvy: 15, dvz: 0, centerx: 38, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 17, y: 33, w: 50, h: 20, zwidth: 5, dvx: 10, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 55, effect: 1
    }
  },
  73: { name: "hiting_ground",
    pic: 60, state: 3005, wait: 1, next: 74, dvx: 70, dvy: 15, dvz: 0, centerx: 38, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 17, y: 33, w: 50, h: 20, zwidth: 5, dvx: 10, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 55, effect: 1
    }
  },
  74: { name: "hiting_ground",
    pic: 61, state: 3005, wait: 1, next: 79, dvx: 70, dvy: 15, dvz: 0, centerx: 38, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 17, y: 33, w: 50, h: 20, zwidth: 5, dvx: 10, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 55, effect: 1
    }
  },
  79: { name: "hiting_ground",
    pic: 62, state: 3005, wait: 1, next: 1000, dvx: 50, dvy: 550, dvz: 0, centerx: 38, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 17, y: 33, w: 50, h: 20, zwidth: 5, dvx: 10, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 55, effect: 1
    }
  },
  80: { name: "black_flame",
    pic: 999, state: 400, wait: 2, next: 81, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "black_flame",
    pic: 999, state: 3005, wait: 1, next: 82, dvx: 0, dvy: -7, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 1
      },
      {
        kind: 8, x: -99999999, y: -63489789979, w: 10000000000000000, h: 500, zwidth: 99999, dvx: 1
      }
    ]
  },
  82: { name: "black_flame",
    pic: 999, state: 3005, wait: 5, next: 82, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 39, y: 115, action: 80, dvx: 0, dvy: 0, oid: 205, facing: 0
    },
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 1
      },
      {
        kind: 8, x: -99999999, y: -63489789979, w: 10000000000000000, h: 500, zwidth: 99999, dvx: 1
      }
    ]
  },
  83: { name: "black_flame",
    pic: 999, state: 3005, wait: 5, next: 83, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -964844262763489800000, w: 99999, h: 500, zwidth: 99999, dvx: 1
      },
      {
        kind: 8, x: -99999999, y: -63489789979, w: 10000000000000000, h: 500, zwidth: 99999, dvx: 1
      }
    ]
  },
  100: { name: "replacement",
    pic: 4, state: 3005, wait: 1, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 30, hit_d: 104, hit_j: 0, hit_Fa: 12
  },
  101: { name: "replacement",
    pic: 1, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  102: { name: "replacement",
    pic: 2, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  103: { name: "replacement",
    pic: 3, state: 3005, wait: 1, next: 100, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  104: { name: "replacement",
    pic: 4, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  145: { name: "explosion",
    pic: 12, state: 3003, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  146: { name: "explosion",
    pic: 13, state: 3003, wait: 1, next: 147, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 16, w: 122, h: 135, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  147: { name: "explosion",
    pic: 14, state: 3003, wait: 1, next: 148, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 18, w: 127, h: 131, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  148: { name: "explosion",
    pic: 15, state: 3003, wait: 1, next: 149, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 16, w: 146, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  149: { name: "explosion",
    pic: 16, state: 3003, wait: 1, next: 150, dvx: 0, dvy: 0, centerx: 78, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 13, w: 137, h: 132, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  150: { name: "explosion",
    pic: 17, state: 3003, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 78, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 14, w: 145, h: 117, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  151: { name: "explosion",
    pic: 18, state: 3003, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 78, centery: 157, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  152: { name: "explosion",
    pic: 19, state: 3003, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 78, centery: 164, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 999, vrest: 300, bdefend: 16, injury: 135, zwidth: 37, effect: 0
    }
  },
  153: { name: "explosion",
    pic: 20, state: 18, wait: 1, next: 154, dvx: 0, dvy: 0, centerx: 78, centery: 171, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "explosion",
    pic: 21, state: 18, wait: 1, next: 155, dvx: 0, dvy: 0, centerx: 78, centery: 177, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "explosion",
    pic: 22, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 76, centery: 172, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "bones",
    pic: 27, state: 15, wait: 1, next: 161, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  161: { name: "bones",
    pic: 28, state: 15, wait: 1, next: 162, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  162: { name: "bones",
    pic: 29, state: 15, wait: 1, next: 163, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 30, w: 85, h: 120, dvx: 0, dvy: -15, fall: 70, vrest: 20, bdefend: 100, injury: 15, zwidth: 15, effect: 1
    }
  },
  163: { name: "bones",
    pic: 30, state: 15, wait: 1, next: 164, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 30, w: 85, h: 120, dvx: 0, dvy: -15, fall: 70, vrest: 20, bdefend: 100, injury: 15, zwidth: 15, effect: 1
    }
  },
  164: { name: "bones",
    pic: 31, state: 15, wait: 1, next: 165, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  165: { name: "bones",
    pic: 32, state: 15, wait: 5, next: 166, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "bones",
    pic: 28, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "bones",
    pic: 999, state: 3005, wait: 3, next: 171, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "bones",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 120, action: 160, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  173: { name: "bones",
    pic: 999, state: 15, wait: 3, next: 174, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  174: { name: "bones",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 120, action: 175, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  175: { name: "bones",
    pic: 34, state: 15, wait: 1, next: 176, dvx: 550, dvy: 0, dvz: 550, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  176: { name: "bones",
    pic: 35, state: 15, wait: 1, next: 177, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "bones",
    pic: 36, state: 15, wait: 1, next: 178, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 80, w: 85, h: 60, dvx: 0, dvy: -15, fall: 70, vrest: 20, bdefend: 100, injury: 20, zwidth: 15, effect: 1
    }
  },
  178: { name: "bones",
    pic: 37, state: 15, wait: 5, next: 179, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  179: { name: "bones",
    pic: 36, state: 15, wait: 1, next: 180, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "bones",
    pic: 34, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  210: { name: "bones_bullet",
    pic: 7, state: 3002, wait: 1, next: 210, dvx: 50, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 35, w: 30, h: 17, dvx: 5, dvy: -5, fall: 30, vrest: 20, bdefend: 40, injury: 15, effect: 1
    }
  },
  215: { name: "hurting_fire",
    pic: 999, state: 3000, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -20, y: -746813, w: 108, h: 500, zwidth: 28
    }
  },
  220: { name: "start",
    pic: 45, state: 3005, wait: 2, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  221: { name: "start",
    pic: 46, state: 3005, wait: 2, next: 222, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  222: { name: "start",
    pic: 47, state: 3005, wait: 2, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  223: { name: "start",
    pic: 48, state: 3005, wait: 2, next: 224, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  224: { name: "start",
    pic: 49, state: 3005, wait: 2, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  225: { name: "start",
    pic: 50, state: 3005, wait: 2, next: 226, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  226: { name: "start",
    pic: 51, state: 3005, wait: 2, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  227: { name: "start",
    pic: 45, state: 3005, wait: 2, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  228: { name: "start",
    pic: 46, state: 3005, wait: 2, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  229: { name: "start",
    pic: 47, state: 3005, wait: 2, next: 230, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  230: { name: "flying",
    pic: 45, state: 3005, wait: 2, next: 231, dvx: 550, dvy: 550, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  231: { name: "flying",
    pic: 46, state: 3005, wait: 2, next: 232, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  232: { name: "flying",
    pic: 47, state: 3005, wait: 2, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  233: { name: "flying",
    pic: 48, state: 3005, wait: 2, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  234: { name: "flying",
    pic: 49, state: 3005, wait: 2, next: 235, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  235: { name: "flying",
    pic: 50, state: 3005, wait: 2, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  236: { name: "flying",
    pic: 51, state: 3005, wait: 2, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  237: { name: "flying",
    pic: 45, state: 3005, wait: 2, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  238: { name: "flying",
    pic: 46, state: 3005, wait: 2, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  239: { name: "flying",
    pic: 47, state: 3005, wait: 2, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  240: { name: "flying",
    pic: 48, state: 3005, wait: 2, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  241: { name: "flying",
    pic: 49, state: 3005, wait: 2, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  242: { name: "flying",
    pic: 52, state: 3005, wait: 2, next: 243, dvx: 550, dvy: 550, dvz: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "flying",
    pic: 53, state: 3005, wait: 2, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "flying ",
    pic: 54, state: 3005, wait: 2, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  245: { name: "flying",
    pic: 55, state: 3005, wait: 1, next: 250, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  250: { name: "crow_shuriken",
    pic: 57, state: 3005, wait: 0, next: 251, dvx: 40, dvy: 40, dvz: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  251: { name: "crow_shuriken",
    pic: 58, state: 3005, wait: 0, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  252: { name: "crow_shuriken",
    pic: 59, state: 3005, wait: 0, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  253: { name: "crow_shuriken",
    pic: 58, state: 3005, wait: 0, next: 254, dvx: 30, dvy: 2, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  254: { name: "crow_shurike",
    pic: 59, state: 3005, wait: 0, next: 255, dvx: 25, dvy: 2, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  255: { name: "crow_shuriken",
    pic: 58, state: 3005, wait: 0, next: 256, dvx: 25, dvy: 2, dvz: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  256: { name: "crow_shuriken",
    pic: 59, state: 3005, wait: 0, next: 257, dvx: 25, dvy: 2, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  257: { name: "crow_shuriken",
    pic: 58, state: 3005, wait: 0, next: 1000, dvx: 25, dvy: 2, dvz: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 0, y: 10, w: 90, h: 50, zwidth: 30, dvx: 0, dvy: -5, fall: 70, vrest: 20, bdefend: 20, injury: 5, effect: 1
    }
  },
  260: { name: "torture",
    pic: 999, state: 3005, wait: 3, next: 261, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 387, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  261: { name: "torture",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 3, x: 60, y: 80000, w: 30, h: 65,
        catchingact: [265, 265]
      },
      {
        kind: 3, x: 60, y: 0, w: 30, h: 100,
        catchingact: [265, 265]
      }
    ]
  },
  264: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 271, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 40, y: 200, action: 315, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  265: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 266, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  266: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 40, y: 200, action: 320, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  267: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 268, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 65, y: 88, action: 280, dvx: 0, dvy: 0, oid: 220, facing: 1
    }
  },
  268: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 273, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 13, y: 88, action: 280, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  269: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 270, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 80, y: 85, action: 280, dvx: 0, dvy: 0, oid: 220, facing: 1
    }
  },
  270: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 267, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: -2, y: 85, action: 280, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  271: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 272, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 90, y: 82, action: 295, dvx: 0, dvy: 0, oid: 220, facing: 1
    }
  },
  272: { name: "torture",
    pic: 63, state: 9, wait: 0, next: 269, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: -12, y: 82, action: 295, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  273: { name: "torturing",
    pic: 63, state: 9, wait: 40, next: 274, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 0, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  274: { name: "torturing",
    pic: 63, state: 9, wait: 60, next: 274, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 42, y: 30, injury: 60, vaction: 130, throwvz: -842150451, cover: 11, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  280: { name: "torture",
    pic: 64, state: 3005, wait: 4, next: 281, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  281: { name: "torture",
    pic: 64, state: 3005, wait: 4, next: 282, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  282: { name: "torture",
    pic: 64, state: 3005, wait: 4, next: 283, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  283: { name: "torture",
    pic: 67, state: 3005, wait: 4, next: 284, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  284: { name: "torture",
    pic: 64, state: 3005, wait: 4, next: 285, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  285: { name: "torture",
    pic: 64, state: 3005, wait: 4, next: 286, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  286: { name: "torture",
    pic: 64, state: 3005, wait: 4, next: 287, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  287: { name: "torture",
    pic: 67, state: 3005, wait: 4, next: 288, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  288: { name: "torture",
    pic: 68, state: 3005, wait: 4, next: 289, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  289: { name: "torture",
    pic: 69, state: 3005, wait: 4, next: 290, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  290: { name: "torture",
    pic: 70, state: 3005, wait: 4, next: 291, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    },
    opoint: {
      kind: 1, x: 63, y: 70, action: 307, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  291: { name: "torture",
    pic: 69, state: 3005, wait: 4, next: 280, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  295: { name: "torture2",
    pic: 71, state: 3005, wait: 4, next: 296, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  296: { name: "torture",
    pic: 72, state: 3005, wait: 4, next: 297, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  297: { name: "torture",
    pic: 73, state: 3005, wait: 4, next: 298, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  298: { name: "torture",
    pic: 74, state: 3005, wait: 4, next: 299, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  299: { name: "torture",
    pic: 71, state: 3005, wait: 4, next: 300, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  300: { name: "torture",
    pic: 72, state: 3005, wait: 4, next: 301, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  301: { name: "torture",
    pic: 73, state: 3005, wait: 4, next: 302, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  302: { name: "torture",
    pic: 74, state: 3005, wait: 4, next: 303, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  303: { name: "torture",
    pic: 75, state: 3005, wait: 4, next: 304, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  304: { name: "torture",
    pic: 76, state: 3005, wait: 4, next: 305, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  305: { name: "torture",
    pic: 76, state: 3005, wait: 4, next: 306, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  306: { name: "torture",
    pic: 75, state: 3005, wait: 4, next: 295, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  307: { name: "blood",
    pic: 0, state: 3005, wait: 0, next: 308, dvx: 550, dvy: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  308: { name: "blood",
    pic: 1, state: 3005, wait: 0, next: 309, dvx: 550, dvy: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  309: { name: "blood",
    pic: 2, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  310: { name: "eye",
    pic: 81, state: 3005, wait: 4, next: 311, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  311: { name: "eye",
    pic: 82, state: 3005, wait: 4, next: 312, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  312: { name: "eye",
    pic: 83, state: 3005, wait: 4, next: 313, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  313: { name: "eye",
    pic: 82, state: 3005, wait: 4, next: 310, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  314: { name: "moon",
    pic: 33, state: 9997, wait: 4, next: 314, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  315: { name: "torture",
    pic: 999, state: 3005, wait: 0, next: 316, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  316: { name: "torture",
    pic: 999, state: 3005, wait: 0, next: 317, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 200, action: 65, dvx: 0, dvy: 0, oid: 214, facing: 0
    }
  },
  317: { name: "torture",
    pic: 999, state: 3005, wait: 0, next: 318, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -98, y: 200, action: 314, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  318: { name: "torture",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 387, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  320: { name: "eye2",
    pic: 77, state: 3005, wait: 0, next: 321, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  321: { name: "eye2",
    pic: 77, state: 3005, wait: 0, next: 322, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    },
    opoint: {
      kind: 1, x: 143, y: 280, action: 310, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  322: { name: "eye2",
    pic: 77, state: 3005, wait: 4, next: 323, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  323: { name: "eye2",
    pic: 78, state: 3005, wait: 4, next: 324, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  324: { name: "eye2",
    pic: 79, state: 3005, wait: 4, next: 325, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  325: { name: "eye2",
    pic: 78, state: 3005, wait: 4, next: 322, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 1
    }
  },
  330: { name: "eye2",
    pic: 77, state: 3005, wait: 1, next: 331, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  331: { name: "eye2",
    pic: 79, state: 3005, wait: 1, next: 332, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0
  },
  332: { name: "eye2",
    pic: 81, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 143, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0
  },
  335: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 336, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  336: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 337, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  337: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 338, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  338: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 339, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  339: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 340, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  340: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 341, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  341: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 342, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  342: { name: "eye_rip",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 503, facing: 0
    }
  },
  343: { name: "moon",
    pic: 33, state: 9997, wait: 4, next: 344, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0
  },
  344: { name: "moon",
    pic: 38, state: 9997, wait: 2, next: 345, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0
  },
  345: { name: "moon",
    pic: 39, state: 9997, wait: 2, next: 346, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0
  },
  346: { name: "moon",
    pic: 40, state: 9997, wait: 2, next: 347, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0
  },
  347: { name: "moon",
    pic: 41, state: 9997, wait: 2, next: 348, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0
  },
  348: { name: "moon",
    pic: 42, state: 9997, wait: 4, next: 348, dvx: 0, dvy: 0, centerx: 43, centery: 530, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10
: { name: "  pic: 999 state: 3002 wait: 0 next: 31 dvx: 0  dvy: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 "
  },
  20
: { name: "  pic: 999 state: 3002 wait: 0 next: 31 dvx: 0  dvy: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 "
  },
  30
: { name: "  pic: 999 state: 3002 wait: 0 next: 31 dvx: 0  dvy: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 "
  },
  31
: { name: "  pic: 999 state: 3002 wait: 1 next: 1000 dvx: 0  dvy: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 ",
    itr: {
      kind: 0, x: -9999, y: 80000, w: 99999, h: 999, zwidth: 9999, dvx: 0, dvy: 0, fall: 999, vrest: 6, bdefend: 100, injury: 55, effect: 2
    }
  }
  }
});