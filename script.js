let databaseURL = 'https://script.google.com/macros/s/AKfycbxRknWkKvGXJ81CX0Hzo3G8v--GSTrkmHsl0ORBHoR5EbQbNB433s2yNylTu24ASHko/exec';

// fetch raw database
let rawProblemData = await fetch(databaseURL).then(res => res['json']());
function sendMail(name, email, subject, message) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set('Authorization', 'Basic ' + btoa('<API Key>'+":" +'<Secret Key>'));

  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": "test@gmail.com", "Name": "test@gmail.com"},
      "To": [{"Email": rawProblemData[0]['email'], "Name": 'test'}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };

  fetch("https://api.mailjet.com/v3.1/send", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
console.log(rawProblemData)
