import BottomNavbar from '../../organisms/bottom-navbar/BottomNavbar';
import './Layout.scss';

interface Props {
    children: React.JSX.Element | React.JSX.Element[]
}

const Layout = ({ children }: Props) => {
    return (
        <div className='t-layout'>
            {children}
            <BottomNavbar />
        </div>
    )
}

export default Layout