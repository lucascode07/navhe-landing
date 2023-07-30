import { Link } from 'gatsby';
import { InternalNavigationItem } from '../../../interfaces/internal-page.interface';
import './InternalSidebar.scss';
import { useState } from 'react';

interface Props {
    linksList: InternalNavigationItem[];
}

const InternalSidebar = ({ linksList }: Props) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='m-internal-sidebar'>
            <div className='m-internal-sidebar__expand-btn'>
                <button className='btn-primary' onClick={onExpanded}>
                    {
                        isExpanded
                            ? <i className='icon-times'></i>
                            : <i className='icon-menu'></i>

                    }
                </button>
            </div>
            <div className={
                `m-internal-sidebar__navigation ${isExpanded ? 'expanded' : ''}`
            }>
                {
                    linksList.map(link => (

                        <Link
                            key={link.slug}
                            className='navigation-link-container'
                            to={`../${link.slug}`} activeClassName='active'>
                            <div className='navigation-link'>
                                <div className='navigation-link__info'>
                                    {
                                        (link.icon !== '') &&
                                        <i className={link.icon}></i>
                                    }
                                    <p>{link.copy}</p>
                                </div>
                                <i className='icon-arrow-right'></i>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}

export default InternalSidebar