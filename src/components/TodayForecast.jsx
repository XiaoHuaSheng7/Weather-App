import { UilTemperatureHalf } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { UilCloudShowersHeavy } from '@iconscout/react-unicons'
import { UilSnowflake } from '@iconscout/react-unicons'

export function TodayForecast({ weather }) {
    return (
        <div className="todayForecast">
            <div className="todayForecastBox">
                <div className="todayForecastItem ">
                    <UilTemperatureHalf className="icon" size={30} />
                    <p>Sensacion termica</p>
                    <span>{weather[0].realFeel} °C</span>
                </div>
                <span className='divider'></span>
                <div className="todayForecastItem ">
                    <UilWind className="icon" size={30} />
                    <p>Viento</p>
                    <span>{weather[0].wind} Km/h</span>
                </div>
                <span className='divider'></span>
                <div className="todayForecastItem ">
                    <UilTear className="icon" size={30} />
                    <p>Humedad</p>
                    <span>{weather[0].humidity}%</span>
                </div>
                <span className='divider'></span>
                <div className="todayForecastItem ">
                    <UilEye className="icon" size={30} />
                    <p>Visibilidad</p>
                    <span>{weather[0].visibility}%</span>
                </div>
                <span className='divider'></span>
                <div className="todayForecastItem ">
                    <UilCloudShowersHeavy className="icon" size={30} />
                    <p>Precipitaciones</p>
                    <span>{weather[0].precipitation}%</span>
                </div>
                <span className='divider'></span>
                <div className="todayForecastItem ">
                    <UilSnowflake className="icon" size={30} />
                    <p>Nieve</p>
                    <span>{weather[0].snow}%</span>
                </div>
            </div>
        </div>
    )
}