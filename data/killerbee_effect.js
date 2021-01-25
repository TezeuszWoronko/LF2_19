define({
  bmp: {
    file: [
      {
        "file(0-59)": "sprite/killerbee_effect.png", w: 79, h: 79, row: 10, col: 6
      },
      {
        "file(60-69)": "sprite/killerbee_effect2.png", w: 159, h: 159, row: 5, col: 2
      }
    ]
  },
  frame: {
  0: { name: "spin_ghost",
    pic: 0, state: 3005, wait: 0, next: 4, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "spin_ghost",
    pic: 1, state: 3005, wait: 0, next: 5, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "spin_ghost",
    pic: 2, state: 3005, wait: 0, next: 6, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "spin_ghost",
    pic: 3, state: 3005, wait: 0, next: 7, dvx: 0, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "spin_ghost",
    pic: 0, state: 3005, wait: 2, next: 8, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 79, action: 268, dvx: 0, dvy: 0, oid: 522
    }
  },
  5: { name: "spin_ghost",
    pic: 1, state: 3005, wait: 2, next: 9, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 79, action: 268, dvx: 0, dvy: 0, oid: 522
    }
  },
  6: { name: "spin_ghost",
    pic: 2, state: 3005, wait: 2, next: 10, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 79, action: 268, dvx: 0, dvy: 0, oid: 522
    }
  },
  7: { name: "spin_ghost",
    pic: 3, state: 3005, wait: 2, next: 11, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 79, action: 268, dvx: 0, dvy: 0, oid: 522
    }
  },
  8: { name: "spin_ghost",
    pic: 4, state: 3005, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "spin_ghost",
    pic: 5, state: 3005, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "spin_ghost",
    pic: 6, state: 3005, wait: 1, next: 14, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "spin_ghost",
    pic: 7, state: 3005, wait: 1, next: 15, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "spin_ghost",
    pic: 8, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "spin_ghost",
    pic: 9, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "spin_ghost",
    pic: 10, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "spin_ghost",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "counter",
    pic: 999, state: 3005, wait: 5, next: 21, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 900000, w: 150, h: 200
    }
  },
  21: { name: "counter",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "counter",
    pic: 999, state: 3005, wait: 5, next: 31, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 900000, w: 150, h: 200
    }
  },
  31: { name: "counter",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "counter",
    pic: 999, state: 3005, wait: 5, next: 41, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 900000, w: 150, h: 200
    }
  },
  41: { name: "counter",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "spin_wind",
    pic: 22, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "spin_wind",
    pic: 23, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "spin_wind",
    pic: 24, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "sword_slash",
    pic: 12, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "sword_slash",
    pic: 13, state: 3005, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    opoint: {
      kind: 1, x: 43, y: 79, action: 8, dvx: 0, dvy: 0, oid: 522
    }
  },
  72: { name: "sword_slash",
    pic: 14, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  73: { name: "sword_slash",
    pic: 15, state: 3005, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "sword_slash",
    pic: 16, state: 3005, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    opoint: {
      kind: 1, x: 39, y: 79, action: 9, dvx: 0, dvy: 0, oid: 522
    }
  },
  75: { name: "sword_slash",
    pic: 17, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  76: { name: "sword_slash",
    pic: 18, state: 3005, wait: 1, next: 77, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "sword_slash",
    pic: 19, state: 3005, wait: 1, next: 78, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    opoint: {
      kind: 1, x: 43, y: 79, action: 10, dvx: 0, dvy: 0, oid: 522
    }
  },
  78: { name: "sword_slash",
    pic: 20, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  80: { name: "beeattackdoublejump",
    pic: 999, state: 15, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "beeattackdoublejump",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 80, h: 70, zwidth: 20, injury: 30, fall: 20
    }
  },
  82: { name: "beeattacklightingsword",
    pic: 999, state: 15, wait: 0, next: 84, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "beeattacklightingsword",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 20, w: 80, h: 50, zwidth: 20, vrest: 4, injury: 14, fall: 60, dvz: -1
    }
  },
  85: { name: "beeattacklightingsword1",
    pic: 999, state: 15, wait: 0, next: 86, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "beeattacklightingsword1",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 20, w: 85, h: 70, zwidth: 20, vrest: 4, injury: 15, fall: 30, dvz: -1
    }
  },
  100: { name: "sword",
    pic: 44, state: 15, wait: 6, next: 101, dvx: 60, dvy: 2, centerx: 61, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -60, y: 10, w: 80, h: 50, zwidth: 20, vrest: 10, injury: 35, fall: 70
    }
  },
  101: { name: "sword",
    pic: 45, state: 3005, wait: 15, next: 102, dvx: 550, dvy: 550, centerx: 61, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "sword",
    pic: 46, state: 3005, wait: 1, next: 103, dvx: 550, dvy: 550, centerx: 61, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "sword",
    pic: 47, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 61, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "sword_air",
    pic: 53, state: 15, wait: 6, next: 104, dvx: 35, dvy: 4, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -60, y: 10, w: 80, h: 50, zwidth: 20, injury: 35, fall: 70, effect: 1
    }
  },
  105: { name: "sword_air",
    pic: 54, state: 3005, wait: 5, next: 106, dvx: 550, dvy: 550, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "sword_air",
    pic: 55, state: 3005, wait: 1, next: 107, dvx: 550, dvy: 550, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  107: { name: "sword_air",
    pic: 56, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "spin_ghost_lvl3",
    pic: 0, state: 3005, wait: 1, next: 121, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "spin_ghost_lvl3",
    pic: 5, state: 3005, wait: 1, next: 122, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "spin_ghost_lvl3",
    pic: 10, state: 3005, wait: 1, next: -123, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "spin_ghost_lvl3",
    pic: 2, state: 3005, wait: 1, next: 124, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "spin_ghost_lvl3",
    pic: 7, state: 3005, wait: 1, next: 125, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "spin_ghost_lvl3",
    pic: 8, state: 3005, wait: 1, next: -126, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "spin_ghost_lvl3",
    pic: 1, state: 3005, wait: 1, next: 127, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "spin_ghost_lvl3",
    pic: 6, state: 3005, wait: 1, next: 128, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "spin_ghost_lvl3",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 10, dvy: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "sword_side",
    pic: 26, state: 3005, wait: 1, next: 131, dvx: 0, dvy: 550, centerx: 33, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "sword_side",
    pic: 40, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, centerx: 20, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "sword_diag1",
    pic: 27, state: 3005, wait: 1, next: 133, dvx: 0, dvy: 550, centerx: 30, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "sword_diag1",
    pic: 41, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, centerx: 20, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "sword_diag2",
    pic: 28, state: 3005, wait: 1, next: 135, dvx: 0, dvy: 550, centerx: 15, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "sword_diag2",
    pic: 42, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, centerx: 0, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  136: { name: "sword_down",
    pic: 29, state: 3005, wait: 1, next: 137, dvx: 0, dvy: 550, centerx: 33, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  137: { name: "sword_down",
    pic: 43, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, centerx: 33, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0
  },
  138: { name: "killerbee_spining",
    pic: 999, state: 3000, wait: 0, next: 139, dvx: 5, dvy: 0, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 80000, w: 79, h: 75, dvx: 10, dvy: -8, bdefend: 15, vrest: 4, injury: 35, fall: 60, effect: 1
    }
  },
  139: { name: "killerbee_spining",
    pic: 999, state: 3000, wait: 0, next: 1000, dvx: 5, dvy: 0, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 80000, w: 79, h: 75, dvx: 10, dvy: -8, bdefend: 15, vrest: 4, injury: 30, fall: 60, effect: 1
    }
  },
  140: { name: "smoke",
    pic: 52, state: 3005, wait: 1, next: 141, dvx: 0, dvy: 550, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  141: { name: "smoke",
    pic: 60, state: 3005, wait: 1, next: 142, dvx: 0, dvy: 550, centerx: 77, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "smoke",
    pic: 61, state: 3005, wait: 2, next: 143, dvx: 0, dvy: 550, centerx: 80, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "smoke",
    pic: 62, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 550, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0
  },
  144: { name: "tentacle",
    pic: 48, state: 3000, wait: 3, next: 145, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  145: { name: "tentacle",
    pic: 49, state: 3000, wait: 1, next: 146, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "tentacle",
    pic: 50, state: 3000, wait: 1, next: 147, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  147: { name: "tentacle",
    pic: 51, state: 3000, wait: 3, next: 148, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "tentacle",
    pic: 48, state: 3000, wait: 3, next: 149, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "tentacle",
    pic: 49, state: 3000, wait: 1, next: 150, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "tentacle",
    pic: 50, state: 3000, wait: 2, next: 151, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "tentacle",
    pic: 51, state: 3000, wait: 3, next: 152, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "tentacle",
    pic: 48, state: 3000, wait: 3, next: 153, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "tentacle",
    pic: 49, state: 3000, wait: 1, next: 154, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "tentacle",
    pic: 50, state: 3000, wait: 1, next: 155, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "tentacle",
    pic: 51, state: 3000, wait: 3, next: 156, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "tentacle",
    pic: 48, state: 3000, wait: 3, next: 157, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "tentacle",
    pic: 49, state: 3000, wait: 1, next: 158, dvx: 2, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  158: { name: "tentacle",
    pic: 50, state: 3000, wait: 2, next: 159, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 140, dvx: 0, dvy: 0, oid: 522, facing: 0
    }
  },
  159: { name: "tentacle",
    pic: 51, state: 3000, wait: 2, next: 1000, dvx: 1, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "counter",
    pic: 999, state: 3000, wait: 15, next: 1000, dvx: 550, dvy: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: -18, y: 0, w: 53, h: 79
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  161: { name: "damage",
    pic: 999, state: 3000, wait: 5, next: 1000, dvx: 5, dvy: 0, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 80000, w: 79, h: 75, dvx: 10, dvy: -8, bdefend: 15, vrest: 25, injury: 80, fall: 60, effect: 1
    }
  },
  250: { name: "charge_bar",
    pic: 30, state: 3005, wait: 6, next: 251, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "charge_bar",
    pic: 30, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 252
    }
  },
  252: { name: "charge_bar",
    pic: 31, state: 3005, wait: 6, next: 253, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  253: { name: "charge_bar",
    pic: 31, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 254
    }
  },
  254: { name: "charge_bar",
    pic: 32, state: 3005, wait: 6, next: 255, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  255: { name: "charge_bar",
    pic: 32, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 256
    }
  },
  256: { name: "charge_bar",
    pic: 33, state: 3005, wait: 6, next: 257, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  257: { name: "charge_bar",
    pic: 33, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 258
    }
  },
  258: { name: "charge_bar",
    pic: 34, state: 3005, wait: 6, next: 259, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  259: { name: "charge_bar",
    pic: 34, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 260
    }
  },
  260: { name: "charge_bar",
    pic: 35, state: 3005, wait: 6, next: 261, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 97000000, w: 150, h: 200
    }
  },
  261: { name: "charge_bar",
    pic: 35, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 262
    },
    bdy: {
      kind: 0, x: 0, y: 97000000, w: 150, h: 200
    }
  },
  262: { name: "charge_bar",
    pic: 36, state: 3005, wait: 6, next: 263, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 97000000, w: 150, h: 200
    }
  },
  263: { name: "charge_bar",
    pic: 36, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 264
    },
    bdy: {
      kind: 0, x: 0, y: 97000000, w: 150, h: 200
    }
  },
  264: { name: "charge_bar",
    pic: 37, state: 3005, wait: 6, next: 265, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 97000000, w: 150, h: 200
    }
  },
  265: { name: "charge_bar",
    pic: 37, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 266
    },
    bdy: {
      kind: 0, x: 0, y: 97000000, w: 150, h: 200
    }
  },
  266: { name: "charge_bar",
    pic: 38, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 267
    },
    bdy: {
      kind: 0, x: 0, y: 98000000, w: 150, h: 200
    }
  },
  267: { name: "charge_bar",
    pic: 39, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 88, x: 0, y: 87999800, w: 200, h: 500, dvx: 266
    },
    bdy: {
      kind: 0, x: 0, y: 98000000, w: 150, h: 200
    }
  },
  268: { name: "naruto_clone_uppercut",
    pic: 999, state: 3000, wait: 5, next: 1000, dvx: 550, dvy: 550, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 32, w: 34, h: 100, dvx: 5, dvy: -17, fall: 70, arest: 20, bdefend: 67, injury: 25, effect: 0
    }
  }
  }
});