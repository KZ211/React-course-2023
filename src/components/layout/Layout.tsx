
import MainNavigation from "./mainNavigation/MainNavigation";

interface Props{
    modalstate: () => void
}

const Layout: React.FC<Props> = ({modalstate}) => {
    return (
        <div className="layout">
            <nav className="mainNavigation">
            <MainNavigation modalState={modalstate}/>
            </nav>
        </div>
        
    );
}

export default Layout;