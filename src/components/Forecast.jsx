import { UilCloud } from '@iconscout/react-unicons'
import { UilRaindropsAlt } from '@iconscout/react-unicons'

export function Forecast({ weather, city }) {

    return (
        <div className="forecast">
            <div className="forecastBox">
                <h3>{city.adminAreaName}</h3>
                <div className="forecastRow">
                    {
                        weather.map(res => (
                            <div key={res.id} className='forecastResults'>
                                <p className='time'>{res.time}</p>
                                <UilCloud size={35} />
                                <p className='temp'>{res.temperature}°</p>
                                <div className='precipitationBox'>
                                    <UilRaindropsAlt className="UilRaindropsAlt" size={20} />
                                    <p className='precipitation'>{res.precipitation}%</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
