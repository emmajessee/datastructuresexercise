// 1a.
const jedi = [];

// 1b.
jedi[0] = "Luke";
console.log(jedi); 

// 1c.
jedi.push("Obi-Wan Kenobi");
console.log(jedi); 

// 1d.
jedi.unshift("Yoda");
console.log(jedi); 

// 1e.
console.log(jedi[1]); 

// 1f.
jedi.pop();
console.log(jedi); 

// 1g.
jedi.shift();
// jedi.splice(0, 1);
console.log(jedi); 

// 2a.
const sithLords = [
  "Darth Vader",
  "Darth Sidious",
  "Darth Maul"
];

// 2b.
const imperialOfficers = [
  "Grand Moff Tarkin",
  "Orson Krennic"
];

// 2c.
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);


// 2d.
console.log(starWarsVillains.slice(2, 4)); 

// 3a.
const droids = {
  astromech: "R2-D2",
  protocol: "C-3PO",
  assassin: "IG-88"
};

// 3b.
console.log(droids[`astromech`]); 

// 3c.
console.log(droids.protocol); 

// 3d.
droids.assassin = "IG-11";
console.log(droids.assassin); 