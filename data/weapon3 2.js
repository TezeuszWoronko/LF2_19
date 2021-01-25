define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/weapon3.png", w: 58, h: 58, row: 10, col: 10
      }
    ],
    weapon_hp: 1,
    weapon_drop_hurt: 0
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 17, y: 2, w: 13, h: 44, fall: 20, bdefend: 16, injury: 789
    }
  },
  21: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 41, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 20, w: 12, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  22: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 37, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 21, w: 10, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  23: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 9, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 9, y: 25, w: 14, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  24: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 29, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 8, y: 24, w: 18, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  25: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 24, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 6, y: 18, w: 24, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  26: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 15, y: 15, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 12, y: 12, w: 16, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  27: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 15, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 12, y: 8, w: 14, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  28: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 25, y: 14, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 9, w: 13, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  29: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 27, y: 15, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 6, w: 14, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  30: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 33, y: 17, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 12, w: 19, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  31: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 33, y: 21, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 15, w: 22, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  32: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 33, y: 25, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 20, y: 20, w: 22, h: 12
    }
  },
  33: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 33, y: 32, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 25, w: 20, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  34: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 33, y: 34, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 25, w: 17, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  35: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 26, y: 35, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 23, w: 13, h: 21, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  40: { name: "throwing",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "on_ground",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "just_on_ground",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 24, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 6, y: 18, w: 24, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  399: { name: "dummy",
    pic: 999, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});