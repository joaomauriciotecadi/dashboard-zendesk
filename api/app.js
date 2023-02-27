const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/tickets', (req, res) => {
    let base64 = require('base-64');
    let url = 'https://tecadi.zendesk.com/api/v2/search.json?query=type:ticket status:pending status:open status:hold';
    let username = 'luiz.poleza@tecadi.com.br/token';
    let password = 'JKPD8m6aP8yRziUwSpG8M5W5bv6vxCHB5q9b3jBL';

    let headers = new Headers();

    headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));
    fetch(url, {method:'GET',
            headers: headers
        })
    .then(response => response.json())
    .then(json => res.json(json)); 
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`))