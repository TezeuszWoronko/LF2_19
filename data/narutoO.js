define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/narutoO_0.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/narutoO_2.png", w: 79, h: 79, row: 10, col: 7
      }
    ],
    name: "Naruto_Sage",
    head: "sprite/narutoO_f.png",
    small: "sprite/narutoO_s.png",
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 35, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 34, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 34, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 53, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 48, y: 57, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 256, hit_Fa: 325, hit_Da: 285, hit_Ua: 265, hit_ja: 290, hit_Dj: 271, hit_Uj: 300,
    wpoint: {
      kind: 1, x: 32, y: 58, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 20, y: 58, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 28, y: 54, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 23, y: 54, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 26, state: 1, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  16: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 92, state: 3, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  21: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 0, next: 22, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  23: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 49, y: 31, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 40, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 76, state: 3, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 27, y: 17, w: 31, h: 63
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ],
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
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
    bdy: [
      {
        kind: 0, x: 10, y: 23, w: 31, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 57, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0, dircontrol: 1
    },
    bdy: [
      {
        kind: 0, x: 22, y: 10, w: 40, h: 52
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 70, state: 3, wait: 3, next: 21, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  36: { name: "run_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 35, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  37: { name: "run_weapon_atck",
    pic: 72, state: 3, wait: 3, next: 23, dvx: 0, dvy: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  38: { name: "run_weapon_atck",
    pic: 73, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 49, y: 31, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 40, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 63, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 29, weaponact: 100, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 55, y: 29, weaponact: 100, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 33, h: 45
    }
  },
  45: { name: "light_weapon_thw",
    pic: 92, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 93, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1911",
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 1, next: 48, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 95, state: 15, wait: 2, next: 49, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 25, y: 42, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  49: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 25, y: 22, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 37, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 29, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 28, dvy: -7, dvz: 2
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
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 57, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0, dircontrol: 1
    },
    bdy: [
      {
        kind: 0, x: 22, y: 10, w: 40, h: 52
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1911",
    wpoint: {
      kind: 1, x: 57, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0, dircontrol: 1
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
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 56, weaponact: 100, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
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
      kind: 0, x: 26, y: 130000, w: 28, h: 500
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      }
    ],
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 200, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
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
    pic: 12, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 49, y: 33, w: 30, h: 16, dvx: 2, bdefend: 16, zwidth: 150, injury: 15
      },
      {
        kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
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
  63: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 49, y: 33, w: 30, h: 16, dvx: 2, bdefend: 16, zwidth: 150, injury: 15
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
    pic: 14, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
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
    pic: 15, state: 3, wait: 2, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 201, dvx: 0, dvy: 0, oid: 203, facing: 0
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
    pic: 16, state: 3, wait: 2, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 34, w: 33, h: 14, dvx: 2, bdefend: 16, zwidth: 150, injury: 15
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
    pic: 17, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 34, w: 33, h: 14, dvx: 2, bdefend: 16, zwidth: 150, injury: 15
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
  70: { name: "super_punch",
    pic: 37, state: 3, wait: 0, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1883",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  71: { name: "super_punch",
    pic: 38, state: 3, wait: 2, next: 72, dvx: 4, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  72: { name: "super_punch",
    pic: 39, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 19, dvy: -7, fall: 70, arest: 15, bdefend: 60, zwidth: 40, injury: 60
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  73: { name: "super_punch",
    pic: 29, state: 3, wait: 2, next: 74, dvx: 4, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  74: { name: "super_punch",
    pic: 37, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  80: { name: "jump_attack",
    pic: 97, state: 15, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0, mp: 55,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  81: { name: "jump_attack",
    pic: 97, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 2, x: 67, y: 56, action: 20, dvx: 0, dvy: 0, oid: 121, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 15, y: 18, w: 30, h: 43
      }
    ]
  },
  82: { name: "jump_attack",
    pic: 99, state: 15, wait: 19, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 15, w: 38, h: 38
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  85: { name: "run_attack",
    pic: 37, state: 3, wait: 0, next: 70, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 19, y: 24, w: 35, h: 54
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  86: { name: "jump_attack_kick",
    pic: 55, state: 15, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 22, y: 10, w: 40, h: 52
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 15, y: 38, w: 70, h: 23, dvx: 0, dvy: 10, fall: 100, vrest: 5, bdefend: 100, injury: 55
    }
  },
  87: { name: "jump_attack_kick",
    pic: 56, state: 15, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    },
    itr: {
      kind: 0, x: 15, y: 38, w: 70, h: 23, dvx: 0, dvy: 20, fall: 100, vrest: 5, bdefend: 100, injury: 55
    }
  },
  88: { name: "jump_attack_kick",
    pic: 57, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  90: { name: "dash_attack",
    pic: 82, state: 15, wait: 3, next: 91, dvx: 0, dvy: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1860",
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 25, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  91: { name: "dash_attack",
    pic: 83, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
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
  92: { name: "dash_attack",
    pic: 84, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
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
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 67, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
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
    pic: 67, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 59, state: 6, wait: 2, next: 219, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 295,
    wpoint: {
      kind: 1, x: 32, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 24, y: 46, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 43, w: 33, h: 37
    }
  },
  120: { name: "catching",
    pic: 108, state: 9, wait: 0, next: 122, dvx: 0, dvy: 550, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/rasengan",
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: -99999999, y: -11111111111, w: 9999999999999, zwidth: 99999, h: 1000
      }
    ]
  },
  122: { name: "catching",
    pic: 109, state: 9, wait: 0, next: 123, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 125, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  125: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 126, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 12, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  126: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 127, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  127: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 128, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 12, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  128: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 295, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 12, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 26, y: 14, w: 28, h: 66
      }
    ]
  },
  131: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 26, y: 14, w: 28, h: 66
      }
    ],
    wpoint: {
      kind: 1, x: 26, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  132: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 26, y: 14, w: 28, h: 66
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 51, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 36
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
  145: { name: "rasenganshuriken2",
    pic: 93, state: 15, wait: 2, next: 146, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  146: { name: "rasenganshuriken2",
    pic: 94, state: 15, wait: 1, next: 147, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  147: { name: "rasenganshuriken2",
    pic: 95, state: 15, wait: 1, next: 148, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 80, action: 0, dvx: 0, dvy: 0, oid: 216, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  148: { name: "rasenganshuriken2",
    pic: 96, state: 15, wait: 6, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  150: { name: "kyubii",
    pic: 130, state: 9, wait: 0, next: 371, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, #mp: 499,
    cpoint: {
      kind: 1, x: 95, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 335, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: [
      {
        kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
      },
      {
        kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 35, dvy: -4, dvz: 3
      }
    ],
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1877",
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1877",
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
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
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 41, y: 666, action: 384, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -45,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    sound: "1/1912",
    wpoint: {
      kind: 1, x: 26, y: 65, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 20, y: 59, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 23, y: 54, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    sound: "1/1912",
    wpoint: {
      kind: 1, x: 24, y: 45, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 38, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 113, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 38, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 37, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 25, y: 52, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 26, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 0, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "1/1875",
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "1/1873",
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
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
        kind: 0, x: 0, y: 40000, w: 79, h: 500
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
        kind: 0, x: 0, y: 40000, w: 79, h: 500
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
    bdy: [
      {
        kind: 0, x: 28, y: 19, w: 30, h: 62
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ]
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
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
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
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ]
  },
  235: { name: "replacement",
    pic: 30, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    sound: "1/1895",
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
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 30, dvy: -4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  239: { name: "frogcheck2",
    pic: 37, state: 2220450, wait: 0, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ],
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 241
    }
  },
  240: { name: "frogcheck2",
    pic: 79, state: 15, wait: 5, next: 450, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -225,
    sound: "1/061",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 241
    }
  },
  241: { name: "Orasengan",
    pic: 37, state: 15, wait: 2, next: 242, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  242: { name: "Orasengan",
    pic: 35, state: 15, wait: 2, next: 327, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078",
    opoint: {
      kind: 1, x: 40, y: -70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  256: { name: "rasengan",
    pic: 100, state: 15, wait: 0, next: 276, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  257: { name: "rasengan",
    pic: 101, state: 15, wait: 1, next: 275, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  258: { name: "rasengan",
    pic: 102, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  259: { name: "rasengan",
    pic: 103, state: 15, wait: 1, next: 260, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  260: { name: "rasengan",
    pic: 104, state: 15, wait: 1, next: 261, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  261: { name: "rasengan",
    pic: 105, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  262: { name: "rasengan run",
    pic: 46, state: 3, wait: 6, next: 263, dvx: 40, dvy: 0, dvz: 5, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: 3547850, w: 100, h: 100
      }
    ],
    itr: [
      {
        kind: 3, x: 60, y: 80000, w: 25, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 1235454, w: 100, h: 100, zwidth: 500, dvx: 400
      }
    ],
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  263: { name: "rasengan run",
    pic: 46, state: 3, wait: 1, next: 999, dvx: -1, dvy: 0, dvz: 550, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 0, y: 3547850, w: 100, h: 100
      }
    ],
    itr: [
      {
        kind: 3, x: 60, y: 80000, w: 25, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: 1235454, w: 100, h: 100, zwidth: 500, dvx: 400
      }
    ],
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  265: { name: "clone_spin",
    pic: 78, state: 3, wait: 3, next: 266, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 50,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  266: { name: "clone_spin",
    pic: 79, state: 3, wait: 0, next: 267, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 41, y: 3543453, action: 396, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  267: { name: "clone_spin",
    pic: 79, state: 3, wait: 2, next: 268, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 85, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  268: { name: "clone",
    pic: 79, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 85, y: 79, action: 310, dvx: 0, dvy: 0, oid: 236, facing: 0
    }
  },
  269: { name: "clone",
    pic: 59, state: 15, wait: 3, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  270: { name: "clone",
    pic: 59, state: 15, wait: 3, next: 365, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  271: { name: "clone",
    pic: 78, state: 3, wait: 2, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  272: { name: "mass clone",
    pic: 79, state: 3, wait: 6, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/bunshin",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      }
    ]
  },
  273: { name: "mass clone",
    pic: 79, state: 3, wait: 0, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 0, y: 70, action: 174, dvx: 0, dvy: 0, oid: 204, facing: 1
    }
  },
  274: { name: "mass clone",
    pic: 79, state: 15, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 80, y: 70, action: 174, dvx: 0, dvy: 0, oid: 204, facing: 1
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  275: { name: "rasenganshuriken",
    pic: 101, state: 15, wait: 0, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -155,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ],
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 258
    }
  },
  276: { name: "rasenganshuriken",
    pic: 100, state: 2155450, wait: 0, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 258
    }
  },
  280: { name: "kick",
    pic: 87, state: 3, wait: 3, next: 281, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1862",
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    },
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  281: { name: "kick",
    pic: 88, state: 3, wait: 1, next: 282, dvx: 4, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ],
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  282: { name: "kick",
    pic: 89, state: 3, wait: 3, next: 215, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 15, dvy: -15, fall: 100, arest: 15, bdefend: 100, injury: 60
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    },
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  283: { name: "shuriken",
    pic: 94, state: 15, wait: 2, next: 284, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 42, w: 35, h: 57
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 42, y: 51, action: 40, dvx: 35, dvy: -4, oid: 121, facing: 0
    }
  },
  284: { name: "shuriken",
    pic: 96, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  285: { name: "clone_spin",
    pic: 78, state: 3, wait: 3, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 105,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  286: { name: "clone_spin",
    pic: 79, state: 3, wait: 3, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 85, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  287: { name: "clone_spin",
    pic: 79, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 85, y: 79, action: 315, dvx: 0, dvy: 0, oid: 73, facing: 0
    }
  },
  290: { name: "charge",
    pic: 78, state: 3, wait: 3, next: 291, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1898",
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 37, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ]
  },
  291: { name: "charge",
    pic: 79, state: 17, wait: 3, next: 292, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 2, x: 42, y: 81, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
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
    pic: 79, state: 17, wait: 3, next: 293, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 400, hit_d: 294, hit_j: 294,
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
  293: { name: "charge",
    pic: 79, state: 17, wait: 3, next: 292, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 400, hit_d: 294, hit_j: 294,
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
    pic: 78, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 100, attacking: 0, dvx: 100, dvy: -1, cover: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  295: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 296, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 21, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 19, y: -999, w: 28, h: 65
      }
    ],
    wpoint: {
      kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  296: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 297, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 21, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 19, y: 50, w: 28, h: 65
      }
    ],
    wpoint: {
      kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  297: { name: "rasengan finish",
    pic: 52, state: 3, wait: 3, next: 999, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 35, dvy: -4, dvz: 3
    },
    itr: {
      kind: 0, x: 59, y: 39, w: 22, h: 13, dvx: 100, dvy: -15, fall: 100, vrest: 15, bdefend: 100, injury: 31
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      }
    ]
  },
  300: { name: "rasenganshuriken",
    pic: 79, state: 15, wait: 3, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1886",
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ],
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 302
    }
  },
  301: { name: "rasenganshuriken",
    pic: 79, state: 15, wait: 0, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    opoint: {
      kind: 1, x: 5, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  302: { name: "rasenganshuriken",
    pic: 79, state: 15, wait: 0, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 5, y: 79, action: 295, cover: 1, dvx: 0, dvy: 0, oid: 73, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  303: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 0, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    opoint: {
      kind: 1, x: -16, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  304: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 0, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -16, y: 79, action: 285, cover: 1, dvx: 0, dvy: 0, oid: 73, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  305: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 0, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 10, y: 80, action: 50, dvx: 0, dvy: 0, oid: 216, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  306: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 0, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  307: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 1, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  308: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 1, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  309: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 1, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  310: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 2, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 10, y: 80, action: 52, dvx: 0, dvy: 0, oid: 216, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  311: { name: "rasenganshuriken",
    pic: 45, state: 15, wait: 2, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  312: { name: "rasenganshuriken2",
    pic: 35, state: 4, wait: 0, next: 313, dvx: 0, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  313: { name: "rasenganshuriken2",
    pic: 36, state: 4, wait: 2, next: 314, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 145, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 47, action: 55, dvx: 0, dvy: 0, oid: 216, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  314: { name: "rasenganshuriken2",
    pic: 27, state: 4, wait: 1, next: 315, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 145, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  315: { name: "rasenganshuriken2",
    pic: 36, state: 4, wait: 2, next: 316, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 145, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  316: { name: "rasenganshuriken2",
    pic: 27, state: 4, wait: 2, next: 313, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 145, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  317: { name: "rasenganshuriken",
    pic: 79, state: 15, wait: 0, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -150,
    wpoint: {
      kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 60000, w: 40, h: 500
      }
    ],
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 302
    }
  },
  318: { name: "rasenganshuriken",
    pic: 79, state: 2290450, wait: 0, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 302
    }
  },
  319: { name: "catching2 ",
    pic: 80, state: 9, wait: 1, next: 320, dvx: 550, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1885",
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
  320: { name: "catching2 ",
    pic: 81, state: 9, wait: 1, next: 321, dvx: 550, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 80, action: 179, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  321: { name: "catching2 ",
    pic: 81, state: 9, wait: 1, next: 180, dvx: -130, dvy: -30, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 220, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  325: { name: "Orasengan",
    pic: 37, state: 15, wait: 1, next: 239, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 806, x: -120, y: -3021, w: 360, h: 100, zwidth: 500, dvx: 241
    }
  },
  326: { name: "Orasengan",
    pic: 35, state: 18, wait: 2, next: 327, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -220,
    sound: "1/078",
    opoint: {
      kind: 1, x: 40, y: -70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  327: { name: "Orasengan",
    pic: 36, state: 3, wait: 2, next: 328, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  328: { name: "Orasengan",
    pic: 36, state: 3, wait: 4, next: 329, dvx: 0, dvy: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  329: { name: "ultimate_rasengan",
    pic: 62, state: 15, wait: 2, next: 330, dvx: 14, dvy: -10, dvz: 5, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  330: { name: "ultimate_rasengan",
    pic: 106, state: 100, wait: 1, next: 331, dvx: 2, dvy: -3, centerx: 46, centery: 79, hit_a: 335, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  331: { name: "ultimate_rasengan",
    pic: 106, state: 100, wait: 1, next: 332, dvx: 2, dvy: 550, dvz: 5, centerx: 46, centery: 79, hit_a: 335, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  332: { name: "ultimate_rasengan",
    pic: 106, state: 100, wait: 1, next: 333, dvx: 2, dvy: 550, dvz: 5, centerx: 46, centery: 79, hit_a: 335, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  333: { name: "ultimate_rasengan",
    pic: 106, state: 100, wait: 1, next: 334, dvx: 2, dvy: 550, dvz: 5, centerx: 46, centery: 79, hit_a: 335, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  334: { name: "ultimate_rasengan",
    pic: 106, state: 100, wait: 1, next: 335, dvx: 2, dvy: 550, dvz: 5, centerx: 46, centery: 79, hit_a: 335, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  335: { name: "ultimate_rasengan",
    pic: 125, state: 100, wait: 1, next: 336, dvx: 10, dvy: 15, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  336: { name: "ultimate_rasengan",
    pic: 126, state: 15, wait: 0, next: 337, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 90, y: 70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  337: { name: "ultimate_rasengan",
    pic: 127, state: 15, wait: 0, next: 338, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 90, y: 140, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  338: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 339, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  339: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 340, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  340: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 420, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  352: { name: "rasengan run",
    pic: 105, state: 3, wait: 1, next: 353, dvx: 60, dvy: 0, dvz: 6, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  353: { name: "rasengan run",
    pic: 106, state: 3, wait: 1, next: 363, dvx: 60, dvy: 0, dvz: 6, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  355: { name: "rasenganshuriken2 run",
    pic: 90, state: 15, wait: 2, next: 317, dvx: 30, dvy: 550, dvz: 4, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [319, 319]
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  356: { name: "clone",
    pic: 79, state: 3, wait: 3, next: 357, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  357: { name: "clone",
    pic: 79, state: 15, wait: 0, next: 358, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 70, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  358: { name: "clone",
    pic: 79, state: 15, wait: 0, next: 359, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 70, y: 79, action: 300, dvx: 0, dvy: 0, oid: 2, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  359: { name: "clone",
    pic: 79, state: 15, wait: 0, next: 360, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -3, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  360: { name: "clone",
    pic: 79, state: 15, wait: 0, next: 361, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -3, y: 79, action: 300, dvx: 0, dvy: 0, oid: 2, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  361: { name: "mass clone",
    pic: 79, state: 3, wait: 0, next: 362, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 200, y: 70, action: 160, dvx: 0, dvy: 0, oid: 204, facing: 0
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
  362: { name: "mass clone",
    pic: 79, state: 3, wait: 0, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -200, y: 70, action: 160, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  363: { name: "rasengan run",
    pic: 107, state: 3, wait: 1, next: 364, dvx: 60, dvy: 0, dvz: 6, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  364: { name: "rasengan run",
    pic: 107, state: 3, wait: 1, next: 999, dvx: -1, dvy: 0, dvz: 6, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  365: { name: "clone",
    pic: 49, state: 15, wait: 0, next: 366, dvx: 35, dvy: 15, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1880",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  366: { name: "clone_spin",
    pic: 49, state: 15, wait: 0, next: 367, dvx: 0, dvy: 0, dvz: 5, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 100, injury: 35
    }
  },
  367: { name: "clone_spin",
    pic: 58, state: 15, wait: 0, next: 368, dvx: 0, dvy: 0, dvz: 5, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  368: { name: "clone_spin",
    pic: 59, state: 15, wait: 0, next: 369, dvx: 0, dvy: 0, dvz: 5, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  369: { name: "clone_spin",
    pic: 69, state: 15, wait: 0, next: 366, dvx: 0, dvy: 0, dvz: 5, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  370: { name: "kyubii",
    pic: 130, state: 9, wait: 0, next: 150, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, mp: 170,
    cpoint: {
      kind: 1, x: 95, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: [
      {
        kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
      },
      {
        kind: 1, x: 72, y: 44, weaponact: 35, attacking: 0, cover: 1, dvx: 35, dvy: -4, dvz: 3
      }
    ],
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  371: { name: "kyubii",
    pic: 131, state: 18, wait: 0, next: 372, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  372: { name: "kyubii",
    pic: 132, state: 9, wait: 0, next: 373, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  373: { name: "kyubii",
    pic: 133, state: 9, wait: 0, next: 374, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  374: { name: "kyubii",
    pic: 134, state: 9, wait: 0, next: 375, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  375: { name: "kyubii",
    pic: 135, state: 9, wait: 0, next: 376, dvx: 0, dvy: 550, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  376: { name: "kyubii",
    pic: 136, state: 18, wait: 1, next: 377, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 60, y: 80, action: 151, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  377: { name: "kyubii",
    pic: 137, state: 15, wait: 1, next: 378, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  378: { name: "kyubii",
    pic: 136, state: 15, wait: 1, next: 379, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  379: { name: "kyubii",
    pic: 137, state: 15, wait: 1, next: 380, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  380: { name: "kyubii",
    pic: 136, state: 15, wait: 1, next: 381, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  381: { name: "kyubii",
    pic: 137, state: 15, wait: 1, next: 382, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  382: { name: "kyubii",
    pic: 136, state: 15, wait: 1, next: 383, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  383: { name: "kyubii",
    pic: 137, state: 15, wait: 1, next: 384, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  384: { name: "kyubii",
    pic: 136, state: 15, wait: 1, next: 385, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  385: { name: "kyubii",
    pic: 137, state: 15, wait: 1, next: 386, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  386: { name: "kyubii",
    pic: 136, state: 15, wait: 1, next: 387, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  387: { name: "heart_swal",
    pic: 137, state: 15, wait: 1, next: 388, dvx: 0, dvy: 0, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: -876427836875656200, w: 100, h: 20
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 316, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  388: { name: "kyubii",
    pic: 136, state: 8052, wait: 1, next: 999, dvx: 0, dvy: 550, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 43, y: 81, action: 32, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1902",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  400: { name: "skin",
    pic: 78, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 401,
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
  401: { name: "skin",
    pic: 78, state: 15, wait: 0, next: 402, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  402: { name: "skin",
    pic: 78, state: 15, wait: 0, next: 403, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 0, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  403: { name: "skin",
    pic: 78, state: 15, wait: 0, next: 404, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  404: { name: "trans",
    pic: 999, state: 8072, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/date",
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  410: { name: "chidoriclash",
    pic: 999, state: 15, wait: 0, next: 411, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/rasengan",
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  411: { name: "chidoriclash",
    pic: 52, state: 15, wait: 0, next: 412, dvx: -50, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    },
    opoint: {
      kind: 1, x: 43, y: 19, action: 210, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  412: { name: "chidoriclash",
    pic: 52, state: 15, wait: 40, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  420: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 421, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 90, y: 140, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  421: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 422, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  422: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 423, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  423: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 424, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 90, y: 70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  424: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 425, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 90, y: 140, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  425: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 426, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  426: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 427, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  427: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 428, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 90, y: 70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  428: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 429, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 90, y: 140, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  429: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 430, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  430: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 431, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  431: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 432, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 90, y: 140, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  432: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 433, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 90, y: 70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  433: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 434, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  434: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 435, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  435: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 436, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  436: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 437, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  437: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 438, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  438: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 439, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  439: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 440, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: [
      {
        kind: 1, x: 90, y: 70, action: 310, cover: 1, dvx: 0, dvy: 0, oid: 229, facing: 0
      },
      {
        kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  440: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 441, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  441: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 0, next: 442, dvx: 550, dvy: 550, dvz: 550, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 169, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  442: { name: "ultimate_rasengan",
    pic: 64, state: 15, wait: 0, next: 443, dvx: -5, dvy: -100, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 90, y: 85, action: 190, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  443: { name: "ultimate_rasengan",
    pic: 64, state: 15, wait: 0, next: 444, dvx: 0, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  444: { name: "ultimate_rasengan",
    pic: 64, state: 15, wait: 0, next: 444, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  449: { name: "narutofrog",
    pic: 91, state: 15, wait: 2, next: 451, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  450: { name: "narutofrog",
    pic: 80, state: 15, wait: 3, next: 451, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  451: { name: "narutofrog",
    pic: 91, state: 15, wait: 1, next: 452, dvx: 0, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 41, y: 666, action: 386, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  452: { name: "narutofrog",
    pic: 70, state: 4, wait: 4, next: 453, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 456, hit_d: 0, hit_j: 456,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  453: { name: "narutofrog",
    pic: 71, state: 4, wait: 4, next: 454, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 456, hit_d: 0, hit_j: 456,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  454: { name: "narutofrog",
    pic: 72, state: 4, wait: 4, next: 455, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 456, hit_d: 0, hit_j: 456,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  455: { name: "narutofrog",
    pic: 73, state: 4, wait: 4, next: 452, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 456, hit_d: 0, hit_j: 456,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  456: { name: "narutofrog",
    pic: 74, state: 15, wait: 6, next: 457, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  457: { name: "narutofrog",
    pic: 75, state: 15, wait: 4, next: 458, dvx: 10, dvy: 550, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  458: { name: "narutofrog",
    pic: 118, state: 15, wait: 3, next: 452, dvx: 0, dvy: 550, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 39, y: 666, w: 10, h: 1
      }
    ]
  },
  459: { name: "narutofrog",
    pic: 90, state: 15, wait: 3, next: 449, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
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