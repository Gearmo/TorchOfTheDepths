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
[MNA] 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 40
[STR] 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 80
[ACC] 05, 05, 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 92
[DEX] 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 107
[MAG] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 127
[LCK] 05, 05, 05, 05, 06, 06, 06, 06, 07, 07, 07, 07, 08, 08, 08, 08, 135
[LTG] 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 13, 13, 148

MAGE
[LVL] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
[MNA] 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 46
[STR] 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 66
[ACC] 05, 05, 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 78
[DEX] 05, 05, 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 90
[MAG] 08, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 128
[LCK] 05, 05, 05, 05, 06, 06, 06, 06, 07, 07, 07, 07, 08, 08, 08, 08, 136
[LTG] 05, 05, 06, 06, 07, 07, 08, 08, 09, 09, 10, 10, 11, 11, 12, 12, 148

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

Show character & buddy w/two buttons: Start Adventure, or Restart (will simply refresh page). 

1) Encounter w/baddie
2) Chance to find loot
3) Repeat 1-2
4) Every 3rd encounter will be a boss
5) Round 15 will be the final boss

*/

/* let playerName = prompt("What is your name?");
    if (confirm(`Is "${playerName}" correct?`)) {
        true;
    }
    else {
        let playerName = prompt("What is your name?")
    };
*/

let playerClass = prompt("Please choose a class: Berserker, Mage, or Rogue.");
    // while input is NOT Berserker, Mage, or Rogue, repeat until it is. Otherwise, continue asking the prompt.
    while(playerClass != "Berserker" || "Mage" || "Rogue" || "berserker" ||"mage" || "rogue") {
        if (playerClass != "Berserker" || "Mage" || "Rogue" || "berserker" ||"mage" || "rogue") {
            alert("Please enter a valid class.");
            break;
        }
        else {
            break;
        }
    }
    if(playerClass == "Berserker" || "berserker") {
        alert("You are a Berserker!")
    }
    if(playerClass == "Mage" || "mage") {
        alert("You are a Mage!")
    }
    if(playerClass == "Rogue" || "rogue") {
        alert("You are a Rogue!")
    } //everything is off here. reconsider the order in which you're placing things....

/*
let playerGender = prompt("Please enter a gender for your character: Male, Female, or They/Them");
    confirm(`So you're a ${playerGender}?`);

let buddyType = prompt("Please choose a buddy: Parrot, Wolf, Slug");
    confirm(`Is ${buddyType} okay?`);

let buddyName = prompt("Please name your buddy.");
    confirm(`Is "${buddyName}" correct?`);

*/
document.write("PLAYER: " + playerName + "<br>");
document.write("CLASS: " + playerClass + "<br>");
document.write("GENDER: " + playerGender + "<br>");
document.write("BUDDY TYPE:" + buddyType + "<br>");
document.write("BUDDY NAME:" + buddyName + "<br>"); 