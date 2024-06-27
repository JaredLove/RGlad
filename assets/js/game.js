// Game States
// "WIN" - Player robot has defeated all enemy-robots 
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

let playerName = window.prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;
let score = 0;
let gameOngoing = true; 

// You can also log multiple values at once like this
console.log(`${playerName}'s specs: Health: ${playerHealth} Attack: ${playerAttack}`);


const enemyRobots = ["Roborto", "Amy Andriod", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

// console.log(`${enemyRobot}'s specs: Health: ${enemyHealth} Attack: ${enemyAttack}`);=

const rng = function(min, max){
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num; 
}
const fight = function(enemyName){

        while(playerHealth > 0 && enemyHealth > 0  && gameOngoing){
            let promptFight = window.prompt("Would you like to FIGHT, SKIP, or End this battle? Enter 'FIGHT', 'SKIP', or 'Quit' to choose");


            if(promptFight === "FIGHT" || promptFight === "fight"){
                let damage = rng(playerAttack - 3, playerAttack);
                // subtract the value of playerAttack from the value of enemyHealth
                enemyHealth = Math.max(0, enemyHealth - damage);
                if (enemyHealth <= 0){
                    window.alert(`${playerName} has done ${damage} damage to ${enemyName} resulting in their death!`);
                    score += 20;
                    break;
                }else {
                    // log the result
                    console.log(`${playerName} attacked ${enemyName} for ${damage} damage and ${enemyName} now has ${enemyHealth} health left.`);
                }
                let eDamage = rng(enemyAttack - 3, enemyAttack);
                // subtract the enemyAttack from the playerHealth
                playerHealth = Math.max(0, playerHealth - eDamage);
                if (playerHealth <= 0){
                    window.alert(`${enemyName} has done ${eDamage} damage to ${playerName} resulting in your death!`);
                    break;
                }else{
                    // log the result 
                    console.log(`${enemyName} attacked ${playerName} for ${eDamage} damage and ${playerName} now has ${playerHealth} health left.`);
                }
            }else if(promptFight === "SKIP" || promptFight === "skip"){
                window.alert(`You chose to skip!`);
                window.alert(`The bosses arent happy about this!`);
                let confirm = window.confirm(`Are you sure you want to do this?`);
                if(confirm){
                    playerMoney = math.max(0, playerMoney - 2);
                    window.alert(`The bosses took 2 gold pieces from you!`)
                    console.log(`Your now have ${playerMoney} gold pieces left.`)
                    break;
                }else{
                    window.alert(`That's the spirit ${playerName}, get back in there!`);
                }
            }else if(promptFight === "QUIT" || promptFight === "quit"){
                window.alert(`${playerName} has chosen to quit the game!`);
                window.alert(`Come back when you have to guts to win ${playerName}!`);
                gameOngoing = false;
                return;
            }else{  
                window.alert("Please input a valid option 'FIGHT' or 'SKIP'");
            }
        }
};

const shop = function(){
    window.alert("Welcome to the tavern!");
    let shopOptionPrompt = window.prompt("Would you like to 'HEAL', 'UPGRADE', or 'LEAVE' the tavern?");
    console.log(`${playerName}'s gold: ${playerMoney}`);
    switch(shopOptionPrompt){
        case "HEAL":
        case "heal":
            let healOption = window.confirm("Healing will cost you 7 gold pieces, are you sure you want to this?");
            if(playerMoney < 7) {
                window.alert("You do not have enough gold to do this");
            }else if(healOption && playerMoney >= 7){
                window.alert("You suddenly feel this warmth of sunlight washing over you healing for 20 health points.");
                playerMoney -= 7;
                playerHealth += 20;
                console.log(`You now have ${playerMoney} gold left.`);
            }else{
                window.alert("You chose to not heal.");
            }
            
            let reShop = window.confirm("Is there anything else I can do for ya?")
            if(reShop){
                shop();
            }else{
                window.alert("Thank you for visiting the tavern!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            let upgradeOption = window.confirm("Upgrading your attack by 5 will cost you 5 gold pieces, are you sure you want to this?");
            if(playerMoney < 5) {
                window.alert("You do not have enough gold to do this");
            }else if(upgradeOption && playerMoney >= 5){
                window.alert("You give your weapon to the shop keeper, his hands glow blue, magic feels the air, and with a flash your sword does 5 more damage .");
                playerMoney -= 5;
                playerAttack += 5;
                console.log(`You now have ${playerMoney} gold left.`);
            }else{
                window.alert("You chose to not upgrade.");
            }
            
            let reUpShop = window.confirm("Is there anything else I can do for ya?")
            if(reUpShop){
                shop();
            }else{
                window.alert("Thank you for visiting the tavern!");
            }

            break;
        case "LEAVE":
        case "leave":
            let leaveOption = window.confirm("You are exting the tavern, are you sure you want to do this?");
            if(leaveOption){
                window.alert("Thank you for visiting the tavern!");
            }else{
                shop();
            }
            break;
        default:
            console.log("You did not choose a valid option");
            shop();
            break;
    }
}

const endGame = function(){
    if(playerHealth > 0 ){
        window.alert(`The game is over ${playerName}. Let's see how you did!`);
        window.alert(`Your score is ${score}`); 
    }else {
        window.alert(`${playerName} has died in battle!`);
        window.alert("Game Over!");
    }

    let playagainConfirm = window.confirm("Would you like to play again?");
    
    if(playagainConfirm){
        startGame();
    }else {
        window.alert("Thank you for playing Robot Gladiators, come back soon!");
    }

    

}


const startGame = function(){ 
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    gameOngoing = true;
    for(i=0; i < enemyRobots.length && gameOngoing; i++){
        if(playerHealth > 0){
            // alert players the round started
            window.alert("Welcome To Robot Gladiators");
            window.alert(`Round ${i + 1}: ${playerName} vs ${enemyRobots[i]}`);
            let pickedEnemyName = enemyRobots[i];      
            console.log(pickedEnemyName);
            enemyHealth = rng(40, 60);
            fight(pickedEnemyName);

            if(playerHealth > 0 && i < enemyRobots.length -1){
                let shopConfirm = window.confirm("The fight is over, would you like to vist the store before the next round?");
                
                if(shopConfirm){
                  shop();  
                }
            }
        }
    }

    endGame();
}

startGame();