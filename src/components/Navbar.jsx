import { UilBars } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'

export function Navbar({ setModal }) {

    const handleClickPlus = () => {
        setModal(true)
    }

    return (
        <div className="navbar">
            <UilBars size={35} className="navbarIcon" />
            <h1 className='title'>Weather App</h1>
            <UilSearch onClick={handleClickPlus} size={30} className="navbarIcon" />
        </div>
    )
}