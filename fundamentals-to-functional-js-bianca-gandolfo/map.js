//SAMPLE 1
const weapons = ['dagger', 'revolver', 'bat'];

const makeBroken = function(item) {
  return `Broken ${item}`;
}

const brokenWeapons = weapons.map(function(weapon) {
  return makeBroken(weapon);
});

console.log(brokenWeapons)

//SAMPLE 2
function createSuspectsObject(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: function () {
      console.log(`My name is, ${name}`);
    }
  }
}

const suspects = ['Merlin Blue', 'Joe Orange', 'Jessi Pink'];

const suspectsList = [];

suspects.map(function(suspect) {
  return createSuspectsObject(suspect)
})