import { useState } from 'react';
import { Link } from 'gatsby';
import Glider from 'react-glider';
import { GliderProps } from 'react-glider/dist/types';
import 'glider-js/glider.min.css';

import './HomeGlider.scss';
import googleImg from '../../../assets/images/google-play.svg';
import appleImg from '../../../assets/images/app-store.svg';
import home01Img from '../../../assets/images/home-01.svg';
import home02Img from '../../../assets/images/home-02.svg';
import home03Img from '../../../assets/images/home-03.svg';

const arrows: GliderProps['arrows'] = {
    prev: '#buttonPrev',
    next: '#buttonNext'
}

const HomeGlider = () => {

    const [counter, setCounter] = useState<number>(1);

    const setPage = (e: CustomEvent<any>) => {
        setCounter(e.detail.slide + 1)
    }

    return (
        <div className='o-home-glider'>
            <Glider
                slidesToShow={1}
                slidesToScroll={1}
                arrows={arrows}
                hasArrows
                onSlideVisible={setPage}
            >
                <section className='o-home-glider__section'>
                    <div className='section-info'>
                        <div className='section-badge'>
                            <p>Bienvenidos</p>
                        </div>
                        <h1>Somos Navhe una aplicación delivery para todos en casa.</h1>
                        <p className='section-description'>
                            Una aplicación en la que, además de pedir lo que desees, podrás compartir tus gustos e interactuar con otros usuarios a través de historias y otras divertidas funciones.
                        </p>
                        <img className='section-image' src={home01Img} alt="imagen de la sección" />
                        <p className='section-question'>¿Tienes nuestra App?</p>
                        <p className='section-answer'>Descárgate nuestra App disponible en iOS y en Android.</p>
                        <div className='section-images'>
                            <img src={googleImg} alt="Logo de google play" />
                            <img src={appleImg} alt="Logo de app store" />
                        </div>
                    </div>
                    <img className='section-image section-image__desktop' src={home01Img} alt="imagen de la sección" />
                </section>
                <section className='o-home-glider__section'>
                    <div className='section-info'>
                        <div className='section-badge'>
                            <p>Convocatoria</p>
                        </div>
                        <h1>Estamos buscando pilotos que formen parte de nuestro equipo</h1>
                        <p className='section-description'>Si vives en Jaén, Bagua Grande o Chachapoyas; tienes una moto lineal, taxi urbano, mototaxi o bicicleta; eres responsable, empático, amable y quieres trabajar según tu disponibilidad de tiempo.</p>
                        <img className='section-image' src={home02Img} alt="imagen de la sección" />
                        <p className='section-question'>¿Quieres ser parte de nuestro equipo?</p>
                        <p className='section-answer'>Ven, sé parte del equipo Navhe y conviértete en un Piloto.</p>
                        <Link to='/reclutamiento' className='section-link'>Descubre Más</Link>
                    </div>
                    <img className='section-image section-image__desktop' src={home02Img} alt="imagen de la sección" />
                </section>
                <section className='o-home-glider__section'>
                    <div className='section-info'>
                        <div className='section-badge'>
                            <p>Convocatoria</p>
                        </div>
                        <h1>Te ofrecemos un espacio para hacer crecer tu negocio.</h1>
                        <p className='section-description'>Sabemos el amor que tienes por tu negocio, y que hemos pasado por una difícil temporada, por eso te ofrecemos un espacio alternativo de visualización, venta y entrega de tus productos y servicios</p>
                        <img className='section-image' src={home03Img} alt="imagen de la sección" />
                        <p className='section-question'>¿Quieres ser parte de nuestro equipo?</p>
                        <p className='section-answer'>No lo pienses más y conviértete un Asociado.</p>
                        <Link to='/reclutamiento' className='section-link'>Descubre Más</Link>
                    </div>
                    <img className='section-image section-image__desktop' src={home03Img} alt="imagen de la sección" />
                </section>
            </Glider>

            <div className='o-home-glider__controls'>
                <button
                    id='buttonPrev'
                    disabled={counter === 1}>
                    <i className='icon-arrow-right'></i>
                </button>
                <p>{counter}/3</p>
                <button
                    id='buttonNext'
                    disabled={counter === 3}>
                    <i className='icon-arrow-right'></i>
                </button>
            </div>
        </div>
    )
}

export default HomeGlider