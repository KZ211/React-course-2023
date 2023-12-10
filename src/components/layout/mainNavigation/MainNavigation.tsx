import { MdPostAdd, MdMessage } from "react-icons/md";

import Button from '../../reusable/Button'

const MainNavigation : React.FC = () =>{
    function sayHello(){
        console.log('hello');
    }

    return (
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h1><MdMessage/> Welcome</h1>
                <form className="d-flex" role="addPost">
                    <Button icon={<MdPostAdd/>} name='New Post' interact={sayHello} />
                </form>
            </div>
        </nav>
        <hr className="hr"/>
        </>
    );
}

export default MainNavigation;