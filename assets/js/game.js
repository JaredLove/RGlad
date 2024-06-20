let playerName = window.prompt("What is your robots name?");
let playerHealth = 100;
let playerAttack = 10;


// You can also log multiple values at once like this
console.log(`${playerName}'s specs: Health: ${playerHealth} Attack: ${playerAttack}`);


let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

console.log(`${enemyName}'s specs: Health: ${enemyHealth} Attack: ${enemyAttack}`);

const fight = function(){
    // alert players the round started
    window.alert("Welcome To Robot Gladiators");
    // subtract the value of playerAttack from the value of enemyHealth
    enemyHealth -= playerAttack;
    if (enemyHealth <= 0){
        window.alert(`${playerName} has done ${playerAttack} damage to ${enemyName} resulting in his death!`)
    }else {
        // log the result
        console.log(`${playerName} attacked ${enemyName} for ${playerAttack} damage and ${enemyName} now has ${enemyHealth} health left.`);
    }
    // subtract the enemyAttack from the playerHealth
    playerHealth -= enemyAttack;
    if (playerHealth <= 0){
        window.alert(`${enemyName} has done ${enemyAttack} damage to ${playerName} resulting in his death!`)
    }else{
        // log the result 
        console.log(`${enemyName} attacked ${playerName} for ${enemyAttack} damage and ${playerName} now has ${playerHealth} health left.`);
    } 
};


fight();