import { UilBars } from '@iconscout/react-unicons'
import { UilPlusCircle } from '@iconscout/react-unicons'

export function Navbar(){
    return(
        <div className="navbar">
            <UilBars size={35} className="menuIcon"/>
            <h1 className='title'>Weather App</h1>
            <UilPlusCircle size={35} className="moreIcon"/>
        </div>
    )
}