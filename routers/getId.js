const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('body:', await req.body);
    // res.json({
    //     status: 'ok'
    // })
    const id = req.body;
    const url = `https://swapi.dev/api/planets/${id}`
    //console.log('url:', url);
    const planetName = await axios.get(url);
    console.log(planetName.data.name);
});


module.exports = router;