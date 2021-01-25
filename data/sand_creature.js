define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/sand_creature2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/sand_creature2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/sand_creature.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(210-279)": "sprite/sand_creature.png", w: 79, h: 79, row: 10, col: 7
      }
    ],
    name: "Sand_Creature",
    head: "sprite/sand_f.png",
    small: "sprite/sand_s.png",
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
    jump_height: -10.299999,
    jump_distance: 0,
    jump_distancez: 3,
    dash_height: -13,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 20
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 240, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 210, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  5: { name: "walking",
    pic: 10, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  6: { name: "walking",
    pic: 11, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  7: { name: "walking",
    pic: 12, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  8: { name: "walking",
    pic: 13, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  9: { name: "running",
    pic: 10, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  10: { name: "running",
    pic: 11, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  11: { name: "running",
    pic: 12, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  60: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  65: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  70: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  80: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  85: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  90: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  94: { name: "land",
    pic: 66, state: 3, wait: 2, next: 238, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  100: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  110: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  111: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  130: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  136: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  137: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  138: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  139: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  140: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "picked_caught",
    pic: 6, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  144: { name: "picked_caught",
    pic: 7, state: 10, wait: 0, next: 245, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  180: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  181: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 182, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  182: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 183, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 25, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  183: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 184, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 105, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  184: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 185, dvx: 550, dvy: 550, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 25, y: 105, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  185: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 55, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  186: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  187: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  188: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  189: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  190: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "falling",
    pic: 999, state: 3, wait: 0, next: 181, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "ice",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  201: { name: "ice",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  202: { name: "ice",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  203: { name: "fire",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  204: { name: "fire",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  205: { name: "fire",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  206: { name: "fire",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 235, dvx: 12, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 10, vrest: 10, bdefend: 16, injury: 20
    }
  },
  213: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  214: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  215: { name: "standing",
    pic: 4, state: 0, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  216: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  217: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  218: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  219: { name: "standing",
    pic: 4, state: 0, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  220: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 221, dvx: 550, dvy: 550, centerx: 47, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  221: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  222: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 223, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  223: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  224: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 225, dvx: 550, dvy: 550, centerx: 48, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  225: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  226: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 227, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  227: { name: "injured",
    pic: 999, state: 11, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  230: { name: "lying",
    pic: 35, state: 14, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0
  },
  231: { name: "lying",
    pic: 35, state: 14, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  232: { name: "throw_lying_man",
    pic: 35, state: 9, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  233: { name: "throw_lying_man",
    pic: 35, state: 9, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  234: { name: "throw_lying_man",
    pic: 35, state: 9, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  235: { name: "jump",
    pic: 63, state: 100, wait: 1, next: 236, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 10, vrest: 10, bdefend: 16, injury: 20
    }
  },
  236: { name: "jump",
    pic: 64, state: 100, wait: 5, next: 237, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 10, vrest: 10, bdefend: 16, injury: 20
    }
  },
  237: { name: "jump",
    pic: 65, state: 100, wait: 10, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 10, vrest: 10, bdefend: 16, injury: 20
    }
  },
  238: { name: "jump",
    pic: 67, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  240: { name: "standing",
    pic: 4, state: 0, wait: 3, next: 241, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  241: { name: "standing",
    pic: 5, state: 0, wait: 3, next: 242, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  242: { name: "standing",
    pic: 6, state: 0, wait: 3, next: 243, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  243: { name: "standing",
    pic: 7, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 80000, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ],
    opoint: {
      kind: 1, x: 39, y: 70, action: 244, dvx: 0, dvy: 0, oid: 39, facing: 0
    }
  },
  244: { name: "sand",
    pic: 999, state: 3, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 21, y: 18, w: 43, h: 62
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  245: { name: "dis",
    pic: 999, state: 10, wait: 0, next: 246, dvx: 550, dvy: 550, centerx: 47, centery: 79, hit_a: 0, hit_d: 0
  },
  246: { name: "dis",
    pic: 999, state: 10, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 44, centery: 79, hit_a: 0, hit_d: 0,
    opoint: {
      kind: 1, x: 50, y: 70, action: 37, dvx: 0, dvy: 0, oid: 410, facing: 0
    }
  },
  250: { name: "kakashi_pt1",
    pic: 20, state: 14, wait: 55, next: 251, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "kakashi_pt1",
    pic: 20, state: 14, wait: 8, next: 252, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 0, action: 100, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  252: { name: "kakashi_pt1",
    pic: 21, state: 14, wait: 8, next: 253, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  253: { name: "kakashi_pt1",
    pic: 22, state: 14, wait: 13, next: 254, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  254: { name: "kakashi_pt1",
    pic: 23, state: 14, wait: 8, next: 255, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  255: { name: "kakashi_pt1",
    pic: 24, state: 14, wait: 8, next: 256, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  256: { name: "kakashi_pt1",
    pic: 20, state: 14, wait: 8, next: 257, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  257: { name: "kakashi_pt1",
    pic: 21, state: 14, wait: 8, next: 258, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  258: { name: "kakashi_pt1",
    pic: 22, state: 14, wait: 13, next: 259, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  259: { name: "kakashi_pt1",
    pic: 23, state: 14, wait: 8, next: 260, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  260: { name: "kakashi_pt1",
    pic: 24, state: 14, wait: 8, next: 261, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  261: { name: "kakashi_pt1",
    pic: 20, state: 14, wait: 8, next: 262, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  262: { name: "kakashi_pt1",
    pic: 21, state: 14, wait: 8, next: 263, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  263: { name: "kakashi_pt1",
    pic: 22, state: 14, wait: 13, next: 264, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  264: { name: "kakashi_pt1",
    pic: 23, state: 14, wait: 8, next: 265, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  265: { name: "kakashi_pt1",
    pic: 24, state: 14, wait: 50, next: 266, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  266: { name: "kakashi_pt1",
    pic: 25, state: 14, wait: 5, next: 267, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  267: { name: "kakashi_pt1",
    pic: 26, state: 14, wait: 3, next: 339, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  268: { name: "tsunade_pt1",
    pic: 999, state: 14, wait: 70, next: -269, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  269: { name: "tsunade_pt1",
    pic: 28, state: 14, wait: 30, next: 270, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  270: { name: "tsunade_pt1",
    pic: 28, state: 14, wait: 135, next: 271, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 104, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  271: { name: "tsunade_pt1",
    pic: 28, state: 14, wait: 15, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  272: { name: "blackness",
    pic: 999, state: 14, wait: 0, next: 273, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  273: { name: "blackness",
    pic: 999, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 200, action: 57, dvx: 0, dvy: 0, oid: 214, facing: 2
    }
  },
  274: { name: "blackness",
    pic: 999, state: 14, wait: 300, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  275: { name: "standing2",
    pic: 0, state: 14, wait: 3, next: 276, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: -9999, y: -7777777797777, w: 99999999, h: 97777
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  276: { name: "standing2",
    pic: 1, state: 14, wait: 3, next: 277, dvx: 0, dvy: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: -9999, y: -7777777797777, w: 99999999, h: 97777
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  277: { name: "standing2",
    pic: 2, state: 14, wait: 3, next: 278, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: -9999, y: -7777777797777, w: 99999999, h: 97777
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  278: { name: "standing2",
    pic: 3, state: 14, wait: 3, next: 275, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: -9999, y: -7777777797777, w: 99999999, h: 97777
      },
      {
        kind: 0, x: 38, y: 17, w: 1, h: 62
      }
    ]
  },
  280: { name: "sand_dude1",
    pic: 999, state: 14, wait: 0, next: 281, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  281: { name: "sand_dude1",
    pic: 40, state: 14, wait: 30, next: 282, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  282: { name: "sand_dude1",
    pic: 40, state: 14, wait: 190, next: -283, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 111, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  283: { name: "sand_dude1",
    pic: 42, state: 14, wait: 1, next: -284, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  284: { name: "sand_dude1",
    pic: 43, state: 14, wait: 1, next: -285, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  285: { name: "sand_dude1",
    pic: 42, state: 14, wait: 1, next: -286, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  286: { name: "sand_dude1",
    pic: 43, state: 14, wait: 1, next: -287, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  287: { name: "sand_dude1",
    pic: 42, state: 8030, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  290: { name: "sand_dude2",
    pic: 999, state: 14, wait: 0, next: 291, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  291: { name: "sand_dude2",
    pic: 999, state: 14, wait: 120, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 113, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  295: { name: "sand_dude_stay",
    pic: 999, state: 14, wait: 0, next: 296, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  296: { name: "sand_dude_stay",
    pic: 41, state: 14, wait: 0, next: 297, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  297: { name: "sand_dude_stay",
    pic: 41, state: 14, wait: 240, next: 298, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  298: { name: "sand_dude_stay",
    pic: 41, state: 8030, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  300: { name: "sand_blast",
    pic: 999, state: 14, wait: 0, next: 301, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  301: { name: "sand_blast",
    pic: 999, state: 14, wait: 3, next: 302, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 413, facing: 50
    }
  },
  302: { name: "sand_blast",
    pic: 999, state: 14, wait: 3, next: 303, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 413, facing: 50
    }
  },
  303: { name: "sand_blast",
    pic: 999, state: 14, wait: 3, next: 304, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 413, facing: 50
    }
  },
  304: { name: "sand_blast",
    pic: 999, state: 14, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 70, action: 0, dvx: 0, dvy: 0, oid: 413, facing: 50
    }
  },
  305: { name: "bomb_place",
    pic: 999, state: 14, wait: 0, next: 306, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  306: { name: "bomb_place",
    pic: 999, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 103, action: 135, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  307: { name: "bomb_place",
    pic: 999, state: 14, wait: 0, next: 308, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  308: { name: "bomb_place",
    pic: 999, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 103, action: 145, dvx: 0, dvy: 0, oid: 206, facing: 0
    }
  },
  310: { name: "gaara_impos",
    pic: 999, state: 14, wait: 0, next: 311, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  311: { name: "gaara_impos",
    pic: 44, state: 14, wait: 140, next: 312, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  312: { name: "gaara_impos",
    pic: 45, state: 14, wait: 2, next: 313, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  313: { name: "gaara_impos",
    pic: 46, state: 14, wait: 12, next: 314, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  314: { name: "gaara_impos",
    pic: 46, state: 14, wait: 2, next: 315, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 79, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  315: { name: "gaara_impos",
    pic: 46, state: 4016, wait: 0, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  316: { name: "kakashi_pt2",
    pic: 999, state: 14, wait: 0, next: 317, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  317: { name: "kakashi_pt2",
    pic: 999, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 0, action: 114, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  320: { name: "kill",
    pic: 999, state: 14, wait: 0, next: 321, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  321: { name: "kill",
    pic: 999, state: 15, wait: 0, next: 322, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  322: { name: "kill",
    pic: 999, state: 14, wait: 10, next: 321, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  323: { name: "kill_stay",
    pic: 44, state: 15, wait: 0, next: 324, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  324: { name: "kill_stay",
    pic: 44, state: 15, wait: 20, next: 323, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 108, y: 79, action: 105, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  325: { name: "bomb_place",
    pic: 999, state: 14, wait: 0, next: 326, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  326: { name: "bomb_place",
    pic: 999, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 33, action: 4, dvx: 0, dvy: 0, oid: 225, facing: 0
    }
  },
  327: { name: "sand_dude2",
    pic: 999, state: 14, wait: 0, next: 328, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  328: { name: "sand_dude2",
    pic: 999, state: 14, wait: 170, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 124, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  329: { name: "claybrd",
    pic: 999, state: 14, wait: 0, next: 330, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  330: { name: "claybrd",
    pic: 999, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 29, action: 50, dvx: 0, dvy: 0, oid: 225, facing: 0
    }
  },
  339: { name: "kakashi_pt1",
    pic: 26, state: 4003, wait: 3, next: 339, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "stage1-3",
    pic: 26, state: 3005, wait: 20, next: 341, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "stage1-3",
    pic: 26, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: -20, action: 142, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  342: { name: "killthembefore",
    pic: 26, state: 3005, wait: 0, next: 343, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  343: { name: "killthembefore",
    pic: 26, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 0, action: 143, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  344: { name: "killthembefore",
    pic: 26, state: 3005, wait: 0, next: 345, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  345: { name: "killthembefore",
    pic: 26, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 0, action: 147, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  346: { name: "stage1-3start",
    pic: 999, state: 3005, wait: 0, next: 347, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  347: { name: "stage1-3start",
    pic: 999, state: 14, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: -20, action: 124, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  348: { name: "stage1-3start",
    pic: 999, state: 3005, wait: 0, next: 349, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  349: { name: "stage1-3start",
    pic: 999, state: 14, wait: 85, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: -20, action: 154, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  350: { name: "stage1-3start",
    pic: 999, state: 3005, wait: 0, next: 351, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  351: { name: "stage1-3start",
    pic: 999, state: 14, wait: 85, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: -20, action: 156, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  352: { name: "stage1-5t",
    pic: 999, state: 3005, wait: 0, next: 353, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  353: { name: "stage1-5t",
    pic: 999, state: 14, wait: 85, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: -20, action: 157, dvx: 0, dvy: 0, oid: 235, facing: 10
    }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 38, y: 17, w: 1, h: 62
    }
  }
  }
});