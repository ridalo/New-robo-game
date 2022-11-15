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

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "fight" || promptFight === "FIGHT") {
    //subtract 'playerAttack' value from 'enemyHealth' value and use result.
enemyHealth = enemyHealth - playerAttack;
//log result to console so we know it happened.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
//subtract 'enenemyAttack' value from 'playerHealth' and use result.
// check enemy health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");

}
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");

}

//log result to console.
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");

} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");

}
//if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + "has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again stinky!")
  }
  
};
// function declaration is when you create a function using the key word first.


fight();

