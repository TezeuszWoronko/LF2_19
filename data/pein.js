define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/pein.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/pein_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-150)": "sprite/nagato2.png", w: 209, h: 128, row: 3, col: 3
      }
    ],
    name: "Pein",
    head: "sprite/pein_f.png",
    small: "sprite/pein_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 15,
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
    rowing_distance: 25,
    hidden: 0
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 280, hit_ja: 270, hit_Fj: 255, hit_Da: 320, hit_Dj: 300, hit_Uj: 315, hit_Ua: 340,
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
    pic: 107, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 29, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 23, w: 37, h: 56
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 108, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 29, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 23, w: 37, h: 56
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  14: { name: "heavy_obj_walk",
    pic: 109, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 29, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 26, y: 23, w: 37, h: 56
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  15: { name: "heavy_obj_walk",
    pic: 118, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 29, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 23, w: 37, h: 56
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
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
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
    pic: 8, state: 15, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
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
    pic: 8, state: 15, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
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
  30: { name: "jump_weapon_atck",
    pic: 70, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  35: { name: "run_weapon_atck",
    pic: 8, state: 15, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 70, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  45: { name: "light_weapon_thw",
    pic: 8, state: 15, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
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
    pic: 9, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1, dvx: 55, dvy: -4, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 119, state: 15, wait: 3, next: 51, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 65, dvy: -4, dvz: 2
    },
    bdy: {
      kind: 0, x: 20, y: 27, w: 38, h: 52
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 120, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 8, y: 39, w: 61, h: 23
      },
      {
        kind: 0, x: 16, y: 27, w: 38, h: 52
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 70, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 71, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
      }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 72, state: 15, wait: 15, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 67, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 400,
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
    pic: 68, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 400,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  62: { name: "punch",
    pic: 69, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/pein2",
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
    ],
    opoint: {
      kind: 1, x: -3, y: 80, action: 240, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  63: { name: "punch",
    pic: 69, state: 3, wait: 10, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  64: { name: "punch",
    pic: 67, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  65: { name: "punch",
    pic: 67, state: 3, wait: 1, next: 66, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 400,
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
    pic: 68, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 400,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  67: { name: "punch",
    pic: 69, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/pein3",
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -3, y: 80, action: 246, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
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
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  72: { name: "super_punch",
    pic: 26, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  73: { name: "super_punch",
    pic: 27, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
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
        kind: 0, x: 29, y: 57, w: 32, h: 23
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
        kind: 0, x: 29, y: 57, w: 32, h: 23
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
    pic: 64, state: 3, wait: 3, next: 81, dvx: 0, dvy: 0, centerx: 38, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/painatk2",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  81: { name: "jump_attack",
    pic: 116, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 21, w: 72, h: 21, dvx: 5, arest: 100, bdefend: 75, injury: 40
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
    pic: 117, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 45, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  85: { name: "run_attack",
    pic: 10, state: 3, wait: 2, next: 86, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 19, y: 24, w: 35, h: 54
      },
      {
        kind: 0, x: 10, y: 36, w: 27, h: 15
      }
    ]
  },
  86: { name: "run_attack",
    pic: 11, state: 3, wait: 1, next: 87, dvx: 6, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 24, y: 36, w: 55, h: 19
      },
      {
        kind: 0, x: 8, y: 51, w: 38, h: 27
      }
    ]
  },
  87: { name: "run_attack",
    pic: 12, state: 3, wait: 2, next: 88, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/pein_atk3",
    itr: {
      kind: 0, x: 35, y: 30, w: 55, h: 14, dvx: 25, dvy: 0, fall: 100, arest: 15, bdefend: 100, injury: 80
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
    pic: 13, state: 3, wait: 3, next: 89, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 2, y: 57, w: 41, h: 22
      }
    ]
  },
  89: { name: "run_attack",
    pic: 10, state: 3, wait: 1, next: 999, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 2, y: 57, w: 41, h: 22
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 71, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  91: { name: "dash_attack",
    pic: 44, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 7, y: 19, w: 37, h: 45
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
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
        kind: 0, x: 22, y: 36, w: 50, h: 18
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
        kind: 0, x: 22, y: 36, w: 50, h: 18
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
        kind: 0, x: 28, y: 37, w: 24, h: 34
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
    sound: "1/pein3",
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
    pic: 61, state: 15, wait: 5, next: 12, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
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
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
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
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
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
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
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
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 37, y: 28
    },
    wpoint: {
      kind: 1, x: 41, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 22
    },
    wpoint: {
      kind: 1, x: 40, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 27, y: 46
    },
    wpoint: {
      kind: 1, x: 24, y: 32, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
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
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
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
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  139: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 36
    },
    wpoint: {
      kind: 1, x: 22, y: 47, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  140: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 23, y: 43, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  141: { name: "picked_caught",
    pic: 32, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 30, y: 43, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  142: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  143: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 30, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  144: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 39, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  145: { name: "watcher",
    pic: 33, state: 10, wait: 3, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  146: { name: "watcher",
    pic: 33, state: 10, wait: 3, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  147: { name: "watcher",
    pic: 33, state: 10, wait: 3, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  148: { name: "watcher",
    pic: 33, state: 10, wait: 3, next: 145, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/PainHit",
    wpoint: {
      kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 3, x: 0, y: 0, action: 323, dvx: 0, dvy: 0, oid: 27, facing: 0
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
    pic: 63, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 14, w: 19, h: 27
    }
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
    pic: 63, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 63, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
        kind: 0, x: 17, y: 25, w: 30, h: 55
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 47, y: 23, w: 23, h: 54
      },
      {
        kind: 0, x: 29, y: 41, w: 20, h: 37
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
      }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
    sound: "1/PainHit",
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
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 24, w: 39, h: 31
      },
      {
        kind: 0, x: 25, y: 53, w: 40, h: 27
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
      }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
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
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 32, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 52, y: 38, w: 20, h: 19
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
      }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 27, y: 22, w: 42, h: 58
      },
      {
        kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
      }
    ]
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
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
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
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
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 235, hit_d: 0, hit_j: 235,
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
  234: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  235: { name: "replacement",
    pic: 30, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  236: { name: "replacement",
    pic: 30, state: 15, wait: 2, next: 237, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 41, y: 70, action: 150, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 234, dvx: 30, dvy: -4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "punch1",
    pic: 999, state: 15, wait: 0, next: 239, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  239: { name: "punch1",
    pic: 999, state: 400, wait: 0, next: 240, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  240: { name: "punch1",
    pic: 999, state: 15, wait: 0, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "punch1",
    pic: 36, state: 15, wait: 1, next: 242, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  242: { name: "punch1",
    pic: 50, state: 15, wait: 1, next: 243, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "punch1",
    pic: 51, state: 15, wait: 1, next: 244, dvx: 1, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 44, w: 44, h: 14, vrest: 10, dvx: 15, dvy: -3, fall: 60, bdefend: 16, injury: 35
    }
  },
  244: { name: "punch1",
    pic: 52, state: 15, wait: 5, next: 245, dvx: 1, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 44, w: 44, h: 14, vrest: 10, dvx: 15, dvy: -3, fall: 60, bdefend: 16, injury: 35
    }
  },
  245: { name: "punch1",
    pic: 53, state: 18, wait: 1, next: 254, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  246: { name: "punch2",
    pic: 999, state: 15, wait: 0, next: 247, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  247: { name: "punch2",
    pic: 36, state: 15, wait: 1, next: 248, dvx: 10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  248: { name: "punch2",
    pic: 54, state: 15, wait: 3, next: 249, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  249: { name: "punch2",
    pic: 55, state: 15, wait: 1, next: 250, dvx: 1, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 30, w: 44, h: 10, vrest: 10, dvx: 15, dvy: -1, fall: 60, bdefend: 16, injury: 35
    }
  },
  250: { name: "punch2",
    pic: 56, state: 15, wait: 0, next: 251, dvx: 1, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 30, w: 44, h: 10, vrest: 10, dvx: 15, dvy: -1, fall: 60, bdefend: 16, injury: 35
    }
  },
  251: { name: "punch2",
    pic: 57, state: 18, wait: 4, next: 252, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  252: { name: "punch2",
    pic: 58, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 70, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  253: { name: "disappear",
    pic: 36, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  254: { name: "punch1",
    pic: 53, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 3, x: 40, y: 80, action: 40, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  255: { name: "stab_summon",
    pic: 67, state: 3, wait: 1, next: 256, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    sound: "1/pein_slow",
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  256: { name: "stab_summon",
    pic: 68, state: 3, wait: 1, next: 257, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    },
    itr: {
      kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  257: { name: "stab_summon",
    pic: 69, state: 3, wait: 3, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -50, y: 80, action: 260, dvx: 0, dvy: 0, oid: 438, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  258: { name: "stab_summon",
    pic: 69, state: 3, wait: 3, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -50, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  260: { name: "stab",
    pic: 41, state: 15, wait: 10, next: 261, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "stab",
    pic: 42, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "stab",
    pic: 45, state: 15, wait: 2, next: 263, dvx: 50, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: {
      kind: 3, x: 10, y: 16, w: 50, zwidth: 55, h: 65,
      catchingact: [267, 267]
    }
  },
  263: { name: "stab",
    pic: 45, state: 15, wait: 2, next: 264, dvx: 50, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 10, y: 16, w: 50, h: 65, zwidth: 55,
      catchingact: [267, 267]
    }
  },
  264: { name: "stab_finish",
    pic: 42, state: 15, wait: 5, next: 265, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "stab_finish",
    pic: 41, state: 18, wait: 3, next: 266, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "stab_finish",
    pic: 41, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 70, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  267: { name: "stabbing",
    pic: 43, state: 9, wait: 1, next: 268, dvx: 1, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    }
  },
  268: { name: "catching",
    pic: 44, state: 9, wait: 0, next: 269, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 100, decrease: 3
    }
  },
  269: { name: "catching",
    pic: 46, state: 9, wait: 0, next: 275, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  270: { name: "charge",
    pic: 67, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/pein2",
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
    pic: 68, state: 17, wait: 1, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
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
    pic: 69, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    opoint: {
      kind: 1, x: 43, y: 50, action: 4, dvx: 0, dvy: 0, oid: 203
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
  273: { name: "charge",
    pic: 69, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
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
  274: { name: "charge",
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
  275: { name: "catching",
    pic: 47, state: 9, wait: 0, next: 276, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  276: { name: "catching",
    pic: 48, state: 9, wait: 5, next: 277, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  277: { name: "catching",
    pic: 44, state: 9, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 53, vaction: 180, throwvx: 5, throwvy: -5, throwvz: 3, throwinjury: 30
    }
  },
  280: { name: "punch_summon",
    pic: 67, state: 3, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 170,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 23, y: 35, w: 37, h: 24
      }
    ]
  },
  281: { name: "punch_summon",
    pic: 68, state: 3, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  282: { name: "punch_summon",
    pic: 69, state: 3, wait: 3, next: 283, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -50, y: 80, action: 285, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  283: { name: "punch_summon",
    pic: 69, state: 3, wait: 3, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -50, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  285: { name: "punch",
    pic: 14, state: 15, wait: 10, next: 286, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  286: { name: "punch",
    pic: 15, state: 15, wait: 1, next: 287, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  287: { name: "punch",
    pic: 16, state: 15, wait: 3, next: 288, dvx: 550, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  288: { name: "punch",
    pic: 17, state: 15, wait: 1, next: 289, dvx: -1, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 45, y: 75, action: 6, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  289: { name: "punch",
    pic: 27, state: 15, wait: 0, next: 290, dvx: -1, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 22, action: 170, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  290: { name: "punch",
    pic: 27, state: 15, wait: 0, next: 291, dvx: -1, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  291: { name: "punch",
    pic: 28, state: 15, wait: 1, next: 292, dvx: 550, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  292: { name: "punch",
    pic: 29, state: 15, wait: 3, next: 293, dvx: 550, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  293: { name: "punch",
    pic: 15, state: 18, wait: 1, next: 294, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -424444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  294: { name: "punch",
    pic: 14, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 50, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  295: { name: "watcher",
    pic: 37, state: 3, wait: 0, next: 296, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  296: { name: "watcher",
    pic: 38, state: 3, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    }
  },
  297: { name: "watcher",
    pic: 39, state: 3, wait: 0, next: 298, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  298: { name: "watcher",
    pic: 68, state: 18, wait: 0, next: 299, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    itr: {
      kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    },
    opoint: {
      kind: 3, x: -3, y: 80, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  299: { name: "watcher",
    pic: 49, state: 3, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: -3, y: 80, action: 0, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  300: { name: "shield_summon",
    pic: 67, state: 3, wait: 1, next: 301, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 260,
    sound: "1/painatk2",
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 23, y: 35, w: 37, h: 24
      }
    ]
  },
  301: { name: "shield_summon",
    pic: 68, state: 3, wait: 1, next: 302, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    }
  },
  302: { name: "shield_summon",
    pic: 69, state: 3, wait: 0, next: 303, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 100, y: 80, action: 310, dvx: 0, dvy: 0, oid: 27, facing: 0
    }
  },
  303: { name: "shield_summon",
    pic: 69, state: 3, wait: 0, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 100, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  305: { name: "shield",
    pic: 23, state: 3, wait: 10, next: 306, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  306: { name: "shield",
    pic: 24, state: 3, wait: 2, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  307: { name: "shield",
    pic: 25, state: 3, wait: 2, next: 308, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  308: { name: "shield",
    pic: 26, state: 3, wait: 0, next: 309, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 70, action: 105, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  309: { name: "shield",
    pic: 26, state: 3, wait: 40, next: 293, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 15, x: -500, y: 0, w: 1000, h: 89, zwidth: 999, fall: 0, vrest: 1, bdefend: 0
    },
    opoint: {
      kind: 1, x: 39, y: 77, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  310: { name: "shield",
    pic: 41, state: 3, wait: 10, next: 311, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  311: { name: "shield",
    pic: 42, state: 3, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  312: { name: "shield",
    pic: 43, state: 3, wait: 1, next: 313, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  313: { name: "shield",
    pic: 44, state: 3, wait: 1, next: 325, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  315: { name: "bird",
    pic: 37, state: 3, wait: 0, next: 316, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    sound: "1/PainDies",
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 23, y: 35, w: 37, h: 24
      }
    ]
  },
  316: { name: "bird",
    pic: 38, state: 3, wait: 0, next: 317, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    }
  },
  317: { name: "bird",
    pic: 39, state: 3, wait: 1, next: 318, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  318: { name: "bird",
    pic: 68, state: 3, wait: 1, next: 319, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  319: { name: "bird",
    pic: 49, state: 3, wait: 10, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -3, y: 90, action: 78, dvx: 0, dvy: 0, oid: 401, facing: 0
    }
  },
  320: { name: "god_realm",
    pic: 67, state: 3, wait: 1, next: 321, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 125,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  321: { name: "god_realm",
    pic: 68, state: 3, wait: 1, next: 324, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    }
  },
  322: { name: "god_realm",
    pic: 69, state: 3, wait: 7, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/pein1",
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 130, y: 80, action: 275, dvx: 0, dvy: 0, oid: 438, facing: 0
    }
  },
  323: { name: "counter-trigger",
    pic: 999, state: 3, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: "0	x", y: -444444444, w: 9999999999999, h: 1000
    }
  },
  324: { name: "god_realm",
    pic: 69, state: 3, wait: 3, next: 322, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    }
  },
  325: { name: "shield",
    pic: 43, state: 3, wait: 1, next: 326, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  326: { name: "shield",
    pic: 44, state: 3, wait: 1, next: 327, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  327: { name: "shield",
    pic: 43, state: 3, wait: 1, next: 328, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  328: { name: "shield",
    pic: 44, state: 3, wait: 1, next: 329, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  329: { name: "shield",
    pic: 43, state: 3, wait: 1, next: 330, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 0, w: 200, h: 999999, zwidth: 25, fall: 999, dvx: -5, dvy: 3, vrest: 5, bdefend: 100, effect: 3, injury: 5
    }
  },
  330: { name: "punch",
    pic: 41, state: 18, wait: 2, next: 331, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  331: { name: "punch",
    pic: 41, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 40, y: 80, action: 40, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  340: { name: "sixpaths",
    pic: 67, state: 3, wait: 1, next: 341, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    sound: "1/pain",
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  341: { name: "sixpaths",
    pic: 68, state: 3, wait: 1, next: 350, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    }
  },
  342: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 343, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 90, y: 75, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  343: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 344, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 70, y: 75, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  344: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 345, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: -10, y: 75, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  345: { name: "sixpaths",
    pic: 69, state: 3, wait: 1, next: 346, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 20, y: 75, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  346: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 347, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: 90, y: 80, action: 60, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  347: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 348, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: 70, y: 80, action: 40, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  348: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 349, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: 20, y: 80, action: 70, dvx: 0, dvy: 0, oid: 236, facing: 1
    }
  },
  349: { name: "sixpaths",
    pic: 69, state: 3, wait: 0, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: -10, y: 80, action: 50, dvx: 0, dvy: 0, oid: 236, facing: 1
    }
  },
  350: { name: "sixpaths",
    pic: 69, state: 3, wait: 1, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: 20, y: 80, action: 303, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  351: { name: "sixpaths",
    pic: 69, state: 3, wait: 1, next: 342, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 3, x: 20, y: 80, action: 303, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  360: { name: "god_realm",
    pic: 67, state: 3, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 140,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  361: { name: "god_realm",
    pic: 69, state: 3, wait: 0, next: 362, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/Bansho",
    bdy: {
      kind: 0, x: 51, y: 34, w: 26, h: 16
    }
  },
  362: { name: "god_realm",
    pic: 69, state: 3, wait: 10, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 130, y: 80, action: 310, dvx: 0, dvy: 0, oid: 438, facing: 0
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
    pic: 999, state: 9, wait: 1, next: 395, dvx: 0, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
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
  400: { name: "sixpathsstab",
    pic: 12, state: 15, wait: 1, next: 401, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 350
  },
  401: { name: "sixpathsstab",
    pic: 13, state: 15, wait: 2, next: 403, dvx: 25, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    itr: {
      kind: 3, x: 10, y: 16, w: 30, h: 65, zwidth: 15,
      catchingact: [404, 404]
    }
  },
  403: { name: "sixpathsstab",
    pic: 13, state: 9, wait: 5, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  404: { name: "sixpathsstab",
    pic: 10, state: 9, wait: 1, next: 405, dvx: 1, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    }
  },
  405: { name: "sixpathsstab",
    pic: 10, state: 9, wait: 4, next: 406, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, injury: 5, decrease: 3
    }
  },
  406: { name: "sixpathsstab",
    pic: 73, state: 9, wait: 2, next: 407, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 3, x: 20, y: 80, action: 303, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  407: { name: "sixpathsstab",
    pic: 9, state: 9, wait: 1, next: 408, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 3, x: 20, y: 80, action: 303, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  408: { name: "throw_lying_man",
    pic: 9, state: 9, wait: 0, next: 409, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 65, y: 20, injury: 25, vaction: 135, dircontrol: 0, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  409: { name: "throw_lying_man",
    pic: 9, state: 9, wait: 0, next: 410, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 20, vaction: 181, throwvx: 1, dircontrol: 1, throwvy: -16, throwvz: 0, throwinjury: 0
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
  410: { name: "throw_lying_man",
    pic: 9, state: 9, wait: 0, next: 411, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  411: { name: "sixpathsstab",
    pic: 36, state: 9, wait: 2, next: 412, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  412: { name: "sixpathsstab",
    pic: 999, state: 9, wait: 2, next: 413, dvx: -10, dvy: -25, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  413: { name: "sixpathsstab",
    pic: 999, state: 9, wait: 0, next: 414, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  414: { name: "sixpathsstab",
    sound: "1/effect",
    pic: 140, state: 3000012, wait: 2, next: 415, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  415: { name: "sixpathsstab",
    pic: 141, state: 9, wait: 8, next: 416, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  416: { name: "sixpathsstab",
    pic: 142, state: 9, wait: 3, next: 417, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  417: { name: "sixpathsstab",
    pic: 143, state: 9, wait: 3, next: 418, dvx: 0, dvy: 6, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    itr: {
      kind: 0, x: -60, y: 30, w: 200, h: 50, dvx: -1, dvy: 40, fall: 70, arest: 15, bdefend: 100, injury: 135, effect: 1
    }
  },
  418: { name: "sixpathsstab",
    pic: 144, state: 9, wait: 10, next: 419, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 90, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  419: { name: "sixpathsstab",
    pic: 62, state: 9, wait: 2, next: 999, dvx: -5, dvy: -5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 3, x: 109, y: 15, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
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