import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { InternalGridData, InternalSectionContent, InternalStatsInfo } from '../../../interfaces/internal-page.interface';
import './InternalSection.scss';

interface Props {
    section: InternalSectionContent[];
}
interface GridProps {
    gridData: InternalGridData[];
}
interface StatsProps {
    statsData: InternalStatsInfo[];
}

const InternalGrid = ({ gridData }: GridProps) => {
    return (
        <div className='section-grid'>
            {
                gridData.map(gridItem => (
                    <div key={gridItem.name} className='section-grid__item'>
                        <img src={gridItem.image} alt="foto de integrante de la empresa" />
                        <p className='item-title'>{gridItem.name}</p>
                        {
                            gridItem.info.map((info, index) => (
                                <p key={info} className={`item-info-${index}`}>{info}</p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

const InternalStats = ({ statsData }: StatsProps) => {
    return (
        <div className='section-stats'>
            {
                statsData.map(stat => (
                    <div key={stat.title} className='section-stats__item'>
                        <img width={145} height={145} src={stat.image} alt="Imagen de estadística" />
                        <p>{stat.title}</p>
                        <p>{stat.number}</p>
                    </div>
                ))
            }
        </div>
    );
}

const InternalSection = ({ section }: Props) => {

    useEffect(() => {
        ScrollReveal({
            origin: 'right',
            distance: '30px',
            duration: 1000,
        }).reveal('.internal-content-section');
    }, []);

    return (
        <div className='internal-content-section load-hidden'>
            {
                section.map(content => (
                    <div key={content.title} className='internal-section'>
                        {
                            (content.gridData.length < 1 || content.gridData === null &&
                                content.statsInfo.length < 1 || content.statsInfo === null)
                            &&
                            (
                                <>
                                    <h3 className='section-title'>{content.title}</h3>
                                    {
                                        content.text.map(paragraph => (
                                            <p key={paragraph} className='section-text'>{paragraph}</p>
                                        ))
                                    }
                                </>
                            )
                        }
                        {
                            (content.gridData && content.gridData.length > 0)
                            && (<InternalGrid gridData={content.gridData} />)
                        }
                        {
                            (content.statsInfo && content.statsInfo.length > 0)
                            &&
                            (<InternalStats statsData={content.statsInfo} />)
                        }
                    </div >
                ))
            }
        </div>



    )
}

export default InternalSection