define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/heart.png", w: 48, h: 48, row: 10, col: 10
      }
    ],
    weapon_hp: 2000,
    weapon_drop_hurt: 35,
    weapon_hit_sound: "1/032",
    weapon_drop_sound: "1/032",
    weapon_broken_sound: "1/033"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 40, vrest: 10, bdefend: 16, injury: 45, effect: 1
    },
    2: {
      entry: "jump", dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 45, effect: 1
    },
    3: {
      entry: "run", dvx: 10, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    4: {
      entry: "dash", dvx: 12, fall: 70, vrest: 20, bdefend: 60, injury: 55, effect: 1
    }
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 3, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  1: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 2, dvx: 0, dvy: 3, centerx: 24, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  2: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 3, centerx: 24, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  3: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 3, centerx: 23, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  4: { name: "in_the_sky",
    pic: 4, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 3, centerx: 24, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  5: { name: "in_the_sky",
    pic: 5, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 3, centerx: 24, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  6: { name: "in_the_sky",
    pic: 6, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 3, centerx: 24, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  7: { name: "in_the_sky",
    pic: 7, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 3, centerx: 22, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  8: { name: "in_the_sky",
    pic: 8, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 3, centerx: 26, centery: 15, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  9: { name: "in_the_sky",
    pic: 9, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 3, centerx: 27, centery: 15, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  10: { name: "in_the_sky",
    pic: 10, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 3, centerx: 25, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  11: { name: "in_the_sky",
    pic: 11, state: 1000, wait: 0, next: 12, dvx: 0, dvy: 3, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  12: { name: "in_the_sky",
    pic: 12, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 3, centerx: 25, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  13: { name: "in_the_sky",
    pic: 13, state: 1000, wait: 0, next: 14, dvx: 0, dvy: 3, centerx: 25, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  14: { name: "in_the_sky",
    pic: 14, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 3, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  15: { name: "in_the_sky",
    pic: 15, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 3, centerx: 24, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  20: { name: "on_hand",
    pic: 20, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 17, y: 2, w: 13, h: 44, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 24, y: 40, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  21: { name: "on_hand",
    pic: 21, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 41, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 20, w: 12, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 17, y: 41, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  22: { name: "on_hand",
    pic: 22, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 37, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 21, w: 10, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 12, y: 37, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  23: { name: "on_hand",
    pic: 23, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 9, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 9, y: 25, w: 14, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 9, y: 33, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  24: { name: "on_hand",
    pic: 24, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 10, y: 29, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 8, y: 24, w: 18, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 10, y: 29, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  25: { name: "on_hand",
    pic: 25, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 23, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 6, y: 18, w: 24, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 12, y: 23, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  26: { name: "on_hand",
    pic: 26, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 14, y: 15, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 12, y: 12, w: 16, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 14, y: 15, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  27: { name: "on_hand",
    pic: 27, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 12, y: 8, w: 14, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 17, y: 13, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  28: { name: "on_hand",
    pic: 28, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 11, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 9, w: 13, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 24, y: 11, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  29: { name: "on_hand",
    pic: 29, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 6, w: 14, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 29, y: 13, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  30: { name: "on_hand",
    pic: 30, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 36, y: 16, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 12, w: 19, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 36, y: 16, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  31: { name: "on_hand",
    pic: 31, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 37, y: 19, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 15, w: 22, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 37, y: 19, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  32: { name: "on_hand",
    pic: 32, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 37, y: 26, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 20, y: 20, w: 22, h: 12
    },
    opoint: {
      kind: 1, x: 37, y: 26, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  33: { name: "on_hand",
    pic: 33, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 38, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 25, w: 20, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 38, y: 33, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  34: { name: "on_hand",
    pic: 34, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 34, y: 36, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 25, w: 17, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 34, y: 36, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  35: { name: "on_hand",
    pic: 35, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 23, w: 13, h: 21, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 29, y: 40, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  36: { name: "on_hand",
    pic: 14, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 23, w: 13, h: 21, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 29, y: 40, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  40: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 24, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 37, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  41: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 42, dvx: 0, dvy: 2, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 34, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  42: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 43, dvx: 0, dvy: 2, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 34, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  43: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 44, dvx: 0, dvy: 3, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 35, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  44: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 45, dvx: 0, dvy: 3, centerx: 24, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 36, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  45: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 46, dvx: 0, dvy: 4, centerx: 24, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 36, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  46: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 47, dvx: 0, dvy: 4, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 35, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  47: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 48, dvx: 0, dvy: 5, centerx: 22, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 33, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  48: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 49, dvx: 8, dvy: 5, centerx: 26, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0, kind: 0, x: 6, y: 16, w: 39, h: 19, fall: 70, bdefend: 16, injury: 55, effect: 1,
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 27, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  49: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 50, dvx: 0, dvy: 3, centerx: 27, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 26, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  50: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 51, dvx: 0, dvy: 3, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 35, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  51: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 52, dvx: 0, dvy: 3, centerx: 25, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 34, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  52: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 53, dvx: 0, dvy: 3, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 33, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  53: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 54, dvx: 0, dvy: 3, centerx: 25, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 36, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  54: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 3, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 34, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  55: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 40, dvx: 0, dvy: 3, centerx: 24, centery: 32, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 16, w: 39, h: 19, dvx: 8, fall: 70, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 39, h: 19
    },
    opoint: {
      kind: 1, x: 24, y: 32, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  60: { name: "on_ground",
    pic: 2, state: 1003, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    opoint: {
      kind: 1, x: 24, y: 29, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  61: { name: "on_ground",
    pic: 5, state: 1003, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 24, centery: 31, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 31, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  62: { name: "on_ground",
    pic: 3, state: 4506, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 24, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    opoint: {
      kind: 1, x: 24, y: 28, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  63: { name: "on_ground",
    pic: 5, state: 1003, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 24, y: 30, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  64: { name: "on_ground",
    pic: 4, state: 1004, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    },
    opoint: {
      kind: 1, x: 24, y: 30, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  70: { name: "just_on_ground",
    pic: 2, state: 1003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, arest: 16, bdefend: 16
    },
    opoint: {
      kind: 1, x: 24, y: 35, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  71: { name: "just_on_on_ground",
    pic: 5, state: 4506, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 24, centery: 32, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, arest: 16, bdefend: 16
    },
    opoint: {
      kind: 1, x: 24, y: 32, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  72: { name: "just_on_on_ground",
    pic: 3, state: 1003, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 24, centery: 31, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, arest: 16, bdefend: 16
    },
    opoint: {
      kind: 1, x: 24, y: 31, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  100: { name: "on_hand",
    pic: 25, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 23, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 6, y: 18, w: 24, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 12, y: 23, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  },
  121: { name: "implanting",
    pic: 999, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 0, y: 0, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 20, w: 12, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 43, y: 87, action: 355, dvx: 0, dvy: 0, oid: 57, facing: 0
    }
  },
  122: { name: "absorbing",
    pic: 20, state: 18, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 41, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 17, y: 41, action: 127, dvx: 0, dvy: 0, oid: 499, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 4, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    },
    opoint: {
      kind: 1, x: 24, y: 24, action: 0, dvx: 0, dvy: 0, oid: 505, facing: 0
    }
  }
  }
});