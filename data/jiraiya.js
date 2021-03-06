define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/jiraiya.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/jiraiya_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-147)": "sprite/jiraiya_3.png", w: 190, h: 265, row: 4, col: 2
      },
      {
        "file(148-180)": "sprite/jiraiya_4.png", w: 250, h: 220, row: 3, col: 1
      }
    ],
    name: "Jiraiya",
    head: "sprite/jiraiya_f.png",
    small: "sprite/jiraiya_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 18,
    running_speedz: 3.3,
    heavy_walking_speed: 5,
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 44, y: 52, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 42, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 44, y: 52, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 43, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 50, y: 43, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 41, y: 46, weaponact: 24, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 43, y: 46, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_ja: 270, hit_Da: 250, hit_Uj: 365, hit_Ua: 275, hit_Fa: 320, hit_Dj: 335,
    wpoint: {
      kind: 1, x: 49, y: 45, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 38, y: 45, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 38, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 38, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 70, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 71, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 72, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 73, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 70, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "tree_jump",
    pic: 74, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 75, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 75, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 59, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  21: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 22, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  22: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 23, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  23: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 24, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  24: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 26, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 59, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 27, y: 17, w: 31, h: 63
    },
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  26: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 27, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  27: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 28, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  28: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 29, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  29: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 31, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 109, state: 15, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  31: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 32, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  32: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 33, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  33: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 36, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  35: { name: "run_weapon_atck",
    pic: 59, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  36: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 37, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  37: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 38, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  38: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 39, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  39: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 41, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 109, state: 15, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  41: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 42, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  42: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 43, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  43: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 44, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  44: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 48, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  45: { name: "light_weapon_thw",
    pic: 59, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  46: { name: "light_weapon_thw",
    pic: 68, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
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
    pic: 69, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  48: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 49, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  49: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 55, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  50: { name: "heavy_weapon_thw",
    pic: 35, state: 15, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 38, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 60, dvy: -5, dvz: 2
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
    pic: 109, state: 15, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 109, state: 15, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 106, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  55: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 56, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  56: { name: "ultimate_rasengan",
    pic: 81, state: 15, wait: 0, next: 57, dvx: -5, dvy: -100, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 150, y: 10, action: 190, dvx: 0, dvy: 0, oid: 446, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  57: { name: "ultimate_rasengan",
    pic: 81, state: 15, wait: 0, next: 58, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  58: { name: "ultimate_rasengan",
    pic: 67, state: 15, wait: 0, next: 58, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1323",
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 30, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 0, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15
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
  64: { name: "punch",
    pic: 14, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 14, state: 3, wait: 0, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1322",
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    },
    bdy: {
      kind: 0, x: 27, y: 17, w: 31, h: 63
    }
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 0, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: {
      kind: 0, x: 28, y: 17, w: 29, h: 63
    }, x: 21, y: 80000, w: 43, h: 62
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 0, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 30, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 15
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
    pic: 17, state: 3, wait: 0, next: 69, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  69: { name: "punch",
    pic: 27, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 45, y: 37, w: 32, h: 11
      }
    ]
  },
  70: { name: "super_punch",
    pic: 28, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 29, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 35, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1325",
    itr: {
      kind: 0, x: 50, y: 34, w: 40, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40
    },
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
    pic: 36, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 37, state: 3, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 38, state: 3, wait: 2, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 54, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 107, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  81: { name: "jump_attack",
    pic: 108, state: 3, wait: 1, next: 82, dvx: 0, dvy: -1, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 109, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  83: { name: "jump_attack",
    pic: 110, state: 3, wait: 1, next: 999, dvx: 0, dvy: -1, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 28, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  86: { name: "run_attack",
    pic: 36, state: 3, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  87: { name: "run_attack",
    pic: 37, state: 3, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  88: { name: "run_attack",
    pic: 38, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 103, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1317",
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
    pic: 104, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
      }
    ]
  },
  92: { name: "dash_attack",
    pic: 105, state: 15, wait: 1, next: 93, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 30, y: 38, w: 63, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70
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
    pic: 106, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
      }
    ]
  },
  94: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 376, dvx: 550, dvy: 550, centerx: 35, centery: 205, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
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
    pic: 48, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
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
    pic: 48, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 48, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 15, state: 9, wait: 0, next: 122, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 16, state: 9, wait: 0, next: 123, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 57, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "catching",
    pic: 58, state: 9, wait: 0, next: 125, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  125: { name: "catching",
    pic: 57, state: 9, wait: 0, next: 126, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  126: { name: "catching",
    pic: 58, state: 9, wait: 0, next: 127, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  127: { name: "catching",
    pic: 57, state: 9, wait: 0, next: 128, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  128: { name: "catching",
    pic: 58, state: 9, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
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
  145: { name: "ultimate_rasengan",
    pic: 91, state: 15, wait: 1, next: 146, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  146: { name: "ultimate_rasengan",
    pic: 128, state: 15, wait: 1, next: 147, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/052",
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
  147: { name: "ultimate_rasengan",
    pic: 129, state: 15, wait: 1, next: 148, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  148: { name: "ultimate_rasengan",
    pic: 130, state: 15, wait: 0, next: 440, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  152: { name: "ultimate_rasengan",
    pic: 86, state: 15, wait: 0, next: 153, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0, mp: 400,
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
  153: { name: "ultimate_rasengan",
    pic: 87, state: 15, wait: 1, next: 154, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0, mp: 400,
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
  154: { name: "ultimate_rasengan",
    pic: 88, state: 15, wait: 1, next: 155, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0, mp: 400,
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
  155: { name: "ultimate_rasengan",
    pic: 89, state: 15, wait: 5, next: 368, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0, mp: 400,
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
  160: { name: "charge",
    pic: 100, state: 3, wait: 2, next: 271, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 211, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
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
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1318",
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
    pic: 19, state: 18, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 10, vrest: 10, bdefend: 16, injury: 30, effect: 20
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 68, y: 38, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 18, y: 29, w: 48, h: 17
      }
    ]
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 36, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 64, y: 38, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 55, y: 8, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 55, y: 8, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 31, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
    sound: "1/1335",
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
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
    sound: "1/1336",
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 305, hit_j: 355,
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
    pic: 57, state: 9, wait: 0, next: 233, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 38, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  233: { name: "throw_lying_man",
    pic: 58, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 80, y: 38, vaction: 181, throwvx: 100, throwvz: 3, throwinjury: 10
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
    pic: 57, state: 9, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  235: { name: "rasengan",
    pic: 54, state: 3, wait: 3, next: 236, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 185,
    sound: "1/1330",
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
  236: { name: "rasengan",
    pic: 50, state: 3, wait: 0, next: 237, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078",
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
  237: { name: "rasengan",
    pic: 51, state: 3, wait: 1, next: 238, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  238: { name: "rasengan",
    pic: 52, state: 3, wait: 1, next: 239, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  239: { name: "rasengan",
    pic: 53, state: 3, wait: 1, next: 240, dvx: 0, dvy: 0, centerx: 53, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  240: { name: "rasengan run",
    pic: 55, state: 3, wait: 1, next: 241, dvx: 40, dvy: 0, dvz: 6, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
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
  241: { name: "rasengan run",
    pic: 56, state: 3, wait: 1, next: 242, dvx: 40, dvy: 0, dvz: 6, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
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
  242: { name: "rasengan run",
    pic: 55, state: 3, wait: 1, next: 243, dvx: 40, dvy: 0, dvz: 6, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
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
  243: { name: "rasengan run",
    pic: 56, state: 3, wait: 1, next: 244, dvx: 40, dvy: 0, dvz: 6, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
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
  244: { name: "rasengan run",
    pic: 55, state: 3, wait: 1, next: 999, dvx: -1, dvy: 0, dvz: 6, centerx: 46, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
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
  245: { name: "catching",
    pic: 57, state: 9, wait: 0, next: 246, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 309, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  246: { name: "catching",
    pic: 58, state: 9, wait: 0, next: 232, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 309, hit_d: 0, hit_j: 0,
    sound: "1/1328",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 16, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  247: { name: "rasengan finish",
    pic: 117, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 100, dvy: -15, fall: 100, arest: 15, bdefend: 100, injury: 15
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  250: { name: "katon",
    pic: 41, state: 3, wait: 0, next: 251, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 80,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  251: { name: "katon",
    pic: 42, state: 3, wait: 0, next: 252, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  252: { name: "katon",
    pic: 43, state: 3, wait: 0, next: 253, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  253: { name: "katon",
    pic: 42, state: 3, wait: 0, next: 254, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  254: { name: "katon",
    pic: 43, state: 3, wait: 0, next: 255, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  255: { name: "katon",
    pic: 42, state: 3, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  256: { name: "katon",
    pic: 43, state: 3, wait: 0, next: 257, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  257: { name: "katon",
    pic: 44, state: 3, wait: 0, next: 258, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  258: { name: "katon",
    pic: 44, state: 3, wait: 0, next: 259, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  259: { name: "katon",
    pic: 45, state: 3, wait: 0, next: 260, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 410, hit_d: 0, hit_j: 0,
    sound: "1/1327",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  260: { name: "katon",
    pic: 46, state: 3, wait: 2, next: 261, dvx: 0, dvy: 0, centerx: 24, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  261: { name: "katon",
    pic: 47, state: 3, wait: 2, next: 262, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    opoint: {
      kind: 1, x: 130, y: 163, action: 35, dvx: 0, dvy: 0, oid: 408, facing: 20
    },
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  262: { name: "katon",
    pic: 46, state: 3, wait: 3, next: 263, dvx: 0, dvy: 0, centerx: 24, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  263: { name: "katon",
    pic: 47, state: 3, wait: 3, next: 264, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  264: { name: "katon",
    pic: 46, state: 3, wait: 3, next: 265, dvx: 0, dvy: 0, centerx: 24, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  265: { name: "katon",
    pic: 47, state: 3, wait: 3, next: 266, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  266: { name: "katon",
    pic: 46, state: 3, wait: 3, next: 267, dvx: 0, dvy: 0, centerx: 24, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  267: { name: "katon",
    pic: 47, state: 3, wait: 3, next: 268, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  268: { name: "katon",
    pic: 46, state: 3, wait: 3, next: 269, dvx: 0, dvy: 0, centerx: 24, centery: 79, hit_a: 410, hit_d: 215, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  269: { name: "katon",
    pic: 47, state: 3, wait: 3, next: 260, dvx: 0, dvy: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 215, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  270: { name: "charge",
    pic: 100, state: 3, wait: 0, next: 160, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 101, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 2, x: 42, y: 51, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
    },
    wpoint: {
      kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  272: { name: "charge",
    pic: 102, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    opoint: {
      kind: 1, x: 45, y: 45, action: 4, dvx: 0, dvy: 0, oid: 203
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
    pic: 102, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
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
    pic: 100, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  275: { name: "frog",
    pic: 23, state: 15, wait: 0, next: 276, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 155,
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
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  276: { name: "frog",
    pic: 24, state: 15, wait: 0, next: 277, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  277: { name: "frog",
    pic: 25, state: 15, wait: 0, next: 278, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  278: { name: "frog",
    pic: 23, state: 15, wait: 0, next: 279, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  279: { name: "frog",
    pic: 24, state: 15, wait: 0, next: 280, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  280: { name: "frog",
    pic: 25, state: 15, wait: 0, next: 281, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  281: { name: "frog",
    pic: 23, state: 15, wait: 0, next: 282, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  282: { name: "frog",
    pic: 24, state: 15, wait: 0, next: 283, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  283: { name: "frog",
    pic: 25, state: 15, wait: 0, next: 284, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  284: { name: "frog",
    pic: 26, state: 15, wait: 0, next: 295, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  285: { name: "gamabunta",
    pic: 100, state: 15, wait: 1, next: 450, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/jirayia1",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: -9999, y: -9782457512, w: 99999999, h: 100
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  286: { name: "gamabunta",
    pic: 114, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 375, dvx: 0, dvy: 0, oid: 223, facing: 0
    }
  },
  287: { name: "gamabunta",
    pic: 114, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 400, dvx: 0, dvy: 0, oid: 30, facing: 0
    }
  },
  295: { name: "frog_fire",
    pic: 49, state: 15, wait: 0, next: 296, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  296: { name: "frog_fire",
    pic: 111, state: 15, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  297: { name: "frog_fire",
    pic: 112, state: 15, wait: 0, next: 298, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  298: { name: "frog_fire",
    pic: 113, state: 15, wait: 0, next: 299, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  299: { name: "frog_fire",
    pic: 114, state: 15, wait: 0, next: 300, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  300: { name: "frog_fire",
    pic: 114, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 79, action: 39, dvx: 0, dvy: 0, oid: 215, facing: 0
    }
  },
  305: { name: "replacement",
    pic: 30, state: 14, wait: 0, next: 306, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  306: { name: "replacement",
    pic: 30, state: 15, wait: 2, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 41, y: 70, action: 150, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  307: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 308, dvx: 30, dvy: -4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  308: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  309: { name: "double_rasengan",
    pic: 115, state: 9, wait: 0, next: 317, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 185,
    sound: "1/1317",
    cpoint: {
      kind: 1, x: 84, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  310: { name: "double_rasengan",
    pic: 116, state: 9, wait: 0, next: 311, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  311: { name: "double_rasengan",
    pic: 117, state: 9, wait: 0, next: 312, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  312: { name: "double_rasengan",
    pic: 116, state: 9, wait: 0, next: 313, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  313: { name: "double_rasengan",
    pic: 117, state: 9, wait: 0, next: 314, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  314: { name: "double_rasengan",
    pic: 116, state: 9, wait: 0, next: 315, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  315: { name: "double_rasengan",
    pic: 117, state: 9, wait: 0, next: 316, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  316: { name: "double_rasengan",
    pic: 116, state: 9, wait: 0, next: 247, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 80, y: 38, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  317: { name: "double_rasengan",
    pic: 115, state: 9, wait: 9, next: 318, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 84, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 62, action: 70, dvx: 0, dvy: 0, oid: 216, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  318: { name: "double_rasengan",
    pic: 118, state: 9, wait: 2, next: 310, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 84, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  320: { name: "hair_needles",
    pic: 23, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 95,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  321: { name: "hair_needles",
    pic: 24, state: 15, wait: 1, next: 322, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  322: { name: "hair_needles",
    pic: 25, state: 15, wait: 1, next: 323, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  323: { name: "hair_needles",
    pic: 60, state: 15, wait: 1, next: 324, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  324: { name: "hair_needles",
    pic: 61, state: 15, wait: 1, next: 325, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  325: { name: "hair_needles",
    pic: 119, state: 15, wait: 1, next: 326, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 45, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  326: { name: "hair_needles",
    pic: 120, state: 15, wait: 0, next: 327, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 46, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  327: { name: "hair_needles",
    pic: 121, state: 15, wait: 0, next: 328, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 35, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  328: { name: "hair_needles",
    pic: 120, state: 15, wait: 0, next: 329, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 35, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  329: { name: "hair_needles",
    pic: 121, state: 15, wait: 0, next: 330, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 50, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  330: { name: "hair_needles",
    pic: 120, state: 15, wait: 1, next: 331, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    },
    opoint: {
      kind: 1, x: 50, y: 35, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    }
  },
  331: { name: "hair_needles",
    pic: 121, state: 15, wait: 0, next: 332, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 46, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  332: { name: "hair_needle",
    pic: 120, state: 15, wait: 0, next: 333, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 35, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 28, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  333: { name: "hair_needles",
    pic: 121, state: 15, wait: 0, next: 334, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 35, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  334: { name: "hair_needles",
    pic: 120, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -3,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 50, action: 80, dvx: 0, dvy: 0, oid: 440, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  335: { name: "swamp",
    pic: 23, state: 15, wait: 0, next: 336, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 230,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  336: { name: "swamp",
    pic: 24, state: 15, wait: 0, next: 337, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  337: { name: "swamp",
    pic: 25, state: 15, wait: 0, next: 344, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  338: { name: "swamp",
    pic: 23, state: 15, wait: 0, next: 339, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  339: { name: "swamp",
    pic: 24, state: 15, wait: 0, next: 340, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  340: { name: "swamp",
    pic: 25, state: 15, wait: 0, next: 341, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  341: { name: "swamp",
    pic: 23, state: 15, wait: 0, next: 342, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  342: { name: "swamp",
    pic: 24, state: 15, wait: 0, next: 343, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  343: { name: "swamp",
    pic: 25, state: 15, wait: 0, next: 344, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  344: { name: "swamp",
    pic: 26, state: 15, wait: 0, next: 345, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  345: { name: "swamp",
    pic: 49, state: 15, wait: 0, next: 346, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  346: { name: "swamp",
    pic: 111, state: 15, wait: 0, next: 347, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  347: { name: "swamp",
    pic: 112, state: 15, wait: 0, next: 348, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1325",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  348: { name: "swamp",
    pic: 113, state: 15, wait: 0, next: 349, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: -70, y: 79, action: 70, dvx: 0, dvy: 0, oid: 215, facing: 30
    }
  },
  349: { name: "swamp",
    pic: 113, state: 15, wait: 0, next: 350, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 110, y: 79, action: 70, dvx: 0, dvy: 0, oid: 215, facing: 0
    }
  },
  350: { name: "swamp",
    pic: 113, state: 15, wait: 0, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 200, y: 79, action: 70, dvx: 0, dvy: 0, oid: 215, facing: 30
    }
  },
  351: { name: "swamp",
    pic: 113, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 15, y: 79, action: 70, dvx: 0, dvy: 0, oid: 215, facing: 0
    }
  },
  355: { name: "hair_defend",
    pic: 100, state: 15, wait: 1, next: 356, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  356: { name: "hair_defend",
    pic: 101, state: 15, wait: 0, next: 357, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  357: { name: "hair_defend",
    pic: 102, state: 15, wait: 0, next: 358, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "hair_defend",
    pic: 122, state: 15, wait: 1, next: 359, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 17, y: 5, w: 50, h: 50, dvx: 0, dvy: -10, fall: 100, vrest: 17, bdefend: 70, injury: 20, effect: 1
    }
  },
  359: { name: "hair_defend",
    pic: 123, state: 15, wait: 6, next: 360, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 5, w: 50, h: 50, dvx: 0, dvy: -10, fall: 100, vrest: 17, bdefend: 70, injury: 20, effect: 1
    }
  },
  360: { name: "hair_defend",
    pic: 124, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  361: { name: "hair_defend",
    pic: 102, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  365: { name: "ultimate_rasengan",
    pic: 90, state: 15, wait: 0, next: 145, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 380,
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
  368: { name: "ultimate_rasengan",
    pic: 144, state: 15, wait: 2, next: 373, dvx: 13, dvy: -8, dvz: 5, centerx: 95, centery: 260, hit_a: 0, hit_d: 0, hit_j: 0,
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
  369: { name: "ultimate_rasengan",
    pic: 140, state: 100, wait: 0, next: 370, dvx: 0, dvy: 0, dvz: 5, centerx: 95, centery: 260, hit_a: 374, hit_d: 0, hit_j: 0,
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
  370: { name: "ultimate_rasengan",
    pic: 141, state: 100, wait: 0, next: 371, dvx: 0, dvy: 0, dvz: 5, centerx: 95, centery: 260, hit_a: 374, hit_d: 0, hit_j: 0,
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
  371: { name: "ultimate_rasengan",
    pic: 142, state: 100, wait: 0, next: 372, dvx: 0, dvy: 0, dvz: 5, centerx: 95, centery: 260, hit_a: 374, hit_d: 0, hit_j: 0,
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
  372: { name: "ultimate_rasengan",
    pic: 143, state: 100, wait: 0, next: 369, dvx: 0, dvy: 0, dvz: 5, centerx: 95, centery: 260, hit_a: 374, hit_d: 0, hit_j: 0,
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
  373: { name: "ultimate_rasengan",
    pic: 144, state: 100, wait: 1, next: 369, dvx: 0, dvy: 0, centerx: 95, centery: 260, hit_a: 0, hit_d: 0, hit_j: 0,
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
  374: { name: "ultimate_rasengan",
    pic: 148, state: 100, wait: 1, next: 374, dvx: 10, dvy: 50, centerx: 32, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  375: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 376, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  376: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 377, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  377: { name: "ultimate_rasengan",
    pic: 150, state: 15, wait: 0, next: 378, dvx: 550, dvy: 550, centerx: 39, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  378: { name: "ultimate_rasengan",
    pic: 148, state: 15, wait: 0, next: 379, dvx: 550, dvy: 550, centerx: 44, centery: 206, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  379: { name: "ultimate_rasengan",
    pic: 149, state: 15, wait: 0, next: 21, dvx: 550, dvy: 550, centerx: 36, centery: 204, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    bdy: {
      kind: 0, x: 10, y: 38, w: 54, h: 21
    },
    opoint: {
      kind: 1, x: 39, y: 105, action: 170, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  380: { name: "sage_hair",
    pic: 77, state: 15, wait: 0, next: 381, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    sound: "1/052",
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  381: { name: "sage_hair",
    pic: 87, state: 15, wait: 1, next: 382, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  382: { name: "sage_hair",
    pic: 78, state: 15, wait: 2, next: 383, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  383: { name: "sage_hair",
    pic: 79, state: 15, wait: 0, next: 384, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 45, action: 84, dvx: 0, dvy: 0, oid: 440, facing: 50
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  384: { name: "sage_hair",
    pic: 80, state: 15, wait: 0, next: 385, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 45, action: 84, dvx: 0, dvy: 0, oid: 440, facing: 50
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  385: { name: "sage_hair",
    pic: 79, state: 15, wait: 0, next: 386, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 45, action: 84, dvx: 0, dvy: 0, oid: 440, facing: 50
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  386: { name: "sage_hair",
    pic: 80, state: 15, wait: 0, next: 387, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 45, action: 84, dvx: 0, dvy: 0, oid: 440, facing: 50
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  387: { name: "sage_hair",
    pic: 79, state: 15, wait: 0, next: 388, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 45, action: 84, dvx: 0, dvy: 0, oid: 440, facing: 50
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  388: { name: "sage_hair",
    pic: 80, state: 15, wait: 5, next: 389, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 385, hit_j: 0,
    sound: "1/015",
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 45, action: 84, dvx: 0, dvy: 0, oid: 440, facing: 50
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  389: { name: "sage_hair",
    pic: 77, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053",
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
      kind: 1, x: 43, y: 81, action: 80, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/1332",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  400: { name: "chidoriclash",
    pic: 999, state: 15, wait: 0, next: 401, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  401: { name: "chidoriclash",
    pic: 27, state: 15, wait: 0, next: 402, dvx: -55, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  402: { name: "chidoriclash",
    pic: 27, state: 15, wait: 40, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: -999, weaponact: 999, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  403: { name: "katon",
    pic: 99, state: 3, wait: 3, next: 404, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  404: { name: "katon",
    pic: 99, state: 3, wait: 3, next: 405, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 0, y: 0, action: 400, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  405: { name: "katon",
    pic: 99, state: 3, wait: 3, next: 405, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 31, y: 2, w: 27, h: 78
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  410: { name: "katon_sage",
    pic: 82, state: 3, wait: 0, next: 411, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  411: { name: "katon_sage",
    pic: 83, state: 3, wait: 0, next: 412, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  412: { name: "katon_sage",
    pic: 84, state: 3, wait: 0, next: 413, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  413: { name: "katon_sage",
    pic: 85, state: 3, wait: 0, next: 414, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/052",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  414: { name: "katon_sage",
    pic: 94, state: 3, wait: 0, next: 415, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  415: { name: "katon_sage",
    pic: 95, state: 3, wait: 0, next: 416, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  416: { name: "katon_sage",
    pic: 96, state: 3, wait: 5, next: 417, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  417: { name: "katon_sage",
    pic: 97, state: 3, wait: 1, next: 418, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  418: { name: "katon_sage",
    pic: 98, state: 3, wait: 2, next: 419, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  419: { name: "katon_sage",
    pic: 125, state: 3, wait: 1, next: 420, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  420: { name: "katon_sage",
    pic: 126, state: 3, wait: 2, next: 421, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 130, y: 163, action: 35, dvx: 0, dvy: 0, oid: 408, facing: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  421: { name: "katon_sage",
    pic: 127, state: 3, wait: 2, next: 422, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    sound: "1/071",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 67, y: 55, action: 0, dvx: 2, dvy: 0, oid: 211, facing: 20
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  422: { name: "katon_sage",
    pic: 126, state: 3, wait: 2, next: 423, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  423: { name: "katon_sage",
    pic: 127, state: 3, wait: 2, next: 424, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    sound: "1/071",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 67, y: 55, action: 0, dvx: 5, dvy: 0, oid: 211, facing: 20
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  424: { name: "katon_sage",
    pic: 126, state: 3, wait: 2, next: 425, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  425: { name: "katon_sage",
    pic: 127, state: 3, wait: 2, next: 430, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    sound: "1/071",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 67, y: 55, action: 0, dvx: 4, dvy: 0, oid: 211, facing: 20
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  426: { name: "katon_sage_end",
    pic: 98, state: 3, wait: 1, next: 427, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  427: { name: "katon_sage",
    pic: 96, state: 3, wait: 1, next: 428, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  428: { name: "katon_sage",
    pic: 82, state: 3, wait: 1, next: 429, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  429: { name: "katon_sage",
    pic: 60, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  430: { name: "katon_sage",
    pic: 126, state: 3, wait: 2, next: 431, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  431: { name: "katon_sage",
    pic: 127, state: 3, wait: 2, next: 420, dvx: 0, dvy: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 426, hit_j: 0, mp: -6,
    sound: "1/071",
    wpoint: {
      kind: 1, x: 45, y: 48, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 67, y: 55, action: 0, dvx: 6, dvy: 0, oid: 211, facing: 20
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  440: { name: "ultimate_rasengan",
    pic: 131, state: 15, wait: 1, next: 441, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 43, y: 81, action: 211, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
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
  441: { name: "ultimate_rasengan",
    pic: 132, state: 15, wait: 0, next: 442, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078",
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
  442: { name: "ultimate_rasengan",
    pic: 133, state: 15, wait: 1, next: 443, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  443: { name: "ultimate_rasengan",
    pic: 134, state: 15, wait: 1, next: 444, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  444: { name: "ultimate_rasengan",
    pic: 135, state: 15, wait: 0, next: 445, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  445: { name: "ultimate_rasengan",
    pic: 136, state: 15, wait: 1, next: 446, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  446: { name: "ultimate_rasengan",
    pic: 137, state: 15, wait: 1, next: 447, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  447: { name: "ultimate_rasengan",
    pic: 138, state: 15, wait: 1, next: 368, dvx: 0, dvy: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  450: { name: "gamabunta",
    pic: 101, state: 15, wait: 1, next: 451, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  451: { name: "gamabunta",
    pic: 102, state: 15, wait: 2, next: 452, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  452: { name: "gamabunta",
    pic: 101, state: 15, wait: 1, next: 453, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  453: { name: "gamabunta",
    pic: 102, state: 15, wait: 2, next: 454, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  454: { name: "gamabunta",
    pic: 49, state: 15, wait: 1, next: 455, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  455: { name: "gamabunta",
    pic: 111, state: 15, wait: 1, next: 456, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  456: { name: "gamabunta",
    pic: 112, state: 15, wait: 1, next: 457, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  457: { name: "gamabunta",
    pic: 113, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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