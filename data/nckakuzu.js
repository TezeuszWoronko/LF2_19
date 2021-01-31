define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/nckakuzu.png", w: 87, h: 87, row: 10, col: 7
      },
      {
        "file(70-90)": "sprite/nckakuzu_1.png", w: 175, h: 175, row: 5, col: 5
      }
    ],
    name: "Kakuzu",
    head: "sprite/nckakuzu_f.png",
    small: "sprite/nckakuzu_s.png",
    walking_frame_rate: 4,
    walking_speed: 4.5,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 16.5,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -18.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -15,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 26
  },
  frame: {
  0: { name: "stand",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 385, hit_Da: 375, hit_Ua: 242, hit_Dj: 346, hit_Fj: 370, hit_Uj: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 9, w: 24, h: 77
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10000, y: 8000000, w: 20000, h: 500, dvx: 0, dvy: 0, bdefend: 100, fall: 100, injury: 0, arest: 15, zwidth: 999
    }
  },
  1: { name: "stand",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 385, hit_Da: 375, hit_Ua: 242, hit_Dj: 346, hit_Fj: 370, hit_Uj: 0,
    bdy: [
      {
        kind: 1, x: 35, y: 9, w: 24, h: 77
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10000, y: 8000000, w: 20000, h: 500, dvx: 0, dvy: 0, bdefend: 100, fall: 100, injury: 0, arest: 15, zwidth: 999
    }
  },
  2: { name: "stand",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 385, hit_Da: 375, hit_Ua: 242, hit_Dj: 346, hit_Fj: 370, hit_Uj: 0,
    bdy: [
      {
        kind: 1, x: 30, y: 9, w: 24, h: 77
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10000, y: 8000000, w: 20000, h: 500, dvx: 0, dvy: 0, bdefend: 100, fall: 100, injury: 0, arest: 15, zwidth: 999
    }
  },
  3: { name: "stand",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 385, hit_Da: 375, hit_Ua: 242, hit_Dj: 346, hit_Fj: 370, hit_Uj: 0,
    bdy: [
      {
        kind: 1, x: 35, y: 9, w: 24, h: 77
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10000, y: 8000000, w: 20000, h: 500, dvx: 0, dvy: 0, bdefend: 100, fall: 100, injury: 0, arest: 15, zwidth: 999
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 280, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 385, hit_Da: 375, hit_Ua: 242, hit_Dj: 346, hit_Fj: 370, hit_Uj: 0,
    bdy: [
      {
        kind: 1, x: 31, y: 15, w: 25, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 280, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 385, hit_Da: 375, hit_Ua: 242, hit_Dj: 346, hit_Fj: 370, hit_Uj: 0,
    bdy: [
      {
        kind: 1, x: 31, y: 15, w: 25, h: 71
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 280, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 285, hit_Da: 375, hit_Ua: 242, hit_Fj: 370,
    bdy: [
      {
        kind: 1, x: 34, y: 13, w: 27, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 280, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Fa: 285, hit_Da: 375, hit_Ua: 242, hit_Fj: 370,
    bdy: [
      {
        kind: 1, x: 28, y: 15, w: 28, h: 71
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  9: { name: "running",
    pic: 23, state: 2, wait: 3, next: 10, dvx: 0, dvy: 0, centerx: 44, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bdy: [
      {
        kind: 1, x: 28, y: 15, w: 28, h: 71
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  10: { name: "running",
    pic: 24, state: 2, wait: 3, next: 11, dvx: 0, dvy: 0, centerx: 49, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 25, w: 38, h: 46
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  11: { name: "running",
    pic: 25, state: 2, wait: 3, next: 9, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bdy: [
      {
        kind: 1, x: 33, y: 22, w: 39, h: 52
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 23, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 21, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 22, y: 19, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 17, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  16: { name: "heavy_obj_run",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 17, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  17: { name: "tree_jump",
    pic: 69, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 69, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 69, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 67, state: 15, wait: 5, next: 46, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 67, state: 15, wait: 5, next: 46, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 61, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 21, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 27, y: 17, w: 39, h: 56
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 92, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 62, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 20, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 15, w: 40, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 37, y: 69, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 67, state: 15, wait: 5, next: 46, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 68, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 22, w: 32, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  47: { name: "light_weapon_thw",
    pic: 69, state: 15, wait: 1, next: 48, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1, dvx: 55, dvy: -4, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  48: { name: "light_weapon_thw",
    pic: 69, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 55, state: 15, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 19, w: 30, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  51: { name: "heavy_weapon_thw",
    pic: 57, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 35, dvy: -4
    },
    bdy: [
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 22, y: 10, w: 40, h: 52
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 10, w: 36, h: 23
      },
      {
        kind: 0, x: 15, y: 18, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 22, y: 15, w: 38, h: 38
      },
      {
        kind: 0, x: 3, y: 37, w: 34, h: 26
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  60: { name: "punch",
    pic: 9, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 44, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 25, w: 38, h: 46
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: [
      {
        kind: 2, x: 21, y: -50000000000, w: 37, h: 24, vrest: 1
      },
      {
        kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  61: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 62, dvx: 2, dvy: 0, centerx: 26, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 1, x: 13, y: 14, w: 26, h: 72
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 22, y: 24, w: 55, h: 40, dvx: 3, bdefend: 16, injury: 25
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  62: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 42, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 26, h: 72
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  63: { name: "punch",
    pic: 11, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 86, hit_a: 66, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 26, h: 72
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  65: { name: "punch",
    pic: 9, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 44, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 25, w: 38, h: 46
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: [
      {
        kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
      },
      {
        kind: 2, x: 21, y: -50000000000, w: 37, h: 24, vrest: 1
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  66: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 67, dvx: 3, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 1, x: 24, y: 12, w: 21, h: 72
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: [
      {
        kind: 0, x: 21, y: 21, w: 58, h: 40, dvx: 3, bdefend: 16, injury: 15
      },
      {
        kind: 0, x: 21, y: 30000, w: 58, h: 40, dvx: 3, bdefend: 16, injury: 15
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  67: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 68, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 27, y: 11, w: 24, h: 72
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  68: { name: "punch",
    pic: 13, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 70, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 27, y: 11, w: 24, h: 72
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  70: { name: "super_punch",
    pic: 14, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 29, y: 13, w: 26, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  71: { name: "super_punch",
    pic: 15, state: 3, wait: 7, next: 72, dvx: 550, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 1, x: 27, y: 17, w: 31, h: 69
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 100, y: 86, oid: 499, action: 0, dvx: 0, dvy: 0, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  72: { name: "super_punch",
    pic: 15, state: 3, wait: 5, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 87, hit_a: 250, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 27, y: 17, w: 31, h: 69
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  80: { name: "jump_attack",
    pic: 40, state: 15, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 35, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 20, y: 18, w: 26, h: 66
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  81: { name: "jump_attack",
    pic: 70, state: 15, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 45, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 31, y: 35, w: 26, h: 67
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  82: { name: "jump_attack",
    pic: 71, state: 15, wait: 2, next: 83, dvx: 0, dvy: 0, centerx: 54, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 37, y: 27, w: 29, h: 69
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 51, y: 26, w: 99, h: 126, fall: 100, bdefend: 100, arest: 15, injury: 35, dvx: 8, dvy: -6
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  83: { name: "jump_attack",
    pic: 41, state: 15, wait: 1, next: 84, dvx: 0, dvy: 0, centerx: 23, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 6, y: 5, w: 30, h: 68
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  84: { name: "jump_attack",
    pic: 42, state: 15, wait: 0, next: 241, dvx: 0, dvy: 0, centerx: 25, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 7, y: 4, w: 27, h: 68
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  85: { name: "run_attack",
    pic: 48, state: 3, wait: 0, next: 86, dvx: 0, dvy: 0, centerx: 32, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 80,
    bdy: [
      {
        kind: 1, x: 14, y: 25, w: 33, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  86: { name: "run_attack",
    pic: 85, state: 3, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 29, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 14, y: 25, w: 33, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 36, y: 91, w: 100, h: 95, fall: 100, bdefend: 100, vrest: 15, injury: 35, dvx: 8, dvy: -6, effect: 1
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  87: { name: "run_attack",
    pic: 86, state: 3, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 29, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 14, y: 25, w: 33, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 36, y: 91, w: 140, h: 95, fall: 100, bdefend: 100, vrest: 15, injury: 35, dvx: 8, dvy: -6, effect: 1
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  88: { name: "run_attack",
    pic: 87, state: 3, wait: 2, next: 89, dvx: 0, dvy: 0, centerx: 29, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 14, y: 25, w: 33, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  89: { name: "run_attack",
    pic: 86, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 14, y: 25, w: 33, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  100: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 43, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  102: { name: "rowing",
    pic: 17, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    sound: "1/017",
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 17, w: 43, h: 62
    }
  },
  103: { name: "rowing",
    pic: 999, state: 6, wait: 0, next: 104, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 17, w: 43, h: 62
    }
  },
  104: { name: "rowing",
    pic: 999, state: 3005, wait: 2, next: 105, dvx: 70, dvy: 550, dvz: 10, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  105: { name: "rowing",
    pic: 999, state: 15, wait: 0, next: 106, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  106: { name: "rowing",
    pic: 8, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 35, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 59, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  108: { name: "rowing",
    pic: 66, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 43, y: 66, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 54, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 16, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 19, w: 42, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  111: { name: "defend",
    pic: 16, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 16, y: 19, w: 42, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 29, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  113: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  114: { name: "broken_defend",
    pic: 31, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 52, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  115: { name: "picking_light",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 38, y: 47, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  116: { name: "picking_heavy",
    pic: 60, state: 15, wait: 1, next: 117, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 47, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  117: { name: "picking_heavy",
    pic: 61, state: 15, wait: 5, next: 50, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  130: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  131: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 26, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  132: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 39, y: 51, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 36
    },
    wpoint: {
      kind: 1, x: 35, y: 46, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 37, y: 28
    },
    wpoint: {
      kind: 1, x: 41, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 22
    },
    wpoint: {
      kind: 1, x: 40, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 27, y: 46
    },
    wpoint: {
      kind: 1, x: 24, y: 32, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 68
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 34, y: 54
    },
    wpoint: {
      kind: 1, x: 38, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 36
    },
    wpoint: {
      kind: 1, x: 22, y: 47, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 23, y: 43, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 32, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 30, y: 43, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 30, y: 44, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 39, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  145: { name: "hrt_rp2",
    pic: 88, state: 15, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 14, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  146: { name: "hrt_rp2",
    pic: 67, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  150: { name: "catching",
    pic: 90, state: 9, wait: 5, next: 151, dvx: 550, dvy: 550, centerx: 14, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 185, y: 120, vaction: 133, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  151: { name: "catching",
    pic: 36, state: 9, wait: 1, next: 152, dvx: 550, dvy: 550, centerx: 18, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 20, vaction: 133, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  152: { name: "catching",
    pic: 37, state: 9, wait: 0, next: 153, dvx: 550, dvy: 550, centerx: 18, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 70, y: 20, vaction: 133, injury: 120, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 202, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  153: { name: "catching",
    pic: 37, state: 9, wait: 1, next: 363, dvx: 550, dvy: 550, centerx: 18, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 20, vaction: 133, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 2, x: 39, y: 42, action: 40, dvx: 0, dvy: 0, oid: 500, facing: 0
    }
  },
  155: { name: "wind",
    pic: 44, state: 3, wait: 0, next: 156, dvx: 2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 50,
    bdy: {
      kind: 1, x: 24, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  156: { name: "wind",
    pic: 45, state: 3, wait: 1, next: 157, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 387, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  157: { name: "wind",
    pic: 64, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 40, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  160: { name: "thunder",
    pic: 44, state: 3, wait: 0, next: 161, dvx: 2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 40,
    bdy: {
      kind: 1, x: 24, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  161: { name: "thunder",
    pic: 45, state: 3, wait: 1, next: 162, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 246, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  162: { name: "thunder",
    pic: 64, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 40, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  165: { name: "stand2",
    pic: 60, state: 14, wait: 3, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 22, y: 13, w: 35, h: 74
    },
    itr: {
      kind: 4, x: 22, y: 13, w: 35, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 29, y: 14, w: 30, h: 73
    },
    itr: {
      kind: 4, x: 29, y: 14, w: 30, h: 73, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -4, dvy: 0, centerx: 43, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 9, y: 25, w: 69, h: 30
    },
    itr: {
      kind: 4, x: 9, y: 25, w: 69, h: 30, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 44, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 4, y: 47, w: 75, h: 27
    },
    itr: {
      kind: 4, x: 4, y: 47, w: 75, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 44, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 44, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 22, y: 13, w: 35, h: 74
    },
    itr: {
      kind: 4, x: 22, y: 13, w: 35, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 29, y: 14, w: 30, h: 73
    },
    itr: {
      kind: 4, x: 29, y: 14, w: 30, h: 73, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: 4, dvy: 0, centerx: 43, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 9, y: 25, w: 69, h: 30
    },
    itr: {
      kind: 4, x: 9, y: 25, w: 69, h: 30, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 44, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 4, y: 47, w: 75, h: 27
    },
    itr: {
      kind: 4, x: 4, y: 47, w: 75, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 44, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 44, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centery: 87, hit_d: 0, hit_j: 268,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centery: 87, hit_d: 0, hit_j: 268, mp: -45,
    wpoint: {
      kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  203: { name: "fire",
    pic: 18, state: 18, wait: 3, next: 204, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 30, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  204: { name: "fire",
    pic: 19, state: 18, wait: 5, next: 205, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 18, state: 18, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 19, state: 18, wait: 0, next: 205, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  210: { name: "jump",
    pic: 26, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 26, y: 70, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  211: { name: "jump",
    pic: 27, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 45, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 26, y: 30, w: 34, h: 57
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 29, y: 75, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  212: { name: "jump",
    pic: 28, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 51, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: [
      {
        kind: 1, x: 35, y: 2, w: 29, h: 71
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 47, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  213: { name: "dash",
    pic: 28, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 46, y: 18, w: 22, h: 25
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 13, y: 54, w: 18, h: 17
      }
    ]
  },
  214: { name: "dash",
    pic: 28, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 14, w: 19, h: 27
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  215: { name: "crouch",
    pic: 26, state: 4, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 26, y: 70, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  216: { name: "dash",
    pic: 28, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 34, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 15, w: 24, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  217: { name: "dash",
    pic: 28, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 37, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 13, w: 29, h: 51
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  218: { name: "stop_running",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 25, y: 47, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 17, y: 25, w: 30, h: 55
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  219: { name: "crouch2",
    pic: 26, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 26, y: 70, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  220: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 22, y: 13, w: 35, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  221: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 38, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 22, y: 13, w: 35, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  222: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 30, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  223: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 41, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 30, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  224: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 22, y: 13, w: 35, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  225: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 38, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 22, y: 13, w: 35, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  226: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 30, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  227: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 30, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  228: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 30, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  229: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 235,
    bdy: [
      {
        kind: 1, x: 29, y: 14, w: 30, h: 73
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 44, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ],
    wpoint: {
      kind: 1, x: 35, y: 44, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 44, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ],
    wpoint: {
      kind: 1, x: 35, y: 44, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  235: { name: "water_replacement",
    pic: 35, state: 15, wait: 1, next: 238, dvx: 0, dvy: 0, centerx: 44, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "water_replacement",
    pic: 999, state: 15, wait: 1, next: 239, dvx: 0, dvy: 0, centerx: 50, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 59, action: 55, dvx: 0, dvy: 0, oid: 451, facing: 0
    }
  },
  239: { name: "water_replacement",
    pic: 999, state: 15, wait: 1, next: 240, dvx: 75, dvy: -8, centerx: 50, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0
  },
  240: { name: "water_replacement",
    pic: 999, state: 15, wait: 1, next: 999, dvx: 550, dvy: 550, centerx: 50, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 65, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  241: { name: "jump_attack",
    pic: 43, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 37, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 16, y: 5, w: 30, h: 68
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  242: { name: "arm_grab",
    pic: 24, state: 18, wait: 1, next: 243, dvx: 65, dvy: 0, dvz: 3, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 85,
    bdy: [
      {
        kind: 0, x: 29, y: 19, w: 34, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 49, y: 10, w: 44, h: 67,
      catchingact: [244, 244], caughtact: [130, 130]
    }
  },
  243: { name: "arm_grab",
    pic: 60, state: 18, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 19, w: 34, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 49, y: 10, w: 44, h: 67,
      catchingact: [244, 244], caughtact: [130, 130]
    }
  },
  244: { name: "arm_grab",
    pic: 51, state: 9, wait: 3, next: 245, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 26, y: 11, w: 25, h: 75
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 62, y: 23, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  245: { name: "arm_grab",
    pic: 52, state: 9, wait: 2, next: 246, dvx: 0, dvy: 0, centerx: 21, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/kak3",
    bdy: [
      {
        kind: 0, x: 6, y: 11, w: 25, h: 75
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 74, y: 3, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  246: { name: "arm_grab",
    pic: 74, state: 9, wait: 2, next: 247, dvx: 0, dvy: 0, centerx: 35, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 97, y: 78, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  247: { name: "arm_choke",
    pic: 75, state: 9, wait: 8, next: 248, dvx: 0, dvy: 0, centerx: 51, centery: 175, hit_a: 0, hit_d: 265, hit_j: 0, mp: -25,
    bdy: [
      {
        kind: 0, x: 36, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, injury: 9
    }
  },
  248: { name: "arm_choke",
    pic: 75, state: 9, wait: 8, next: 249, dvx: 0, dvy: 0, centerx: 51, centery: 175, hit_a: 0, hit_d: 265, hit_j: 0, mp: -25,
    bdy: [
      {
        kind: 0, x: 36, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, injury: 9
    }
  },
  249: { name: "arm_choke",
    pic: 75, state: 9, wait: 8, next: 262, dvx: 0, dvy: 0, centerx: 51, centery: 175, hit_a: 0, hit_d: 265, hit_j: 0, mp: -25,
    bdy: [
      {
        kind: 0, x: 36, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, injury: 9
    }
  },
  250: { name: "double_extendarm",
    pic: 47, state: 3, wait: 3, next: 251, dvx: 0, dvy: 0, centerx: 36, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 12, w: 25, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  251: { name: "double_extendarm",
    pic: 48, state: 3, wait: 1, next: 252, dvx: 0, dvy: 0, centerx: 38, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 26, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  252: { name: "double_extendarm",
    pic: 49, state: 15, wait: 0, next: 253, dvx: 0, dvy: 0, centerx: 27, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 25, w: 33, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 21, y: 30, w: 67, h: 21, dvx: 15, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  253: { name: "double_extendarm",
    pic: 50, state: 15, wait: 0, next: 254, dvx: 0, dvy: 0, centerx: 27, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 25, w: 33, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 67, y: 60, w: 15, h: 23, dvx: 15, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  254: { name: "double_extendarm",
    pic: 72, state: 15, wait: 0, next: 255, dvx: 0, dvy: 0, centerx: 28, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 111, w: 37, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 88, y: 121, w: 46, h: 17, dvx: 15, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  255: { name: "double_extendarm",
    pic: 73, state: 15, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 22, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 111, w: 37, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 110, y: 124, w: 60, h: 14, dvx: 15, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  256: { name: "double_extendarm",
    pic: 76, state: 15, wait: 0, next: 257, dvx: 0, dvy: 0, centerx: 21, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 111, w: 37, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 136, y: 119, w: 51, h: 17, dvx: 15, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  257: { name: "double_extendarm",
    pic: 73, state: 15, wait: 0, next: 258, dvx: 0, dvy: 0, centerx: 22, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 111, w: 37, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 110, y: 124, w: 60, h: 14, dvx: -7, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  258: { name: "double_extendarm",
    pic: 72, state: 15, wait: 0, next: 259, dvx: 0, dvy: 0, centerx: 28, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 111, w: 37, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 88, y: 121, w: 46, h: 17, dvx: -7, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  259: { name: "double_extendarm",
    pic: 50, state: 15, wait: 0, next: 260, dvx: 0, dvy: 0, centerx: 27, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 25, w: 33, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 67, y: 60, w: 15, h: 23, dvx: -7, dvy: -9, fall: 100, bdefend: 100, arest: 15, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  260: { name: "double_extendarm",
    pic: 48, state: 3, wait: 1, next: 261, dvx: 0, dvy: 0, centerx: 38, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 26, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  261: { name: "double_extendarm",
    pic: 47, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 36, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 12, w: 25, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  262: { name: "arm_choke",
    pic: 75, state: 9, wait: 8, next: 263, dvx: 0, dvy: 0, centerx: 51, centery: 175, hit_a: 0, hit_d: 265, hit_j: 0, mp: -25,
    bdy: [
      {
        kind: 0, x: 36, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, injury: 9
    }
  },
  263: { name: "arm_choke",
    pic: 75, state: 9, wait: 8, next: 264, dvx: 0, dvy: 0, centerx: 51, centery: 175, hit_a: 0, hit_d: 265, hit_j: 0, mp: -25,
    bdy: [
      {
        kind: 0, x: 36, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, injury: 9
    }
  },
  264: { name: "arm_choke",
    pic: 75, state: 9, wait: 8, next: 247, dvx: 0, dvy: 0, centerx: 51, centery: 175, hit_a: 0, hit_d: 265, hit_j: 0, mp: -25,
    bdy: [
      {
        kind: 0, x: 36, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, injury: 9
    }
  },
  265: { name: "arm_grab",
    pic: 74, state: 9, wait: 2, next: 266, dvx: 0, dvy: 0, centerx: 35, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 98, w: 97, h: 83
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 124, y: 74, cover: 11, vaction: 181, throwvx: 1, throwvy: -1, throwvz: 3, throwinjury: 0
    }
  },
  266: { name: "arm_grab",
    pic: 52, state: 9, wait: 3, next: 267, dvx: 0, dvy: 0, centerx: 21, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 6, y: 11, w: 25, h: 75
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  267: { name: "arm_grab",
    pic: 51, state: 9, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 40, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 26, y: 11, w: 25, h: 75
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  270: { name: "charge",
    pic: 44, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, centerx: 47, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  271: { name: "charge",
    pic: 45, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 38, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 2, x: 47, y: 30, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 29, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  272: { name: "charge",
    pic: 46, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 274, hit_d: 274, hit_j: 274,
    opoint: {
      kind: 1, x: 47, y: 40, action: 0, dvx: 0, dvy: 0, oid: 203
    },
    wpoint: {
      kind: 1, x: 47, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  273: { name: "charge",
    pic: 46, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: {
      kind: 1, x: 47, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  274: { name: "charge",
    pic: 45, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 38, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 29, weaponact: 1000, attacking: 0, dvx: 100, dvy: -1, cover: 1
    },
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    }
  },
  275: { name: "combo",
    pic: 55, state: 3, wait: 2, next: 276, dvx: 0, dvy: 0, centerx: 35, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 20, y: 13, w: 30, h: 74
    }
  },
  276: { name: "combo",
    pic: 56, state: 3, wait: 1, next: 277, dvx: 2, dvy: 0, centerx: 24, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 10, y: 17, w: 30, h: 70
    }
  },
  277: { name: "combo",
    pic: 57, state: 3, wait: 0, next: 278, dvx: 0, dvy: 0, centerx: 23, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 10, y: 17, w: 30, h: 70
    },
    itr: {
      kind: 0, x: 37, y: 24, w: 39, h: 27, dvx: 5, bdefend: 16, injury: 30
    }
  },
  278: { name: "combo",
    pic: 58, state: 3, wait: 0, next: 279, dvx: 0, dvy: 0, centerx: 20, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 6, y: 17, w: 30, h: 70
    }
  },
  279: { name: "combo",
    pic: 87, state: 3, wait: 3, next: 290, dvx: 0, dvy: 0, centerx: 35, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 20, y: 106, w: 34, h: 70
    },
    itr: {
      kind: 0, x: 90, y: 113, w: 46, h: 21, dvx: 1, bdefend: 16, injury: 30
    }
  },
  280: { name: "combo",
    pic: 77, state: 15, wait: 0, next: 281, dvx: 2, dvy: 0, centerx: 38, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 24, y: 107, w: 29, h: 70
    },
    itr: [
      {
        kind: 0, x: 46, y: 50, w: 100, h: 112, dvx: 2, dvy: -15, fall: 100, bdefend: 100, vrest: 10, injury: 40
      },
      {
        kind: 2, x: 21, y: -50000000000, w: 37, h: 24, vrest: 1
      }
    ]
  },
  281: { name: "combo",
    pic: 78, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 31, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    itr: {
      kind: 0, x: 41, y: 38, w: 65, h: 87, dvx: 2, dvy: -5, fall: 100, bdefend: 100, vrest: 10, injury: 40
    }
  },
  282: { name: "combo",
    pic: 79, state: 3, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 62, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 40, y: 107, w: 29, h: 70
    }
  },
  283: { name: "combo",
    pic: 80, state: 3, wait: 2, next: 284, dvx: 0, dvy: 0, centerx: 54, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 32, y: 107, w: 29, h: 70
    }
  },
  284: { name: "combo",
    pic: 81, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 46, centery: 175, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 24, y: 107, w: 29, h: 70
    }
  },
  285: { name: "combo",
    pic: 82, state: 15, wait: 1, next: 286, dvx: 2, dvy: 0, centerx: 51, centery: 166, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 36, y: 95, w: 34, h: 70
    },
    itr: [
      {
        kind: 0, x: 55, y: 55, w: 100, h: 150, dvx: 0, dvy: 10, fall: 100, bdefend: 100, vrest: 15, injury: 60
      },
      {
        kind: 0, x: 55, y: 30000, w: 100, h: 150, dvx: 0, dvy: 10, fall: 100, bdefend: 100, vrest: 15, injury: 60
      }
    ]
  },
  286: { name: "combo",
    pic: 83, state: 3, wait: 3, next: 287, dvx: 0, dvy: 0, centerx: 41, centery: 173, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 26, y: 113, w: 34, h: 62
    }
  },
  287: { name: "combo",
    pic: 84, state: 3, wait: 1, next: 288, dvx: 0, dvy: 0, centerx: 46, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 26, y: 113, w: 34, h: 62
    }
  },
  288: { name: "combo",
    pic: 59, state: 3, wait: 1, next: 289, dvx: 0, dvy: 0, centerx: 27, centery: 87, hit_a: 85, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 13, y: 24, w: 35, h: 63
    }
  },
  289: { name: "combo",
    pic: 60, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 32, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 24, w: 35, h: 63
    }
  },
  334: { name: "summon",
    pic: 60, state: 15, wait: 0, next: 335, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  335: { name: "summon",
    pic: 60, state: 15, wait: 0, next: 336, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -90, y: 80, action: 65, dvx: 0, dvy: 0, oid: 451, facing: 0
    }
  },
  336: { name: "summon",
    pic: 60, state: 15, wait: 0, next: 337, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 80, action: 65, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  337: { name: "summon",
    pic: 60, state: 15, wait: 0, next: 338, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 80, action: 65, dvx: 0, dvy: 0, oid: 453, facing: 0
    }
  },
  338: { name: "summon",
    pic: 60, state: 15, wait: 0, next: 339, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 0, dvx: 0, dvy: 0, oid: 450, facing: 0
    }
  },
  339: { name: "summon",
    pic: 60, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "resummoning",
    pic: 44, state: 15, wait: 1, next: 341, dvx: 550, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 12, w: 25, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  341: { name: "resummoning",
    pic: 45, state: 15, wait: 1, next: 342, dvx: 550, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 12, w: 25, h: 74
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  342: { name: "resummoning",
    pic: 46, state: 15, wait: 0, next: 343, dvx: 550, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -90, y: 88, action: 70, dvx: 0, dvy: 0, oid: 451, facing: 0
    }
  },
  343: { name: "resummoning",
    pic: 46, state: 15, wait: 0, next: 344, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 88, action: 70, dvx: 0, dvy: 0, oid: 452, facing: 0
    }
  },
  344: { name: "resummoning",
    pic: 46, state: 15, wait: 0, next: 345, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 88, action: 70, dvx: 0, dvy: 0, oid: 453, facing: 0
    }
  },
  345: { name: "resummoning",
    pic: 46, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 8, action: 65, dvx: 0, dvy: 0, oid: 450, facing: 0
    }
  },
  346: { name: "heart",
    pic: 59, state: 15, wait: 7, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 270,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 40, y: 30000, w: 25, h: 65,
      catchingact: [348, 348], caughtact: [130, 130]
    }
  },
  347: { name: "heart",
    pic: 60, state: 18, wait: 3, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 40, y: 30000, w: 25, h: 65,
      catchingact: [348, 348], caughtact: [130, 130]
    }
  },
  348: { name: "catching",
    pic: 53, state: 9, wait: 12, next: 349, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/kakuzu1",
    cpoint: {
      kind: 1, x: 75, y: 30, vaction: 133, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  349: { name: "catching",
    pic: 61, state: 9, wait: 1, next: 350, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 75, y: 30, injury: 120, vaction: 133, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  350: { name: "catching",
    pic: 51, state: 9, wait: 12, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 65, y: 20, vaction: 133, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0
    },
    wpoint: {
      kind: 1, x: 25, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  351: { name: "catching",
    pic: 52, state: 9, wait: 2, next: 352, dvx: 0, dvy: 0, centerx: 17, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 75, y: 10, cover: 11, vaction: 181, throwvx: 16, throwvy: -8, throwvz: 3, throwinjury: 10
    },
    wpoint: {
      kind: 1, x: 6, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  352: { name: "catching",
    pic: 52, state: 9, wait: 2, next: 362, dvx: 0, dvy: 0, centerx: 17, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/heart",
    wpoint: {
      kind: 1, x: 6, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  353: { name: "heart_implanting",
    pic: 26, state: 15, wait: 0, next: 354, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 0, y: 0, weaponact: 121, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  354: { name: "heart_implanting",
    pic: 26, state: 15, wait: 5, next: 360, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 26, y: 70, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 0, y: 900000, w: 79, h: 79, dvx: 357
    }
  },
  355: { name: "heart_implant_check",
    pic: 999, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 800000, w: 79, h: 79
    },
    itr: {
      kind: 0, x: 0, y: 800000, w: 79, h: 79, dvx: 0, dvy: 0, fall: 100, bdefend: 100, arest: 15, injury: 0, effect: 5
    }
  },
  356: { name: "heart_implant_check2",
    pic: 999, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 900000, w: 79, h: 79
    }
  },
  357: { name: "heart_implanting",
    pic: 62, state: 15, wait: 2, next: 358, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: -999, y: -999, weaponact: 1000, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  358: { name: "heart_implanting",
    pic: 27, state: 15, wait: 7, next: 359, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 90, y: 20, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  359: { name: "heart_implanting",
    pic: 27, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 0, y: 0, action: 135, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  360: { name: "heart_absorbing",
    pic: 62, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 26, y: 70, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  361: { name: "heart_absorbing",
    pic: 27, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    bdy: [
      {
        kind: 1, x: 23, y: 25, w: 33, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: 10000000, w: 79, h: 79
      }
    ],
    itr: {
      kind: 0, x: 0, y: 5800065, w: 100, h: 500, dvx: 0, effect: 6067
    },
    wpoint: {
      kind: 1, x: 26, y: 70, weaponact: 9998, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  362: { name: "heart_swal",
    pic: 51, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: -876427836875656200, w: 100, h: 20
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 315, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  363: { name: "catching",
    pic: 52, state: 9, wait: 2, next: 364, dvx: 0, dvy: 0, centerx: 17, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 75, y: 10, cover: 11, vaction: 181, throwvx: 16, throwvy: -8, throwvz: 3, throwinjury: 10
    },
    wpoint: {
      kind: 1, x: 6, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  364: { name: "catching",
    pic: 52, state: 9, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 17, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 6, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  365: { name: "fire",
    pic: 45, state: 3, wait: 0, next: 366, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 384, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  366: { name: "fire",
    pic: 45, state: 3, wait: 0, next: 367, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 387, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  367: { name: "fire",
    pic: 45, state: 3, wait: 0, next: 377, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 246, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  370: { name: "water_wave",
    pic: 44, state: 3, wait: 0, next: 371, dvx: 2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 115,
    bdy: {
      kind: 1, x: 24, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  371: { name: "water_wave",
    pic: 45, state: 3, wait: 1, next: 372, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 81, y: 87, action: 100, dvx: 0, dvy: 0, oid: 416, facing: 0
    }
  },
  372: { name: "water_wave",
    pic: 64, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 40, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  375: { name: "fire",
    pic: 44, state: 3, wait: 0, next: 376, dvx: 2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 320,
    bdy: [
      {
        kind: 1, x: 24, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  376: { name: "fire",
    pic: 45, state: 3, wait: 0, next: 365, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 380, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  377: { name: "fire",
    pic: 64, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 40, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  378: { name: "earth",
    pic: 44, state: 3, wait: 0, next: 379, dvx: 2, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    bdy: {
      kind: 1, x: 24, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  379: { name: "earth",
    pic: 45, state: 3, wait: 1, next: 380, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 18, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 384, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  380: { name: "earth",
    pic: 64, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 40, y: 107, w: 29, h: 70
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  385: { name: "hrt_rp2",
    pic: 67, state: 15, wait: 5, next: 386, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  386: { name: "hrt_rp2",
    pic: 68, state: 15, wait: 1, next: 387, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  387: { name: "hrt_rp2",
    pic: 88, state: 15, wait: 1, next: 388, dvx: 0, dvy: 0, centerx: 14, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 81, y: 80000, w: 29, h: 100,
      catchingact: [150, 150], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  388: { name: "hrt_rp2",
    pic: 89, state: 15, wait: 1, next: 389, dvx: 0, dvy: 0, centerx: 14, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 114, y: 80000, w: 30, h: 100,
      catchingact: [150, 150], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  389: { name: "hrt_rp2",
    pic: 90, state: 15, wait: 3, next: 145, dvx: 0, dvy: 0, centerx: 14, centery: 175, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 1, x: 40, y: 107, w: 29, h: 70
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 157, y: 80000, w: 38, h: 100,
      catchingact: [150, 150], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, centerx: 47, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  391: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 47, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0, mp: -500,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  392: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 393, dvx: 10, dvy: 0, centerx: 38, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 3, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  393: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: -20, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: -60, injury: 15, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  394: { name: "catching2",
    pic: 999, state: 9, wait: 0, next: 395, dvx: 0, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  395: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: 0, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 0, dvy: 0, oid: 214, facing: 0
    }
  },
  396: { name: "picked_caught2",
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396
    },
    wpoint: {
      kind: 3, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, centerx: 47, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 47, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 12, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  500: { name: "defend2",
    pic: 16, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 110, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  501: { name: "defendend",
    pic: 16, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 16, y: 19, w: 42, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  }
  }
});