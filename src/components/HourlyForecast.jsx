import { UilCloud } from '@iconscout/react-unicons'
import { UilRaindropsAlt } from '@iconscout/react-unicons'

export function HourlyForecast({ weather, city }) {

    return (
        <div className="hourly">
            <div className="hourlyBox">
                <div className='hourlyTitle'>
                    <h3>{city.adminAreaName}</h3>
                </div>
                <div className="hourlyRow">
                    {
                        weather.map(res => (
                            <div key={res.id} className='hourlyResults'>
                                <p className='hourlyTime'>{res.time}</p>
                                <UilCloud size={35} />
                                <p className='hourlyTemp'>{res.temperature}°</p>
                                <div className='hourlyPrecipitationBox'>
                                    <UilRaindropsAlt className="hourlyUilRaindropsAlt" size={20} />
                                    <p className='hourlyPrecipitation'>{res.precipitation}%</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
