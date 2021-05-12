" use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Conan",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Shultz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witzel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.Create one player array for each team
const [players1, players2] = game.players;
console.log("PLAY 1", players1, "PLAY 2", players2);

//2. in each players arr, we assume the 1st player is the goal and the others are the 10 players of the team
// for team 1, create a var gk for the goal keeper, and array var fieldPlayers for all other players
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. create an array allPlayers containing al players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. team 1 used 3 substitute players.
// create a new array playersFinal containing all players from team 1 and adding "Thiago", "Coutinho", "Pelisic"
const players1Final = [...players1, "Thiago", "Coutinho", "Pelisic"];
console.log(players1Final);

// 5. based on game.odds object, create one variable for each odd
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. write function printGoals that receives arbitrary number of player names(NOT an array)
// and print each of them to the console == print whatever info ther is in scored
// along with the number of goals that were scored in total= the number of total players
const printGoals = function (...players) {
  console.log(`These players ${[...players]} scored ${players.length} goals`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimich");
printGoals(...game.scored);

//7. the team with the lower odds is more likely to win
// print to the console which team is more likely to win
// if game.odds.team1 > game.odds.team2, then print game.odds.team2 to the console
// which of game.odds.team1 or game.odds.team2 is the lowest?
team1 < team2 && console.log("team 1 is more likely to win"); // team1< team2 is true, will return the last element
team1 > team2 && console.log("team 2 is more likely to win"); // team1>team2 is false, will return the console.log
