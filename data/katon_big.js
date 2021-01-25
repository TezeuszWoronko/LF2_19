define({
  bmp: {
    file: [
      {
        "file(0-5)": "sprite/katon_ball_2.png", w: 209, h: 128, row: 3, col: 2
      },
      {
        "file(6-11)": "sprite/katon_flame.png", w: 210, h: 205, row: 3, col: 2
      },
      {
        "file(12-15)": "sprite/katon_dragon.png", w: 180, h: 140, row: 2, col: 2
      },
      {
        "file(16-21)": "sprite/katon_dragon2.png", w: 220, h: 110, row: 3, col: 2
      }
    ],
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 1, state: 3006, wait: 0, next: 1, dvx: 20, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 23, w: 131, h: 105, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 5, y: 130, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 75, y: 45, w: 107, h: 80
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 0, next: 2, dvx: 20, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 23, w: 131, h: 105, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 135, y: 112, action: 44, dvx: 0, dvy: 0, oid: 208, facing: 1
    },
    bdy: {
      kind: 0, x: 75, y: 45, w: 107, h: 80
    }
  },
  2: { name: "flying",
    pic: 2, state: 3006, wait: 0, next: 3, dvx: 20, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 23, w: 131, h: 105, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 5, y: 130, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 75, y: 45, w: 107, h: 80
    }
  },
  3: { name: "flying",
    pic: 0, state: 3006, wait: 0, next: 4, dvx: 20, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 23, w: 131, h: 105, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 135, y: 112, action: 44, dvx: 0, dvy: 0, oid: 208, facing: 1
    },
    bdy: {
      kind: 0, x: 75, y: 45, w: 107, h: 80
    }
  },
  4: { name: "flying",
    pic: 1, state: 3006, wait: 0, next: 5, dvx: 20, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 23, w: 131, h: 105, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 5, y: 130, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 75, y: 45, w: 107, h: 80
    }
  },
  5: { name: "flying",
    pic: 2, state: 3006, wait: 0, next: 3, dvx: 20, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 23, w: 131, h: 105, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 5, y: 130, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 75, y: 45, w: 107, h: 80
    }
  },
  6: { name: "flyings",
    pic: 3, state: 3006, wait: 0, next: 7, dvx: 30, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 55, w: 100, h: 80, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 135, y: 125, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  7: { name: "flyings",
    pic: 4, state: 3006, wait: 0, next: 8, dvx: 30, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 55, w: 100, h: 80, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 45, y: 95, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  8: { name: "flyings",
    pic: 5, state: 3006, wait: 0, next: 9, dvx: 30, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 55, w: 100, h: 80, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 135, y: 125, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  9: { name: "flyings",
    pic: 4, state: 3006, wait: 0, next: 6, dvx: 30, dvy: 0, centerx: 135, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: 55, w: 100, h: 80, dvx: 30, fall: 999, vrest: 15, bdefend: 100, injury: 95, effect: 2
    },
    opoint: {
      kind: 1, x: 45, y: 95, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 60, y: 50, w: 100, h: 100
    }
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 135, y: 100, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 21, dvx: 0, dvy: 0, centerx: 135, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 135, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 135, y: 100, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 135, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 999, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 135, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 135, y: 100, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  35: { name: "flying_floor",
    pic: 999, state: 3005, wait: 1, next: 36, dvx: 25, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 5, y: 121, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  36: { name: "flying_floor",
    pic: 999, state: 3005, wait: 1, next: 35, dvx: 25, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 5, y: 121, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  40: { name: "flame",
    pic: 6, state: 15, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 93, w: 107, h: 33, zwidth: 25, dvx: 15, dvy: -15, fall: 999, vrest: 300, bdefend: 10, injury: 90, effect: 2
    }
  },
  41: { name: "flame",
    pic: 7, state: 15, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 46, w: 150, h: 144, zwidth: 25, dvx: 15, dvy: -15, fall: 999, vrest: 300, bdefend: 10, injury: 90, effect: 2
    }
  },
  42: { name: "flame",
    pic: 8, state: 15, wait: 1, next: 43, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 15, dvy: -15, fall: 999, vrest: 300, bdefend: 10, injury: 90, effect: 2
    }
  },
  43: { name: "flame",
    pic: 9, state: 15, wait: 1, next: 44, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 15, dvy: -15, fall: 999, vrest: 300, bdefend: 10, injury: 90, effect: 2
    }
  },
  44: { name: "flame",
    pic: 10, state: 15, wait: 1, next: 45, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  45: { name: "flame",
    pic: 11, state: 15, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  46: { name: "flame",
    pic: 9, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  47: { name: "flame",
    pic: 10, state: 15, wait: 1, next: 48, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  48: { name: "flame",
    pic: 11, state: 15, wait: 1, next: 49, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  49: { name: "flame",
    pic: 10, state: 15, wait: 0, next: 50, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  50: { name: "flame",
    pic: 9, state: 15, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  51: { name: "flame",
    pic: 8, state: 15, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 10, w: 205, h: 190, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  52: { name: "flame",
    pic: 7, state: 15, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 46, w: 150, h: 144, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 2
    }
  },
  53: { name: "flame",
    pic: 6, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 60, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 93, w: 107, h: 33, zwidth: 25, dvx: 10, dvy: -5, fall: 999, vrest: 300, bdefend: 10, injury: 40, effect: 21
    }
  },
  59: { name: "flying",
    pic: 16, state: 18, wait: 1, next: 60, dvx: 50, dvy: 0, centerx: 110, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 15, w: 180, h: 101, dvx: 50, dvy: -7, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 180, y: 105, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  60: { name: "flying",
    pic: 17, state: 18, wait: 1, next: 59, dvx: 50, dvy: 0, centerx: 110, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 15, w: 180, h: 101, dvx: 50, dvy: -7, fall: 999, vrest: 15, bdefend: 100, injury: 100, effect: 2
    },
    opoint: {
      kind: 1, x: 150, y: 105, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  65: { name: "flare",
    pic: 12, state: 3005, wait: 1, next: 66, dvx: 550, dvy: 550, dvz: 550, centerx: 90, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "flare",
    pic: 13, state: 3005, wait: 1, next: 67, dvx: 550, dvy: 550, dvz: 550, centerx: 90, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "flare",
    pic: 14, state: 3005, wait: 1, next: 68, dvx: 550, dvy: 550, dvz: 550, centerx: 90, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "flare",
    pic: 15, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 90, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});