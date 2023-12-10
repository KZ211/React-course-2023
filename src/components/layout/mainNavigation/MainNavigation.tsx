import { MdPostAdd, MdMessage } from "react-icons/md";

import Button from '../../reusable/Button'

interface ModalChange{
    modalState: () => void;
  }

const MainNavigation : React.FC<ModalChange> = ({modalState}) => {

    return (
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h1><MdMessage/> Welcome</h1>
                <form className="d-flex" role="addPost">
                    <Button icon={<MdPostAdd/>} name='New Post' interact={modalState} />
                </form>
            </div>
        </nav>
        <hr className="hr"/>
        </>
    );
}

export default MainNavigation;