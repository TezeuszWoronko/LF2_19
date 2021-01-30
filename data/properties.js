/** extended standard
	specify the properties of each object id
 */

define(function()
{

var TYPE={};

TYPE['lightweapon'] = {
	mass: 0.3,
	just_throw: true,
	run_throw: true,
	jump_throw: true,
	dash_throw: true
}
TYPE['character'] = {

}
TYPE['heavyweapon'] = {

}
TYPE['specialattack'] = {

}
TYPE['effect'] = {
	
}

var ID={};

// 1: Deep
ID[1]=
{
	//hp:500,mp:500 //optional
};

// lightweapon
ID[100]= //stick (baseball bat)
{
	mass: 0.3,
	attackable: true, //can hold this to attack
	run_throw: true, //can throw while running by forward-attack
	jump_throw: true, //can throw while jumping by forward-attack
	dash_throw: false, //can throw while dashing
	stand_throw: false, //can throw while standing by forward-attack
	just_throw: false, //can throw while standing by just pressing attack
	no_shadow: false
	//TODO: 039.wav when hitting id: 121
};

ID[101]= //hoe
{
	mass: 0.7,
	attackable: true,
	run_throw: true,
	jump_throw: true
};
ID[121]= //shuriken
{
	mass: 0.3,
	just_throw: true,
	run_throw: true,
	jump_throw: true,
	dash_throw: true
};

// heavyweapon		id from 150~199

ID[150]= //stone
{
	mass: 0.9
};

// specialattack	id from 200~299

ID[203]= //deep_ball
{
};

ID[207]= //davis_ball
{
};

ID[212]= //ice column and whirlwind
{
	no_shadow: true
};

ID[213]= //ice sword
{
	mass: 0.5,
	attackable: true,
	run_throw: true,
	jump_throw: true
};

// effects			id from 300~349 (extended standard)

ID[300]= //hit
{
	oscillate: 4 //oscillation amplitude
};

ID[302]= //fire
{
	oscillate: 3 //oscillation amplitude
};

return {
	ID: ID,
	TYPE: TYPE
}

});
