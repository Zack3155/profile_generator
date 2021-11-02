const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});