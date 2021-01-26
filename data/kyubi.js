define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/kyubi.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite//naruto_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(195-145)": "sprite//kyubi_3.png", w: 711, h: 95, row: 1, col: 6
      },
      {
        "file(146-165)": "sprite//4tk.png", w: 200, h: 135, row: 4, col: 5
      },
      {
        "file(166-200)": "sprite//4tk2.png", w: 200, h: 135, row: 4, col: 8
      },
      {
        "file(201-220)": "sprite//kyubi_3.png", w: 711, h: 95, row: 1, col: 12
      }
    ],
    name: "Naruto",
    head: "sprite/kyubi_f.png",
    small: "sprite//kyubi_s.png",
    walking_frame_rate: 3,
    walking_speed: 9,
    walking_speedz: 2.5,
    running_frame_rate: 3,
    running_speed: 22,
    running_speedz: 3.7,
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
    pic: 0, state: 0, wait: 5, next: 1, dvx: 550, dvy: 0, centerx: 47, centery: 77, hit_a: 65, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Fj: 280, hit_Ua: 240, hit_Uj: 270, hit_Da: 232,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 39, y: 79, weaponact: 1000, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 5, next: 2, dvx: 0, dvy: 0, centerx: 49, centery: 77, hit_a: 60, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 39, y: 79, weaponact: 1000, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 5, next: 3, dvx: 0, dvy: 0, centerx: 48, centery: 77, hit_a: 60, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
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
    pic: 3, state: 18, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 48, centery: 77, hit_a: 65, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
    wpoint: {
      kind: 3, x: 39, y: 79, weaponact: 1000, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      }
    ]
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 65, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
    sound: "1/004",
    wpoint: {
      kind: 3, x: 39, y: 79, weaponact: 1000, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      }
    ]
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      }
    ]
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 0, hit_j: 0, hit_Fa: 255, hit_Ua: 240, hit_Fj: 280, hit_Uj: 270, hit_Da: 232,
    sound: "1/003",
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      }
    ]
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/031",
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 0, y: 0, w: 85, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 85, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      }
    ]
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 85, h: 9999, zwidth: 15, dvx: 0, dvy: 0, fall: -1, vrest: 8, bdefend: 100, injury: 1, effect: 5
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 23, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 23, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
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
  20: { name: "run4tk",
    pic: 172, state: 15, wait: 2, next: 21, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 0, hit_d: 315, hit_j: -21, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  21: { name: "run4tk",
    pic: 173, state: 15, wait: 2, next: 22, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 376, hit_d: 315, hit_j: -22, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 315
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  22: { name: "run4tk",
    pic: 174, state: 15, wait: 2, next: 23, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 365, hit_d: 315, hit_j: -23, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 360
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  23: { name: "run4tk",
    pic: 175, state: 15, wait: 2, next: 24, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 376, hit_d: 376, hit_j: -24, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  24: { name: "run4tk",
    pic: 172, state: 15, wait: 2, next: 25, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 365, hit_d: 315, hit_j: -25, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 360
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  25: { name: "run4tk",
    pic: 173, state: 15, wait: 2, next: 26, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 365, hit_d: 376, hit_j: -26, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 315
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  26: { name: "run4tk",
    pic: 174, state: 15, wait: 2, next: 27, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 376, hit_d: 365, hit_j: -27, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 315
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  27: { name: "run4tk",
    pic: 175, state: 15, wait: 2, next: 355, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 315, hit_d: 376, hit_j: -355, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 3, next: 61, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 18, w: 28, h: 60
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 49, y: 43, w: 30, h: 16, vrest: 10, dvx: 2, bdefend: 16, injury: 20, effect: 1
    },
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  63: { name: "punch",
    pic: 13, state: 0, wait: 3, next: 64, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 65, hit_d: 0, hit_j: 0,
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
    pic: 10, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 39, y: 19, w: 21, h: 61
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  65: { name: "punch",
    pic: 10, state: 3, wait: 3, next: 66, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    bdy: {
      kind: 0, x: 27, y: 17, w: 31, h: 63
    }
  },
  66: { name: "punch",
    pic: 14, state: 3, wait: 3, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 27, y: 17, w: 31, h: 63
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  67: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 68, dvx: 0, dvy: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  68: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 69, dvx: 1, dvy: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 45, y: 44, w: 33, h: 14, vrest: 10, dvx: 2, bdefend: 16, injury: 20, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ]
  },
  69: { name: "punch",
    pic: 17, state: 0, wait: 2, next: 79, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 70, hit_d: 0, hit_j: 0,
    sound: "1/029",
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  70: { name: "super_punch",
    pic: 24, state: 3, wait: 2, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  71: { name: "super_punch",
    pic: 25, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
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
    pic: 26, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/027",
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    },
    itr: {
      kind: 0, x: 55, y: 44, w: 33, h: 14, fall: 100, dvx: 20, dvy: -15, bdefend: 100, injury: 35, effect: 1
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
    pic: 28, state: 3, wait: 3, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  75: { name: "chakra_arms",
    pic: 192, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 47, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 31, y: 34, w: 38, h: 41
    }
  },
  79: { name: "punch",
    pic: 23, state: 3, wait: 3, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ]
  },
  80: { name: "jump_attack",
    pic: 67, state: 3, wait: 2, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  81: { name: "jump_attack",
    pic: 68, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 19, w: 32, h: 60
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ],
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 12, dvy: -5, fall: 100, vrest: 15, bdefend: 100, injury: 60
    }
  },
  82: { name: "jump_attack",
    pic: 69, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    },
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 12, dvy: -5, fall: 100, vrest: 15, bdefend: 100, injury: 60
    }
  },
  83: { name: "jump_attack",
    pic: 59, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 19, w: 32, h: 60
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ]
  },
  85: { name: "run_attack",
    pic: 24, state: 3, wait: 2, next: 71, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  90: { name: "dash_attack",
    pic: 67, state: 3, wait: 2, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
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
  96: { name: "hand",
    pic: 201, state: 15, wait: 1, next: 97, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 335, y: 16, w: 52, h: 65,
      catchingact: [153, 153]
    }
  },
  97: { name: "hand",
    pic: 202, state: 15, wait: 1, next: 98, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 415, y: 16, w: 52, h: 65,
      catchingact: [153, 153]
    }
  },
  98: { name: "hand",
    pic: 203, state: 15, wait: 1, next: 154, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 480, y: 16, w: 52, h: 65,
      catchingact: [152, 152]
    }
  },
  99: { name: "hand",
    pic: 202, state: 15, wait: 0, next: 156, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
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
    pic: 40, state: 6, wait: 1, next: 103, dvx: 16, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 42, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  103: { name: "rowing",
    pic: 40, state: 6, wait: 1, next: 104, dvx: 16, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  104: { name: "rowing",
    pic: 999, state: 6, wait: 2, next: 105, dvx: 16, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  105: { name: "rowing",
    pic: 40, state: 6, wait: 1, next: 999, dvx: 15, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    pic: 0, state: 7, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 47, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  111: { name: "defend",
    pic: 0, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 47, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 60, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 76, weaponact: 1000, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 55, state: 9, wait: 1, next: 122, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  122: { name: "catching",
    pic: 56, state: 15, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 30, y: 80, action: 119, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  123: { name: "catching",
    pic: 57, state: 15, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  124: { name: "catching",
    pic: 58, state: 15, wait: 1, next: 125, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  125: { name: "catching",
    pic: 38, state: 15, wait: 1, next: 126, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  126: { name: "catching",
    pic: 57, state: 15, wait: 1, next: 127, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  127: { name: "catching",
    pic: 58, state: 15, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  128: { name: "catching",
    pic: 38, state: 15, wait: 1, next: 295, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  145: { name: "chakra_blasting",
    pic: 170, state: 15, wait: 0, next: 341, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 335, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  150: { name: "transform-heal",
    pic: 46, state: 15, wait: 0, next: 304, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, mp: 499,
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  151: { name: "catching",
    pic: 205, state: 9, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 485, y: 39, vaction: 130, throwvz: -842150451, cover: 0, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  152: { name: "catching",
    pic: 206, state: 9, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 400, y: 39, vaction: 130, throwvz: -842150451, cover: 0, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  153: { name: "catching",
    pic: 207, state: 9, wait: 1, next: 265, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 250, y: 39, vaction: 130, throwvz: -842150451, cover: 0, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  154: { name: "hand",
    pic: 204, state: 15, wait: 1, next: 155, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 510, y: 16, w: 52, h: 65,
      catchingact: [151, 151]
    }
  },
  155: { name: "hand",
    pic: 203, state: 15, wait: 1, next: 99, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  156: { name: "hand",
    pic: 201, state: 15, wait: 1, next: 261, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
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
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 33, y: 33, w: 20, h: 48
      },
      {
        kind: 0, x: 25, y: 50, w: 15, h: 29
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
        kind: 0, x: 25, y: 55, w: 30, h: 27
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
        kind: 0, x: 18, y: 29, w: 48, h: 17
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
        kind: 0, x: 13, y: 54, w: 18, h: 17
      }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 2, state: 15, wait: 5, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  232: { name: "chakra_arms",
    pic: 178, state: 3, wait: 2, next: 233, dvx: 0, dvy: 0, centerx: 46, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0, mp: 2000,
    bdy: {
      kind: 1, x: 26, y: 49, w: 48, h: 28
    }
  },
  233: { name: "chakra_arms",
    pic: 179, state: 3, wait: 3, next: 234, dvx: 0, dvy: 0, centerx: 47, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 24, y: 49, w: 50, h: 28
    }
  },
  234: { name: "chakra_arms",
    pic: 180, state: 3, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 48, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 25, y: 49, w: 51, h: 28
    }
  },
  235: { name: "chakra_arms",
    pic: 181, state: 3, wait: 3, next: 236, dvx: 0, dvy: 0, centerx: 49, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 28, y: 48, w: 42, h: 28
    }
  },
  236: { name: "chakra_arms",
    pic: 181, state: 3, wait: 7, next: 293, dvx: 0, dvy: 0, centerx: 49, centery: 76, hit_a: 237, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 51, y: 75, action: 134, dvx: 0, dvy: 0, oid: 436, facing: 0
    }
  },
  237: { name: "chakra_arms",
    pic: 182, state: 3, wait: 2, next: 238, dvx: 0, dvy: 0, centerx: 49, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, mp: 2000
  },
  238: { name: "chakra_arms",
    pic: 183, state: 3, wait: 3, next: 239, dvx: 0, dvy: 0, centerx: 51, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 29, y: 46, w: 44, h: 33
    }
  },
  239: { name: "chakra_arms",
    pic: 184, state: 3, wait: 1, next: 251, dvx: 0, dvy: 0, centerx: 51, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 29, y: 46, w: 44, h: 33
    }
  },
  240: { name: "scream",
    pic: 50, state: 15, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 460,
    sound: "1/1869",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  241: { name: "scream",
    pic: 51, state: 1700, wait: 2, next: 242, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 30, action: 55, dvx: 0, dvy: 0, oid: 203
    }
  },
  242: { name: "scream",
    pic: 52, state: 15, wait: 2, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 88, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  243: { name: "scream",
    pic: 53, state: 15, wait: 2, next: 244, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "scream",
    pic: 54, state: 15, wait: 1, next: 245, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  245: { name: "scream",
    pic: 52, state: 15, wait: 1, next: 246, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  246: { name: "scream",
    pic: 53, state: 15, wait: 1, next: 247, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  247: { name: "scream",
    pic: 54, state: 15, wait: 1, next: 248, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  248: { name: "scream",
    pic: 52, state: 15, wait: 1, next: 249, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  249: { name: "scream",
    pic: 53, state: 15, wait: 1, next: 250, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  250: { name: "scream",
    pic: 54, state: 15, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "chakra_arms",
    pic: 185, state: 3, wait: 3, next: 252, dvx: 0, dvy: 0, centerx: 50, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 29, y: 46, w: 44, h: 33
    }
  },
  252: { name: "chakra_arms",
    pic: 185, state: 3, wait: 7, next: 292, dvx: 0, dvy: 0, centerx: 50, centery: 76, hit_a: 253, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 51, y: 75, action: 134, dvx: 0, dvy: 0, oid: 436, facing: 1
    }
  },
  253: { name: "chakra_arms",
    pic: 186, state: 3, wait: 2, next: 254, dvx: 0, dvy: 0, centerx: 46, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0, mp: 2000
  },
  254: { name: "chakra_arms",
    pic: 187, state: 3, wait: 3, next: 290, dvx: 0, dvy: 0, centerx: 47, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 25, y: 48, w: 48, h: 29
    }
  },
  255: { name: "hand",
    pic: 10, state: 15, wait: 1, next: 256, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 6000,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  256: { name: "hand",
    pic: 35, state: 15, wait: 1, next: 257, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  257: { name: "hand",
    pic: 140, state: 15, wait: 1, next: 258, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  258: { name: "hand",
    pic: 141, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 100, y: 16, w: 52, h: 65,
      catchingact: [266, 266]
    }
  },
  259: { name: "hand",
    pic: 142, state: 15, wait: 1, next: 260, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 182, y: 16, w: 52, h: 65,
      catchingact: [266, 266]
    }
  },
  260: { name: "hand",
    pic: 143, state: 15, wait: 1, next: 96, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 255, y: 16, w: 52, h: 65,
      catchingact: [265, 265]
    }
  },
  261: { name: "hand",
    pic: 143, state: 15, wait: 0, next: 262, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  262: { name: "hand",
    pic: 142, state: 15, wait: 0, next: 263, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  263: { name: "hand",
    pic: 35, state: 15, wait: 0, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  264: { name: "super_punch",
    pic: 24, state: 3, wait: 2, next: 269, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 2000,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  265: { name: "catching",
    pic: 208, state: 9, wait: 1, next: 266, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 168, y: 39, vaction: 130, throwvz: -842150451, cover: 0, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  266: { name: "catching",
    pic: 209, state: 9, wait: 1, next: 267, dvx: 0, dvy: 0, centerx: 50, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 105, y: 39, vaction: 130, throwvz: -842150451, cover: 0, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  267: { name: "catching",
    pic: 35, state: 9, wait: 0, next: 268, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 95, y: 39, vaction: 130, throwvz: -842150451, cover: 0, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  268: { name: "catching",
    pic: 35, state: 15, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  269: { name: "super_punch",
    pic: 25, state: 3, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  270: { name: "3tail",
    pic: 50, state: 15, wait: 2, next: 271, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 6000,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  271: { name: "3tail",
    pic: 51, state: 15, wait: 2, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1997",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  272: { name: "3tail",
    pic: 52, state: 15, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  273: { name: "3tail",
    pic: 53, state: 15, wait: 3, next: 274, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  274: { name: "3tail",
    pic: 45, state: 15, wait: 3, next: 275, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  275: { name: "3tail",
    pic: 46, state: 15, wait: 3, next: 276, dvx: 0, dvy: 0, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  276: { name: "3tail",
    pic: 41, state: 15, wait: 3, next: 277, dvx: 0, dvy: 0, centerx: 52, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 305,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  277: { name: "3tail",
    pic: 42, state: 15, wait: 3, next: 278, dvx: 0, dvy: 0, centerx: 52, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 305,
    opoint: {
      kind: 1, x: 39, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  278: { name: "3tail",
    pic: 43, state: 15, wait: 3, next: 279, dvx: 0, dvy: 0, centerx: 52, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 305,
    itr: {
      kind: 0, x: 0, y: 100, w: 85, h: 9999, zwidth: 25, dvx: 0, dvy: 0, fall: -1, vrest: 5, bdefend: 100, injury: 2, effect: 5
    }
  },
  279: { name: "3tail",
    pic: 44, state: 18, wait: 17, next: 999, dvx: 0, dvy: 0, centerx: 52, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 80, action: 55, dvx: 0, dvy: 0, oid: 223, facing: 0
    }
  },
  280: { name: "rasengan",
    pic: 10, state: 15, wait: 1, next: 281, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 6000,
    sound: "1/078",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  281: { name: "rasengan",
    pic: 29, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  282: { name: "rasengan",
    pic: 39, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  283: { name: "rasengan",
    pic: 47, state: 15, wait: 1, next: 284, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  284: { name: "rasengan",
    pic: 48, state: 15, wait: 1, next: 285, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  285: { name: "rasengan",
    pic: 49, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  286: { name: "rasengan",
    pic: 55, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  287: { name: "rasengan_run",
    pic: 37, state: 18, wait: 1, next: 288, dvx: 100, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: 4212111, w: 100, h: 100
      }
    ],
    itr: [
      {
        kind: 3, x: 35, y: 16, w: 55, h: 65, zwidth: 25,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 2545886, w: 100, h: 100, zwidth: 500, dvx: 400
      }
    ]
  },
  288: { name: "rasengan_run",
    pic: 37, state: 18, wait: 1, next: 289, dvx: 100, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: 4212111, w: 100, h: 100
      }
    ],
    itr: [
      {
        kind: 3, x: 35, y: 16, w: 55, h: 65, zwidth: 25,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 2545886, w: 100, h: 100, zwidth: 500, dvx: 400
      }
    ]
  },
  289: { name: "rasengan_run",
    pic: 37, state: 18, wait: 3, next: 64, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: 4212111, w: 100, h: 100
      }
    ],
    itr: [
      {
        kind: 3, x: 35, y: 16, w: 55, h: 65, zwidth: 25,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 2545886, w: 100, h: 100, zwidth: 500, dvx: 400
      }
    ]
  },
  290: { name: "chakra_arms",
    pic: 188, state: 3, wait: 1, next: 291, dvx: 0, dvy: 0, centerx: 49, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 27, y: 48, w: 50, h: 29
    }
  },
  291: { name: "chakra_arms",
    pic: 189, state: 3, wait: 3, next: 292, dvx: 0, dvy: 0, centerx: 51, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 29, y: 48, w: 52, h: 29
    }
  },
  292: { name: "chakra_arms",
    pic: 189, state: 3, wait: 7, next: 293, dvx: 0, dvy: 0, centerx: 51, centery: 76, hit_a: 237, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 51, y: 75, action: 134, dvx: 0, dvy: 0, oid: 436, facing: 0
    }
  },
  293: { name: "chakra_arms",
    pic: 190, state: 15, wait: 3, next: 294, dvx: 0, dvy: 0, centerx: 40, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0
  },
  294: { name: "chakra_arms",
    pic: 191, state: 15, wait: 3, next: 75, dvx: 0, dvy: 0, centerx: 53, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 1, x: 30, y: 35, w: 43, h: 40
    }
  },
  295: { name: "catching",
    pic: 57, state: 15, wait: 1, next: 296, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  296: { name: "catching",
    pic: 58, state: 15, wait: 1, next: 297, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  297: { name: "catching",
    pic: 38, state: 15, wait: 1, next: 298, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  298: { name: "catching",
    pic: 57, state: 15, wait: 1, next: 299, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  299: { name: "catching",
    pic: 58, state: 15, wait: 1, next: 300, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  300: { name: "catching",
    pic: 38, state: 15, wait: 1, next: 301, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  301: { name: "catching",
    pic: 57, state: 15, wait: 1, next: 302, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  302: { name: "catching",
    pic: 58, state: 15, wait: 1, next: 303, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  303: { name: "catching",
    pic: 38, state: 15, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  304: { name: "four_tails_transform",
    pic: 46, state: 15, wait: 0, next: 306, dvx: 0, dvy: 0, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 52, y: 80, action: 180, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  305: { name: "four_tails_transform",
    pic: 46, state: 15, wait: 10, next: 150, dvx: 0, dvy: 0, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  306: { name: "four_tails_transform",
    pic: 146, state: 15, wait: 2, next: 311, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 10, y: 150, action: 135, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 52, y: -6846518779, w: 72, h: 100
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  307: { name: "four_tails_stance1",
    pic: 147, state: 15, wait: 4, next: 308, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 376, hit_d: 0, hit_j: 315, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  308: { name: "four_tails_stance1",
    pic: 148, state: 15, wait: 4, next: 309, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 360, hit_d: 0, hit_j: 315, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 355
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  309: { name: "four_tails_stance1",
    pic: 149, state: 15, wait: 4, next: 310, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 315, hit_d: 0, hit_j: 376, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 315
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  310: { name: "four_tails_stance1",
    pic: 150, state: 15, wait: 4, next: 355, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 315, hit_d: 0, hit_j: 360, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 360
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  311: { name: "four_tails_transform",
    pic: 146, state: 15, wait: 0, next: 392, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 2, x: 10, y: 150, action: 135, dvx: 0, dvy: 0, oid: 447, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  312: { name: "super_punch",
    pic: 26, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/027",
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    },
    itr: {
      kind: 0, x: 55, y: 44, w: 33, h: 14, fall: 100, dvx: 20, dvy: -15, bdefend: 100, injury: 70, effect: 1
    }
  },
  315: { name: "four_tails_atk_shcok",
    pic: 151, state: 15, wait: 2, next: 316, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  316: { name: "four_tails_atk_shcok",
    pic: 152, state: 15, wait: 1, next: 317, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  317: { name: "four_tails_atk_shcok",
    pic: 153, state: 15, wait: 0, next: 318, dvx: 0, dvy: 0, centerx: 111, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    opoint: {
      kind: 1, x: 150, y: 135, action: 100, dvx: 3, dvy: 0, oid: 446, facing: 30
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  318: { name: "four_tails_atk_shcok",
    pic: 153, state: 18, wait: 0, next: 319, dvx: 0, dvy: 0, centerx: 105, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    opoint: {
      kind: 1, x: 200, y: 135, action: 106, dvx: 13, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  319: { name: "four_tails_atk_shcok",
    pic: 153, state: 15, wait: 0, next: 320, dvx: 0, dvy: 0, centerx: 111, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  320: { name: "four_tails_atk_shcok",
    pic: 153, state: 15, wait: 0, next: 321, dvx: 0, dvy: 0, centerx: 105, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  321: { name: "four_tails_atk_shcok",
    pic: 153, state: 15, wait: 5, next: 307, dvx: 0, dvy: 0, centerx: 111, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  325: { name: "four_tails_chakra_blast",
    pic: 154, state: 15, wait: 0, next: 326, dvx: 550, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  326: { name: "four_tails_chakra_blast",
    pic: 157, state: 15, wait: 0, next: 327, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  327: { name: "four_tails_chakra_blast",
    pic: 158, state: 15, wait: 15, next: 328, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    opoint: {
      kind: 1, x: 135, y: 150, action: 110, dvx: 13, dvy: 0, oid: 446, facing: 0
    },
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  328: { name: "four_tails_chakra_blast",
    pic: 157, state: 15, wait: 1, next: 329, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  329: { name: "four_tails_chakra_blast",
    pic: 159, state: 15, wait: 0, next: 330, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  330: { name: "four_tails_chakra_blast",
    pic: 160, state: 15, wait: 0, next: 331, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  331: { name: "four_tails_chakra_blast",
    pic: 161, state: 15, wait: 0, next: 332, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  332: { name: "four_tails_chakra_blast",
    pic: 162, state: 15, wait: 0, next: 333, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  333: { name: "four_tails_chakra_blast",
    pic: 163, state: 15, wait: 0, next: 334, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  334: { name: "four_tails_chakra_blast",
    pic: 164, state: 15, wait: 0, next: 335, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  335: { name: "four_tails_chakra_blast",
    pic: 165, state: 15, wait: 1, next: 336, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  336: { name: "four_tails_chakra_blast",
    pic: 166, state: 15, wait: 1, next: 337, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  337: { name: "four_tails_chakra_blast",
    pic: 167, state: 15, wait: 1, next: 338, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  338: { name: "four_tails_chakra_blast",
    pic: 168, state: 15, wait: 1, next: 339, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  339: { name: "four_tails_chakra_blast",
    pic: 169, state: 15, wait: 4, next: 340, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  340: { name: "chakra_blasting",
    pic: 170, state: 15, wait: 0, next: 145, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 150, action: 125, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  341: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 342, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    opoint: {
      kind: 1, x: 130, y: 140, action: 122, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  342: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 343, dvx: 0, dvy: 0, centerx: 103, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 130, y: 150, action: 125, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  343: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 344, dvx: 0, dvy: 0, centerx: 113, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 155, action: 130, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  344: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 345, dvx: 0, dvy: 0, centerx: 104, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 159, action: 122, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  345: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 346, dvx: 0, dvy: 0, centerx: 112, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 125, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  346: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 347, dvx: 0, dvy: 0, centerx: 103, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: [
      {
        kind: 1, x: 130, y: 160, action: 130, dvx: 0, dvy: 0, oid: 446, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  347: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 348, dvx: 0, dvy: 0, centerx: 115, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 155, action: 122, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  348: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 349, dvx: 0, dvy: 0, centerx: 103, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 125, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  349: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 350, dvx: 0, dvy: 0, centerx: 113, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 150, action: 130, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  350: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 351, dvx: 0, dvy: 0, centerx: 104, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 135, action: 122, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  351: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 352, dvx: 0, dvy: 0, centerx: 112, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 155, action: 125, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  352: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 353, dvx: 0, dvy: 0, centerx: 103, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 140, action: 130, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  353: { name: "chakra_blasting",
    pic: 171, state: 15, wait: 0, next: 380, dvx: 0, dvy: 0, centerx: 115, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 155, action: 122, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  355: { name: "run4tk",
    pic: 172, state: 15, wait: 2, next: 356, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 376, hit_d: 376, hit_j: -356, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  356: { name: "run4tk",
    pic: 173, state: 15, wait: 2, next: 357, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 315, hit_d: 376, hit_j: -357, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 315
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  357: { name: "run4tk",
    pic: 174, state: 15, wait: 2, next: 358, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 365, hit_d: 315, hit_j: -358, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  358: { name: "run4tk",
    pic: 175, state: 15, wait: 2, next: 20, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 376, hit_d: 376, hit_j: -20, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  360: { name: "four_tails_chakra_tail",
    pic: 154, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  361: { name: "four_tails_chakra_tail",
    pic: 155, state: 15, wait: 1, next: 362, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  362: { name: "four_tails_chakra_tail",
    pic: 156, state: 18, wait: 2, next: 380, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 0, x: 118, y: 81, w: 63, h: 39, dvx: 15, dvy: -5, fall: 100, vrest: 10, bdefend: 100, injury: 85, effect: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  365: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 366, dvx: 550, dvy: 0, dvz: 550, centerx: 115, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  366: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 367, dvx: 550, dvy: 0, dvz: 550, centerx: 115, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 130, y: 79, action: 84, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  367: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 368, dvx: 550, dvy: 0, dvz: 550, centerx: 130, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 105, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 31
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  368: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 369, dvx: 550, dvy: 0, dvz: 550, centerx: 105, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 105, y: 105, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  369: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 370, dvx: 550, dvy: 0, dvz: 550, centerx: 135, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  370: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 371, dvx: 550, dvy: 0, dvz: 550, centerx: 110, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  371: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 372, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 10, y: 150, action: 145, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  372: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 373, dvx: 550, dvy: 0, dvz: 550, centerx: 115, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  373: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 374, dvx: 550, dvy: 0, dvz: 550, centerx: 130, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  374: { name: "scream",
    pic: 176, state: 15, wait: 0, next: 375, dvx: 550, dvy: 0, dvz: 550, centerx: 110, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  375: { name: "scream",
    pic: 176, state: 15, wait: 5, next: 380, dvx: 550, dvy: 0, dvz: 550, centerx: 120, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  376: { name: "four_tails_hand",
    pic: 151, state: 15, wait: 3, next: 377, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  377: { name: "four_tails_hand",
    pic: 152, state: 15, wait: 1, next: 378, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  378: { name: "four_tails_hand",
    pic: 177, state: 15, wait: 8, next: 379, dvx: 0, dvy: 0, centerx: 111, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 150, y: 135, action: 165, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    }
  },
  379: { name: "four_tails_hand",
    pic: 177, state: 15, wait: 12, next: 380, dvx: 0, dvy: 0, centerx: 111, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    }
  },
  380: { name: "four_tails_stance2",
    pic: 147, state: 15, wait: 4, next: 381, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 315, hit_d: 355, hit_j: 315, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: [
      {
        kind: 1, x: 0, y: 0, action: 45, dvx: 0, dvy: 0, oid: 224, facing: 0
      },
      {
        kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
      }
    ]
  },
  381: { name: "four_tails_stance2",
    pic: 148, state: 15, wait: 4, next: 382, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 376, hit_d: 355, hit_j: 315, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 355
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  382: { name: "four_tails_stance2",
    pic: 149, state: 15, wait: 4, next: -355, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 315, hit_d: 355, hit_j: 360, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  383: { name: "run4tk",
    pic: 172, state: 15, wait: 2, next: 384, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 365, hit_d: 315, hit_j: 360, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  384: { name: "run4tk",
    pic: 173, state: 15, wait: 2, next: 385, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 376, hit_d: 0, hit_j: 315, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 315
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  385: { name: "run4tk",
    pic: 174, state: 15, wait: 2, next: 386, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 365, hit_d: 376, hit_j: 315, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  386: { name: "run4tk",
    pic: 175, state: 15, wait: 2, next: 383, dvx: 12, dvy: 0, dvz: 3, centerx: 115, centery: 130, hit_a: 360, hit_d: 0, hit_j: 376, hit_Fa: 383, hit_Fj: 325, hit_Da: 315, hit_Dj: 376, hit_Ua: 365,
    bdy: {
      kind: 0, x: 68, y: 86, w: 72, h: 50
    },
    itr: {
      kind: 8, x: 98, y: 98, w: 36, h: 32, dvx: 365
    },
    wpoint: {
      kind: 1, x: 108, y: 52, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 108, y: 79, action: 87, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  388: { name: "kyubii",
    pic: 0, state: 15, wait: 0, next: 389, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  389: { name: "kyubii",
    pic: 0, state: 15, wait: 4, next: 999, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: 60000, w: 79, h: 500
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 195, dvx: 0, dvy: 0, oid: 204, facing: 0
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
  392: { name: "heart_swal",
    pic: 148, state: 15, wait: 6, next: 307, dvx: 0, dvy: 0, centerx: 108, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: -876427836875656200, w: 100, h: 20
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 316, dvx: 0, dvy: 0, oid: 203, facing: 0
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
  400: { name: "chidoriclash",
    pic: 999, state: 15, wait: 0, next: 401, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/narutsas",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  401: { name: "chidoriclash",
    pic: 57, state: 15, wait: 0, next: 402, dvx: -55, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    },
    opoint: {
      kind: 1, x: 43, y: 19, action: 250, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  402: { name: "chidoriclash",
    pic: 57, state: 15, wait: 100, next: 403, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  403: { name: "chidoriclash",
    pic: 57, state: 8082, wait: 2, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  }
  }
});