define({
  bmp: {
    file: [
      {
        "file(0-50)": "sprite/wood.png", w: 140, h: 115, row: 5, col: 4
      }
    ],
    weapon_hit_sound: "1/035"
  },
  frame: {
  0: { name: "delete",
    pic: 999, state: 9997, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "shield",
    pic: 13, state: 3006, wait: 0, next: 31, dvx: 550, dvy: 0, centerx: 55, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 14, x: 0, y: 14, w: 100, h: 98, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      }
    ]
  },
  20: { name: "shield",
    pic: 13, state: 3006, wait: 0, next: 31, dvx: 550, dvy: 0, centerx: 55, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 14, x: 0, y: 14, w: 100, h: 98, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      }
    ]
  },
  30: { name: "shield",
    pic: 13, state: 3006, wait: 0, next: 31, dvx: 550, dvy: 0, centerx: 55, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 14, x: 0, y: 14, w: 100, h: 98, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      }
    ]
  },
  31: { name: "shield",
    pic: 13, state: 3006, wait: 0, next: 113, dvx: 550, dvy: 0, centerx: 55, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 14, x: 0, y: 14, w: 100, h: 98, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      }
    ]
  },
  100: { name: "shield",
    pic: 0, state: 3006, wait: 0, next: 101, dvx: 10, dvy: 0, centerx: 40, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "shield",
    pic: 1, state: 3006, wait: 0, next: 102, dvx: 1, dvy: 0, centerx: 40, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 115, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    }
  },
  102: { name: "shield",
    pic: 2, state: 3006, wait: 0, next: 103, dvx: 1, dvy: 0, centerx: 20, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "shield",
    pic: 3, state: 3006, wait: 0, next: 104, dvx: 1, dvy: 0, centerx: 20, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
    }
  },
  104: { name: "shield",
    pic: 4, state: 3006, wait: 1, next: 124, dvx: 1, dvy: 0, centerx: 30, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 55, y: 115, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 105, zwidth: 5
      }
    ]
  },
  105: { name: "shield",
    pic: 5, state: 3006, wait: 1, next: 123, dvx: 1, dvy: 0, centerx: 30, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 106, zwidth: 5
      }
    ]
  },
  106: { name: "shield",
    pic: 6, state: 3006, wait: 1, next: 122, dvx: 1, dvy: 0, centerx: 30, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 107, zwidth: 5
      }
    ]
  },
  107: { name: "shield",
    pic: 7, state: 3006, wait: 1, next: 121, dvx: 1, dvy: 0, centerx: 35, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 50, y: 115, action: 90, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 108, zwidth: 5
      }
    ]
  },
  108: { name: "shield",
    pic: 8, state: 3006, wait: 1, next: 120, dvx: 1, dvy: 0, centerx: 35, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 109, zwidth: 5
      }
    ]
  },
  109: { name: "shield",
    pic: 9, state: 3006, wait: 1, next: 119, dvx: 1, dvy: 0, centerx: 35, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 14, x: 8, y: 80000, w: 119, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 110, zwidth: 5
      }
    ]
  },
  110: { name: "shield",
    pic: 10, state: 3006, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 7, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 14, x: 8, y: 80000, w: 119, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 111, zwidth: 5
      }
    ]
  },
  111: { name: "shield",
    pic: 11, state: 3006, wait: 1, next: 117, dvx: 0, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 8, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 112, zwidth: 5
      }
    ]
  },
  112: { name: "shield",
    pic: 12, state: 3006, wait: 1, next: 116, dvx: 0, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 0, x: 13, y: 30, w: 114, h: 86, zwidth: 25, dvx: 8, dvy: -7, fall: 100, vrest: 20, bdefend: 100, injury: 45, effect: 0
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 113, zwidth: 5
      }
    ]
  },
  113: { name: "shield",
    pic: 13, state: 3006, wait: 1, next: 115, dvx: 550, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 14, x: 0, y: 14, w: 100, h: 98, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 114, zwidth: 5
      }
    ]
  },
  114: { name: "shield",
    pic: 13, state: 3006, wait: 1, next: 115, dvx: 550, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 5, y: 14, w: 121, h: 98, zwidth: 25
    },
    itr: [
      {
        kind: 14, x: 0, y: 80000, w: 110, h: 95, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 14, x: 0, y: 14, w: 100, h: 98, dvx: 0, zwidth: 25, dvy: 0, fall: 0, vrest: 1
      },
      {
        kind: 8, x: 0, y: -29748692786, w: 100, h: 98, dvx: 113, zwidth: 5
      }
    ]
  },
  115: { name: "shield",
    pic: 12, state: 3005, wait: 0, next: 116, dvx: 550, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "shield",
    pic: 11, state: 3005, wait: 0, next: 117, dvx: 550, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "shield",
    pic: 10, state: 3005, wait: 0, next: 118, dvx: 550, dvy: 0, centerx: 35, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "shield",
    pic: 9, state: 3005, wait: 0, next: 119, dvx: 550, dvy: 0, centerx: 35, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "shield",
    pic: 8, state: 3005, wait: 0, next: 120, dvx: 550, dvy: 0, centerx: 35, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "shield",
    pic: 7, state: 3005, wait: 0, next: 121, dvx: 550, dvy: 0, centerx: 35, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "shield",
    pic: 6, state: 3005, wait: 0, next: 122, dvx: 550, dvy: 0, centerx: 30, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "shield",
    pic: 5, state: 3005, wait: 0, next: 123, dvx: 550, dvy: 0, centerx: 30, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "shield",
    pic: 4, state: 3005, wait: 0, next: 124, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "shield",
    pic: 3, state: 3005, wait: 0, next: 125, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "shield",
    pic: 2, state: 3005, wait: 0, next: 126, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "shield",
    pic: 1, state: 3005, wait: 0, next: 127, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "shield",
    pic: 0, state: 3005, wait: 0, next: 1000, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "wood",
    pic: 100, state: 3005, wait: 0, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "wood",
    pic: 100, state: 3005, wait: 0, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 132, dvx: 0, dvy: 0, oid: 441, facing: 1
    }
  },
  132: { name: "wood",
    pic: 100, state: 3005, wait: 0, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "wood ",
    pic: 100, state: 3005, wait: 0, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 110, y: 0, action: 140, dvx: 0, dvy: 0, oid: 441, facing: 1
    }
  },
  134: { name: "wood",
    pic: 100, state: 3005, wait: 0, next: 135, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 136, dvx: 0, dvy: 0, oid: 441, facing: 1
    }
  },
  135: { name: "wood",
    pic: 100, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 80, y: 0, action: 138, dvx: 0, dvy: 0, oid: 441, facing: 1
    }
  },
  136: { name: "wood",
    pic: 100, state: 3005, wait: 1, next: 137, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 70
  },
  137: { name: "wood",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 141, dvx: 0, dvy: 0, oid: 441, facing: 1
    }
  },
  138: { name: "wood",
    pic: 100, state: 3005, wait: 1, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 30
  },
  139: { name: "wood",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 0, action: 142, dvx: 0, dvy: 0, oid: 441, facing: 1
    }
  },
  140: { name: "wood",
    pic: 100, state: 3005, wait: 2, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "wood",
    pic: 100, state: 3005, wait: 1, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "wood",
    pic: 100, state: 3005, wait: 1, next: 143, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "wood (activate object)",
    pic: 1000, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 0, action: 145, dvx: 0, dvy: 0, oid: 441, facing: 0
    }
  },
  145: { name: "cage",
    pic: 0, state: 3006, wait: 0, next: 145, dvx: 0, dvy: 0, centerx: 50, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 0, y: 80000, w: 114, h: 86, zwidth: 50, vrest: 1
    }
  },
  150: { name: "shield",
    pic: 15, state: 3005, wait: 2, next: 151, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "shield",
    pic: 16, state: 3005, wait: 2, next: 152, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "shield",
    pic: 17, state: 3005, wait: 2, next: 153, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "shield",
    pic: 18, state: 3005, wait: 8, next: 1000, dvx: 550, dvy: 0, centerx: 30, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});