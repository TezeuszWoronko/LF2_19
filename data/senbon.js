define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/senbon.png", w: 81, h: 82, row: 4, col: 6
      }
    ],
    weapon_hit_sound: "1/032",
    weapon_drop_sound: "1/032",
    weapon_broken_sound: "1/032"
  },
  frame: {
  0: { name: "flying",
    pic: 10, state: 3005, wait: 0, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 14, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 2, fall: 1, bdefend: 12, injury: 10, effect: 1
    }
  },
  1: { name: "flying",
    pic: 11, state: 3005, wait: 0, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 42, hit_a: 14, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 2, fall: 1, bdefend: 12, injury: 10, effect: 1
    }
  },
  2: { name: "flying",
    pic: 10, state: 3005, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 14, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 2, fall: 1, bdefend: 12, injury: 10, effect: 1
    }
  },
  3: { name: "flying",
    pic: 11, state: 3005, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 14, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 17, w: 40, h: 10, dvx: 2, fall: 1, bdefend: 12, injury: 10, effect: 1
    }
  },
  4: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  5: { name: "flying",
    pic: 1, state: 3005, wait: 1, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "flying",
    pic: 2, state: 3005, wait: 1, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying",
    pic: 3, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});