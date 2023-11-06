//BOTONES

import styles from './styles.module.css'

const Botones = () =>{

    const btnStyle = `${styles.boton} btn btn-primary`;
    return(

        <div className={styles.botones}> 
            <a className={btnStyle} href="">Inicio</a>
            <a className={btnStyle} href="">Categorías</a>
            <a className={btnStyle} href="">Accesorios</a>
            <a className={btnStyle} href="">Tienda Saludable</a>
        </div>
    )
}

export default Botones