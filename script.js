const story = document.getElementById("story");
const inputArea = document.getElementById("inputArea");
const playerInput = document.getElementById("playerInput");

let step = 0;

const gameSteps = [
    "While exploring a haunted house, you accidentally triggered a trap.\nYou fell into a dark pit and lost consciousness.\nWhen you wake up, you find yourself in a mysterious dark room.\nYou hear strange noises and feel a chill in the air.\nTo survive you need to make a choice!! Which door do you want to open? (left/right)",
    "Enter your choice. Choose wisely: "
];

let currentChoice = "";

function nextStep() {
    const input = playerInput.value.trim().toLowerCase();
    playerInput.value = "";

    if (step === 0) {
        story.textContent = gameSteps[0];
        step = 1;
    } else if (step === 1) {
        currentChoice = input;
        if (input === "left") {
            story.textContent = "You push open the left door with trembling hands and discover a sparkling treasure chest!\nDo you want to open it? (yes/no)";
            step = 2;
        } else if (input === "right") {
            story.textContent = "You slowly open the right door and come face-to-face with a wild, bellowing monster!\nDo you want to fight it or run away? (fight/run)";
            step = 3;
        } else {
            story.textContent = "That door doesn't exist in this creepy mansion. You've completely lost your way. Game over :p";
            inputArea.style.display = "none";
        }
    } else if (step === 2) {
        if (input === "yes") {
            story.textContent = "A dazzling burst of light shines out as you reveal a trove of gold coins. Jackpot! You win!";
        } else {
            story.textContent = "You decide not to open the chest. Sometimes, playing it safe comes at a cost... Game over :p";
        }
        inputArea.style.display = "none";
    } else if (step === 3) {
        if (input === "fight") {
            story.textContent = "You muster up your courage and engage in an epic battle, defeating the monster and emerging a hero!";
        } else {
            story.textContent = "You run away safely... but oh, how cowardly you were! Better luck next time. Game over :p";
        }
        inputArea.style.display = "none";
    }
}
