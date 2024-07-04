const axios = require('axios');

const getWeather = async (coordinates) => {
    const [lat, lon] = coordinates;
    const weather_api_key = process.env.WEATHER_API_KEY;
    const base_url = process.env.WEATHER_API_URL;
    const complete_url = `${base_url}?location=${lat},${lon}&apikey=${weather_api_key}`;

    try {
        const response = await axios.get(complete_url);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Failed to fetch weather information');
    }
};

module.exports = { getWeather };
