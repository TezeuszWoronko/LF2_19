define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/area.png", w: 450, h: 145, row: 2, col: 3
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 0, dvx: 50, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 3005, wait: 1, next: 2, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "flying",
    pic: 2, state: 3005, wait: 1, next: 3, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "flying",
    pic: 3, state: 3005, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "flying",
    pic: 4, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hiting",
    pic: 999, state: 3002, wait: 0, next: 31, dvx: 550, dvy: 550, centerx: 39, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 31, dvx: 550, dvy: 550, centerx: 39, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 999, state: 3002, wait: 0, next: 31, dvx: 550, dvy: 550, centerx: 39, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: -66660000, action: 389, dvx: 0, dvy: 0, oid: 18, facing: 0
    }
  },
  100: { name: "flying",
    pic: 999, state: 3000, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 215, centery: 145, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 180, y: 62, w: 100, h: 68, zwidth: 50
    }
  },
  200: { name: "oro_gate",
    pic: 999, state: 3005, wait: 0, next: 201, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  201: { name: "oro_gate",
    pic: 999, state: 3005, wait: 0, next: 202, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 171, y: 88, action: 66, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  202: { name: "oro_gate",
    pic: 999, state: 3005, wait: 0, next: 203, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 88, action: 67, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  203: { name: "oro_gate",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 210, y: 88, action: 71, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  }
  }
});