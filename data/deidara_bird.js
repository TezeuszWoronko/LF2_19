define({
  bmp: {
    file: [
      {
        "file(0-29)": "sprite//deidara_3.png", w: 159, h: 159, row: 5, col: 6
      },
      {
        "file(30-69)": "sprite//deidara_4.png", w: 159, h: 159, row: 5, col: 6
      }
    ],
    name: "Deidara_Bird",
    head: "sprite/deidara_bird_f.png",
    small: "sprite/deidara_s.png",
    walking_frame_rate: 3,
    walking_speed: 3,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 16.4,
    running_speedz: 2.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -1,
    jump_distance: 1,
    jump_distancez: 3,
    dash_height: -1,
    dash_distance: 1,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 30
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  5: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  6: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  7: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  8: { name: "walking",
    pic: 8, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0, hit_Uj: 240, hit_ja: 270, hit_Fa: 280, hit_Fj: 260, hit_Da: 250, hit_Dj: 290,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  9: { name: "running",
    pic: 4, state: 2, wait: 2, next: 0, dvx: 10, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0,
    sound: "1/031",
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  10: { name: "running",
    pic: 20, state: 2, wait: 2, next: 0, dvx: 10, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  11: { name: "running",
    pic: 21, state: 2, wait: 2, next: 0, dvx: 10, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  60: { name: "punch",
    pic: 4, state: 15, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    sound: "1/017",
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  61: { name: "punch",
    pic: 4, state: 15, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 15, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  62: { name: "punch",
    pic: 27, state: 15, wait: 1, next: 63, dvx: 25, dvy: 0, dvz: 0, centerx: 85, centery: 160, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 60, w: 67, h: 75, dvx: 5, dvy: -5, fall: 80, arest: 8, bdefend: 20, injury: 35
    },
    bdy: [
      {
        kind: 0, x: 42, y: 15, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  63: { name: "punch",
    pic: 27, state: 15, wait: 1, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 68, y: 60, w: 67, h: 75, dvx: 5, dvy: -5, fall: 80, arest: 8, bdefend: 20, injury: 35
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  64: { name: "punch",
    pic: 21, state: 15, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  65: { name: "punch",
    pic: 4, state: 15, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 140, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    bdy: {
      kind: 0, x: 42, y: 5, w: 115, h: 125
    }
  },
  66: { name: "punch",
    pic: 0, state: 15, wait: 1, next: 999, dvx: -1, dvy: 0, dvz: 0, centerx: 85, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 15, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  70: { name: "super_punch",
    pic: 4, state: 15, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    sound: "1/017",
    bdy: [
      {
        kind: 0, x: 42, y: 15, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  75: { name: "katsu",
    pic: 27, state: 15, wait: 0, next: 76, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 10,
    bdy: {
      kind: 0, x: 39, y: -555, w: 21, h: -999
    }
  },
  76: { name: "katsu",
    pic: 27, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: -666, action: 5, dvx: 0, dvy: 0, oid: 407, facing: 0
    },
    bdy: {
      kind: 0, x: 39, y: -555, w: 21, h: -999
    }
  },
  80: { name: "jump_attack",
    pic: 4, state: 15, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: [
      {
        kind: 0, x: 19, y: 8, w: 27, h: 61
      },
      {
        kind: 0, x: 11, y: 31, w: 43, h: 22
      }
    ]
  },
  81: { name: "jump_attack",
    pic: 4, state: 15, wait: 0, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 19, y: 16, w: 28, h: 53
      },
      {
        kind: 0, x: 10, y: 32, w: 46, h: 20
      }
    ]
  },
  82: { name: "jump_attack",
    pic: 27, state: 100, wait: 100, next: 83, dvx: 25, dvy: 5, dvz: 0, centerx: 85, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 28, y: 34, w: 57, h: 45, dvx: -2, fall: 80, vrest: 8, bdefend: 60, injury: 65
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
    pic: 27, state: 15, wait: 0, next: 84, dvx: 0, dvy: 5, dvz: 0, centerx: 85, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 21, state: 15, wait: 0, next: 999, dvx: 0, dvy: 5, dvz: 0, centerx: 85, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 12, state: 3, wait: 2, next: 61, dvx: 1, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  86: { name: "run_attack",
    pic: 38, state: 3, wait: 1, next: 87, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 40, y: 21, w: 30, h: 43
      },
      {
        kind: 0, x: 29, y: 57, w: 32, h: 23
      }
    ]
  },
  87: { name: "run_attack",
    pic: 39, state: 3, wait: 1, next: 88, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 31, y: 2, w: 27, h: 78
    }
  },
  88: { name: "run_attack",
    pic: 47, state: 3, wait: 2, next: 89, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 35, dvy: -10, fall: 100, arest: 15, bdefend: 100, injury: 75, effect: 2
    },
    opoint: {
      kind: 1, x: 90, y: 75, action: 23, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  89: { name: "run_attack",
    pic: 48, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  90: { name: "dash_attack",
    pic: 97, state: 15, wait: 6, next: 91, dvx: 0, dvy: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    wpoint: {
      kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 40, h: 52
    }
  },
  91: { name: "dash_attack",
    pic: 98, state: 15, wait: 1, next: 92, dvx: 0, dvy: -2, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    itr: {
      kind: 0, x: 50, y: 34, w: 55, h: 34, dvx: 19, dvy: -5, fall: 100, arest: 15, bdefend: 100, injury: 75, effect: 2
    },
    opoint: {
      kind: 1, x: 120, y: 75, action: 23, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  92: { name: "dash_attack",
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 23, dvy: 8, dvz: 3
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
        kind: 0, x: 28, y: 37, w: 24, h: 34
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
  102: { name: "running",
    pic: 20, state: 2, wait: 2, next: 0, dvx: 10, dvy: 0, centerx: 85, centery: 200, hit_a: 60, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
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
    pic: 22, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  111: { name: "defend",
    pic: 22, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  112: { name: "broken_defend",
    pic: 10, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 29, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  113: { name: "broken_defend",
    pic: 10, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  114: { name: "broken_defend",
    pic: 10, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 52, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  130: { name: "picked_caught",
    pic: 11, state: 15, wait: 0, next: 236, dvx: -5, dvy: -5, centerx: 85, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "picked_caught",
    pic: 11, state: 15, wait: 0, next: 236, dvx: -5, dvy: -5, centerx: 85, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  145: { name: "talk",
    pic: 999, state: 15, wait: 0, next: 146, dvx: 550, dvy: 550, centerx: 85, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  146: { name: "talk",
    pic: 30, state: 14, wait: 250, next: 147, dvx: 550, dvy: 550, centerx: 85, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 430, y: 0, action: 115, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  147: { name: "talk",
    pic: 30, state: 15, wait: 90, next: 1000, dvx: 550, dvy: -10, centerx: 85, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "talk",
    pic: 999, state: 15, wait: 0, next: 149, dvx: 550, dvy: 550, centerx: 85, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "talk",
    pic: 32, state: 14, wait: 250, next: 150, dvx: 550, dvy: 550, centerx: 85, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 430, y: 0, action: 144, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  150: { name: "talk",
    pic: 32, state: 15, wait: 5, next: 1000, dvx: 550, dvy: -10, centerx: 85, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "falling",
    pic: 9, state: 12, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  181: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  182: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: -3, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  183: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  184: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 152, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 9, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  187: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  188: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  189: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  190: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 10, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  200: { name: "ice",
    pic: 8, state: 12, wait: 2, next: 201, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 55, h: 68
    }
  },
  201: { name: "ice",
    pic: 9, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 55, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    },
    itr: {
      kind: 14, x: 8, y: 6, w: 67, h: 73, vrest: 1
    }
  },
  202: { name: "ice",
    pic: 8, state: 15, wait: 1, next: 182, dvx: -4, dvy: -3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  203: { name: "fire",
    pic: 17, state: 18, wait: 3, next: 204, dvx: 0, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 17, state: 18, wait: 3, next: 205, dvx: 0, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 17, state: 18, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 17, state: 18, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
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
    pic: 12, state: 3, wait: 2, next: 61, dvx: 1, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    sound: "1/017",
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  213: { name: "dash",
    pic: 12, state: 3, wait: 2, next: 61, dvx: 1, dvy: 0, centerx: 85, centery: 230, hit_a: 0, hit_d: 0, hit_j: 0, mp: 120,
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  215: { name: "crouch",
    pic: 20, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 40, w: 29, h: 38
    }
  },
  218: { name: "stop_running",
    pic: 3, state: 15, wait: 1, next: 999, dvx: -1, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 15, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 5, w: 115, h: 130
    }
  },
  219: { name: "crouch2",
    pic: 20, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 9, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  221: { name: "injured",
    pic: 9, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  222: { name: "injured",
    pic: 10, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  223: { name: "injured",
    pic: 10, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  224: { name: "injured",
    pic: 9, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  225: { name: "injured",
    pic: 9, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  226: { name: "injured",
    pic: 10, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  227: { name: "injured",
    pic: 10, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  228: { name: "injured",
    pic: 10, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  229: { name: "injured",
    pic: 10, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 42, y: 15, w: 115, h: 125
    }
  },
  230: { name: "lying",
    pic: 11, state: 14, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 11, state: 14, wait: 1, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  235: { name: "transform",
    pic: 11, state: 15, wait: 0, next: 236, dvx: -5, dvy: -5, centerx: 85, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0
  },
  236: { name: "transform",
    pic: 11, state: 8010, wait: 0, next: 999, dvx: -5, dvy: -5, centerx: 85, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 85, y: 0, action: 55, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  237: { name: "trans",
    pic: 0, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200
  },
  240: { name: "big_boom",
    pic: 15, state: 15, wait: 1, next: 241, dvx: 0, dvy: 550, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0, mp: 350,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  241: { name: "big_boom",
    pic: 16, state: 15, wait: 1, next: 242, dvx: 0, dvy: 550, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 95, y: 23, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  242: { name: "big_boom",
    pic: 19, state: 15, wait: 6, next: 243, dvx: 0, dvy: 550, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  243: { name: "big_boom",
    pic: 16, state: 15, wait: 2, next: 999, dvx: 0, dvy: 550, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 95, y: 23, action: 50, dvx: 0, dvy: -10, oid: 221, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  245: { name: "big_boom",
    pic: 999, state: 15, wait: 0, next: 246, dvx: 0, dvy: 550, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0
  },
  246: { name: "big_boom",
    pic: 999, state: 14, wait: 150, next: 999, dvx: 0, dvy: 550, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 95, y: 23, action: 50, dvx: 0, dvy: -10, oid: 221, facing: 0
    }
  },
  250: { name: "fish",
    pic: 15, state: 15, wait: 1, next: 251, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0, mp: 140,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  251: { name: "fish",
    pic: 15, state: 15, wait: 1, next: 252, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    opoint: {
      kind: 1, x: 95, y: 23, action: 41, dvx: 0, dvy: 0, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  252: { name: "fish",
    pic: 18, state: 15, wait: 5, next: 253, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  253: { name: "fish",
    pic: 16, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 95, y: 23, action: 4, dvx: 0, dvy: 27, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  260: { name: "punch2",
    pic: 12, state: 15, wait: 2, next: 261, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  261: { name: "punch2",
    pic: 13, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  262: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 263, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 117, y: 20, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  263: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  264: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 265, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 103, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  265: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 266, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  266: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 267, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  267: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 268, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  268: { name: "punch2",
    pic: 14, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  270: { name: "charge",
    pic: 16, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/2058",
    wpoint: {
      kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  271: { name: "charge",
    pic: 28, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 2, x: 42, y: 51, action: 20, dvx: 0, dvy: 0, oid: 123, facing: 0
    },
    wpoint: {
      kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  272: { name: "charge",
    pic: 28, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 274, hit_d: 274, hit_j: 274,
    opoint: {
      kind: 1, x: 96, y: 55, action: 4, dvx: 0, dvy: 0, oid: 203
    },
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  273: { name: "charge",
    pic: 15, state: 17, wait: 3, next: 275, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  274: { name: "charge",
    pic: 16, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, dvx: 100, dvy: -1, cover: 1
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  275: { name: "charge",
    pic: 29, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: {
      kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  280: { name: "punch",
    pic: 23, state: 15, wait: 3, next: 281, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0, mp: 95,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  281: { name: "punch",
    pic: 25, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  282: { name: "punch",
    pic: 24, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 117, y: 30, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  283: { name: "punch",
    pic: 26, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  },
  290: { name: "punch3",
    pic: 1, state: 15, wait: 5, next: 235, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 291, hit_j: 0, mp: 0
  },
  291: { name: "punch3",
    pic: 13, state: 15, wait: 1, next: 292, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0, mp: 500
  },
  292: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 293, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 117, y: 20, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  293: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 294, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 130, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  294: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 295, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 103, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  295: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 296, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 0, y: 20, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 20
    }
  },
  296: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -10, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 20
    }
  },
  297: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 298, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 20
    }
  },
  298: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 299, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 110, action: 40, dvx: 0, dvy: 0, oid: 407, facing: 51
    }
  },
  299: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 300, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: 100, y: 110, action: 40, dvx: 0, dvy: 0, oid: 407, facing: 50
    }
  },
  300: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 301, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 99, action: 50, dvx: 0, dvy: 0, oid: 225, facing: 50
    }
  },
  301: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 302, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 203, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  302: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 303, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    opoint: {
      kind: 1, x: -100, y: 20, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  303: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 304, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -110, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  304: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 305, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -120, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  305: { name: "punch3",
    pic: 14, state: 15, wait: 0, next: 306, dvx: 0, dvy: 0, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -130, y: 27, action: 50, dvx: 0, dvy: -2, oid: 206, facing: 0
    }
  },
  306: { name: "punch3",
    pic: 3, state: 15, wait: 1, next: 999, dvx: 0, dvy: -35, centerx: 85, centery: 200, hit_a: 0, hit_d: 0, hit_j: 0, mp: 0
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    },
    wpoint: {
      kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  500: { name: "defend2",
    pic: 22, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 110, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 80000, w: 43, h: 62
    }
  },
  501: { name: "defendend",
    pic: 22, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 85, centery: 201, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 42, y: 5, w: 115, h: 125
      },
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      }
    ]
  }
  }
});