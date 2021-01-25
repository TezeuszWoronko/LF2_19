define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/hidan.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-99)": "sprite/hidan_2.png", w: 115, h: 110, row: 5, col: 6
      },
      {
        "file(100-105)": "sprite/hidan_3.png", w: 165, h: 165, row: 3, col: 2
      },
      {
        "file(106-111)": "sprite/hidan_4.png", w: 311, h: 95, row: 1, col: 6
      },
      {
        "file(112-200)": "sprite/slashing_hidan.png", w: 115, h: 110, row: 5, col: 6
      }
    ],
    name: "Hidan",
    head: "sprite/hidan_f.png",
    small: "sprite/hidan_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 16,
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
    rowing_distance: 20
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 5, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
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
  1: { name: "standing",
    pic: 1, state: 0, wait: 5, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 2, state: 0, wait: 5, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 32, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  3: { name: "standing ",
    pic: 3, state: 0, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 86, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 86, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 40, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 86, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 86, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 295, hit_ja: 290, hit_Dj: 305, hit_Da: 235,
    wpoint: {
      kind: 1, x: 24, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 70, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 65, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 30, y: 52, w: 66, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 150
      }
    ]
  },
  10: { name: "running",
    pic: 71, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 65, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 30, y: 52, w: 66, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 150
      }
    ]
  },
  11: { name: "running",
    pic: 72, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 65, centery: 114, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 56, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 30, y: 52, w: 66, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 150
      }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 23, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 23, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 125, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 41, y: 28, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 27, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 40, y: 28, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 7, next: 999, dvx: 2, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 27, y: 28, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 50, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 50, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  30: { name: "jump_weapon_atck",
    pic: 52, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 50, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 52, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 50, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 51, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1, dvx: 55, dvy: -4, dvz: 3
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 52, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 51, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 75, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 52, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 65, dvy: -4, dvz: 2
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
    pic: 52, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 55, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 10, w: 36, h: 23
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 56, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 22, y: 15, w: 38, h: 38
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  60: { name: "punch1",
    pic: 13, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 285, hit_j: 255,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  61: { name: "punch1",
    pic: 87, state: 3, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 255,
    sound: "1/007",
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  62: { name: "punch1",
    pic: 88, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 255,
    itr: {
      kind: 0, x: 68, y: 67, w: 33, h: 6, dvx: 0, dvy: -5, fall: 1, arest: 1, bdefend: 20, injury: 25, effect: 1
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
  63: { name: "punch1",
    pic: 88, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 64, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  64: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 13, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 285, hit_j: 255,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  66: { name: "punch",
    pic: 89, state: 3, wait: 0, next: 67, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 255,
    sound: "1/008",
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
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
    pic: 90, state: 3, wait: 1, next: 68, dvx: 2, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 44, w: 42, h: 35, dvx: 0, dvy: -5, fall: 1, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
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
    pic: 90, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 250, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  69: { name: "punch",
    pic: 79, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 70, hit_d: 0, hit_j: 0,
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
    pic: 11, state: 3, wait: 2, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 80, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 48, h: 74, dvx: 7, dvy: -15, fall: 70, arest: 3, bdefend: 100, injury: 55, effect: 1
    }
  },
  72: { name: "super_punch",
    pic: 81, state: 3, wait: 0, next: 73, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  73: { name: "super_punch",
    pic: 82, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  75: { name: "jump_attack2",
    pic: 102, state: 4, wait: 0, next: 76, dvx: 0, dvy: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0, mp: -5,
    opoint: {
      kind: 1, x: 77, y: 100, action: 329, dvx: 0, dvy: 0, oid: 203
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 25, h: 55
    }
  },
  76: { name: "jump_attack2",
    pic: 103, state: 4, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0, mp: -5,
    opoint: {
      kind: 1, x: 77, y: 100, action: 331, dvx: 0, dvy: 0, oid: 203
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 25, h: 55
    }
  },
  80: { name: "jump_attack",
    pic: 83, state: 15, wait: 1, next: 91, dvx: 2, dvy: -1, centerx: 52, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 25, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  81: { name: "jump_attack2",
    pic: 103, state: 4, wait: 0, next: 82, dvx: 0, dvy: 550, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 24, y: 18, w: 25, h: 55
    }
  },
  82: { name: "jump_attack2",
    pic: 102, state: 4, wait: 0, next: 83, dvx: 0, dvy: -20, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 215, dvx: 0, dvy: 0, oid: 203
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 25, h: 55
    }
  },
  83: { name: "jump_attack2",
    pic: 100, state: 4, wait: 0, next: 84, dvx: 0, dvy: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0, mp: -5,
    opoint: {
      kind: 1, x: 77, y: 100, action: 325, dvx: 0, dvy: 0, oid: 203
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 25, h: 55
    },
    itr: {
      kind: 0, x: 56, y: 23, w: 87, h: 59, dvx: 3, dvy: -7, fall: 70, arest: 2, bdefend: 30, injury: 15, effect: 1
    }
  },
  84: { name: "jump_attack2",
    pic: 101, state: 4, wait: 0, next: 75, dvx: 0, dvy: 0, centerx: 77, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0, mp: -5,
    opoint: {
      kind: 1, x: 77, y: 100, action: 327, dvx: 0, dvy: 0, oid: 203
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 25, h: 55
    }
  },
  85: { name: "run_attack",
    pic: 21, state: 3, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  86: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 87, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 285, hit_j: 255,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  87: { name: "punch",
    pic: 73, state: 3, wait: 0, next: 88, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 255,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: {
      kind: 0, x: 56, y: 70, w: 41, h: 33, dvx: 2, bdefend: 16, injury: 20, effect: 1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  88: { name: "punch",
    pic: 74, state: 3, wait: 0, next: 89, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
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
  89: { name: "punch",
    pic: 75, state: 3, wait: 2, next: 96, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 83, state: 15, wait: 1, next: 91, dvx: 2, dvy: -1, centerx: 52, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 25, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  91: { name: "dash_attack2",
    pic: 84, state: 15, wait: 0, next: 92, dvx: 0, dvy: 0, centerx: 34, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 19, w: 37, h: 45
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  92: { name: "dash_attack2",
    pic: 85, state: 15, wait: 0, next: 93, dvx: 0, dvy: 0, centerx: 34, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 27, w: 65, h: 82, dvx: 10, dvy: -5, fall: 100, vrest: 20, bdefend: 60, injury: 55, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 7, y: 19, w: 37, h: 45
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  93: { name: "dash_attack2",
    pic: 86, state: 15, wait: 15, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 7, y: 19, w: 37, h: 45
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  96: { name: "punch",
    pic: 75, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 97, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  97: { name: "punch",
    pic: 76, state: 3, wait: 1, next: 98, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  98: { name: "punch",
    pic: 77, state: 3, wait: 0, next: 99, dvx: 2, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: {
      kind: 0, x: 50, y: 43, w: 45, h: 52, dvx: 2, bdefend: 16, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  99: { name: "punch",
    pic: 78, state: 3, wait: 0, next: 107, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
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
  107: { name: "punch",
    pic: 79, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 70, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  108: { name: "rowing",
    pic: 66, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 43, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 10, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 10, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 7, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 4, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 26, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 61, state: 15, wait: 5, next: 50, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  120: { name: "catching",
    pic: 93, state: 9, wait: 1, next: 232, dvx: 0, dvy: 0, centerx: 50, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 50, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "lick",
    pic: 15, state: 9, wait: 7, next: 122, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/hidan1",
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
  122: { name: "lick",
    pic: 16, state: 15, wait: 3, next: 123, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "lick",
    pic: 17, state: 15, wait: 3, next: 124, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "lick",
    pic: 16, state: 15, wait: 3, next: 125, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  125: { name: "lick",
    pic: 16, state: 15, wait: 1, next: 126, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  126: { name: "lick",
    pic: 16, state: 15, wait: 0, next: 127, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 38, y: 0, action: 205, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  127: { name: "lick",
    pic: 16, state: 8056, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 39, y: 0, action: 215, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  128: { name: "run_punch",
    pic: 97, state: 3, wait: 1, next: 129, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 48, h: 74, dvx: 7, dvy: -15, fall: 70, arest: 3, bdefend: 100, injury: 55, effect: 1
    }
  },
  129: { name: "run__punch",
    pic: 98, state: 3, wait: 0, next: 145, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
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
  145: { name: "run__punch",
    pic: 99, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 60, state: 4, wait: 2, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 60, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 60, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 17, y: 54, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 81,
    wpoint: {
      kind: 1, x: 21, y: 34, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 24, y: 45, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 62, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 38, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 40, w: 29, h: 38
    }
  },
  216: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 81,
    wpoint: {
      kind: 1, x: 19, y: 38, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 15, w: 24, h: 21
      },
      {
        kind: 0, x: 16, y: 30, w: 39, h: 37
      }
    ]
  },
  217: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 81,
    wpoint: {
      kind: 1, x: 23, y: 10, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 25, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
    wpoint: {
      kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 24, w: 39, h: 31
      },
      {
        kind: 0, x: 25, y: 53, w: 40, h: 27
      }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
    wpoint: {
      kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 23, w: 37, h: 58
    }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 295,
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
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      },
      {
        kind: 0, x: 0, y: -458686942684, w: 79, h: 500
      }
    ]
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      },
      {
        kind: 0, x: 0, y: -458686942684, w: 79, h: 500
      }
    ]
  },
  232: { name: "throw_lying_man",
    pic: 94, state: 9, wait: 0, next: 233, dvx: 0, dvy: 0, centerx: 50, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 50, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 195, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  233: { name: "throw_lying_man",
    pic: 95, state: 9, wait: 12, next: 234, dvx: 0, dvy: 0, centerx: 50, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 100, y: 50, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30
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
    pic: 96, state: 9, wait: 7, next: 121, dvx: 0, dvy: 0, centerx: 50, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
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
  235: { name: "punch",
    pic: 14, state: 3, wait: 3, next: 236, dvx: 0, dvy: 0, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 195,
    sound: "1/017",
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  236: { name: "punch",
    pic: 72, state: 9, wait: 2, next: 237, dvx: 50, dvy: 0, centerx: 65, centery: 114, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 0, y: 16, zwidth: 15, w: 100, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    }
  },
  237: { name: "punch",
    pic: 72, state: 9, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 65, centery: 114, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 15, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    }
  },
  238: { name: "punch",
    pic: 0, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -6842487454687, w: 500, h: 900
    }
  },
  240: { name: "throw",
    pic: 12, state: 15, wait: 0, next: 241, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 90,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  241: { name: "throw",
    pic: 106, state: 15, wait: 1, next: 242, dvx: 0, dvy: 0, centerx: 22, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: {
      kind: 0, x: 90, y: 50, w: 41, h: 23, dvx: -15, vrest: 5, fall: 100, bdefend: 50, injury: 50, effect: 1
    }
  },
  242: { name: "throw",
    pic: 107, state: 15, wait: 1, next: 243, dvx: 0, dvy: 0, centerx: 22, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    itr: {
      kind: 0, x: 175, y: 50, w: 41, h: 23, dvx: -15, vrest: 5, fall: 100, bdefend: 50, injury: 55, effect: 1
    }
  },
  243: { name: "throw",
    pic: 108, state: 15, wait: 1, next: 244, dvx: 0, dvy: 0, centerx: 22, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    itr: {
      kind: 0, x: 275, y: 50, w: 41, h: 23, dvx: -15, vrest: 5, fall: 100, bdefend: 50, injury: 55, effect: 1
    }
  },
  244: { name: "throw",
    pic: 109, state: 15, wait: 1, next: 245, dvx: 0, dvy: 0, centerx: 22, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    itr: [
      {
        kind: 0, x: 243, y: 50, w: 41, h: 23, dvx: -15, vrest: 5, fall: 100, bdefend: 50, injury: 45, effect: 1
      },
      {
        kind: 0, x: 243, y: 30000, w: 100, h: 23, dvx: -15, vrest: 5, fall: 100, bdefend: 50, injury: 45, effect: 1
      }
    ]
  },
  245: { name: "throw",
    pic: 110, state: 15, wait: 1, next: 246, dvx: 0, dvy: 0, centerx: 22, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    itr: [
      {
        kind: 0, x: 155, y: 50, w: 41, h: 23, dvx: -6, vrest: 5, fall: 100, bdefend: 50, injury: 45, effect: 1
      },
      {
        kind: 0, x: 155, y: 30000, w: 100, h: 23, dvx: -6, vrest: 5, fall: 100, bdefend: 50, injury: 45, effect: 1
      }
    ]
  },
  246: { name: "throw",
    pic: 111, state: 15, wait: 1, next: 247, dvx: 0, dvy: 0, centerx: 22, centery: 95, hit_a: 255, hit_d: 285, hit_j: 295,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    itr: [
      {
        kind: 0, x: 72, y: 50, w: 41, h: 23, dvx: -6, vrest: 5, fall: 100, bdefend: 50, injury: 45, effect: 1
      },
      {
        kind: 0, x: 72, y: 30000, w: 41, h: 100, vrest: 5, dvx: -6, fall: 100, bdefend: 50, injury: 45, effect: 1
      }
    ]
  },
  247: { name: "throw",
    pic: 10, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 255, hit_d: 285, hit_j: 295,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    }
  },
  250: { name: "punch3",
    pic: 13, state: 3, wait: 1, next: 251, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  251: { name: "punch3",
    pic: 91, state: 3, wait: 0, next: 252, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  252: { name: "punch3",
    pic: 92, state: 3, wait: 1, next: 253, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 69, y: 76, w: 34, h: 16, dvx: 0, dvy: -5, fall: 1, arest: 3, bdefend: 20, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  253: { name: "punch3",
    pic: 92, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 60, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  255: { name: "rapid_slash",
    pic: 76, state: 3, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 50, y: 43, w: 60, h: 52, dvx: -5, dvy: -10, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  256: { name: "rapid_slash",
    pic: 112, state: 3, wait: 0, next: 257, dvx: 2, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 39, y: 79, action: 216, dvx: 0, dvy: 0, oid: 203
    },
    itr: {
      kind: 0, x: 50, y: 43, w: 60, h: 52, dvx: -5, dvy: -10, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  257: { name: "rapid_slash",
    pic: 78, state: 3, wait: 0, next: 258, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 50, y: 43, w: 60, h: 52, dvx: -5, dvy: -10, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  258: { name: "rapid_slash",
    pic: 21, state: 3, wait: 0, next: 259, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  259: { name: "rapid_slash",
    pic: 114, state: 3, wait: 0, next: 260, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  260: { name: "rapid_slash",
    pic: 98, state: 3, wait: 0, next: 261, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  261: { name: "rapid_slash",
    pic: 99, state: 3, wait: 0, next: 262, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  262: { name: "rapid_slash",
    pic: 73, state: 3, wait: 0, next: 263, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: {
      kind: 0, x: 56, y: 70, w: 51, h: 33, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  263: { name: "rapid_slash",
    pic: 115, state: 3, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 56, y: 70, w: 51, h: 33, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  264: { name: "rapid_slash",
    pic: 74, state: 3, wait: 0, next: 266, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 56, y: 70, w: 51, h: 33, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  266: { name: "rapid_slash",
    pic: 113, state: 3, wait: 0, next: 267, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  267: { name: "rapid_slash",
    pic: 81, state: 3, wait: 0, next: 268, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 999, hit_d: 85, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  268: { name: "rapid_slash",
    pic: 82, state: 3, wait: 0, next: 269, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 999, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  269: { name: "rapid_slash",
    pic: 76, state: 3, wait: 0, next: 270, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 50, y: 43, w: 60, h: 52, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  270: { name: "rapid_slash",
    pic: 112, state: 3, wait: 0, next: 271, dvx: 2, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: {
      kind: 0, x: 50, y: 43, w: 60, h: 52, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  271: { name: "rapid_slash",
    pic: 78, state: 3, wait: 0, next: 272, dvx: 0, dvy: 0, centerx: 42, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 50, y: 43, w: 60, h: 52, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  272: { name: "rapid_slash",
    pic: 21, state: 3, wait: 0, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  273: { name: "rapid_slash",
    pic: 114, state: 3, wait: 0, next: 274, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  274: { name: "rapid_slash",
    pic: 98, state: 3, wait: 0, next: 275, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  275: { name: "rapid_slash",
    pic: 99, state: 3, wait: 0, next: 276, dvx: 0, dvy: 0, centerx: 34, centery: 110, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  276: { name: "rapid_slash",
    pic: 73, state: 3, wait: 0, next: 277, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: {
      kind: 0, x: 56, y: 70, w: 51, h: 33, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  277: { name: "rapid_slash",
    pic: 115, state: 3, wait: 0, next: 278, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    itr: {
      kind: 0, x: 56, y: 70, w: 51, h: 33, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  278: { name: "rapid_slash",
    pic: 74, state: 3, wait: 0, next: 279, dvx: 0, dvy: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    itr: {
      kind: 0, x: 56, y: 70, w: 51, h: 33, dvx: 1, dvy: -5, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  279: { name: "rapid_slash",
    pic: 113, state: 3, wait: 0, next: 280, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 285, hit_j: 295,
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 15, dvy: -15, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  280: { name: "rapid_slash",
    pic: 81, state: 3, wait: 0, next: 281, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 15, dvy: -15, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  281: { name: "rapid_slash",
    pic: 82, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 103, hit_a: 0, hit_d: 285, hit_j: 295,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 46, y: 28, w: 58, h: 74, dvx: 15, dvy: -15, fall: 70, bdefend: 16, arest: 1, injury: 25, effect: 1
    }
  },
  285: { name: "cut_down",
    pic: 12, state: 3, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    }
  },
  286: { name: "cut_down",
    pic: 117, state: 3, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 28, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    itr: [
      {
        kind: 0, x: 50, y: 24, w: 64, h: 87, dvx: 10, dvy: -15, fall: 100, vrest: 7, bdefend: 100, injury: 65, effect: 1
      },
      {
        kind: 0, x: 71, y: 29900, w: 42, h: 200, dvx: 10, dvy: -15, fall: 100, arest: 1, bdefend: 100, injury: 65, effect: 1
      }
    ]
  },
  287: { name: "cut_down",
    pic: 118, state: 3, wait: 0, next: 288, dvx: 0, dvy: 0, centerx: 28, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    },
    itr: [
      {
        kind: 0, x: 71, y: 30000, w: 42, h: 100, dvx: 10, dvy: -15, fall: 100, vrest: 7, bdefend: 100, injury: 65, effect: 1
      },
      {
        kind: 0, x: 50, y: 24, w: 64, h: 87, dvx: 10, dvy: -15, fall: 100, vrest: 7, bdefend: 100, injury: 65, effect: 1
      }
    ]
  },
  288: { name: "cut_down",
    pic: 119, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 28, centery: 94, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 30, h: 43
    }
  },
  290: { name: "charge",
    pic: 22, state: 3, wait: 0, next: 291, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  291: { name: "charge",
    pic: 22, state: 17, wait: 2, next: 292, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  292: { name: "charge",
    pic: 22, state: 17, wait: 2, next: 293, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 294, hit_d: 294, hit_j: 294,
    opoint: {
      kind: 1, x: 48, y: 45, action: 4, dvx: 0, dvy: 0, oid: 203
    },
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  293: { name: "charge",
    pic: 22, state: 17, wait: 2, next: 291, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 294, hit_d: 294, hit_j: 29,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  294: { name: "charge",
    pic: 22, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 1000, attacking: 0, dvx: 100, dvy: -1, cover: 1
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
  295: { name: "counter",
    pic: 116, state: 3, wait: 0, next: 296, dvx: 7, dvy: 0, dvz: 3, centerx: 69, centery: 101, hit_a: 0, hit_d: 0, hit_j: 0, mp: 40,
    itr: {
      kind: 0, x: 14, y: 15, w: 86, h: 95, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    }
  },
  296: { name: "counter",
    pic: 120, state: 3, wait: 0, next: 297, dvx: 7, dvy: 0, centerx: 62, centery: 110, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 3, w: 96, h: 91, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  297: { name: "counter",
    pic: 121, state: 3, wait: 0, next: 298, dvx: 7, dvy: 0, dvz: 3, centerx: 53, centery: 105, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: -3, w: 92, h: 115, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  298: { name: "counter",
    pic: 116, state: 3, wait: 0, next: 299, dvx: 7, dvy: 0, dvz: 3, centerx: 69, centery: 101, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 15, w: 86, h: 95, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    }
  },
  299: { name: "counter",
    pic: 120, state: 3, wait: 0, next: 300, dvx: 7, dvy: 0, dvz: 3, centerx: 62, centery: 110, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 3, w: 96, h: 91, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  300: { name: "counter",
    pic: 121, state: 3, wait: 0, next: 301, dvx: 7, dvy: 0, dvz: 3, centerx: 53, centery: 105, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: -3, w: 92, h: 115, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  301: { name: "counter",
    pic: 116, state: 3, wait: 0, next: 302, dvx: 7, dvy: 0, dvz: 3, centerx: 69, centery: 101, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: [
      {
        kind: 0, x: 14, y: 15, w: 86, h: 95, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
      },
      {
        kind: 0, x: 33, y: 3, w: 65, h: 37, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
      },
      {
        kind: 0, x: 10, y: 10, w: 91, h: 101, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
      }
    ]
  },
  302: { name: "counter",
    pic: 120, state: 3, wait: 0, next: 303, dvx: 7, dvy: 0, dvz: 3, centerx: 62, centery: 110, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 3, w: 96, h: 91, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    },
    opoint: {
      kind: 1, x: 90, y: 0, action: 198, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  303: { name: "counter",
    pic: 121, state: 3, wait: 0, next: 304, dvx: 7, dvy: 0, dvz: 3, centerx: 53, centery: 105, hit_a: 255, hit_d: 285, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: -3, w: 92, h: 115, dvx: 3, dvy: -10, fall: 70, arest: 1, bdefend: 20, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  304: { name: "counter",
    pic: 10, state: 3, wait: 1, next: 999, dvx: 550, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 255, hit_d: 285, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  305: { name: "ground_slam",
    pic: 12, state: 3, wait: 1, next: 306, dvx: 550, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 135,
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  306: { name: "ground_slam",
    pic: 122, state: 3, wait: 1, next: 307, dvx: 550, dvy: 0, centerx: 38, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  307: { name: "ground_slam",
    pic: 123, state: 3, wait: 1, next: 308, dvx: 550, dvy: 0, centerx: 44, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
  },
  308: { name: "ground_slam",
    pic: 27, state: 3, wait: 1, next: 309, dvx: 550, dvy: 0, centerx: 44, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    },
    opoint: {
      kind: 1, x: 60, y: 80, action: 85, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  309: { name: "ground_slam",
    pic: 28, state: 3, wait: 10, next: 999, dvx: 550, dvy: 0, centerx: 44, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 40, y: 21, w: 20, h: 30
    }
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
      kind: 1, x: 43, y: 81, action: 12, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  500: { name: "defend2",
    pic: 10, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  501: { name: "defendend",
    pic: 10, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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