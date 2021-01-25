define({
  bmp: {
    file: [
      {
        "file(0-50)": "sprite/tree.png", w: 260, h: 260, row: 3, col: 5
      }
    ],
    weapon_hit_sound: "1/035"
  },
  frame: {
  0: { name: "delete",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "gate",
    pic: 0, state: 18, wait: 0, next: 20, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 10, vrest: 1
      },
      {
        kind: 0, x: 70, y: -564248980000, w: 120, h: 500, dvx: 2, fall: 100, bdefend: 100, injury: 0, effect: 0
      }
    ],
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 10
    }
  },
  20: { name: "gate",
    pic: 0, state: 18, wait: 0, next: 21, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 10, vrest: 1
      },
      {
        kind: 0, x: 70, y: -564248980000, w: 120, h: 500, dvx: 2, fall: 100, bdefend: 100, injury: 0, effect: 0
      }
    ],
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 10
    }
  },
  21: { name: "gate ",
    pic: 1, state: 18, wait: 1, next: 22, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 70, y: -564248980000, w: 120, h: 500, dvx: 2, fall: 100, bdefend: 100, injury: 0, effect: 0
    }
  },
  22: { name: "gate ",
    pic: 2, state: 3006, wait: 1, next: 23, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "gate ",
    pic: 3, state: 3006, wait: 1, next: 24, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  24: { name: "gate ",
    pic: 4, state: 3006, wait: 0, next: 25, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "gate ",
    pic: 5, state: 3006, wait: 0, next: 1000, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "gate",
    pic: 0, state: 18, wait: 0, next: 20, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 10, vrest: 1
      },
      {
        kind: 0, x: 70, y: -564248980000, w: 120, h: 500, dvx: 2, fall: 100, bdefend: 100, injury: 0, effect: 0
      }
    ],
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 10
    }
  },
  68: { name: "tree",
    pic: 0, state: 3006, wait: 0, next: 69, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 15, vrest: 1
      },
      {
        kind: 14, x: 120, y: 80000, w: 32, h: 230, zwidth: 15, vrest: 1
      }
    ],
    opoint: {
      kind: 1, x: 121, y: 105, action: 73, dvx: 0, dvy: -8, oid: 417, facing: 1
    },
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 15
    }
  },
  69: { name: "tree",
    pic: 0, state: 3006, wait: 0, next: 70, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 15, vrest: 1
      },
      {
        kind: 14, x: 120, y: 80000, w: 32, h: 230, zwidth: 15, vrest: 1
      }
    ],
    opoint: {
      kind: 1, x: 151, y: 105, action: 73, dvx: 0, dvy: -8, oid: 417, facing: 0
    },
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 15
    }
  },
  70: { name: "tree",
    pic: 0, state: 3006, wait: 0, next: 71, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 15, vrest: 1
      },
      {
        kind: 14, x: 120, y: 80000, w: 32, h: 230, zwidth: 15, vrest: 1
      }
    ],
    opoint: {
      kind: 1, x: 121, y: 105, action: 73, dvx: 0, dvy: -8, oid: 417, facing: 1
    },
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 15
    }
  },
  71: { name: "tree",
    pic: 0, state: 3003, wait: 0, next: 68, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 120, y: 40, w: 32, h: 230, zwidth: 15, vrest: 1
      },
      {
        kind: 14, x: 120, y: 80000, w: 32, h: 230, zwidth: 15, vrest: 1
      }
    ],
    opoint: {
      kind: 1, x: 151, y: 105, action: 73, dvx: 0, dvy: -8, oid: 417, facing: 0
    },
    bdy: {
      kind: 0, x: 120, y: 40, w: 32, h: 230, zwidth: 15
    }
  },
  72: { name: "tree_cought1",
    pic: 999, state: 9, wait: 3, next: 1000, dvx: 550, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 39, y: 5, vaction: 17, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10, cover: 11
    }
  },
  73: { name: "tree_catch",
    pic: 999, state: 18, wait: 3, next: 1000, dvx: 550, dvy: 0, centerx: 2, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 0, y: 80000, w: 1, h: 1,
      catchingact: [72, 72], caughtact: [130, 130]
    }
  },
  75: { name: "tree_begin",
    pic: 9, state: 3006, wait: 1, next: 76, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/036"
  },
  76: { name: "tree_begin",
    pic: 10, state: 3006, wait: 1, next: 77, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "tree_begin",
    pic: 11, state: 3006, wait: 1, next: 78, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "tree_begin",
    pic: 12, state: 3006, wait: 1, next: 79, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "tree_begin",
    pic: 13, state: 3006, wait: 1, next: 80, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "tree_begin",
    pic: 14, state: 3006, wait: 1, next: 70, dvx: 550, dvy: 0, centerx: 145, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 92, dvx: 0, dvy: 0, oid: 417, facing: 1
    }
  },
  92: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 100, dvx: 0, dvy: 0, oid: 417, facing: 1
    }
  },
  94: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 96, dvx: 0, dvy: 0, oid: 417, facing: 1
    }
  },
  95: { name: "sandstorm",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 98, dvx: 0, dvy: 0, oid: 417, facing: 1
    }
  },
  96: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  97: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 101, dvx: 0, dvy: 0, oid: 417, facing: 1
    }
  },
  98: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  99: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 102, dvx: 0, dvy: 0, oid: 417, facing: 1
    }
  },
  100: { name: "sandstorm",
    pic: 100, state: 3005, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "sandstorm",
    pic: 100, state: 3005, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "sandstorm (activate object)",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 85, action: 75, dvx: 0, dvy: 0, dvz: 0, oid: 417, facing: 0
    }
  }
  }
});