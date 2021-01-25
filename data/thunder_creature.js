define({
  bmp: {
    file: [
      {
        "file(0-19)": "sprite/thunder_creature.png", w: 140, h: 130, row: 5, col: 5
      }
    ]
  },
  frame: {
  10: { name: "body_atk",
    pic: 4, state: 3003, wait: 0, next: 11, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "body_atk",
    pic: 4, state: 3003, wait: 0, next: 12, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "body_atk",
    pic: 4, state: 3003, wait: 5, next: 65, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "body_atk",
    pic: 81, state: 3002, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "body_atk",
    pic: 12, state: 18, wait: 1, next: 31, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: 0, y: 800000, w: 140, h: 630, dvx: 81
    }
  },
  31: { name: "body_atk",
    pic: 12, state: 3003, wait: 1, next: 80, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "body_atk",
    pic: 8, state: 18, wait: 1, next: 50, dvx: 100, dvy: 0, dvz: 550, centerx: 67, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 15, w: 71, h: 40, dvx: 15, dvy: -15, fall: 100, arest: 10, bdefend: 20, injury: 80, effect: 0
    }
  },
  55: { name: "water",
    pic: 5, state: 18, wait: 1, next: 56, dvx: 550, dvy: 0, dvz: 550, centerx: 92, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 27, w: 107, h: 107, dvx: 9, dvy: -10, fall: 999, vrest: 20, bdefend: 70, injury: 95, effect: 0
    }
  },
  56: { name: "water",
    pic: 6, state: 18, wait: 1, next: 57, dvx: 550, dvy: 0, dvz: 550, centerx: 92, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 27, w: 107, h: 107, dvx: 9, dvy: -10, fall: 999, vrest: 20, bdefend: 70, injury: 95, effect: 0
    }
  },
  57: { name: "water",
    pic: 7, state: 18, wait: 1, next: 58, dvx: 550, dvy: 0, dvz: 550, centerx: 92, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 27, w: 107, h: 107, dvx: 9, dvy: -10, fall: 999, vrest: 20, bdefend: 70, injury: 95, effect: 0
    }
  },
  58: { name: "water",
    pic: 8, state: 18, wait: 1, next: 59, dvx: 550, dvy: 0, dvz: 550, centerx: 92, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 27, w: 107, h: 107, dvx: 9, dvy: -10, fall: 999, vrest: 20, bdefend: 70, injury: 95, effect: 0
    }
  },
  59: { name: "water",
    pic: 9, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 0, dvz: 550, centerx: 92, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 27, w: 107, h: 107, dvx: 9, dvy: -10, fall: 999, vrest: 20, bdefend: 70, injury: 95, effect: 0
    }
  },
  60: { name: "air",
    pic: 10, state: 18, wait: 1, next: 61, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/043",
    itr: {
      kind: 0, x: 49, y: 0, w: 160, h: 300, dvx: 8, dvy: -12, vrest: 20, zwidth: 10, fall: 999, bdefend: 100, injury: 65
    }
  },
  61: { name: "air",
    pic: 11, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 66, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 130, action: 245, dvx: 0, dvy: 0, oid: 30, facing: 0
    },
    itr: {
      kind: 8, x: 0, y: -3000000, w: 100, zwidth: 50, h: 79, dvx: 105
    }
  },
  66: { name: "flying",
    pic: 1, state: 3000, wait: 3, next: 67, dvx: 5, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 130, action: 245, dvx: 0, dvy: 0, oid: 30, facing: 0
    },
    itr: {
      kind: 8, x: 0, y: -3000000, w: 100, zwidth: 50, h: 79, dvx: 105
    }
  },
  67: { name: "flying",
    pic: 2, state: 3000, wait: 3, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 14,
    opoint: {
      kind: 1, x: 67, y: 130, action: 245, dvx: 0, dvy: 0, oid: 30, facing: 0
    },
    itr: {
      kind: 8, x: 0, y: -3000000, w: 100, zwidth: 50, h: 79, dvx: 105
    }
  },
  68: { name: "flying",
    pic: 3, state: 3000, wait: 3, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 59, action: 60, dvx: 0, dvy: 0, oid: 450, facing: 0
    }
  },
  70: { name: "summon",
    pic: 999, state: 3005, wait: 0, next: 71, dvx: 550, dvy: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "summon",
    pic: 999, state: 3005, wait: 5, next: 65, dvx: 550, dvy: 0, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 150, y: 50, action: 210, dvx: 0, dvy: 0, oid: 446, facing: 0
    }
  },
  80: { name: "dead",
    pic: 12, state: 3000, wait: 1, next: 0, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 5800065, w: 95, h: 65
    }
  },
  81: { name: "revived",
    pic: 12, state: 3000, wait: 0, next: 82, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "revived",
    pic: 12, state: 3000, wait: 20, next: 65, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 67, y: 115, action: 356, dvx: 0, dvy: 0, oid: 57, facing: 0
    }
  },
  85: { name: "iron_stick",
    pic: 13, state: 18, wait: 1, next: 86, dvx: 550, dvy: 0, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "iron_stick",
    pic: 14, state: 18, wait: 1, next: 87, dvx: 550, dvy: 0, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "iron_stick",
    pic: 15, state: 18, wait: 1, next: 88, dvx: 550, dvy: 0, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "iron_stick",
    pic: 16, state: 18, wait: 1, next: 89, dvx: 550, dvy: 0, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "iron_stick",
    pic: 17, state: 18, wait: 6, next: 95, dvx: 550, dvy: 0, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "iron_stick",
    pic: 999, state: 3005, wait: 5, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "iron_stick_down",
    pic: 17, state: 18, wait: 1, next: 96, dvx: 35, dvy: 40, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 62, y: 59, w: 34, h: 51, dvx: 0, dvy: -7, fall: 100, arest: 10, bdefend: 100, injury: 75, effect: 1
    }
  },
  96: { name: "iron_stick_down",
    pic: 18, state: 18, wait: 0, next: 97, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "iron_stick_down",
    pic: 19, state: 18, wait: 30, next: 98, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 50, y: 28, w: 22, h: 38, dvx: 0, dvy: 0, fall: 0, arest: 3, bdefend: 0
      },
      {
        kind: 14, x: 67, y: 61, w: 33, h: 49, dvx: 0, dvy: 0, fall: 0, arest: 3, bdefend: 0
      },
      {
        kind: 14, x: 50, y: 80000, w: 22, h: 38, dvx: 0, dvy: 0, fall: 0, arest: 3, bdefend: 0
      },
      {
        kind: 14, x: 67, y: 80000, w: 33, h: 49, dvx: 0, dvy: 0, fall: 0, arest: 3, bdefend: 0
      }
    ]
  },
  98: { name: "iron_stick",
    pic: 15, state: 18, wait: 1, next: 99, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  99: { name: "iron_stick",
    pic: 14, state: 18, wait: 1, next: 100, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "iron_stick",
    pic: 13, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  105: { name: "body_atk2",
    pic: 4, state: 3003, wait: 0, next: 106, dvx: 550, dvy: 550, dvz: 550, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  106: { name: "body_atk2",
    pic: 4, state: 3003, wait: 0, next: 107, dvx: 550, dvy: 550, dvz: 550, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  107: { name: "body_atk2",
    pic: 4, state: 3003, wait: 0, next: 108, dvx: 550, dvy: 550, dvz: 550, centerx: 62, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0
  },
  108: { name: "body_atk2",
    pic: 4, state: 3003, wait: 0, next: 109, dvx: 550, dvy: 550, dvz: 550, centerx: 72, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 180, y: 95, action: 60, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  },
  109: { name: "body_atk2",
    pic: 4, state: 3003, wait: 10, next: 65, dvx: 550, dvy: 550, dvz: 550, centerx: 67, centery: 130, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 360, y: 95, action: 60, dvx: 0, dvy: 0, oid: 407, facing: 0
    }
  }
  }
});