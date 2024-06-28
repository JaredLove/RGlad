let gameOngoing = true; 

const rng = function(min, max){
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num; 
}

const fight = function(enemyObj){
        console.log(`${playerInfo.name}'s specs: Health: ${playerInfo.health} Attack Power: ${playerInfo.attack}`);
        while(playerInfo.health > 0 && enemyObj.health > 0  && gameOngoing){
            let promptFight = window.prompt("Would you like to FIGHT, SKIP, or End this battle? Enter 'FIGHT', 'SKIP', or 'Quit' to choose").toLowerCase();

            if(promptFight === "FIGHT" || promptFight === "fight"){
                let damage = rng(playerInfo.attack - 3, playerInfo.attack);
                // subtract the value of playerInfo.attack from the value of enemyObj.health
                enemyObj.health = Math.max(0, enemyObj.health - damage);
                if (enemyObj.health <= 0){
                    window.alert(`${playerInfo.name} has done ${damage} damage to ${enemyObj.name} resulting in their death!`);
                    playerInfo.score += 20;
                    break;
                }else {
                    // log the result
                    console.log(`${playerInfo.name} attacked ${enemyObj.name} for ${damage} damage and ${enemyObj.name} now has ${enemyObj.health} health left.`);
                }
                let eDamage = rng(enemyObj.attack - 3, enemyObj.attack);
                // subtract the enemyObj.attack from the playerInfo.health
                playerInfo.health = Math.max(0, playerInfo.health - eDamage);
                if (playerInfo.health <= 0){
                    window.alert(`${enemyObj.name} has done ${eDamage} damage to ${playerInfo.name} resulting in your death!`);
                    break;
                }else{
                    // log the result 
                    console.log(`${enemyObj.name} attacked ${playerInfo.name} for ${eDamage} damage and ${playerInfo.name} now has ${playerInfo.health} health left.`);
                }
            }else if(promptFight === "SKIP" || promptFight === "skip"){
                window.alert(`You chose to skip!`);
                window.alert(`The bosses arent happy about this!`);
                let confirm = window.confirm(`Are you sure you want to do this?`);
                if(confirm){
                    playerInfo.gold = Math.max(0, playerInfo.gold - 2);
                    window.alert(`The bosses took 2 gold pieces from you!`)
                    console.log(`Your now have ${playerInfo.gold} gold pieces left.`)
                    break;
                }else{
                    window.alert(`That's the spirit ${playerInfo.name}, get back in there!`);
                }
            }else if(promptFight === "QUIT" || promptFight === "quit"){
                window.alert(`${playerInfo.name} has chosen to quit the game!`);
                window.alert(`Come back when you have to guts to win ${playerInfo.name}!`);
                gameOngoing = false;
                return;
            }else{  
                window.alert("Please input a valid response");
            }
        }
};

const shop = function(){
    window.alert("Welcome to the tavern!");
    let shopOptionPrompt = window.prompt("Type 1 to Heal, 2 to upgrade your attack, and 3 to leave the tavern");
    console.log(`${playerInfo.name}'s gold: ${playerInfo.gold}`);
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch(shopOptionPrompt){
        case 1:
            let healOption = window.confirm("Healing will cost you 7 gold pieces, are you sure you want to this?");
            if(healOption){
                playerInfo.heal();
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
        case 2:
            let upgradeOption = window.confirm("Upgrading your attack by 5 will cost you 5 gold pieces, are you sure you want to this?");
            if(upgradeOption){
                playerInfo.upgrade();
            }
            
            let reUpShop = window.confirm("Is there anything else I can do for ya?")
            if(reUpShop){
                shop();
            }else{
                window.alert("Thank you for visiting the tavern!");
            }

            break;
        case 3:
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
    if(playerInfo.health > 0 ){
        window.alert(`The game is over ${playerInfo.name}. Let's see how you did!`);
        window.alert(`Your score is ${playerInfo.score}`); 
    }else {
        window.alert(`${playerInfo.name} has died in battle!`);
        window.alert("Game Over!");
    }

    let playagainConfirm = window.confirm("Would you like to play again?");
    
    if(playagainConfirm){
        startGame();
    }else {
        window.alert("Thank you for playing Robot Gladiators, come back soon!");
    }

    

}

const getPlayerName = function(){
    let playerName = "";

    while(playerName === "" || playerName === null || playerName === undefined){
        playerName = prompt("What is your players name?");
    }
    
    return playerName;
    
}

const playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    gold: 10,
    score: 0,
    fullReset: function() {
        this.health = 100;
        this.attack = 10;
        this.gold = 10;
        this.score = 0;
    },
    heal: function() {
        if (this.gold >= 7) {
            window.alert("You suddenly feel the warmth of sunlight washing over you, healing for 20 health points.");
            this.health += 20;
            this.gold -= 7;
            console.log(`You now have ${this.gold} gold left.`);
        } else {
            window.alert("You don't have enough gold!");
        }
    },
    upgrade: function() {
        if (this.gold >= 5) {
            window.alert("You give your weapon to the shopkeeper. His hands glow blue, magic fills the air, and with a flash, your sword does 5 more damage.");
            this.attack += 5;
            this.gold -= 5;
            console.log(`You now have ${this.gold} gold left.`);
        } else {
            window.alert("You don't have enough gold!");
        }
    }
}

const enemyInfo = [

    {
        name: "Roborto",
        attack: rng(10, 14)
    },
    {
        name: "Amy Android",
        attack: rng(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: rng(10, 14)
    }
];




const startGame = function(){ 
    // reset player stats
    playerInfo.fullReset();
    gameOngoing = true;
    for(i=0; i < enemyInfo.length && gameOngoing; i++){
        if(playerInfo.health > 0){
            // alert players the round started
            window.alert("Welcome To Robot Gladiators");
            window.alert(`Round ${i + 1}: ${playerInfo.name} vs ${enemyInfo[i].name}`);
            let pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = rng(40, 60);
            fight(pickedEnemyObj); 

            if(playerInfo.health > 0 && i <  enemyInfo.length -1){
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