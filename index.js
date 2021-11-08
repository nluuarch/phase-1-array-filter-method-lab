// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// function findMatching(drivers, value) {
//     for (const name of drivers) {
//         if (name === value);
//         console.log(name);
//     }
//   }

// findMatching(drivers, "Bobby");


// how does filterTest relate to input name(?)


function findMatching(someArray, name){ 
    function findBobbies(driver){
         if (driver.toLowerCase() === name.toLowerCase()) {
            return true;
         }
    }
    let allBobbies = someArray.filter(findBobbies);
    return allBobbies;
}


function fuzzyMatch(someArray, nameLetters){
    function findMatchingLetterName(driver){
      if (driver.startsWith(nameLetters)){
        return true;
      } 
    }
    let namesWithStartLetters = someArray.filter(findMatchingLetterName);
    return namesWithStartLetters;
  }
  

  function matchName(someObjects, name) {
    function findNamesTowns(driver){
      if (name === driver.name){
        return true;
      }
    } 
    let bobbiesTowns = someObjects.filter(findNamesTowns);
    return bobbiesTowns;
  }



