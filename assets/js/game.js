//TODO SECTION

//write out comments to explain every piece (you'll forget later, having the comments will be useful when you come back and reference this)

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



// NOTES

/* FOR LOOP REFERENCE
for([initial expression]; [condition]; [increment expression]) {
   statement
}
*/


// initial prompts and player info

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//enemy info

var enemyNames = ["Roberto", "Amy", "Trumble"];

 var enemyHealth = 50;
 var enemyAttack = 12;

// making the fight function

var fight = function(enemyName) {

    while(enemyHealth > 0) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "fight" || promptFight === "FIGHT") {

            window.alert("The fight has begun!");

            //subtract player attack from enemy's health

            enemyHealth = enemyHealth - playerAttack;

            //log new enemy health in console

            console.log(

                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

            );

            if (enemyHealth <= 0) {

                window.alert(enemyName + " has died!");

            } else {

                window.alert(enemyName + " still has " + enemyHealth + " health left.");

            }

            //subtract enemy attack from player's health

            playerHealth = playerHealth - enemyAttack;

            //log new player health in console

            console.log(

                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."

            );

            if (playerHealth <= 0) {

                window.alert("You died!");

            } else {

                window.alert("You still have " + playerHealth + " health left.");

            }

        } else if (promptFight === "skip" || promptFight === "SKIP") {

            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {

                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                playerMoney = playerMoney - 2;

            } else {

                fight();

            }

            window.alert(playerName + " has chosen to skip the fight!");

        } else {

            window.alert("You need to choose a valid option. Try again!");

        }
    }

}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

fight();