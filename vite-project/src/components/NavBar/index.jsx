//NAVBAR

import Botones from './Botones';
import styles from './styles.module.css'
import {FaShoppingCart} from "react-icons/fa";

const NavBar = () => {
    return (  
    <div className={styles.container}>
        <div>
            <img className={styles.logoNavBar} src="./src/imgs/LIONS_logo.png" alt="logo" />
        </div>
        <Botones />
        <div>
        <FaShoppingCart size={40} />
        </div>
    </div>
    )
}

export default NavBar