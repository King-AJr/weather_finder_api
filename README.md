# Weather Greeting API

This API sets up a basic web server using Express.js and provides an endpoint that returns a personalized greeting along with the current temperature in the user's location based on their IP address. The weather information is fetched using the [Tomorrow.io](https://www.tomorrow.io/) weather API.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoint](#api-endpoint)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Running the Server](#running-the-server)

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-greeting-api.git
    cd weather-greeting-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```plaintext
    PORT=3005
    WEATHER_API_KEY=your_weather_api_key
    WEATHER_API_URL=https://api.tomorrow.io/v4/weather/forecast
    ```

## Project Structure

```
project/
│
├── .env
├── server.js
├── routes/
│   └── hello.js
├── services/
│   └── weatherService.js
├── controllers/
    └── helloController.js
└── utils/
    └── ipUtils.js
```

- **server.js**: Main entry point of the application.
- **routes/hello.js**: Defines the `/api/hello` endpoint.
- **controllers/helloController.js**: Contains the function to handle the request made to `/api/hello` endpoint.
- **services/weatherService.js**: Contains the function to fetch weather data from the Tomorrow.io API.
- **utils/ipUtils.js**: Contains the function to lookup IP address information.

## API Endpoint

### GET /api/hello

This endpoint returns a JSON response with the client's IP address, location, and a greeting message that includes the current temperature.

#### Request Parameters
- `visitor_name` (optional): The name of the visitor to be included in the greeting message.

#### Example Request
```
GET /api/hello?visitor_name=Mark
```

#### Example Response
```json
{
    "client_ip": "207.97.227.239",
    "location": "New York",
    "greeting": "Hello Mark!, the temperature is 11 degrees Celsius in New York"
}
```

## Environment Variables

- `PORT`: The port on which the server will run (default is 3005).
- `WEATHER_API_KEY`: Your API key for the Tomorrow.io weather service.
- `WEATHER_API_URL`: The base URL for the Tomorrow.io weather API.

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.
- **cors**: Provides middleware to enable CORS.
- **axios**: Promise based HTTP client for the browser and Node.js.
- **geoip-lite**: A light weight IP geolocation library.
- **request-ip**: A simple way to get a client's IP address.

## Running the Server

To run the server locally, use:

```bash
npm run start
```

The server will start and listen on the port defined in the `.env` file (default is 3005).