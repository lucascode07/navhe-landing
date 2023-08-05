import { Link } from 'gatsby';
import './ResponseMessage.scss';

const ResponseMessage = () => {
    return (
        <div className='m-response-message'>
            <div className='m-response-message__icon'>
                <i className="icon-check-circle"></i>
            </div>
            <p className='m-response-message__title'>¡Tu registro fue enviado exitosamente!</p>
            <p className='m-response-message__text'>Pronto nos estaremos comunicando contigo.</p>
            <Link to='/'>Volver al inicio</Link>
        </div>
    )
}

export default ResponseMessage