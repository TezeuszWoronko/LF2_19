define({
  bmp: {
    file: [
      {
        "file(0-4)": "sprite/nc_kakuzuarm.png", w: 35, h: 71, row: 5, col: 1
      }
    ]
  },
  frame: {
  0: { name: "ground_fist",
    pic: 0, state: 3005, wait: 1, next: 1, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0
  },
  1: { name: "ground_fist",
    pic: 1, state: 3005, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0,
    sound: "1/021",
    itr: {
      kind: 0, x: 0, y: 0, w: 36, h: 71, fall: 100, bdefend: 100, arest: 15, injury: 40, dvx: 8, dvy: -13
    }
  },
  2: { name: "ground_fist",
    pic: 2, state: 3005, wait: 4, next: 3, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0
  },
  3: { name: "ground_fist",
    pic: 3, state: 3005, wait: 2, next: 4, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0
  },
  4: { name: "ground_fist",
    pic: 4, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0
  },
  5: { name: "delete",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0
  },
  10: { name: "ground_fist",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 18, centery: 71, hit_a: 0, hit_j: 0, hit_d: 0
  },
  122: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 123, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10000000, w: 12, h: 23, dvx: 0, vrest: 1, fall: -1, bdefend: -1, injury: -400, effect: 5
    }
  },
  123: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10000000, w: 12, h: 23, dvx: 0, vrest: 3, fall: -1, bdefend: -1, injury: 350, effect: 5
    }
  },
  124: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    itr: {
      kind: 8, x: 15, y: 10000000, w: 12, h: 23, dvx: 5, injury: 200
    }
  },
  125: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 126, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10000000, w: 12, h: 23, dvx: 0, vrest: 1, fall: -1, bdefend: -1, injury: -300, effect: 5
    }
  },
  126: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10000000, w: 12, h: 23, dvx: 0, vrest: 3, fall: -1, bdefend: -1, injury: 200, effect: 5
    }
  },
  127: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 128, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10000000, w: 12, h: 23, dvx: 0, vrest: 1, fall: -1, bdefend: -1, injury: -200, effect: 5
    }
  },
  128: { name: "absorbing",
    pic: 999, state: 18, wait: 1, next: 124, dvx: 0, dvy: 0, centerx: 17, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 10000000, w: 12, h: 23, dvx: 0, vrest: 3, fall: -1, bdefend: -1, injury: 100, effect: 5
    }
  }
  }
});