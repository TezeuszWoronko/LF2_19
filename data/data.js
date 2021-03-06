/** serves the same as data.txt or (deep_chop.dat in earlier versions)
 */
/**
type:
character				id from 0~99
lightweapon				id from 100~149
heavyweapon				id from 150~199
specialattack			id from 200~299
baseball
miscell (Criminal, etc, broken_weapon)
drink (Milk and beer)
effects (blood,fire)	id from 300~349 (extended standard)
 */
//extended standard

define({

	object:
	[
		{"id": 52, "type": "character", "file": "data/kyubi.js", "name": "kyubi", "pic": "sprite/kyubi_f.png"},
		{"id": 61, "type": "character", "file": "data/sasuke_cs2.js", "name": "sasuke_cs2", "pic": "sprite/sasuke_cs2_f.png"},
		{"id": 58, "type": "character", "file": "data/deidara_bird.js", "name": "deidara_bird", "pic": "sprite/deidara_bird_f.png"},
		{"id": 71, "type": "character", "file": "data/deidaraO_bird.js", "name": "deidaraO_bird", "pic": "sprite/deidara_birdO_f.png"},
		{"id": 51, "type": "character", "file": "data/sasori.js", "name": "sasori", "pic": "sprite/sasori_f.png"},
		{"id": 56, "type": "character", "file": "data/reaper.js", "name": "reaper", "pic": "sprite/reaper_f.png"},
		{"id": 57, "type": "character", "file": "data/nckakuzu.js", "name": "nckakuzu", "pic": "sprite/nckakuzu_f.png"},
		{"id": 39, "type": "character", "file": "data/sand_creature.js", "name": "sand_creature", "pic": "sprite/sand_f.png"},
		{"id": 37, "type": "character", "file": "data/jiroubou.js", "name": "jiroubou", "pic": "sprite/jiroubou_f.png"},
		{"id": 65, "type": "character", "file": "data/tayuya.js", "name": "tayuya", "pic": "sprite/tayuya_f.png"},
		{"id": 64, "type": "character", "file": "data/sakon.js", "name": "sakon", "pic": "sprite/sakon_f.png"},
		{"id": 63, "type": "character", "file": "data/kidomaru.js", "name": "kidomaru", "pic": "sprite/kidomaru_f.png"},
		{"id": 41, "type": "character", "file": "data/spike.js", "name": "spike", "pic": "sprite/kimimarocs2_f.png"},
		{"id": 33, "type": "character", "file": "data/naruto_clone.js", "name": "naruto_clone", "pic": "sprite/naruto_clone_f.png"},
		{"id": 73, "type": "character", "file": "data/naruto_cloneO.js", "name": "naruto_cloneO", "pic": "sprite/naruto_clone_f.png"},
		{"id": 84, "type": "character", "file": "data/naruto_cloneY.js", "name": "naruto_cloneY", "pic": "sprite/naruto_clone_f.png"},
		{"id": 53, "type": "character", "file": "data/puppet_chyio.js", "name": "puppet_chyio", "pic": "sprite/puppet_f.png"},
		{"id": 55, "type": "character", "file": "data/puppet_sasori.js", "name": "puppet_sasori", "pic": "sprite/puppet_f.png"},
		{"id": 32, "type": "character", "file": "data/hunter.js", "name": "hunter", "pic": "sprite/hunter_f.png"},
		{"id": 62, "type": "character", "file": "data/sound_nin3.js", "name": "sound_nin3", "pic": "sprite/sound_nin_f.png"},
		{"id": 31, "type": "character", "file": "data/sound_nin2.js", "name": "sound_nin2", "pic": "sprite/sound_nin2_f.png"},
		{"id": 30, "type": "character", "file": "data/sound_nin.js", "name": "sound_nin", "pic": "sprite/sound_nin_f.png"},
		{"id": 77, "type": "character", "file": "data/zetsus.js", "name": "zetsus", "pic": "sprite/wzetsu_f.png"},
		{"id": 42, "type": "character", "file": "data/itachiO.js", "name": "itachiO", "pic": "sprite/itachiO_f.png"},
		{"id": 2, "type": "character", "file": "data/naruto.js", "name": "naruto", "pic": "sprite/naruto_f.png"},
		{"id": 72, "type": "character", "file": "data/narutoO.js", "name": "narutoO", "pic": "sprite/narutoO_f.png"},
		{"id": 22, "type": "character", "file": "data/narutoY.js", "name": "narutoY", "pic": "sprite/narutoY_f.png"},
		{"id": 11, "type": "character", "file": "data/sasuke.js", "name": "sasuke", "pic": "sprite/sasuke_f.png"},
		{"id": 40, "type": "character", "file": "data/sasukeO.js", "name": "sasukeO", "pic": "sprite/sasukeO_f.png"},
		{"id": 5, "type": "character", "file": "data/sasukeY.js", "name": "sasukeY", "pic": "sprite/sasukeY_f.png"},
		{"id": 3, "type": "character", "file": "data/kakashi.js", "name": "kakashi", "pic": "sprite/kakashi_f.png"},
		{"id": 1, "type": "character", "file": "data/sakura.js", "name": "sakura", "pic": "sprite/sakura_f.png"},
		{"id": 85, "type": "character", "file": "data/sai.js", "name": "sai", "pic": "sprite/sai_f.png"},
		{"id": 60, "type": "character", "file": "data/yamato.js", "name": "yamato", "pic": "sprite/yamato_f.png"},
		{"id": 23, "type": "character", "file": "data/asuma.js", "name": "asuma", "pic": "sprite/asuma_f.png"},
		{"id": 7, "type": "character", "file": "data/rock_lee.js", "name": "rock_lee", "pic": "sprite/lee_f.png"},
		{"id": 18, "type": "character", "file": "data/neji.js", "name": "neji", "pic": "sprite/neji_f.png"},
		{"id": 88, "type": "character", "file": "data/tenten.js", "name": "tenten", "pic": "sprite/ten_ten_f.png"},
		{"id": 82, "type": "character", "file": "data/shikamaru.js", "name": "shikamaru", "pic": "sprite/shikamaru_f.png"},
		{"id": 12, "type": "character", "file": "data/kiba.js", "name": "kiba", "pic": "sprite/kiba_f.png"},
		{"id": 83, "type": "character", "file": "data/shino.js", "name": "shino", "pic": "sprite/shino_f.png"},
		{"id": 16, "type": "character", "file": "data/gaara.js", "name": "gaara", "pic": "sprite/gaara_f.png"},
		{"id": 66, "type": "character", "file": "data/temari.js", "name": "temari", "pic": "sprite/temari_f.png"},
		{"id": 14, "type": "character", "file": "data/kankuro.js", "name": "kankuro", "pic": "sprite/kankuro_f.png"},
		{"id": 74, "type": "character", "file": "data/chiyo.js", "name": "chiyo", "pic": "sprite/chiyo_f.png"},
		{"id": 6, "type": "character", "file": "data/Hsasori.js", "name": "Hsasori", "pic": "sprite/Hsasori_f.png"},
		{"id": 81, "type": "character", "file": "data/sasoriS.js", "name": "sasoriS", "pic": "sprite/sasori_unc_f.png"},
		{"id": 10, "type": "character", "file": "data/deidara.js", "name": "deidara", "pic": "sprite/deidara_f.png"},
		{"id": 70, "type": "character", "file": "data/deidaraO.js", "name": "deidaraO", "pic": "sprite/deidaraO_f.png"},
		{"id": 17, "type": "character", "file": "data/kisame.js", "name": "kisame", "pic": "sprite/kisame_f.png"},
		{"id": 79, "type": "character", "file": "data/kisameS.js", "name": "kisameS", "pic": "sprite/kisameS_f.png"},
		{"id": 80, "type": "character", "file": "data/kisameS2.js", "name": "kisameS2", "pic": "sprite/kisameS_f.png"},
		{"id": 9, "type": "character", "file": "data/itachi.js", "name": "itachi", "pic": "sprite/itachi_f.png"},
		{"id": 24, "type": "character", "file": "data/hidan.js", "name": "hidan", "pic": "sprite/hidan_f.png"},
		{"id": 25, "type": "character", "file": "data/kakuzu.js", "name": "kakuzu", "pic": "sprite/kakuzu_f.png"},
		{"id": 76, "type": "character", "file": "data/zetsu.js", "name": "zetsu", "pic": "sprite/bzetsu_f.png"},
		{"id": 87, "type": "character", "file": "data/wzetsu.js", "name": "wzetsu", "pic": "sprite/wzetsu_f.png"},
		{"id": 86, "type": "character", "file": "data/bzetsu.js", "name": "bzetsu", "pic": "sprite/bzetsu_f.png"},
		{"id": 90, "type": "character", "file": "data/bzetsu2.js", "name": "bzetsu2", "pic": "sprite/wzetsu_f.png"},
		{"id": 27, "type": "character", "file": "data/pein.js", "name": "pein", "pic": "sprite/pein_f.png"},
		{"id": 4, "type": "character", "file": "data/peinO.js", "name": "peinO", "pic": "sprite/peinO_f.png"},
		{"id": 0, "type": "character", "file": "data/tobi.js", "name": "tobi", "pic": "sprite/tobi_f.png"},
		{"id": 67, "type": "character", "file": "data/obito.js", "name": "obito", "pic": "sprite/obito_f.png"},
		{"id": 13, "type": "character", "file": "data/speedy.js", "name": "speedy", "pic": "sprite/minato_f.png"},
		{"id": 21, "type": "character", "file": "data/jiraiya.js", "name": "jiraiya", "pic": "sprite/jiraiya_f.png"},
		{"id": 43, "type": "character", "file": "data/tsunade.js", "name": "tsunade", "pic": "sprite/tsunade_f.png"},
		{"id": 20, "type": "character", "file": "data/orochimaru.js", "name": "orochimaru", "pic": "sprite/orochimaru_f.png"},
		{"id": 78, "type": "character", "file": "data/kabuto.js", "name": "kabuto", "pic": "sprite/kabuto_f.png"},
		{"id": 29, "type": "character", "file": "data/sound4.js", "name": "sound4", "pic": "sprite/sound4_f.png"},
		{"id": 26, "type": "character", "file": "data/zabuza.js", "name": "zabuza", "pic": "sprite/zabuza_f.png"},
		{"id": 28, "type": "character", "file": "data/brrrrr.js", "name": "brrrrr", "pic": "sprite/haku_f.png"},
		{"id": 75, "type": "character", "file": "data/haku.js", "name": "haku", "pic": "sprite/haku_f.png"},
		{"id": 19, "type": "character", "file": "data/danzo.js", "name": "danzo", "pic": "sprite/danzo_f.png"},
		{"id": 89, "type": "character", "file": "data/danzo2.js", "name": "danzo2", "pic": "sprite/danzo2_f.png"},
		{"id": 15, "type": "character", "file": "data/killerbee.js", "name": "killerbee", "pic": "sprite/bee_f.png"},
		{"id": 68, "type": "character", "file": "data/hachibi.js", "name": "hachibi", "pic": "sprite/hachibi_f.png"},
		{"id": 8, "type": "character", "file": "data/madara.js", "name": "madara", "pic": "sprite/madara_f.png"},
		{"id": 69, "type": "character", "file": "data/hashirama.js", "name": "hashirama", "pic": "sprite/hashirama_f.png"},
		{"id": 100, "type": "lightweapon", "file": "data/weapon6.js"}, //healingscroll
		{"id": 101, "type": "lightweapon", "file": "data/weapon2.js"}, //extag
		{"id": 120, "type": "lightweapon", "file": "data/weapon4.js"}, //kunai
		{"id": 121, "type": "lightweapon", "file": "data/weapon5.js"}, //shuriken
		// {"id": 122, "type": "beer", "file": "data/weapon3.js"},	//healing
		{"id": 507, "type": "heavyweapon", "file": "data/weapon1.js"},  //stone
		{"id": 508, "type": "heavyweapon", "file": "data/log.js"},  //log
		// {"id": 123, "type": "beer", "file": "data/weapon8.js"},  //beer
		{"id": 124, "type": "lightweapon", "file": "data/weapon9.js"},  //windmill
		{"id": 217, "type": "heavyweapon", "file": "data/weapon10.js"}, //louis_armor
		{"id": 218, "type": "heavyweapon", "file": "data/weapon11.js"}, //louis_armor
		// {"id": 300, "type": "effect", "file": "data/criminal.js"},  //stage mode
		{id:300, type:'effect', file:'data/effect0.js'}, //blast
		{id:301, type:'effect', file:'data/effect1.js'}, //blood
		{"id": 230, "type": "specialattack", "file": "data/karasu.js"},
		{"id": 500, "type": "lightweapon", "file": "data/heart.js"},
		{"id": 501, "type": "lightweapon", "file": "data/heart2.js"},
		{"id": 502, "type": "lightweapon", "file": "data/heart3.js"},
		{"id": 503, "type": "lightweapon", "file": "data/blood.js"},
		{"id": 504, "type": "lightweapon", "file": "data/blood2.js"},
		{"id": 505, "type": "lightweapon", "file": "data/blood3.js"},
		{"id": 506, "type": "lightweapon", "file": "data/heart0.js"},
		{"id": 509, "type": "lightweapon", "file": "data/samehada.js"},
		{"id": 200, "type": "specialattack", "file": "data/sakura_ball.js"},
		{"id": 201, "type": "specialattack", "file": "data/death.js"},
		{"id": 203, "type": "specialattack", "file": "data/charge.js"},
		{"id": 204, "type": "specialattack", "file": "data/wind.js"},
		{"id": 205, "type": "specialattack", "file": "data/poison.js"},
		{"id": 206, "type": "specialattack", "file": "data/clay_bird2.js"},
		{"id": 207, "type": "specialattack", "file": "data/ink.js"},
		{"id": 208, "type": "specialattack", "file": "data/sword.js"},
		{"id": 209, "type": "specialattack", "file": "data/area.js"},
		{"id": 210, "type": "specialattack", "file": "data/katon_ball.js"},
		{"id": 211, "type": "specialattack", "file": "data/firen_flame.js"},
		{"id": 212, "type": "specialattack", "file": "data/freeze_column.js"},
		{"id": 213, "type": "specialattack", "file": "data/puppet.js"},
		{"id": 214, "type": "specialattack", "file": "data/flash.js"},
		{"id": 215, "type": "specialattack", "file": "data/frog.js"},
		{"id": 216, "type": "specialattack", "file": "data/doggy.js"},
		{"id": 219, "type": "specialattack", "file": "data/jan_chaseh.js"},
		{"id": 220, "type": "specialattack", "file": "data/crow_2.js"},
		{"id": 221, "type": "specialattack", "file": "data/big_boom.js"},
		{"id": 222, "type": "specialattack", "file": "data/ironsand.js"},
		{"id": 223, "type": "specialattack", "file": "data/mega_ex.js"},
		{"id": 224, "type": "specialattack", "file": "data/snake.js"},
		{"id": 225, "type": "specialattack", "file": "data/clay_bird.js"},
		{"id": 226, "type": "specialattack", "file": "data/coffin.js"},
		{"id": 228, "type": "specialattack", "file": "data/bugs.js"},
		{"id": 229, "type": "specialattack", "file": "data/rasenshuriken.js"},
		{"id": 231, "type": "specialattack", "file": "data/sanshouo.js"},
		{"id": 235, "type": "specialattack", "file": "data/criminal2.js"},
		{"id": 236, "type": "specialattack", "file": "data/nagato.js"},
		{"id": 237, "type": "specialattack", "file": "data/lhound.js"},
		{"id": 238, "type": "specialattack", "file": "data/katon_tobi.js"},
		{"id": 239, "type": "specialattack", "file": "data/swamp.js"},
		{"id": 240, "type": "specialattack", "file": "data/mangekyou.js"},
		{"id": 241, "type": "specialattack", "file": "data/amaterasu.js"},
		{"id": 242, "type": "specialattack", "file": "data/gamabunta.js"},
		{"id": 243, "type": "specialattack", "file": "data/snail.js"},
		{"id": 401, "type": "specialattack", "file": "data/summon.js"},
		{"id": 400, "type": "specialattack", "file": "data/dragon.js"},
		{"id": 417, "type": "specialattack", "file": "data/tree.js"},
		{"id": 407, "type": "specialattack", "file": "data/clay_worm.js"},
		{"id": 408, "type": "specialattack", "file": "data/katon_big.js"},
		{"id": 409, "type": "specialattack", "file": "data/katon_madara.js"},
		{"id": 410, "type": "specialattack", "file": "data/sand_shield.js"},
		{"id": 411, "type": "specialattack", "file": "data/sand.js"},
		{"id": 412, "type": "specialattack", "file": "data/sand_2.js"},
		{"id": 413, "type": "specialattack", "file": "data/sand_blast.js"},
		{"id": 416, "type": "specialattack", "file": "data/water.js"},
		{"id": 418, "type": "specialattack", "file": "data/mother_puppet.js"},
		{"id": 419, "type": "specialattack", "file": "data/chiyo_kunais.js"},
		{"id": 420, "type": "specialattack", "file": "data/father_puppet.js"},
		{"id": 421, "type": "specialattack", "file": "data/bugs2.js"},
		{"id": 422, "type": "effect", "file": "data/ex_ball.js"},
		{"id": 433, "type": "specialattack", "file": "data/itachi_kunai.js"},
		{"id": 434, "type": "lightweapon", "file": "data/rasengan_ball.js"},
		{"id": 435, "type": "specialattack", "file": "data/drunken.js"},
		{"id": 436, "type": "specialattack", "file": "data/wave.js"},
		{"id": 437, "type": "lightweapon", "file": "data/chakra.js"},
		{"id": 438, "type": "specialattack", "file": "data/spider.js"},
		{"id": 439, "type": "specialattack", "file": "data/monster.js"},
		{"id": 440, "type": "specialattack", "file": "data/chidori.js"},
		{"id": 441, "type": "specialattack", "file": "data/wood.js"},
		{"id": 442, "type": "lightweapon", "file": "data/gate.js"},
		{"id": 444, "type": "lightweapon", "file": "data/byakugan.js"},
		{"id": 445, "type": "lightweapon", "file": "data/shield.js"},
		{"id": 446, "type": "specialattack", "file": "data/4TK_ball.js"},
		{"id": 447, "type": "lightweapon", "file": "data/die.js"},
		{"id": 448, "type": "lightweapon", "file": "data/flash_weap.js"},
		{"id": 449, "type": "lightweapon", "file": "data/jiroubou_rock.js"},
		{"id": 450, "type": "specialattack", "file": "data/air_creature.js"},
		{"id": 454, "type": "specialattack", "file": "data/zab.js"},
		{"id": 455, "type": "specialattack", "file": "data/meteor.js"},
		{"id": 456, "type": "lightweapon", "file": "data/chakra2.js"},
		{"id": 507, "type": "lightweapon", "file": "data/air_creature_die.js"},
		{"id": 451, "type": "specialattack", "file": "data/thunder_creature.js"},
		{"id": 452, "type": "specialattack", "file": "data/fire_creature.js"},
		{"id": 453, "type": "specialattack", "file": "data/earth_creature.js"},
		{"id": 462, "type": "specialattack", "file": "data/shadow.js"},
		{"id": 463, "type": "specialattack", "file": "data/shadow_2.js"},
		{"id": 464, "type": "specialattack", "file": "data/shadow_3.js"},
		{"id": 499, "type": "specialattack", "file": "data/nckakuzuarm.js"},
		{"id": 510, "type": "specialattack", "file": "data/100_puppets.js"},
		{"id": 511, "type": "specialattack", "file": "data/100_puppets_b.js"},
		{"id": 512, "type": "specialattack", "file": "data/100_puppets_c.js"},
		{"id": 513, "type": "specialattack", "file": "data/lee_counter.js"},
		{"id": 514, "type": "specialattack", "file": "data/katon_kakuzu.js"},
		{"id": 515, "type": "effect", "file": "data/needle.js"},
		{"id": 516, "type": "specialattack", "file": "data/mirror.js"},
		{"id": 517, "type": "specialattack", "file": "data/b_timer.js"},
		{"id": 519, "type": "specialattack", "file": "data/akamaru.js"},
		{"id": 520, "type": "specialattack", "file": "data/gaara_cloud.js"},
		{"id": 521, "type": "effect", "file": "data/weapon12.js"},
		{"id": 522, "type": "specialattack", "file": "data/killerbee_effect.js"},
		{"id": 523, "type": "specialattack", "file": "data/kb_counter.js"},
		{"id": 524, "type": "specialattack", "file": "data/susanoo.js"},
		{"id": 525, "type": "specialattack", "file": "data/sharingan.js"},
		{"id": 527, "type": "specialattack", "file": "data/beast.js"},
		// {"id": 998, "type": "broken", "file": "data/etc.js"},
		// {"id": 999, "type": "broken", "file": "data/broken.js"},
		{"id": 320, "type": "broken", "file": "data/broken.js"},
		// {"id": 999, "type": "broken", "file": "data/broken.js"},

	],

	AI:
	[
		{id:1, file:'AI/Crusher.js', name:'CRUSHER 1.0'},
		{id:2, file:'AI/Challangar.js', name:'CHALLANGAR 1.0'},
		{id:3, file:'AI/dumbass.js', name:'dumbass'}
	],

	background:
	[
		{id:4, name: 'HK Coliseum', file:'bg/hkc/bg.js'},
		{id:2, name: 'Lion Forest', file:'bg/lf/bg.js'},
		{id:3, name: 'Stanley Prison', file:'bg/sp/bg.js'},
		{id:5, name: 'The Great Wall', file:'bg/gw/bg.js'},
		{id:6, name: "Queen's Island", file:'bg/qi/bg.js'},
		{id:7, name: 'Forbidden Tower', file:'bg/ft/bg.js'},
		{id:1, name: 'CUHK', file:'bg/cuhk/bg.js'},
		{id:0, name: 'Tai Hom Village', file:'bg/thv/bg.js'},
		{id:10,name: 'Template1', file:'bg/template/bg.js'}
	],

	sound:
	[
		{id:1, file: 'sound/soundpack.js'}
	],

	UI: {file:'UI/UI.js'},

	properties: {file:'data/properties.js'},

	file_editing: {},

	config: ['id: 100~199 drop weapon'],

	icon: 'sprite/icon.png'
});
