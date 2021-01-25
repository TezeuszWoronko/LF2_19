define({
  bmp: {
    file: [
      {
        w: 79, h: 79, row: 10, col: 3
      },
      {
        w: 159, h: 79, row: 5, col: 3
      }
    ],
    weapon_hit_sound: "1/002"
  },
  frame: {
  10: { name: "puppet-abort!!!!",
    pic: 4, state: 3005, wait: 4, next: 150, centerx: 0, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002"
  },
  20: { name: "puppet-abort!!!!",
    pic: 4, state: 3005, wait: 4, next: 150, centerx: 0, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002"
  },
  30: { name: "puppet-abort!!!!",
    pic: 4, state: 3005, wait: 4, next: 150, centerx: 0, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/002"
  },
  99: { name: "puppet2-start",
    pic: 0, state: 3005, wait: 3, next: 101, centerx: 0, centery: 100,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  100: { name: "puppet2-start",
    pic: 0, state: 3005, wait: 3, next: 99, centerx: 0, centery: 100
  },
  101: { name: "puppet2",
    pic: 1, state: 3005, wait: 1, next: 113, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 102, injury: 0
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500, dvx: 105, injury: 0
      },
      {
        kind: 8, x: -5000, y: 9190, w: 10000, h: 500, zwidth: 500, dvx: 117, injury: 0
      },
      {
        kind: 8, x: -10, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 5, effect: 4
      }
    ],
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
    pic: 1, state: 3005, wait: 1, next: 113, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 103, injury: 0
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500, dvx: 105, injury: 0
      },
      {
        kind: 8, x: -5000, y: 13190, w: 10000, h: 500, zwidth: 500, dvx: 134, injury: 0
      },
      {
        kind: 8, x: -10, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 5, effect: 4
      }
    ],
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
    pic: 0, state: 3005, wait: 1, next: 113, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 104, injury: 0
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500, dvx: 105, injury: 0
      },
      {
        kind: 8, x: -5000, y: 9190, w: 10000, h: 500, zwidth: 500, dvx: 117, injury: 0
      },
      {
        kind: 8, x: -10, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 5, effect: 4
      }
    ],
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
    pic: 0, state: 3005, wait: 1, next: 113, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 101, injury: 0
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500, dvx: 105, injury: 0
      },
      {
        kind: 8, x: -5000, y: 13190, w: 10000, h: 500, zwidth: 500, dvx: 134, injury: 0
      },
      {
        kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 10, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 5, effect: 4
      }
    ],
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
    pic: 2, state: 3005, wait: 1, next: 113, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 101, injury: 0
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500, dvx: 106, injury: 0
      },
      {
        kind: 8, x: -5000, y: 9190, w: 10000, h: 500, zwidth: 500, dvx: 117, injury: 0
      },
      {
        kind: 8, x: -10, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 5, effect: 4
      }
    ],
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
    pic: 3, state: 3005, wait: 1, next: 113, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 101, injury: 0
      },
      {
        kind: 8, x: -5000, y: 3190, w: 10000, h: 500, zwidth: 500, dvx: 105, injury: 0
      },
      {
        kind: 8, x: -5000, y: 13190, w: 10000, h: 500, zwidth: 500, dvx: 134, injury: 0
      },
      {
        kind: 8, x: -10, y: 5190, w: 50, h: 500, dvx: 107, injury: 0
      },
      {
        kind: 0, x: 20, y: 11, w: 32, h: 60, dvx: 2, bdefend: 100, injury: 5, effect: 4
      }
    ],
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
    pic: 0, state: 3005, wait: 1, next: -108, centerx: 0, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    }
  },
  108: { name: "puppet2",
    pic: 0, state: 3005, wait: 1, next: 109, centerx: 60, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  109: { name: "puppet2",
    pic: 0, state: 3005, wait: 1, next: 110, centerx: 40, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  110: { name: "puppet2",
    pic: 0, state: 3005, wait: 1, next: 111, centerx: 20, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  111: { name: "puppet2",
    pic: 0, state: 3005, wait: 1, next: 101, centerx: 0, centery: 100,
    bdy: {
      kind: 0, x: 29, y: 11, w: 32, h: 60
    },
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500
    }, injury: 0
  },
  113: { name: "puppet-abort",
    pic: 26, state: 3005, wait: 0, next: 114, centerx: 0, centery: 100,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: {
      kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
    }
  },
  114: { name: "puppet-abort",
    pic: 27, state: 3005, wait: 0, next: 115, centerx: 0, centery: 90,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: {
      kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
    }
  },
  115: { name: "puppet-abort",
    pic: 28, state: 3005, wait: 0, next: 116, centerx: 0, centery: 80,
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    },
    itr: {
      kind: 8, x: -5000, y: 19190, w: 10000, h: 500, zwidth: 500, dvx: 157, injury: 0
    }
  },
  116: { name: "puppet-abort",
    pic: 29, state: 3005, wait: 90, next: 158, centerx: 0, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 6, state: 3005, wait: 1, next: 128, centerx: 0, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 128, injury: 0
    }
  },
  118: { name: "puppet2 atk",
    pic: 7, state: 3005, wait: 1, next: 130, centerx: 0, centery: 100,
    itr: [
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 129, injury: 0
      },
      {
        kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 130, injury: 0
      }
    ]
  },
  120: { name: "puppet2 atk",
    pic: 9, state: 3005, wait: 1, next: 131, centerx: -15, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 131, injury: 0
    }
  },
  121: { name: "puppet2 atk",
    pic: 35, state: 3005, wait: 1, next: 132, centerx: -50, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 10, effect: 1
    }
  },
  122: { name: "puppet2 atk",
    pic: 36, state: 3005, wait: 1, next: 133, centerx: -45, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 10, effect: 1
    }
  },
  123: { name: "puppet2 atk",
    pic: 14, state: 3005, wait: 1, next: 101, centerx: -20, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 101, injury: 0
    }
  },
  127: { name: "puppet2 atk",
    pic: 6, state: 3005, wait: 1, next: 117, centerx: 0, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 117, injury: 0
    }
  },
  128: { name: "puppet2 atk",
    pic: 7, state: 3005, wait: 1, next: 118, centerx: 0, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 118, injury: 0
    }
  },
  129: { name: "puppet2 atk",
    pic: 8, state: 3005, wait: 1, next: 119, centerx: 0, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 119, injury: 0
    }
  },
  130: { name: "puppet2 atk",
    pic: 9, state: 3005, wait: 1, next: 120, centerx: -10, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 120, injury: 0
    }
  },
  131: { name: "puppet2 atk",
    pic: 35, state: 3005, wait: 1, next: 121, centerx: -45, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 10, effect: 1
    }
  },
  132: { name: "puppet2 atk",
    pic: 36, state: 3005, wait: 1, next: 122, centerx: -50, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 10, effect: 1
    }
  },
  133: { name: "puppet2 atk",
    pic: 14, state: 3005, wait: 1, next: 101, centerx: -25, centery: 100,
    itr: {
      kind: 8, x: -5000, y: 1190, w: 10000, h: 500, zwidth: 500, dvx: 123, injury: 0
    }
  },
  134: { name: "puppet special",
    pic: 6, state: 3005, wait: 0, next: 135, centerx: 0, centery: 100
  },
  135: { name: "puppet special",
    pic: 7, state: 3005, wait: 0, next: 136, centerx: 0, centery: 100
  },
  136: { name: "puppet special",
    pic: 8, state: 3005, wait: 0, next: 137, centerx: 0, centery: 100
  },
  137: { name: "puppet special",
    pic: 9, state: 3005, wait: 0, next: 139, centerx: 0, centery: 100
  },
  139: { name: "puppet special",
    pic: 36, state: 3005, wait: 1, next: 141, centerx: -30, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 55, effect: 1
    }
  },
  141: { name: "puppet special",
    pic: 36, state: 3005, wait: 1, next: 143, centerx: -60, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 55, effect: 1
    },
    opoint: {
      kind: 1, x: -20, y: 89, action: 1, dvx: 13, dvy: 0, oid: 419, facing: 0
    }
  },
  143: { name: "puppet special",
    pic: 36, state: 3005, wait: 1, next: 145, centerx: -90, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 55, effect: 1
    }
  },
  145: { name: "puppet special",
    pic: 36, state: 3005, wait: 1, next: 147, centerx: -120, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 55, effect: 1
    }
  },
  147: { name: "puppet special",
    pic: 36, state: 3005, wait: 1, next: 148, centerx: -150, centery: 100,
    itr: {
      kind: 0, x: 30, y: 11, w: 80, h: 20, dvx: 13, dvy: -6, fall: 70, bdefend: 100, injury: 55, effect: 1
    }
  },
  148: { name: "puppet special",
    pic: 4, state: 3005, wait: 1, next: 149, centerx: -100, centery: 100
  },
  149: { name: "puppet special",
    pic: 5, state: 3005, wait: 1, next: 101, centerx: -50, centery: 100
  },
  150: { name: "puppet-abort",
    sound: "1/021",
    pic: 15, state: 3005, wait: 1, next: 151, centerx: 0, centery: 100
  },
  151: { name: "puppet-abort",
    pic: 16, state: 3005, wait: 0, next: 152, centerx: 0, centery: 100,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  },
  152: { name: "puppet-abort",
    pic: 17, state: 3005, wait: 0, next: 153, centerx: 0, centery: 100
  },
  153: { name: "puppet-abort",
    pic: 18, state: 3005, wait: 0, next: 154, centerx: 0, centery: 100
  },
  154: { name: "puppet-abort",
    pic: 19, state: 3005, wait: 0, next: 155, centerx: 0, centery: 100
  },
  155: { name: "puppet-abort",
    pic: 20, state: 3005, wait: 0, next: 156, centerx: 0, centery: 100
  },
  156: { name: "puppet-abort",
    pic: 21, state: 3005, wait: 0, next: 157, centerx: 0, centery: 100
  },
  157: { name: "puppet-abort",
    pic: 22, state: 3005, wait: 0, next: 158, centerx: 0, centery: 100
  },
  158: { name: "puppet-abort",
    sound: "1/021",
    pic: 99, state: 3005, wait: 0, next: 1000, centerx: 0, centery: 67,
    opoint: {
      kind: 1, x: 40, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    }
  }
  }
});