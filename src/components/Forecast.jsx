import { UilCloud } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilUmbrella } from '@iconscout/react-unicons'

export function Forecast({ forecast }) {

    return (
        <div className="forecast">
            <div className="forecastBox">
                <h3>Pronóstico de hoy</h3>
                <div className="forecastRow">
                    {
                        forecast.map( forecast => (
                            <div key={forecast.id} className='forecastResults'>
                                <p className='time'>{forecast.time}</p>
                                <UilCloud size={35} />
                                <p className='temp'>{forecast.temperature}°C</p>
                                <UilWind size={35} />
                                <p className='wind'>{forecast.wind} km/h</p>
                                <UilUmbrella size={35} />
                                <p className='precipitation'>{forecast.precipitation}%</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
