import { navigate } from "gatsby"
import { useEffect } from "react"

const AboutUsPage = () => {

    useEffect(() => {
        navigate('/nosotros/quienes-somos')
    }, [])


    return (
        <></>
    )
}

export default AboutUsPage