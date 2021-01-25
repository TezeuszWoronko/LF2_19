define({
  bmp: {
    file: [
      {
        "file(0-94)": "sprite/death.png", w: 155, h: 95, row: 5, col: 19
      },
      {
        "file(95-200)": "sprite/death2.png", w: 155, h: 95, row: 5, col: 19
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "deidara",
    pic: 0, state: 3005, wait: 10, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  1: { name: "deidara",
    pic: 0, state: 3006, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "deidara",
    pic: 1, state: 3006, wait: 2, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "deidara",
    pic: 2, state: 3006, wait: 2, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "deidara",
    pic: 3, state: 3006, wait: 2, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "deidara",
    pic: 4, state: 3006, wait: 2, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "deidara",
    pic: 5, state: 3006, wait: 2, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "deidara",
    pic: 6, state: 3006, wait: 2, next: 8, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "deidara",
    pic: 7, state: 3006, wait: 2, next: 9, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "deidara",
    pic: 8, state: 3006, wait: 0, next: 10, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  10: { name: "deidara",
    pic: 9, state: 3006, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "deidara",
    pic: 9, state: 3006, wait: 0, next: 10, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "sound_nin",
    pic: 10, state: 3005, wait: 2, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  13: { name: "sound_nin",
    pic: 11, state: 3006, wait: 1, next: 14, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "sound_nin",
    pic: 12, state: 3006, wait: 1, next: 15, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "sound_nin",
    pic: 13, state: 3006, wait: 1, next: 16, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "sound_nin",
    pic: 14, state: 3006, wait: 1, next: 17, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  17: { name: "sound_nin",
    pic: 15, state: 3006, wait: 1, next: 18, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  18: { name: "sound_nin",
    pic: 16, state: 3006, wait: 1, next: 19, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  19: { name: "sound_nin",
    pic: 16, state: 3006, wait: 1, next: 18, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "sound_nin2",
    pic: 17, state: 3005, wait: 2, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  21: { name: "sound_nin2",
    pic: 18, state: 3006, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "sound_nin2",
    pic: 19, state: 3006, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "sound_nin2",
    pic: 20, state: 3006, wait: 1, next: 24, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  24: { name: "sound_nin2",
    pic: 21, state: 3006, wait: 1, next: 25, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "sound_nin2",
    pic: 22, state: 3006, wait: 1, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  26: { name: "sound_nin2",
    pic: 23, state: 3006, wait: 1, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "sound_nin2",
    pic: 24, state: 3006, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  28: { name: "sound_nin2",
    pic: 25, state: 3006, wait: 1, next: 29, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  29: { name: "sound_nin2",
    pic: 26, state: 3006, wait: 1, next: 30, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "sound_nin2",
    pic: 27, state: 3006, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "sound_nin2",
    pic: 27, state: 3006, wait: 1, next: 30, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "naruto",
    pic: 28, state: 3005, wait: 10, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  33: { name: "naruto",
    pic: 29, state: 3006, wait: 1, next: 34, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  34: { name: "naruto",
    pic: 30, state: 3006, wait: 1, next: 35, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "naruto",
    pic: 31, state: 3006, wait: 1, next: 36, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "naruto",
    pic: 32, state: 3006, wait: 1, next: 37, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "naruto",
    pic: 33, state: 3006, wait: 1, next: 38, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  38: { name: "naruto",
    pic: 34, state: 3006, wait: 1, next: 39, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  39: { name: "naruto",
    pic: 35, state: 3006, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  40: { name: "naruto",
    pic: 36, state: 3006, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "naruto",
    pic: 36, state: 3006, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "ANBU",
    pic: 37, state: 3005, wait: 10, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  43: { name: "ANBU",
    pic: 38, state: 3006, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "ANBU",
    pic: 39, state: 3006, wait: 1, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "ANBU",
    pic: 40, state: 3006, wait: 1, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "ANBU",
    pic: 41, state: 3006, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "ANBU",
    pic: 42, state: 3006, wait: 1, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  48: { name: "ANBU",
    pic: 43, state: 3006, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  49: { name: "ANBU",
    pic: 44, state: 3006, wait: 1, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "ANBU",
    pic: 44, state: 3006, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "gaara",
    pic: 45, state: 3006, wait: 10, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  52: { name: "gaara",
    pic: 46, state: 3006, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "gaara",
    pic: 47, state: 3006, wait: 1, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "gaara",
    pic: 48, state: 3006, wait: 1, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "gaara",
    pic: 49, state: 3006, wait: 1, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "gaara",
    pic: 50, state: 3006, wait: 1, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "gaara",
    pic: 51, state: 3006, wait: 1, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  58: { name: "gaara",
    pic: 52, state: 3006, wait: 1, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 89, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "gaara",
    pic: 53, state: 3006, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 89, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "lee",
    pic: 54, state: 3006, wait: 10, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  61: { name: "lee",
    pic: 55, state: 3006, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "lee",
    pic: 56, state: 3006, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "lee",
    pic: 57, state: 3006, wait: 1, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "lee",
    pic: 58, state: 3006, wait: 1, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "lee",
    pic: 59, state: 3006, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "lee",
    pic: 60, state: 3006, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  67: { name: "lee",
    pic: 61, state: 3006, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "lee",
    pic: 62, state: 3006, wait: 1, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "orochimaru",
    pic: 63, state: 3006, wait: 10, next: 70, dvx: 0, dvy: 0, dvz: 550, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  70: { name: "orochimaru",
    pic: 64, state: 3006, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 550, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "orochimaru",
    pic: 65, state: 3006, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 550, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "orochimaru",
    pic: 66, state: 3006, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 550, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "orochimaru",
    pic: 67, state: 3006, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 550, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "orochimaru",
    pic: 68, state: 3006, wait: 1, next: 75, dvx: 0, dvy: 0, dvz: 550, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  75: { name: "orochimaru",
    pic: 69, state: 3006, wait: 1, next: 76, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "orochimaru",
    pic: 70, state: 3006, wait: 1, next: 76, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "gaara",
    pic: 53, state: 3006, wait: 1, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 89, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "lee",
    pic: 62, state: 3006, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "orochimaru_2",
    pic: 102, state: 3006, wait: 35, next: 122, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "kakashi",
    pic: 71, state: 3006, wait: 10, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  81: { name: "kakashi",
    pic: 72, state: 3006, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "kakashi",
    pic: 73, state: 3006, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "kakashi",
    pic: 74, state: 3006, wait: 1, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "kakashi",
    pic: 75, state: 3006, wait: 1, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "kakashi",
    pic: 76, state: 3006, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "kakashi",
    pic: 77, state: 3006, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "kakashi",
    pic: 78, state: 3006, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "kakashi",
    pic: 79, state: 3006, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  89: { name: "kakashi",
    pic: 80, state: 3006, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "kakashi",
    pic: 80, state: 3006, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 79, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "sakura",
    pic: 81, state: 3006, wait: 10, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  92: { name: "sakura",
    pic: 82, state: 3006, wait: 1, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "sakura",
    pic: 83, state: 3006, wait: 1, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  94: { name: "sakura",
    pic: 84, state: 3006, wait: 1, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  95: { name: "sakura",
    pic: 85, state: 3006, wait: 1, next: 96, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "sakura",
    pic: 85, state: 3006, wait: 1, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 88, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "Hsasori",
    pic: 90, state: 3006, wait: 1, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "neji",
    pic: 86, state: 3006, wait: 3, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  99: { name: "neji",
    pic: 87, state: 3006, wait: 1, next: 100, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "neji",
    pic: 88, state: 3006, wait: 1, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "neji",
    pic: 89, state: 3006, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "neji",
    pic: 91, state: 3006, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "neji",
    pic: 92, state: 3006, wait: 1, next: 104, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  104: { name: "neji",
    pic: 93, state: 3006, wait: 1, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  105: { name: "neji",
    pic: 94, state: 3006, wait: 1, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 67, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "orochimaru_3",
    pic: 101, state: 3006, wait: 2, next: 114, dvx: 550, dvy: 550, dvz: 550, centerx: 11, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "orochimaru_3",
    pic: 100, state: 3006, wait: 30, next: 115, dvx: 550, dvy: 550, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "orochimaru_3",
    pic: 103, state: 3006, wait: 4, next: 116, dvx: 550, dvy: 550, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "orochimaru_3",
    pic: 104, state: 3006, wait: 2, next: 117, dvx: 550, dvy: 550, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "orochimaru_3",
    pic: 105, state: 3006, wait: 2, next: 118, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "orochimaru_3",
    pic: 106, state: 3006, wait: 2, next: 119, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "orochimaru_3",
    pic: 107, state: 3006, wait: 2, next: 120, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "orochimaru_3",
    pic: 108, state: 3006, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "orochimaru_3",
    pic: 109, state: 3006, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "orochimaru_2",
    pic: 110, state: 3006, wait: 4, next: 119, dvx: 0, dvy: 0, dvz: 550, centerx: 69, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "sai",
    pic: 111, state: 3005, wait: 2, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033"
  },
  126: { name: "sai",
    pic: 112, state: 3006, wait: 1, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "sai",
    pic: 113, state: 3006, wait: 1, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "sai",
    pic: 114, state: 3006, wait: 1, next: 129, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  129: { name: "sai",
    pic: 115, state: 3006, wait: 1, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/016"
  },
  130: { name: "sai",
    pic: 116, state: 3006, wait: 1, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 84, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "protect",
    pic: 999, state: 18, wait: 250, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -99999, y: 5800065, w: 9999999999, h: 500, dvx: 0, effect: 6067
    }
  },
  136: { name: "protect",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});