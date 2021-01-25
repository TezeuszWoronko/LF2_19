define({
  bmp: {
    file: [
      {
        "file(0-34)": "sprite/blood.png", w: 9, h: 9, row: 6, col: 1
      }
    ]
  },
  frame: {
  0: { name: "blood",
    pic: 2, state: 3005, wait: 1, next: 999, dvx: 0, dvy: 1, centerx: 5, centery: 10, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "blood_ground",
    pic: 5, state: 3005, wait: 30, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 10, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});