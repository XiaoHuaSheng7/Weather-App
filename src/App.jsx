import './styles/App.css'
import { Navbar } from './components/Navbar'
import { City } from './components/City'
import { Temperature } from './components/Temperature'
import { Description } from './components/Description'
import { HourlyForecast } from './components/HourlyForecast'
import { TodayForecast } from './components/TodayForecast'
import { Footer } from './components/Footer'
import { InputModal } from './components/InputModal'
import { Country } from './components/Country'
import { WeeklyForecast } from './components/WeeklyForecast'

import { useWeather } from './hooks/useWeather'
import { useModal } from './hooks/useModal'

/*
TODO: Agregar el componente para el week forecast.
TODO: mejorar las pseudoclases css como :hover, :focus, etc.
TODO: Agregar functionalidad como opciones.
TODO: Realizar el responsive de la web.
TODO: realizar el fetch.

url:
apiKey: rU4iyeYH5KZpS1T6iSQs686LPfCJNjhL
cityKey: 7894
*/

export function App() {

  const { city, weather } = useWeather()
  const { modal, setModal } = useModal()

  return (
    <div className='container'>
      {
        modal ? (
          <InputModal setModal={setModal} />
        ) : (
          <div className='main'>
            <Navbar setModal={setModal} />
            <City city={city}/>
            <Country city={city} />
            <Temperature weather={weather} />
            <Description weather={weather} />
            <TodayForecast weather={weather} />
            <HourlyForecast weather={weather} />
            <WeeklyForecast weather={weather} />
            <Footer />
          </div>
        )
      }
    </div>
  )
}
