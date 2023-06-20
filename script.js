let databaseURL = 'https://script.google.com/macros/s/AKfycbzNPpmMM-eZbaRnnOvh6n1OsYQefouXW0Lymd3L9OW6fJSlFZy2Xr7Nz20cX8K0Z8rs/exec';

// fetch raw database
let rawProblemData = await fetch(databaseURL).then(res => res['json']());
