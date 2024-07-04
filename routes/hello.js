const express = require('express');
const { getWeather } = require('../services/weatherServices');
const { lookupIp } = require('../utils/ipUtils');

const router = express.Router();

router.get('/', async (req, res) => {
    let visitor_name = req.query.visitor_name || 'mark';
    visitor_name = visitor_name.replace(/^"(.*)"$/, '$1');

    const ip = req.clientIp;

    try {
        const user_info = lookupIp(ip);
        if (!user_info) {
            return res.status(400).json({ error: 'Unable to determine location from IP address' });
        }

        const weather_info = await getWeather(user_info.ll);
        const temperature = weather_info?.timelines?.minutely[0]?.values?.temperature;

        if (temperature === undefined) {
            return res.status(500).json({ error: 'Failed to retrieve temperature data' });
        }

        res.json({
            client_ip: ip,
            location: user_info.city,
            greeting: `Hello ${visitor_name}!, the temperature is ${temperature} degrees Celsius in ${user_info.city}`,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather information' });
    }
});

module.exports = router;
