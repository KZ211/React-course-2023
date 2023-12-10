
import MainNavigation from "./mainNavigation/MainNavigation";

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <nav className="mainNavigation">
            <MainNavigation />
            </nav>
        </div>
        
    );
}

export default Layout;