import { Link } from "react-router-dom";
import styles from './item.module.css'


export const Item = ({id, nombre, img, detalle, precio }) => {

  const cardStyle=`${styles.card} col-sm-6 col-md-4 col-lg-3`;
  const detailStyle= `btn btn-outline-success ${styles.cardInfo}`
  return (
    <div className={cardStyle}>
        <div className={styles.contenedorCard}>
        <div className="card-body ">
        <div className={styles.cardInfo}>
          <h5 className="card-title">{nombre}</h5>
          {/* <div className="cardImg">
            <img src={img} alt={nombre} />
          </div> */}
          <p className="card-text"> {detalle} </p>
          </div>
          <Link to={`/item/${id}`}>
            <button className={detailStyle}>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
