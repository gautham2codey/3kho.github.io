function getRandomGreeting() {
  var greetings = [
    "Beep boop! Are you a robot?",
    "Did you know your weird!?",
    "How many sides does a circle have?",
    "How sigma are you",
    "Gautham is AWESOME isn't he",
    "GAUTHAM IS AMAZING isn't he",
    "That proves you are unusual",
    "What's my age again?",
    "Sigma sigma on the wall, ____",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
