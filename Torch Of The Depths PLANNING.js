/* idea for game

A single player game that allows you to start as one of X amount of classes, each with perks.

// PLAYER PERKS
HP: health points
MANA: a mana point system that allows for certain spells to be used
STRENGTH: attack damage
MAGIC: spell damage
ACCURACY: odds of landing YOUR attacks (where 5 = 75%, and 20 = 100%)
DEXTERITY: odds of dodging ENEMY attacks (where 5 = 5% and 20 = 25%)
LUCK: odds of finding loot along journey (where 5 = 5% and 20 = 25%)
LOOTING: odds of finding loot after battle (where 5 = 10% and 20 = 50%)

BERSERKER
[LVL] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
[MNA] 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40
[STR] 08, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38
[ACC] 05, 05, 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12
[DEX] 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15
[MAG] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
[LCK] 05, 05, 05, 05, 06, 06, 06, 06, 07, 07, 07, 07, 08, 08, 08, 08
[LTG] 05, 05, 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12

MAGE
[LVL] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
[MNA] 
[STR] 
[ACC] 
[DEX] 
[MAG] 
[LCK] 
[LTG] 

ROGUE
[LVL] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
[MNA] 
[STR] 
[ACC] 
[DEX] 
[MAG] 
[LCK] 
[LTG] 

LEVEL UP EXP
[LVL] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
[PTS] 

Each class will start at Lvl 5 and can level up via battling or finding loot. You are also assigned a buddy at the start, which has a chance to help during different stages of the game.

// -------------------------FLOW----------------------------- //

JavaScript Prompt: Choose a Class: A, B, C
JavaScript Prompt: Choose Gender: M, F, TT
JavaScript Prompt: Choose Buddy: A, B, C

Show character w/two buttons: Start Adventure, or Restart (will simply refresh page). 

*/

let playerName = prompt("What is your name?");
let playerClass = prompt("Please choose a class: Berserker, Mage, or Rogue.");
let playerGender = prompt("Please enter a gender for your character: Male, Female, or They/Them");
let buddySpecies = prompt("Please choose a buddy: Parrot, Wolf, Slug");
let buddyName = prompt("Please name your buddy.");

document.write(playerName + "<br>");
document.write(playerClass + "<br>");
document.write(playerGender + "<br>");
document.write(buddySpecies + "<br>");
document.write(buddyName + "<br>");
