// Define Objects andd use it to ..

// generate quirky message
const QuirkyGenerator = {
    starter: ['Your friends are', 'Your parents are', 'Your husband is', 'Your spouse is', 'Your bnoss is', 'You are ','Time is ','Life is ','Love is ', 'Humanity is ','Animals are ','To be alive is ','Nature is '],
    adjective: ['a spectacular ', 'the most amazing ','such a miraculous ','a most tragic ','such a demented ','quite the charming ','quite the mind-boggling ', 
    'an absolutely revolting ','an absolutely breath-taking ', ],
    noun: ['sensation!', 'creation!','phenomenon!','enigma!','catastrophe!','concept!','conundrum!','fabrication!','spectacle!'],
    randStarter () {
      return this.starter[Math.floor(Math.random() * this.starter.length)];
    },
    randAdjective () {
      return this.adjective[Math.floor(Math.random() * this.adjective.length)];
    },
    randNoun () {
      return this.noun[Math.floor(Math.random() * this.noun.length)];
    },
    randomMsg () {
      return `"${this.randStarter()}${this.randAdjective()}${this.randNoun()}"`;
    }
  };
  // generate inspirational message

const InspirationalGenerator = {
  quote: [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "You are never too old to set another goal or to dream a new dream.",
    "Don't watch the clock; do what it does. Keep going.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
  ],
  affirmation: [
    "I am capable of achieving anything I set my mind to.",
    "I am worthy of love and respect.",
    "I am in charge of my own happiness.",
    "I choose to see the good in every situation.",
    "I am grateful for everything I have in my life.",
    "I am confident in my abilities and talents.",
    "I am strong and capable of overcoming any challenge.",
    "I am deserving of success and happiness.",
    "I trust myself to make the right decisions.",
    "I am surrounded by positivity and love.",
  ],
  words: [
    "Persist",
    "Believe",
    "Focus",
    "Create",
    "Inspire",
    "Motivate",
    "Persevere",
    "Succeed",
    "Achieve",
    "Dream",
  ],
  randQuote () {
      return this.quote[Math.floor(Math.random() * this.quote.length)];
    },
    randAffirmation () {
      return this.affirmation[Math.floor(Math.random() * this.affirmation.length)];
    },
    randWords () {
      return this.words[Math.floor(Math.random() * this.words.length)];
    },
    randomMsg () {
      return `"${this.randWords()}!. ${this.randQuote()} Exclaim out loud: ${this.randAffirmation()}"`;
    }
};


const messageGenerator = () => {
  num = Math.floor(Math.random() * 2);
  if(num == 2){
      return QuirkyGenerator.randomMsg();
  }
  else{
      return InspirationalGenerator.randomMsg();
  }
};
  
messageGenerator();
