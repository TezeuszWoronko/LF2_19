define({
  bmp: {
    file: [
      {
        "file(0-3)": "sprite/etc.png", w: 79, h: 79, row: 4, col: 1
      }
    ]
  },
  frame: {
  0: { name: "come_here",
    pic: 0, state: 9997, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "come_here",
    sound: "1/080",
    pic: 0, state: 9997, wait: 60, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "stay",
    pic: 1, state: 9997, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "stay",
    sound: "1/081",
    pic: 1, state: 9997, wait: 60, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "move",
    pic: 2, state: 9997, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "move",
    sound: "1/082",
    pic: 2, state: 9997, wait: 60, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "join",
    pic: 3, state: 9997, wait: 1, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "join",
    sound: "1/093",
    pic: 3, state: 9997, wait: 60, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  399: { name: "come_here",
    pic: 0, state: 9997, wait: 60, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});