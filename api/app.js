const express = require('express');
const cors = require('cors');
//const base64 = require('base-64');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;
const user = {
    username: 'luiz.poleza@tecadi.com.br/token',
    password: 'JKPD8m6aP8yRziUwSpG8M5W5bv6vxCHB5q9b3jBL'
}
app.use(cors());

//tickets by group
app.get('/tickets/:group_id', async (req, res) => {

    const { group_id } = req.params

    console.log('oi');

    let url = `https://tecadi.zendesk.com/api/v2/search.json?query=type:ticket group_id:${group_id} status:pending status:open status:hold status:new`;

    axios.defaults.headers.common['Authorization'] = `Basic ${Buffer.from(user.username + ":" + user.password).toString('base64')}`;

    try {
        const response = await axios.get(url);
        res.send(response.data.results);

    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log('Servidor - Dashboard Zendesk rodando...');
})