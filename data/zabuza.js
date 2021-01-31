define({
  bmp: {
    file: [
      {
        "file(0-63)": "sprite/zabuza.png", w: 200, h: 135, row: 4, col: 16
      },
      {
        "file(64-95)": "sprite/zabuza3.png", w: 200, h: 135, row: 4, col: 9
      },
      {
        "file(96-139)": "sprite/kisame_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-148)": "sprite/kisame_3.png", w: 155, h: 95, row: 3, col: 3
      }
    ],
    name: "Zabuza",
    head: "sprite/zabuza_f.png",
    small: "sprite/zabuza_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 15.5,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -16.799999,
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 100, y: 108, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 100, y: 108, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 100, y: 108, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 400, hit_Fa: 280, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 320, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 100, y: 108, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  9: { name: "running",
    pic: 24, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 90, y: 103, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  10: { name: "running",
    pic: 25, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 103, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  11: { name: "running",
    pic: 26, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 90, y: 103, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 120, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 121, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  14: { name: "heavy_obj_walk",
    pic: 122, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  15: { name: "heavy_obj_walk",
    pic: 123, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  16: { name: "heavy_obj_run",
    pic: 120, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "tree_jump",
    pic: 15, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 15, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 15, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 110, y: 108, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  21: { name: "punch",
    pic: 999, state: 15, wait: 0, next: 26, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: -50000, w: 79, h: 500
    }
  },
  22: { name: "punch",
    pic: 10, state: 15, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: -50000, w: 79, h: 500
    }
  },
  23: { name: "punch",
    pic: 11, state: 15, wait: 1, next: 24, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 106, y: 86, w: 75, h: 70, dvx: 10, dvy: -25, vrest: 0, bdefend: 100, fall: 100, injury: 60, effect: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  24: { name: "punch",
    pic: 12, state: 15, wait: 2, next: 27, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 27, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 110, y: 108, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  26: { name: "punch",
    pic: 999, state: 15, wait: 0, next: 22, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: {
      kind: 0, x: 0, y: -50000, w: 79, h: 500
    },
    opoint: {
      kind: 1, x: 105, y: 140, action: 241, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  27: { name: "combo1",
    pic: 999, state: 15, wait: 3, next: 28, dvx: 65, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75
  },
  28: { name: "combo1",
    pic: 999, state: 15, wait: 0, next: -29, dvx: -1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  29: { name: "combo1",
    pic: 999, state: 15, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 98, centery: 290, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 1, x: 98, y: 100, action: 241, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 124, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 110, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 22, y: 10, w: 40, h: 52
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  31: { name: "combo1",
    pic: 73, state: 15, wait: 3, next: 32, dvx: 0, dvy: 0, centerx: 98, centery: 290, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "combo1",
    pic: 74, state: 15, wait: 0, next: 33, dvx: 0, dvy: 0, centerx: 98, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 106, y: 30, w: 75, h: 70, dvx: 0, dvy: 40, vrest: 50, bdefend: 100, fall: 60, injury: 40, effect: 1
    }
  },
  33: { name: "combo1",
    pic: 75, state: 15, wait: 0, next: 34, dvx: 0, dvy: 0, centerx: 98, centery: 270, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 106, y: 30, w: 75, h: 70, dvx: 0, dvy: 40, vrest: 50, bdefend: 100, fall: 60, injury: 40, effect: 1
    }
  },
  34: { name: "combo1",
    pic: 76, state: 15, wait: 0, next: 36, dvx: 0, dvy: 0, centerx: 98, centery: 260, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "run_weapon_atck",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 110, y: 108, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  36: { name: "combo1",
    pic: 77, state: 15, wait: 0, next: 37, dvx: 0, dvy: 0, centerx: 98, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "combo1",
    pic: 77, state: 15, wait: 0, next: 38, dvx: 0, dvy: 0, centerx: 98, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  38: { name: "combo1",
    pic: 77, state: 15, wait: 0, next: 39, dvx: 0, dvy: 0, centerx: 98, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  39: { name: "combo1",
    pic: 77, state: 15, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 98, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 138, y: 165, action: 37, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 124, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 110, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  41: { name: "combo1",
    pic: 77, state: 15, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 98, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "combo1",
    pic: 77, state: 15, wait: 3, next: 43, dvx: 0, dvy: 0, centerx: 98, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "combo1",
    pic: 30, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "light_weapon_thw",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 108, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  46: { name: "light_weapon_thw",
    pic: 64, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 100, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  47: { name: "light_weapon_thw",
    pic: 8, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 98, weaponact: 35, attacking: 0, cover: 0, dvx: 55, dvy: -4, dvz: 3
    }
  },
  50: { name: "heavy_weapon_thw",
    pic: 64, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 108, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  51: { name: "heavy_weapon_thw",
    pic: 8, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 98, weaponact: 10, attacking: 0, cover: 0, dvx: 50, dvy: -4, dvz: 2
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 31, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 106, w: 50, h: 60
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 66, state: 15, wait: 2, next: 54, dvx: 0, dvy: -2, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 90, y: 91, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 106, w: 50, h: 60
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 65, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 96, weaponact: 23, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
    }
  },
  60: { name: "punch",
    pic: 0, state: 3, wait: 2, next: 61, dvx: 1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 96, y: 106, w: 28, h: 43, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  61: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  62: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    sound: "1/007",
    itr: {
      kind: 0, x: 106, y: 86, w: 75, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 60, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      }
    ]
  },
  63: { name: "punch",
    pic: 12, state: 3, wait: 3, next: 64, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    bdy: [
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      }
    ]
  },
  64: { name: "punch",
    pic: 12, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 341, hit_d: -341, hit_j: 315,
    bdy: [
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      }
    ]
  },
  65: { name: "punch",
    pic: 0, state: 3, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 96, y: 106, w: 28, h: 43, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      },
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      }
    ]
  },
  66: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  67: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 68, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    sound: "1/007",
    itr: {
      kind: 0, x: 106, y: 86, w: 75, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 60, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      }
    ]
  },
  68: { name: "punch",
    pic: 12, state: 3, wait: 3, next: 69, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  69: { name: "punch",
    pic: 12, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 341, hit_d: -341, hit_j: 315,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 90
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  70: { name: "super_punch",
    pic: 13, state: 3, wait: 0, next: 71, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  71: { name: "super_punch",
    pic: 19, state: 3, wait: 0, next: 72, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  72: { name: "super_punch",
    pic: 20, state: 3, wait: 0, next: 73, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 106, y: 86, w: 83, h: 40, dvx: 15, dvy: -8, fall: 70, arest: 15, bdefend: 100, injury: 85, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  73: { name: "super_punch",
    pic: 21, state: 3, wait: 0, next: 74, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 106, y: 86, w: 83, h: 40, dvx: 15, dvy: -8, fall: 60, arest: 15, bdefend: 100, injury: 85, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      }
    ]
  },
  74: { name: "super_punch",
    pic: 22, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  80: { name: "jump_attack",
    pic: 42, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 68, y: 86, w: 72, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  81: { name: "jump_attack",
    pic: 43, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 104, y: 45, w: 56, h: 48, dvx: 2, arest: 15, bdefend: 16, injury: 35, fall: 100, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ]
  },
  82: { name: "jump_attack",
    pic: 44, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 104, y: 45, w: 56, h: 48, dvx: 2, arest: 15, bdefend: 16, injury: 35, fall: 100, effect: 1
    },
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  83: { name: "jump_attack",
    pic: 45, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ]
  },
  85: { name: "run_attack",
    pic: 13, state: 3, wait: 3, next: 86, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 19, y: 24, w: 35, h: 54
      },
      {
        kind: 0, x: 10, y: 36, w: 27, h: 15
      }
    ]
  },
  86: { name: "super_punch",
    pic: 19, state: 3, wait: 0, next: 87, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 315,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  87: { name: "super_punch",
    pic: 20, state: 3, wait: 0, next: 88, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 106, y: 86, w: 83, h: 40, dvx: 15, dvy: -8, fall: 70, arest: 15, bdefend: 100, injury: 40, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  88: { name: "super_punch",
    pic: 21, state: 3, wait: 0, next: 89, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 106, y: 86, w: 83, h: 40, dvx: 15, dvy: -8, fall: 70, arest: 15, bdefend: 100, injury: 40, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      }
    ]
  },
  89: { name: "super_punch",
    pic: 22, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 68, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 42, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 25, h: 55
      },
      {
        kind: 0, x: 13, y: 36, w: 52, h: 18
      }
    ]
  },
  91: { name: "dash_attack",
    pic: 43, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 104, y: 45, w: 56, h: 48, dvx: 12, dvy: 2, fall: 100, arest: 20, bdefend: 100, injury: 70, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 7, y: 19, w: 37, h: 45
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  92: { name: "dash_attack",
    pic: 45, state: 15, wait: 8, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 1, x: 90, y: -999, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 34, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  101: { name: "rowing",
    pic: 34, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  102: { name: "rowing",
    pic: 35, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 20, y: 40, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 17, w: 43, h: 130
    }
  },
  103: { name: "rowing",
    pic: 999, state: 6, wait: 0, next: 104, dvx: 550, dvy: 550, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 40, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 17, w: 43, h: 130
    }
  },
  104: { name: "rowing",
    pic: 999, state: 3005, wait: 2, next: 105, dvx: 70, dvy: 550, dvz: 10, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  105: { name: "rowing",
    pic: 999, state: 15, wait: 0, next: 106, dvx: 550, dvy: 0, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  106: { name: "rowing",
    pic: 35, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 36, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  108: { name: "rowing",
    pic: 36, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 36, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 23, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  111: { name: "defend",
    pic: 23, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 105, y: 100, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  112: { name: "broken_defend",
    pic: 37, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 50
    }
  },
  113: { name: "broken_defend",
    pic: 37, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 50
    }
  },
  114: { name: "broken_defend",
    pic: 37, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  115: { name: "picking_light",
    pic: 30, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 95, y: 125, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  116: { name: "picking_heavy",
    pic: 30, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 100, y: 129, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  117: { name: "picking_heavy",
    pic: 30, state: 15, wait: 5, next: 50, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: 100, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  120: { name: "catching",
    pic: 46, state: 9, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 20, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  122: { name: "catching",
    pic: 46, state: 9, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 20, y: 83, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  123: { name: "catching",
    pic: 46, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 125, hit_d: 127, hit_j: -253, mp: -1,
    opoint: {
      kind: 1, x: 20, y: 135, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 20, y: 83, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
    }, x: 19, y: 15, w: 28, h: 130
  },
  124: { name: "catching",
    pic: 46, state: 9, wait: 0, next: 123, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 125, hit_d: 127, hit_j: -253, mp: -2,
    opoint: {
      kind: 1, x: 20, y: 135, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 20, y: 83, injury: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  125: { name: "clone2",
    pic: 46, state: 3, wait: 0, next: 126, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 20,
    sound: "1/zab6",
    cpoint: {
      kind: 1, x: 20, y: 83, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    opoint: {
      kind: 1, x: 20, y: 135, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  126: { name: "clone2",
    pic: 46, state: 3, wait: 0, next: 128, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -75, y: 134, action: 350, dvx: 0, dvy: 0, oid: 411, facing: 0
    },
    cpoint: {
      kind: 1, x: 20, y: 83, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  127: { name: "strike",
    pic: 46, state: 9, wait: 0, next: -341, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  128: { name: "catching2",
    pic: 46, state: 9, wait: 0, next: 129, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 127, hit_d: 127, hit_j: -253, mp: -2,
    opoint: {
      kind: 1, x: 20, y: 135, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 20, y: 83, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
    }, x: 19, y: 15, w: 28, h: 130
  },
  129: { name: "catching2",
    pic: 46, state: 9, wait: 0, next: 128, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 127, hit_d: 127, hit_j: -253, mp: -2,
    opoint: {
      kind: 1, x: 20, y: 135, action: 40, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    cpoint: {
      kind: 1, x: 20, y: 83, injury: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  130: { name: "picked_caught",
    pic: 38, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 100, y: 90, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  131: { name: "picked_caught",
    pic: 38, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 100, y: 90, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  132: { name: "picked_caught",
    pic: 37, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 100, y: 90, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  133: { name: "picked_caught",
    pic: 37, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 92, y: 91
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 38, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 96, y: 83
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 39, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 90, y: 77
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 86, y: 101
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 92, y: 123
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ],
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 93, y: 109
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 37, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 99, y: 91
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 38, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 95, y: 93
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 39, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 103, y: 95
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 105, y: 106
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 104, y: 121
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 101, y: 110
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  180: { name: "falling",
    pic: 37, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  181: { name: "falling",
    pic: 38, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 15, y: 11, w: 50, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 35, y: 30, w: 27, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  182: { name: "falling",
    pic: 39, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  183: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 32, y: 18, w: 33, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 10, y: 38, w: 50, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  184: { name: "falling",
    pic: 41, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 37, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 180, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  187: { name: "falling",
    pic: 38, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 33, y: 6, w: 26, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 26, y: 43, w: 21, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  188: { name: "falling",
    pic: 39, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  189: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 24, y: 27, w: 26, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 37, y: 45, w: 31, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    }
  },
  190: { name: "falling",
    pic: 41, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: -45,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  203: { name: "fire",
    pic: 59, state: 18, wait: 0, next: 204, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  204: { name: "fire",
    pic: 60, state: 18, wait: 0, next: 205, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  205: { name: "fire",
    pic: 59, state: 18, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 20
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  207: { name: "tired",
    pic: 61, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 30, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 120, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 106, w: 50, h: 60
    }
  },
  211: { name: "jump",
    pic: 30, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 90, y: 120, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 106, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  212: { name: "jump",
    pic: 31, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: 80, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 56, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  213: { name: "dash",
    pic: 32, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: -999, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 56, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  214: { name: "dash",
    pic: 33, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 100, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 56, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  215: { name: "crouch",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 90, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 106, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  216: { name: "dash",
    pic: 31, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 56, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  217: { name: "dash",
    pic: 31, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 56, w: 50, h: 60
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 60
      }
    ]
  },
  218: { name: "stop_running",
    pic: 0, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  219: { name: "crouch2",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 90, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 106, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  220: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    sound: "1/zab4",
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      }
    ]
  },
  221: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      }
    ]
  },
  222: { name: "injured",
    pic: 38, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    sound: "1/zab5",
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      }
    ]
  },
  223: { name: "injured",
    pic: 38, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      }
    ]
  },
  224: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    sound: "1/zab4",
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      },
      {
        kind: 0, x: 76, y: 86, w: 50, h: 40
      }
    ]
  },
  225: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 40
    }
  },
  226: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    sound: "1/zab5",
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 40
    }
  },
  227: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 40
    }
  },
  228: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 40
    }
  },
  229: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 40
    }
  },
  230: { name: "lying",
    pic: 41, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 350,
    wpoint: {
      kind: 0, x: 0, y: 30000, weaponact: 32, attacking: 0, w: 70, h: 1300, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 40, y: 30000, w: 85, h: 1300
    }
  },
  231: { name: "lying",
    pic: 41, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 350,
    wpoint: {
      kind: 1, x: 90, y: 50, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 40, y: 30000, w: 85, h: 1300
    }
  },
  232: { name: "throw_lying_man",
    pic: 11, state: 9, wait: 0, next: 233, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 90, y: 83, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    opoint: {
      kind: 1, x: 80, y: 33, action: 195, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 130
    }
  },
  233: { name: "throw_lying_man",
    pic: 11, state: 9, wait: 12, next: 234, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 90, y: 83, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 14, state: 9, wait: 7, next: 324, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  235: { name: "replacement",
    pic: 37, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  236: { name: "replacement",
    pic: 999, state: 15, wait: 2, next: 237, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 98, y: 130, action: 60, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 30, dvy: -4, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 90, y: 130, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  240: { name: "slash back",
    pic: 41, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "slash back",
    pic: 42, state: 3, wait: 1, next: 242, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    sound: "1/054",
    itr: {
      kind: 0, x: 53, y: 30, w: 50, h: 16, dvx: 2, bdefend: 100, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 130
    }
  },
  242: { name: "slash back",
    pic: 144, state: 3, wait: 1, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    itr: {
      kind: 0, x: 53, y: 50, w: 50, h: 16, dvx: 2, bdefend: 100, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  243: { name: "slash back",
    pic: 145, state: 3, wait: 1, next: 244, dvx: 0, dvy: 0, centerx: 59, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    itr: {
      kind: 0, x: 53, y: 27, w: 5, h: 16, dvx: 2, bdefend: 100, injury: 25, effect: 1
    }
  },
  244: { name: "slash back",
    pic: 146, state: 3, wait: 1, next: 245, dvx: 0, dvy: 0, centerx: 59, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    sound: "1/007",
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  245: { name: "slash back",
    pic: 147, state: 3, wait: 1, next: 246, dvx: 0, dvy: 0, centerx: 59, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    sound: "1/007",
    itr: {
      kind: 0, x: 53, y: 27, w: 80, h: 16, fall: 100, dvx: 2, bdefend: 100, injury: 25, effect: 1
    }
  },
  246: { name: "slash back",
    pic: 43, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -2,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  250: { name: "water dragon",
    pic: 27, state: 3, wait: 0, next: 251, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  251: { name: "water dragon",
    pic: 28, state: 15, wait: 0, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  252: { name: "water dragon",
    pic: 29, state: 15, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 326,
    opoint: {
      kind: 1, x: 160, y: 140, action: 55, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 130
    }
  },
  253: { name: "kick",
    pic: 82, state: 15, wait: 1, next: 254, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 135,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  254: { name: "kick",
    pic: 83, state: 15, wait: 0, next: 268, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  255: { name: "stab",
    pic: 78, state: 3, wait: 10, next: 999, dvx: 550, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 106, y: 86, w: 80, h: 70,
      catchingact: [256, 256], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  256: { name: "stab",
    pic: 79, state: 9, wait: 0, next: 257, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 184, y: 75, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  257: { name: "stab",
    pic: 79, state: 9, wait: 50, next: 258, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 184, y: 75, injury: 110, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  258: { name: "stab",
    pic: 79, state: 9, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 184, y: 75, vaction: 131, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 130
    }
  },
  259: { name: "kick",
    pic: 80, state: 15, wait: 0, next: 362, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  260: { name: "kick",
    pic: 81, state: 3, wait: 1, next: 360, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 147, y: 86, w: 54, h: 70, zwidth: 17,
      catchingact: [261, 261], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  261: { name: "kick",
    pic: 999, state: 9, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 156, y: 85, injury: 40, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  262: { name: "combo1",
    pic: 999, state: 9, wait: 0, next: 263, dvx: 82, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 78, y: 150, action: 241, dvx: 0, dvy: 0, oid: 411, facing: 0
    },
    cpoint: {
      kind: 1, x: 156, y: 85, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  263: { name: "combo1",
    pic: 999, state: 9, wait: 0, next: 266, dvx: 82, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 156, y: 85, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  264: { name: "combo1",
    pic: 999, state: 9, wait: 0, next: 265, dvx: 50, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 256, y: 85, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  265: { name: "combo1",
    pic: 999, state: 9, wait: 0, next: 266, dvx: 35, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 256, y: 85, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  266: { name: "combo1",
    pic: 999, state: 15, wait: 0, next: 267, dvx: 121, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "combo1",
    pic: 999, state: 15, wait: 0, next: -255, dvx: -1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 1, x: 78, y: 150, action: 241, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  268: { name: "kick",
    pic: 84, state: 15, wait: 0, next: 269, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  269: { name: "kick",
    pic: 85, state: 15, wait: 0, next: 361, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  270: { name: "charge",
    pic: 27, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  271: { name: "charge",
    pic: 28, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 2, x: 105, y: 90, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  272: { name: "charge",
    pic: 29, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 274, hit_d: 274, hit_j: 274,
    opoint: {
      kind: 1, x: 105, y: 90, action: 4, dvx: 0, dvy: 0, oid: 203
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  273: { name: "charge",
    pic: 29, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  274: { name: "charge",
    pic: 27, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 40, attacking: 0, dvx: 100, dvy: -1, cover: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  275: { name: "water_prison",
    pic: 27, state: 3, wait: 1, next: 276, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 60,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ],
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  276: { name: "water_prison",
    pic: 28, state: 15, wait: 1, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  277: { name: "water_prison",
    pic: 29, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 140, action: 75, dvx: 0, dvy: 0, oid: 416, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 130
    }
  },
  280: { name: "sword",
    pic: 19, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 110,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  281: { name: "sword",
    pic: 67, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 120, y: 145, action: 0, dvx: 0, dvy: 0, dvz: 2, oid: 454, facing: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    itr: {
      kind: 8, x: -50000, y: -50100, w: 100079, h: 800, dvx: 21, injury: 0, zwidth: 300
    }
  },
  282: { name: "sword",
    pic: 68, state: 15, wait: 20, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    itr: {
      kind: 8, x: -50000, y: -50100, w: 100079, h: 800, dvx: 21, injury: 0, zwidth: 300
    }
  },
  284: { name: "shark",
    pic: 68, state: 15, wait: 0, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  285: { name: "shark",
    pic: 30, state: 15, wait: 0, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 130
    }
  },
  286: { name: "shark",
    pic: 30, state: 15, wait: 2, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ],
    opoint: {
      kind: 1, x: 80, y: 145, action: 45, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 0
    }
  },
  287: { name: "shark",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  288: { name: "shark",
    pic: 28, state: 15, wait: 2, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 175,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  289: { name: "shark",
    pic: 29, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    opoint: {
      kind: 1, x: 80, y: 145, action: 45, dvx: 0, dvy: 0, dvz: 0, oid: 416, facing: 20
    }
  },
  290: { name: "clone",
    pic: 27, state: 3, wait: 3, next: 291, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 460,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  291: { name: "clone",
    pic: 28, state: 3, wait: 1, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  292: { name: "clone",
    pic: 29, state: 15, wait: 3, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  293: { name: "clone",
    pic: 28, state: 15, wait: 1, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  294: { name: "clone",
    pic: 29, state: 15, wait: 3, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 130
    }
  },
  295: { name: "clone",
    pic: 29, state: 15, wait: 0, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  296: { name: "clone",
    pic: 29, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 295,
    opoint: {
      kind: 1, x: 50, y: 134, action: 350, dvx: 0, dvy: 0, oid: 5, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  297: { name: "water snake",
    pic: 28, state: 15, wait: 1, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  298: { name: "water snake",
    pic: 29, state: 15, wait: 1, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  300: { name: "disappear",
    pic: 27, state: 15, wait: 1, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 270,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  301: { name: "disappear",
    pic: 28, state: 15, wait: 1, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  302: { name: "disappear",
    pic: 29, state: 15, wait: 4, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  303: { name: "disappear",
    pic: 29, state: 15, wait: 2, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  304: { name: "disappear",
    pic: 27, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  305: { name: "disappear",
    pic: 8, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  306: { name: "disappear",
    pic: 9, state: 15, wait: 8, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  307: { name: "disappear",
    pic: 56, state: 15, wait: 1, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  308: { name: "disappear",
    pic: 57, state: 15, wait: 1, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  309: { name: "disappear",
    pic: 58, state: 15, wait: 1, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/zab1",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  310: { name: "disappear",
    pic: 999, state: 15, wait: 1, next: 1280, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  311: { name: "genjutsu",
    pic: 29, state: 15, wait: 0, next: 303, dvx: 550, dvy: 550, dvz: 550, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    opoint: {
      kind: 1, x: 39, y: 350, action: 50, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  315: { name: "prison",
    pic: 26, state: 15, wait: 1, next: 316, dvx: 53, dvy: 0, dvz: 3, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 90,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65, zwidth: 15,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  316: { name: "prison",
    pic: 26, state: 15, wait: 1, next: 317, dvx: 53, dvy: 0, dvz: 3, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65, zwidth: 15,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  317: { name: "prison",
    pic: 26, state: 15, wait: 0, next: 999, dvx: -1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 40, y: 16, w: 25, h: 65, zwidth: 15,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  320: { name: "dash",
    pic: 13, state: 15, wait: 9, next: 321, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 135,
    sound: "1/zab6",
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  321: { name: "dash",
    pic: 62, state: 15, wait: 3, next: 323, dvx: 100, dvy: 0, dvz: 6, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    itr: {
      kind: 8, x: 20, y: 57, w: 100, h: 24, zwidth: 15, dvx: 323
    }
  },
  322: { name: "dash",
    pic: 62, state: 15, wait: 0, next: -325, dvx: -1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    cpoint: {
      kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, injury: 5
    }
  },
  323: { name: "dash",
    pic: 11, state: 15, wait: 1, next: 324, dvx: -1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    itr: {
      kind: 0, x: 106, y: 86, w: 75, h: 70, dvy: -20, vrest: 0, bdefend: 100, fall: 200, injury: 70, effect: 1
    }
  },
  324: { name: "dash",
    pic: 14, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  325: { name: "dash",
    pic: 10, state: 15, wait: 1, next: 385, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    cpoint: {
      kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  326: { name: "combo3",
    pic: 29, state: 15, wait: 1, next: 327, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45
  },
  327: { name: "combo3",
    pic: 999, state: 15, wait: 0, next: 328, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 1, x: 78, y: 150, action: 241, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  328: { name: "combo3",
    pic: 999, state: 15, wait: 1, next: -329, dvx: 165, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  329: { name: "combo3",
    pic: 999, state: 15, wait: 0, next: 380, dvx: 1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  330: { name: "kisame_wave",
    pic: 8, state: 15, wait: 0, next: 331, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ],
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  331: { name: "kisame_wave",
    pic: 8, state: 15, wait: 0, next: 332, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ],
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  332: { name: "kisame_wave",
    pic: 9, state: 15, wait: 1, next: 333, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ],
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  333: { name: "kisame_wave",
    pic: 9, state: 15, wait: 7, next: 337, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 10, action: 224, dvx: 0, dvy: 0, oid: 411, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  334: { name: "kisame_wave",
    pic: 9, state: 15, wait: 5, next: 335, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 10, action: 231, dvx: 0, dvy: 0, oid: 411, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  335: { name: "kisame_wave",
    pic: 9, state: 15, wait: 2, next: 336, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  336: { name: "kisame_wave",
    pic: 8, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 10, action: 236, dvx: 0, dvy: 0, oid: 411, facing: 0
    },
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  337: { name: "kisame_wave",
    pic: 9, state: 15, wait: 0, next: 334, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 16,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  340: { name: "haku",
    pic: 999, state: 15, wait: 10, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: "-999998984f21456555555", w: 150, zwidth: 15, h: 900
    }
  },
  341: { name: "punch",
    pic: 14, state: 3, wait: 2, next: 342, dvx: 1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      }
    ]
  },
  342: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 343, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  343: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 344, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 60, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      }
    ]
  },
  344: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 345, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  345: { name: "punch",
    pic: 18, state: 3, wait: 1, next: 346, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 375,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  346: { name: "punch",
    pic: 18, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 70, hit_d: -70, hit_j: 375,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  350: { name: "last_stand",
    pic: 41, state: 15, wait: 20, next: 219, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 379, hit_d: 0, hit_j: 0
  },
  351: { name: "last_stand",
    pic: 41, state: 15, wait: 1, next: 352, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 135, action: 265, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  352: { name: "last_stand",
    pic: 87, state: 15, wait: 2, next: 353, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009"
  },
  353: { name: "last_stand",
    pic: 88, state: 15, wait: 2, next: 354, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/zab3"
  },
  354: { name: "last_stand",
    pic: 89, state: 15, wait: 2, next: 355, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  355: { name: "last_stand",
    pic: 90, state: 15, wait: 5, next: 356, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 364, hit_d: 0, hit_j: 358
  },
  356: { name: "last_stand",
    pic: 91, state: 15, wait: 5, next: 357, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 364, hit_d: 0, hit_j: 358
  },
  357: { name: "last_stand",
    pic: 92, state: 15, wait: 5, next: 355, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 364, hit_d: 0, hit_j: 358
  },
  358: { name: "last_stand",
    pic: 93, state: 15, wait: 1, next: 359, dvx: 24, dvy: 0, dvz: 4, centerx: 98, centery: 134, hit_a: 364, hit_d: 374, hit_j: -359,
    sound: "1/004"
  },
  359: { name: "last_stand",
    pic: 94, state: 15, wait: 1, next: 363, dvx: 24, dvy: 0, dvz: 4, centerx: 98, centery: 134, hit_a: 364, hit_d: 374, hit_j: -363
  },
  360: { name: "kick",
    pic: 86, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 96, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  361: { name: "kick",
    pic: 86, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 96, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  362: { name: "kick",
    pic: 81, state: 15, wait: 0, next: 260, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 76, y: 80000, w: 50, h: 130
      }
    ]
  },
  363: { name: "last_stand",
    pic: 95, state: 15, wait: 1, next: 358, dvx: 24, dvy: 0, dvz: 4, centerx: 98, centery: 134, hit_a: 364, hit_d: 374, hit_j: -358
  },
  364: { name: "last_stand",
    pic: 93, state: 15, wait: 0, next: 365, dvx: 0, dvy: 0, dvz: 4, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  365: { name: "last_stand",
    pic: 94, state: 15, wait: 0, next: 366, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 165, action: 127, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  366: { name: "last_stand",
    pic: 999, state: 15, wait: 2, next: 367, dvx: 140, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  367: { name: "last_stand",
    pic: 999, state: 15, wait: 0, next: 368, dvx: -1, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  368: { name: "last_stand",
    pic: 999, state: 15, wait: 0, next: 369, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  369: { name: "last_stand",
    pic: 90, state: 15, wait: 3, next: 370, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  370: { name: "last_stand",
    pic: 91, state: 15, wait: 3, next: 371, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  371: { name: "last_stand",
    pic: 92, state: 15, wait: 3, next: 372, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  372: { name: "last_stand",
    pic: 96, state: 15, wait: 10, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012"
  },
  373: { name: "last_stand",
    pic: 97, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016",
    opoint: {
      kind: 1, x: 100, y: 135, action: 266, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  374: { name: "last_stand",
    pic: 90, state: 15, wait: 0, next: 356, dvx: -1, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009"
  },
  375: { name: "combo2",
    pic: 999, state: 15, wait: 0, next: 376, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45
  },
  376: { name: "combo2",
    pic: 999, state: 15, wait: 0, next: 377, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 1, x: 78, y: 150, action: 241, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  377: { name: "combo2",
    pic: 999, state: 15, wait: 0, next: 266, dvx: 150, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  378: { name: "heart_swal",
    pic: 41, state: 15, wait: 1, next: 351, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: -876427836875656200, w: 100, h: 20
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 315, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  379: { name: "last_stand",
    pic: 41, state: 15, wait: 1, next: 378, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0
  },
  380: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 381, dvx: 1, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  381: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 382, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      },
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      }
    ]
  },
  382: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 383, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  383: { name: "punch",
    pic: 18, state: 3, wait: 1, next: 384, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  384: { name: "punch",
    pic: 18, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 50, centery: 117, hit_a: 70, hit_d: -70, hit_j: 70,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 48, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  385: { name: "dash",
    pic: 11, state: 15, wait: 1, next: 386, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    cpoint: {
      kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  386: { name: "dash",
    pic: 14, state: 15, wait: 4, next: 324, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    },
    cpoint: {
      kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    itr: {
      kind: 0, x: 166, y: 86, w: 85, h: 70, dvy: -20, vrest: 0, bdefend: 100, fall: 200, injury: 60, effect: 1
    }
  },
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  391: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: -500,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  392: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 393, dvx: 10, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  393: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: -20, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: -60, injury: 15, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  394: { name: "catching2",
    pic: 999, state: 9, wait: 0, next: 395, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  395: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 0, dvy: 0, oid: 214, facing: 0
    }
  },
  396: { name: "picked_caught2",
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396
    },
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 106, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  400: { name: "wave",
    pic: 27, state: 15, wait: 1, next: 401, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, mp: 70,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  401: { name: "water wave",
    pic: 28, state: 15, wait: 1, next: 402, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 130
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  },
  402: { name: "water snake",
    pic: 29, state: 15, wait: 2, next: 330, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 76, y: 86, w: 50, h: 130
    }
  },
  500: { name: "defend2",
    pic: 23, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 110, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  501: { name: "defendend",
    pic: 23, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 76, y: 86, w: 50, h: 50
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 130
      }
    ]
  }
  }
});