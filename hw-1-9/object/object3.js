// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  

  for (let i = 0; i < Object.keys(myFavGames).length; i++) {
      console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
    console.log(`The Publisher Is ${myFavGames.YS.publisher }`);
    console.log(`The Price Is ${myFavGames.price}`);
  
    // Check If Nested Object Has Property (bestThree)
    if (myFavGames.YS.bestThree!==0) {
      console.log("- Game Has Releases");
      console.log(`First => ${myFavGames.YS.bestThree.one}`);
      console.log(`Second => ${myFavGames.YS.bestThree.two}`);
      console.log(`Third => ${myFavGames.YS.bestThree.three}`);
    }
    console.log("#".repeat(20));
  }
  
  // Ouput
  //   console.log(objectLength)
  
  "The Game Name Is Trinity Universe"
  "The Publisher Is NIS America"
  "The Price Is 40"
  "####################"
  "The Game Name Is Titan Quest"
  "The Publisher Is THQ"
  "The Price Is 50"
  "- Game Has Releases"
  "First => Immortal Throne"
  "Second => Ragnarök"
  "Third => Atlantis"
  "####################"
  "The Game Name Is YS"
  "The Publisher Is Falcom"
  "The Price Is 40"
  "- Game Has Releases"
  "First => Oath in Felghana"
  "Second => Ark Of Napishtim"
  "Third => origin"
  "####################"