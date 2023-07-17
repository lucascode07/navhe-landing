import TermsConditions from '../../atoms/terms-conditions/TermsConditions';
import HomeGlider from '../../organisms/home-glider/HomeGlider';
import './HomePage.scss'

const HomePage = () => {
    return (
        <main className='t-home-page'>

            <div className='t-home-page__header'>
                <div className='main-container'>
                    <p className='header-title'>Vive a tiempo.</p>
                    <div className='header-buttons'>
                        <button>
                            <i className='icon-contactless'></i>
                        </button>
                        <button>
                            <i className='icon-user'></i>
                        </button>
                    </div>
                    <div className='header-desktop-buttons'>
                        <p>Síguenos</p>
                        <a href="https://www.instagram.com/navhedeliveryapp/" target='_blank'>
                            <i className='icon-instagram'></i>
                        </a>
                        <a href="https://www.facebook.com/navhedeliveryapp" target='_blank'>
                            <i className='icon-facebook'></i>
                        </a>
                        <button className='btn-primary'>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
            <div className='main-container'>
                <HomeGlider />
            </div>
            <TermsConditions />
        </main>
    )
}

export default HomePage