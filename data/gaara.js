define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/gaara.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/gaara_2.png", w: 79, h: 79, row: 10, col: 7
      }
    ],
    name: "Gaara",
    head: "sprite/gaara_f.png",
    small: "sprite/gaara_s.png",
    walking_frame_rate: 3,
    walking_speed: 3.5,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 11.25,
    running_speedz: 3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -17.299999,
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
    pic: 0, state: 0, wait: 2, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Uj: 280, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 44, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  1: { name: "standing",
    pic: 0, state: 0, wait: 2, next: 2, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Uj: 280, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 43, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  2: { name: "standing",
    pic: 1, state: 0, wait: 2, next: 3, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Uj: 280, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 44, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  3: { name: "standing",
    pic: 1, state: 0, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Uj: 280, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 44, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  5: { name: "walking",
    pic: 4, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 35, y: 53, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 45, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  6: { name: "walking",
    pic: 5, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 43, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 45, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  7: { name: "walking",
    pic: 6, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 45, y: 57, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 45, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  8: { name: "walking",
    pic: 7, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 245, hit_Fa: 240, hit_ja: 250, hit_Da: 255, hit_Dj: 275, hit_Fj: 315,
    wpoint: {
      kind: 1, x: 47, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 28, y: 15, w: 27, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 45, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 30, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 19, w: 38, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 19, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 19, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 19, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 19, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 19, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "tree_jump",
    pic: 68, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 69, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 69, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 14, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 14, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 62, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 21, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 17, w: 39, h: 56
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 81, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, centerx: 19, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 37, y: 68, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 32, w: 33, h: 43
    }
  },
  35: { name: "run_weapon_atck",
    pic: 14, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 63, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 20, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 15, w: 40, h: 53
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
    pic: 14, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 15, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 16, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 57, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 55, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 58, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 45, dvy: -4, dvz: 2
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
      kind: 1, x: 45, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
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
      }
    ]
  },
  55: { name: "kirby",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 55, backhurtact: 55
    },
    bdy: {
      kind: 0, x: 26, y: 142000, w: 28, h: 500
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 2, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75,
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75, mp: -2,
    sound: "1/1972",
    opoint: {
      kind: 1, x: 60, y: 70, action: 0, dvx: 8, dvy: 0, oid: 412, facing: 0
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
    pic: 12, state: 3, wait: 3, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
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
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
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
    pic: 14, state: 3, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75,
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
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75, mp: -2,
    sound: "1/1971",
    opoint: {
      kind: 1, x: 80, y: 70, action: 0, dvx: 6, dvy: 0, oid: 411, facing: 0
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
    pic: 16, state: 3, wait: 1, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
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
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 75,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
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
  70: { name: "super_punch",
    pic: 13, state: 3, wait: 3, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1955",
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
    pic: 17, state: 3, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -8,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  72: { name: "super_punch",
    pic: 27, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
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
  73: { name: "super_punch",
    pic: 28, state: 3, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 70, action: 0, dvx: 10, dvy: 0, oid: 412, facing: 30
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
  74: { name: "super_punch",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  75: { name: "super_punch2",
    pic: 14, state: 3, wait: 3, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 70,
    sound: "1/1955",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  76: { name: "super_punch2",
    pic: 15, state: 3, wait: 2, next: 77, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  77: { name: "super_punch2",
    pic: 16, state: 3, wait: 2, next: 78, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
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
  78: { name: "super_punch2",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 70, action: 0, dvx: 15, dvy: 0, oid: 412, facing: 30
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
  80: { name: "jump_attack",
    pic: 52, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  81: { name: "jump_attack",
    pic: 53, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1946",
    bdy: [
      {
        kind: 0, x: 22, y: 19, w: 32, h: 60
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ]
  },
  82: { name: "jump_attack",
    pic: 54, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, dvy: 7, fall: 75, arest: 15, bdefend: 16, injury: 55
    },
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
    pic: 55, state: 3, wait: 2, next: 84, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, dvy: 7, fall: 75, arest: 15, bdefend: 16, injury: 55
    },
    bdy: [
      {
        kind: 0, x: 20, y: 18, w: 34, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  84: { name: "jump_attack",
    pic: 56, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  85: { name: "run_attack",
    pic: 40, state: 3, wait: 3, next: 86, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1946",
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
    pic: 41, state: 3, wait: 1, next: 87, dvx: 6, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 8, y: 51, w: 38, h: 27
      }
    ]
  },
  87: { name: "run_attack",
    pic: 42, state: 3, wait: 1, next: 88, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 2, y: 57, w: 41, h: 22
      }
    ],
    itr: {
      kind: 0, x: 19, y: 37, w: 61, h: 17, dvx: 10, fall: 50, arest: 15, bdefend: 16, injury: 50
    },
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 412, facing: 0
    }
  },
  88: { name: "run_attack",
    pic: 43, state: 3, wait: 1, next: 63, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 2, y: 57, w: 41, h: 22
      }
    ],
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  90: { name: "dash_attack",
    pic: 52, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 18, w: 34, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    pic: 60, state: 7, wait: 1, next: 400, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  111: { name: "defend",
    pic: 60, state: 7, wait: 5, next: 110, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  118: { name: "catching",
    pic: 11, state: 9, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 380, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  119: { name: "catching",
    pic: 11, state: 9, wait: 1, next: 325, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 355, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 300, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  120: { name: "catching",
    pic: 11, state: 9, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 360, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  121: { name: "catching",
    pic: 11, state: 9, wait: 1, next: 332, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 350, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 180, y: 39, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  122: { name: "catching",
    pic: 12, state: 9, wait: 2, next: 123, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 360, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  123: { name: "catching",
    pic: 12, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 360, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 100, y: 34, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  124: { name: "catching",
    pic: 13, state: 9, wait: 0, next: 125, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 360, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  125: { name: "catching",
    pic: 50, state: 9, wait: 3, next: 126, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 25, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 100, y: 33, action: 7, dvx: 0, dvy: 0, dvz: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  126: { name: "catching",
    pic: 50, state: 9, wait: 15, next: 127, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 5, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  127: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 128, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1945",
    cpoint: {
      kind: 1, x: 100, y: 3, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  128: { name: "catching",
    pic: 51, state: 9, wait: 10, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 3, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 100, y: 35, action: 10, dvx: 0, dvy: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  130: { name: "picked_caught",
    pic: 31, state: 10, wait: 7, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    sound: "1/1966",
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
    sound: "1/1966",
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
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 0, hit_j: 235,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 0, hit_j: 235, mp: -45,
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
    sound: "1/1952",
    wpoint: {
      kind: 1, x: 35, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: 70, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    wpoint: {
      kind: 1, x: 35, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
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
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 113, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 10, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    sound: "1/1963",
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
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
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
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    sound: "1/1965",
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
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
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
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    wpoint: {
      kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 42, h: 58
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    wpoint: {
      kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 24, w: 39, h: 57
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    wpoint: {
      kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 23, w: 37, h: 58
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 235,
    wpoint: {
      kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 29, y: 26, w: 37, h: 53
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
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
  235: { name: "replacement",
    pic: 37, state: 15, wait: 1, next: 236, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  236: { name: "replacement",
    pic: 38, state: 15, wait: 1, next: 237, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1955",
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 50, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 45, dvy: -4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  240: { name: "sand_blast",
    pic: 13, state: 3, wait: 3, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  241: { name: "sand_blast",
    pic: 17, state: 3, wait: 2, next: 242, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  242: { name: "sand_blast",
    pic: 27, state: 3, wait: 2, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  243: { name: "sand_blast",
    pic: 28, state: 3, wait: 2, next: 244, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1956",
    opoint: {
      kind: 1, x: 60, y: 70, action: 6, dvx: 0, dvy: 0, oid: 411, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  244: { name: "sand_blast",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 240, hit_d: 0, hit_j: 0, mp: -55,
    sound: "1/043",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 413, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  245: { name: "coffin",
    pic: 14, state: 3, wait: 1, next: 340, dvx: 0, dvy: 0, dvz: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 135,
    sound: "1/1947",
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  246: { name: "coffin",
    pic: 16, state: 3, wait: 1, next: 247, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 80, y: 16, w: 55, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 40, y: 80, action: 220, dvx: 18, dvy: 0, oid: 411, facing: 0
    }
  },
  247: { name: "coffin",
    pic: 16, state: 3, wait: 1, next: 341, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 180, y: 16, w: 55, h: 65,
      catchingact: [121, 121], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 85, y: 80, action: 215, dvx: 22, dvy: 0, oid: 411, facing: 0
    }
  },
  248: { name: "coffin",
    pic: 15, state: 3, wait: 1, next: 246, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -10, y: 80, action: 220, dvx: 15, dvy: 0, oid: 411, facing: 0
    }
  },
  249: { name: "coffin",
    pic: 51, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  250: { name: "charge",
    pic: 44, state: 3, wait: 3, next: 251, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1958",
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
  251: { name: "charge",
    pic: 45, state: 17, wait: 3, next: 252, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  252: { name: "charge",
    pic: 46, state: 17, wait: 3, next: 253, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 254, hit_d: 254, hit_j: 254,
    opoint: {
      kind: 1, x: 43, y: 55, action: 0, dvx: 0, dvy: 0, oid: 203
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
  253: { name: "charge",
    pic: 45, state: 17, wait: 3, next: 252, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 254, hit_d: 254, hit_j: 254,
    opoint: {
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
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
  254: { name: "charge",
    pic: 44, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  255: { name: "desert_storm",
    pic: 60, state: 15, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 140,
    sound: "1/1970",
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  256: { name: "desert_storm",
    pic: 60, state: 15, wait: 0, next: 257, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  257: { name: "desert_storm",
    pic: 60, state: 15, wait: 2, next: 258, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  258: { name: "desert_storm",
    pic: 47, state: 15, wait: 2, next: 259, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  259: { name: "desert_storm",
    pic: 48, state: 15, wait: 2, next: 260, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  260: { name: "desert_storm",
    pic: 49, state: 15, wait: 2, next: 261, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  261: { name: "desert_storm",
    pic: 48, state: 15, wait: 2, next: 262, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1953",
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  262: { name: "desert_storm",
    pic: 49, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 60, action: 151, dvx: 5, dvy: 0, oid: 412, facing: 0
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
  263: { name: "desert_storm",
    pic: 49, state: 15, wait: 4, next: 264, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 70, action: 135, dvx: 1, dvy: 0, oid: 412, facing: 30
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
  264: { name: "desert_storm",
    pic: 49, state: 15, wait: 4, next: 265, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 70, action: 135, dvx: 0, dvy: 0, oid: 412, facing: 30
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
  265: { name: "desert_storm",
    pic: 49, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  266: { name: "desert_storm",
    pic: 49, state: 15, wait: 0, next: 267, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 180,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  267: { name: "desert_storm",
    pic: 49, state: 15, wait: 2, next: 268, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 70, action: 135, dvx: 2, dvy: 0, oid: 412, facing: 30
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
  268: { name: "desert_storm",
    pic: 49, state: 15, wait: 4, next: 269, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 70, action: 135, dvx: 1, dvy: 0, oid: 412, facing: 30
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
  269: { name: "desert_storm",
    pic: 49, state: 15, wait: 4, next: 270, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 70, action: 135, dvx: 0, dvy: 0, oid: 412, facing: 30
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
  270: { name: "desert_storm",
    pic: 49, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  275: { name: "sand_spike",
    pic: 44, state: 15, wait: 0, next: 276, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  276: { name: "sand_spike",
    pic: 45, state: 15, wait: 1, next: 277, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 70, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  277: { name: "sand_spike",
    pic: 45, state: 15, wait: 2, next: 278, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  278: { name: "sand_spike",
    pic: 999, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/0807",
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 31, y: 79, action: 55, dvx: 0, dvy: 0, oid: 226, facing: 0
    }
  },
  280: { name: "desert_graveyard",
    pic: 70, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 270,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  281: { name: "desert_graveyard",
    pic: 71, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  282: { name: "desert_graveyard",
    pic: 72, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  283: { name: "desert_graveyard",
    pic: 73, state: 15, wait: 1, next: 284, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 0, y: 80, action: 190, dvx: 0, dvy: 0, oid: 205, facing: 0
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
  284: { name: "desert_graveyard",
    pic: 74, state: 15, wait: 1, next: 285, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  285: { name: "desert_graveyard",
    pic: 75, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  286: { name: "desert_graveyard",
    pic: 76, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  287: { name: "desert_graveyard",
    pic: 77, state: 15, wait: 1, next: 288, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  288: { name: "desert_graveyard",
    pic: 75, state: 15, wait: 1, next: 289, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  289: { name: "desert_graveyard",
    pic: 76, state: 15, wait: 1, next: 290, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  290: { name: "desert_graveyard",
    pic: 77, state: 15, wait: 1, next: 291, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  291: { name: "desert_graveyard",
    pic: 75, state: 15, wait: 1, next: 292, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  292: { name: "desert_graveyard",
    pic: 76, state: 15, wait: 1, next: 293, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  293: { name: "desert_graveyard",
    pic: 77, state: 15, wait: 1, next: 294, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  294: { name: "desert_graveyard",
    pic: 75, state: 15, wait: 1, next: 295, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  295: { name: "desert_graveyard",
    pic: 76, state: 15, wait: 1, next: 296, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  296: { name: "desert_graveyard",
    pic: 47, state: 15, wait: 2, next: 297, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  297: { name: "desert_graveyard",
    pic: 48, state: 15, wait: 3, next: 298, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  298: { name: "desert_graveyard",
    pic: 49, state: 15, wait: 10, next: 299, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  299: { name: "desert_graveyard",
    pic: 60, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 390,
    wpoint: {
      kind: 1, x: 900, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  300: { name: "fly",
    pic: 78, state: 15, wait: 0, next: 301, dvx: 25, dvy: -5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 15,
    sound: "1/031",
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
  301: { name: "fly",
    pic: 78, state: 15, wait: 0, next: 302, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -3,
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
    ],
    opoint: {
      kind: 1, x: 50, y: 120, action: 90, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  302: { name: "fly",
    pic: 78, state: 15, wait: 0, next: 301, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_d: 0, hit_j: 303, mp: -3,
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
    ],
    opoint: {
      kind: 1, x: 50, y: 120, action: 90, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  303: { name: "fly",
    pic: 78, state: 15, wait: 0, next: 304, dvx: 0, dvy: 550, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    },
    opoint: {
      kind: 1, x: 50, y: 120, action: 90, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  304: { name: "fly",
    pic: 78, state: 15, wait: 0, next: 301, dvx: 0, dvy: 550, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    ],
    opoint: {
      kind: 1, x: 50, y: 120, action: 90, dvx: 0, dvy: 0, oid: 419, facing: 0
    }
  },
  315: { name: "spear",
    pic: 71, state: 15, wait: 0, next: 316, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 255,
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
  316: { name: "spear",
    pic: 72, state: 15, wait: 0, next: 317, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    ],
    opoint: {
      kind: 1, x: -50, y: 70, action: 45, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  317: { name: "spear",
    pic: 73, state: 15, wait: 2, next: 318, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  318: { name: "spear",
    pic: 90, state: 15, wait: 5, next: 319, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  319: { name: "spear",
    pic: 91, state: 15, wait: 2, next: 320, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  320: { name: "spear",
    pic: 92, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  321: { name: "spear",
    pic: 93, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  325: { name: "catching",
    pic: 12, state: 9, wait: 2, next: 326, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 355, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 300, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  326: { name: "catching",
    pic: 12, state: 9, wait: 0, next: 327, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 355, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 300, y: 34, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  327: { name: "catching",
    pic: 13, state: 9, wait: 0, next: 328, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 355, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: 30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  328: { name: "catching",
    pic: 50, state: 9, wait: 3, next: 329, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: 25, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 300, y: 33, action: 7, dvx: 0, dvy: 0, dvz: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  329: { name: "catching",
    pic: 50, state: 9, wait: 15, next: 330, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: 5, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  330: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 331, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1945",
    cpoint: {
      kind: 1, x: 300, y: 3, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  331: { name: "catching",
    pic: 51, state: 9, wait: 10, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: 3, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 300, y: 35, action: 10, dvx: 0, dvy: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  332: { name: "catching",
    pic: 12, state: 9, wait: 2, next: 333, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 350, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 180, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  333: { name: "catching",
    pic: 12, state: 9, wait: 0, next: 334, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 350, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    cpoint: {
      kind: 1, x: 200, y: 34, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  334: { name: "catching",
    pic: 13, state: 9, wait: 0, next: 335, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 350, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: 30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  335: { name: "catching",
    pic: 50, state: 9, wait: 3, next: 336, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: 25, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 200, y: 33, action: 7, dvx: 0, dvy: 0, dvz: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  336: { name: "catching",
    pic: 50, state: 9, wait: 15, next: 337, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: 5, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  337: { name: "catching",
    pic: 51, state: 9, wait: 0, next: 338, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1945",
    cpoint: {
      kind: 1, x: 200, y: 3, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  338: { name: "catching",
    pic: 51, state: 9, wait: 10, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: 3, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 200, y: 35, action: 10, dvx: 0, dvy: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  340: { name: "coffin",
    pic: 14, state: 3, wait: 0, next: 248, dvx: 0, dvy: 0, dvz: 1, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  341: { name: "coffin",
    pic: 16, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 280, y: 16, w: 62, h: 65,
      catchingact: [119, 119], caughtact: [130, 130]
    },
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 140, y: 80, action: 215, dvx: 24, dvy: 0, oid: 411, facing: 0
    }
  },
  350: { name: "catching3b",
    pic: 50, state: 9, wait: 1, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 90,
    cpoint: {
      kind: 1, x: 200, y: -30, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  351: { name: "catching3b",
    pic: 50, state: 9, wait: 3, next: 352, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: -30, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 200, y: 33, action: 140, dvx: 0, dvy: 0, dvz: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  352: { name: "catching3b",
    pic: 50, state: 9, wait: 25, next: 353, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: -30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  353: { name: "catching3b",
    pic: 51, state: 9, wait: 0, next: 354, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1945",
    cpoint: {
      kind: 1, x: 200, y: -30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  354: { name: "catching3b",
    pic: 51, state: 9, wait: 10, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 200, y: -30, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 200, y: 35, action: 146, dvx: 0, dvy: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  355: { name: "catching3c",
    pic: 50, state: 9, wait: 1, next: 356, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 90,
    cpoint: {
      kind: 1, x: 300, y: -30, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  356: { name: "catching3c",
    pic: 50, state: 9, wait: 3, next: 357, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: -30, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 300, y: 33, action: 140, dvx: 0, dvy: 0, dvz: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  357: { name: "catching3c",
    pic: 50, state: 9, wait: 25, next: 358, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: -30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  358: { name: "catching3c",
    pic: 51, state: 9, wait: 0, next: 359, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1945",
    cpoint: {
      kind: 1, x: 300, y: -30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  359: { name: "catching3c",
    pic: 51, state: 9, wait: 10, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 300, y: -30, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 300, y: 35, action: 146, dvx: 0, dvy: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  360: { name: "catching3a",
    pic: 50, state: 9, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 90,
    cpoint: {
      kind: 1, x: 100, y: -30, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  361: { name: "catching3a",
    pic: 50, state: 9, wait: 3, next: 362, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -30, vaction: 132, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 100, y: 33, action: 140, dvx: 0, dvy: 0, dvz: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  362: { name: "catching3a",
    pic: 50, state: 9, wait: 25, next: 363, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 40, y: 70, action: 0, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  363: { name: "catching3a",
    pic: 51, state: 9, wait: 0, next: 364, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1945",
    cpoint: {
      kind: 1, x: 100, y: -30, vaction: 130, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  364: { name: "catching3a",
    pic: 51, state: 9, wait: 10, next: 249, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: -30, vaction: 180, throwvx: 3, throwvy: -5, throwvz: 0, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 100, y: 35, action: 146, dvx: 0, dvy: 0, oid: 226, facing: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
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
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 51, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1969",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  400: { name: "defend",
    pic: 60, state: 7, wait: 7, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 70, action: 80, dvx: 0, dvy: 0, oid: 410, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  }
  }
});