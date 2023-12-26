import { UilCloud } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilUmbrella } from '@iconscout/react-unicons'
import { UilCloudShowersHeavy } from '@iconscout/react-unicons'

export function Forecast() {
    return (
        <div className="forecast">
            <div className="forecastBox">
                <h3>Forecast for today</h3>
                <div className="forecastRow">
                    <div className='forecastResults'>
                        <p className="time">Now</p>
                        <UilCloud size={35} />
                        <p className='temp'>2°C</p>
                        <UilWind size={35} />
                        <p className='wind'>20 km/h</p>
                        <UilUmbrella size={35} />
                        <p className='precipitation'>15 %</p>
                    </div>
                    <div className='forecastResults'>
                        <p className="time">15:00</p>
                        <UilCloudShowersHeavy size={35} />
                        <p className='temp'>1°C</p>
                        <UilWind size={35} />
                        <p className='wind'>10 km/h</p>
                        <UilUmbrella size={35} />
                        <p className='precipitation'>70 %</p>
                    </div>
                    <div className='forecastResults'>
                        <p className="time">15:00</p>
                        <UilCloudShowersHeavy size={35} />
                        <p className='temp'>1°C</p>
                        <UilWind size={35} />
                        <p className='wind'>10 km/h</p>
                        <UilUmbrella size={35} />
                        <p className='precipitation'>70 %</p>
                    </div>
                    <div className='forecastResults'>
                        <p className="time">15:00</p>
                        <UilCloudShowersHeavy size={35} />
                        <p className='temp'>1°C</p>
                        <UilWind size={35} />
                        <p className='wind'>10 km/h</p>
                        <UilUmbrella size={35} />
                        <p className='precipitation'>70 %</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
