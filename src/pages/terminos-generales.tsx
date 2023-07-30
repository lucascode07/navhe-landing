import { useEffect } from "react"
import { navigate } from "gatsby"

const GeneralTermsPage = () => {
    useEffect(() => {
        navigate('/terminos-generales/terminos-condiciones')
    }, [])

    return (
        <></>
    )
}

export default GeneralTermsPage