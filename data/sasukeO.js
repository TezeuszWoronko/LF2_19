define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/sasukeO.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/sasukeO_3.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-148)": "sprite/sasukeO_2.png", w: 155, h: 95, row: 3, col: 3
      },
      {
        "file(149-169)": "sprite/sasuke_3O.png", w: 79, h: 79, row: 10, col: 2
      },
      {
        "file(170-179)": "sprite/sasukeO_4.png", w: 110, h: 100, row: 5, col: 2
      }
    ],
    name: "Sasuke",
    head: "sprite/sasukeO_f.png",
    small: "sprite/sasukeO_s.png",
    walking_frame_rate: 4,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 14.9,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -18.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -13.8,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 20,
    hidden: 0
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 45, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 39, y: 27
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 44, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 39, y: 27
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 39, y: 27
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 39, y: 27
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 45, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 44, y: 27
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 43, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 44, y: 27
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 36, y: 49, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 44, y: 27
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 270, hit_Dj: 300, hit_Fj: 250, hit_Fa: 261, hit_Da: 350, hit_Uj: 235, hit_Ua: 325,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    bpoint: {
      x: 44, y: 27
    }
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
    pic: 76, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 77, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 78, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 79, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 76, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "tree_jump",
    pic: 26, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 68, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 26, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 41, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 35, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 41, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 35, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 136, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 27, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  35: { name: "run_weapon_atck",
    pic: 41, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 136, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 27, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  45: { name: "light_weapon_thw",
    pic: 41, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 35, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 69, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 39, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 14, state: 15, wait: 3, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 17, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 37, dvy: -6, dvz: 2
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
    pic: 136, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 27, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 137, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 55, y: 35, weaponact: 23, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 67, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
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
  55: { name: "kirby",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 55, backhurtact: 55
    },
    bdy: {
      kind: 0, x: 26, y: 138000, w: 28, h: 500
    }
  },
  56: { name: "hell",
    pic: 24, state: 15, wait: 2, next: 318, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 370,
    sound: "1/0550",
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_j: 370, hit_d: 0,
    itr: {
      kind: 0, x: 43, y: 46, w: 45, h: 25, dvx: 2, bdefend: 16, injury: 15, effect: 1
    },
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
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_j: 370, hit_d: 0,
    sound: "1/028",
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_j: 370, hit_d: 0,
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
    pic: 14, state: 3, wait: 1, next: 65, dvx: 0, dvy: 0, centerx: 25, centery: 95, hit_a: 0, hit_j: 370, hit_d: 0,
    sound: "1/028",
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  65: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 370,
    sound: "1/0552",
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
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
  66: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_j: 370, hit_d: 0,
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    },
    itr: {
      kind: 0, x: 43, y: 46, w: 45, h: 25, dvx: 2, bdefend: 16, injury: 15, effect: 1
    }
  },
  67: { name: "punch",
    pic: 17, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 25, centery: 79, hit_a: 0, hit_j: 370, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  70: { name: "super_punch",
    pic: 143, state: 3, wait: 0, next: 85, dvx: 0, dvy: 0, centerx: 53, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  71: { name: "super_punch",
    pic: 23, state: 3, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
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
    pic: 23, state: 3, wait: 10, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0596",
    opoint: {
      kind: 1, x: 85, y: 85, action: 0, dvx: 0, dvy: 0, oid: 224, facing: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  73: { name: "super_punch",
    pic: 60, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 67, state: 15, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0552",
    bdy: [
      {
        kind: 0, x: 19, y: 8, w: 27, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  81: { name: "jump_attack",
    pic: 66, state: 15, wait: 0, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -55,
    sound: "1/028",
    bdy: [
      {
        kind: 0, x: 19, y: 16, w: 28, h: 53
      },
      {
        kind: 0, x: 10, y: 32, w: 46, h: 20
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  82: { name: "jump_attack",
    pic: 66, state: 100, wait: 100, next: 83, dvx: 25, dvy: 5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 28, y: 34, w: 57, h: 45, dvx: -2, fall: 80, vrest: 8, bdefend: 40, injury: 35, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 29, y: 19, w: 39, h: 45
      },
      {
        kind: 0, x: 16, y: 38, w: 36, h: 29
      }
    ]
  },
  83: { name: "jump_attack",
    pic: 66, state: 15, wait: 0, next: 84, dvx: 0, dvy: 5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 24, w: 32, h: 52
      },
      {
        kind: 0, x: 18, y: 50, w: 47, h: 28
      }
    ]
  },
  84: { name: "jump_attack",
    pic: 66, state: 15, wait: 0, next: 215, dvx: 0, dvy: 5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 38, y: 24, w: 24, h: 55
      },
      {
        kind: 0, x: 15, y: 46, w: 34, h: 32
      }
    ]
  },
  85: { name: "run_attack",
    pic: 143, state: 3, wait: 0, next: 87, dvx: 0, dvy: 0, centerx: 53, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0, mp: 35,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  87: { name: "run_attack",
    pic: 143, state: 3, wait: 2, next: 88, dvx: 0, dvy: 0, centerx: 53, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 20, y: 46, w: 65, h: 25, vrest: 7, dvx: 17, dvy: -10, fall: 100, bdefend: 100, injury: 55, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ]
  },
  88: { name: "run_attack",
    pic: 144, state: 3, wait: 2, next: 89, dvx: 0, dvy: 0, centerx: 53, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 60, y: 43, w: 40, h: 16, dvx: 17, vrest: 7, dvy: -10, fall: 100, bdefend: 100, injury: 55, effect: 1
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
  89: { name: "run_attack",
    pic: 145, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 53, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 67, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0552",
    bdy: [
      {
        kind: 0, x: 19, y: 8, w: 27, h: 61
      },
      {
        kind: 0, x: 11, y: 31, w: 43, h: 22
      }
    ]
  },
  91: { name: "dash_attack",
    pic: 66, state: 15, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -55,
    sound: "1/028",
    bdy: [
      {
        kind: 0, x: 19, y: 16, w: 28, h: 53
      },
      {
        kind: 0, x: 10, y: 32, w: 46, h: 20
      }
    ]
  },
  92: { name: "dash_attack",
    pic: 66, state: 100, wait: 100, next: 93, dvx: 25, dvy: 5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 28, y: 34, w: 57, h: 45, dvx: -2, fall: 80, vrest: 8, bdefend: 40, injury: 35, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 29, y: 19, w: 39, h: 45
      },
      {
        kind: 0, x: 16, y: 38, w: 36, h: 29
      }
    ]
  },
  93: { name: "dash_attack",
    pic: 66, state: 15, wait: 0, next: 215, dvx: 0, dvy: 5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 24, w: 32, h: 52
      },
      {
        kind: 0, x: 18, y: 50, w: 47, h: 28
      }
    ]
  },
  94: { name: "dash_attack",
    pic: 66, state: 15, wait: 1, next: 215, dvx: 0, dvy: 5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 38, y: 24, w: 24, h: 55
      },
      {
        kind: 0, x: 15, y: 46, w: 34, h: 32
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
    pic: 65, state: 6, wait: 0, next: 101, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 80, x: 79, y: -999899, zwidth: 999, w: 59, h: 200, dvx: 55
    }
  },
  102: { name: "rowing",
    pic: 51, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
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
    sound: "1/0561",
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 17, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 355, dvx: 0, dvy: 0, oid: 40, facing: 20
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
    pic: 51, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 62, state: 15, wait: 3, next: 107, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 15, w: 21, h: 64
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: [
      {
        kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17
      },
      {
        kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18
      }
    ]
  },
  108: { name: "rowing",
    pic: 66, state: 6, wait: 0, next: 109, dvx: 0, dvy: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 80, x: 79, y: -999899, zwidth: 999, w: 59, h: 200, dvx: 55
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
    pic: 48, state: 9, wait: 0, next: 122, dvx: 0, dvy: 0, dvz: 550, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 59, y: 39, vaction: 132, throwvz: -842150451, cover: 0, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  122: { name: "catching",
    pic: 48, state: 9, wait: 1, next: 123, dvx: 0, dvy: 0, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2990",
    cpoint: {
      kind: 1, x: 59, y: 38, injury: 110, vaction: 132, cover: 0, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  123: { name: "catching",
    pic: 49, state: 9, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 59, y: 39, vaction: 132, throwvz: -842150451, cover: 0, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  124: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 125, dvx: 4, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 40, y: 39, vaction: 132, throwvz: -842150451, cover: 1, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  125: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 126, dvx: 3, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    cpoint: {
      kind: 1, x: 30, y: 38, injury: 95, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    opoint: {
      kind: 1, x: 45, y: 40, action: 95, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  126: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 346, dvx: 3, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 39, vaction: 132, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  127: { name: "catching",
    pic: 89, state: 15, wait: 0, next: 128, dvx: 3, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    itr: {
      kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 15, dvy: -7, fall: 100, arest: 15, bdefend: 100, injury: 60, effect: 1
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 30, action: 90, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  128: { name: "catching",
    pic: 89, state: 8061, wait: 0, next: 999, dvx: 550, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 15, dvy: -7, fall: 100, arest: 15, bdefend: 100, injury: 60, effect: 1
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 30, action: 90, dvx: 0, dvy: 0, oid: 440, facing: 0
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
  145: { name: "air raikiri",
    pic: 156, state: 4, wait: 1, next: 146, dvx: 550, dvy: -6, centerx: 47, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0, mp: 80,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 34, y: 17, w: 28, h: 63
    }
  },
  146: { name: "air raikiri",
    pic: 150, state: 4, wait: 0, next: 147, dvx: 550, dvy: -2, centerx: 46, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 34, y: 17, w: 28, h: 63
    }
  },
  147: { name: "air raikiri",
    pic: 151, state: 3, wait: 1, next: 148, dvx: 550, dvy: 550, centerx: 53, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 24, w: 41, h: 51
    }
  },
  148: { name: "air raikiri",
    pic: 152, state: 100, wait: 1, next: 149, dvx: 550, dvy: 550, centerx: 17, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 3, y: 32, w: 33, h: 46
    }
  },
  149: { name: "air raikiri",
    pic: 155, state: 100, wait: 0, next: 150, dvx: 1, dvy: -4, centerx: 21, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 55, y: -100, action: 267, dvx: 0, dvy: 0, oid: 411, facing: 1
    },
    bdy: {
      kind: 0, x: 7, y: 27, w: 33, h: 44
    }
  },
  150: { name: "air raikiri",
    pic: 153, state: 100, wait: 0, next: 150, dvx: 24, dvy: 14, centerx: 31, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 5, y: 5, w: 73, h: 66, dvx: 10, dvy: -8, vrest: 15, fall: 70, bdefend: 60, injury: 100, effect: 1
    },
    bdy: {
      kind: 0, x: 17, y: 35, w: 33, h: 43
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0570",
    wpoint: {
      kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: [
      {
        kind: 0, x: 25, y: 25, w: 21, h: 20
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
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
    bdy: [
      {
        kind: 0, x: 22, y: 20, w: 24, h: 23
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: [
      {
        kind: 0, x: 27, y: 22, w: 20, h: 18
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
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
    bdy: [
      {
        kind: 0, x: 22, y: 30, w: 27, h: 21
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0568",
    wpoint: {
      kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: [
      {
        kind: 0, x: 31, y: 24, w: 25, h: 23
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
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
    bdy: [
      {
        kind: 0, x: 28, y: 27, w: 24, h: 26
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: [
      {
        kind: 0, x: 30, y: 31, w: 24, h: 21
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
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
    bdy: [
      {
        kind: 0, x: 30, y: 39, w: 23, h: 21
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
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
      kind: 1, x: 46, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 33, y: 33, w: 20, h: 48
      },
      {
        kind: 0, x: 25, y: 50, w: 15, h: 29
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
      kind: 1, x: 39, y: 80, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 50, y: 40, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 15, w: 21, h: 64
      },
      {
        kind: 0, x: 18, y: 29, w: 48, h: 17
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
        kind: 0, x: 16, y: 30, w: 39, h: 37
      }
    ]
  },
  217: { name: "dash ",
    pic: 67, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
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
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
    opoint: {
      kind: 1, x: 43, y: 81, action: 207, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 46, y: 23, w: 21, h: 56
      },
      {
        kind: 0, x: 30, y: 40, w: 17, h: 41
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
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
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
    wpoint: {
      kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 208, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 27, y: 56, w: 36, h: 24
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
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
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 35, h: 63
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
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
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
    wpoint: {
      kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 24, w: 39, h: 57
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
    wpoint: {
      kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 208, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 28, y: 23, w: 37, h: 58
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 267,
    wpoint: {
      kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 29, y: 26, w: 37, h: 53
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 430,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 430,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      },
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
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
  235: { name: "susanoo",
    pic: 159, state: 15, wait: 1, next: 236, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 4000,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 39, w: 61, h: 23
    }
  },
  236: { name: "susanoo",
    pic: 160, state: 15, wait: 2, next: 237, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/068",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 39, w: 61, h: 23
    }
  },
  237: { name: "susanoo",
    pic: 160, state: 15, wait: 38, next: 238, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 20, y: 95, action: 320, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  238: { name: "susanoo",
    pic: 160, state: 15, wait: 0, next: 505, dvx: 550, dvy: -2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  240: { name: "punch1",
    pic: 141, state: 3, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 43, y: 46, w: 45, h: 25, dvx: 2, bdefend: 16, injury: 15, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  241: { name: "punch1",
    pic: 10, state: 0, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  242: { name: "punch2",
    pic: 17, state: 3, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 18, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ]
  },
  249: { name: "replace",
    pic: 159, state: 15, wait: 1, next: 236, dvx: 0, dvy: -1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0539",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 39, w: 61, h: 23
    }
  },
  250: { name: "chidori_blade",
    pic: 159, state: 15, wait: 1, next: 251, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  251: { name: "chidori_blade",
    pic: 160, state: 15, wait: 0, next: 252, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  252: { name: "chidori_blade",
    pic: 160, state: 15, wait: 0, next: 253, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  253: { name: "chidori_blade",
    pic: 160, state: 15, wait: 1, next: 254, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  254: { name: "chidori_blade",
    pic: 160, state: 15, wait: 1, next: 255, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 149, y: 80, action: 410, dvx: 0, dvy: 0, oid: 241, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  255: { name: "chidori_blade",
    pic: 160, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 239, y: 80, action: 410, dvx: 0, dvy: 0, oid: 241, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  256: { name: "chidori_blade",
    pic: 160, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 329, y: 80, action: 410, dvx: 0, dvy: 0, oid: 241, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  257: { name: "chidori_blade",
    pic: 53, state: 15, wait: 1, next: 258, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 40, action: 78, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  258: { name: "chidori_blade",
    pic: 54, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 40, action: 79, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  259: { name: "chidori_blade",
    pic: 55, state: 15, wait: 1, next: 260, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 40, action: 80, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  260: { name: "chidori_blade",
    pic: 59, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  261: { name: "chidori_needle",
    pic: 44, state: 15, wait: 2, next: 262, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    sound: "1/0536",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  262: { name: "chidori_needle",
    pic: 35, state: 15, wait: 2, next: 263, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  263: { name: "chidori_needle",
    pic: 36, state: 15, wait: 2, next: 264, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  264: { name: "chidori_needle",
    pic: 37, state: 15, wait: 1, next: 265, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 46, action: 1, dvx: 0, dvy: 0, oid: 440, facing: 30
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  265: { name: "chidori_needle",
    pic: 38, state: 15, wait: 1, next: 266, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  266: { name: "chidori_needle",
    pic: 39, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  267: { name: "crow_replacement",
    pic: 51, state: 15, wait: 0, next: 268, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 95,
    sound: "1/005"
  },
  268: { name: "crow_replacement",
    pic: 999, state: 15, wait: 1, next: 269, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "crow_replacement",
    pic: 999, state: 15, wait: 3, next: 275, dvx: -40, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "charge",
    pic: 44, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0554",
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
    pic: 45, state: 17, wait: 1, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 46, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
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
    pic: 46, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
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
    pic: 45, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  275: { name: "replacement",
    pic: 999, state: 15, wait: 0, next: 276, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  276: { name: "bodyflicker",
    pic: 51, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 2, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 26, y: 55, w: 32, h: 26
    },
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  280: { name: "bodyflicker",
    pic: 60, state: 3, wait: 3, next: 276, dvx: 0, dvy: 0, dvz: 2, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2999",
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  281: { name: "bodyflicker",
    pic: 999, state: 400, wait: 1, next: 282, dvx: 0, dvy: 0, dvz: 2, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  282: { name: "bodyflicker",
    pic: 999, state: 3005, wait: 0, next: 283, dvx: 45, dvy: 0, dvz: 2, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  283: { name: "bodyflicker",
    pic: 51, state: 15, wait: 0, next: 284, dvx: 550, dvy: 0, dvz: 2, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  284: { name: "bodyflicker",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 261, hit_d: 250, hit_j: 235,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  300: { name: "chidori",
    pic: 29, state: 15, wait: 0, next: 301, dvx: 550, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 317, hit_j: 460, mp: 160,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  301: { name: "chidori",
    pic: 46, state: 15, wait: 0, next: 302, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 317, hit_j: 460,
    sound: "1/3002",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  302: { name: "chidori",
    pic: 52, state: 15, wait: 0, next: 303, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 317, hit_j: 460,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  303: { name: "chidori",
    pic: 130, state: 15, wait: 1, next: 304, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 460,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  304: { name: "chidori",
    pic: 131, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 460,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  305: { name: "chidori",
    pic: 132, state: 15, wait: 1, next: 310, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 460,
    opoint: [
      {
        kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
      },
      {
        kind: 1, x: 40, y: 39, action: 50, dvx: 0, dvy: 0, oid: 200, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  306: { name: "chidori",
    pic: 130, state: 15, wait: 0, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  307: { name: "chidori",
    pic: 131, state: 15, wait: 0, next: 308, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  308: { name: "chidori",
    pic: 132, state: 15, wait: 0, next: 309, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  309: { name: "chidori",
    pic: 130, state: 15, wait: 0, next: 310, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  310: { name: "chidori",
    pic: 131, state: 15, wait: 0, next: 311, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 460,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  311: { name: "chidori",
    pic: 132, state: 15, wait: 0, next: 312, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 460,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  312: { name: "chidori",
    pic: 133, state: 15, wait: 0, next: 313, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 460,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  313: { name: "chidori",
    pic: 8, state: 15, wait: 0, next: 314, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 35, action: 60, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  314: { name: "chidori",
    pic: 8, state: 15, wait: 3, next: 315, dvx: 48, dvy: 0, dvz: 4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 20, y: 16, zwidth: 18, w: 45, h: 65, dvz: 5,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 3547899, w: 115, h: 115, zwidth: 500, dvx: 400
      }
    ],
    bdy: {
      kind: 0, x: 0, y: 1235400, w: 100, h: 100
    }
  },
  315: { name: "chidori_run",
    pic: 8, state: 15, wait: 2, next: 334, dvx: 64, dvy: 0, dvz: 4, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 20, y: 16, zwidth: 18, w: 45, h: 65, dvz: 5,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 3547899, w: 115, h: 115, zwidth: 500, dvx: 400
      }
    ],
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 0, y: 1235400, w: 100, h: 100
      }
    ]
  },
  317: { name: "hell",
    pic: 27, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 56,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  318: { name: "hell",
    pic: 25, state: 15, wait: 0, next: 319, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 40, action: 115, dvx: 0, dvy: 0, oid: 440, facing: 30
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  319: { name: "hell",
    pic: 25, state: 15, wait: 25, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 40, action: 115, dvx: 0, dvy: 0, oid: 440, facing: 31
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  320: { name: "sharingan",
    pic: 44, state: 15, wait: 3, next: 321, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 175,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 28, y: -87667100, w: 27, h: 65
      }
    ]
  },
  321: { name: "sharingan",
    pic: 48, state: 15, wait: 6, next: 322, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 28, y: -87667100, w: 27, h: 65
      }
    ]
  },
  322: { name: "sharingan",
    pic: 49, state: 15, wait: 0, next: 323, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 46, y: 30, action: 50, dvx: 0, dvy: 0, oid: 203
    }
  },
  323: { name: "sharingan",
    pic: 49, state: 15, wait: 0, next: 324, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 80000, action: 85, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  324: { name: "sharingan",
    pic: 48, state: 15, wait: 0, next: 366, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 0, action: 220, dvx: 0, dvy: 0, oid: 222, facing: 0
    }
  },
  325: { name: "m sharingan",
    pic: 159, state: 3, wait: 2, next: 326, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 80,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: -99999999999, y: -77685693330, w: 100000000000000000000, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  326: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 327, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 350, action: 76, dvx: 0, dvy: 0, oid: 214, facing: 2
    },
    itr: {
      kind: 0, x: -99999999999, y: -77685693330, w: 100000000000000000000, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  327: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 328, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 50, y: 10, action: 0, dvx: 0, dvy: 0, oid: 240, facing: 0
    },
    itr: {
      kind: 0, x: -99999999999, y: -77685693330, w: 100000000000000000000, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  328: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 329, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 335, hit_d: 331, hit_j: 335, mp: -15,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: -922848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: -99999999999, y: -77685693330, w: 100000000000000000000, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  329: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 330, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 335, hit_d: 331, hit_j: 335, mp: -15,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: -922848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: -99999999999, y: -77685693330, w: 100000000000000000000, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  330: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 328, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 335, hit_d: 331, hit_j: 335, mp: -15,
    bdy: [
      {
        kind: 0, x: 0, y: -922848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -99999999999, y: -77685693330, w: 100000000000000000000, zwidth: 99999, h: 1000, injury: 60, fall: 100
    }
  },
  331: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 332, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  332: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  333: { name: "katon",
    pic: 64, state: 15, wait: 0, next: 367, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 145,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  334: { name: "chidori_run",
    pic: 17, state: 15, wait: 10, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  335: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 336, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    },
    bdy: [
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  336: { name: "m sharingan",
    pic: 160, state: 18, wait: 30, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    },
    bdy: [
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  337: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 338, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -8321489322, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  338: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -8321489322, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  346: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 347, dvx: 3, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 39, vaction: 132, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 30, action: 90, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  347: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 348, dvx: 3, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 40, y: 39, vaction: 132, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  348: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 127, dvx: 3, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/103",
    cpoint: {
      kind: 1, x: 40, y: 39, vaction: 132, throwvz: -842150451, cover: 1, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 30, action: 90, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  350: { name: "kato2",
    pic: 29, state: 15, wait: 1, next: 351, dvx: 550, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 145,
    sound: "1/sasuke2",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  351: { name: "katon",
    pic: 46, state: 15, wait: 1, next: 352, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  352: { name: "katon",
    pic: 127, state: 15, wait: 1, next: 353, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  353: { name: "katon",
    pic: 159, state: 15, wait: 1, next: 354, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  354: { name: "chidori_blade",
    pic: 160, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 149, y: 80, action: 460, dvx: 0, dvy: 0, oid: 241, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  355: { name: "katon",
    pic: 20, state: 15, wait: 3, next: 356, dvx: 15, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  356: { name: "katon",
    pic: 21, state: 15, wait: 3, next: 357, dvx: 14, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  357: { name: "katon",
    pic: 22, state: 15, wait: 3, next: 358, dvx: 14, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "katon",
    pic: 20, state: 15, wait: 3, next: 359, dvx: 14, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  359: { name: "katon",
    pic: 21, state: 15, wait: 3, next: 360, dvx: 14, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  360: { name: "katon",
    pic: 22, state: 15, wait: 3, next: 361, dvx: 14, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  361: { name: "katon",
    pic: 50, state: 15, wait: 4, next: 1000, dvx: 25, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  362: { name: "katon",
    pic: 129, state: 15, wait: 1, next: 363, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  363: { name: "katon",
    pic: 138, state: 15, wait: 1, next: 364, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  364: { name: "katon",
    pic: 139, state: 15, wait: 1, next: 365, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  365: { name: "katon",
    pic: 129, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  366: { name: "sharingan",
    pic: 48, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  367: { name: "katon",
    pic: 64, state: 15, wait: 1, next: 329, dvx: -1, dvy: -7, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  370: { name: "snake",
    pic: 158, state: 3, wait: 6, next: 371, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  371: { name: "snake",
    pic: 159, state: 3, wait: 2, next: 372, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  372: { name: "snake",
    pic: 160, state: 3, wait: 20, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 79, action: 340, dvx: 15, dvy: 0, oid: 462, facing: 0
    }
  },
  379: { name: "trans",
    pic: 0, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200
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
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 208, dvx: 0, dvy: 0, oid: 203, facing: 0
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
    pic: 30, state: 15, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0572",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  400: { name: "chidoriclash",
    pic: 999, state: 15, wait: 0, next: 401, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  401: { name: "chidoriclash",
    pic: 49, state: 15, wait: 0, next: 402, dvx: -80, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  402: { name: "chidoriclash",
    pic: 49, state: 15, wait: 21, next: 403, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  403: { name: "chidoriclash",
    pic: 49, state: 15, wait: 19, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2990",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  410: { name: "ama",
    pic: 29, state: 15, wait: 1, next: 411, dvx: 550, dvy: 550, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 3000,
    sound: "1/sasuke2",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  411: { name: "ama",
    pic: 46, state: 15, wait: 1, next: 412, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  412: { name: "ama",
    pic: 127, state: 15, wait: 1, next: 413, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  413: { name: "ama",
    pic: 159, state: 15, wait: 1, next: 414, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  414: { name: "ama",
    pic: 160, state: 15, wait: 8, next: 238, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 149, y: 80, action: 460, dvx: 0, dvy: 0, oid: 241, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  415: { name: "m sharingan",
    pic: 159, state: 3, wait: 2, next: 416, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 3000,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: -999999, y: -77685693330, w: 999999, h: 9999, zwidth: 99999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  416: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 417, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 350, action: 76, dvx: 0, dvy: 0, oid: 214, facing: 2
    },
    itr: {
      kind: 0, x: -999999, y: -77685693330, w: 999999, h: 9999, zwidth: 99999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  417: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 418, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 50, y: 10, action: 0, dvx: 0, dvy: 0, oid: 240, facing: 0
    },
    itr: {
      kind: 0, x: -999999, y: -77685693330, w: 999999, h: 9999, zwidth: 99999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  418: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 419, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 421, hit_d: 423, hit_j: 421, mp: -15,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: -922848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: -999999, y: -77685693330, w: 999999, h: 9999, zwidth: 99999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  419: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 420, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 421, hit_d: 423, hit_j: 421, mp: -15,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: -922848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: -999999, y: -77685693330, w: 99999, h: 9999, zwidth: 99999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  420: { name: "m sharingan",
    pic: 160, state: 3, wait: 2, next: 418, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 421, hit_d: 423, hit_j: 421, mp: -15,
    bdy: [
      {
        kind: 0, x: 0, y: -922848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -999999, y: -77685693330, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    }
  },
  421: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 422, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    },
    bdy: [
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  422: { name: "m sharingan",
    pic: 160, state: 18, wait: 30, next: 238, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -9999, y: -9848643544945, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 100, vrest: 5, bdefend: 100, injury: 25, effect: 5
    },
    bdy: [
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  423: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 424, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  424: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 238, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  425: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 426, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      }
    ]
  },
  426: { name: "m sharingan",
    pic: 160, state: 18, wait: 1, next: 238, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 0, y: -12321454554, w: 500, h: 500
      },
      {
        kind: 0, x: 0, y: -9848643544945, w: 500, h: 500
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  427: { name: "m sharingan",
    pic: 60, state: 3, wait: 2, next: 428, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0568",
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
  428: { name: "m sharingan",
    pic: 161, state: 3, wait: 40, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  430: { name: "genjutsu",
    pic: 999, state: 3, wait: 0, next: 431, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  431: { name: "genjutsu",
    pic: 999, state: 15, wait: 0, next: 432, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2317",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 350, action: 60, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  432: { name: "crow_death",
    pic: 162, state: 14, wait: 0, next: 433, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 41
    }
  },
  433: { name: "crow_death",
    pic: 999, state: 14, wait: 0, next: 434, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 40
    }
  },
  434: { name: "crow_death",
    pic: 999, state: 14, wait: 0, next: 435, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 41
    }
  },
  435: { name: "crow_death",
    pic: 999, state: 14, wait: 0, next: 436, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 40
    }
  },
  436: { name: "crow_death",
    pic: 999, state: 14, wait: 0, next: 437, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 41
    }
  },
  437: { name: "crow_death",
    pic: 999, state: 15, wait: 10, next: 438, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  438: { name: "crow_death",
    pic: 163, state: 14, wait: 4, next: 439, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  439: { name: "crow_death",
    pic: 164, state: 14, wait: 4, next: 440, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  440: { name: "crow_death",
    pic: 165, state: 14, wait: 4, next: 441, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  441: { name: "crow_death",
    pic: 166, state: 14, wait: 4, next: 442, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  442: { name: "crow_death",
    pic: 167, state: 14, wait: 4, next: 443, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  443: { name: "crow_death",
    pic: 168, state: 14, wait: 4, next: 444, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  444: { name: "crow_death",
    pic: 166, state: 14, wait: 4, next: 445, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  445: { name: "crow_death",
    pic: 167, state: 14, wait: 4, next: 446, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  446: { name: "crow_death",
    pic: 168, state: 14, wait: 4, next: 447, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  447: { name: "crow_death",
    pic: 166, state: 14, wait: 4, next: 448, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  448: { name: "crow_death",
    pic: 167, state: 14, wait: 4, next: 449, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  449: { name: "crow_death",
    pic: 168, state: 14, wait: 4, next: 450, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  450: { name: "crow_death",
    pic: 166, state: 14, wait: 4, next: 451, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  451: { name: "crow_death",
    pic: 167, state: 14, wait: 3, next: 452, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  452: { name: "crow_death",
    pic: 168, state: 14, wait: 3, next: 453, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  453: { name: "crow_death",
    pic: 165, state: 14, wait: 3, next: -454, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  454: { name: "crow_death_slash",
    pic: 999, state: 400, wait: 1, next: 455, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  455: { name: "crow_death_slash",
    pic: 999, state: 15, wait: 0, next: 456, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -100, y: 110, action: 100, dvx: 0, dvy: 0, oid: 419
    }
  },
  456: { name: "crow_death_slash",
    pic: 999, state: 15, wait: 1, next: 457, dvx: 110, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  457: { name: "crow_death_slash",
    pic: 60, state: 15, wait: 1, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  460: { name: "chidori",
    pic: 70, state: 15, wait: 1, next: 461, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  461: { name: "chidori",
    pic: 71, state: 15, wait: 1, next: 462, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  462: { name: "chidori",
    pic: 72, state: 15, wait: 1, next: 463, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  463: { name: "chidori",
    pic: 71, state: 15, wait: 0, next: 464, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  464: { name: "chidori",
    pic: 72, state: 15, wait: 0, next: 465, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  465: { name: "chidori",
    pic: 73, state: 15, wait: 0, next: 466, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  466: { name: "chidori",
    pic: 74, state: 15, wait: 0, next: 467, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  467: { name: "chidori",
    pic: 74, state: 15, wait: 3, next: 468, dvx: 48, dvy: 0, dvz: 4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 334, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 20, y: 16, zwidth: 18, w: 45, h: 65, dvz: 5,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 3547899, w: 115, h: 115, zwidth: 500, dvx: 400
      }
    ],
    bdy: {
      kind: 0, x: 0, y: 1235400, w: 100, h: 100
    }
  },
  468: { name: "chidori_run",
    pic: 74, state: 15, wait: 2, next: 334, dvx: 64, dvy: 0, dvz: 4, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 20, y: 16, zwidth: 18, w: 45, h: 65, dvz: 5,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 3547899, w: 115, h: 115, zwidth: 500, dvx: 400
      }
    ],
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 0, y: 1235400, w: 100, h: 100
      }
    ]
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
  },
  505: { name: "susanoo_stance",
    pic: 0, state: 4, wait: 0, next: 506, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0
  },
  506: { name: "susanoo_stance",
    pic: 0, state: 4, wait: 5, next: 507, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 510, hit_d: 427, hit_j: 515, hit_Uj: 530, mp: -10,
    opoint: {
      kind: 1, x: 20, y: 95, action: 300, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  507: { name: "susanoo_stance",
    pic: 1, state: 4, wait: 4, next: 508, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 511, hit_d: 427, hit_j: 516, hit_Uj: 530, mp: -10
  },
  508: { name: "susanoo_stance",
    pic: 2, state: 4, wait: 5, next: 509, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 510, hit_d: 427, hit_j: 515, hit_Uj: 530, mp: -10,
    opoint: {
      kind: 1, x: 20, y: 95, action: 302, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  509: { name: "susanoo_stance",
    pic: 3, state: 4, wait: 4, next: 506, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 511, hit_d: 427, hit_j: 516, hit_Uj: 530, mp: -10
  },
  510: { name: "susanoo_wait",
    pic: 0, state: 15, wait: 3, next: 511, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 530, mp: 25
  },
  511: { name: "susanoo_atk1",
    pic: 1, state: 15, wait: 1, next: 512, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 530, mp: 25
  },
  512: { name: "susanoo_atk1",
    pic: 2, state: 15, wait: 9, next: 513, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: -3,
    sound: "1/005",
    opoint: {
      kind: 1, x: 20, y: 95, action: 305, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  513: { name: "susanoo_atk1",
    pic: 3, state: 15, wait: 2, next: 514, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: -3,
    itr: {
      kind: 0, x: 118, y: 38, w: 100, zwidth: 45, h: 48, dvx: 20, dvy: -2, fall: 100, arest: 3, bdefend: 60, injury: 100, effect: 0
    }
  },
  514: { name: "susanoo_atk1",
    pic: 0, state: 15, wait: 4, next: 505, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 525, hit_d: 427, hit_j: 0, mp: -3
  },
  515: { name: "susanoo_wait",
    pic: 0, state: 15, wait: 3, next: 516, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0
  },
  516: { name: "susanoo_wait",
    pic: 1, state: 15, wait: 2, next: 517, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0
  },
  517: { name: "susanoo_dis",
    pic: 1, state: 15, wait: 1, next: 518, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 95, action: 309, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  518: { name: "susanoo_run",
    pic: 82, state: 4, wait: 3, next: 519, dvx: 10, dvy: 550, dvz: 2, centerx: 39, centery: 79, hit_a: 521, hit_d: 427, hit_j: 523, mp: -6,
    sound: "1/003",
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
  519: { name: "susanoo_run",
    pic: 83, state: 4, wait: 4, next: 520, dvx: 15, dvy: 550, dvz: 2, centerx: 39, centery: 79, hit_a: 521, hit_d: 427, hit_j: 523, mp: -5,
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
  520: { name: "susanoo_run",
    pic: 84, state: 4, wait: 3, next: 518, dvx: 10, dvy: 550, dvz: 2, centerx: 39, centery: 79, hit_a: 521, hit_d: 427, hit_j: 523, mp: -6,
    sound: "1/004",
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
  521: { name: "susanoo_app1",
    pic: 60, state: 15, wait: 0, next: 522, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: 25
  },
  522: { name: "susanoo_app1",
    pic: 60, state: 15, wait: 2, next: 511, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: -2,
    opoint: {
      kind: 1, x: 20, y: 95, action: 311, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  523: { name: "susanoo_app2",
    pic: 60, state: 15, wait: 0, next: 524, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0
  },
  524: { name: "susanoo_app2",
    pic: 60, state: 15, wait: 3, next: 505, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 95, action: 311, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  525: { name: "susanoo_wait",
    pic: 0, state: 15, wait: 2, next: 526, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 530, mp: 20
  },
  526: { name: "susanoo_atk2",
    pic: 1, state: 15, wait: 9, next: 527, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: 20,
    sound: "1/005",
    opoint: {
      kind: 1, x: 20, y: 95, action: 315, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  527: { name: "susanoo_atk2",
    pic: 2, state: 15, wait: 2, next: 528, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: -3,
    itr: {
      kind: 0, x: 28, y: 38, w: 200, zwidth: 45, h: 48, dvx: 27, dvy: -10, fall: 100, arest: 3, bdefend: 60, injury: 70, effect: 0
    }
  },
  528: { name: "susanoo_atk2",
    pic: 3, state: 15, wait: 4, next: 505, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 427, hit_j: 0, mp: -3
  },
  530: { name: "susanoo_2",
    pic: 0, state: 15, wait: 0, next: 531, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 3050
  },
  531: { name: "susanoo_2",
    pic: 0, state: 15, wait: 0, next: 532, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/068",
    opoint: {
      kind: 1, x: 20, y: 95, action: 400, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  532: { name: "susanoo_2",
    pic: 0, state: 15, wait: 48, next: 533, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005"
  },
  533: { name: "susanoo_2",
    pic: 0, state: 15, wait: 15, next: 534, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 93, y: 83, action: 340, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  534: { name: "susanoo_2",
    pic: 0, state: 15, wait: 14, next: 535, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 93, y: 83, action: 343, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  535: { name: "susanoo_2",
    pic: 0, state: 15, wait: 16, next: 427, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 93, y: 43, action: 346, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  }
  }
});