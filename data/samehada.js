define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/samehada.png", w: 97, h: 48, row: 1, col: 1
      }
    ],
    weapon_hp: 600,
    weapon_drop_hurt: 35
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 40, vrest: 10, bdefend: 16, injury: 10
    },
    2: {
      entry: "jump", dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 10
    },
    3: {
      entry: "run", dvx: 10, fall: 70, vrest: 10, bdefend: 16, injury: 20
    },
    4: {
      entry: "dash", dvx: 12, fall: 70, vrest: 20, bdefend: 60, injury: 20
    }
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "in_the_sky",
    pic: 999, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 550, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "in_the_sky",
    pic: 999, state: 1000, wait: 0, next: 11, dvx: 0, dvy: -20, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 16, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 17, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 4, w: 12, h: 50, fall: 20, bdefend: 16, injury: 789
    }
  },
  21: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 41, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 23, y: 2, w: 13, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 12, y: 26, w: 13, h: 26, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  22: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 37, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: -6, y: 36, w: 21, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 28, y: 5, w: 14, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 10, y: 18, w: 21, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  23: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 9, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 33, y: 15, w: 13, h: 11, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 5, y: 24, w: 25, h: 11, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: -18, y: 33, w: 31, h: 10, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  24: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 10, y: 29, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: -23, y: 23, w: 70, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  25: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 23, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: -14, y: 13, w: 38, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 22, y: 25, w: 23, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  26: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 14, y: 15, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 26, y: 27, w: 16, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: -3, y: -1, w: 24, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 17, y: 20, w: 16, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  27: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 7, y: 3, w: 16, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 19, y: 22, w: 15, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  28: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 11, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 2, w: 14, h: 45, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  29: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 24, y: -1, w: 11, h: 28, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 11, y: 25, w: 16, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  30: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 36, y: 16, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: -2, y: 34, w: 24, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 34, y: -1, w: 23, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 18, y: 14, w: 20, h: 20, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  31: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 37, y: 19, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 28, y: 10, w: 32, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: -4, y: 21, w: 39, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  32: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 37, y: 26, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: -2, y: 23, w: 66, h: 8
    }
  },
  33: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 38, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 3, y: 15, w: 22, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 25, y: 27, w: 39, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  34: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 34, y: 36, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 32, y: 34, w: 20, h: 18, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 5, y: 5, w: 17, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 15, y: 19, w: 20, h: 18, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  35: { name: "on_hand",
    pic: 0, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 9, y: 1, w: 14, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 19, y: 20, w: 18, h: 32, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  40: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 85, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  41: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  42: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  43: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  44: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  45: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  46: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  47: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  48: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  49: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  50: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  51: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  52: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  53: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  54: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  55: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 8, fall: 70, bdefend: 16, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 22, w: 16, h: 12
    }
  },
  60: { name: "on_ground",
    pic: 0, state: 1004, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: -2913, w: 25, h: 10
    },
    wpoint: {
      kind: 1, x: 35, y: -999, weaponact: 66, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  61: { name: "on_ground",
    pic: 0, state: 1003, wait: 2, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "on_ground",
    pic: 0, state: 1003, wait: 2, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/011",
    bdy: {
      kind: 0, x: 10, y: -2913, w: 25, h: 10
    }
  },
  63: { name: "on_ground",
    pic: 0, state: 1003, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "on_ground",
    pic: 0, state: 1003, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/011"
  },
  70: { name: "just_on_ground",
    pic: 0, state: 1003, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/011",
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, arest: 16, bdefend: 16
    }
  },
  71: { name: "just_on_on_ground",
    pic: 0, state: 1003, wait: 2, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, arest: 16, bdefend: 16
    }
  },
  72: { name: "just_on_on_ground",
    pic: 0, state: 1003, wait: 2, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/011",
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, arest: 16, bdefend: 16
    },
    bdy: {
      kind: 0, x: 10, y: -2913, w: 25, h: 10
    }
  },
  80: { name: "on_hand",
    pic: 999, state: 1001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 4, w: 12, h: 50, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 24, y: 40, action: 99, dvx: 0, dvy: 0, oid: 509, facing: 0
    }
  },
  81: { name: "remote",
    pic: 999, state: 1001, wait: 3, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 4, w: 12, h: 50, fall: 20, bdefend: 16, injury: 789
    },
    opoint: {
      kind: 1, x: 64, y: -300, action: 0, dvx: 0, dvy: 10, dvz: 0, oid: 509, facing: 0
    }
  },
  99: { name: "scroll_start",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: 70000, w: 100, h: 100, zwidth: 500, dvx: 101
    }
  },
  101: { name: "scroll_start",
    pic: 999, state: 3005, wait: 0, next: 102, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "scroll_start",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 4, dvx: 0, dvy: 0, oid: 80, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 29, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});