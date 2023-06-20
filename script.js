let databaseURL = 'https://script.google.com/macros/s/AKfycbxRknWkKvGXJ81CX0Hzo3G8v--GSTrkmHsl0ORBHoR5EbQbNB433s2yNylTu24ASHko/exec';

// fetch raw database
let rawProblemData = await fetch(databaseURL).then(res => res['json']());

console.log(rawProblemData)
