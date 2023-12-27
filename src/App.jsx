import './styles/App.css'
import { Navbar } from './components/Navbar'
import { City } from './components/City'
import { Temperature } from './components/Temperature'
import { Description } from './components/Description'
import { DateTime } from './components/DateTime'
import { Forecast } from './components/Forecast'
import { Footer } from './components/Footer'
import { InputModal } from './components/InputModal'

import { useWeather } from './hooks/useWeather'
import { useModal } from './hooks/useModal'

/* 
TODO: Dar un estilo mas propio a la aplicación, cambiando la paleta de colores y un poco el diseño
TODO: realizar la funcionalidad de la aplicacion 
TODO: realizar el fetch
*/
// https://www.meteosource.com/es/documentation#point
// style={{opacity: modal ? '0.5' : '1'}
export function App() {

  const { forecast } = useWeather()
  const { modal, setModal } = useModal()

  return (
    <div className='container'>
      {
        modal ? (
          <InputModal setModal={setModal} />
        ) : (
          <div className='main'>
            <Navbar setModal={setModal} />
            <City />
            <DateTime forecast={forecast} />
            <Temperature forecast={forecast} />
            <Description forecast={forecast} />
            <Forecast forecast={forecast} />
            <Footer />
          </div>
        )
      }
    </div>
  )
}

