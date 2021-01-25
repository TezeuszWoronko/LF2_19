define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/puppet_2.png", w: 79, h: 79, row: 10, col: 10
      },
      {
        "file(100-149)": "sprite/puppet_2.png", w: 159, h: 79, row: 5, col: 10
      },
      {
        "file(150-199)": "sprite/puppet_2.png", w: 79, h: 159, row: 10, col: 5
      },
      {
        "file(200-224)": "sprite/puppet_2.png", w: 159, h: 159, row: 5, col: 5
      }
    ]
  },
  frame: {
  0: { name: "puppet_3_start_1",
    pic: 999, state: 400, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "puppet_3_start_1",
    pic: 94, state: 3006, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "puppet_3_start_1",
    pic: 95, state: 3006, wait: 1, next: 3, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  3: { name: "puppet_3_attack_1",
    pic: 183, state: 3006, wait: 1, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  4: { name: "puppet_3_attack_1",
    pic: 184, state: 3006, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  5: { name: "puppet_3_attack_1",
    pic: 185, state: 3006, wait: 1, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  6: { name: "puppet_3_attack_1",
    pic: 186, state: 3006, wait: 1, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  7: { name: "puppet_3_attack_1",
    pic: 135, state: 3006, wait: 3, next: 8, dvx: 30, dvy: 0, dvz: 0, centerx: 79, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 79, y: 30, w: 79, h: 30, bdefend: 60, dvx: 5, dvy: -6, injury: 60, effect: 1, fall: 70
    },
    bdy: {
      kind: 0, x: 60, y: 10, w: 40, h: 69
    }
  },
  8: { name: "puppet_3_attack_1",
    pic: 142, state: 3006, wait: 1, next: 10, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 79, y: 30, w: 79, h: 30, bdefend: 30, dvx: 5, dvy: -6, injury: 30, effect: 1, fall: 30
    },
    bdy: {
      kind: 0, x: 60, y: 10, w: 40, h: 69
    }
  },
  10: { name: "puppet_3_end_1",
    pic: 96, state: 3006, wait: 1, next: 11, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "puppet_3_end_1",
    pic: 97, state: 3006, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "puppet_3_end_1",
    pic: 999, state: 3005, wait: 15, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "puppet_3_end_2",
    pic: 98, state: 3006, wait: 1, next: 21, dvx: 0, dvy: -5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "puppet_3_end_2",
    pic: 99, state: 3006, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "puppet_3_end_2",
    pic: 999, state: 3005, wait: 30, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "puppet_3_end_2",
    pic: 94, state: 3006, wait: 1, next: 31, dvx: -5, dvy: -5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "puppet_3_end_2",
    pic: 95, state: 3006, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "puppet_3_end_2",
    pic: 999, state: 3005, wait: 30, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "puppet_3_start_2",
    pic: 999, state: 400, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "puppet_3_start_2",
    pic: 96, state: 3006, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "puppet_3_start_2",
    pic: 97, state: 3006, wait: 1, next: 43, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  43: { name: "puppet_3_attack_2",
    pic: 183, state: 3006, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  44: { name: "puppet_3_attack_2",
    pic: 184, state: 3006, wait: 1, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  45: { name: "puppet_3_attack_2",
    pic: 185, state: 3006, wait: 1, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  46: { name: "puppet_3_attack_2",
    pic: 186, state: 3006, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  47: { name: "puppet_3_attack_2",
    pic: 219, state: 3006, wait: 1, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 79, y: 30, w: 79, h: 100, bdefend: 60, dvx: 3, dvy: -6, injury: 90, effect: 1, fall: 70
    },
    bdy: {
      kind: 0, x: 20, y: 50, w: 40, h: 69
    }
  },
  48: { name: "puppet_3_attack_2",
    pic: 220, state: 3006, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 79, y: 30, w: 79, h: 100, bdefend: 40, dvx: 3, dvy: -6, injury: 70, effect: 1, fall: 50
    },
    bdy: {
      kind: 0, x: 20, y: 50, w: 40, h: 69
    }
  },
  49: { name: "puppet_3_attack_2",
    pic: 221, state: 3006, wait: 1, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 79, y: 30, w: 79, h: 100, bdefend: 30, dvx: 3, dvy: -6, injury: 50, effect: 1, fall: 30
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  50: { name: "puppet_3_attack_2",
    pic: 77, state: 3006, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  51: { name: "puppet_3_attack_2",
    pic: 87, state: 3006, wait: 1, next: 20, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  60: { name: "puppet_3_start_3",
    pic: 999, state: 400, wait: 2, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "puppet_3_start_3",
    pic: 96, state: 3006, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "puppet_3_start_3",
    pic: 97, state: 3006, wait: 1, next: 63, dvx: 2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  63: { name: "puppet_3_attack_3",
    pic: 183, state: 3006, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  66: { name: "puppet_3_attack_3",
    pic: 186, state: 3006, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 120, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 10, w: 40, h: 69
    }
  },
  67: { name: "puppet_3_attack_3",
    pic: 86, state: 3006, wait: 30, next: 30, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 20, y: 50, w: 40, h: 69
    },
    opoint: {
      kind: 1, x: 39, y: 39, action: 68, dvx: 20, dvy: 0, oid: 512, facing: 0
    }
  },
  68: { name: "puppet_3_sycle",
    pic: 87, state: 3005, wait: 1, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, bdefend: 60, dvx: 9, dvy: -9, vrest: 20, injury: 35, effect: 1, fall: 100
    }
  },
  69: { name: "puppet_3_sycle",
    pic: 88, state: 3005, wait: 1, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, bdefend: 60, dvx: 9, dvy: -9, vrest: 20, injury: 35, effect: 1, fall: 100
    }
  },
  70: { name: "puppet_3_sycle",
    pic: 89, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, bdefend: 60, dvx: 9, dvy: -9, vrest: 20, injury: 35, effect: 1, fall: 100
    }
  },
  71: { name: "puppet_3_sycle",
    pic: 72, state: 3005, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 79, h: 79, bdefend: 60, dvx: 9, dvy: -9, vrest: 20, injury: 35, effect: 1, fall: 100
    }
  },
  88: { name: "summoning",
    pic: 999, state: 3005, wait: 27, next: 89, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "summoning",
    pic: 999, state: 3005, wait: 7, next: 95, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 42, y: 51, action: 90, dvx: 0, dvy: 0, oid: 512, facing: 0
    }
  },
  90: { name: "summoning",
    pic: 999, state: 3005, wait: 0, next: 91, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "summoning",
    pic: 999, state: 3005, wait: 0, next: 92, dvx: 100, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 32, hit_d: 32, hit_j: 25,
    opoint: {
      kind: 1, x: 42, y: 51, action: 0, dvx: 0, dvy: 0, oid: 512, facing: 0
    }
  },
  92: { name: "summoning",
    pic: 999, state: 3005, wait: 34, next: 93, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "summoning",
    pic: 999, state: 3005, wait: 0, next: 94, dvx: -200, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 32, hit_d: 32, hit_j: 99,
    opoint: {
      kind: 1, x: 42, y: 51, action: 40, dvx: 0, dvy: 0, oid: 512, facing: 1
    }
  },
  94: { name: "summoning",
    pic: 999, state: 3005, wait: 35, next: 95, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "summoning",
    pic: 999, state: 3005, wait: 0, next: 96, dvx: 100, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 32, hit_d: 32, hit_j: 25,
    opoint: {
      kind: 1, x: 42, y: 51, action: 60, dvx: 0, dvy: 0, oid: 512, facing: 0
    }
  },
  96: { name: "summoning",
    pic: 999, state: 3005, wait: 36, next: -91, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});