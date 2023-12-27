import withResponse from '../mocks/withResponse.json'
import { v4 as uuidv4 } from 'uuid';

export function useWeather() {
    const response = withResponse.hourly.data
    const weatherForecast = response.slice(0, 4)

    const forecast = weatherForecast?.map(day => {
        const date = new Date(day.date);
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        });

        return {
            time: formattedTime.slice(0, -3),
            temperature: Math.round(day.temperature),
            weather: day.weather,
            wind: Math.round(day.wind.speed),
            precipitation: Math.round(day.precipitation.total)
        };
    });

    forecast.forEach( forecast => {
        forecast.id = uuidv4()
    })

    return ({ forecast })
}
