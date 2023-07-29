import { useEffect } from "react"
import { navigate } from "gatsby"

const SupportPage = () => {
    useEffect(() => {
        navigate('/soporte/cuenta')
    }, [])

    return (
        <></>
    )
}

export default SupportPage