import cityResponse from '../mocks/cityResponse.json'
import weatherResponse from '../mocks/weatherResponse.json'
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';


export function useWeather() {
    const cityJson = cityResponse
    const weatherJson = weatherResponse

    const cityRes = cityJson.map(res => {
        return {
            cityName: res.LocalizedName,
            cityKey: res.Key,
            countryName: res.Country.LocalizedName,
            adminAreaName: res.AdministrativeArea.EnglishName
        }
    })
    
    const city = cityRes[0]

    const weather = weatherJson.map(res => {
        const formattedTime = format(new Date(res.DateTime), 'HH:mm');
        return {
            time: formattedTime,
            weather: res.IconPhrase,
            temperature: Math.round(res.Temperature.Value),
            realFeel: Math.round(res.RealFeelTemperature.Value),
            wind: Math.round(res.Wind.Speed.Value),
            humidity: Math.round(res.RelativeHumidity),
            visibility: Math.round(res.Visibility.Value),
            uv: res.UVIndexText,
            precipitation: Math.round(res.PrecipitationProbability),
            snow: Math.round(res.SnowProbability)
        }
    })

    weather.forEach(r => {
        r.id = uuidv4()
    })

    return ({city, weather})
}
