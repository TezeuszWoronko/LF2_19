define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/chidori_2.png", w: 159, h: 159, row: 5, col: 4
      },
      {
        "file(20-59)": "sprite/shadow.png", w: 79, h: 79, row: 10, col: 4
      },
      {
        "file(60-67)": "sprite/shadow2.png", w: 219, h: 59, row: 4, col: 2
      },
      {
        "file(68-100)": "sprite/feather.png", w: 79, h: 79, row: 10, col: 4
      }
    ],
    weapon_hit_sound: "1/033"
  },
  frame: {
  0: { name: "disap",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "paralyze",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 3, x: 60, y: 80000, w: 30, h: 65,
      catchingact: [6, 6], caughtact: [130, 130]
    }
  },
  6: { name: "hiting2",
    pic: 88, state: 9, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  7: { name: "hiting2",
    pic: 89, state: 9, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  8: { name: "hiting2",
    pic: 90, state: 9, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043",
    cpoint: {
      kind: 1, x: 39, y: 42, injury: 1, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  10: { name: "body_atk",
    pic: 78, state: 3003, wait: 1, next: 11, dvx: 10, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "body_atk",
    pic: 79, state: 3003, wait: 1, next: 12, dvx: 7, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 50, h: 16, dvx: 15, dvy: -5, bdefend: 16, fall: 70, injury: 115, effect: 1
    }
  },
  12: { name: "body_atk",
    pic: 80, state: 3003, wait: 15, next: 30, dvx: 5, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "body_atk",
    pic: 81, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "body_atk",
    pic: 81, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "body_atk",
    pic: 82, state: 3003, wait: 1, next: 32, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "body_atk",
    pic: 83, state: 3003, wait: 1, next: 33, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "body_atk",
    pic: 84, state: 3003, wait: 1, next: 34, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  34: { name: "body_atk",
    pic: 85, state: 3003, wait: 1, next: 35, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "body_atk",
    pic: 86, state: 3003, wait: 1, next: 36, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "body_atk",
    pic: 71, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "shadow_choke",
    pic: 20, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "shadow_choke",
    pic: 21, state: 3005, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "shadow_choke",
    pic: 22, state: 3005, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "shadow_choke",
    pic: 23, state: 3005, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "shadow_choke",
    pic: 24, state: 3005, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "shadow_choke",
    pic: 25, state: 3005, wait: 1, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "shadow_choke",
    pic: 26, state: 3005, wait: 1, next: 77, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "shadow_choke",
    pic: 27, state: 3005, wait: 1, next: 78, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "shadow_choke",
    pic: 28, state: 3005, wait: 1, next: 79, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "shadow_choke",
    pic: 29, state: 3005, wait: 18, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "shadow",
    pic: 17, state: 3005, wait: 35, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  129: { name: "shadow",
    pic: 19, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "shadow",
    pic: 19, state: 3005, wait: 1, next: 131, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "shadow",
    pic: 17, state: 3005, wait: 5, next: 129, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "shadow",
    pic: 18, state: 3002, wait: 4, next: 1000, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 130, w: 18, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 0, effect: 5
    }
  },
  133: { name: "shadow",
    pic: 20, state: 3002, wait: 1, next: 134, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  134: { name: "shadow",
    pic: 21, state: 3002, wait: 1, next: 135, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  135: { name: "shadow",
    pic: 22, state: 3002, wait: 1, next: 136, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  136: { name: "shadow",
    pic: 23, state: 3002, wait: 1, next: 137, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  137: { name: "shadow",
    pic: 24, state: 3002, wait: 1, next: 138, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  138: { name: "shadow",
    pic: 25, state: 3002, wait: 1, next: 139, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  139: { name: "shadow",
    pic: 26, state: 3002, wait: 1, next: 140, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  140: { name: "shadow",
    pic: 27, state: 3002, wait: 1, next: 141, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  141: { name: "shadow",
    pic: 28, state: 3002, wait: 1, next: 142, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  142: { name: "shadow",
    pic: 29, state: 3002, wait: 1, next: 143, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  143: { name: "shadow",
    pic: 30, state: 3002, wait: 1, next: 144, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  144: { name: "shadow",
    pic: 31, state: 3002, wait: 1, next: 145, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  145: { name: "shadow",
    pic: 32, state: 3002, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  146: { name: "shadow",
    pic: 33, state: 3002, wait: 1, next: 147, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 9999, dvx: 0, fall: -1, vrest: 1, bdefend: -1, injury: 4, effect: 5
    }
  },
  147: { name: "shadow",
    pic: 34, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvx: 0, fall: 1000, vrest: 1, bdefend: 100, injury: 20, effect: 5
    }
  },
  148: { name: "shadow3",
    pic: 35, state: 3005, wait: 1, next: 149, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "shadow3",
    pic: 36, state: 3002, wait: 3, next: 150, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvy: -12, dvx: 8, fall: 10, vrest: 15, bdefend: 100, injury: 20, effect: 1
    }
  },
  150: { name: "shadow3",
    pic: 35, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "shadow4",
    pic: 37, state: 3005, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 30, y: 70, w: 19, h: 9, dvx: 152
    }
  },
  152: { name: "shadow4",
    pic: 999, state: 3005, wait: 0, next: 154, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014"
  },
  153: { name: "shadow4",
    pic: 39, state: 3005, wait: 5, next: 1000, dvx: 0, dvy: -20, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "shadow4",
    pic: 999, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/060",
    opoint: {
      kind: 1, x: -300, y: 39, action: 45, dvx: 55, dvy: 0, oid: 101, facing: 0
    }
  },
  160: { name: "shadow5",
    pic: 41, state: 3002, wait: 2, next: 161, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  161: { name: "shadow5",
    pic: 42, state: 3002, wait: 2, next: 162, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  162: { name: "shadow5",
    pic: 43, state: 3002, wait: 2, next: 163, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  163: { name: "shadow5",
    pic: 44, state: 3002, wait: 2, next: 164, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  164: { name: "shadow5",
    pic: 45, state: 3002, wait: 2, next: 165, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  165: { name: "shadow5",
    pic: 46, state: 3002, wait: 2, next: 166, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  166: { name: "shadow5",
    pic: 47, state: 3002, wait: 2, next: 167, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  167: { name: "shadow5",
    pic: 48, state: 3002, wait: 2, next: 168, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  168: { name: "shadow5",
    pic: 49, state: 3002, wait: 2, next: 169, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  169: { name: "shadow5",
    pic: 50, state: 3002, wait: 2, next: 170, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  170: { name: "shadow5",
    pic: 51, state: 3002, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1000, vrest: 7, bdefend: 100, injury: 50, effect: 1
    }
  },
  171: { name: "shadow",
    pic: 17, state: 3005, wait: 6, next: 172, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "shadow",
    pic: 17, state: 3005, wait: 6, next: 173, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  173: { name: "shadow",
    pic: 17, state: 3005, wait: 6, next: 174, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  174: { name: "shadow",
    pic: 17, state: 3005, wait: 6, next: 175, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "shadow",
    pic: 17, state: 3005, wait: 6, next: 176, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "shadow",
    pic: 19, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "shadow",
    pic: 17, state: 3005, wait: 6, next: 171, dvx: 0, dvy: 0, centerx: 0, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/066"
  },
  178: { name: "shadow6",
    pic: 40, state: 3005, wait: 1, next: 179, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  179: { name: "shadow6",
    pic: 52, state: 3005, wait: 2, next: 180, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "shadow6",
    pic: 53, state: 3002, wait: 4, next: 181, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/066",
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, dvy: -3, dvx: 3, fall: 1000, vrest: 15, bdefend: 100, injury: 55, effect: 1
    }
  },
  181: { name: "shadow6",
    pic: 52, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  182: { name: "shadow7",
    pic: 54, state: 3005, wait: 1, next: 183, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  183: { name: "shadow7",
    pic: 55, state: 3005, wait: 2, next: 184, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  184: { name: "shadow7",
    pic: 56, state: 3002, wait: 4, next: 185, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 0, w: 59, h: 79, dvy: -2, dvx: 20, fall: 1000, vrest: 15, bdefend: 100, injury: 55, effect: 1
    }
  },
  185: { name: "shadow7",
    pic: 55, state: 3005, wait: 2, next: 186, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  186: { name: "shadow7",
    pic: 54, state: 3005, wait: 2, next: 181, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "shadow8",
    pic: 60, state: 3005, wait: 1, next: 191, dvx: 0, dvy: 0, centerx: 109, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043"
  },
  191: { name: "shadow8",
    pic: 61, state: 3002, wait: 1, next: 192, dvx: 0, dvy: 0, centerx: 109, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 34, y: 0, w: 75, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      },
      {
        kind: 0, x: 110, y: 0, w: 75, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      }
    ]
  },
  192: { name: "shadow8",
    pic: 62, state: 3002, wait: 2, next: 193, dvx: 0, dvy: 0, centerx: 109, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 34, y: 0, w: 75, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      },
      {
        kind: 0, x: 110, y: 0, w: 75, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      }
    ]
  },
  193: { name: "shadow8",
    pic: 63, state: 3002, wait: 1, next: 194, dvx: 0, dvy: 0, centerx: 109, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 109, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      },
      {
        kind: 0, x: 110, y: 0, w: 109, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      }
    ]
  },
  194: { name: "shadow8",
    pic: 64, state: 3002, wait: 1, next: 195, dvx: 0, dvy: 0, centerx: 109, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 14, y: 0, w: 95, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      },
      {
        kind: 0, x: 110, y: 0, w: 95, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      }
    ]
  },
  195: { name: "shadow8",
    pic: 65, state: 3002, wait: 1, next: 196, dvx: 0, dvy: 0, centerx: 109, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 32, y: 0, w: 77, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      },
      {
        kind: 0, x: 110, y: 0, w: 77, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      }
    ]
  },
  196: { name: "shadow8",
    pic: 66, state: 3002, wait: 1, next: 197, dvx: 0, dvy: 0, centerx: 109, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 32, y: 0, w: 77, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      },
      {
        kind: 0, x: 110, y: 0, w: 77, h: 59, dvy: -10, dvx: 5, fall: 40, vrest: 4, bdefend: 20, injury: 15, effect: 1
      }
    ]
  },
  197: { name: "shadow8",
    pic: 67, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 109, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "wire_trap",
    pic: 38, state: 3005, wait: 1, next: 200, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 30, y: 70, w: 19, h: 9, dvx: 205
    }
  },
  205: { name: "wire_trap",
    pic: 38, state: 18, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 80000, w: 19, h: 9,
      catchingact: [209, 209], caughtact: [130, 130]
    }
  },
  209: { name: "wire_traping",
    pic: 30, state: 3005, wait: 0, next: 210, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 39, vaction: 131, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  210: { name: "wire_traping",
    pic: 30, state: 3005, wait: 0, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 39, vaction: 131, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    opoint: {
      kind: 1, x: 39, y: 50, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  211: { name: "wire_traping",
    pic: 31, state: 3005, wait: 0, next: 212, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 39, vaction: 131, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  212: { name: "wire_traping",
    pic: 32, state: 3005, wait: 1, next: 213, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 39, vaction: 131, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  213: { name: "wire_traping",
    pic: 33, state: 3005, wait: 200, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 39, vaction: 131, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  215: { name: "shadow_attack",
    pic: 41, state: 3005, wait: 1, next: 216, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  216: { name: "shadow5",
    pic: 42, state: 3005, wait: 1, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1, vrest: 7, bdefend: 100, injury: 35, effect: 1
    }
  },
  217: { name: "shadow5",
    pic: 43, state: 3005, wait: 1, next: 218, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1, vrest: 7, bdefend: 100, injury: 35, effect: 1
    }
  },
  218: { name: "shadow5",
    pic: 44, state: 3005, wait: 1, next: 219, dvx: 550, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 30, y: 30, w: 18, h: 49, dvy: -5, dvx: 7, fall: 1, vrest: 7, bdefend: 100, injury: 35, effect: 1
    }
  },
  219: { name: "shadow5",
    pic: 45, state: 3005, wait: 1, next: 220, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  220: { name: "shadow5",
    pic: 46, state: 3005, wait: 1, next: 221, dvx: 550, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  221: { name: "shadow5",
    pic: 47, state: 3005, wait: 1, next: 222, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  222: { name: "shadow5",
    pic: 48, state: 3005, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  223: { name: "shadow5",
    pic: 49, state: 3005, wait: 1, next: 224, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  224: { name: "shadow5",
    pic: 50, state: 3005, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  225: { name: "shadow5",
    pic: 51, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  230: { name: "shadow_upspike",
    pic: 50, state: 3005, wait: 1, next: 231, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008"
  },
  231: { name: "shadow_upspike",
    pic: 51, state: 3005, wait: 1, next: 232, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  232: { name: "shadow_upspike",
    pic: 52, state: 3005, wait: 1, next: 233, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  233: { name: "shadow_upspike",
    pic: 53, state: 3005, wait: 2, next: 234, dvx: 0, dvy: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  234: { name: "shadow_upspike",
    pic: 54, state: 3005, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  235: { name: "shadow_upspike",
    pic: 55, state: 3005, wait: 1, next: 236, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  236: { name: "shadow_upspike",
    pic: 56, state: 3005, wait: 3, next: 237, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 22, y: 20, w: 54, h: 50, dvx: 10, dvy: -5, fall: 100, arest: 3, bdefend: 100, injury: 95, effect: 1
    }
  },
  237: { name: "shadow_upspike",
    pic: 56, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 20, w: 54, h: 50, dvx: 10, dvy: -5, fall: 100, arest: 3, bdefend: 100, injury: 95, effect: 1
    }
  },
  238: { name: "shadow_upspike",
    pic: 999, state: 3005, wait: 5, next: 240, dvx: 10, dvy: 0, dvz: 0, centerx: 5, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0
  },
  240: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 0, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 0, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 242, dvx: 0, dvy: 0, oid: 462, facing: 1
    }
  },
  242: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 0, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 0, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 250, dvx: 0, dvy: 0, oid: 462, facing: 1
    }
  },
  244: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 0, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 246, dvx: 0, dvy: 0, oid: 462, facing: 1
    }
  },
  245: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 248, dvx: 0, dvy: 0, oid: 462, facing: 1
    }
  },
  246: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  247: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 251, dvx: 0, dvy: 0, oid: 462, facing: 1
    }
  },
  248: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 1, next: 249, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  249: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 252, dvx: 0, dvy: 0, oid: 462, facing: 1
    }
  },
  250: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 2, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 1, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  252: { name: "sandstorm2 ",
    pic: 999, state: 3005, wait: 1, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  253: { name: "sandstorm2 (activate object)",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 0, action: 255, dvx: 0, dvy: 0, oid: 462, facing: 0
    }
  },
  255: { name: "feather_falling",
    pic: 999, state: 3005, wait: 0, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 80000, w: 50, h: 65,
      catchingact: [257, 257], caughtact: [130, 130]
    }
  },
  256: { name: "feather_falling",
    pic: 999, state: 3005, wait: 6, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 30, y: 80000, w: 50, h: 65,
      catchingact: [257, 257], caughtact: [130, 130]
    },
    opoint: {
      kind: 1, x: 39, y: 0, action: 260, dvx: 0, dvy: 0, oid: 462, facing: 0
    }
  },
  257: { name: "feather_falling",
    pic: 999, state: 9, wait: 5, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 70, injury: 0, cover: 11, vaction: 137, throwvz: -842150451, throwinjury: -842150451
    }
  },
  258: { name: "feather_falling",
    pic: 999, state: 9, wait: 3, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 8, hit_d: 269, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 70, injury: 0, cover: 11, hurtable: 1, vaction: 137, throwvz: -842150451, throwinjury: -842150451
    },
    opoint: {
      kind: 1, x: 19, y: 69, action: 1, dvx: 0, dvy: 0, oid: 435, facing: 10
    }
  },
  259: { name: "feather_falling",
    pic: 999, state: 9, wait: 3, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 70, injury: 0, cover: 11, hurtable: 1, vaction: 137, throwvz: -842150451, throwinjury: -842150451
    }
  },
  260: { name: "feather_falling",
    pic: 68, state: 3005, wait: 1, next: 261, dvx: 0, dvy: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "feather_falling",
    pic: 69, state: 3005, wait: 1, next: 262, dvx: 0, dvy: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "feather_falling",
    pic: 70, state: 3005, wait: 1, next: 263, dvx: 0, dvy: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  263: { name: "feather_falling",
    pic: 68, state: 3005, wait: 1, next: 264, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  264: { name: "feather_falling",
    pic: 69, state: 3005, wait: 1, next: 265, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "feather_falling",
    pic: 70, state: 3005, wait: 1, next: 266, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "feather_falling",
    pic: 68, state: 3005, wait: 1, next: 267, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "feather_falling",
    pic: 69, state: 3005, wait: 1, next: 268, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  268: { name: "feather_falling",
    pic: 70, state: 3005, wait: 1, next: 269, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "feather_falling",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "body",
    pic: 71, state: 3000, wait: 1, next: 271, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  271: { name: "body",
    pic: 72, state: 3000, wait: 1, next: 272, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  272: { name: "body",
    pic: 73, state: 3000, wait: 1, next: 273, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  273: { name: "body",
    pic: 74, state: 3000, wait: 1, next: 274, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  274: { name: "body",
    pic: 75, state: 3000, wait: 1, next: 275, dvx: 15, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 80000, w: 30, h: 100, bdefend: 16, injury: 0, effect: 5, fall: -1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  275: { name: "body",
    pic: 76, state: 3000, wait: 1, next: 276, dvx: 15, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 80000, w: 30, h: 100, bdefend: 16, injury: 0, effect: 5, fall: -1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  276: { name: "body",
    pic: 77, state: 3000, wait: 0, next: 274, dvx: 15, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 55, y: 80000, w: 30, h: 100, bdefend: 16, injury: 0, effect: 5, fall: -1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  277: { name: "body",
    pic: 999, state: 3005, wait: 3, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  280: { name: "trip_wire",
    pic: 999, state: 3005, wait: 0, next: 285, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0
  },
  285: { name: "trip_wire",
    pic: 999, state: 3005, wait: 0, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 60, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  286: { name: "trip_wire",
    pic: 39, state: 3002, wait: 250, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 38, y: 80025, w: 4, h: 5, zwidth: 10, dvx: 0, dvy: 0, fall: 100, vrest: 20, bdefend: 100, injury: 5, effect: 5
    }
  },
  287: { name: "trip_wire",
    pic: 39, state: 3005, wait: 0, next: 288, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0
  },
  288: { name: "trip_wire",
    pic: 39, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 60, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  290: { name: "bdy_drap",
    pic: 57, state: 3005, wait: 1, next: 290, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 30, y: 30000, w: 19, h: 9, dvx: 291
    }
  },
  291: { name: "bdy_drapEx",
    pic: 91, state: 18, wait: 1, next: 292, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 30000, w: 16, h: 17, dvx: 0, dvy: -40, fall: 100, arest: 20, bdefend: 100, injury: 60, effect: 0
    }
  },
  292: { name: "bdy_drapEx",
    pic: 92, state: 18, wait: 1, next: 293, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 30000, w: 16, h: 17, dvx: 0, dvy: -40, fall: 100, arest: 20, bdefend: 100, injury: 60, effect: 0
    }
  },
  293: { name: "bdy_drapEx",
    pic: 93, state: 18, wait: 1, next: 294, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 30000, w: 16, h: 17, dvx: 0, dvy: -40, fall: 100, arest: 20, bdefend: 100, injury: 60, effect: 0
    }
  },
  294: { name: "bdy_drapEx",
    pic: 94, state: 18, wait: 1, next: 295, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 30000, w: 16, h: 17, dvx: 0, dvy: -40, fall: 100, arest: 20, bdefend: 100, injury: 60, effect: 0
    }
  },
  295: { name: "bdy_drap_Ex",
    pic: 95, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0
  },
  300: { name: "tack_shadow",
    pic: 96, state: 3005, wait: 5, next: 301, dvx: 3, dvy: -5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  301: { name: "tack_shadow",
    pic: 97, state: 3005, wait: 0, next: 302, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  302: { name: "tack_shadow",
    pic: 98, state: 3005, wait: 0, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  303: { name: "tack_shadow",
    pic: 99, state: 3005, wait: 0, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 79, action: 140, dvx: 0, dvy: 0, oid: 435, facing: 0
    }
  },
  304: { name: "tack_shadow",
    pic: 999, state: 3005, wait: 2, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 80000, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 5, vrest: 3, bdefend: 100, injury: 0, effect: 5
    }
  },
  305: { name: "tack_shadow",
    pic: 999, state: 3005, wait: 0, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 79, action: 306, dvx: 0, dvy: 0, oid: 462, facing: 90
    }
  },
  306: { name: "tack_shadow",
    pic: 999, state: 3005, wait: 50, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -9999, y: 80000, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: -1, vrest: 3, bdefend: 100, injury: 0, effect: 5
    }
  },
  310: { name: "blood",
    pic: 100, state: 3005, wait: 1, next: 311, dvx: 550, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  311: { name: "blood",
    pic: 101, state: 3005, wait: 1, next: 312, dvx: 550, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "blood",
    pic: 102, state: 3005, wait: 1, next: 313, dvx: 550, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "blood",
    pic: 103, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});