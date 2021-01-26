define({
  bmp: {
    file: [
      {
        "file(0)": "sprite/start.png", w: 795, h: 506, row: 1, col: 1
      },
      {
        "file(1-9)": "sprite//texts1.png", w: 531, h: 399, row: 3, col: 3
      },
      {
        "file(10-18)": "sprite//texts2.png", w: 531, h: 399, row: 3, col: 3
      },
      {
        "file(19-29)": "sprite//texts3.png", w: 531, h: 399, row: 3, col: 3
      }
    ]
  },
  frame: {
  0: { name: "start",
    pic: 0, state: 9997, wait: 3, next: 1, dvx: -70, dvy: 550, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 1
  },
  1: { name: "start",
    pic: 0, state: 9997, wait: 1, next: 1, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -99999, y: -7777777787877, w: 9999999999, h: 500, zwidth: 999, dvx: 2
    }
  },
  2: { name: "end",
    pic: 999, state: 9997, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "naruto1b",
    pic: 1, state: 9997, wait: 90, next: 11, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "naruto1b",
    pic: 2, state: 9997, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "sakura",
    pic: 3, state: 9997, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "kankuro",
    pic: 4, state: 9997, wait: 90, next: 31, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "hsasori",
    pic: 5, state: 9997, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "chyio",
    pic: 6, state: 3005, wait: 90, next: 41, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "sasori",
    pic: 7, state: 3005, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "sasoriO",
    pic: 8, state: 3005, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "deidara",
    pic: 9, state: 3005, wait: 90, next: 61, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "deidara",
    pic: 10, state: 3005, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "kage",
    pic: 12, state: 3005, wait: 90, next: 63, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "kage",
    pic: 13, state: 3005, wait: 90, next: 64, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "kage",
    pic: 14, state: 3005, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "madara",
    pic: 15, state: 3005, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "zabuza",
    pic: 10, state: 3005, wait: 90, next: 67, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "zabuza",
    pic: 11, state: 3005, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  400: { name: "jirayia_pain1",
    pic: 19, state: 9997, wait: 90, next: 401, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  },
  401: { name: "jirayia_pain1",
    pic: 20, state: 9997, wait: 90, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 0, centery: 300, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});