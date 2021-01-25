define({
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/monster.png", w: 130, h: 130, row: 5, col: 5
      }
    ]
  },
  frame: {
  0: { name: "disap",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "body_atk",
    pic: 4, state: 3003, wait: 2, next: 11, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "body_atk",
    pic: 5, state: 3003, wait: 10, next: 50, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    opoint: {
      kind: 1, x: 35, y: 95, action: 100, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  20: { name: "body_atk",
    pic: 5, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "body_atk",
    pic: 5, state: 3003, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "body_atk",
    pic: 6, state: 3003, wait: 1, next: 32, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "body_atk",
    pic: 7, state: 3003, wait: 1, next: 33, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "body_atk",
    pic: 8, state: 3003, wait: 100, next: 34, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  34: { name: "body_atk",
    pic: 999, state: 3003, wait: 1, next: 35, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "body_atk",
    pic: 8, state: 3003, wait: 1, next: 36, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "body_atk",
    pic: 999, state: 3003, wait: 1, next: 37, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "body_atk",
    pic: 8, state: 3003, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "puff",
    pic: 0, state: 3005, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  41: { name: "puff",
    pic: 1, state: 3005, wait: 2, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "puff",
    pic: 2, state: 3005, wait: 2, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "puff",
    pic: 3, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "club",
    pic: 999, state: 18, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "club",
    pic: 4, state: 18, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 130, action: 40, dvx: 0, dvy: 0, oid: 439, facing: 0
    }
  },
  47: { name: "club",
    pic: 5, state: 18, wait: 2, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "club",
    pic: 6, state: 18, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 45, y: 43, w: 100, h: 89, zwidth: 15, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 125, effect: 0
    }
  },
  49: { name: "club",
    pic: 7, state: 18, wait: 1, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    itr: {
      kind: 0, x: 45, y: 43, w: 100, h: 89, zwidth: 15, dvx: 0, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 125, effect: 0
    },
    opoint: {
      kind: 1, x: 80, y: 130, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  50: { name: "club",
    pic: 8, state: 18, wait: 10, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "club",
    pic: 8, state: 18, wait: 5, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 130, action: 40, dvx: 0, dvy: 0, oid: 439, facing: 0
    }
  },
  55: { name: "claw",
    pic: 999, state: 18, wait: 0, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "claw",
    pic: 9, state: 18, wait: 1, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 130, action: 40, dvx: 0, dvy: 0, oid: 439, facing: 0
    }
  },
  57: { name: "claw",
    pic: 10, state: 18, wait: 2, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  58: { name: "claw",
    pic: 11, state: 18, wait: 2, next: 59, dvx: 25, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 58, y: 73, w: 73, h: 60, dvx: 20, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 100, effect: 1
    }
  },
  59: { name: "claw",
    pic: 12, state: 18, wait: 2, next: 60, dvx: 25, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 58, y: 73, w: 73, h: 60, dvx: 20, dvy: -5, fall: 100, vrest: 20, bdefend: 100, injury: 100, effect: 1
    }
  },
  60: { name: "claw",
    pic: 13, state: 18, wait: 4, next: 61, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "claw",
    pic: 13, state: 18, wait: 5, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 130, action: 40, dvx: 0, dvy: 0, oid: 439, facing: 0
    }
  },
  65: { name: "ground",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -100, y: 40, w: 500, h: 95, zwidth: 9999, dvx: 66
    }
  },
  66: { name: "ground",
    pic: 999, state: 3005, wait: 0, next: 67, dvx: 50, dvy: 0, dvz: 0, centerx: 65, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  67: { name: "ground",
    pic: 15, state: 18, wait: 0, next: 68, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 127, action: 95, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  68: { name: "ground",
    pic: 16, state: 18, wait: 0, next: 69, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "ground",
    pic: 17, state: 18, wait: 0, next: 70, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 40, w: 66, h: 95, dvx: 0, dvy: -25, fall: 100, vrest: 20, bdefend: 100, injury: 100, effect: 0
    }
  },
  70: { name: "ground",
    pic: 18, state: 18, wait: 0, next: 71, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 40, w: 66, h: 95, dvx: 0, dvy: -25, fall: 100, vrest: 20, bdefend: 100, injury: 100, effect: 0
    }
  },
  71: { name: "ground",
    pic: 18, state: 18, wait: 5, next: 1000, dvx: 550, dvy: 0, dvz: 0, centerx: 65, centery: 128, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 65, y: 130, action: 40, dvx: 0, dvy: 0, oid: 439, facing: 0
    }
  }
  }
});