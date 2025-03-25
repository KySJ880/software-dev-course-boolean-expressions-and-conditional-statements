/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasCompass = true;
const hasSword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const mountainChoice = readline.question(
    "As you climb higher, you encounter a mythical beast. Do you face the 'dragon' or the 'griffin'? "
  );
  if (mountainChoice === "dragon") {
    if (hasSword) {
      console.log("You bravely fight the dragon with your sword and emerge victorious!");
    } else {
      console.log("Without a weapon, the dragon overpowers you. You barely escape with your life.");
    }
  } else if (mountainChoice === "griffin") {
    if (hasCompass) {
      console.log("Using your compass, you navigate around the griffin's territory and avoid conflict.");
    } else {
      console.log("The griffin spots you and chases you away. You lose your way in the mountains.");
    }
  } else {
    console.log("You hesitate, and the mythical beast attacks. You barely escape with your life.");
  }
} else if (choice === "mountains") {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village") {
  if (!hasMap) {
    console.log("You realize you need a map to find the village.");
  } else {
    console.log("You find your way to the village.");

    const villageChoice = readline.question(
      "As you explore the village, you hear strange noises. Do you 'investigate' or 'hide'? "
    );

    if (villageChoice === "investigate") {
      console.log("You discover a group of zombies roaming the village!");
      const zombieChoice = readline.question(
        "Do you 'fight' the zombies or 'run' away? "
      );
      if (zombieChoice === "fight" && hasSword) {
        console.log("You fight off the zombies with your sword and save the village!");
      } else if (zombieChoice === "fight" && !hasSword) {
        console.log("Without a weapon, the zombies overpower you. You barely escape with your life.");
      } else if (zombieChoice === "run") {
        console.log("You run away and manage to escape the village safely.");
      } else {
        console.log("You hesitate, and the zombies surround you. You barely escape with your life.");
      }
    } else if (villageChoice === "hide") {
      console.log("You hide in a nearby house and wait for the danger to pass.");
    } else {
      console.log("You hesitate, and the strange noises grow louder. You decide to leave the village.");
    }
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/