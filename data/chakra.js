define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/rasengan_ball.png", w: 1, h: 1, row: 10, col: 10
      }
    ],
    weapon_hp: 200,
    weapon_drop_hurt: 35,
    weapon_hit_sound: "1/027",
    weapon_drop_sound: "1/034",
    weapon_broken_sound: "1/027"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 40, vrest: 10, bdefend: 16, injury: 45, effect: 0
    },
    2: {
      entry: "jump", dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 45, effect: 0
    },
    3: {
      entry: "run", dvx: 10, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 0
    },
    4: {
      entry: "dash", dvx: 12, fall: 70, vrest: 20, bdefend: 60, injury: 55, effect: 0
    }
  },
  frame: {
  0: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
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
      kind: 1, x: 25, y: 45, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 19, y: 45, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 9, y: 43, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 9, y: 38, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 8, y: 31, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 12, y: 19, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 16, y: 13, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 17, y: 11, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 29, y: 10, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 33, y: 9, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 38, y: 18, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 38, y: 25, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 40, y: 29, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 37, y: 39, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 32, y: 41, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 29, y: 45, action: 180, dvx: 0, dvy: 0, oid: 203
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
      kind: 1, x: 29, y: 33, action: 180, dvx: 0, dvy: 0, oid: 203
    }
  },
  40: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "disapear",
    pic: 36, state: 1000, wait: 1, next: 397, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "rasengan",
    pic: 999, state: 1000, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 6, y: 0, action: 234, dvx: 0, dvy: 0, oid: 23, facing: 0
    }
  },
  397: { name: "disapear",
    pic: 999, state: 1000, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});