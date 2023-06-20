let databaseURL = 'https://script.google.com/macros/s/AKfycbxRknWkKvGXJ81CX0Hzo3G8v--GSTrkmHsl0ORBHoR5EbQbNB433s2yNylTu24ASHko/exec';

// fetch raw database
let rawProblemData = await fetch(databaseURL).then(res => res['json']());
function sendEmail() {
  Email.send({
    Host : "smtp.mailtrap.io",
    To : rawProblemData[0]['email'],
    From : "sender@example.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  }).then(
    message => alert(message)
  );
}
console.log(rawProblemData)
