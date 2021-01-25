define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/tha_hand.png", w: 159, h: 159, row: 5, col: 5
      }
    ],
    name: "Master_Hand",
    head: "sprite/tha_hand_f.png",
    small: "sprite/jiroubou_s.png",
    walking_frame_rate: 3,
    walking_speed: 7,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 27,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -16.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -13,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 20
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243, hit_Da: 247, hit_Fj: 257,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 78, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243, hit_Da: 247, hit_Fj: 257,
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243, hit_Da: 247, hit_Fj: 257,
    wpoint: {
      kind: 1, x: 32, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 240, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243, hit_Da: 247, hit_Fj: 257,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  5: { name: "walking",
    pic: 0, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  6: { name: "walking",
    pic: 1, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  7: { name: "walking",
    pic: 2, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  8: { name: "walking",
    pic: 3, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  9: { name: "running",
    pic: 8, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 15, dvy: 15, vrest: 15, bdefend: 100, fall: 100, injury: 5
    }
  },
  10: { name: "running",
    pic: 8, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 15, dvy: 15, vrest: 15, bdefend: 100, fall: 100, injury: 5
    }
  },
  11: { name: "running",
    pic: 8, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 15, dvy: 15, vrest: 15, bdefend: 100, fall: 100, injury: 5
    }
  },
  60: { name: "punch",
    pic: 9, state: 7, wait: 1, next: 61, dvx: 1, dvy: -2, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  61: { name: "punch",
    pic: 16, state: 7, wait: 1, next: 62, dvx: -15, dvy: -3, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 20, y: 753, w: 120, h: 80,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  62: { name: "punch",
    pic: 16, state: 7, wait: 7, next: 63, dvx: 0, dvy: 550, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  63: { name: "punch",
    pic: 8, state: 7, wait: 10, next: 64, dvx: 50, dvy: -2, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 35, dvy: -10, vrest: 15, bdefend: 100, fall: 70, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      }
    ]
  },
  64: { name: "punch",
    pic: 9, state: 7, wait: 4, next: 999, dvx: 550, dvy: 550, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      }
    ]
  },
  65: { name: "punch",
    pic: 10, state: 7, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  66: { name: "punch",
    pic: 11, state: 7, wait: 2, next: 67, dvx: 0, dvy: 550, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  67: { name: "punch",
    pic: 12, state: 7, wait: 3, next: 68, dvx: 0, dvy: -2, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 2, dvy: -15, vrest: 15, bdefend: 100, fall: 70, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      }
    ]
  },
  68: { name: "punch",
    pic: 13, state: 7, wait: 1, next: 69, dvx: 0, dvy: -2, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 2, dvy: -15, vrest: 15, bdefend: 100, fall: 70, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      }
    ]
  },
  69: { name: "punch",
    pic: 17, state: 7, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      }
    ]
  },
  70: { name: "super_punch",
    pic: 22, state: 7, wait: 1, next: 71, dvx: 550, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  71: { name: "super_punch",
    pic: 23, state: 7, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  72: { name: "super_punch",
    pic: 23, state: 7, wait: 1, next: 73, dvx: 20, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 150, dvy: 0, vrest: 15, bdefend: 100, fall: 100, injury: 55
    }
  },
  73: { name: "super_punch",
    pic: 23, state: 7, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 150, dvy: 0, vrest: 15, bdefend: 100, fall: 100, injury: 55
    }
  },
  74: { name: "super_punch",
    pic: 22, state: 7, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  80: { name: "jump_attack",
    pic: 10, state: 7, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  85: { name: "run_attack",
    pic: 22, state: 7, wait: 1, next: 71, dvx: 550, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 10, state: 7, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  94: { name: "down_smash",
    pic: 8, state: 7, wait: 0, next: 254, dvx: 0, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  95: { name: "dash_defend",
    pic: 4, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      }
    ]
  },
  100: { name: "rowing",
    pic: 9, state: 7, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  101: { name: "rowing",
    pic: 9, state: 7, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  102: { name: "rowing",
    pic: 9, state: 7, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  108: { name: "rowing",
    pic: 9, state: 7, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  109: { name: "rowing",
    pic: 9, state: 7, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  110: { name: "defend",
    pic: 8, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243, hit_Da: 247, hit_Fj: 257,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  111: { name: "defend",
    pic: 16, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  112: { name: "broken_defend",
    pic: 18, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  113: { name: "broken_defend",
    pic: 19, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  114: { name: "broken_defend",
    pic: 20, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  130: { name: "picked_caught",
    pic: 18, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  131: { name: "picked_caught",
    pic: 20, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 26, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  132: { name: "picked_caught",
    pic: 18, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 39, y: 51, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  133: { name: "picked_caught",
    pic: 20, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 36
    },
    wpoint: {
      kind: 1, x: 35, y: 46, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 18, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 37, y: 28
    },
    wpoint: {
      kind: 1, x: 41, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 20, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 22
    },
    wpoint: {
      kind: 1, x: 40, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 18, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 27, y: 46
    },
    wpoint: {
      kind: 1, x: 24, y: 32, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 20, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 151, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 68
    },
    wpoint: {
      kind: 1, x: 33, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 18, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 34, y: 54
    },
    wpoint: {
      kind: 1, x: 38, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 20, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 36
    },
    wpoint: {
      kind: 1, x: 22, y: 47, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 18, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 23, y: 43, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 20, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 30, y: 43, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 18, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 20, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 154, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 30, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 18, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 39, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  180: { name: "falling",
    pic: 18, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 20, y: 40, w: 120, h: 80, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  181: { name: "falling",
    pic: 19, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  182: { name: "falling",
    pic: 20, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  183: { name: "falling",
    pic: 21, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  184: { name: "falling",
    pic: 15, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 142, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 15, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 18, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 20, y: 40, w: 120, h: 80, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  187: { name: "falling",
    pic: 19, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  188: { name: "falling",
    pic: 20, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  189: { name: "falling",
    pic: 21, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  190: { name: "falling",
    pic: 15, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 15, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 149, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  200: { name: "mpdrain",
    pic: 19, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  201: { name: "mpdrain",
    pic: 21, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, mp: -45,
    wpoint: {
      kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  203: { name: "fire",
    pic: 18, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  204: { name: "fire",
    pic: 19, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  205: { name: "fire",
    pic: 20, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  206: { name: "fire",
    pic: 21, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  207: { name: "tired",
    pic: 0, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 64, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  210: { name: "jump",
    pic: 2, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  211: { name: "jump",
    pic: 1, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  212: { name: "jump",
    pic: 0, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 253, hit_j: 210,
    wpoint: {
      kind: 1, x: 21, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  213: { name: "dash",
    pic: 7, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  214: { name: "dash",
    pic: 11, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  215: { name: "crouch",
    pic: 2, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  216: { name: "dash",
    pic: 0, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  217: { name: "dash",
    pic: 0, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  218: { name: "stop_running",
    pic: 9, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  219: { name: "crouch2",
    pic: 1, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  220: { name: "injured",
    pic: 18, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 77, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  221: { name: "injured",
    pic: 20, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 84, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  222: { name: "injured",
    pic: 18, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  223: { name: "injured",
    pic: 20, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  224: { name: "injured",
    pic: 18, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 88, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  225: { name: "injured",
    pic: 20, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  226: { name: "injured",
    pic: 18, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  227: { name: "injured",
    pic: 19, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  228: { name: "injured",
    pic: 20, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  229: { name: "injured",
    pic: 21, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  230: { name: "lying",
    pic: 15, state: 14, wait: 0, next: 219, dvx: 0, dvy: 0, centerx: 79, centery: 142, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 15, state: 14, wait: 0, next: 219, dvx: 0, dvy: 0, centerx: 79, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  232: { name: "throw_lying_man",
    pic: 18, state: 9, wait: 7, next: 233, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  233: { name: "throw_lying_man",
    pic: 19, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  234: { name: "throw_lying_man",
    pic: 20, state: 9, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  240: { name: "standing",
    pic: 5, state: 0, wait: 3, next: 241, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  241: { name: "standing",
    pic: 6, state: 0, wait: 3, next: 242, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  242: { name: "standing",
    pic: 7, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 243,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  243: { name: "shootfingers",
    pic: 22, state: 7, wait: 4, next: 244, dvx: 0, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0, mp: 50,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  244: { name: "shootfingers",
    pic: 23, state: 7, wait: 7, next: 245, dvx: 0, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0, mp: 50,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  245: { name: "shootfingers",
    pic: 24, state: 7, wait: 3, next: 246, dvx: -2, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 130, y: 100, action: 6, dvx: 0, dvy: 0, oid: 435, facing: 0
    }
  },
  246: { name: "shootfingers",
    pic: 22, state: 7, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 79, centery: 129, hit_a: 244, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  247: { name: "down_smash",
    pic: 9, state: 7, wait: 5, next: 248, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  248: { name: "down_smash",
    pic: 16, state: 7, wait: 5, next: 249, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  249: { name: "down_smash",
    pic: 16, state: 7, wait: 15, next: 250, dvx: 0, dvy: -20, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  250: { name: "down_smash",
    pic: 999, state: 3005, wait: 0, next: 251, dvx: 550, dvy: 550, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  251: { name: "down_smash",
    pic: 999, state: 400, wait: 2, next: 252, dvx: 0, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  252: { name: "down_smash",
    pic: 999, state: 7, wait: 0, next: 253, dvx: 0, dvy: -400, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  253: { name: "down_smash",
    pic: 8, state: 100, wait: 5, next: 0, dvx: 0, dvy: 50, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  254: { name: "down_smash",
    pic: 8, state: 7, wait: 1, next: 255, dvx: 0, dvy: 0, centerx: 39, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 52, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  255: { name: "down_smash",
    pic: 8, state: 7, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 39, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 170, y: 67, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  256: { name: "down_smash",
    pic: 8, state: 7, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -80, y: 82, action: 70, dvx: 0, dvy: 0, oid: 208, facing: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  257: { name: "super_punch",
    pic: 22, state: 7, wait: 5, next: 258, dvx: -10, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0, mp: 40,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  258: { name: "super_punch",
    pic: 23, state: 7, wait: 7, next: 259, dvx: 550, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  259: { name: "super_punch",
    pic: 23, state: 7, wait: 7, next: 260, dvx: 40, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 150, dvy: 0, vrest: 15, bdefend: 100, fall: 100, injury: 75
    }
  },
  260: { name: "super_punch",
    pic: 23, state: 7, wait: 1, next: 261, dvx: 10, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 40, w: 120, h: 80
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 40, w: 120, h: 80, dvx: 150, dvy: 0, vrest: 15, bdefend: 100, fall: 100, injury: 75
    }
  },
  261: { name: "super_punch",
    pic: 22, state: 7, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 79, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    }
  },
  390: { name: "injured_mp",
    pic: 18, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, centerx: 87, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  391: { name: "injured_mp",
    pic: 18, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 87, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0, mp: -500,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  392: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 393, dvx: 10, dvy: 0, centerx: 78, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 3, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  393: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: -20, dvy: 0, centerx: 79, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: -60, injury: 15, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  394: { name: "catching2",
    pic: 999, state: 9, wait: 0, next: 395, dvx: 0, dvy: 0, centerx: 79, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  395: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: 0, dvy: 0, centerx: 79, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 0, dvy: 0, oid: 214, facing: 0
    }
  },
  396: { name: "picked_caught2",
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396
    },
    wpoint: {
      kind: 3, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  397: { name: "injured",
    pic: 18, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, centerx: 87, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 87, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 12, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 79, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 40, w: 120, h: 80
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  }
  }
});