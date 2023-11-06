//NAVBAR

import Botones from './Botones';
import styles from './styles.module.css'
import {FaShoppingCart} from "react-icons/fa";

const NavBar = () => {
    return (  
    <div className={styles.container}>
        <div>
            <img src="" alt="logo" />
        </div>
        <Botones />
        <div>
        <FaShoppingCart size={25} />
        </div>
    </div>
    )
}

export default NavBar