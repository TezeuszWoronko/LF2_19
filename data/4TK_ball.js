define({
  bmp: {
    file: [
      {
        "file(0-15)": "sprite/4tk_ball.png", w: 165, h: 145, row: 4, col: 4
      },
      {
        "file(16-19)": "sprite/4tk_bal2.png", w: 395, h: 175, row: 2, col: 2
      },
      {
        "file(20-23)": "sprite/4tk_beam.png", w: 725, h: 160, row: 1, col: 4
      },
      {
        "file(24-28)": "sprite/4tk_beam2.png", w: 725, h: 160, row: 1, col: 5
      },
      {
        "file(29-36)": "sprite/4tk_bal3.png", w: 275, h: 75, row: 2, col: 4
      },
      {
        "file(37-40)": "sprite/4tk_arm.png", w: 160, h: 300, row: 4, col: 1
      },
      {
        "file(41-44)": "sprite/4tk_ex.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(45-56)": "sprite/4tk_ex2.png", w: 165, h: 155, row: 4, col: 3
      },
      {
        "file(57-64)": "sprite/circle.png", w: 375, h: 80, row: 2, col: 4
      },
      {
        "file(65-80)": "sprite/circle2.png", w: 125, h: 115, row: 5, col: 3
      }
    ]
  },
  frame: {
  100: { name: "flash",
    pic: 12, state: 3003, wait: 0, next: 101, dvx: 0, dvy: 0, centerx: 24, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 100, w: 99999, h: 8, zwidth: 9999, dvx: 10, dvy: -15, fall: 70, vrest: 7, bdefend: 100, injury: 90, effect: 0
    }
  },
  101: { name: "flash",
    pic: 1, state: 3003, wait: 0, next: 102, dvx: 0, dvy: 0, centerx: 24, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 100, w: 99999, h: 8, zwidth: 9999, dvx: 10, dvy: -15, fall: 70, vrest: 7, bdefend: 100, injury: 90, effect: 0
    },
    opoint: {
      kind: 1, x: 24, y: 105, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 31
    }
  },
  102: { name: "flash",
    pic: 2, state: 3003, wait: 0, next: 103, dvx: 0, dvy: 0, centerx: 24, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "flash",
    pic: 3, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  105: { name: "arc",
    pic: 16, state: 3005, wait: 0, next: 106, dvx: 100, dvy: 0, centerx: 240, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "arc",
    pic: 16, state: 3005, wait: 3, next: 1000, dvx: 100, dvy: 0, centerx: 240, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "ball",
    pic: 4, state: 3005, wait: 1, next: 111, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "ball",
    pic: 5, state: 3005, wait: 1, next: 112, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "ball",
    pic: 6, state: 3005, wait: 1, next: 113, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "ball",
    pic: 7, state: 3005, wait: 1, next: 114, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "ball",
    pic: 8, state: 3005, wait: 1, next: 115, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "ball",
    pic: 9, state: 3005, wait: 1, next: 116, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "ball",
    pic: 10, state: 3005, wait: 1, next: 117, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "ball",
    pic: 11, state: 3005, wait: 4, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "beam1",
    pic: 24, state: 18, wait: 0, next: 123, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 0
    }
  },
  123: { name: "beam1",
    pic: 24, state: 18, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 0
    },
    opoint: {
      kind: 1, x: 725, y: 160, action: 124, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  124: { name: "beam1",
    pic: 27, state: 18, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 20, effect: 0
    }
  },
  125: { name: "beam2",
    pic: 25, state: 18, wait: 0, next: 126, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 21, effect: 0
    }
  },
  126: { name: "beam2",
    pic: 25, state: 18, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 21, effect: 0
    },
    opoint: {
      kind: 1, x: 725, y: 160, action: 124, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  130: { name: "beam3",
    pic: 26, state: 18, wait: 0, next: 131, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 22, effect: 0
    }
  },
  131: { name: "beam3",
    pic: 26, state: 18, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 725, h: 9999999, zwidth: 45, dvx: 50, dvy: -25, fall: 100, vrest: 7, bdefend: 100, injury: 22, effect: 0
    },
    opoint: {
      kind: 1, x: 725, y: 160, action: 124, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  135: { name: "drig",
    pic: 29, state: 18, wait: 0, next: 136, dvx: 550, dvy: 550, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: -6846518879, w: 725, h: 500, zwidth: 5, dvx: 0, dvy: 0, fall: -9999, arest: 100, bdefend: 100, injury: 0, effect: 5
    }
  },
  136: { name: "drig",
    pic: 29, state: 18, wait: 0, next: 137, dvx: 550, dvy: 550, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: -6846518879, w: 725, h: 500, zwidth: 5, dvx: 0, dvy: 0, fall: -9999, arest: 100, bdefend: 100, injury: 0, effect: 5
    },
    opoint: {
      kind: 1, x: 140, y: 90, action: 155, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  137: { name: "drig",
    pic: 30, state: 3005, wait: 1, next: 138, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  138: { name: "drig",
    pic: 31, state: 3005, wait: 1, next: 139, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  139: { name: "drig",
    pic: 29, state: 3005, wait: 1, next: 140, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  140: { name: "drig",
    pic: 30, state: 3005, wait: 1, next: 141, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "drig",
    pic: 31, state: 3005, wait: 1, next: 142, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "drig",
    pic: 29, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  145: { name: "drig2",
    pic: 30, state: 3005, wait: 0, next: 146, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "drig",
    pic: 31, state: 3005, wait: 0, next: 147, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  147: { name: "drig",
    pic: 29, state: 3005, wait: 0, next: 148, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "drig",
    pic: 30, state: 3005, wait: 0, next: 149, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "drig",
    pic: 31, state: 3005, wait: 0, next: 150, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "drig",
    pic: 29, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "gap",
    pic: 999, state: 3005, wait: 1, next: 156, dvx: 550, dvy: 0, dvz: 0, centerx: 140, centery: 75, hit_a: 0, hit_d: 0, hit_j: 45
  },
  156: { name: "gap",
    pic: 32, state: 3005, wait: 1, next: 157, dvx: 550, dvy: 0, dvz: 550, centerx: 140, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "gap",
    pic: 33, state: 3005, wait: 1, next: 158, dvx: 550, dvy: 0, dvz: 550, centerx: 140, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  158: { name: "gap",
    pic: 34, state: 3005, wait: 1, next: 159, dvx: 550, dvy: 0, dvz: 550, centerx: 140, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  159: { name: "gap",
    pic: 35, state: 3005, wait: 1, next: 160, dvx: 550, dvy: 0, dvz: 550, centerx: 140, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "gap",
    pic: 36, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 140, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  165: { name: "hand",
    pic: 999, state: 400, wait: 5, next: 166, dvx: 0, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "hand",
    pic: 999, state: 3005, wait: 0, next: 167, dvx: 200, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "hand",
    pic: 999, state: 3005, wait: 4, next: 168, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  168: { name: "hand",
    pic: 999, state: 3005, wait: 0, next: -169, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -50, y: 300, action: 169, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  169: { name: "hand",
    pic: 37, state: 3005, wait: 0, next: 170, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "hand",
    pic: 37, state: 18, wait: 1, next: 171, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 300, action: 35, dvx: 0, dvy: 0, oid: 208, facing: 0
    },
    itr: {
      kind: 0, x: 10, y: 233, w: 105, h: 100, zwidth: 5, dvx: 5, dvy: -40, fall: 100, vrest: 20, bdefend: 100, injury: 35, effect: 0
    }
  },
  171: { name: "hand",
    pic: 38, state: 18, wait: 1, next: 172, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 233, w: 105, h: 150, zwidth: 5, dvx: 5, dvy: -40, fall: 100, vrest: 20, bdefend: 100, injury: 35, effect: 0
    }
  },
  172: { name: "hand",
    pic: 39, state: 18, wait: 1, next: 173, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 233, w: 105, h: 235, zwidth: 5, dvx: 5, dvy: -40, fall: 100, vrest: 20, bdefend: 100, injury: 35, effect: 0
    }
  },
  173: { name: "hand",
    pic: 40, state: 18, wait: 3, next: 174, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 233, w: 105, h: 295, zwidth: 5, dvx: 5, dvy: -40, fall: 100, vrest: 20, bdefend: 100, injury: 35, effect: 0
    }
  },
  174: { name: "hand",
    pic: 39, state: 18, wait: 1, next: 175, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "hand",
    pic: 38, state: 18, wait: 1, next: 176, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "hand",
    pic: 37, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 80, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "col",
    pic: 41, state: 3005, wait: 1, next: 181, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  181: { name: "col",
    pic: 42, state: 3005, wait: 1, next: 182, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  182: { name: "col",
    pic: 43, state: 3005, wait: 1, next: 183, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  183: { name: "col",
    pic: 44, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "end",
    pic: 45, state: 3003, wait: 1, next: 186, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 42, y: 42, w: 73, h: 71, dvx: 25, dvy: -25, fall: 100, vrest: 10, bdefend: 100, injury: 150, effect: 0
    }
  },
  186: { name: "end",
    pic: 46, state: 3003, wait: 1, next: 187, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 24, y: 27, w: 120, h: 107, dvx: 25, dvy: -25, fall: 100, vrest: 10, bdefend: 100, injury: 150, effect: 0
    }
  },
  187: { name: "end",
    pic: 47, state: 3003, wait: 1, next: 188, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10, w: 140, h: 135, dvx: 25, dvy: -25, fall: 100, vrest: 10, bdefend: 100, injury: 150, effect: 0
    }
  },
  188: { name: "end",
    pic: 48, state: 3003, wait: 1, next: 189, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 0, w: 145, h: 150, dvx: 25, dvy: -25, fall: 100, vrest: 10, bdefend: 100, injury: 150, effect: 0
    }
  },
  189: { name: "end",
    pic: 49, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "fade",
    pic: 999, state: 3005, wait: 0, next: 191, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "fade",
    pic: 50, state: 3005, wait: 1, next: 192, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 100, action: 191, dvx: 0, dvy: 0, oid: 446, facing: 1
    }
  },
  192: { name: "fade",
    pic: 51, state: 3005, wait: 1, next: 193, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  193: { name: "fade",
    pic: 52, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  195: { name: "blood",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032"
  },
  196: { name: "blood",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  197: { name: "whoosh",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007"
  },
  198: { name: "spin",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054"
  },
  200: { name: "circle",
    pic: 57, state: 3005, wait: 1, next: 201, dvx: 550, dvy: 550, dvz: 550, centerx: 187, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0
  },
  201: { name: "circle",
    pic: 58, state: 3005, wait: 1, next: 202, dvx: 550, dvy: 550, dvz: 550, centerx: 187, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0
  },
  202: { name: "circle",
    pic: 59, state: 3005, wait: 1, next: 203, dvx: 550, dvy: 550, dvz: 550, centerx: 187, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0
  },
  203: { name: "circle",
    pic: 60, state: 18, wait: 1, next: 203, dvx: 550, dvy: 550, dvz: 550, centerx: 187, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 67, y: -458686942684, w: 250, h: 500, zwidth: 30, dvy: 10, fall: -1, arest: 6, injury: -8, effect: 5
    }
  },
  205: { name: "circle_reaper",
    pic: 999, state: 3005, wait: 1, next: 206, dvx: 550, dvy: 550, dvz: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 47
  },
  206: { name: "circle_reaper",
    pic: 70, state: 3005, wait: 0, next: 206, dvx: 550, dvy: 550, dvz: 550, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -6842487454687, w: 99999, h: 9999, zwidth: 9999, dvx: 217
    }
  },
  210: { name: "circle_reaper_tras",
    pic: 65, state: 3005, wait: 1, next: 211, dvx: 550, dvy: 550, dvz: 550, centerx: 115, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  211: { name: "circle_reaper_tras",
    pic: 66, state: 3005, wait: 1, next: 212, dvx: 550, dvy: 550, dvz: 550, centerx: 115, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  212: { name: "circle_reaper_tras",
    pic: 67, state: 3005, wait: 1, next: 213, dvx: 550, dvy: 550, dvz: 550, centerx: 115, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  213: { name: "circle_reaper_tras",
    pic: 68, state: 3005, wait: 1, next: 214, dvx: 550, dvy: 550, dvz: 550, centerx: 115, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  214: { name: "circle_reaper_tras",
    pic: 69, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 115, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0
  },
  215: { name: "circle",
    pic: 999, state: 18, wait: 0, next: 216, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -25, y: -458686942584, w: 125, h: 200, zwidth: 25, dvx: 0, dvy: 0, fall: -1, arest: 120, bdefend: 100, injury: -40, effect: 5
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 217, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  216: { name: "circle",
    pic: 999, state: 18, wait: 0, next: 218, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -25, y: -458686942584, w: 125, h: 200, zwidth: 25, dvx: 0, dvy: 0, fall: -1, arest: 120, bdefend: 100, injury: -40, effect: 5
    },
    opoint: {
      kind: 1, x: 39, y: 0, action: 220, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  217: { name: "hurting",
    pic: 999, state: 3000, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  218: { name: "circle",
    pic: 999, state: 18, wait: 0, next: 215, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -25, y: -458686942584, w: 125, h: 200, zwidth: 25, dvx: 0, dvy: 0, fall: -1, arest: 120, bdefend: 100, injury: -40, effect: 5
    },
    opoint: {
      kind: 1, x: 39, y: 0, action: 215, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  220: { name: "circle__hidan",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 40, y: -754332654, w: 50, h: 200, zwidth: 5, dvx: 221
    }
  },
  221: { name: "circle_hidan_catching",
    pic: 999, state: 3005, wait: 0, next: 222, dvx: 0, dvy: 0, centerx: 60, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  222: { name: "Dis",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 150, action: 389, dvx: 0, dvy: 0, oid: 56, facing: 0
    }
  },
  225: { name: "circle_reaper_tras",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: -646813, w: 10, h: 6, dvx: 0, dvy: -5, fall: 1, arest: 1, bdefend: 20, injury: 5, effect: 1
    }
  },
  226: { name: "circle_reaper_tras",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: -746813, w: 10, h: 6, dvx: 0, dvy: -5, fall: 1, arest: 1, bdefend: 20, injury: 5, effect: 1
    }
  },
  230: { name: "circle_reaper",
    pic: 999, state: 3005, wait: 1, next: 231, dvx: 550, dvy: 550, dvz: 0, centerx: 60, centery: 18, hit_a: 0, hit_d: 0, hit_j: 47
  },
  231: { name: "circle_reaper",
    pic: 57, state: 3005, wait: 1, next: 232, dvx: 550, dvy: 550, dvz: 550, centerx: 185, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  232: { name: "circle_reaper",
    pic: 58, state: 3005, wait: 1, next: 233, dvx: 550, dvy: 550, dvz: 550, centerx: 185, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  233: { name: "circle_reaper",
    pic: 59, state: 3005, wait: 1, next: 233, dvx: 550, dvy: 550, dvz: 550, centerx: 185, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: -9999, y: -6842487454687, w: 99999, h: 9999, zwidth: 9999, dvx: 217
      },
      {
        kind: 0, x: -35, y: -458686942584, w: 325, h: 200, zwidth: 25, dvx: 0, dvy: 0, fall: -1, arest: 120, bdefend: 100, injury: -40, effect: 5
      }
    ],
    opoint: {
      kind: 1, x: 180, y: 0, action: 215, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  238: { name: "sword",
    pic: 48, state: 3, wait: 2, next: 239, dvx: 0, dvy: 0, centerx: 19, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  240: { name: "end",
    pic: 45, state: 3003, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "end",
    pic: 46, state: 3003, wait: 1, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  242: { name: "end",
    pic: 47, state: 3003, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "end",
    pic: 48, state: 3003, wait: 1, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "end",
    pic: 49, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  260: { name: "chidori",
    pic: 999, state: 3003, wait: 10, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "chidori",
    pic: 53, state: 3003, wait: 5, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "chidori",
    pic: 54, state: 3003, wait: 5, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  263: { name: "chidori",
    pic: 55, state: 3003, wait: 15, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
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
      kind: 0, x: -9999, y: 80000, w: 99999, h: 999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 6, bdefend: 100, injury: 35, effect: 5
    }
  }
  }
});