define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/sakon.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/sakon2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/sakon.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(210-279)": "sprite/sakon2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(280-309)": "sprite/sound4.png", w: 79, h: 79, row: 10, col: 3
      }
    ],
    name: "Sakon",
    head: "sprite/sakon_f.png",
    small: "sprite/sakon_s.png",
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
    rowing_distance: 20,
    hidden: 1
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 5, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 1, state: 0, wait: 5, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 2, state: 0, wait: 5, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
  3: { name: "standing",
    pic: 3, state: 0, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Da: 357, hit_Ua: 351, hit_ja: 275, hit_Fj: 250, hit_Fa: 290, hit_Dj: 240, hit_Uj: 355,
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
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 32, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 56, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 51, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  25: { name: "normal_weapon_atck",
    pic: 51, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  30: { name: "jump_weapon_atck",
    pic: 54, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  35: { name: "run_weapon_atck",
    pic: 51, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 54, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  45: { name: "light_weapon_thw",
    pic: 51, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 52, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 53, state: 15, wait: 0, next: 48, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  48: { name: "light_weapon_thw",
    pic: 58, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 26, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 75, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 35, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 54, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
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
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15
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
  62: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
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
    pic: 13, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
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
    pic: 14, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    }
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
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
    pic: 16, state: 3, wait: 2, next: 68, dvx: 2, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 44, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 15
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
    pic: 17, state: 3, wait: 1, next: 69, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
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
    pic: 23, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 353,
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
    pic: 24, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 25, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  72: { name: "super_punch",
    pic: 26, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
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
    pic: 27, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  74: { name: "super_punch",
    pic: 28, state: 3, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 23, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 29, state: 3, wait: 1, next: 76, dvx: 0, dvy: 0, centerx: 23, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 24, w: 45, h: 14, dvx: 15, dvy: 0, fall: 70, arest: 15, bdefend: 40, injury: 20
    },
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
    pic: 35, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  80: { name: "jump_attack",
    pic: 54, state: 3, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 55, state: 3, wait: 0, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35
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
  82: { name: "jump_attack",
    pic: 56, state: 3, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 57, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35
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
    pic: 36, state: 3, wait: 2, next: 86, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 325,
    bdy: [
      {
        kind: 0, x: 19, y: 24, w: 35, h: 54
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  86: { name: "run_attack",
    pic: 37, state: 3, wait: 1, next: 87, dvx: 6, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 325,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 24, y: 36, w: 55, h: 19
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  87: { name: "run_attack",
    pic: 38, state: 3, wait: 1, next: 88, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 325,
    itr: {
      kind: 0, x: 35, y: 24, w: 55, h: 14, dvx: 15, dvy: -20, fall: 100, arest: 15, bdefend: 100, injury: 80
    },
    bdy: [
      {
        kind: 0, x: 2, y: 57, w: 41, h: 22
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  88: { name: "run_attack",
    pic: 39, state: 3, wait: 1, next: 89, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  89: { name: "run_attack",
    pic: 47, state: 3, wait: 3, next: 999, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 43, state: 15, wait: 3, next: 91, dvx: 0, dvy: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 44, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 45, state: 15, wait: 2, next: 93, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70
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
  93: { name: "dash_attack",
    pic: 46, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 42, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
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
    pic: 42, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
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
    pic: 82, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 122, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 123, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 83, state: 9, wait: 3, next: 124, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 57, y: 39, injury: 35, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 55, y: 60, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 125, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  125: { name: "catching",
    pic: 83, state: 9, wait: 3, next: 126, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 57, y: 39, injury: 35, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 55, y: 60, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  126: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 127, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 60,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  127: { name: "catching",
    pic: 83, state: 9, wait: 3, next: 232, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 57, y: 39, injury: 42, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 55, y: 60, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
        kind: 0, x: 26, y: 14, w: 28, h: 66
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
        kind: 0, x: 26, y: 14, w: 28, h: 66
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
        kind: 0, x: 26, y: 14, w: 28, h: 66
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
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    wpoint: {
      kind: 1, x: 33, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  145: { name: "summon_cave",
    pic: 295, state: 3, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 290,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  146: { name: "summon_cave",
    pic: 296, state: 3, wait: 1, next: 147, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  147: { name: "summon_cave",
    pic: 297, state: 3, wait: 1, next: 148, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  148: { name: "summon_cave",
    pic: 295, state: 3, wait: 1, next: 149, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 500,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  149: { name: "summon_cave",
    pic: 296, state: 3, wait: 1, next: 150, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  150: { name: "summon_cave",
    pic: 297, state: 3, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  151: { name: "summon_cave",
    pic: 298, state: 3, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  152: { name: "summon_cave",
    pic: 299, state: 3, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  153: { name: "summon_cave",
    pic: 300, state: 3, wait: 2, next: 154, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  154: { name: "summon_cave",
    pic: 301, state: 3, wait: 1, next: 155, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 369, dvx: 0, dvy: 0, oid: 37, facing: 0
    }
  },
  155: { name: "cave_summon",
    pic: 301, state: 8037, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 1000, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 18, y: 6017, w: 400, h: 100, dvx: 156
    }
  },
  156: { name: "cave_absorb",
    pic: 302, state: 17, wait: 1, next: 157, dvx: 0, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 175, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  157: { name: "cave_absorb",
    pic: 303, state: 1700, wait: 1, next: 158, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 2, x: 42, y: 51, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
    }
  },
  158: { name: "cave_absorb",
    pic: 304, state: 17, wait: 1, next: 159, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, dvx: 100, dvy: -1, cover: 1
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 175, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  159: { name: "cave_absorb",
    pic: 303, state: 1700, wait: 1, next: 160, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -3,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 2, x: 0, y: -999, action: 31, dvx: 0, dvy: 0, oid: 122, facing: 0
    }
  },
  160: { name: "cave_absorb",
    pic: 302, state: 17, wait: 1, next: 161, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -3,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 175, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  161: { name: "cave_absorb",
    pic: 301, state: 17, wait: 1, next: 162, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -3,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 18, y: 6017, w: 45, h: 100, dvx: 156
    }
  },
  162: { name: "cave_absorb",
    pic: 301, state: 8037, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 95, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
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
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 288,
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
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  216: { name: "dash",
    pic: 50, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 16, y: 30, w: 39, h: 37
      }
    ]
  },
  217: { name: "dash",
    pic: 50, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  220: { name: "60",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 280,
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
    bdy: {
      kind: 0, x: 0, y: 30000, w: 79, h: 500
    }
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: 30000, w: 79, h: 500
    }
  },
  232: { name: "throw_lying_man",
    pic: 84, state: 9, wait: 2, next: 233, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 0, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  233: { name: "throw_lying_man",
    pic: 84, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 57, y: -10, vaction: 181, throwvx: 2, throwvy: -15, throwvz: 0, throwinjury: 10
    },
    opoint: {
      kind: 1, x: 40, y: 35, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 85, state: 9, wait: 10, next: 235, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  235: { name: "throw_lying_man",
    pic: 86, state: 15, wait: 1, next: 236, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  236: { name: "throw_lying_man",
    pic: 87, state: 15, wait: 1, next: 237, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  237: { name: "throw_lying_man",
    pic: 88, state: 15, wait: 1, next: 238, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  238: { name: "throw_lying_man",
    pic: 89, state: 15, wait: 1, next: 239, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  239: { name: "throw_lying_man",
    pic: 90, state: 15, wait: 1, next: 247, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  240: { name: "gate",
    pic: 48, state: 15, wait: 1, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    sound: "1/sakon",
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
  241: { name: "gate",
    pic: 49, state: 15, wait: 1, next: 242, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  242: { name: "gate",
    pic: 59, state: 15, wait: 1, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
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
  243: { name: "gate",
    pic: 67, state: 15, wait: 2, next: 244, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  244: { name: "gate",
    pic: 68, state: 15, wait: 2, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    ],
    opoint: {
      kind: 1, x: 150, y: 88, action: 67, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  245: { name: "gate",
    pic: 69, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  247: { name: "throw_lying_man",
    pic: 91, state: 15, wait: 1, next: 248, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  248: { name: "throw_lying_man",
    pic: 92, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  250: { name: "possess",
    pic: 61, state: 3, wait: 1, next: 251, dvx: 0, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 60,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  251: { name: "possess",
    pic: 8, state: 3, wait: 1, next: 252, dvx: 60, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: [
      {
        kind: 8, x: 10, y: 20, w: 40, h: 100, dvx: 255
      },
      {
        kind: 8, x: 10, y: 80000, w: 40, h: 100, dvx: 255
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
  252: { name: "possess",
    pic: 60, state: 3, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 10, y: 20, w: 40, h: 100, dvx: 255
      },
      {
        kind: 8, x: 10, y: 80000, w: 40, h: 100, dvx: 255
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
  255: { name: "body",
    pic: 999, state: 18, wait: 1, next: 256, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 260, hit_d: 260, hit_j: 260, mp: -3,
    itr: [
      {
        kind: 8, x: -100, y: -100, w: 200, h: 500, dvx: 255
      },
      {
        kind: 8, x: -100, y: 79900, w: 200, h: 500, dvx: 255
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  256: { name: "body",
    pic: 999, state: 18, wait: 1, next: 257, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 260, hit_d: 260, hit_j: 260, mp: -3,
    itr: [
      {
        kind: 8, x: -100, y: -100, w: 200, h: 500, dvx: 255
      },
      {
        kind: 8, x: -100, y: 79900, w: 200, h: 500, dvx: 255
      },
      {
        kind: 0, x: 30, y: 80000, w: 10, h: 25, bdefend: 0, injury: 5, fall: -1, effect: 5
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  257: { name: "body",
    pic: 999, state: 1700, wait: 2, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 260, hit_d: 260, hit_j: 260, mp: -3,
    itr: [
      {
        kind: 8, x: -100, y: -100, w: 200, h: 500, dvx: 255
      },
      {
        kind: 8, x: -100, y: 79900, w: 200, h: 500, dvx: 255
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  260: { name: "body_ex",
    pic: 70, state: 18, wait: 1, next: 261, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  261: { name: "body_ex",
    pic: 71, state: 18, wait: 1, next: 262, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 11, y: 14, w: 65, h: 55, bdefend: 100, injury: 65, fall: 999, effect: 0, dvx: 10, dvy: -13
    }
  },
  262: { name: "body_ex",
    pic: 72, state: 18, wait: 1, next: 263, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  263: { name: "body_ex",
    pic: 73, state: 18, wait: 1, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  275: { name: "charge",
    pic: 49, state: 3, wait: 3, next: 276, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  276: { name: "charge",
    pic: 59, state: 17, wait: 3, next: 277, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  277: { name: "charge",
    pic: 67, state: 17, wait: 3, next: 278, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 279, hit_d: 279, hit_j: 279,
    opoint: {
      kind: 1, x: 48, y: 60, action: 4, dvx: 0, dvy: 0, oid: 203
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
  278: { name: "charge",
    pic: 67, state: 17, wait: 3, next: 277, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 279, hit_d: 279, hit_j: 279,
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
  279: { name: "charge",
    pic: 67, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  280: { name: "counter",
    pic: 74, state: 4, wait: 1, next: 281, dvx: 0, dvy: -2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  281: { name: "counter",
    pic: 75, state: 4, wait: 1, next: 282, dvx: 0, dvy: -2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  282: { name: "counter",
    pic: 76, state: 4, wait: 1, next: 283, dvx: 0, dvy: -2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  283: { name: "counter",
    pic: 77, state: 4, wait: 1, next: 284, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  284: { name: "counter",
    pic: 78, state: 4, wait: 1, next: 285, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  285: { name: "counter",
    pic: 79, state: 4, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  286: { name: "counter",
    pic: 80, state: 4, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
    },
    itr: {
      kind: 0, x: -6, y: -1, w: 89, h: 95, dvx: -2, dvy: -20, fall: 70, arest: 1, bdefend: 1, injury: 15
    },
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    }
  },
  287: { name: "counter",
    pic: 81, state: 4, wait: 20, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, dvx: 0, dvy: 0, cover: 1
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
  288: { name: "jump_attack2",
    pic: 74, state: 4, wait: 0, next: 289, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  289: { name: "jump_attack2",
    pic: 74, state: 4, wait: 0, next: 280, dvx: 0, dvy: -10, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  290: { name: "grab_rape",
    pic: 61, state: 15, wait: 1, next: 291, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
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
    ],
    itr: {
      kind: 3, x: 30, y: 16, zwidth: 12, w: 25, h: 65,
      catchingact: [293, 293], caughtact: [130, 130]
    }
  },
  291: { name: "grab_rape",
    pic: 63, state: 15, wait: 4, next: 292, dvx: 52, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
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
    ],
    itr: {
      kind: 3, x: 30, y: 16, zwidth: 12, w: 25, h: 65,
      catchingact: [293, 293], caughtact: [130, 130]
    }
  },
  292: { name: "grab_rape",
    pic: 61, state: 15, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  293: { name: "catching",
    pic: 92, state: 9, wait: 0, next: 294, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  294: { name: "catching",
    pic: 91, state: 9, wait: 0, next: 305, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  295: { name: "punch_rapid",
    pic: 93, state: 15, wait: 1, next: 296, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, fall: 1, bdefend: 16, arest: 1, injury: 20
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
  296: { name: "punch_rapid",
    pic: 94, state: 15, wait: 1, next: 297, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, fall: 1, bdefend: 16, arest: 1, injury: 20
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
  297: { name: "punch_rapid",
    pic: 95, state: 15, wait: 1, next: 298, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, fall: 1, bdefend: 16, arest: 1, injury: 20
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
  298: { name: "punch_rapid",
    pic: 93, state: 15, wait: 1, next: 299, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, fall: 1, bdefend: 16, arest: 1, injury: 20
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
  299: { name: "punch_rapid",
    pic: 94, state: 15, wait: 1, next: 300, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, fall: 1, bdefend: 16, arest: 1, injury: 20
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
  300: { name: "punch_rapid",
    pic: 95, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, fall: 1, bdefend: 16, arest: 1, injury: 20
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
  304: { name: "wrap",
    pic: 282, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    sound: "1/kido",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  305: { name: "catching",
    pic: 90, state: 9, wait: 0, next: 306, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  306: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 309, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  307: { name: "wrap",
    pic: 283, state: 15, wait: 5, next: 308, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/025",
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 55, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  308: { name: "wrap",
    pic: 283, state: 8063, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  309: { name: "catching",
    pic: 88, state: 9, wait: 0, next: 310, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  310: { name: "catching",
    pic: 87, state: 9, wait: 0, next: 120, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  315: { name: "toss",
    pic: 96, state: 9, wait: 1, next: 316, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  316: { name: "toss",
    pic: 97, state: 9, wait: 1, next: 317, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 55, y: 35, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  317: { name: "toss",
    pic: 98, state: 9, wait: 1, next: 318, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 47, y: 30, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  318: { name: "toss",
    pic: 99, state: 9, wait: 1, next: -319, dvx: 0, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 27, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1
    },
    wpoint: {
      kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  319: { name: "throw_lying_man",
    pic: 100, state: 9, wait: 1, next: 320, dvx: 0, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 100, y: 39, vaction: 181, throwvx: 70, dircontrol: 1, throwvy: 20, throwvz: 3, throwinjury: 80
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
  320: { name: "throw_lying_man",
    pic: 101, state: 9, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  325: { name: "grab_toss",
    pic: 61, state: 15, wait: 1, next: 326, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    ],
    itr: {
      kind: 3, x: 30, y: 16, zwidth: 5, w: 25, h: 65,
      catchingact: [315, 315], caughtact: [130, 130]
    }
  },
  326: { name: "grab_toss",
    pic: 63, state: 15, wait: 3, next: 292, dvx: 40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
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
    ],
    itr: {
      kind: 3, x: 30, y: 16, zwidth: 5, w: 25, h: 65,
      catchingact: [315, 315], caughtact: [130, 130]
    }
  },
  350: { name: "jiro",
    pic: 999, state: 15, wait: 0, next: 145, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/jirob",
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  351: { name: "kimi",
    pic: 999, state: 15, wait: 0, next: 352, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200
  },
  352: { name: "kimi",
    pic: 999, state: 15, wait: 0, next: 379, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  353: { name: "kido",
    pic: 999, state: 15, wait: 0, next: 354, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150
  },
  354: { name: "kido",
    pic: 999, state: 15, wait: 0, next: 304, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  355: { name: "tayu",
    pic: 999, state: 15, wait: 0, next: 356, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 165
  },
  356: { name: "tayu",
    pic: 999, state: 15, wait: 0, next: 367, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/tayuya",
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  357: { name: "jiro",
    pic: 999, state: 15, wait: 0, next: 350, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 300
  },
  360: { name: "self",
    pic: 999, state: 15, wait: 0, next: 240, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  367: { name: "song5",
    pic: 290, state: 26, wait: 1, next: 368, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 165,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  368: { name: "song5",
    pic: 291, state: 26, wait: 1, next: 369, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  369: { name: "flute5",
    pic: 292, state: 3, wait: 5, next: 370, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  370: { name: "flute5",
    pic: 293, state: 3, wait: 0, next: 371, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  371: { name: "flute5",
    pic: 294, state: 3, wait: 3, next: 372, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/058",
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  372: { name: "flute5",
    pic: 292, state: 3, wait: 5, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 55, y: 79, action: 1, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  373: { name: "flute5",
    pic: 293, state: 3, wait: 2, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/102",
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 55, y: 79, action: 2, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  374: { name: "flute5",
    pic: 294, state: 3, wait: 8, next: 375, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/101",
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 55, y: 79, action: 3, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  375: { name: "flute5",
    pic: 292, state: 3, wait: 8, next: 376, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/102",
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 55, y: 79, action: 4, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  376: { name: "flute5",
    pic: 293, state: 3, wait: 5, next: 377, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/058",
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  377: { name: "song1",
    pic: 291, state: 26, wait: 1, next: 378, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  378: { name: "song1",
    pic: 290, state: 8065, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  379: { name: "bone_spikes2",
    pic: 280, state: 15, wait: 0, next: 380, dvx: 550, dvz: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    sound: "1/kimim",
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  380: { name: "bone_spikes2",
    pic: 281, state: 15, wait: 1, next: 381, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 97, action: 170, dvx: 0, dvy: 0, oid: 220, facing: 30
    }
  },
  381: { name: "bone_spikes2",
    pic: 281, state: 15, wait: 0, next: 382, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 97, action: 170, dvx: 25, dvy: 0, oid: 220, facing: 40
    }
  },
  382: { name: "bone_spikes2",
    pic: 281, state: 15, wait: 0, next: 383, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 97, action: 170, dvx: 50, dvy: 0, oid: 220, facing: 40
    }
  },
  383: { name: "bone_spikes2",
    pic: 281, state: 15, wait: 0, next: 384, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 97, action: 170, dvx: 75, dvy: 0, oid: 220, facing: 50
    }
  },
  384: { name: "bone_spikes2",
    pic: 281, state: 15, wait: 0, next: 385, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  385: { name: "bone_spikes2",
    pic: 281, state: 15, wait: 5, next: 386, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  386: { name: "bone_spikes2",
    pic: 281, state: 8041, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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