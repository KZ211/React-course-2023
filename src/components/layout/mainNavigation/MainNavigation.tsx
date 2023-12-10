import { MdPostAdd, MdMessage } from "react-icons/md";

import Button from '../../reusable/Button'

const MainNavigation : React.FC = () =>{
    function sayHello(){
        console.log('hello');
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1><MdMessage/> Welcome</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Button icon={<MdPostAdd/>} name='New Post' interact={sayHello} />
        </div>
    </div>
  </div>
</nav>
        </>
    );
}

export default MainNavigation;