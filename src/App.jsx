import './styles/App.css'
import { Navbar } from './components/Navbar'
import { City } from './components/City'
import { Temperature } from './components/Temperature'
import { Description } from './components/Description'
import { MaxMin } from './components/MaxMin'
import { Forecast } from './components/Forecast'
import { Footer } from './components/Footer'

/* 

TODO: Cambiar los estilos para dimension Samsung S8+
TODO: realizar la funcionalidad de la aplicacion 
TODO: realizar el fetch

*/

export function App() {

  return (
    <div className='container'>
      <Navbar />
      <City />
      <Temperature />
      <Description />
      <MaxMin />
      <Forecast />
      <Footer />
    </div>
  )
}

