define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/rock_lee.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/rock_lee2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/gaara_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(210-289)": "sprite/rock_lee2.png", w: 79, h: 79, row: 10, col: 8
      },
      {
        "file(290-291)": "sprite/rock_lee3.png", w: 123, h: 79, row: 2, col: 1
      }
    ],
    name: "Rock_Lee",
    head: "sprite/lee_f.png",
    small: "sprite/rock_lee_s.png",
    walking_frame_rate: 3,
    walking_speed: 5,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 22.7,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -18.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -15,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 26
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 26, y: 58, weaponact: 36, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 36, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 26, y: 64, weaponact: 36, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 26, y: 67, weaponact: 36, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 45, y: 57, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 40, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 33, y: 63, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  8: { name: "walking",
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 285, hit_ja: 250, hit_Da: 255, hit_Fa: 295, hit_Ua: 305, hit_Uj: 75, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 24, y: 62, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 30, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 30, y: 52, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 30, y: 50, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 32, y: 33, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 32, y: 33, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 33, y: 32, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 32, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 32, y: 33, weaponact: 10, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 129, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 89, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 89, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 92, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  21: { name: "catching2",
    pic: 17, state: 9, wait: 1, next: 22, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 34, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  22: { name: "catching2",
    pic: 38, state: 9, wait: 3, next: 23, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 70, y: 34, injury: 15, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 70, y: 40, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  23: { name: "catching2",
    pic: 39, state: 9, wait: 4, next: 24, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 70, y: 76, vaction: 180, throwvz: 4, throwvx: 22, throwvy: -7, hurtable: 0, throwinjury: 10, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 75, y: 60, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  24: { name: "catching2",
    pic: 39, state: 15, wait: 7, next: 26, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: -20, y: 16, w: 20, h: 65,
      catchingact: [33, 33], caughtact: [130, 130]
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 92, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  26: { name: "drunken_mod",
    pic: 37, state: 9, wait: 2, next: 27, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "drunken_mod",
    pic: 50, state: 9, wait: 2, next: 28, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 3, x: -20, y: 16, w: 50, h: 65,
        catchingact: [33, 33], caughtact: [130, 130]
      },
      {
        kind: 3, x: 30, y: 16, w: 30, h: 65,
        catchingact: [37, 37], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      },
      {
        kind: 3, x: 60, y: 16, w: 25, h: 65,
        catchingact: [375, 375], caughtact: [130, 130]
      }
    ]
  },
  28: { name: "drunken_mod",
    pic: 70, state: 9, wait: 2, next: 29, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: [
      {
        kind: 3, x: -20, y: 16, w: 50, h: 65,
        catchingact: [33, 33], caughtact: [130, 130]
      },
      {
        kind: 3, x: 30, y: 16, w: 30, h: 65,
        catchingact: [37, 37], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      },
      {
        kind: 3, x: 60, y: 16, w: 25, h: 65,
        catchingact: [375, 375], caughtact: [130, 130]
      }
    ]
  },
  29: { name: "drunken_mod",
    pic: 58, state: 9, wait: 2, next: 31, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: [
      {
        kind: 3, x: -20, y: 16, w: 50, h: 65,
        catchingact: [33, 33], caughtact: [130, 130]
      },
      {
        kind: 3, x: 30, y: 16, w: 30, h: 65,
        catchingact: [37, 37], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      },
      {
        kind: 3, x: 60, y: 16, w: 25, h: 65,
        catchingact: [375, 375], caughtact: [130, 130]
      }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  31: { name: "drunken_mod",
    pic: 48, state: 9, wait: 2, next: 32, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: [
      {
        kind: 3, x: -20, y: 16, w: 50, h: 65,
        catchingact: [33, 33], caughtact: [130, 130]
      },
      {
        kind: 3, x: 30, y: 16, w: 30, h: 65,
        catchingact: [37, 37], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      },
      {
        kind: 3, x: 60, y: 16, w: 25, h: 65,
        catchingact: [375, 375], caughtact: [130, 130]
      }
    ]
  },
  32: { name: "drunken_mod",
    pic: 49, state: 15, wait: 2, next: 363, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    itr: {
      kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
    }
  },
  33: { name: "konoha_sempu",
    pic: 120, state: 9, wait: 1, next: 34, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 30, y: 34, injury: 15, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 25, y: 50, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  34: { name: "konoha_sempu",
    pic: 121, state: 9, wait: 1, next: 36, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 70, y: 34, injury: 15, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    opoint: {
      kind: 1, x: 75, y: 50, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  35: { name: "run_weapon_atck",
    pic: 92, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  36: { name: "konoha_sempu",
    pic: 122, state: 9, wait: 1, next: 43, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 30, y: 76, vaction: 180, throwvz: 4, throwvx: -15, throwvy: -5, hurtable: 0, throwinjury: 10, decrease: 10
    },
    opoint: {
      kind: 1, x: 25, y: 50, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  37: { name: "konoha_kickup",
    pic: 95, state: 9, wait: 1, next: 38, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvx: 15, dvy: -15, fall: 70, vrest: 5, bdefend: 100, injury: 25
    },
    cpoint: {
      kind: 1, x: 50, y: 34, injury: 25, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    }
  },
  38: { name: "konoha_kickup",
    pic: 96, state: 9, wait: 1, next: 44, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 16, y: 27, w: 35, h: 16, dvx: 15, dvy: -25, fall: 70, vrest: 5, bdefend: 100, injury: 25
    },
    cpoint: {
      kind: 1, x: 50, y: 76, vaction: 180, throwvz: 4, throwvx: 15, throwvy: -27, hurtable: 0, throwinjury: 10, decrease: 10
    },
    opoint: {
      kind: 1, x: 45, y: 20, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  39: { name: "konoha_kickup2",
    pic: 58, state: 9, wait: 1, next: 41, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    cpoint: {
      kind: 1, x: 50, y: 34, injury: 25, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  41: { name: "konoha_kickup2",
    pic: 47, state: 9, wait: 1, next: 42, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvy: -35, fall: 70, vrest: 5, bdefend: 100, injury: 25
    },
    cpoint: {
      kind: 1, x: 50, y: 76, vaction: 180, throwvz: 4, throwvx: -5, throwvy: -35, hurtable: 0, throwinjury: 10, decrease: 10
    },
    opoint: {
      kind: 1, x: 39, y: 20, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  42: { name: "konoha_kickup2",
    pic: 57, state: 3, wait: 4, next: 43, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  43: { name: "konoha_kickup2",
    pic: 58, state: 3, wait: 2, next: 26, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  44: { name: "konoha_kickup",
    pic: 96, state: 3, wait: 4, next: 43, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  45: { name: "light_weapon_thw",
    pic: 92, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 54, y: 50, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 93, state: 15, wait: 2, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 54, y: 50, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  48: { name: "light_weapon_thw",
    pic: 49, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 25, y: 42, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  49: { name: "konoha_kickup2",
    pic: 47, state: 3, wait: 5, next: 42, dvx: 0, dvy: 550, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvy: -35, fall: 70, vrest: 5, bdefend: 100, injury: 25
    }
  },
  50: { name: "heavy_weapon_thw",
    pic: 39, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 38, dvy: -6, dvz: 2
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 48, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 98, state: 15, wait: 2, next: 54, dvx: 0, dvy: -2, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 112, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
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
      kind: 0, x: 26, y: 144000, w: 28, h: 500
    }
  },
  56: { name: "jump_attack",
    pic: 85, state: 100, wait: 1, next: 57, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 7, dvy: 15, fall: 100, arest: 15, bdefend: 100, injury: 60
    }
  },
  57: { name: "jump_attack",
    pic: 86, state: 100, wait: 1, next: 58, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 7, dvy: 15, fall: 100, arest: 15, bdefend: 100, injury: 60
    }
  },
  58: { name: "jump_attack",
    pic: 87, state: 100, wait: 1, next: 59, dvx: 0, dvy: -1, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 7, dvy: 15, fall: 100, arest: 15, bdefend: 100, injury: 60
    }
  },
  59: { name: "jump_attack",
    pic: 88, state: 100, wait: 1, next: 56, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 7, dvy: 15, fall: 100, arest: 15, bdefend: 100, injury: 60
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    sound: "1/2123",
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
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
    pic: 11, state: 3, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 0, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    sound: "1/007",
    itr: {
      kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 2, bdefend: 10, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 39, y: 19, w: 21, h: 61
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
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
    pic: 14, state: 3, wait: 0, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    sound: "1/2129",
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
    pic: 15, state: 3, wait: 0, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    bdy: [
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      },
      {
        kind: 0, x: 28, y: 17, w: 29, h: 63
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 0, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    sound: "1/007",
    itr: {
      kind: 0, x: 50, y: 30, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 35
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
    pic: 17, state: 3, wait: 0, next: 69, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
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
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 145, hit_j: 147,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
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
    sound: "1/2127",
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
    pic: 38, state: 3, wait: 0, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 39, state: 3, wait: 0, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 20, dvy: -4, fall: 100, arest: 15, bdefend: 100, injury: 55
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
    pic: 48, state: 3, wait: 3, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 49, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  75: { name: "drinking",
    pic: 9, state: 15, wait: 25, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 400,
    sound: "1/042",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  76: { name: "drinking",
    pic: 8, state: 15, wait: 25, next: 77, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/042",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  77: { name: "drinking",
    pic: 9, state: 15, wait: 25, next: 360, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/042",
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  80: { name: "jump_attack",
    pic: 41, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2144",
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
    pic: 42, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 7, dvy: 15, fall: 100, arest: 15, bdefend: 100, injury: 60
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
    pic: 43, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 7, dvy: 15, fall: 100, arest: 15, bdefend: 100, injury: 60
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
    pic: 44, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 249,
    bdy: [
      {
        kind: 0, x: 22, y: 19, w: 32, h: 60
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  84: { name: "jump",
    pic: 129, state: 4, wait: 1, next: 89, dvx: 550, dvy: 550, dvz: 550, centerx: 9, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 58, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  85: { name: "run_attack",
    pic: 50, state: 3, wait: 0, next: 86, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2135",
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
    pic: 51, state: 3, wait: 0, next: 87, dvx: 6, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 19, y: 47, w: 61, h: 17, dvx: 20, dvy: -10, fall: 40, arest: 15, bdefend: 16, injury: 50
    },
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
    pic: 52, state: 3, wait: 3, next: 88, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 240,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  88: { name: "run_attack",
    pic: 53, state: 3, wait: 2, next: 999, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 240,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  89: { name: "jump",
    pic: 89, state: 4, wait: 1, next: 96, dvx: 550, dvy: 550, centerx: 9, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 27, y: 58, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  90: { name: "dash_attack",
    pic: 64, state: 15, wait: 1, next: 91, dvx: 9, dvy: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2138",
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
    pic: 82, state: 15, wait: 0, next: 92, dvx: 9, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
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
    pic: 83, state: 15, wait: 19, next: 999, dvx: 9, dvy: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, vrest: 30, bdefend: 90, injury: 70
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
  93: { name: "dash",
    pic: 63, state: 7, wait: 3, next: 56, dvx: 20, dvy: -4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2133",
    wpoint: {
      kind: 1, x: 30, y: 41, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 46, y: 18, w: 22, h: 25
    }
  },
  94: { name: "drunken_mod",
    pic: 20, state: 15, wait: 0, next: 360, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  96: { name: "jump",
    pic: 63, state: 4, wait: 1, next: 213, dvx: 15, dvy: -10, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 39, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 35, state: 6, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    sound: "1/2133",
    wpoint: {
      kind: 1, x: 42, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  103: { name: "rowing",
    pic: 999, state: 6, wait: 1, next: 104, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 42, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  104: { name: "rowing",
    pic: 999, state: 6, wait: 2, next: 215, dvx: 25, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  105: { name: "rowing",
    pic: 999, state: 6, wait: 2, next: 106, dvx: 25, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 44, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  106: { name: "rowing",
    pic: 36, state: 6, wait: 2, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 42, y: -999, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  107: { name: "rowing",
    pic: 35, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    wpoint: {
      kind: 1, x: 32, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 66, state: 6, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 40, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 0,
    wpoint: {
      kind: 1, x: 38, y: 44, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  118: { name: "drunken_mod",
    pic: 35, state: 9, wait: 4, next: 364, dvx: 50, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 3, x: -20, y: 16, w: 50, h: 65,
        catchingact: [33, 33], caughtact: [130, 130]
      },
      {
        kind: 3, x: 30, y: 16, w: 30, h: 65,
        catchingact: [37, 37], caughtact: [130, 130]
      }
    ]
  },
  120: { name: "catching",
    pic: 45, state: 9, wait: 1, next: 122, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2148",
    cpoint: {
      kind: 1, x: 39, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 46, state: 9, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 58, state: 9, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "catching",
    pic: 47, state: 9, wait: 1, next: 125, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 39, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  125: { name: "catching",
    pic: 57, state: 9, wait: 1, next: 126, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    opoint: {
      kind: 1, x: 50, y: 40, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    cpoint: {
      kind: 1, x: 39, y: 0, injury: 20, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  126: { name: "catching",
    pic: 48, state: 9, wait: 1, next: 127, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -30, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  127: { name: "catching",
    pic: 67, state: 9, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -50, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  128: { name: "catching",
    pic: 71, state: 9, wait: 1, next: 260, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 39, y: -90, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
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
  145: { name: "fast_attack",
    pic: 36, state: 3, wait: 0, next: 146, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 170,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  146: { name: "fast_attack",
    pic: 288, state: 3, wait: 0, next: 164, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 39, y: 79, action: 81, dvx: 0, dvy: 0, oid: 214, facing: 0
    }
  },
  147: { name: "counter",
    pic: 282, state: 15, wait: 0, next: 148, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 40,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  148: { name: "counter",
    pic: 283, state: 15, wait: 0, next: 149, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  149: { name: "counter",
    pic: 284, state: 3, wait: 2, next: 150, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 162
      },
      {
        kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 162
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 0, dvy: 0, oid: 513, facing: 0
    }
  },
  150: { name: "counter",
    pic: 285, state: 3, wait: 2, next: 151, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 162
      },
      {
        kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 162
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  151: { name: "counter",
    pic: 286, state: 3, wait: 3, next: 152, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 162
      },
      {
        kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 162
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  152: { name: "counter",
    pic: 284, state: 3, wait: 2, next: 153, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 162
      },
      {
        kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 162
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  153: { name: "counter",
    pic: 285, state: 3, wait: 3, next: 154, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 162
      },
      {
        kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 162
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  154: { name: "counter",
    pic: 286, state: 3, wait: 2, next: 155, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 162
      },
      {
        kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 162
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  155: { name: "counter_end",
    pic: 283, state: 15, wait: 3, next: 156, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  156: { name: "counter_end",
    pic: 282, state: 15, wait: 3, next: 157, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  157: { name: "counter_end",
    pic: 281, state: 15, wait: 3, next: 158, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  158: { name: "counter_end",
    pic: 280, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  159: { name: "counter_check",
    pic: 999, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 159, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 50000000, w: 79, h: 79
    }
  },
  160: { name: "counter_attack",
    pic: 287, state: 15, wait: 1, next: 92, dvx: 0, dvy: -6, dvz: 2, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  161: { name: "counter_check2",
    pic: 999, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 60000000, w: 79, h: 79
    }
  },
  162: { name: "counter_dodge",
    pic: 999, state: 15, wait: 1, next: 163, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  163: { name: "counter_dodge",
    pic: 287, state: 400, wait: 1, next: 160, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  164: { name: "fast_attack",
    pic: 290, state: 3, wait: 0, next: 165, dvx: 0, dvy: 0, centerx: 72, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 7, y: 44, action: 20, dvx: -4, dvy: -1, oid: 204, facing: 50
    }
  },
  165: { name: "fast_attack",
    pic: 291, state: 3005, wait: 0, next: 166, dvx: 0, dvy: 0, centerx: 85, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 79, y: 39, action: 78, dvx: 0, dvy: 0, oid: 214, facing: 0
    }
  },
  166: { name: "fast_attack",
    pic: 999, state: 3005, wait: 0, next: -167, dvx: 313, dvy: -14, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  167: { name: "fast_attack",
    pic: 999, state: 3005, wait: 0, next: 168, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  168: { name: "fast_attack",
    pic: 289, state: 3, wait: 0, next: 169, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  169: { name: "fast_attack",
    pic: 289, state: 96192, wait: 0, next: 169, dvx: -10, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  170: { name: "ground_punch",
    pic: 184, state: 3, wait: 1, next: 171, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  171: { name: "ground_punch",
    pic: 185, state: 3, wait: 1, next: 172, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  172: { name: "ground_punch",
    pic: 186, state: 3, wait: 1, next: 173, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  173: { name: "ground_punch",
    pic: 187, state: 3, wait: 0, next: 174, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 85, action: 37, dvx: 0, dvy: 0, oid: 208, facing: 0
    },
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  174: { name: "ground_punch",
    pic: 187, state: 3, wait: 8, next: 175, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 520, facing: 0
    },
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  175: { name: "ground_punch",
    pic: 188, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2172",
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
      }
    ]
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
    sound: "1/2172",
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
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
        kind: 0, x: 25, y: -90000000000000, w: 21, h: 20
      }
    ]
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
  192: { name: "fast_attack",
    pic: 289, state: 3, wait: 0, next: 193, dvx: -12, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  193: { name: "fast_attack",
    pic: 289, state: 3, wait: 0, next: 194, dvx: -10, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 79, action: 93, dvx: 0, dvy: 0, oid: 214, facing: 1
    },
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  194: { name: "fast_attack",
    pic: 60, state: 3, wait: 5, next: 999, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 49, y: 79, action: 93, dvx: 0, dvy: 0, oid: 214, facing: 1
    },
    wpoint: {
      kind: 1, x: 26, y: 61, weaponact: 99, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    sound: "1/2132",
    wpoint: {
      kind: 1, x: 30, y: 58, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 61, state: 4, wait: 2, next: 212, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 27, y: 58, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 84,
    wpoint: {
      kind: 1, x: 25, y: 39, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    sound: "1/2133",
    wpoint: {
      kind: 1, x: 30, y: 41, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 38, y: 21, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 30, y: 58, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 40, w: 29, h: 38
    }
  },
  216: { name: "dash",
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 35, weaponact: 27, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 20, y: 35, weaponact: 27, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 17, y: 56, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 0, hit_Dj: 170,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 27, y: 58, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
    sound: "1/2162",
    wpoint: {
      kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 46, y: 23, w: 21, h: 56
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
    wpoint: {
      kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 27, y: 56, w: 36, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
    sound: "1/2161",
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
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 60, hit_d: 235, hit_j: 295,
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
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
    pic: 999, state: 9, wait: 0, next: 233, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 39, y: 39, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    itr: {
      kind: 0, x: -4, y: 11, w: 82, h: 73, dvx: 1, dvy: -10, fall: 100, vrest: 7, bdefend: 100, injury: 55
    }
  },
  233: { name: "throw_lying_man",
    pic: 999, state: 9, wait: 0, next: 234, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -4, y: 11, w: 82, h: 73, dvx: 1, dvy: -10, fall: 100, vrest: 7, bdefend: 100, injury: 55
    },
    cpoint: {
      kind: 1, x: 39, y: 39, vaction: 181, throwvx: 5, throwvy: -10, throwvz: 3, throwinjury: 0
    }
  },
  234: { name: "throw_lying_man",
    pic: 84, state: 9, wait: 5, next: 215, dvx: -5, dvy: -3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  235: { name: "replacement",
    pic: 30, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    sound: "1/2143",
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
    sound: "1/061",
    wpoint: {
      kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 35, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  240: { name: "move combo 1",
    pic: 35, state: 3, wait: 0, next: 80, dvx: 35, dvy: -10, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  241: { name: "teleport",
    pic: 35, state: 15, wait: 0, next: 242, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 190,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 19, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 26, y: 36, w: 29, h: 44
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  242: { name: "teleport",
    pic: 999, state: 400, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 57, y: 57, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  243: { name: "fly_crash",
    pic: 35, state: 3, wait: 0, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 38, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 29, w: 48, h: 50
    }
  },
  244: { name: "fly_crash",
    pic: 54, state: 3, wait: 0, next: 245, dvx: 35, dvy: -7, dvz: 4, centerx: 32, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 12, y: 34, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    },
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  245: { name: "fly_crash",
    pic: 999, state: 3, wait: 0, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 19, y: 6, w: 44, h: 61, dvx: 45, dvy: -7, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 20, y: 6, w: 42, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  246: { name: "fly_crash",
    pic: 55, state: 3, wait: 0, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 66, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 20, y: 5, w: 46, h: 60, dvx: 39, dvy: -7, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    bdy: {
      kind: 0, x: 23, y: 6, w: 38, h: 57
    }
  },
  247: { name: "fly_crash",
    pic: 999, state: 3, wait: 0, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 6, w: 48, h: 63, dvx: 33, dvy: -7, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 23, y: 5, w: 36, h: 55
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  248: { name: "fly_crash",
    pic: 56, state: 3, wait: 0, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 66, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 8, w: 48, h: 60, dvx: 27, dvy: -7, fall: 70, vrest: 10, bdefend: 100, injury: 35
    },
    bdy: {
      kind: 0, x: 22, y: 7, w: 38, h: 52
    }
  },
  249: { name: "move combo 2",
    pic: 35, state: 3, wait: 0, next: 90, dvx: 35, dvy: -7, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  250: { name: "charge",
    pic: 29, state: 3, wait: 1, next: 251, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2150",
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
    pic: 29, state: 17, wait: 2, next: 252, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 59, state: 17, wait: 3, next: 253, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 254, hit_d: 254, hit_j: 254,
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
  253: { name: "charge",
    pic: 59, state: 17, wait: 3, next: 252, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 254, hit_d: 254, hit_j: 254,
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
    pic: 49, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 1000, attacking: 0, dvx: 100, dvy: -1, cover: 1
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
  255: { name: "leaf_shadow",
    pic: 50, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 140,
    sound: "1/2178",
    wpoint: {
      kind: 3, x: 39, y: 30, weaponact: 40, attacking: 0, dvx: 100, dvy: -1, cover: 1
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
  256: { name: "leaf_shadow",
    pic: 50, state: 15, wait: 0, next: 257, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  257: { name: "leaf_shadow",
    pic: 20, state: 15, wait: 2, next: 258, dvx: 50, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 15, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
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
      kind: 1, x: 12, y: 34, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  258: { name: "leaf_shadow",
    pic: 21, state: 15, wait: 2, next: 259, dvx: 50, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 15, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  259: { name: "leaf_shadow",
    pic: 49, state: 15, wait: 2, next: 999, dvx: -1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 15, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
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
  260: { name: "catching",
    pic: 999, state: 9, wait: 1, next: 261, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -110, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  261: { name: "catching",
    pic: 68, state: 9, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 39, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 40, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  262: { name: "catching",
    pic: 69, state: 9, wait: 1, next: 263, dvx: 0, dvy: 0, centerx: 39, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 40, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  263: { name: "catching",
    pic: 68, state: 9, wait: 1, next: 264, dvx: 0, dvy: 0, centerx: 39, centery: 340, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 40, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7
    }
  },
  264: { name: "catching",
    pic: 72, state: 9, wait: 2, next: 265, dvx: 0, dvy: 0, centerx: 39, centery: 360, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  265: { name: "catching",
    pic: 73, state: 9, wait: 1, next: 266, dvx: 0, dvy: 0, centerx: 39, centery: 355, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  266: { name: "catching",
    pic: 74, state: 9, wait: 2, next: 267, dvx: 0, dvy: 0, centerx: 39, centery: 350, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  267: { name: "catching",
    pic: 75, state: 9, wait: 2, next: 268, dvx: 0, dvy: 0, centerx: 39, centery: 345, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  268: { name: "catching",
    pic: 76, state: 9, wait: 2, next: 269, dvx: 0, dvy: 0, centerx: 39, centery: 340, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  269: { name: "catching",
    pic: 77, state: 9, wait: 0, next: 270, dvx: 0, dvy: 0, centerx: 39, centery: 320, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  270: { name: "catching",
    pic: 78, state: 9, wait: 0, next: 271, dvx: 0, dvy: 0, centerx: 39, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  271: { name: "catching",
    pic: 79, state: 9, wait: 0, next: 272, dvx: 0, dvy: 0, centerx: 39, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  272: { name: "catching",
    pic: 80, state: 9, wait: 0, next: 273, dvx: 0, dvy: 0, centerx: 39, centery: 260, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  273: { name: "catching",
    pic: 81, state: 9, wait: 0, next: 274, dvx: 0, dvy: 0, centerx: 39, centery: 240, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  274: { name: "catching",
    pic: 77, state: 9, wait: 0, next: 275, dvx: 0, dvy: 0, centerx: 39, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  275: { name: "catching",
    pic: 79, state: 9, wait: 0, next: 276, dvx: 0, dvy: 0, centerx: 39, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  276: { name: "catching",
    pic: 81, state: 9, wait: 0, next: 277, dvx: 0, dvy: 0, centerx: 39, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  277: { name: "catching",
    pic: 77, state: 9, wait: 0, next: 278, dvx: 0, dvy: 0, centerx: 39, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  278: { name: "catching",
    pic: 79, state: 9, wait: 0, next: 279, dvx: 0, dvy: 0, centerx: 39, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  279: { name: "catching",
    pic: 81, state: 9, wait: 0, next: 280, dvx: 0, dvy: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  280: { name: "catching",
    pic: 77, state: 9, wait: 0, next: 281, dvx: 0, dvy: 0, centerx: 39, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  281: { name: "catching",
    pic: 79, state: 9, wait: 0, next: 282, dvx: 0, dvy: 0, centerx: 39, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    cpoint: {
      kind: 1, x: 39, y: -999, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    }
  },
  282: { name: "catching",
    pic: 81, state: 9, wait: 0, next: 232, dvx: 0, dvy: 0, centerx: 39, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2138",
    opoint: {
      kind: 1, x: 39, y: 80, action: 35, dvx: 0, dvy: 0, oid: 208, facing: 0
    },
    cpoint: {
      kind: 1, x: 39, y: -999, injury: 100, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    }
  },
  285: { name: "gate1",
    pic: 29, state: 3, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 235,
    sound: "1/2150",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  286: { name: "gate1",
    pic: 59, state: 3, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  287: { name: "gate1",
    pic: 110, state: 3, wait: 0, next: 288, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  288: { name: "gate1",
    pic: 111, state: 3, wait: 0, next: 289, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  289: { name: "gate1",
    pic: 114, state: 3, wait: 1, next: 290, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  290: { name: "gate1",
    pic: 115, state: 3, wait: 1, next: 291, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  291: { name: "gate1",
    pic: 116, state: 3, wait: 1, next: 292, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  292: { name: "gate1",
    pic: 117, state: 3, wait: 1, next: 293, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  293: { name: "gate1",
    pic: 118, state: 3, wait: 1, next: 241, dvx: 10, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  294: { name: "gate2",
    pic: 117, state: 400, wait: 2, next: 357, dvx: 0, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 100, y: 0, w: 100, h: 280, dvy: 0, dvx: 332, bdefend: 100, fall: 100, vrest: 5, injury: 0
    }
  },
  295: { name: "konoha_sempu",
    pic: 119, state: 3, wait: 1, next: 296, dvx: 0, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, mp: 85,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  296: { name: "konoha_sempu",
    pic: 120, state: 3006, wait: 1, next: 297, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 12, y: 34, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    }
  },
  297: { name: "konoha_sempu",
    pic: 121, state: 3006, wait: 1, next: 298, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  298: { name: "konoha_sempu",
    pic: 122, state: 3006, wait: 1, next: 299, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 0, x: 16, y: 27, w: 35, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  299: { name: "konoha_sempu",
    pic: 121, state: 3006, wait: 1, next: 300, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  300: { name: "konoha_sempu",
    pic: 122, state: 3006, wait: 1, next: 301, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 0, x: 16, y: 27, w: 35, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  301: { name: "konoha_sempu",
    pic: 121, state: 3006, wait: 1, next: 302, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      }
    ],
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  302: { name: "konoha_sempu",
    pic: 120, state: 3006, wait: 1, next: 303, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 0, x: 16, y: 27, w: 35, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  303: { name: "konoha_sempu",
    pic: 60, state: 3, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      }
    ]
  },
  305: { name: "gate2",
    pic: 29, state: 3, wait: 4, next: 306, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 10235,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  306: { name: "gate2",
    pic: 123, state: 3, wait: 0, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      }
    ],
    opoint: {
      kind: 1, x: 43, y: 50, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 0
    }
  },
  307: { name: "gate2",
    pic: 123, state: 3, wait: 0, next: 308, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    opoint: {
      kind: 1, x: 39, y: 50, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 1
    }
  },
  308: { name: "gate2",
    pic: 124, state: 3, wait: 1, next: 309, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      }
    ]
  },
  309: { name: "gate2",
    pic: 125, state: 3, wait: 1, next: 310, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  310: { name: "gate2",
    pic: 126, state: 3, wait: 1, next: 311, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  311: { name: "gate2",
    pic: 127, state: 3, wait: 1, next: 312, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  312: { name: "gate2",
    pic: 116, state: 3, wait: 1, next: 313, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  313: { name: "gate2",
    pic: 128, state: 301, wait: 1, next: 314, dvx: 70, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    opoint: {
      kind: 1, x: 43, y: 50, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 30
    },
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 25, w: 25, h: 65,
      catchingact: [320, 320], caughtact: [132, 132]
    }
  },
  314: { name: "gate2",
    pic: 128, state: 301, wait: 1, next: 315, dvx: 70, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 25, w: 25, h: 65,
      catchingact: [320, 320], caughtact: [132, 132]
    }
  },
  315: { name: "gate2",
    pic: 128, state: 301, wait: 1, next: 316, dvx: 70, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 25, w: 25, h: 65,
      catchingact: [320, 320], caughtact: [132, 132]
    }
  },
  316: { name: "gate2",
    pic: 61, state: 9, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 3, x: 40, y: 16, zwidth: 25, w: 25, h: 65,
      catchingact: [320, 320], caughtact: [132, 132]
    }
  },
  317: { name: "konoha_sempu",
    pic: 122, state: 3006, wait: 1, next: 318, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 0, x: 16, y: 27, w: 35, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  318: { name: "konoha_sempu",
    pic: 121, state: 3006, wait: 1, next: 300, dvx: 25, dvy: 0, centerx: 43, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 26, w: 30, h: 53
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 0, x: 15, y: 27, w: 50, h: 16, dvx: 15, dvy: -15, fall: 20, vrest: 5, bdefend: 100, injury: 25
    }
  },
  319: { name: "gate2",
    pic: 91, state: 400, wait: 2, next: 356, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 3, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 39, y: 0, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  320: { name: "gate2",
    pic: 99, state: 9, wait: 1, next: 321, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2126",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    cpoint: {
      kind: 1, x: 39, y: 30, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    }
  },
  321: { name: "gate2",
    pic: 95, state: 9, wait: 2, next: 322, dvx: 0, dvy: 550, centerx: 39, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -35, bdefend: 100, fall: 500, vrest: 8, injury: 65
    },
    opoint: {
      kind: 1, x: 43, y: 50, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 10
    }
  },
  322: { name: "gate2",
    pic: 96, state: 15, wait: 3, next: 323, dvx: 1, dvy: 550, centerx: 39, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    opoint: {
      kind: 1, x: 43, y: 50, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 0
    }
  },
  323: { name: "gate2",
    pic: 110, state: 15, wait: 3, next: 324, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  324: { name: "gate2",
    pic: 111, state: 15, wait: 2, next: 325, dvx: 550, dvy: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  325: { name: "gate2",
    pic: 114, state: 15, wait: 2, next: 326, dvx: 550, dvy: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  326: { name: "gate2",
    pic: 115, state: 15, wait: 2, next: 327, dvx: 550, dvy: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  327: { name: "gate2",
    pic: 116, state: 15, wait: 3, next: 328, dvx: 550, dvy: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  328: { name: "gate2",
    pic: 109, state: 15, wait: 3, next: 329, dvx: 0, dvy: -15, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    },
    opoint: {
      kind: 1, x: 39, y: 77, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  329: { name: "gate2",
    pic: 112, state: 15, wait: 4, next: 330, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 30, h: 53
    }
  },
  330: { name: "gate2",
    pic: 66, state: 3, wait: 3, next: 331, dvx: 65, dvy: 35, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -10, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    }
  },
  331: { name: "gate2",
    pic: 66, state: 3, wait: 0, next: 332, dvx: 550, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 10, y: -50, w: 70, h: 350, dvy: 0, dvx: 332, bdefend: 100, fall: 100, vrest: 5, injury: 0
    }
  },
  332: { name: "gate2",
    pic: 91, state: 3, wait: 1, next: 333, dvx: -80, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    }
  },
  333: { name: "gate2",
    pic: 90, state: 3, wait: 1, next: 334, dvx: 80, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    }
  },
  334: { name: "gate2",
    pic: 35, state: 400, wait: 2, next: 335, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 25, y: 120, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  335: { name: "gate2",
    pic: 128, state: 3, wait: 1, next: 336, dvx: 120, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 5, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  336: { name: "gate2",
    pic: 35, state: 400, wait: 2, next: 337, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 50, y: 40, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  337: { name: "gate2",
    pic: 117, state: 3, wait: 1, next: 338, dvx: 120, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 0, y: 67, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  338: { name: "gate2",
    pic: 35, state: 400, wait: 2, next: 339, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 7, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 50, y: 15, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  339: { name: "gate2",
    pic: 117, state: 3, wait: 1, next: 340, dvx: 120, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 42, y: 80, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  340: { name: "gate2",
    pic: 35, state: 400, wait: 2, next: 341, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 10, y: 0, w: 70, h: 80, dvy: 0, dvx: 341, bdefend: 100, fall: 100, vrest: 5, injury: 0
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  341: { name: "gate2",
    pic: 128, state: 3, wait: 1, next: 342, dvx: 120, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 39, y: 25, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  342: { name: "gate2",
    pic: 35, state: 400, wait: 2, next: 343, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 0, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 0, y: 40, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  343: { name: "gate2",
    pic: 128, state: 3, wait: 1, next: 344, dvx: 120, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 2, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 39, y: 94, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  344: { name: "gate2",
    pic: 91, state: 400, wait: 2, next: 345, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 3, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 15, y: 37, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  345: { name: "gate2",
    pic: 90, state: 3, wait: 1, next: 346, dvx: 120, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: 4, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 39, y: 40, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  346: { name: "gate2",
    pic: 91, state: 3, wait: 2, next: 241, dvx: -60, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: -580, y: -50, w: 1239, h: 200, dvy: 0, dvx: 347, bdefend: 100, fall: 100, vrest: 5, injury: 0, zwidth: 37
    },
    opoint: {
      kind: 1, x: 20, y: 50, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  347: { name: "gate2",
    pic: 128, state: 3, wait: 1, next: 348, dvx: 550, dvy: 550, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 10, y: -80, w: 70, h: 80, dvy: -23, dvx: -2, bdefend: 100, fall: 300, vrest: 5, injury: 30
      },
      {
        kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -23, dvx: -2, bdefend: 100, fall: 300, vrest: 5, injury: 30
      },
      {
        kind: 0, x: 10, y: 90, w: 70, h: 80, dvy: -42, dvx: -2, bdefend: 100, fall: 300, vrest: 5, injury: 30
      }
    ]
  },
  348: { name: "gate2",
    pic: 109, state: 3, wait: 1, next: 349, dvx: 550, dvy: -17, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  349: { name: "gate2",
    pic: 150, state: 3, wait: 2, next: 350, dvx: 550, dvy: 0, centerx: 39, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 10, y: 0, w: 70, h: 80, dvy: 1
    }
  },
  350: { name: "gate2",
    pic: 151, state: 3, wait: 1, next: 351, dvx: 550, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 10, y: 0, w: 70, h: 80, dvy: 1
    }
  },
  351: { name: "gate2",
    pic: 152, state: 3, wait: 1, next: 352, dvx: 550, dvy: -2, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: 10, y: 0, w: 70, h: 80, dvy: 1
    }
  },
  352: { name: "gate2",
    pic: 153, state: 3, wait: 5, next: 353, dvx: 550, dvy: 550, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 139, dvy: 100, dvx: 0, bdefend: 100, fall: 100, vrest: 25, injury: 90
    }
  },
  353: { name: "gate2",
    pic: 153, state: 3, wait: 0, next: 354, dvx: 550, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 315, action: 35, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  354: { name: "gate2",
    pic: 153, state: 3, wait: 0, next: 355, dvx: 550, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 20, y: 315, action: 35, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  355: { name: "gate2",
    pic: 153, state: 3, wait: 3, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 60, y: 315, action: 35, dvx: 0, dvy: 0, oid: 208, facing: 0
    }
  },
  356: { name: "gate2",
    pic: 117, state: 3, wait: 1, next: 334, dvx: 120, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 30
    },
    opoint: {
      kind: 1, x: 59, y: 40, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  357: { name: "gate2",
    pic: 118, state: 3, wait: 1, next: 319, dvx: 120, dvy: 0, centerx: 39, centery: 137, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 10, y: 0, w: 70, h: 80, dvy: -1, dvx: 0, bdefend: 100, fall: 100, vrest: 5, injury: 25
      },
      {
        kind: 8, x: 10, y: -50, w: 70, h: 350, dvy: -5, dvx: 332, bdefend: 100, fall: 100, vrest: 5, injury: 30
      }
    ],
    opoint: {
      kind: 1, x: 55, y: 79, action: 40, dvx: 0, dvy: 0, oid: 203
    }
  },
  360: { name: "drunken_mod",
    pic: 170, state: 15, wait: 0, next: 361, dvx: 17, dvy: -1, dvz: 4, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  361: { name: "drunken_mod",
    pic: 171, state: 4, wait: 2, next: 362, dvx: 27, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 364, hit_d: 118, hit_j: 93,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 27, dvy: 0, oid: 435, facing: 0
    }
  },
  362: { name: "drunken_mod",
    pic: 172, state: 7, wait: 4, next: 363, dvx: 17, dvy: 550, dvz: 4, centerx: 39, centery: 79, hit_a: 367, hit_d: 118, hit_j: 93,
    sound: "1/004",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 27, dvy: 0, oid: 435, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  363: { name: "drunken_mod",
    pic: 170, state: 7, wait: 3, next: 361, dvx: 27, dvy: 550, dvz: 4, centerx: 39, centery: 79, hit_a: 364, hit_d: 118, hit_j: 93,
    sound: "1/003",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 0, dvx: 17, dvy: 0, oid: 435, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  364: { name: "drunken_mod",
    pic: 30, state: 9, wait: 0, next: 365, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 362, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [375, 375], caughtact: [130, 130]
    }
  },
  365: { name: "drunken_mod",
    pic: 30, state: 9, wait: 4, next: 366, dvx: 5, dvy: 550, dvz: 3, centerx: 39, centery: 79, hit_a: 362, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 65, y: 44, action: 20, dvx: -15, dvy: 0, oid: 204, facing: 1
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [375, 375], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  366: { name: "drunken_mod",
    pic: 31, state: 9, wait: 10, next: 362, dvx: 2, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 362, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [375, 375], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  367: { name: "drunken_mod",
    pic: 30, state: 9, wait: 0, next: 368, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [375, 375], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  368: { name: "drunken_mod",
    pic: 30, state: 9, wait: 1, next: 369, dvx: 15, dvy: 550, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 65, y: 44, action: 20, dvx: -15, dvy: 0, oid: 204, facing: 1
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [375, 375], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  369: { name: "drunken_mod",
    pic: 31, state: 9, wait: 2, next: 370, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 60, y: 16, w: 25, h: 65,
      catchingact: [375, 375], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  370: { name: "drunken_mod",
    pic: 32, state: 7, wait: 1, next: 371, dvx: 7, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 0, y: 16, w: 70, h: 65,
        catchingact: [39, 39], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  371: { name: "drunken_mod",
    pic: 33, state: 7, wait: 1, next: 372, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 0, y: 16, w: 70, h: 65,
        catchingact: [39, 39], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  372: { name: "drunken_mod",
    pic: 34, state: 7, wait: 1, next: 373, dvx: 1, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 0, y: 16, w: 70, h: 65,
        catchingact: [39, 39], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      }
    ],
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  373: { name: "drunken_mod",
    pic: 34, state: 15, wait: 6, next: 374, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 68, w: 43, h: 12
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: [
      {
        kind: 3, x: 0, y: 16, w: 70, h: 65,
        catchingact: [39, 39], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      }
    ]
  },
  374: { name: "drunken_mod",
    pic: 34, state: 15, wait: 0, next: 373, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 118, hit_j: 26,
    opoint: {
      kind: 1, x: 19, y: 69, action: 1, dvx: 0, dvy: 0, oid: 435, facing: 10
    },
    bdy: [
      {
        kind: 0, x: 21, y: 68, w: 43, h: 12
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: [
      {
        kind: 3, x: 0, y: 16, w: 70, h: 65,
        catchingact: [39, 39], caughtact: [130, 130]
      },
      {
        kind: 8, x: 0, y: -400, w: 70, h: 300, dvx: 49
      }
    ]
  },
  375: { name: "catching2",
    pic: 50, state: 9, wait: 5, next: 376, dvx: 10, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 34, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  376: { name: "catching2",
    pic: 51, state: 9, wait: 4, next: 377, dvx: 3, dvy: 550, dvz: 550, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 70, y: 34, injury: 35, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 58, y: 35, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  377: { name: "catching2",
    pic: 51, state: 9, wait: 2, next: 378, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 380, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 76, vaction: 180, throwvz: 4, throwvx: 22, throwvy: -7, hurtable: 0, throwinjury: 10, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  378: { name: "catching2",
    pic: 52, state: 15, wait: 1, next: 379, dvx: 0, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 0, y: 16, w: 70, h: 65,
      catchingact: [39, 39], caughtact: [130, 130]
    }
  },
  379: { name: "catching2",
    pic: 53, state: 15, wait: 1, next: 26, dvx: 0, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 0, y: 16, w: 70, h: 65,
      catchingact: [39, 39], caughtact: [130, 130]
    }
  },
  380: { name: "catching2",
    pic: 52, state: 9, wait: 1, next: 381, dvx: 550, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 34, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  381: { name: "catching2",
    pic: 10, state: 9, wait: 1, next: 382, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 34, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  382: { name: "catching2",
    pic: 11, state: 9, wait: 4, next: 383, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 70, y: 34, injury: 15, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 76, y: 45, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  383: { name: "catching2",
    pic: 11, state: 9, wait: 1, next: 384, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 385, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 76, vaction: 180, throwvz: 4, throwvx: 22, throwvy: -7, hurtable: 0, throwinjury: 10, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  384: { name: "catching2",
    pic: 12, state: 9, wait: 1, next: 26, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: -20, y: 16, w: 20, h: 65,
      catchingact: [33, 33], caughtact: [130, 130]
    }
  },
  385: { name: "catching2",
    pic: 12, state: 9, wait: 1, next: 386, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 34, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  386: { name: "catching2",
    pic: 15, state: 9, wait: 1, next: 387, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 34, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  387: { name: "catching2",
    pic: 16, state: 9, wait: 4, next: 388, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 70, y: 34, injury: 25, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 70, y: 40, action: 73, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  388: { name: "catching2",
    pic: 16, state: 9, wait: 1, next: 389, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 21, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 76, vaction: 180, throwvz: 4, throwvx: 22, throwvy: -7, hurtable: 0, throwinjury: 10, decrease: 10
    },
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  389: { name: "catching2",
    pic: 17, state: 9, wait: 1, next: 26, dvx: 0, dvy: 550, dvz: 550, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: -20, y: 16, w: 20, h: 65,
      catchingact: [33, 33], caughtact: [130, 130]
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
      kind: 1, x: 43, y: 81, action: 60, dvx: 0, dvy: 0, oid: 201, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2154",
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