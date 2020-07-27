const videoData = [
  {
    name: 'Merlin Blue',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {bar: false},
      {lounge: false}
    ]
  },
  {
    name: 'Hoe Orange',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {bar: false},
      {lounge: false}
    ]
  },
  {
    name: 'Jessi Pink',
    present: true,
    rooms: [
      {kitchen: true},
      {ballroom: true},
      {conservatory: false},
      {bar: true},
      {lounge: true}
    ]
  }
];

let suspects = videoData.filter(function(suspectData) {
  return suspectData.present;
})
console.log(suspects);

const suspectsName = suspects.map(function (suspect) {
    return suspect.name;
})
console.log(suspectsName);












