define({
  bmp: {
    file: [
      {
        "file(0-9)": "sprite/lhound.png", w: 79, h: 79, row: 10, col: 1
      },
      {
        "file(10)": "sprite/meteor.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(11-14)": "sprite/meteors.png", w: 275, h: 75, row: 2, col: 2
      },
      {
        "file(15)": "sprite/meteor3.png", w: 500, h: 500, row: 1, col: 1
      },
      {
        "file(16)": "sprite/white.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(17)": "sprite/white2.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(18-37)": "sprite/edotensei.png", w: 79, h: 79, row: 10, col: 2
      },
      {
        "file(38)": "sprite/underwater.png", w: 4000, h: 800, row: 1, col: 1
      },
      {
        "file(39-79)": "sprite/small.png", w: 79, h: 79, row: 10, col: 4
      },
      {
        "file(80-85)": "sprite/mangek.png", w: 215, h: 222, row: 3, col: 2
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 1, dvx: 17, dvy: 550, dvz: 0, centerx: 39, centery: 63,
    sound: "1/103", hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 3, arest: 1, bdefend: 999, injury: 31, effect: 5
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 2, dvx: 17, dvy: 550, dvz: 0, centerx: 39, centery: 63, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 3, arest: 1, bdefend: 999, injury: 31, effect: 5
    }
  },
  2: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 3, dvx: 17, dvy: 550, dvz: 0, centerx: 39, centery: 63,
    sound: "1/103", hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 3, arest: 1, bdefend: 999, injury: 31, effect: 5
    }
  },
  3: { name: "flying",
    pic: 4, state: 3006, wait: 1, next: 999, dvx: 17, dvy: 550, dvz: 0, centerx: 39, centery: 63, hit_a: 1, hit_d: 5, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 3, arest: 1, bdefend: 999, injury: 31, effect: 5
    }
  },
  5: { name: "flying",
    pic: 5, state: 3006, wait: 1, next: 5, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, fall: 3, arest: 1, bdefend: 999, injury: 31, effect: 5
    }
  },
  10: { name: "on_ground",
    pic: 999, state: 3001, wait: 0, next: 202, dvx: 0, dvy: 550, centerx: 39, centery: 63
  },
  20: { name: "on_ground",
    pic: 999, state: 3002, wait: 0, next: 202, dvx: 0, dvy: 550, centerx: 39, centery: 79
  },
  30: { name: "rebounding",
    pic: 999, state: 3000, wait: 0, next: 202, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "edo",
    pic: 18, state: 3006, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  41: { name: "edo",
    pic: 19, state: 3006, wait: 2, next: 42, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  42: { name: "edo",
    pic: 20, state: 3006, wait: 2, next: 43, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  43: { name: "edo",
    pic: 21, state: 3006, wait: 7, next: 44, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  44: { name: "edo",
    pic: 22, state: 3006, wait: 2, next: 45, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  45: { name: "edo",
    pic: 20, state: 3006, wait: 2, next: 46, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  46: { name: "edo",
    pic: 19, state: 3006, wait: 2, next: 47, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  47: { name: "edo",
    pic: 18, state: 3006, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 63
  },
  138: { name: "white",
    pic: 17, state: 9997, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 800, hit_a: 0, hit_d: 0, hit_j: 100
  },
  139: { name: "white",
    pic: 17, state: 9997, wait: 3, next: 140, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 800, hit_a: 0, hit_d: 0, hit_j: 100
  },
  140: { name: "white",
    pic: 16, state: 9997, wait: 30, next: 138, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 800, hit_a: 0, hit_d: 0, hit_j: 100
  },
  141: { name: "sgrab2",
    pic: 999, state: 400, wait: 3, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "col",
    pic: 999, state: 3005, wait: 0, next: 143, dvx: 40, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "meteorshadow",
    pic: 11, state: 3005, wait: 60, next: 144, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 141, y: 3333, action: 343, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  144: { name: "meteorshadow",
    pic: 12, state: 3005, wait: 80, next: 145, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  145: { name: "meteorshadow",
    pic: 13, state: 3005, wait: 80, next: 146, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "meteorshadow",
    pic: 14, state: 3005, wait: 1, next: 146, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 160, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "meteor",
    pic: 10, state: 3005, wait: 8, next: 150, dvx: 0, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "meteor",
    pic: 10, state: 3005, wait: 2, next: 151, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "meteor",
    pic: 15, state: 3005, wait: 1, next: 200, dvx: 550, dvy: 5, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "meteor",
    pic: 15, state: 3005, wait: 1, next: 152, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 71, y: 101, w: 350, h: 143, zwidth: 35, vrest: 1
      },
      {
        kind: 14, x: 71, y: 80000, w: 350, h: 143, zwidth: 10, vrest: 1
      }
    ],
    bdy: {
      kind: 0, x: 50, y: 103, w: 350, h: 155, zwidth: 35
    }
  },
  160: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 161, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 225, hit_a: 0, hit_d: 0, hit_j: 0
  },
  161: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 162, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0
  },
  162: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 163, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0
  },
  163: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 164, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  164: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 165, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 125, hit_a: 0, hit_d: 0, hit_j: 0
  },
  165: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 166, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 167, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 168, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  168: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 169, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  169: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 170, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 171, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 172, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -50, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 250, y: 310, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  172: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 173, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  173: { name: "meteor",
    pic: 10, state: 3005, wait: 0, next: 201, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  174: { name: "meteor",
    pic: 15, state: 3005, wait: 0, next: 174, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "meteor",
    pic: 15, state: 3005, wait: 6, next: 201, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 250, y: 385, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  201: { name: "meteor",
    pic: 15, state: 3005, wait: 2, next: 152, dvx: 550, dvy: 550, dvz: 550, centerx: 250, centery: -150, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 71, y: 101, w: 350, h: 143, zwidth: 35, vrest: 100, injury: 300, dvx: 50, dvy: -30, fall: 70
    },
    opoint: {
      kind: 1, x: 250, y: 310, action: 360, dvx: 0, dvy: 0, oid: 237, facing: 0
    }
  },
  202: { name: "meteor",
    pic: 15, state: 3005, wait: 0, next: 152, dvx: 550, dvy: 0, dvz: 550, centerx: 250, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  210: { name: "shrapnel",
    pic: 23, state: 3003, wait: 75, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, arest: 30, bdefend: 999, injury: 40, effect: 0, fall: 40
    }
  },
  211: { name: "shrapnel",
    pic: 24, state: 3003, wait: 75, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, arest: 30, bdefend: 999, injury: 40, effect: 0, fall: 40
    }
  },
  212: { name: "shrapnel",
    pic: 25, state: 3003, wait: 75, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 22, y: 22, w: 50, h: 50, dvx: 5, dvy: -17, arest: 30, bdefend: 999, injury: 40, effect: 0, fall: 40
    }
  },
  213: { name: "shrapnel",
    pic: 26, state: 3003, wait: 75, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 5, dvy: -17, arest: 30, bdefend: 999, injury: 40, effect: 0, fall: 40
    }
  },
  214: { name: "chibaku",
    pic: 8, state: 3003, wait: 1, next: 215, dvx: 0, dvy: -15, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  215: { name: "chibaku",
    pic: 8, state: 3003, wait: 24, next: 216, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  216: { name: "chibaku",
    pic: 8, state: 3003, wait: 75, next: 1000, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  217: { name: "underwater",
    pic: 38, state: 9997, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 800, hit_a: 0, hit_d: 0, hit_j: 100
  },
  220: { name: "limbo",
    pic: 999, state: 3003, wait: 1, next: 221, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  221: { name: "limbo",
    pic: 28, state: 3003, wait: 1, next: 222, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  222: { name: "limbo",
    pic: 29, state: 3003, wait: 1, next: 223, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  223: { name: "limbo",
    pic: 30, state: 3003, wait: 1, next: 224, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  224: { name: "limbo",
    pic: 31, state: 3003, wait: 4, next: 225, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  225: { name: "limbo",
    pic: 32, state: 3003, wait: 4, next: 226, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  226: { name: "limbo",
    pic: 33, state: 3003, wait: 2, next: 227, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  227: { name: "limbo",
    pic: 34, state: 3003, wait: 4, next: 228, dvx: -15, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, zwidth: 15, dvx: -10, dvy: -7, arest: 30, bdefend: 999, injury: 40, effect: 0, fall: 70
    }
  },
  228: { name: "limbo",
    pic: 35, state: 3003, wait: 13, next: 1000, dvx: -28, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, zwidth: 15, dvx: -15, dvy: -7, arest: 30, bdefend: 999, injury: 60, effect: 0, fall: 70
    }
  },
  229: { name: "underwater",
    pic: 38, state: 9997, wait: 220, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 2000, centery: 800, hit_a: 0, hit_d: 0, hit_j: 100,
    itr: [
      {
        kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 0, effect: 5
      },
      {
        kind: 8, x: -9999, y: -915215488735, w: 99999, h: 500, zwidth: 99999, dvx: 217
      }
    ]
  },
  230: { name: "zets",
    pic: 36, state: 3003, wait: 5, next: 231, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  231: { name: "zets",
    pic: 37, state: 3003, wait: 11, next: 232, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  232: { name: "zets",
    pic: 36, state: 3003, wait: 6, next: 233, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  233: { name: "zets",
    pic: 37, state: 3003, wait: 15, next: 1000, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  240: { name: "splash",
    pic: 39, state: 3003, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "splash",
    pic: 40, state: 3003, wait: 2, next: 242, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  242: { name: "splash",
    pic: 41, state: 3003, wait: 2, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "splash",
    pic: 42, state: 3003, wait: 2, next: 244, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "splash",
    pic: 43, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  245: { name: "splash",
    pic: 44, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  246: { name: "splash2",
    pic: 45, state: 3003, wait: 2, next: 247, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  247: { name: "splash2",
    pic: 46, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  248: { name: "splash3",
    pic: 47, state: 3003, wait: 2, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  249: { name: "splash3",
    pic: 48, state: 3003, wait: 2, next: 250, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  250: { name: "splash3",
    pic: 49, state: 3003, wait: 2, next: 251, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "splash3",
    pic: 50, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  252: { name: "cs",
    pic: 76, state: 3003, wait: 2, next: 253, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  253: { name: "cs",
    pic: 77, state: 3003, wait: 2, next: 254, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  254: { name: "cs",
    pic: 78, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  310: { name: "hiting2",
    pic: 88, state: 9, wait: 1, next: 310, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  331: { name: "genjutsu",
    pic: 80, state: 3005, wait: 1, next: 332, dvx: 550, dvy: 0, centerx: 2000, centery: 400, hit_a: 0, hit_d: 0, hit_j: 48
  },
  332: { name: "genjutsu",
    pic: 81, state: 3003, wait: 4, next: 333, dvx: 550, dvy: 0, centerx: 130, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    },
    opoint: {
      kind: 1, x: 39, y: 400, action: 56, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  333: { name: "genjutsu",
    pic: 80, state: 3003, wait: 4, next: 339, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 166, hit_a: 15, hit_d: 334, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  339: { name: "genjutsu",
    pic: 80, state: 3003, wait: 0, next: 340, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 166, hit_a: 8, hit_d: 334, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  340: { name: "genjutsu",
    pic: 81, state: 3003, wait: 4, next: 341, dvx: 550, dvy: 0, dvz: 550, centerx: 130, centery: 180, hit_a: 8, hit_d: 334, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  341: { name: "genjutsu",
    pic: 80, state: 3003, wait: 4, next: 342, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 166, hit_a: 8, hit_d: 334, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  342: { name: "genjutsu",
    pic: 81, state: 3003, wait: 4, next: 343, dvx: 550, dvy: 0, dvz: 550, centerx: 130, centery: 180, hit_a: 15, hit_d: 334, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  343: { name: "genjutsu",
    pic: 80, state: 3003, wait: 4, next: 344, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 166, hit_a: 8, hit_d: 334, hit_j: 0,
    sound: "1/016",
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  344: { name: "genjutsu",
    pic: 81, state: 3003, wait: 2, next: 345, dvx: 550, dvy: 0, dvz: 550, centerx: 130, centery: 180, hit_a: 8, hit_d: 334, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 120, w: 60, h: 9999, dvx: 0, dvy: -5, fall: 70, vrest: 3, bdefend: 100, injury: 13, effect: 1000
    }
  },
  345: { name: "genjutsu",
    pic: 80, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 166, hit_a: 8, hit_d: 334, hit_j: 0
  },
  350: { name: "double lariato",
    pic: 999, state: 3003, wait: 1, next: 357, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  351: { name: "double lariato",
    pic: 51, state: 3003, wait: 1, next: 352, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/bee"
  },
  352: { name: "limbo",
    pic: 52, state: 3003, wait: 1, next: 353, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  353: { name: "limbo",
    pic: 53, state: 3003, wait: 1, next: 354, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  354: { name: "limbo",
    pic: 54, state: 3003, wait: 4, next: 355, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  355: { name: "limbo",
    pic: 51, state: 3003, wait: 4, next: 356, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  356: { name: "limbo",
    pic: 55, state: 3003, wait: 6, next: 358, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/doublelariat"
  },
  357: { name: "double lariato",
    pic: 999, state: 3003, wait: 2, next: 351, dvx: 0, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  358: { name: "limbo",
    pic: 56, state: 3003, wait: 15, next: 359, dvx: -26, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 22, y: 22, w: 64, h: 38, zwidth: 15, dvx: 8, dvy: -5, fall: 10, vrest: 3, bdefend: 100, injury: 10, effect: 1
    },
    opoint: {
      kind: 1, x: 12, y: 34, action: 20, dvx: -4, dvy: 0, oid: 204, facing: 1
    }
  },
  359: { name: "double lariato",
    pic: 57, state: 3003, wait: 2, next: 1000, dvx: -50, dvy: 550, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0
  },
  360: { name: "hell",
    pic: 999, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 250,
    sound: "1/020",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  361: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 362, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  362: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 363, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -39, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  363: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 364, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 250, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  364: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 365, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  365: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 366, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 170, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  366: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 367, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -80, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  367: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 368, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -300, y: 0, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  368: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 369, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 300, y: 0, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  369: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 370, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -150, y: 0, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  370: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 371, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -109, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  371: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 372, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 370, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  372: { name: "hell",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -280, y: 20, action: 90, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  373: { name: "hell",
    pic: 999, state: 15, wait: 85, next: 360, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  380: { name: "sgrab2",
    pic: 999, state: 400, wait: 3, next: 381, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  381: { name: "col",
    pic: 999, state: 3005, wait: 0, next: 382, dvx: 40, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  382: { name: "meteorshadow",
    pic: 11, state: 3005, wait: 15, next: 383, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 141, y: 3333, action: 440, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  383: { name: "meteorshadow",
    pic: 12, state: 3005, wait: 25, next: 384, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  384: { name: "meteorshadow",
    pic: 13, state: 3005, wait: 15, next: 385, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  385: { name: "meteorshadow",
    pic: 14, state: 3005, wait: 50, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});