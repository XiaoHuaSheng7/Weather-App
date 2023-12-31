import { UilCloud } from '@iconscout/react-unicons'
import { UilRaindropsAlt } from '@iconscout/react-unicons'

export function WeeklyForecast({ weather }) {
    return (
        <div className="weeklyForecast">
            <div className='wf-box'>
                <div className="wf-container">
                    <div className='wf-title'>
                        <h3>Pronostico para esta semana</h3>
                    </div>

                    <div className='wf-item'>
                        <div className='wf-item-daybox'>
                            <p className='wf-item-day'>Lunes</p>
                            <span>31/12</span>
                        </div>
                        <UilCloud className='wf-item-img' size={40} />
                        <div className='wf-item-pres'>
                            <UilRaindropsAlt className="wf-UilRaindropsAlt" size={25} />
                            <p>0%</p>
                        </div>
                        <div className='wf-item-minmax'>
                            <span className='wf-item-max'>30°</span>
                            <span className='wf-item-min'>28°</span>
                        </div>
                    </div>

                    <div className='wf-item'>
                        <div className='wf-item-daybox'>
                            <p className='wf-item-day'>Lunes</p>
                            <span>31/12</span>
                        </div>
                        <UilCloud className='wf-item-img' size={40} />
                        <div className='wf-item-pres'>
                            <UilRaindropsAlt className="wf-UilRaindropsAlt" size={25} />
                            <p>0%</p>
                        </div>
                        <div className='wf-item-minmax'>
                            <span className='wf-item-max'>30°</span>
                            <span className='wf-item-min'>28°</span>
                        </div>
                    </div>

                    <div className='wf-item'>
                        <div className='wf-item-daybox'>
                            <p className='wf-item-day'>Lunes</p>
                            <span>31/12</span>
                        </div>
                        <UilCloud className='wf-item-img' size={40} />
                        <div className='wf-item-pres'>
                            <UilRaindropsAlt className="wf-UilRaindropsAlt" size={25} />
                            <p>0%</p>
                        </div>
                        <div className='wf-item-minmax'>
                            <span className='wf-item-max'>30°</span>
                            <span className='wf-item-min'>28°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}