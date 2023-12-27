import { useState } from "react"

export function useModal() {

    const [modal, setModal] = useState(true)

    return ({ modal, setModal })
}