import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import styles from './styles.module.css'

export const ItemListContainer = () => {
  const { categoria } = useParams();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    setIsLoading(true); 
    getProducts()
      .then((resp) => {
        if (categoria) {
          const filtradosCategoria = resp.filter((product) => product.categoria === categoria);
            
            if(filtradosCategoria.length > 0) {
              setProducts(filtradosCategoria);
            } else {
              setProducts(resp);
            }

        } else {
          setProducts(resp);
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [categoria]); 

  return (
    <>
      {isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}
    </>);
};
