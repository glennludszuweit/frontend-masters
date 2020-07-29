//promises
//fetch
function displayData(data) {
  console.log(data)
}
const futureData = fetch('http://twitter.com/glenn/1');
futureData.then(displayData);
console.log('Me First');
