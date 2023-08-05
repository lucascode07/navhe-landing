import { useState } from 'react';
import TermsConditions from '../../atoms/terms-conditions/TermsConditions';
import RecruitmentCard from '../../molecules/recruitment-card/RecruitmentCard';
import './RecruitmentPage.scss';
import FormPilot from '../../organisms/form-pilot/FormPilot';
import FormPartner from '../../organisms/form-partners/FormPartner';
import FormEmployment from '../../organisms/form-employment/FormEmployment';

const recruitmentData = [
    {
        image: '/images/recruitment01.png',
        title: 'Nuevos Empleos',
        description: '¿Tienes las habilidades y requisitos necesarios para unirte al staff de profesionales de Navhe Delivery?',
        buttonCopy: 'Descubre más',
        type: 'employment'
    },
    {
        image: '/images/recruitment02.png',
        title: 'Navhe Piloto',
        description: '¿Cuentas con un vehículo personal y el tiempo necesario para ser un Navhe Piloto? inscríbete ahora!',
        buttonCopy: 'Sé parte del equipo',
        type: 'pilot'
    },
    {
        image: '/images/recruitment03.png',
        title: 'Navhe Asociado',
        description: '¿Buscas que tus ventas suban, tu negocio tenga renombre y gane reputación? Inscríbete ahora!',
        buttonCopy: 'Sé parte del equipo',
        type: 'partner'
    },
]

const RecruitmentPage = () => {

    const [formType, setFormType] = useState<string>('');

    const setFormTypeTo = (type: string) => {
        setFormType(type);
        window.scroll({ top: 0 });
    }

    return (
        <div className='t-recruitment-page'>
            <div className={`recruitment-top-background ${formType !== '' ? 'reduce-height' : ''}`}></div>
            {
                (formType === '') && (
                    <div className='recruitment-page__forms-cards main-container'>
                        <div className='section-badge'>
                            <p>Reclutamiento</p>
                        </div>
                        <div className='forms-cards'>
                            {
                                recruitmentData.map(cardData => (
                                    <RecruitmentCard
                                        key={cardData.title}
                                        data={cardData}
                                        sendType={setFormTypeTo} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                (formType === 'pilot') && (
                    <FormPilot sendType={setFormTypeTo} />
                )
            }
            {
                (formType === 'partner') && (
                    <FormPartner sendType={setFormTypeTo} />
                )
            }
            {
                (formType === 'employment') && (
                    <FormEmployment sendType={setFormTypeTo} />
                )
            }
            <TermsConditions />
        </div>
    )
}

export default RecruitmentPage