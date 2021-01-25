define({
  bmp: {
    file: [
      {
        "file(0-2)": "sprite/wave1.png", w: 230, h: 115, row: 3, col: 1
      },
      {
        "file(3-5)": "sprite/wave2.png", w: 500, h: 280, row: 1, col: 3
      },
      {
        "file(6-7)": "sprite/wave3.png", w: 720, h: 260, row: 1, col: 2
      },
      {
        "file(8-10)": "sprite/wave4.png", w: 920, h: 235, row: 1, col: 3
      },
      {
        "file(11-13)": "sprite/wave5.png", w: 950, h: 75, row: 1, col: 3
      },
      {
        "file(14-30)": "sprite/jiroubou_rock1.png", w: 291, h: 191, row: 4, col: 4
      },
      {
        "file(31-35)": "sprite/kyubi_arms.png", w: 159, h: 159, row: 5, col: 1
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
  100: { name: "tidal",
    pic: 0, state: 18, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 115, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/wave",
    itr: {
      kind: 0, x: 32, y: 75, w: 160, h: 90, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14
    }
  },
  101: { name: "tidal",
    pic: 1, state: 18, wait: 2, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 115, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 40, w: 160, h: 135, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  102: { name: "tidal",
    pic: 2, state: 18, wait: 2, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 115, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 230, h: 165, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  103: { name: "tidal",
    pic: 3, state: 18, wait: 2, next: 104, dvx: 0, dvy: 0, dvz: 0, centerx: 250, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 100, y: 100, w: 300, h: 230, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  104: { name: "tidal",
    pic: 4, state: 18, wait: 2, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 250, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 80, y: 65, w: 330, h: 265, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  105: { name: "tidal",
    pic: 5, state: 18, wait: 2, next: 106, dvx: 0, dvy: 0, dvz: 0, centerx: 250, centery: 280, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 23, w: 500, h: 307, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  106: { name: "tidal",
    pic: 6, state: 18, wait: 2, next: 107, dvx: 0, dvy: 0, dvz: 0, centerx: 360, centery: 260, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 40, y: 0, w: 625, h: 310, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  107: { name: "tidal",
    pic: 7, state: 18, wait: 2, next: 108, dvx: 0, dvy: 0, dvz: 0, centerx: 360, centery: 260, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 720, h: 310, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  108: { name: "tidal",
    pic: 8, state: 18, wait: 2, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 460, centery: 235, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 30, w: 920, h: 255, dvx: 2, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  109: { name: "tidal",
    pic: 9, state: 18, wait: 2, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 460, centery: 235, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 120, w: 920, h: 165, dvz: 45, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  110: { name: "tidal",
    pic: 10, state: 18, wait: 2, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 460, centery: 235, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 145, w: 920, h: 140, dvz: 45, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  111: { name: "tidal",
    pic: 11, state: 18, wait: 2, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 475, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 25, w: 955, h: 92, dvz: 45, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  112: { name: "tidal",
    pic: 12, state: 3003, wait: 2, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 475, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 25, w: 955, h: 92, dvz: 45, zwidth: 35, vrest: 5, bdefend: 100, fall: 50, injury: 14, effect: 5
    }
  },
  113: { name: "tidal",
    pic: 13, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 475, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "rock_wall",
    pic: 14, state: 3005, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 135, centery: 183, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019"
  },
  121: { name: "rock_wall",
    pic: 15, state: 3005, wait: 1, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 153, centery: 183, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/021",
    itr: [
      {
        kind: 0, x: 116, y: 141, w: 69, h: 41, dvx: 2, bdefend: 70, injury: 20
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  122: { name: "rock_wall",
    pic: 16, state: 3005, wait: 1, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 141, centery: 187, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 76, y: 114, w: 133, h: 68, dvx: 2, bdefend: 70, injury: 20
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  123: { name: "rock_wall",
    pic: 17, state: 3005, wait: 1, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 149, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 106, y: 86, w: 82, h: 79, dvx: 2, bdefend: 70, injury: 20
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  124: { name: "rock_wall",
    pic: 18, state: 3005, wait: 1, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 139, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 96, y: 64, w: 86, h: 109, dvx: 2, bdefend: 70, injury: 20
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  125: { name: "rock_wall",
    pic: 19, state: 3005, wait: 1, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 154, centery: 182, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 111, y: 42, w: 88, h: 125, dvx: 10, dvy: -35, vrest: 15, bdefend: 100, fall: 100, injury: 30
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  126: { name: "rock_wall",
    pic: 20, state: 3005, wait: 1, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 150, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 102, y: 23, w: 90, h: 146, dvx: 10, dvy: -35, vrest: 15, bdefend: 100, fall: 100, injury: 30
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  127: { name: "rock_wall",
    pic: 21, state: 3005, wait: 10, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 155, centery: 179, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 109, y: 19, w: 86, h: 106, zwidth: 10, vrest: 15, bdefend: 100, fall: 100, injury: 20
      },
      {
        kind: 0, x: 40, y: 131, w: 208, h: 49, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 40, injury: 40, effect: 0
      }
    ]
  },
  128: { name: "rock_wall",
    pic: 22, state: 3005, wait: 2, next: 129, dvx: 0, dvy: 0, dvz: 0, centerx: 155, centery: 180, hit_a: 0, hit_d: 0, hit_j: 0
  },
  129: { name: "rock_wall",
    pic: 23, state: 3005, wait: 1, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 154, centery: 182, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "rock_wall",
    pic: 24, state: 3005, wait: 1, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 159, centery: 183, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "rock_wall",
    pic: 25, state: 3005, wait: 1, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 149, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "rock_wall",
    pic: 26, state: 3005, wait: 1, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 148, centery: 184, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "rock_wall",
    pic: 27, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 154, centery: 178, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "chakra_arm",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 69, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 8, x: -160, y: 55, w: 450, zwidth: 999, h: 70, dvx: 135
    }
  },
  135: { name: "chakra_arm",
    pic: 30, state: 18, wait: 1, next: 136, dvx: 0, dvy: 0, centerx: 69, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 44, y: 131, w: 51, h: 28, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 57, y: 131, w: 46, h: 28, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 25, dvy: -40
      }
    ]
  },
  136: { name: "chakra_arm",
    pic: 31, state: 18, wait: 1, next: 137, dvx: 0, dvy: 0, centerx: 76, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 67, y: 80, w: 64, h: 53, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 50, y: 92, w: 42, h: 46, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 27, y: 133, w: 46, h: 25, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      }
    ]
  },
  137: { name: "chakra_arm",
    pic: 32, state: 18, wait: 1, next: 138, dvx: 0, dvy: 0, centerx: 46, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 62, y: 41, w: 64, h: 55, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 61, y: 87, w: 45, h: 42, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 33, y: 129, w: 50, h: 30, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      }
    ]
  },
  138: { name: "chakra_arm",
    pic: 33, state: 18, wait: 1, next: 139, dvx: 0, dvy: 0, centerx: 50, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 72, y: 38, w: 64, h: 55, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 69, y: 76, w: 43, h: 46, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 44, y: 111, w: 44, h: 36, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      }
    ]
  },
  139: { name: "chakra_arm",
    pic: 34, state: 18, wait: 5, next: 140, dvx: 0, dvy: 0, centerx: 49, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 72, y: 27, w: 61, h: 52, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 69, y: 76, w: 43, h: 46, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 44, y: 111, w: 44, h: 36, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      },
      {
        kind: 0, x: 30, y: 145, w: 40, h: 13, vrest: 15, bdefend: 100, fall: 100, injury: 15, dvx: 8, dvy: -30
      }
    ]
  },
  140: { name: "chakra_arm",
    pic: 33, state: 18, wait: 2, next: 141, dvx: 0, dvy: 0, centerx: 50, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "chakra_arm",
    pic: 32, state: 18, wait: 2, next: 142, dvx: 0, dvy: 0, centerx: 46, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "chakra_arm",
    pic: 31, state: 18, wait: 2, next: 143, dvx: 0, dvy: 0, centerx: 76, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "chakra_arm",
    pic: 30, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 69, centery: 158, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});