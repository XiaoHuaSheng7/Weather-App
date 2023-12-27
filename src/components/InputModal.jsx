import { useState } from "react"
import { UilBackspace } from '@iconscout/react-unicons'

export function InputModal({ setModal }) {

    const [query, setQuery] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setModal(false)
    }

    const handleChange = (event) => {
        const newQuery = event.target.value
        setQuery(newQuery)
    }

    const handleClick = () => {
        setModal(false)
    }

    return (
        <div className="modal">
            <form autoComplete="off" action="#" onSubmit={handleSubmit}>
                <UilBackspace onClick={handleClick} className="goBack" size={35} />
                <input onChange={handleChange} id="query" name="query" type="text" placeholder="Buscar" />
            </form>
            <p className="letter">Introduce un nombre de ubicación</p>
        </div>
    )
}