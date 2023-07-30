import { Link } from 'gatsby';
import './BottomNavbar.scss';

const mainLinks = [
    { name: 'Nosotros', route: '/nosotros', icon: 'icon-people' },
    { name: 'Reclutamiento', route: '/reclutamiento', icon: 'icon-clipboard-user' },
    { name: '', route: '/', isHome: true },
    { name: 'Funcionamiento', route: '/funcionamiento', icon: 'icon-info' },
    { name: 'Soporte', route: '/soporte', icon: 'icon-help' },
];

const BottomNavbar = () => {
    return (
        <div className='o-bottom-navbar'>
            <nav className='o-bottom-navbar__container'>
                {
                    mainLinks.map(link => (
                        (link.isHome)
                            ?
                            (
                                <Link key={link.route} to={link.route} activeClassName='active'>
                                    <div className='a-circle-btn'>
                                        <div className='a-circle-btn__image'></div>
                                    </div>
                                </Link>
                            )
                            :
                            (
                                <Link key={link.route} to={link.route} activeClassName='active' partiallyActive={true}>
                                    <i className={link.icon}></i>
                                    <p>{link.name}</p>
                                </Link>
                            )
                    ))
                }
            </nav>
            <Link
                to='/terminos-generales'
                className='o-bottom-navbar__terms'
                activeClassName='active'
                partiallyActive={true}>
                Términos Generales
            </Link>
        </div>
    )
}

export default BottomNavbar