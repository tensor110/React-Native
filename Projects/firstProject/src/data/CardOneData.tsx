const charmanderData = {
    name: 'Charamander',
    image: require("../assets/CardOne/Carmander.jpg"),
    type: 'fire',
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["water", "Rock"]
};

const squirtleData = {
    name: "Squirtle",
    image: require("../assets/CardOne/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../assets/CardOne/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../assets/CardOne/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

export { charmanderData, squirtleData, bulbasaurData, pikachuData };