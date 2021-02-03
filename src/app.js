//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
let managerDetails=[]
function createManager(managerName, managerAge, currentTeam, trophiesWon){
        managerDetails=[managerName,managerAge,currentTeam,trophiesWon]
        return managerDetails
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
function createFormation(array) {
  if (array.length == 0)
    return null

  let object = {
    defender: array[0],
    midfield: array[1],
    forward: array[2]
  };
  return object
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter(function(player){
    if(player.debut===year){
      return player
    }
  })
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(positions){
  return players.filter(function(player){
    if(player.position===positions){
      return player
    }
  })
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  return players.filter(function(player){
    for(each of player.awards){
      if(each.name===awardName){
        return player
      }
    }
  })
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  
  var count=0
  return players.filter(function(player){
    
    for(each of player.awards){
      if(each.name===awardName){
        count+=1
      }
    }
    
    if(count===noOfTimes){
      count=0
      return player}
    count=0
  })
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, Country){
  return players.filter(function(player){
    if(player.country===Country){
      for(each of player.awards){
        if(each.name===awardName)return player
      }
    }
  })
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  return players.filter(function(player){
    if(player.awards.length>=noOfAwards && player.team===team && player.age<age)return player
  })
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
