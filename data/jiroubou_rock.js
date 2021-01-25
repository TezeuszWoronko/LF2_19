define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/jiroubou_rock.png", w: 159, h: 159, row: 6, col: 2
      }
    ]
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 60, dvy: 0, centerx: 84, centery: 102,
    itr: {
      kind: 0, x: 22, y: 65, w: 115, h: 66, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 110
    },
    bdy: {
      kind: 0, x: 22, y: 65, w: 115, h: 66
    }
  },
  1: { name: "in_the_sky",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 87, centery: 101,
    itr: {
      kind: 0, x: 27, y: 68, w: 112, h: 58, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 105
    },
    bdy: {
      kind: 0, x: 27, y: 68, w: 112, h: 58
    }
  },
  2: { name: "in_the_sky",
    pic: 1, state: 3000, wait: 1, next: 10, dvx: 0, dvy: 0, centerx: 87, centery: 101,
    itr: {
      kind: 0, x: 27, y: 68, w: 112, h: 58, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 100
    },
    bdy: {
      kind: 0, x: 27, y: 68, w: 112, h: 58
    }
  },
  10: { name: "on_ground",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 84, centery: 100,
    opoint: {
      kind: 1, x: 43, y: 70, action: 321, dvx: 40, dvy: 1, oid: 449
    }
  },
  20: { name: "on_ground",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 84, centery: 100
  },
  30: { name: "rebounding",
    pic: 999, state: 3000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  320: { name: "on_ground",
    pic: 2, state: 3002, wait: 0, next: 321, dvx: 0, dvy: 0, centerx: 84, centery: 100
  },
  321: { name: "on_ground",
    pic: 3, state: 3002, wait: 0, next: 322, dvx: 0, dvy: 0, centerx: 78, centery: 102,
    sound: "1/021"
  },
  322: { name: "on_ground",
    pic: 4, state: 3002, wait: 0, next: 323, dvx: 0, dvy: 0, centerx: 76, centery: 103
  },
  323: { name: "on_ground",
    pic: 5, state: 3002, wait: 0, next: 324, dvx: 0, dvy: 0, centerx: 74, centery: 99
  },
  324: { name: "on_ground",
    pic: 6, state: 3002, wait: 0, next: 325, dvx: 0, dvy: 0, centerx: 73, centery: 92
  },
  325: { name: "on_ground",
    pic: 7, state: 3002, wait: 0, next: 326, dvx: 0, dvy: 0, centerx: 82, centery: 89
  },
  326: { name: "on_ground",
    pic: 8, state: 3002, wait: 0, next: 327, dvx: 0, dvy: 0, centerx: 82, centery: 84
  },
  327: { name: "on_ground",
    pic: 9, state: 3002, wait: 0, next: 328, dvx: 0, dvy: 0, centerx: 86, centery: 90
  },
  328: { name: "on_ground",
    pic: 10, state: 3002, wait: 0, next: 329, dvx: 0, dvy: 0, centerx: 71, centery: 94
  },
  329: { name: "on_ground",
    pic: 11, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 87, centery: 102
  }
  }
});