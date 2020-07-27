//FOREACH
function createSuspectsObject(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: function () {
      console.log(`My name is, ${name}`);
    }
  }
}

let suspects = ['Merlin Blue', 'Joe Orange', 'Jessi Pink'];

let suspectsList = [];

//for (let i = 0; i < suspects.length; i++) {
  //let suspect = createSuspectsObject(suspects[i]);
  //suspectsList.push(suspect);
  //suspectsList.push(createSuspectsObject(suspects[i]));
//}

suspects.forEach(function(suspect) {
  suspectsList.push(createSuspectsObject(suspect));
})

suspectsList.forEach(function(suspect) {
  suspect.speak();
})
