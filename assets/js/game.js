// Game States
// "WIN" - Player robot has defeated all enemy-robots 
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

let playerName = window.prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;


// You can also log multiple values at once like this
console.log(`${playerName}'s specs: Health: ${playerHealth} Attack: ${playerAttack}`);


const enemyRobots = ["Roborto", "Amy Andriod", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

// console.log(`${enemyRobot}'s specs: Health: ${enemyHealth} Attack: ${enemyAttack}`);
    // alert players the round started
    window.alert("Welcome To Robot Gladiators");

const fight = function(enemyName){
    while(playerHealth > 0 && enemyHealth > 0){
        let promptFight = window.prompt("Would you like to FIGHT, SKIP, or End this battle? Enter 'FIGHT', 'SKIP', or 'Quit' to choose");


        if(promptFight === "FIGHT" || promptFight === "fight"){
            // subtract the value of playerAttack from the value of enemyHealth
            enemyHealth -= playerAttack;
            if (enemyHealth <= 0){
                window.alert(`${playerName} has done ${playerAttack} damage to ${enemyName} resulting in his death!`);
                break;
            }else {
                // log the result
                console.log(`${playerName} attacked ${enemyName} for ${playerAttack} damage and ${enemyName} now has ${enemyHealth} health left.`);
            }
            // subtract the enemyAttack from the playerHealth
            playerHealth -= enemyAttack;
            if (playerHealth <= 0){
                window.alert(`${enemyName} has done ${enemyAttack} damage to ${playerName} resulting in your death!`);
                break;
            }else{
                // log the result 
                console.log(`${enemyName} attacked ${playerName} for ${enemyAttack} damage and ${playerName} now has ${playerHealth} health left.`);
            }
        }else if(promptFight === "SKIP" || promptFight === "skip"){
            window.alert(`You chose to skip!`);
            window.alert(`The bosses arent happy about this!`);
            let confirm = window.confirm(`Are you sure you want to do this?`);
            if(confirm){
                playerMoney -= 2;
                window.alert(`The bosses took 2 gold pieces from you!`)
                console.log(`Your now have ${playerMoney} gold pieces left.`)
                fight();
            }else{
                window.alert(`That the spirit ${playerName}, get back in there!`);
                fight();
            }
        }else if(promptFight === "QUIT" || promptFight === "quit"){
            window.alert(`${playerName} has chosen to quit the game!`);
            window.alert(`Come back when you have to guts to win ${playerName}!`);
            break;
        }else{  
            window.alert("Please input a valid option 'FIGHT' or 'SKIP'");
            fight();
        }
    }
};

const startGame = function(enemyNames){ 
    for(i=0; i < enemyNames.length; i++){
        let pickedEnemyName = enemyNames[i];        
        enemyHealth = 50;
        playerHealth = 100;
        fight(pickedEnemyName);

    }
}

startGame(enemyRobots);