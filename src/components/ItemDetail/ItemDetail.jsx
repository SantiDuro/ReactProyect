import { ItemCount } from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import styles from './styles.module.css'

export const ItemDetail = ({ nombre, img , precio, detalle, stock }) => {
   
    const onAdd = (items) => { 
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Se agregaron ${items} ${nombre} al carrito`,
        showConfirmButton: false,
        timer: 1500
      });
     }

     const cardStyle=`${styles.card}`;
    const detailStyle= `btn btn-outline-success ${styles.cardInfo}`

  return (
    <div className={cardStyle}>
      <div className={styles.contenedorCard}>
        <div className="card-body ">
        <div className={styles.cardInfo}>
          <h5 className="card-title">{nombre}</h5>
          {/* <img src={img} alt={nombre} /> */}
          <p className="card-text"> {detalle} </p>
          <p>Precio: ${precio} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
        </div>
      </div>
    </div>
  );
};

        