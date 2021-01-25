define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/itachi.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/itachi_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/itachi_3.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(210-279)": "sprite/itachi_4.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(280-349)": "sprite/itachio.png", w: 79, h: 79, row: 10, col: 7
      }
    ],
    name: "Itachi",
    head: "sprite/itachi_f.png",
    small: "sprite/itachi_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 15,
    running_speedz: 3.3,
    heavy_walking_speed: 4,
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: -63489789979, w: 43, h: 62
      }
    ],
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
    },
    bpoint: {
      x: 43, y: 24
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
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
    ],
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
    },
    bpoint: {
      x: 42, y: 24
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
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
    ],
    bpoint: {
      x: 43, y: 24
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
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
    ],
    bpoint: {
      x: 43, y: 24
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
    wpoint: {
      kind: 1, x: 35, y: 53, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
    },
    bpoint: {
      x: 42, y: 24
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
    wpoint: {
      kind: 1, x: 35, y: 55, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
    },
    bpoint: {
      x: 42, y: 24
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
    wpoint: {
      kind: 1, x: 35, y: 57, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      x: 42, y: 24
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 397, hit_Fj: 260, hit_Da: 248, hit_Ua: 270, hit_ja: 305, hit_Uj: 293, hit_Fa: 350,
    wpoint: {
      kind: 1, x: 35, y: 56, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      x: 42, y: 24
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
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
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: -999, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    sound: "1/004",
    wpoint: {
      kind: 1, x: 56, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 49, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 29, y: 15, w: 28, h: 64
      }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 48, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 49, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 49, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "tree_jump",
    pic: 110, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "tree_jump",
    pic: 111, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 82, action: 150, dvx: 0, dvy: 0, oid: 203
    }
  },
  19: { name: "tree_jump",
    pic: 111, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 3, next: 21, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 49, y: 31, w: 35, h: 16, dvx: 2, bdefend: 16, injury: 40, effect: 1
    },
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  21: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 2, next: 22, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 2, next: 23, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 73, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  24: { name: "punch",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 0, next: 20, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  26: { name: "punch",
    pic: 999, state: 15, wait: 0, next: -27, dvx: -20, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043",
    itr: {
      kind: 8, x: 0, y: -50000, w: 100, h: 800, dvx: 24, injury: 0, zwidth: 5
    }
  },
  27: { name: "punch",
    pic: 999, state: 15, wait: 1, next: 28, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: -50000, w: 100, h: 800, dvx: 24, injury: 0, zwidth: 5
    }
  },
  28: { name: "punch",
    pic: 118, state: 15, wait: 0, next: 29, dvx: 50, dvy: 550, dvz: 5, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: -57, y: 23, w: 137, h: 57, dvx: 10, dvy: -15, fall: 70, vrest: 10, bdefend: 16, injury: 60, effect: 1
    }
  },
  29: { name: "punch",
    pic: 119, state: 15, wait: 0, next: 33, dvx: 30, dvy: 550, dvz: 5, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -57, y: 23, w: 137, h: 57, dvx: 10, dvy: -15, fall: 70, vrest: 10, bdefend: 16, injury: 60, effect: 1
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 61, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 75, state: 3, wait: 7, next: 32, dvx: 0, dvy: 0, centerx: 19, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
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
  32: { name: "jump_weapon_atck",
    pic: 76, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
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
  33: { name: "punch",
    pic: 119, state: 15, wait: 5, next: 1000, dvx: 0, dvy: 550, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -57, y: 23, w: 137, h: 57, dvx: 10, dvy: -15, fall: 70, vrest: 10, bdefend: 16, injury: 100, effect: 1
    }
  },
  35: { name: "run_weapon_atck",
    pic: 70, state: 3, wait: 3, next: 21, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  36: { name: "run_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  37: { name: "run_weapon_atck",
    pic: 72, state: 3, wait: 3, next: 23, dvx: 0, dvy: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ],
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  39: { name: "defend",
    pic: 40, state: 7, wait: 6, next: 500, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 303, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 46, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
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
    pic: 92, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 93, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2308",
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 92, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 25, y: 42, w: 35, h: 57
      },
      {
        kind: 0, x: 10, y: 40, w: 20, h: 13
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 27, state: 15, wait: 2, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2303",
    wpoint: {
      kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 48, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0, dvx: 40, dvy: -4, dvz: 2
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
    pic: 74, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 75, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 76, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
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
  55: { name: "skin",
    pic: 43, state: 15, wait: 0, next: 59, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "clone2",
    pic: 999, state: 400, wait: 2, next: 57, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "clone2",
    pic: 44, state: 15, wait: 0, next: 58, dvx: 120, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  58: { name: "clone2",
    pic: 0, state: 3005, wait: 4, next: 256, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "trans",
    pic: 158, state: 8042, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2314",
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    sound: "1/2307",
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 23, y: 35, w: 37, h: 24
      }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
    },
    bdy: [
      {
        kind: 0, x: 45, y: 753, w: 32, h: 11
      },
      {
        kind: 0, x: 51, y: 34, w: 26, h: 16
      }
    ]
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    itr: {
      kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 20
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
  63: { name: "punch",
    pic: 13, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    itr: {
      kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1
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
  65: { name: "punch",
    pic: 14, state: 3, wait: 2, next: 66, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    sound: "1/2308",
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
    pic: 15, state: 3, wait: 2, next: 67, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    itr: {
      kind: 0, x: 60, y: 15, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 20
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
  67: { name: "punch",
    pic: 16, state: 3, wait: 2, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
    itr: {
      kind: 3, x: 40, y: 753, w: 25, h: 65,
      catchingact: [394, 394], caughtact: [396, 396]
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
  68: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_j: 320, hit_d: 208,
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
    pic: 37, state: 3, wait: 3, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 14, w: 30, h: 65
      }
    ]
  },
  71: { name: "super_punch",
    pic: 38, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2304",
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
    pic: 39, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 50
    },
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  73: { name: "super_punch",
    pic: 29, state: 3, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  75: { name: "genjutsu",
    pic: 999, state: 3, wait: 0, next: 76, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 275,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  76: { name: "genjutsu",
    pic: 999, state: 15, wait: 0, next: 333, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2317",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 350, action: 60, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  77: { name: "skin",
    pic: 43, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 78,
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
  78: { name: "skin",
    pic: 43, state: 15, wait: 0, next: 79, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "skin",
    pic: 43, state: 15, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 90, y: 0, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  80: { name: "jump_attack",
    pic: 35, state: 3, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  81: { name: "jump_attack",
    pic: 36, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 19, w: 32, h: 60
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ],
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35
    }
  },
  82: { name: "jump_attack",
    pic: 58, state: 3, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 20, y: 18, w: 34, h: 61
    }
  },
  83: { name: "jump_attack",
    pic: 59, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 45, y: 20, w: 28, h: 27
      }
    ]
  },
  85: { name: "run_attack",
    pic: 80, state: 3, wait: 2, next: 86, dvx: 8, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2328",
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
    pic: 81, state: 3, wait: 1, next: 87, dvx: 6, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 320,
    sound: "1/007",
    itr: {
      kind: 0, x: 28, y: 38, w: 45, h: 28, dvx: 10, dvy: -5, fall: 100, arest: 3, bdefend: 60, injury: 55, effect: 0
    },
    bdy: {
      kind: 0, x: 8, y: 51, w: 38, h: 27
    }
  },
  87: { name: "run_attack",
    pic: 82, state: 3, wait: 1, next: 88, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 18, y: 36, w: 39, h: 24
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 2, y: 57, w: 41, h: 22
      }
    ]
  },
  88: { name: "run_attack",
    pic: 83, state: 3, wait: 2, next: 89, dvx: 5, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 46, state: 3, wait: 2, next: 999, dvx: 4, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 27, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 28, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  92: { name: "dash_attack",
    pic: 48, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70
    },
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
      }
    ]
  },
  94: { name: "shadow",
    pic: 60, state: 100, wait: 20, next: 346, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
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
  96: { name: "shadow",
    pic: 1, state: 100, wait: 4, next: 97, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  97: { name: "shadow",
    pic: 2, state: 100, wait: 4, next: 98, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  98: { name: "shadow",
    pic: 3, state: 100, wait: 4, next: 192, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  99: { name: "shadow",
    pic: 0, state: 100, wait: 4, next: 253, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
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
    pic: 44, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    sound: "1/030",
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
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 256, dvx: 0, dvy: 0, oid: 9, facing: 0
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
    pic: 68, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 67, state: 6, wait: 1, next: 219, dvx: 5, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 40, state: 7, wait: 4, next: 39, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
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
    pic: 40, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 10, state: 9, wait: 0, next: 121, dvx: 0, dvy: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 150,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 69, state: 9, wait: 5, next: 122, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 150,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 212, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 69, state: 9, wait: 25, next: 123, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067",
    cpoint: {
      kind: 1, x: 58, y: 38, injury: 115, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 56, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 70, y: 35, action: 70, dvx: 0, dvy: 0, oid: 210, facing: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 69, state: 9, wait: 3, next: 234, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 20, throwvy: -7, throwvz: 3, throwinjury: 0
    },
    wpoint: {
      kind: 1, x: 56, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  125: { name: "shadow",
    pic: 0, state: 3, wait: 4, next: 126, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  126: { name: "shadow",
    pic: 1, state: 3, wait: 4, next: 127, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  127: { name: "shadow",
    pic: 2, state: 3, wait: 4, next: 128, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  128: { name: "shadow",
    pic: 3, state: 3, wait: 4, next: 325, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  129: { name: "shadow",
    pic: 0, state: 3, wait: 4, next: 329, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
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
  145: { name: "tns",
    pic: 999, state: 8009, wait: 3, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "shadow",
    pic: 1, state: 100, wait: 4, next: 147, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  147: { name: "shadow",
    pic: 2, state: 100, wait: 4, next: 148, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  148: { name: "shadow",
    pic: 3, state: 100, wait: 4, next: 149, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  149: { name: "shadow",
    pic: 0, state: 100, wait: 4, next: 96, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  150: { name: "tsuko",
    pic: 11, state: 9, wait: 0, next: 151, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 300,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    }
  },
  151: { name: "tsuko",
    pic: 11, state: 9, wait: 1, next: 152, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    opoint: {
      kind: 1, x: 60, y: 79, action: 260, dvx: 0, dvy: 0, oid: 220, facing: 0
    },
    itr: {
      kind: 8, x: -9999, y: -2222334, w: 99999, h: 500, zwidth: 99999, dvx: 153
    }
  },
  152: { name: "tsuko",
    pic: 11, state: 15, wait: 1, next: 152, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -2222334, w: 99999, h: 500, zwidth: 99999, dvx: 153
    }
  },
  153: { name: "tsuko",
    pic: 999, state: 14, wait: 200, next: 154, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -9999, y: -4.564896489452764e+24, w: 99999, h: 500, zwidth: 99999, dvx: 180
    }
  },
  154: { name: "terminate",
    pic: 999, state: 14, wait: 0, next: 155, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 100, h: 9999999, dvx: 15, dvy: -5, bdefend: 100, injury: 0, effect: 5, fall: 100
    }
  },
  155: { name: "terminate",
    pic: 999, state: 14, wait: 0, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 82, action: 386, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  160: { name: "eye",
    pic: 130, state: 9, wait: 0, next: 161, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  161: { name: "eye",
    pic: 130, state: 9, wait: 10, next: 162, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 200, action: 70, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  162: { name: "eye",
    pic: 131, state: 9, wait: 1, next: 163, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 70, y: 60, action: 310, dvx: 0, dvy: 0, oid: 462, facing: 0
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  163: { name: "eye",
    pic: 132, state: 9, wait: 0, next: 165, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, injury: 38, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 83, y: 95, action: 335, dvx: 0, dvy: 0, oid: 220, facing: 0
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  165: { name: "eye",
    pic: 132, state: 9, wait: 5, next: 166, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 70, y: 39, injury: 38, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 3
    },
    opoint: {
      kind: 1, x: 88, y: 95, action: 335, dvx: 0, dvy: 0, oid: 220, facing: 0
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  166: { name: "catching",
    pic: 132, state: 9, wait: 3, next: 167, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 12, throwvy: -6, throwvz: 3, throwinjury: 0
    },
    wpoint: {
      kind: 1, x: 56, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  167: { name: "throw_lying_man",
    pic: 132, state: 9, wait: 38, next: 1250, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  170: { name: "stop",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: -999, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -2222334, w: 666666, h: 999
    }
  },
  171: { name: "eye_rip",
    pic: 90, state: 15, wait: 3, next: 172, dvx: 30, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 0,
    sound: "1/017",
    itr: {
      kind: 3, x: 2, y: 16, w: 150, h: 65,
      catchingact: [160, 160], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  172: { name: "eye_rip",
    pic: 90, state: 15, wait: 1, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 2, y: 16, w: 150, h: 65,
      catchingact: [160, 160], caughtact: [130, 130]
    },
    wpoint: {
      kind: 1, x: 17, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  173: { name: "eye_rip",
    pic: 999, state: 14, wait: 0, next: 388, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "crow_replacement",
    pic: 134, state: 15, wait: 0, next: 176, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "crow_replacement",
    pic: 135, state: 15, wait: 0, next: 177, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -5, y: 0, w: 81, h: 60, dvx: 0, dvy: -5, fall: 100, arest: 10, bdefend: 10, injury: 15, effect: 1
    }
  },
  177: { name: "crow_replacement",
    pic: 136, state: 15, wait: 0, next: 178, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -5, y: 3, w: 80, h: 57, dvx: 0, dvy: -5, fall: 100, arest: 10, bdefend: 10, injury: 15, effect: 1
    }
  },
  178: { name: "crow_replacement",
    pic: 137, state: 15, wait: 0, next: 179, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 11, w: 75, h: 51, dvx: 0, dvy: -5, fall: 100, arest: 10, bdefend: 10, injury: 15, effect: 1
    }
  },
  179: { name: "crow_replacement",
    pic: 138, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    sound: "1/2320",
    wpoint: {
      kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 25, y: 25, w: 21, h: 20
      }
    ],
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 22, y: 20, w: 24, h: 23
      }
    ],
    itr: [
      {
        kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ]
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 27, y: 22, w: 20, h: 18
      }
    ],
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 22, y: 30, w: 27, h: 21
      }
    ],
    itr: [
      {
        kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ]
  },
  184: { name: "fallin",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
    }
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
    }
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    sound: "1/2320",
    wpoint: {
      kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 31, y: 24, w: 25, h: 23
      }
    ],
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 28, y: 27, w: 24, h: 26
      }
    ],
    itr: [
      {
        kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ]
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 30, y: 31, w: 24, h: 21
      }
    ],
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    }
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
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
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 30, y: 39, w: 23, h: 21
      }
    ]
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
    }
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
    }
  },
  192: { name: "shadow",
    pic: 1, state: 100, wait: 4, next: 193, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  193: { name: "shadow",
    pic: 2, state: 100, wait: 4, next: 194, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  194: { name: "shadow",
    pic: 3, state: 100, wait: 4, next: 195, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  195: { name: "shadow",
    pic: 0, state: 100, wait: 4, next: 196, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  196: { name: "shadow",
    pic: 1, state: 100, wait: 4, next: 197, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  197: { name: "shadow",
    pic: 2, state: 100, wait: 4, next: 198, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  198: { name: "shadow",
    pic: 3, state: 100, wait: 4, next: 99, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
    }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -45,
    wpoint: {
      kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
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
    bdy: [
      {
        kind: 0, x: 22, y: 35, w: 26, h: 19
      },
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      }
    ],
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20
    }
  },
  207: { name: "tired",
    pic: 61, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: -999, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  208: { name: "clone",
    pic: 50, state: 15, wait: 1, next: 209, dvx: -1, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 35,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  209: { name: "clone",
    pic: 51, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2315",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 56, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: -999, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
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
        kind: 0, x: 21, y: 80000, w: 43, h: 62
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
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 113, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 17, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 47, y: 23, w: 23, h: 54
      },
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 29, y: 41, w: 20, h: 37
      }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    opoint: {
      kind: 1, x: 43, y: 81, action: 209, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    wpoint: {
      kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 46, y: 23, w: 21, h: 56
      },
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 30, y: 40, w: 17, h: 41
      }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 11, y: 24, w: 39, h: 31
      },
      {
        kind: 0, x: 25, y: 53, w: 40, h: 27
      }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 210, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 27, y: 56, w: 36, h: 24
      }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 32, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 52, y: 38, w: 20, h: 19
      }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 24, y: 18, w: 35, h: 63
      }
    ]
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 27, y: 22, w: 42, h: 58
      }
    ]
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 28, y: 24, w: 39, h: 57
      }
    ]
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 210, dvx: 0, dvy: 0, oid: 203, facing: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 28, y: 23, w: 37, h: 58
      }
    ]
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 380,
    wpoint: {
      kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 29, y: 26, w: 37, h: 53
      }
    ]
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ]
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ]
  },
  232: { name: "throw_lying_man",
    pic: 37, state: 9, wait: 7, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 69, state: 9, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  235: { name: "amaterasu",
    pic: 85, state: 3, wait: 1, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  236: { name: "amaterasu",
    pic: 84, state: 3, wait: 1, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  237: { name: "amaterasu",
    pic: 46, state: 3, wait: 1, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  238: { name: "amaterasu",
    pic: 47, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  240: { name: "crows",
    pic: 0, state: 15, wait: 4, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "crows",
    pic: 1, state: 15, wait: 4, next: 242, dvx: 0, dvy: 0, centerx: 38, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  242: { name: "crows",
    pic: 2, state: 15, wait: 4, next: 244, dvx: 0, dvy: 0, centerx: 39, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "crows",
    pic: 3, state: 15, wait: 4, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  245: { name: "crows",
    pic: 0, state: 15, wait: 4, next: 246, dvx: 0, dvy: 0, centerx: 39, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  246: { name: "crows",
    pic: 1, state: 15, wait: 4, next: 247, dvx: 0, dvy: 0, centerx: 38, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  247: { name: "crows",
    pic: 2, state: 15, wait: 4, next: 358, dvx: 0, dvy: 0, centerx: 39, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0
  },
  248: { name: "ex clone",
    pic: 50, state: 15, wait: 1, next: 249, dvx: -1, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 115,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  249: { name: "ex clone",
    pic: 51, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 420, hit_d: 0, hit_j: 0,
    sound: "1/2315",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 250, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  250: { name: "injury_fake",
    pic: 999, state: 400, wait: 2, next: 251, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "injury_fake",
    pic: 44, state: 15, wait: 0, next: 252, dvx: 120, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017"
  },
  252: { name: "injury_fake",
    pic: 0, state: 3005, wait: 4, next: 146, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  253: { name: "injury_fake",
    pic: 30, state: 3005, wait: 10, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 145, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  255: { name: "injury_fake_clone",
    pic: 30, state: 15, wait: 100, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  256: { name: "shadow",
    pic: 3, state: 3, wait: 4, next: 340, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  257: { name: "shadow",
    pic: 41, state: 15, wait: 1, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  258: { name: "shadow",
    pic: 91, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -8, oid: 220, facing: 41
    }
  },
  259: { name: "crow_death",
    pic: 120, state: 14, wait: 4, next: 261, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  260: { name: "kunai2",
    pic: 114, state: 3, wait: 3, next: 369, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 105,
    bdy: [
      {
        kind: 0, x: 19, y: 24, w: 35, h: 54
      },
      {
        kind: 0, x: 10, y: 36, w: 27, h: 15
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  261: { name: "crow_death",
    pic: 121, state: 14, wait: 4, next: 262, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "crow_death",
    pic: 122, state: 14, wait: 4, next: 263, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  263: { name: "crow_death",
    pic: 123, state: 14, wait: 4, next: 264, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  264: { name: "crow_death",
    pic: 124, state: 14, wait: 4, next: 265, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "crow_death",
    pic: 125, state: 14, wait: 4, next: 266, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "crow_death",
    pic: 123, state: 14, wait: 4, next: 267, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "crow_death",
    pic: 124, state: 14, wait: 4, next: 268, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  268: { name: "crow_death",
    pic: 125, state: 14, wait: 4, next: 269, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "crow_death",
    pic: 126, state: 14, wait: 4, next: 355, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  270: { name: "katon",
    pic: 50, state: 15, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  271: { name: "katon",
    pic: 51, state: 15, wait: 1, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  272: { name: "katon",
    pic: 42, state: 15, wait: 1, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  273: { name: "katon",
    pic: 52, state: 15, wait: 1, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  274: { name: "katon",
    pic: 42, state: 15, wait: 1, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  275: { name: "katon",
    pic: 53, state: 15, wait: 1, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  276: { name: "katon",
    pic: 42, state: 15, wait: 1, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  277: { name: "katon",
    pic: 54, state: 15, wait: 1, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  278: { name: "katon",
    pic: 42, state: 15, wait: 1, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  279: { name: "katon",
    pic: 51, state: 15, wait: 1, next: 280, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  280: { name: "katon",
    pic: 55, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 311, hit_j: 286,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  281: { name: "katon spread",
    pic: 103, state: 15, wait: 3, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  282: { name: "katon spread",
    pic: 104, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 316, hit_d: 316, hit_j: 316,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 60, y: 38, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  283: { name: "katon spread",
    pic: 103, state: 15, wait: 0, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 316, hit_d: 316, hit_j: 316, mp: -5,
    sound: "1/070",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 75, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 20
    }
  },
  284: { name: "katon spread",
    pic: 104, state: 15, wait: 0, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 316, hit_d: 316, hit_j: 316, mp: -5,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 155, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 30
    }
  },
  285: { name: "katon spread",
    pic: 103, state: 15, wait: 0, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 316, hit_d: 316, hit_j: 316, mp: -5,
    sound: "1/071",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 215, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 40
    }
  },
  286: { name: "katon",
    pic: 100, state: 3, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 60,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  287: { name: "katon",
    pic: 101, state: 3, wait: 1, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2313",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  288: { name: "katon",
    pic: 102, state: 3, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  290: { name: "katon ball",
    pic: 57, state: 15, wait: 2, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 35,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  291: { name: "katon ball",
    pic: 56, state: 15, wait: 0, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 85, y: 35, action: 0, dvx: 0, dvy: 0, oid: 210, facing: 0
    }
  },
  292: { name: "katon ball",
    pic: 57, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 290, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  293: { name: "amaterasu",
    pic: 43, state: 1250294, wait: 3, next: 445, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 445, mp: 4000,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  294: { name: "amaterasu",
    pic: 43, state: 3, wait: 1, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 445,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  295: { name: "amaterasu",
    pic: 106, state: 3, wait: 7, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 212, dvx: 0, dvy: 0, oid: 203, facing: 0
    }
  },
  296: { name: "amaterasu",
    pic: 106, state: 3, wait: 1, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 45, y: 170, action: 330, dvx: 0, dvy: 0, oid: 220, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  297: { name: "amaterasu",
    pic: 107, state: 3, wait: 1, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  298: { name: "amaterasu",
    pic: 107, state: 3, wait: 1, next: 299, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  299: { name: "amaterasu",
    pic: 108, state: 3, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 350, action: 75, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  300: { name: "amaterasu",
    pic: 108, state: 3, wait: 0, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 4000,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 100, y: -100, action: 80, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  301: { name: "amaterasu",
    pic: 109, state: 3, wait: 15, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 999, hit_d: 999, hit_j: 999,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: -999, y: -6546832933, zwidth: 999, w: 999, h: 9999
      }
    ]
  },
  302: { name: "amaterasu",
    pic: 43, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  303: { name: "teleport",
    pic: 51, state: 18, wait: 1, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  304: { name: "teleport",
    pic: 51, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  305: { name: "charge",
    pic: 50, state: 3, wait: 3, next: 306, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2316",
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
    ],
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
    }
  },
  306: { name: "charge",
    pic: 51, state: 17, wait: 3, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  307: { name: "charge",
    pic: 51, state: 17, wait: 3, next: 308, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 310, hit_d: 310, hit_j: 310,
    opoint: {
      kind: 1, x: 43, y: 45, action: 0, dvx: 0, dvy: 0, oid: 203
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
    ],
    itr: {
      kind: 8, x: -9999999999, y: -2222334, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 170
    }
  },
  308: { name: "charge",
    pic: 51, state: 17, wait: 3, next: 307, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 310, hit_d: 310, hit_j: 310,
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
  310: { name: "charge",
    pic: 43, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, dvx: 100, dvy: -1, cover: 1
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
  311: { name: "katon",
    pic: 100, state: 3, wait: 3, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 260,
    sound: "1/2328",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  312: { name: "katon",
    pic: 101, state: 3, wait: 3, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  313: { name: "katon",
    pic: 102, state: 3, wait: 3, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  314: { name: "katon",
    pic: 103, state: 3, wait: 3, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    opoint: {
      kind: 1, x: 85, y: 35, action: 0, dvx: 15, dvy: 0, oid: 408, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  315: { name: "katon",
    pic: 104, state: 3, wait: 3, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  316: { name: "katon",
    pic: 105, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  317: { name: "teleport",
    pic: 51, state: 18, wait: 1, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 57, dvx: 0, dvy: 0, oid: 9, facing: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  318: { name: "teleport",
    pic: 51, state: 18, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 8, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 500, zwidth: 99999, dvx: 304
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  320: { name: "msharingan",
    pic: 90, state: 15, wait: 3, next: 321, dvx: 25, dvy: 0, dvz: 6, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 175,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 40, y: 16, w: 50, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  321: { name: "msharingan",
    pic: 90, state: 15, wait: 3, next: 999, dvx: -1, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 280,
    wpoint: {
      kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 40, y: 16, w: 50, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  325: { name: "shadow",
    pic: 0, state: 3, wait: 4, next: 326, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  326: { name: "shadow",
    pic: 1, state: 3, wait: 4, next: 327, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  327: { name: "shadow",
    pic: 2, state: 3, wait: 4, next: 328, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  328: { name: "shadow",
    pic: 3, state: 3, wait: 4, next: 129, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  329: { name: "shadow",
    pic: 2, state: 3, wait: 4, next: 330, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  330: { name: "shadow",
    pic: 3, state: 3, wait: 4, next: 345, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  333: { name: "crow_death",
    pic: 41, state: 14, wait: 0, next: 334, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 39, y: 79, action: 220, dvx: 15, dvy: -11, oid: 220, facing: 41
    }
  },
  334: { name: "crow_death",
    pic: 79, state: 14, wait: 0, next: 335, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 220, dvx: 18, dvy: -9, oid: 220, facing: 31
    }
  },
  335: { name: "crow_death",
    pic: 91, state: 14, wait: 0, next: 336, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 220, dvx: 18, dvy: -9, oid: 220, facing: 30
    }
  },
  336: { name: "crow_death",
    pic: 91, state: 14, wait: 0, next: 337, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 220, dvx: 17, dvy: -11, oid: 220, facing: 31
    }
  },
  337: { name: "crow_death",
    pic: 999, state: 14, wait: 0, next: 338, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 220, dvx: 17, dvy: -11, oid: 220, facing: 30
    }
  },
  338: { name: "crow_death",
    pic: 999, state: 15, wait: 10, next: 259, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "shadow",
    pic: 0, state: 3, wait: 4, next: 341, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  341: { name: "shadow",
    pic: 1, state: 3, wait: 4, next: 342, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  342: { name: "shadow",
    pic: 2, state: 3, wait: 4, next: 344, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  344: { name: "shadow",
    pic: 3, state: 3, wait: 4, next: 125, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  345: { name: "shadow",
    pic: 0, state: 3, wait: 4, next: 346, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  346: { name: "shadow",
    pic: 1, state: 3, wait: 4, next: 347, dvx: 0, dvy: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  347: { name: "shadow",
    pic: 2, state: 3, wait: 4, next: 257, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -99999999999, y: -88888888, w: 100000000000000000000, h: 62
    }
  },
  350: { name: "kunai",
    pic: 92, state: 3, wait: 1, next: 351, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 63,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 10, y: 36, w: 27, h: 15
      }
    ],
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  351: { name: "kunai",
    pic: 42, state: 15, wait: 1, next: 410, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 30, y: 51, action: 40, dvx: 30, dvy: -4, oid: 121, facing: 20
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  355: { name: "crow_death",
    pic: 127, state: 14, wait: 4, next: 356, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  356: { name: "crow_death",
    pic: 128, state: 14, wait: 4, next: 357, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  357: { name: "crow_death",
    pic: 129, state: 14, wait: 4, next: 362, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  358: { name: "slash",
    pic: 92, state: 15, wait: 0, next: 359, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  359: { name: "light_weapon_thw",
    pic: 93, state: 15, wait: 1, next: 360, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 42, y: 51, action: 40, dvx: 50, dvy: 0, oid: 121, facing: 0
    }
  },
  360: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  361: { name: "light_weapon_thw",
    pic: 92, state: 15, wait: 2, next: 257, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  362: { name: "crow_death",
    pic: 127, state: 14, wait: 3, next: 363, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  363: { name: "crow_death",
    pic: 128, state: 14, wait: 3, next: 364, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  364: { name: "crow_death",
    pic: 129, state: 14, wait: 3, next: -374, dvx: 0, dvy: 550, centerx: 39, centery: 209, hit_a: 0, hit_d: 0, hit_j: 0
  },
  365: { name: "genjutsu",
    pic: 114, state: 3, wait: 1, next: 366, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  366: { name: "genjutsu",
    pic: 115, state: 3, wait: 1, next: 367, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  367: { name: "genjutsu",
    pic: 116, state: 15, wait: 5, next: 333, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2317",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 200, action: 60, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  369: { name: "kunai2",
    pic: 115, state: 15, wait: 3, next: 370, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  370: { name: "kunai2",
    pic: 116, state: 15, wait: 3, next: 371, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/052",
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    },
    opoint: {
      kind: 1, x: 55, y: 41, action: 116, dvx: 0, dvy: 0, dvz: 0, oid: 435, facing: 0
    }
  },
  371: { name: "kunai2",
    pic: 116, state: 15, wait: 5, next: 372, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 70, y: 44, action: 110, dvx: 0, dvy: 0, dvz: 0, oid: 435, facing: 0
    }
  },
  372: { name: "kunai2",
    pic: 116, state: 15, wait: 25, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  373: { name: "illusion",
    pic: 999, state: 3005, wait: 2, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: -50000, w: 79, h: 500
    }
  },
  374: { name: "crow_death_slash",
    pic: 999, state: 400, wait: 1, next: 375, dvx: 0, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  375: { name: "crow_death_slash",
    pic: 999, state: 15, wait: 0, next: 376, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -100, y: 110, action: 100, dvx: 0, dvy: 0, oid: 419
    }
  },
  376: { name: "crow_death_slash",
    pic: 999, state: 15, wait: 1, next: 377, dvx: 110, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  377: { name: "crow_death_slash",
    pic: 60, state: 15, wait: 1, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  378: { name: "kunai2",
    pic: 999, state: 15, wait: 0, next: -70, dvx: 0, dvy: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  380: { name: "crow_replacement",
    pic: 999, state: 15, wait: 0, next: 381, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 95,
    sound: "1/005",
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 41
    }
  },
  381: { name: "crow_replacement",
    pic: 999, state: 15, wait: 5, next: -382, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005",
    opoint: {
      kind: 1, x: 39, y: 79, action: 50, dvx: 15, dvy: -11, oid: 220, facing: 40
    }
  },
  382: { name: "crow_replacement",
    pic: 999, state: 400, wait: 1, next: 383, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  383: { name: "crow_replacement",
    pic: 133, state: 15, wait: 0, next: 175, dvx: 20, dvy: -9, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  384: { name: "crow_death",
    pic: 999, state: 15, wait: 0, next: -337, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 44, y: 17, action: 100, dvx: 0, dvy: 0, oid: 220
    }
  },
  385: { name: "illusion",
    pic: 999, state: 14, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  386: { name: "terminate",
    pic: 999, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: -666, y: -4.564896489452764e+24, w: 666666, h: 999
    }
  },
  387: { name: "terminate",
    pic: 999, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: -2222334, w: 100, h: 10
    }
  },
  388: { name: "terminate",
    pic: 999, state: 15, wait: 200, next: 389, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  389: { name: "terminate",
    pic: 999, state: 15, wait: 20, next: 389, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: -666, y: -2222334, w: 666666, h: 999
      },
      {
        kind: 0, x: -666, y: -4.564896489452764e+24, w: 666666, h: 999
      }
    ],
    itr: {
      kind: 8, x: -9999, y: -2222334, w: 99999, h: 500, zwidth: 99999, dvx: 385
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
    },
    opoint: {
      kind: 1, x: 43, y: 81, action: 210, dvx: 0, dvy: 0, oid: 203, facing: 0
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
  397: { name: "heart",
    pic: 60, state: 15, wait: 1, next: 398, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 180,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  398: { name: "heart",
    pic: 61, state: 18, wait: 10, next: 999, dvx: 550, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ],
    itr: {
      kind: 3, x: 40, y: 30000, w: 25, h: 65,
      catchingact: [160, 160], caughtact: [130, 130]
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2320",
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  400: { name: "lying",
    pic: 34, state: 15, wait: 20, next: 401, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ]
  },
  401: { name: "lying",
    pic: 159, state: 15, wait: 3, next: 402, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 33, y: 83, action: 280, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  402: { name: "lying",
    pic: 158, state: 15, wait: 2, next: 59, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  403: { name: "lying",
    pic: 34, state: 14, wait: 1, next: 219, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999
      },
      {
        kind: 0, x: 0, y: 30000, w: 79, h: 500
      }
    ]
  },
  410: { name: "kunai",
    pic: 43, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 415, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  411: { name: "kunai",
    pic: 50, state: 15, wait: 1, next: 412, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 30, y: 51, action: 40, dvx: 30, dvy: -4, oid: 121, facing: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  412: { name: "kunai",
    pic: 55, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 416, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  413: { name: "kunai",
    pic: 93, state: 15, wait: 1, next: 414, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 30, y: 51, action: 40, dvx: 30, dvy: -4, oid: 121, facing: 30
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  414: { name: "kunai",
    pic: 94, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 350, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  415: { name: "kunai",
    pic: 50, state: 15, wait: 0, next: 411, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 63,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  416: { name: "kunai",
    pic: 93, state: 15, wait: 0, next: 413, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 63,
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 20, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 22, w: 35, h: 57
    }
  },
  420: { name: "clone",
    pic: 50, state: 15, wait: 1, next: 421, dvx: -1, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 40,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  421: { name: "clone",
    pic: 51, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2315",
    wpoint: {
      kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 39, y: 79, action: 422, dvx: 0, dvy: 0, oid: 9, facing: 0
    }
  },
  422: { name: "clone2",
    pic: 999, state: 400, wait: 2, next: 423, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  423: { name: "clone2",
    pic: 44, state: 15, wait: 0, next: 58, dvx: 220, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    opoint: {
      kind: 1, x: 39, y: 79, action: 58, dvx: 0, dvy: 0, oid: 9, facing: 20
    }
  },
  445: { name: "susanoo",
    pic: 92, state: 15, wait: 5, next: 446, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  446: { name: "susanoo",
    pic: 325, state: 15, wait: 2, next: 447, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 33, y: 83, action: 278, dvx: 0, dvy: 0, oid: 411, facing: 0
    }
  },
  447: { name: "susanoo",
    pic: 327, state: 15, wait: 4, next: 448, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  448: { name: "susanoo",
    pic: 282, state: 15, wait: 4, next: 449, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  449: { name: "susanoo",
    pic: 283, state: 15, wait: 4, next: 450, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  450: { name: "susanoo",
    pic: 280, state: 15, wait: 1, next: 451, dvx: 0, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  451: { name: "susanoo_stance",
    pic: 280, state: 4, wait: 4, next: 452, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/068",
    opoint: {
      kind: 1, x: 20, y: 85, action: 260, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  452: { name: "susanoo_stance",
    pic: 281, state: 4, wait: 40, next: 453, dvx: 550, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/005"
  },
  453: { name: "susanoo_stance",
    pic: 282, state: 4, wait: 0, next: 454, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 460, hit_d: 466, hit_j: 0, mp: -2
  },
  454: { name: "susanoo_stance",
    pic: 283, state: 4, wait: 6, next: 455, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 460, hit_d: 466, hit_j: 0, mp: -8,
    opoint: {
      kind: 1, x: 20, y: 85, action: 250, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  455: { name: "susanoo_walk1",
    pic: 284, state: 4, wait: 3, next: 456, dvx: 2, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 460, hit_d: 466, hit_j: 0, mp: -9,
    opoint: {
      kind: 1, x: 20, y: 85, action: 216, dvx: 1, dvy: 0, oid: 527, facing: 0
    }
  },
  456: { name: "susanoo_walk1",
    pic: 285, state: 4, wait: 4, next: 457, dvx: 2, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 461, hit_d: 466, hit_j: 0, mp: -8
  },
  457: { name: "susanoo_walk1",
    pic: 286, state: 4, wait: 3, next: 458, dvx: 2, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 460, hit_d: 466, hit_j: 0, mp: -9,
    opoint: {
      kind: 1, x: 20, y: 85, action: 218, dvx: 1, dvy: 0, oid: 527, facing: 0
    }
  },
  458: { name: "susanoo_walk1",
    pic: 287, state: 4, wait: 4, next: 455, dvx: 2, dvy: 550, dvz: 1, centerx: 39, centery: 79, hit_a: 461, hit_d: 466, hit_j: 0, mp: -8
  },
  460: { name: "SUSANOO_ATTACK_wait",
    pic: 280, state: 15, wait: 4, next: 461, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: 20
  },
  461: { name: "SUSANOO_ATTACK1",
    pic: 281, state: 15, wait: 2, next: 462, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: 20
  },
  462: { name: "SUSANOO_ATTACK1",
    pic: 281, state: 15, wait: 4, next: 463, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7,
    sound: "1/005",
    opoint: {
      kind: 1, x: 20, y: 85, action: 224, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  463: { name: "SUSANOO_ATTACK1",
    pic: 282, state: 15, wait: 2, next: 464, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7
  },
  464: { name: "SUSANOO_ATTACK1",
    pic: 282, state: 15, wait: 2, next: 465, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7,
    itr: {
      kind: 0, x: 28, y: 38, w: 195, zwidth: 45, h: 48, dvx: 20, dvy: -5, fall: 100, arest: 3, bdefend: 60, injury: 130, effect: 0
    }
  },
  465: { name: "SUSANOO_ATTACK1",
    pic: 283, state: 15, wait: 6, next: 480, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7
  },
  466: { name: "SUSANOO_ENDS",
    pic: 316, state: 15, wait: 2, next: 467, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2320"
  },
  467: { name: "SUSANOO_ENDS",
    pic: 313, state: 15, wait: 2, next: 468, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  468: { name: "SUSANOO_ENDS",
    pic: 314, state: 15, wait: 20, next: 469, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  469: { name: "SUSANOO_ENDS",
    pic: 341, state: 15, wait: 2, next: 470, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  470: { name: "SUSANOO_ENDS",
    pic: 340, state: 8042, wait: 2, next: 999, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/2314"
  },
  471: { name: "SUSANOO_ATTACK2",
    pic: 281, state: 15, wait: 2, next: 472, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: 15
  },
  472: { name: "SUSANOO_ATTACK2",
    pic: 281, state: 15, wait: 2, next: 473, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7,
    sound: "1/005",
    opoint: {
      kind: 1, x: 20, y: 85, action: 230, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  473: { name: "SUSANOO_ATTACK2",
    pic: 282, state: 15, wait: 2, next: 474, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7,
    itr: {
      kind: 0, x: 28, y: 38, w: 235, zwidth: 45, h: 48, dvx: 20, dvy: -5, fall: 100, arest: 3, bdefend: 60, injury: 130, effect: 0
    }
  },
  474: { name: "SUSANOO_ATTACK2",
    pic: 283, state: 15, wait: 8, next: 481, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7
  },
  475: { name: "SUSANOO_ATTACK3",
    pic: 281, state: 15, wait: 2, next: 476, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: 10
  },
  476: { name: "SUSANOO_ATTACK3",
    pic: 281, state: 15, wait: 2, next: 477, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7,
    sound: "1/005",
    opoint: {
      kind: 1, x: 20, y: 85, action: 234, dvx: 0, dvy: 0, oid: 527, facing: 0
    }
  },
  477: { name: "SUSANOO_ATTACK3",
    pic: 282, state: 15, wait: 2, next: 478, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7,
    itr: {
      kind: 0, x: 28, y: 38, w: 235, zwidth: 45, h: 48, dvx: 20, dvy: -5, fall: 100, arest: 3, bdefend: 60, injury: 130, effect: 0
    }
  },
  478: { name: "SUSANOO_ATTACK3",
    pic: 283, state: 15, wait: 18, next: 453, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 466, hit_j: 0, mp: -7
  },
  480: { name: "SUSANOO_ATTACK1",
    pic: 280, state: 15, wait: 3, next: 453, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 471, hit_d: 466, hit_j: 0, mp: -7
  },
  481: { name: "SUSANOO_ATTACK1",
    pic: 280, state: 15, wait: 3, next: 453, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 475, hit_d: 466, hit_j: 0, mp: -7
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