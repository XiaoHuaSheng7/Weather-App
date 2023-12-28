import './styles/App.css'
import { Navbar } from './components/Navbar'
import { City } from './components/City'
import { Temperature } from './components/Temperature'
import { Description } from './components/Description'
import { Forecast } from './components/Forecast'
import { Footer } from './components/Footer'
import { InputModal } from './components/InputModal'
import { Country } from './components/Country'

import { useWeather } from './hooks/useWeather'
import { useModal } from './hooks/useModal'

/* 
TODO: Agregar los recuadros y componentes para el week forecast y el today forecast. El hourly ya esta echo
TODO: Agregar functionalidad como opciones
TODO: Adaptar input a los nuevos estilos
TODO: realizar el fetch

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
            <Forecast city={city} weather={weather} />
            <Footer />
          </div>
        )
      }
    </div>
  )
}

