define({
  bmp: {
    file: [
      {
        "file(0-15)": "sprite/mirror.png", w: 170, h: 150, row: 4, col: 4
      },
      {
        "file(16-30)": "sprite/mirror2.png", w: 90, h: 110, row: 6, col: 6
      }
    ]
  },
  frame: {
  0: { name: "flying",
    pic: 32, state: 3005, wait: 1, next: 1, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072"
  },
  1: { name: "flying",
    pic: 33, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "mirror",
    pic: 19, state: 3000, wait: 0, next: -31, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "mirror",
    pic: 18, state: 3000, wait: 3, next: 72, dvx: 550, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 48,
    opoint: {
      kind: 1, x: 45, y: 110, action: 340, dvx: 0, dvy: 0, oid: 17
    }
  },
  50: { name: "mad_needles",
    pic: 0, state: 3005, wait: 0, next: 51, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092"
  },
  51: { name: "mad_needles",
    pic: 1, state: 3005, wait: 0, next: 52, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "mad_needles",
    pic: 2, state: 3005, wait: 1, next: 53, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "mad_needle",
    pic: 3, state: 3005, wait: 1, next: 54, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    itr: {
      kind: 0, x: 20, y: 79800, w: 137, h: 117, dvx: 0, dvy: -15, fall: -1, arest: 100, bdefend: 0, injury: 0, effect: 5
    }
  },
  54: { name: "mad_needles",
    pic: 4, state: 3005, wait: 1, next: 55, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 79800, w: 137, h: 117, dvx: 0, dvy: -15, fall: -1, arest: 100, bdefend: 0, injury: 0, effect: 5
    }
  },
  55: { name: "mad_needles",
    pic: 5, state: 3005, wait: 1, next: 56, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 79800, w: 137, h: 117, dvx: 0, dvy: -15, fall: -1, arest: 100, bdefend: 0, injury: 0, effect: 5
    }
  },
  56: { name: "mad_needles",
    pic: 6, state: 3005, wait: 1, next: 57, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 30000, w: 97, h: 88, dvx: 0, dvy: -15, fall: 70, vrest: 10, bdefend: 100, injury: 130, effect: 1
    }
  },
  57: { name: "mad_needles",
    pic: 7, state: 3005, wait: 1, next: 58, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 35, y: 63, w: 97, h: 88, dvx: 0, dvy: -15, fall: 70, vrest: 10, bdefend: 100, injury: 130, effect: 1
      },
      {
        kind: 0, x: 35, y: 30000, w: 97, h: 88, dvx: 0, dvy: -15, fall: 70, vrest: 10, bdefend: 100, injury: 130, effect: 1
      }
    ]
  },
  58: { name: "mad_needles",
    pic: 8, state: 3005, wait: 1, next: 59, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "mad_needles",
    pic: 9, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "mad_needles",
    pic: 0, state: 3005, wait: 1, next: 61, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092"
  },
  61: { name: "mad_needles",
    pic: 1, state: 3005, wait: 1, next: 62, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "mad_needles",
    pic: 2, state: 3005, wait: 1, next: 63, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "mad_needle",
    pic: 3, state: 3005, wait: 1, next: 64, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    itr: {
      kind: 0, x: 20, y: 79800, w: 137, h: 117, dvx: 0, dvy: -15, fall: -1, arest: 100, bdefend: 0, injury: 0, effect: 5
    }
  },
  64: { name: "mad_needles",
    pic: 4, state: 3005, wait: 1, next: 65, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 79800, w: 137, h: 117, dvx: 0, dvy: -15, fall: -1, arest: 100, bdefend: 0, injury: 0, effect: 5
    }
  },
  65: { name: "mad_needles",
    pic: 5, state: 3005, wait: 1, next: 66, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 79800, w: 137, h: 117, dvx: 0, dvy: -15, fall: -1, arest: 100, bdefend: 0, injury: 0, effect: 5
    }
  },
  66: { name: "mad_needles",
    pic: 6, state: 3005, wait: 1, next: 67, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 30000, w: 97, h: 88, dvx: 0, dvy: -15, fall: 70, vrest: 10, bdefend: 100, injury: 78, effect: 1
    }
  },
  67: { name: "mad_needles",
    pic: 7, state: 3005, wait: 1, next: 68, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 35, y: 63, w: 97, h: 88, dvx: 0, dvy: -15, fall: 70, vrest: 10, bdefend: 100, injury: 78, effect: 1
      },
      {
        kind: 0, x: 35, y: 30000, w: 97, h: 88, dvx: 0, dvy: -15, fall: 70, vrest: 10, bdefend: 100, injury: 78, effect: 1
      }
    ]
  },
  68: { name: "mad_needles",
    pic: 8, state: 3005, wait: 1, next: 69, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "mad_needles",
    pic: 9, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "mirror",
    pic: 16, state: 3000, wait: 3, next: 71, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/052"
  },
  71: { name: "mirror",
    pic: 17, state: 3000, wait: 3, next: 72, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "mirror",
    pic: 18, state: 3000, wait: 0, next: -73, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 1, hit_d: 100, hit_j: 0,
    bdy: {
      kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88
    },
    itr: [
      {
        kind: 14, x: 33, y: 14, w: 30, h: 92, zwidth: 20
      },
      {
        kind: 14, x: 33, y: 80000, w: 30, h: 92, zwidth: 20
      }
    ]
  },
  73: { name: "mirror",
    pic: 19, state: 3000, wait: 0, next: -72, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 1, hit_d: 100, hit_j: 0,
    bdy: {
      kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88
    },
    itr: [
      {
        kind: 14, x: 33, y: 14, w: 30, h: 92, zwidth: 20
      },
      {
        kind: 14, x: 33, y: 80000, w: 30, h: 92, zwidth: 20
      }
    ]
  },
  75: { name: "flying",
    pic: 22, state: 3003, wait: 1, next: 76, dvx: 550, dvy: 550, dvz: 5, centerx: 25, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/074",
    itr: {
      kind: 0, x: -2, y: 32, w: 64, h: 83, dvx: 10, dvy: -12, fall: 80, vrest: 50, bdefend: 35, injury: 35, effect: 1
    }
  },
  76: { name: "flying",
    pic: 23, state: 3003, wait: 1, next: 77, dvx: 550, dvy: 550, dvz: 5, centerx: 25, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -4, y: -2, w: 74, h: 112, dvx: 10, dvy: -12, fall: 80, vrest: 50, bdefend: 35, injury: 35, effect: 1
    }
  },
  77: { name: "flying",
    pic: 24, state: 3003, wait: 40, next: 78, dvx: 550, dvy: 550, dvz: 5, centerx: 25, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 14, x: 29, y: 2, w: 55, h: 65, zwidth: 35
      },
      {
        kind: 14, x: -6, y: 38, w: 73, h: 74, zwidth: 35
      },
      {
        kind: 14, x: -5, y: 80000, w: 93, h: 122
      }
    ]
  },
  78: { name: "flying",
    pic: 25, state: 3003, wait: 1, next: 79, dvx: 550, dvy: 550, dvz: 5, centerx: 25, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/break"
  },
  79: { name: "flying",
    pic: 26, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 5, centerx: 25, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "ice_field",
    pic: 28, state: 3005, wait: 1, next: 81, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 7, y: 80088, w: 76, h: 33, zwidth: 20,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  81: { name: "ice_field",
    pic: 29, state: 3005, wait: 1, next: 82, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 7, y: 80088, w: 76, h: 33, zwidth: 20,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  82: { name: "ice_field",
    pic: 30, state: 3005, wait: 3, next: 83, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 7, y: 80088, w: 76, h: 33, zwidth: 20,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  83: { name: "ice_field",
    pic: 29, state: 3005, wait: 1, next: 84, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 7, y: 80088, w: 76, h: 33, zwidth: 20,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  84: { name: "ice_field",
    pic: 28, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 7, y: 80088, w: 76, h: 33, zwidth: 20,
      catchingact: [85, 85], caughtact: [130, 130]
    }
  },
  85: { name: "ice_field",
    pic: 31, state: 9, wait: 15, next: 86, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 65, injury: 0, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451
    }
  },
  86: { name: "ice_field",
    pic: 31, state: 9, wait: 10, next: 87, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 65, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  87: { name: "ice_field",
    pic: 31, state: 9, wait: 25, next: 88, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 65, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  88: { name: "ice_field",
    pic: 31, state: 9, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 65, injury: 0, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    }
  },
  90: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 91, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072",
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  91: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 92, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072",
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  92: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 93, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  93: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 94, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  94: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  95: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 96, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  96: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 97, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  97: { name: "ice_field_foward",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 30, dvy: 550, dvz: 0, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 45, y: 105, action: 80, dvx: 0, dvy: 0, oid: 516
    }
  },
  100: { name: "mirror_break",
    pic: 20, state: 18, wait: 1, next: 101, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/break",
    itr: {
      kind: 0, x: 33, y: -99999898425321460, w: 30, h: 92, dvy: -5, zwidth: 20, arest: 20, injury: 0, fall: 100, bdefend: 100, effect: 5
    }
  },
  101: { name: "mirror_break",
    pic: 21, state: 18, wait: 1, next: 102, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 33, y: -99999898425321460, w: 30, h: 92, dvy: -5, zwidth: 20, arest: 20, injury: 0, fall: 100, bdefend: 100, effect: 5
    }
  },
  102: { name: "mirror_break",
    pic: 27, state: 18, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 45, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 33, y: -99999898425321460, w: 30, h: 92, dvy: -5, zwidth: 20, arest: 20, injury: 0, fall: 100, bdefend: 100, effect: 5
    }
  }
  }
});