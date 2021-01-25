define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/orochimaru.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/orochimaru_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-153)": "sprite/orochimaru_3.png", w: 311, h: 95, row: 2, col: 7
      }
    ],
    name: "Orochimaru",
    head: "sprite/orochimaru_f.png",
    small: "sprite/orochimaru_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 18,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -18.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -13,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 30
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 34, y: 53, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 35, y: 53, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 36, y: 53, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 350, hit_ja: 270, hit_Da: 240, hit_Uj: 280, hit_Dj: 295, hit_Ua: 252,
    wpoint: {
      kind: 1, x: 34, y: 53, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 32, y: 53, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 53, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 32, y: 53, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 125, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 25, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  13: { name: "heavy_obj_walk",
    pic: 126, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 25, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  14: { name: "heavy_obj_walk",
    pic: 127, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 24, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 128, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 23, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  16: { name: "heavy_obj_run",
    pic: 125, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 25, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "tree_jump",
    pic: 138, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 139, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 139, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 54, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 54, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  26: { name: "normal_weapon_atck",
    pic: 92, state: 3, wait: 2, next: 27, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  27: { name: "normal_weapon_atck",
    pic: 74, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: {
      kind: 0, x: 49, y: 34, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 20, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  28: { name: "normal_weapon_atck",
    pic: 75, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 23, w: 31, h: 55
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 50, state: 15, wait: 3, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  35: { name: "run_weapon_atck",
    pic: 54, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 50, state: 15, wait: 3, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 37, y: 69, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 33, h: 45
    }
  },
  45: { name: "light_weapon_thw",
    pic: 54, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 55, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 56, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1, dvx: 55, dvy: -4, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 54, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 56, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 40, dvy: -4, dvz: 2
    },
    bdy: [
      {
        kind: 0, x: 8, y: 39, w: 61, h: 23
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 50, state: 15, wait: 3, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 51, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 10, w: 36, h: 23
      },
      {
        kind: 0, x: 15, y: 18, w: 30, h: 43
      }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 62, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 22, y: 15, w: 38, h: 38
      },
      {
        kind: 0, x: 3, y: 37, w: 34, h: 26
      }
    ]
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0976",
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 23, y: 35, w: 37, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 300, hit_j: 320,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 53, y: 36, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15, effect: 0
      },
      {
        kind: 0, x: 53, y: 180000000000, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15, effect: 5
      }
    ],
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 300, hit_j: 320,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  63: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 66, hit_d: 300, hit_j: 320,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  65: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 60, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 26, y: 66, w: 37, h: 23, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 27, y: 17, w: 31, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  66: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 300, hit_j: 320,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 50, y: 30, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 15, effect: 0
      },
      {
        kind: 0, x: 53, y: 180000000000, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15, effect: 5
      }
    ],
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  67: { name: "punch",
    pic: 14, state: 3, wait: 2, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 300, hit_j: 320,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  68: { name: "punch",
    pic: 14, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 70, hit_d: 300, hit_j: 320,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  70: { name: "super_punch",
    pic: 15, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0974",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  71: { name: "super_punch",
    pic: 16, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  72: { name: "super_punch",
    pic: 17, state: 3, wait: 5, next: 73, dvx: 0, dvy: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  73: { name: "super_punch",
    pic: 15, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  75: { name: "super_punch",
    pic: 38, state: 3, wait: 0, next: 76, dvx: 0, dvy: 0, centerx: 18, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  76: { name: "super_punch",
    pic: 38, state: 3, wait: 0, next: 77, dvx: 0, dvy: 0, centerx: 18, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 60, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 15, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  77: { name: "super_punch",
    pic: 39, state: 3, wait: 1, next: 78, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  78: { name: "super_punch",
    pic: 41, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  80: { name: "jump_attack",
    pic: 50, state: 3, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 20, y: 18, w: 34, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  81: { name: "jump_attack",
    pic: 51, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  82: { name: "jump_attack",
    pic: 52, state: 3, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 20, y: 18, w: 34, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  83: { name: "jump_attack",
    pic: 53, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 22, y: 19, w: 32, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  85: { name: "run_attack",
    pic: 26, state: 3, wait: 1, next: 86, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0954",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  86: { name: "run_attack",
    pic: 27, state: 3, wait: 2, next: 87, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40
    }
  },
  87: { name: "run_attack",
    pic: 28, state: 3, wait: 2, next: 88, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40
    }
  },
  88: { name: "run_attack",
    pic: 29, state: 3, wait: 5, next: 89, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  89: { name: "run_attack",
    pic: 15, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 42, state: 15, wait: 1, next: 91, dvx: 0, dvy: -1, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0972",
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 25, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  91: { name: "dash_attack",
    pic: 43, state: 15, wait: 2, next: 92, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 7, y: 19, w: 37, h: 45
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  92: { name: "dash_attack",
    pic: 44, state: 15, wait: 2, next: 93, dvx: 0, dvy: 0, centerx: 25, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 35, y: 5, w: 47, h: 60, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70
    },
    bdy: [
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  93: { name: "dash_attack",
    pic: 45, state: 15, wait: 1, next: 94, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
      }
    ],
    itr: {
      kind: 0, x: 35, y: 5, w: 47, h: 60, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70
    }
  },
  94: { name: "dash_attack",
    pic: 46, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
      }
    ]
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 27, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 14, y: 19, w: 28, h: 36
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  100: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 43, y: 66, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 54, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  102: { name: "rowing",
    pic: 36, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
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
    pic: 36, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 35, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 59, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 54, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 40, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 40, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 31, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 60, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 38, y: 76, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  116: { name: "picking_heavy",
    pic: 60, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  117: { name: "picking_heavy",
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  120: { name: "catching",
    pic: 85, state: 9, wait: 0, next: 122, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 86, state: 9, wait: 0, next: 123, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2275",
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 88, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 25, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  125: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 35, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  130: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 36
    },
    wpoint: {
      kind: 1, x: 35, y: 46, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 37, y: 28
    },
    wpoint: {
      kind: 1, x: 41, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 22
    },
    wpoint: {
      kind: 1, x: 40, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 34, y: 54
    },
    wpoint: {
      kind: 1, x: 38, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 36
    },
    wpoint: {
      kind: 1, x: 22, y: 47, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 23, y: 43, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 32, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 30, y: 43, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 1, x: 30, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 39, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0963",
    wpoint: {
      kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 0, x: 22, y: 20, w: 24, h: 23
    }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 20, h: 18
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 0, x: 22, y: 30, w: 27, h: 21
    }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0963",
    wpoint: {
      kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 31, y: 24, w: 25, h: 23
    }
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 0, x: 28, y: 27, w: 24, h: 26
    }
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 30, y: 31, w: 24, h: 21
    }
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 0, x: 30, y: 39, w: 23, h: 21
    }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -45,
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
  207: { name: "tired",
    pic: 61, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 64, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 44, y: 28, w: 22, h: 37
      },
      {
        kind: 0, x: 28, y: 47, w: 28, h: 35
      }
    ]
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 33, y: 33, w: 20, h: 48
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 15, y: 41, w: 48, h: 20
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 15, w: 21, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 46, y: 18, w: 22, h: 25
      },
      {
        kind: 0, x: 28, y: 29, w: 21, h: 33
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 40, w: 29, h: 38
    }
  },
  216: { name: "dash",
    pic: 67, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 67, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 60, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 25, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 17, y: 25, w: 30, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 47, y: 23, w: 23, h: 54
      },
      {
        kind: 0, x: 29, y: 41, w: 20, h: 37
      }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    sound: "1/0966",
    wpoint: {
      kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 46, y: 23, w: 21, h: 56
      },
      {
        kind: 0, x: 30, y: 40, w: 17, h: 41
      }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 24, w: 39, h: 31
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    sound: "1/0968",
    wpoint: {
      kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 27, y: 56, w: 36, h: 24
      }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 220, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 32, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 52, y: 38, w: 20, h: 19
      }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 35, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 42, h: 58
    }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 24, w: 39, h: 57
    }
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 335,
    wpoint: {
      kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 29, y: 26, w: 37, h: 53
    }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 315,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: 30000, w: 79, h: 500
    }
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 315,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: 30000, w: 79, h: 500
    }
  },
  232: { name: "throw_lying_man",
    pic: 37, state: 9, wait: 7, next: 233, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  233: { name: "throw_lying_man",
    pic: 39, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 39, w: 61, h: 23
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 29, state: 9, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 39, w: 61, h: 23
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  235: { name: "sword",
    pic: 60, state: 3, wait: 0, next: 236, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  236: { name: "sword",
    pic: 31, state: 3, wait: 0, next: 237, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0955",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  237: { name: "sword",
    pic: 47, state: 3, wait: 0, next: 238, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/059",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  238: { name: "sword",
    pic: 48, state: 3, wait: 1, next: 239, dvx: 0, dvy: 0, centerx: 19, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  239: { name: "sword",
    pic: 49, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 35, action: 115, dvx: 100, dvy: 0, oid: 208, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  240: { name: "snake",
    pic: 70, state: 3, wait: 1, next: 247, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    sound: "1/0958",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  241: { name: "snake",
    pic: 71, state: 3, wait: 1, next: 242, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  242: { name: "snake",
    pic: 72, state: 3, wait: 1, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  243: { name: "snake",
    pic: 73, state: 3, wait: 1, next: 244, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  244: { name: "snake",
    pic: 74, state: 3, wait: 1, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  245: { name: "snake",
    pic: 75, state: 3, wait: 1, next: 246, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  246: { name: "snake",
    pic: 76, state: 3, wait: 1, next: 247, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  247: { name: "snake",
    pic: 77, state: 3, wait: 1, next: 248, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  248: { name: "snake",
    pic: 78, state: 3, wait: 0, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: 110, y: 85, action: 0, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  249: { name: "snake",
    pic: 78, state: 3, wait: 0, next: 250, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: -20, y: 85, action: 0, dvx: 0, dvy: 0, oid: 224, facing: 1
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  250: { name: "snake",
    pic: 79, state: 3, wait: 2, next: 251, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  251: { name: "snake",
    pic: 80, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  252: { name: "paralyze",
    pic: 23, state: 3, wait: 1, next: 253, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 180,
    sound: "1/0962",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  253: { name: "paralyze",
    pic: 24, state: 3, wait: 1, next: 254, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  254: { name: "paralyze",
    pic: 25, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 315, dvx: 15, dvy: 0, oid: 205, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  255: { name: "shadow",
    pic: 81, state: 14, wait: 2, next: 256, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 95,
    sound: "1/0960"
  },
  256: { name: "shadow",
    pic: 82, state: 15, wait: 2, next: 257, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  257: { name: "shadow",
    pic: 83, state: 14, wait: 2, next: 258, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  258: { name: "shadow",
    pic: 84, state: 15, wait: 2, next: 259, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  259: { name: "shadow",
    pic: 83, state: 14, wait: 2, next: 260, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  260: { name: "shadow",
    pic: 82, state: 15, wait: 2, next: 261, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "shadow",
    pic: 81, state: 14, wait: 2, next: 262, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "shadow",
    pic: 80, state: 15, wait: 2, next: 999, dvx: 7, dvy: 0, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "charge",
    pic: 77, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/0961",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  271: { name: "charge",
    pic: 78, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 2, x: 42, y: 51, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
    },
    wpoint: {
      kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  272: { name: "charge",
    pic: 79, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    opoint: {
      kind: 1, x: 40, y: 45, action: 4, dvx: 0, dvy: 0, oid: 203
    },
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      }
    ]
  },
  273: { name: "charge",
    pic: 80, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      }
    ]
  },
  274: { name: "charge",
    pic: 77, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, dvx: 100, dvy: -1, cover: 1
    },
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  275: { name: "manda",
    pic: 87, state: 3, wait: 1, next: 276, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 350,
    sound: "1/0959",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -9999, y: -9782457512, w: 99999999, h: 100
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  276: { name: "manda",
    pic: 88, state: 3, wait: 1, next: 277, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  277: { name: "manda",
    pic: 89, state: 3, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  280: { name: "manda",
    pic: 70, state: 3, wait: 1, next: 275, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 450,
    sound: "1/0959",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  281: { name: "manda",
    pic: 84, state: 15, wait: 8, next: 282, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 375, dvx: 0, dvy: 0, oid: 223, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  282: { name: "manda",
    pic: 60, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  283: { name: "manda",
    pic: 73, state: 3, wait: 1, next: 284, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  284: { name: "manda",
    pic: 74, state: 3, wait: 1, next: 285, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  285: { name: "manda",
    pic: 75, state: 3, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  286: { name: "manda",
    pic: 76, state: 3, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  287: { name: "manda",
    pic: 77, state: 3, wait: 2, next: 288, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  288: { name: "manda",
    pic: 78, state: 15, wait: 2, next: 289, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  289: { name: "manda",
    pic: 79, state: 15, wait: 2, next: 290, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  290: { name: "manda",
    pic: 57, state: 15, wait: 2, next: 291, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  291: { name: "manda",
    pic: 69, state: 15, wait: 2, next: 292, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  292: { name: "manda",
    pic: 81, state: 15, wait: 2, next: 293, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  293: { name: "manda",
    pic: 82, state: 15, wait: 2, next: 294, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  294: { name: "manda",
    pic: 83, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 345, dvx: 0, dvy: 0, oid: 30, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  295: { name: "gate",
    pic: 101, state: 3, wait: 1, next: 296, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 190,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  296: { name: "gate",
    pic: 102, state: 3, wait: 2, next: 297, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 30, y: 0, action: 0, dvx: 0, dvy: 2, oid: 442, facing: 0
    }
  },
  297: { name: "gate",
    pic: 103, state: 3, wait: 1, next: 298, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  298: { name: "gate",
    pic: 104, state: 3, wait: 5, next: 299, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  299: { name: "gate",
    pic: 60, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  300: { name: "snake_run",
    pic: 60, state: 15, wait: 0, next: 310, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    }
  },
  302: { name: "snake_run",
    pic: 140, state: 15, wait: 1, next: 303, dvx: 15, dvy: 0, centerx: 160, centery: 65, hit_a: 306, hit_d: 306, hit_j: 306,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    },
    itr: {
      kind: 0, x: 155, y: 30, w: 40, h: 60, vrest: 15, dvx: 5, dvy: -10, fall: 100, bdefend: 100, injury: 65
    }
  },
  303: { name: "snake_run",
    pic: 141, state: 15, wait: 2, next: 304, dvx: 25, dvz: 5, dvy: 0, centerx: 160, centery: 65, hit_a: 306, hit_d: 306, hit_j: 306, mp: -5,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 145, y: 25, w: 60, h: 40
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 155, y: 30, w: 40, h: 60, vrest: 15, dvx: 5, dvy: -10, fall: 100, bdefend: 100, injury: 65
    }
  },
  304: { name: "snake_run",
    pic: 142, state: 15, wait: 2, next: 305, dvx: 25, dvz: 5, dvy: 0, centerx: 160, centery: 65, hit_a: 306, hit_d: 306, hit_j: 306, mp: -5,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 145, y: 25, w: 60, h: 40
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 155, y: 30, w: 40, h: 60, vrest: 15, dvx: 5, dvy: -10, fall: 100, bdefend: 100, injury: 65
    }
  },
  305: { name: "snake_run",
    pic: 143, state: 15, wait: 2, next: 302, dvx: 25, dvz: 5, dvy: 0, centerx: 160, centery: 65, hit_a: 306, hit_d: 306, hit_j: 306, mp: -5,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 145, y: 25, w: 60, h: 40
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 155, y: 30, w: 40, h: 60, vrest: 15, dvx: 5, dvy: -10, fall: 100, bdefend: 100, injury: 65
    }
  },
  306: { name: "snake_run",
    pic: 142, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, centerx: 160, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    }
  },
  307: { name: "snake_run",
    pic: 140, state: 15, wait: 1, next: 308, dvx: 0, dvy: 0, centerx: 160, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 145, y: 25, w: 60, h: 40
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  308: { name: "snake_run",
    pic: 144, state: 15, wait: 1, next: 309, dvx: 0, dvy: 0, centerx: 160, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    }
  },
  309: { name: "snake_run",
    pic: 60, state: 15, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 26, y: 40, w: 29, h: 38
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  310: { name: "snake_run",
    pic: 61, state: 15, wait: 1, next: 311, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    }
  },
  311: { name: "snake_run",
    pic: 41, state: 15, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    }
  },
  312: { name: "snake_run",
    pic: 144, state: 15, wait: 1, next: 302, dvx: 5, dvy: 0, centerx: 160, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 145, y: 25, w: 60, h: 40
    }
  },
  315: { name: "regerate",
    pic: 90, state: 15, wait: 1, next: 316, dvx: 550, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, mp: 155
  },
  316: { name: "regerate",
    pic: 91, state: 15, wait: 1, next: 317, dvx: 550, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0949"
  },
  317: { name: "regerate",
    pic: 92, state: 15, wait: 1, next: 318, dvx: 550, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  318: { name: "regerate",
    pic: 100, state: 15, wait: 1, next: 319, dvx: 550, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  319: { name: "regerate",
    pic: 62, state: 1700, wait: 3, next: 999, dvx: 5, dvy: -5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 1, x: 30, y: 77, action: 79, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  320: { name: "snake arm",
    pic: 10, state: 15, wait: 0, next: 321, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  321: { name: "snake arm",
    pic: 130, state: 15, wait: 0, next: 322, dvx: 0, dvy: 0, centerx: 23, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  322: { name: "snake arm",
    pic: 131, state: 15, wait: 0, next: 323, dvx: 0, dvy: 0, centerx: 23, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 53, y: 45, w: 30, h: 18, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  323: { name: "snake arm",
    pic: 132, state: 15, wait: 0, next: 324, dvx: 0, dvy: 0, centerx: 23, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 53, y: 35, w: 30, h: 25, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  324: { name: "snake arm",
    pic: 146, state: 15, wait: 1, next: 325, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 50, y: 50, w: 50, h: 18, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  325: { name: "snake arm",
    pic: 147, state: 15, wait: 1, next: 326, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 50, y: 30, w: 80, h: 18, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  326: { name: "snake arm",
    pic: 148, state: 15, wait: 1, next: 327, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 50, y: 30, w: 120, h: 18, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  327: { name: "snake arm",
    pic: 149, state: 15, wait: 1, next: 328, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 50, y: 45, w: 215, h: 25, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  328: { name: "snake arm",
    pic: 148, state: 15, wait: 1, next: 329, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 50, y: 45, w: 120, h: 18, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  329: { name: "snake arm",
    pic: 147, state: 15, wait: 1, next: 330, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 50, y: 50, w: 80, h: 18, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  330: { name: "snake arm",
    pic: 146, state: 15, wait: 1, next: 331, dvx: 0, dvy: 0, centerx: 23, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 53, y: 35, w: 30, h: 25, dvx: 5, vrest: 5, bdefend: 16, injury: 35, fall: 5, effect: 1
    }
  },
  331: { name: "snake arm",
    pic: 132, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 23, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  335: { name: "snake_replacement",
    pic: 60, state: 15, wait: 3, next: 336, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 85
  },
  336: { name: "snake_replacement",
    pic: 137, state: 15, wait: 2, next: 337, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  337: { name: "snake_replacement",
    pic: 133, state: 15, wait: 2, next: 338, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  338: { name: "snake_replacement",
    pic: 134, state: 15, wait: 2, next: 339, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  339: { name: "snake_replacement",
    pic: 150, state: 15, wait: 2, next: 341, dvx: 0, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "snake_replacement",
    pic: 999, state: 15, wait: 1, next: 342, dvx: 38, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0950",
    opoint: {
      kind: 1, x: 25, y: 90, action: 113, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  342: { name: "snake_replacement",
    pic: 999, state: 15, wait: 1, next: 302, dvx: 550, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  350: { name: "sword2",
    pic: 93, state: 15, wait: 1, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 130,
    sound: "1/0976",
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  351: { name: "sword2",
    pic: 94, state: 15, wait: 1, next: 352, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  352: { name: "sword2",
    pic: 95, state: 15, wait: 1, next: 353, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  353: { name: "sword2",
    pic: 96, state: 15, wait: 1, next: 354, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 180, y: 63, action: 110, dvx: 0, dvy: 0, oid: 412, facing: 0
    },
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  354: { name: "sword2",
    pic: 97, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  391: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -500,
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
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396
    },
    wpoint: {
      kind: 3, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 69, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  500: { name: "defend2",
    pic: 40, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  501: { name: "defendend",
    pic: 40, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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