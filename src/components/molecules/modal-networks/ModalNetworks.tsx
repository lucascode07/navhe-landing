import './ModalNetworks.scss';

interface Props {
    showModal: () => void
}

const ModalNetworks = ({ showModal }: Props) => {

    return (
        <div className='m-modal-networks'>
            <div className='m-modal-networks__container'>
                <button className='btn-primary m-modal-networks__close' onClick={showModal}>
                    <i className='icon-times'></i>
                </button>
                <div className="m-modal-networks__links">
                    <a href="https://www.instagram.com/navhedeliveryapp/" target='_blank'>
                        <i className='icon-instagram'></i>
                    </a>
                    <a href="https://www.facebook.com/navhedeliveryapp" target='_blank'>
                        <i className='icon-facebook'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ModalNetworks