define({
  bmp: {
    file: [
      {
        "file(0-50)": "sprite/sakura_ball.png", w: 81, h: 82, row: 8, col: 6
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 40, dvx: 3, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 2,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 2,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  3: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 2,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  4: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 7, hit_d: 4, hit_j: 0, hit_Fa: 2,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 7, hit_d: 5, hit_j: 0, hit_Fa: 2,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  6: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 7, hit_d: 6, hit_j: 0, hit_Fa: 2,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3002, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/078"
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 1, state: 3000, wait: 3, next: 31, dvx: -14, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 2, state: 3000, wait: 3, next: 1, dvx: -14, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 41, action: 20, dvx: 0, dvy: 0, oid: 215, facing: 1
    }
  },
  40: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 41, dvx: 5, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  41: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 42, dvx: 7, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  42: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 43, dvx: 10, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  },
  43: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 1, dvx: 13, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 40, y: 16, w: 35, h: 65,
      catchingact: [10, 10], caughtact: [399, 399]
    }
  }
  }
});