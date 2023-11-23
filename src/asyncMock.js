/* const products = [
  { id: "1", name: "Zapato", img: "url-img", price: 100, category: "calzados", description: "Una Zapato", stock: 10 },
  { id: "2", name: "Bota", img: "url-img", price: 100, category: "calzados", description: "Una Bota", stock: 10 },
  { id: "3", name: "Ojota", img: "url-img", price: 100, category: "calzados", description: "Un Ojota", stock: 10 },
  { id: "4", name: "Zapatilla", img: "url-img", price: 100, category: "calzados", description: "Una Zapatilla", stock: 10 },
  { id: "5", name: "Remera", img: "url-img", price: 100, category: "ropa", description: "Una Remera", stock: 10 },
  { id: "6", name: "Camisa", img: "url-img", price: 100, category: "ropa", description: "Una Camisa", stock: 10 },
  { id: "7", name: "Pantalón", img: "url-img", price: 100, category: "ropa", description: "Una Pantalón", stock: 10 },
]; */
  


const products = [
    {id:'1', nombre: 'Agua 600cc', detalle: 'Agua Mineral natural', img:'../src/imgs/agua600.jpg', precio: 250, categoria: 'Bebidas', stock: 20},
    {id:'2', nombre: 'Agua 2lts', detalle: 'Agua Mineral natural', img:'../src/imgs/agua2lts.jpeg', precio: 450, categoria: 'Bebidas', stock: 20},
    {id:'3', nombre: 'Barrita Proteica', detalle: 'Barra proteica a base de maní', img:'../src/imgs/barrita.webp', precio: 250, categoria: 'Comidas', stock: 20},
    {id:'4', nombre: 'Crema de Maní', detalle: 'Crema de mani variedad Natural', img:'../src/imgs/hardy.jpeg', precio: 1150, categoria: 'Comidas', stock: 20},
    {id:'5', nombre: 'Powerade Azul', detalle: 'Bebida Isotónica', img:'../src/imgs/powerade.jpeg', precio: 900, categoria: 'Bebidas', stock: 20},
    {id:'6', nombre: 'Café expresso', detalle: 'Café en cápsula Nesspreso', img:'../src/imgs/cafe.webp', precio: 500, categoria: 'Bebidas', stock: 20},
    {id:'7', nombre: 'Cupcake Vainilla', detalle: 'Cupcake saludable a base de avena', img:'../src/imgs/cupcake.jpeg', precio: 400, categoria: 'Comidas', stock: 20},
    {id:'8', nombre: 'Calleras', detalle: 'Calleras gimnásticas de cuero', img:'../src/imgs/calleras.webp', precio: 9000, categoria: 'Accesorios', stock: 20},
    {id:'9', nombre: 'Speed Rope', detalle: 'Soga de alta velocidad con rodamientos', img:'../src/imgs/speedrope.webp', precio: 12000, categoria: 'Accesorios', stock: 20},
    {id:'10', nombre: 'Rodilleras de neoprene', detalle: 'Rodilleras 5mm', img:'../src/imgs/rodilleras.webp', precio: 14500, categoria: 'Accesorios', stock: 20},
    {id:'11', nombre: 'Cinturon de fuerza', detalle: 'Cinturón para fuerza. Sostenedor del core', img:'../src/imgs/cinto.webp', precio: 24500, categoria: 'Accesorios', stock: 20},
    {id:'12', nombre: 'Muñequeras elasticas', detalle: 'Muñequeras elasticas', img:'../src/imgs/muñequeras.webp', precio: 16800, categoria: 'Accesorios', stock: 20},
];

/* export default listaAccesorios; */







  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };