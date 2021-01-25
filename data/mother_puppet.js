define({
  bmp: { file: [],
    weapon_hit_sound: "1/002"
  },
  frame: {
  10: { name: "puppet-abort!!!!",
    pic: 4, state: 3006, wait: 4, next: 150, centerx: 88, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002"
  },
  20: { name: "puppet-abort!!!!",
    pic: 4, state: 3006, wait: 4, next: 150, centerx: 88, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002"
  },
  30: { name: "puppet-abort!!!!",
    pic: 4, state: 3006, wait: 4, next: 150, centerx: 88, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002"
  },
  99: { name: "puppet2-start",
    pic: 0, state: 3006, wait: 3, next: 101, centerx: 88, centery: 100,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  100: { name: "puppet2-start",
    pic: 0, state: 3006, wait: 3, next: 99, centerx: 88, centery: 100
  },
  101: { name: "puppet2",
    pic: 1, state: 3006, wait: 1, next: 113, centerx: 88, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 7190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: 74, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 50, effect: 4
      }
    ], injury: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 11, w: 32, h: 60
      },
      {
        kind: 0, x: 29, y: 19000, w: 32, h: 500
      }
    ]
  },
  102: { name: "puppet2",
    pic: 1, state: 3006, wait: 1, next: 113, centerx: 88, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 15190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: 74, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 50, effect: 4
      }
    ], injury: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 11, w: 32, h: 60
      },
      {
        kind: 0, x: 29, y: 19000, w: 32, h: 500
      }
    ]
  },
  103: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: 113, centerx: 88, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 7190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: 74, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 25, effect: 4
      }
    ], injury: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 11, w: 32, h: 60
      },
      {
        kind: 0, x: 29, y: 19000, w: 32, h: 500
      }
    ]
  },
  104: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: 113, centerx: 88, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 15190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 10, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 25, effect: 4
      }
    ], injury: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 11, w: 32, h: 60
      },
      {
        kind: 0, x: 29, y: 19000, w: 32, h: 500
      }
    ]
  },
  105: { name: "puppet2 run",
    pic: 2, state: 3006, wait: 1, next: 113, centerx: 88, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 15190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: 74, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 25, effect: 4
      }
    ], injury: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 11, w: 32, h: 60
      },
      {
        kind: 0, x: 29, y: 19000, w: 32, h: 500
      }
    ]
  },
  106: { name: "puppet2 run",
    pic: 3, state: 3006, wait: 1, next: 113, centerx: 88, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 7190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: 74, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 25, effect: 4
      }
    ], injury: 0,
    bdy: [
      {
        kind: 0, x: 29, y: 11, w: 32, h: 60
      },
      {
        kind: 0, x: 29, y: 19000, w: 32, h: 500
      }
    ]
  },
  107: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: -108, centerx: 88, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    }
  },
  108: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: 109, centerx: 20, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  109: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: 110, centerx: 40, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  110: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: 111, centerx: 60, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  111: { name: "puppet2",
    pic: 0, state: 3006, wait: 1, next: 101, centerx: 88, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  113: { name: "puppet-abort",
    pic: 13, state: 3006, wait: 0, next: 114, centerx: 88, centery: 100,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: {
      kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
    }
  },
  114: { name: "puppet-abort",
    pic: 14, state: 3006, wait: 0, next: 115, centerx: 88, centery: 90,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: {
      kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
    }
  },
  115: { name: "puppet-abort",
    pic: 28, state: 3006, wait: 0, next: 116, centerx: 88, centery: 80,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: {
      kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
    }
  },
  116: { name: "puppet-abort",
    pic: 29, state: 3006, wait: 90, next: 158, centerx: 88, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
      },
      {
        kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
      }
    ], injury: 0
  },
  117: { name: "puppet2 atk",
    pic: 6, state: 3006, wait: 1, next: 118, centerx: 88, centery: 100
  },
  118: { name: "puppet2 atk",
    pic: 7, state: 3006, wait: 1, next: 119, centerx: 78, centery: 100
  },
  119: { name: "puppet2 atk",
    pic: 8, state: 3006, wait: 1, next: 120, centerx: 68, centery: 100
  },
  120: { name: "puppet2 atk",
    pic: 9, state: 3006, wait: 1, next: 121, centerx: 58, centery: 100
  },
  121: { name: "puppet2 atk",
    pic: 10, state: 3006, wait: 1, next: 122, centerx: 48, centery: 100,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 2, fall: 40, bdefend: 100, injury: 25, effect: 1
    }
  },
  122: { name: "puppet2 atk",
    pic: 11, state: 3006, wait: 1, next: 123, centerx: 38, centery: 100
  },
  123: { name: "puppet2 atk",
    pic: 12, state: 3006, wait: 1, next: 101, centerx: 58, centery: 100
  },
  150: { name: "puppet-abort",
    sound: "1/021",
    pic: 15, state: 3006, wait: 1, next: 151, centerx: 88, centery: 100
  },
  151: { name: "puppet-abort",
    pic: 16, state: 3006, wait: 0, next: 152, centerx: 88, centery: 100,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  152: { name: "puppet-abort",
    pic: 17, state: 3006, wait: 0, next: 153, centerx: 88, centery: 100
  },
  153: { name: "puppet-abort",
    pic: 18, state: 3006, wait: 0, next: 154, centerx: 88, centery: 100
  },
  154: { name: "puppet-abort",
    pic: 19, state: 3006, wait: 0, next: 155, centerx: 88, centery: 100
  },
  155: { name: "puppet-abort",
    pic: 20, state: 3006, wait: 0, next: 156, centerx: 88, centery: 100
  },
  156: { name: "puppet-abort",
    pic: 21, state: 3006, wait: 0, next: 157, centerx: 88, centery: 100
  },
  157: { name: "puppet-abort",
    pic: 22, state: 3006, wait: 0, next: 158, centerx: 88, centery: 100
  },
  158: { name: "puppet-abort",
    sound: "1/021",
    pic: 99, state: 3006, wait: 0, next: 1000, centerx: 88, centery: 76,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  160: { name: "puppet2 atk",
    pic: 23, state: 3006, wait: 1, next: 161, centerx: 50, centery: 100,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 10, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  161: { name: "puppet2 atk",
    pic: 23, state: 3006, wait: 1, next: 162, centerx: 34, centery: 93,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 10, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  162: { name: "puppet2 atk",
    pic: 24, state: 3006, wait: 0, next: 163, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 5, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  163: { name: "puppet2 atk",
    pic: 25, state: 3006, wait: 0, next: 164, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 0, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  164: { name: "puppet2 atk",
    pic: 26, state: 3006, wait: 0, next: 165, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: -5, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  165: { name: "puppet2 atk",
    pic: 24, state: 3006, wait: 0, next: 166, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 5, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  166: { name: "puppet2 atk",
    pic: 25, state: 3006, wait: 0, next: 167, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 0, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  167: { name: "puppet2 atk",
    pic: 26, state: 3006, wait: 0, next: 168, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: -5, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  168: { name: "puppet2 atk",
    pic: 24, state: 3006, wait: 0, next: 169, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 5, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  169: { name: "puppet2 atk",
    pic: 25, state: 3006, wait: 0, next: 170, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: 0, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  170: { name: "puppet2 atk",
    pic: 26, state: 3006, wait: 0, next: 171, centerx: 34, centery: 83,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvx: -5, fall: 5, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  171: { name: "puppet2 atk",
    pic: 27, state: 3006, wait: 1, next: 172, centerx: 50, centery: 93,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvy: -20, dvx: 15, fall: 70, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  },
  172: { name: "puppet2 atk",
    pic: 27, state: 3006, wait: 1, next: 101, centerx: 88, centery: 100,
    itr: {
      kind: 0, x: 29, y: 11, w: 50, h: 60, dvy: -20, dvx: -15, fall: 70, vrest: 3, bdefend: 100, injury: 25, effect: 1
    }
  }
  }
});