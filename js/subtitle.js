function getRandomGreeting() {
  var greetings = [
    "Beep boop! your not sigma, like gautham, you robot.",
    "You unsigma tin can, unlike Gautham who is sigma and not a tin can :3",
    "How many sides does a circle have?",
    "How sigma are you",
    "Gautham is AWESOME isn't he",
    "GAUTHAM IS AMAZING isn't he",
    "According to my book, your not sigma and Gautham is.",
    "Wyd? Gautham made this so click games and have fun?",
    "Sigma sigma on the wall, Gautham is the sigmaest of them ____",
    "Gautham's websites are awesome obvi",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
