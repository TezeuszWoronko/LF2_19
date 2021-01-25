define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/clay_bird2.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-15)": "sprite/clay_worm.png", w: 219, h: 99, row: 4, col: 2
      },
      {
        "file(16-17)": "sprite/g_smoke.png", w: 570, h: 370, row: 1, col: 2
      },
      {
        "file(18-19)": "sprite/g_smoke2.png", w: 570, h: 370, row: 1, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "start ",
    pic: 15, state: 3000, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 120, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  1: { name: "flying",
    pic: 15, state: 3000, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 120, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  2: { name: "flying",
    pic: 15, state: 3000, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 120, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  3: { name: "flying",
    pic: 15, state: 3000, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 120, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  4: { name: "start ",
    pic: 6, state: 3000, wait: 5, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7
  },
  5: { name: "flying",
    pic: 6, state: 3000, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 7,
    sound: "1/061"
  },
  40: { name: "tail",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 6, state: 3005, wait: 3, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 25, hit_Fa: 3, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 15, state: 3001, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 120, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    pic: 15, state: 3001, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 120, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 81, action: 130, dvx: 0, dvy: 0, oid: 221, facing: 0
    }
  },
  130: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 132, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  132: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 140, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  134: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 135, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 136, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  135: { name: "explosion_start",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 138, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  136: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 137, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  137: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 141, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  138: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 139, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  139: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 142, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  140: { name: "explosion_start",
    pic: 100, state: 3005, wait: 2, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "explosion_start",
    pic: 100, state: 3005, wait: 1, next: 143, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "explosion_start (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 2, action: 40, dvx: 0, dvy: 0, oid: 223, facing: 1
    }
  },
  145: { name: "smoke",
    pic: 16, state: 3005, wait: 1, next: 146, dvx: 550, dvy: 550, dvz: 550, centerx: 285, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  146: { name: "smoke",
    pic: 17, state: 3005, wait: 1, next: 147, dvx: 550, dvy: 550, dvz: 550, centerx: 285, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0
  },
  147: { name: "smoke",
    pic: 18, state: 3005, wait: 1, next: 148, dvx: 550, dvy: 550, dvz: 550, centerx: 285, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "smoke",
    pic: 19, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 285, centery: 370, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});