var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// logging multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // Alert player that round is starting
  window.alert("welcome to Robot Gladiators!")


//subtract 'playerAttack' value from 'enemyHealth' value and use result.
enemyHealth = enemyHealth - playerAttack;
//log result to console so we know it happened.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
//subtract 'enenemyAttack' value from 'playerHealth' and use result.

//log result to console.
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
};
// function declaration is when you create a function using the key word first.


fight();

