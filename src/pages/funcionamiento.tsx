import { useEffect } from "react"
import { navigate } from "gatsby"

const OperationPage = () => {

    useEffect(() => {
        navigate('/funcionamiento/clientes')
    }, [])

    return (
        <></>
    )
}

export default OperationPage