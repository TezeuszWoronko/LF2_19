define({
  bmp: {
    file: [
      {
        "file(0-26)": "sprite/rasenshuriken.png", w: 209, h: 128, row: 3, col: 9
      },
      {
        "file(27-53)": "sprite/rasengan.png", w: 209, h: 128, row: 3, col: 9
      },
      {
        "file(54-56)": "sprite/jiraiya_4.png", w: 250, h: 220, row: 3, col: 1
      },
      {
        "file(57-62)": "sprite/rasenshuriken2.png", w: 629, h: 386, row: 3, col: 2
      },
      {
        "file(63)": "sprite/juubi.png", w: 609, h: 443, row: 1, col: 1
      },
      {
        "file(64-73)": "sprite/clash.png", w: 150, h: 120, row: 5, col: 2
      },
      {
        "file(74-82)": "sprite/clash2.png", w: 301, h: 241, row: 3, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 30005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  5: { name: "hiting",
    pic: 0, state: 9, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 107, centery: 128, hit_a: 30, hit_d: 29, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 107, y: -999, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    itr: {
      kind: 0, x: 14, y: 15, w: 180, h: 114, dvx: -30, dvy: -50, bdefend: 100, fall: 100, injury: 20
    }
  },
  6: { name: "hiting",
    pic: 1, state: 18, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 107, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    cpoint: {
      kind: 1, x: 107, y: -999, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    itr: {
      kind: 0, x: 14, y: 15, w: 180, h: 114, dvx: -30, dvy: -50, bdefend: 100, fall: 100, injury: 20
    }
  },
  7: { name: "hiting",
    pic: 2, state: 9, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 107, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 107, y: -999, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    itr: {
      kind: 0, x: 14, y: 15, w: 180, h: 114, dvx: -30, dvy: -50, bdefend: 100, fall: 100, injury: 20
    }
  },
  29: { name: "finish",
    pic: 3, state: 9, wait: 1, next: 30, dvx: 0, dvy: 0, centerx: 107, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 107, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    }
  },
  30: { name: "finish",
    pic: 4, state: 9, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 107, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 107, y: 9, vaction: 181, throwvx: 13, throwvy: -50, throwvz: 3, throwinjury: 0
    }
  },
  31: { name: "finish",
    pic: 5, state: 9, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 107, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "rasenshuriken2",
    pic: 999, state: 3003, wait: 3, next: 1000, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [5, 5], caughtact: [130, 130]
    }
  },
  45: { name: "Oodama2",
    pic: 6, state: 3003, wait: 1, next: 46, dvx: 30, dvy: 0, centerx: 107, centery: 135, hit_a: 50, hit_d: 70,
    sound: "1/014",
    itr: {
      kind: 0, x: 54, y: 42, w: 104, h: 92, dvx: 20, dvy: -1, vrest: 1, bdefend: 100, fall: -1, injury: 20
    }
  },
  46: { name: "Oodama2",
    pic: 7, state: 3003, wait: 2, next: 47, dvx: 30, dvy: 0, centerx: 107, centery: 135,
    sound: "1/014",
    itr: {
      kind: 0, x: 54, y: 42, w: 104, h: 92, dvx: 30, dvy: -1, vrest: 5, bdefend: 100, fall: 100, injury: 20
    },
    opoint: {
      kind: 1, x: 60, y: 120, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  47: { name: "Oodama2",
    pic: 8, state: 3003, wait: 1, next: 48, dvx: 30, dvy: 0, centerx: 107, centery: 135,
    sound: "1/014",
    itr: {
      kind: 0, x: 54, y: 42, w: 104, h: 92, dvx: 20, dvy: -1, vrest: 1, bdefend: 100, fall: -1, injury: 20
    }
  },
  48: { name: "Oodama2",
    pic: 9, state: 3003, wait: 2, next: 45, dvx: 30, dvy: 0, centerx: 107, centery: 135,
    sound: "1/014",
    itr: {
      kind: 0, x: 54, y: 42, w: 104, h: 92, dvx: 30, dvy: -1, vrest: 5, bdefend: 100, fall: 100, injury: 20
    },
    opoint: {
      kind: 1, x: 60, y: 120, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  70: { name: "finish2",
    pic: 11, state: 18, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 54, y: 42, w: 104, h: 92, dvx: 25, dvy: -20, vrest: 20, bdefend: 100, fall: 9999, injury: 20
    }
  },
  71: { name: "finish2",
    pic: 10, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 54, y: 42, w: 104, h: 92, dvx: 25, dvy: -20, vrest: 20, bdefend: 100, fall: 9999, injury: 20
    }
  },
  85: { name: "orasengan",
    pic: 999, state: 15, wait: 0, next: 45, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "rocks",
    pic: 12, state: 3005, wait: 2, next: 91, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "rocks",
    pic: 13, state: 3005, wait: 2, next: 92, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "rocks",
    pic: 14, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "rocks2",
    pic: 32, state: 3005, wait: 1, next: 96, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021"
  },
  96: { name: "rocks2",
    pic: 33, state: 3005, wait: 1, next: 97, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "rocks2",
    pic: 34, state: 3005, wait: 1, next: 98, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "rocks2",
    pic: 35, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "kaiten",
    pic: 15, state: 3005, wait: 1, next: 101, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 49, y: 79, w: 100, h: 20, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 4
    }
  },
  101: { name: "kaiten",
    pic: 16, state: 3003, wait: 1, next: 102, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 49, y: 79, w: 100, h: 20, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 10
    }
  },
  102: { name: "kaiten",
    pic: 17, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 49, y: 79, w: 100, h: 20, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 10
    }
  },
  103: { name: "kaiten",
    pic: 15, state: 3003, wait: 1, next: 104, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 49, y: 79, w: 100, h: 20, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 10
    }
  },
  104: { name: "kaiten",
    pic: 16, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    itr: {
      kind: 0, x: 49, y: 79, w: 100, h: 20, dvx: 20, dvy: -20, bdefend: 100, fall: 100, injury: 10
    }
  },
  105: { name: "kaiten",
    pic: 19, state: 3003, wait: 1, next: 106, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "kaiten",
    pic: 20, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "hakke_kusho",
    pic: 21, state: 3005, wait: 0, next: 111, dvx: -5, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "hakke_kusho",
    pic: 22, state: 3005, wait: 0, next: 112, dvx: -2, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "hakke_kusho",
    pic: 23, state: 3005, wait: 0, next: 113, dvx: -2, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "hakke_kusho",
    pic: 24, state: 3005, wait: 0, next: 114, dvx: -2, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "hakke_kusho",
    pic: 25, state: 3005, wait: 0, next: 115, dvx: -2, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "hakke_kusho",
    pic: 26, state: 3005, wait: 0, next: 1000, dvx: -2, dvy: 0, centerx: 107, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "krasengan",
    pic: 999, state: 3003, wait: 3, next: 120, dvx: 30, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "k_rasengan_hit",
    pic: 30, state: 18, wait: 0, next: 121, dvx: 550, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 20, dvy: -7, vrest: 4, bdefend: 100, fall: 100, injury: 5, effect: 5
    }
  },
  121: { name: "k_rasengan_hit",
    pic: 31, state: 18, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 9, effect: 5
    }
  },
  122: { name: "k_rasengan_hit",
    pic: 27, state: 18, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 115, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 11, effect: 5
    }
  },
  123: { name: "k_rasengan_hit",
    pic: 28, state: 18, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 10, effect: 5
    }
  },
  124: { name: "k_rasengan_hit",
    pic: 29, state: 18, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 70, hit_d: 145, hit_j: 0,
    sound: "1/014",
    opoint: {
      kind: 1, x: 115, y: 120, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 11, effect: 5
    }
  },
  145: { name: "k_rasengan_hit",
    pic: 29, state: 18, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 50, dvy: -40, vrest: 10, bdefend: 100, fall: 100, injury: 10
    }
  },
  146: { name: "k_rasengan_hit",
    pic: 36, state: 15, wait: 0, next: 147, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0
  },
  147: { name: "k_rasengan_hit",
    pic: 37, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "krasengan",
    pic: 38, state: 18, wait: 3, next: 120, dvx: 30, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "krasengan",
    pic: 38, state: 18, wait: 3, next: 200, dvx: 30, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "ball",
    pic: 999, state: 400, wait: 1, next: 157, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "ball2",
    pic: 999, state: 3006, wait: 7, next: 158, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12
  },
  155: { name: "ball2",
    pic: 39, state: 3006, wait: 7, next: 153, dvx: 10, dvy: -10, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "ball2",
    pic: 999, state: 3006, wait: 7, next: 154, dvx: 5, dvy: -10, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  158: { name: "ball2",
    pic: 39, state: 3003, wait: 5, next: 159, dvx: 0, dvy: 25, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 23, w: 91, h: 83, dvx: 0, dvy: -15, dvz: 25, fall: 100, vrest: 20, bdefend: 100, injury: 120, effect: 1
    }
  },
  159: { name: "ball2",
    pic: 39, state: 3003, wait: 0, next: 160, dvx: 550, dvy: 550, dvz: 550, centerx: 105, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 105, y: 44, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 30
    },
    itr: {
      kind: 0, x: 55, y: 23, w: 91, h: 83, dvx: 0, dvy: -15, dvz: 25, fall: 100, vrest: 20, bdefend: 100, injury: 100, effect: 1, zwidth: 15
    }
  },
  160: { name: "ball2",
    pic: 40, state: 3003, wait: 0, next: 161, dvx: 550, dvy: 550, dvz: 550, centerx: 105, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 44, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 31
    }
  },
  161: { name: "ball2",
    pic: 40, state: 3003, wait: 30, next: 162, dvx: 550, dvy: 550, dvz: 550, centerx: 105, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 100, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  162: { name: "ball2",
    pic: 40, state: 3003, wait: 5, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 105, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 25, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  165: { name: "rocks_hakke",
    pic: 999, state: 3005, wait: 0, next: 166, dvx: 60, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 120, action: 90, dvx: 5, dvy: 0, oid: 229, facing: 0
    }
  },
  166: { name: "rocks_hakke",
    pic: 12, state: 3005, wait: 0, next: 165, dvx: 60, dvy: 0, centerx: 107, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 120, action: 90, dvx: 5, dvy: 0, oid: 229, facing: 0
    }
  },
  169: { name: "ultimate",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 37, centery: 105, hit_a: 0, hit_d: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 55, y: 40, w: 100, h: 185, zwidth: 35, dvx: 25, dvy: -20, vrest: 3, bdefend: 100, fall: 100, injury: 10
    }
  },
  170: { name: "ultimate",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 37, centery: 105, hit_a: 0, hit_d: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 55, y: 40, w: 185, h: 185, zwidth: 35, dvx: 25, dvy: -20, vrest: 3, bdefend: 100, fall: 100, injury: 10
    }
  },
  171: { name: "ultimate",
    pic: 3, state: 3005, wait: 1, next: 172, dvx: 550, dvy: 550, centerx: 105, centery: 129, hit_a: 0, hit_d: 0
  },
  172: { name: "ultimate",
    pic: 3, state: 3005, wait: 1, next: 173, dvx: 550, dvy: 550, centerx: 105, centery: 129, hit_a: 0, hit_d: 0
  },
  173: { name: "ultimate",
    pic: 5, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 105, centery: 129, hit_a: 0, hit_d: 0
  },
  179: { name: "Rasenshuriken",
    pic: 57, state: 18, wait: 2, next: 180, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 10, hit_d: 183, hit_j: 0,
    sound: "1/014"
  },
  180: { name: "Rasenshuriken",
    pic: 57, state: 18, wait: 0, next: 181, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 10, hit_d: 183, hit_j: 0,
    sound: "1/014",
    itr: [
      {
        kind: 0, x: 100, y: 100, w: 225, h: 300, dvx: -15, dvy: -15, bdefend: 100, fall: 100, injury: 3, vrest: 1, zwidth: 50
      },
      {
        kind: 0, x: 325, y: 100, w: 225, h: 300, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 3, vrest: 1, zwidth: 50
      }
    ]
  },
  181: { name: "Rasenshuriken",
    pic: 58, state: 18, wait: 0, next: 182, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 10, hit_d: 183, hit_j: 0,
    sound: "1/014",
    itr: [
      {
        kind: 0, x: 100, y: 100, w: 225, h: 300, dvx: -15, dvy: -15, bdefend: 100, fall: 100, injury: 2, vrest: 1, zwidth: 50
      },
      {
        kind: 0, x: 325, y: 100, w: 225, h: 300, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 2, vrest: 1, zwidth: 50
      }
    ]
  },
  182: { name: "Rasenshuriken",
    pic: 59, state: 15, wait: 0, next: 180, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 10, hit_d: 183, hit_j: 0,
    sound: "1/014",
    itr: [
      {
        kind: 0, x: 100, y: 100, w: 225, h: 300, dvx: -15, dvy: -15, bdefend: 100, fall: 100, injury: 3, vrest: 1, zwidth: 50
      },
      {
        kind: 0, x: 325, y: 100, w: 225, h: 300, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 3, vrest: 1, zwidth: 50
      }
    ]
  },
  183: { name: "Rasenshuriken",
    pic: 60, state: 15, wait: 2, next: 184, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: [
      {
        kind: 0, x: 50, y: 100, w: 325, h: 300, dvx: -15, dvy: -15, bdefend: 100, fall: 100, injury: 2, vrest: 1, zwidth: 70
      },
      {
        kind: 0, x: 375, y: 100, w: 325, h: 300, dvx: 15, dvy: -15, bdefend: 100, fall: 100, injury: 2, vrest: 1, zwidth: 70
      }
    ]
  },
  184: { name: "Rasenshuriken",
    pic: 61, state: 18, wait: 2, next: 185, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "Rasenshuriken",
    pic: 62, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 315, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0
  },
  186: { name: "ball2",
    pic: 999, state: 3005, wait: 213, next: 187, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  187: { name: "ball",
    pic: 999, state: 400, wait: 1, next: 189, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  189: { name: "ball2",
    pic: 999, state: 3005, wait: 0, next: 190, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "ball2",
    pic: 999, state: 3005, wait: 5, next: 186, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 180, y: 23, w: 400, h: 9999, zwidth: 50, vrest: 15, bdefend: 0, fall: 0, injury: 12, effect: 7500
    }
  },
  191: { name: "tree",
    pic: 63, state: 3005, wait: 1, next: 191, dvx: 0, dvy: 0, centerx: 105, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "k_rasengan_hit",
    pic: 30, state: 18, wait: 0, next: 201, dvx: 550, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 20, dvy: -7, vrest: 4, bdefend: 100, fall: 100, injury: 5, effect: 5
    }
  },
  201: { name: "k_rasengan_hit",
    pic: 31, state: 18, wait: 1, next: 202, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 5, effect: 5
    }
  },
  202: { name: "k_rasengan_hit",
    pic: 27, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, centerx: 115, centery: 135, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 5, effect: 5
    }
  },
  203: { name: "k_rasengan_hit",
    pic: 28, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 5, effect: 5
    }
  },
  204: { name: "k_rasengan_hit",
    pic: 29, state: 18, wait: 1, next: 202, dvx: 0, dvy: 0, centerx: 115, centery: 128, hit_a: 70, hit_d: 145, hit_j: 0,
    sound: "1/014",
    opoint: {
      kind: 1, x: 115, y: 120, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    itr: {
      kind: 0, x: 43, y: 79, w: 140, h: 20, zwidth: 15, dvx: 25, dvy: -20, vrest: 2, bdefend: 100, fall: 100, injury: 5, effect: 5
    }
  },
  210: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  211: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  212: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 213, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  213: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 214, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  214: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 215, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  215: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 216, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  216: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 217, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  217: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 218, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  218: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 219, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  219: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 220, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  220: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  221: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 222, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  222: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  223: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 224, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  224: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  225: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 226, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  226: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  227: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  228: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  229: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 230, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  230: { name: "clashboom",
    pic: 68, state: 3005, wait: 1, next: 231, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 42, action: 234, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  231: { name: "clashboom",
    pic: 69, state: 3005, wait: 1, next: 232, dvx: 5, dvy: 0, centerx: 30, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 23, w: 80, h: 100, zwidth: 5, arest: 15, bdefend: 0, dvx: 35, dvy: -12, fall: 100, injury: 80, effect: 5
    }
  },
  232: { name: "clashboom",
    pic: 70, state: 3005, wait: 1, next: 233, dvx: 0, dvy: 0, centerx: 30, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  233: { name: "clashboom",
    pic: 71, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 30, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  234: { name: "clashboom",
    pic: 999, state: 3005, wait: 1, next: -235, dvx: 0, dvy: 0, centerx: 120, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  235: { name: "clashboom",
    pic: 69, state: 18, wait: 1, next: 236, dvx: 5, dvy: 0, centerx: 120, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 23, w: 90, h: 100, zwidth: 10, arest: 15, bdefend: 0, dvx: 35, dvy: -12, fall: 100, injury: 80, effect: 5
    }
  },
  236: { name: "clashboom",
    pic: 70, state: 3005, wait: 1, next: 237, dvx: 0, dvy: 0, centerx: 120, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  237: { name: "clashboom",
    pic: 71, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 120, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  250: { name: "clash2",
    pic: 64, state: 3005, wait: 1, next: 251, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  251: { name: "clash2",
    pic: 65, state: 3005, wait: 1, next: 252, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  252: { name: "clash2",
    pic: 66, state: 3005, wait: 1, next: 253, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  253: { name: "clash2",
    pic: 67, state: 3005, wait: 1, next: 254, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  254: { name: "clash2",
    pic: 64, state: 3005, wait: 1, next: 255, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  255: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 256, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  256: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 257, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  257: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 258, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  258: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 259, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  259: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 260, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  260: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 261, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  261: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  262: { name: "clashb",
    pic: 68, state: 3005, wait: 2, next: 263, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  263: { name: "clash",
    pic: 72, state: 3005, wait: 2, next: 264, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  264: { name: "clash",
    pic: 73, state: 3005, wait: 1, next: 265, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "clash",
    pic: 74, state: 3005, wait: 2, next: 266, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "clash",
    pic: 75, state: 3005, wait: 2, next: 267, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "clash",
    pic: 76, state: 3005, wait: 2, next: 268, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  268: { name: "clash",
    pic: 74, state: 3005, wait: 2, next: 269, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "clash",
    pic: 75, state: 3005, wait: 2, next: 270, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "clash",
    pic: 76, state: 3005, wait: 2, next: 271, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  271: { name: "clash",
    pic: 74, state: 3005, wait: 2, next: 272, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  272: { name: "clash",
    pic: 75, state: 3005, wait: 2, next: 273, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  273: { name: "clash",
    pic: 76, state: 3005, wait: 2, next: 274, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  274: { name: "clash",
    pic: 77, state: 3005, wait: 2, next: 275, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  275: { name: "clash",
    pic: 78, state: 3005, wait: 2, next: 276, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  276: { name: "clash",
    pic: 79, state: 3005, wait: 2, next: 277, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  277: { name: "clash",
    pic: 80, state: 3005, wait: 2, next: 278, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  278: { name: "clash",
    pic: 81, state: 3005, wait: 2, next: 279, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  279: { name: "clash",
    pic: 80, state: 3005, wait: 2, next: 280, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  280: { name: "clash",
    pic: 81, state: 3005, wait: 2, next: 281, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/effect"
  },
  281: { name: "clash",
    pic: 82, state: 3005, wait: 2, next: 282, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  282: { name: "clash",
    pic: 82, state: 3005, wait: 75, next: 283, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 41, action: 141, dvx: 0, dvy: 0, dvz: 0, oid: 435, facing: 0
    }
  },
  283: { name: "clash",
    pic: 999, state: 18, wait: 0, next: 284, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 42, action: 285, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  284: { name: "clash",
    pic: 999, state: 18, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 160, y: 103, w: 100, h: 100, zwidth: 5, arest: 15, bdefend: 0, dvx: 30, dvy: -20, fall: 100, injury: 100, effect: 5
    }
  },
  285: { name: "clash",
    pic: 999, state: 18, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 120, y: 103, w: 100, h: 100, zwidth: 5, arest: 15, bdefend: 0, dvx: -30, dvy: -20, fall: 100, injury: 100, effect: 5
    }
  },
  286: { name: "clash",
    pic: 999, state: 18, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 120, y: 103, w: 100, h: 100, zwidth: 5, arest: 15, bdefend: 0, dvx: -30, dvy: -20, fall: 100, injury: 100, effect: 5
    }
  },
  310: { name: "danzo",
    pic: 64, state: 3005, wait: 1, next: 311, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  311: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 313, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 314, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  314: { name: "clash",
    pic: 64, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  315: { name: "clash",
    pic: 65, state: 3005, wait: 1, next: 316, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  316: { name: "clash",
    pic: 66, state: 3005, wait: 1, next: 317, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  317: { name: "clash",
    pic: 67, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 70, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  320: { name: "danzoo",
    pic: 74, state: 3005, wait: 2, next: 321, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  321: { name: "clash",
    pic: 75, state: 3005, wait: 2, next: 322, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  322: { name: "clash",
    pic: 76, state: 3005, wait: 2, next: 323, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  323: { name: "clash",
    pic: 74, state: 3005, wait: 2, next: 324, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  324: { name: "clash",
    pic: 75, state: 3005, wait: 2, next: 325, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  325: { name: "clash",
    pic: 76, state: 3005, wait: 2, next: 326, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  326: { name: "clash",
    pic: 74, state: 3005, wait: 2, next: 327, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  327: { name: "clash",
    pic: 75, state: 3005, wait: 2, next: 328, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  328: { name: "clash",
    pic: 76, state: 3005, wait: 2, next: 329, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  329: { name: "clash",
    pic: 77, state: 3005, wait: 2, next: 330, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  330: { name: "clash",
    pic: 78, state: 3005, wait: 2, next: 331, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  331: { name: "clash",
    pic: 79, state: 3005, wait: 2, next: 332, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  332: { name: "clash",
    pic: 80, state: 3005, wait: 2, next: 333, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  333: { name: "clash",
    pic: 81, state: 3005, wait: 2, next: 334, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  334: { name: "clash",
    pic: 80, state: 3005, wait: 2, next: 335, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  335: { name: "clash",
    pic: 81, state: 3005, wait: 2, next: 336, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/effect"
  },
  336: { name: "clash",
    pic: 82, state: 3005, wait: 2, next: 337, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  337: { name: "clash",
    pic: 82, state: 3005, wait: 2, next: 338, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 41, action: 140, dvx: 0, dvy: 0, dvz: 0, oid: 435, facing: 0
    }
  },
  338: { name: "clash",
    pic: 82, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 131, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 103, w: 200, h: 1000, zwidth: 30, vrest: 50, bdefend: 0, dvx: -1, dvy: -30, fall: 100, injury: 350, effect: 5
    }
  }
  }
});