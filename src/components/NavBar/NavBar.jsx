import { Link } from "react-router-dom";
import styles from './styles.module.css'
import {FaShoppingCart} from "react-icons/fa";

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div>
            <img className={styles.logoNavBar} src="../src/imgs/LIONS_logo.png" alt="logo" />
        </div>
      <div>
        <Link to="/">
          <button className="btn btn-outline-dark mx-2">Todos los articulos</button>
        </Link>
        <Link to="/categoria/Bebidas">
          <button className="btn btn-outline-dark mx-2">Bebidas</button>
        </Link>
        <Link to="/categoria/Comidas">
          <button className="btn btn-outline-dark mx-2">Comidas</button>
        </Link>
        <Link to="/categoria/Accesorios">
          <button className="btn btn-outline-dark mx-2">Accesorios</button>
        </Link>
      </div>
      <Link to="/cart">
        <div className="cart">
          <FaShoppingCart size={40} />
        </div>
      </Link>
    </div>
  );
};

export default NavBar

 