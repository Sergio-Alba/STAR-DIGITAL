
// ** botones  navegacion abrir y cerrar menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrirNav");
const cerrar = document.querySelector("#cerrarNav");
abrir.addEventListener("click", () => (
    nav.classList.add("visible")
));
cerrar.addEventListener("click", () => (
    nav.classList.remove("visible")
));

//** BOTON DEL MENU DE PRODUCTOS  */
let listElementos = document.querySelectorAll(".abrir--menu");
listElementos.forEach(listElement =>{
    listElement.addEventListener("click", ()=>{
        listElement.classList.toggle("arrow");
    })
})

//**BOTON DE FORMULARIO */

    


// ** MOSTRAAR CARRITO
const verCarrito = document.querySelector("#verCarrito");
const modalContainer = document.querySelector("#modalContainer");
const x = document.querySelector("#x");

//** CONTENEDOR DE PRODUCTOS  */
const contenedorProd= document.getElementById("contenedorProductos");
const sections = document.querySelector('#section2')
//** PRODUCTOS */
const stockProductos= [
    {
        "id":"01",
        "img" : "../assets/img/Infinix-NOTE-30-Pro.jpg",
        "nombre": "infinix note 30pro",
        "precio": 329 ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "16gb",
            "procesador": "MediaTek Helio G99 2.00 GHz",
            "pantalla":"1080 x 2400px HD+",
            "bateria":"5000 mAH",
            "camara":"triple: 108mp, 2mp , 2mp",
            "camara frontal": "32mp",
            "carga rapida": "65w"
        }
    },
    {
        "id":"01",
        "img" : "../assets/img/Galaxy S23 Ultra.jpg ",
        "nombre": "Galaxy S23 Ultra",
        "precio": 1.511 ,
        "descripcion":{
            "memoria": "1 Tb",
            "ram": "12gb",
            "procesador": "Gualcomm Snapdragon 8 Gen 2",
            "pantalla":"AMOLED de 6,8 pulgadas",
            "bateria":"5000 mAH",
            "camara":"200mp, 12mp",
            "camara frontal": "12mp",
            "carga rapida": "45w"
        }
    },
    {
        "id":"01",
        "img" : "../assets/img/Xiaomi 13 Pro.jpg ",
        "nombre": "Xiaomi 13 Pro",
        "precio": 1.500 ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "12 Gb",
            "procesador": "Snapdragon 8 Gen 2",
            "pantalla":"OLED 6,73",
            "bateria":"4820 mAh",
            "camara":"50mp, 50mp, 50mp",
            "camara frontal": "32mp",
            "carga rapida": "120w"
        }
    },
    {
        "id":"01",
        "img" : "../assets/img/Oneplus 10T.jpg ",
        "nombre": "Oneplus 10T",
        "precio": 492 ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "8 Gb",
            "procesador": "Snapdragon 8+ gen 1",
            "pantalla":"Fluid AMOLED 6.70 pulgadas",
            "bateria":"4800 mAh",
            "camara":"50mp",
            "camara frontal": "16mp",
            "carga rapida": "150w"
        }
    },
    {
        "id":"01",
        "img" : "../assets/img/Realme GT Neo 3.jpg",
        "nombre": "Realme GT Neo 3",
        "precio": 642 ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "8 Gb",
            "procesador": "Dimensity 8100",
            "pantalla":"AMOLED 6,7",
            "bateria":"5000 mAh",
            "camara":"50mp 8mp 2mp",
            "camara frontal": "16mp",
            "carga rapida": "80w"
        }
    },
    {
        "id":"02",
        "img" : "../assets/img/Xiaomi Redmi Note 11.jpg",
        "nombre": "Xiaomi Redmi Note 11",
        "precio": 179 ,
        "descripcion":{
            "memoria": "128 Gb",
            "ram": "6 Gb",
            "procesador": "Snapdragon 680",
            "pantalla":"6,43",
            "bateria":"5000 mAh",
            "camara":"50mp 8mp 2mp 2mp",
            "camara frontal": "13mp",
            "carga rapida": "33w"
        }
    },
    {
        "id":"02",
        "img" : "../assets/img/Samsung Galaxy A52.jpg",
        "nombre": "Samsung Galaxy A52",
        "precio": 374 ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "8 Gb",
            "procesador": "6",
            "pantalla":"Super AMOLED de 6,5 pulgadas",
            "bateria":"4.500 mAh",
            "camara":"64mp 12mp 5mp 5mp",
            "camara frontal": "32mp",
            "carga rapida": "25w"
        }
    },
    {
        "id":"02",
        "img" : "../assets/img/Xiaomi Poco X5 Pro.jpg",
        "nombre": "Xiaomi Poco X5 Pro",
        "precio": 696  ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "8 Gb",
            "procesador": "Snapdragon 778G",
            "pantalla":"6,67",
            "bateria":"5000 mAh",
            "camara":"108mp 8mp 2mp",
            "camara frontal": "16mp",
            "carga rapida": "65w"
        }
    },
    {
        "id":"02",
        "img" : "../assets/img/Motoro Edge 30.jpg",
        "nombre": "Motorola Edge 30",
        "precio": 865 ,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "8 Gb",
            "procesador": "MediaTek Helio G99",
            "pantalla":"AMOLED de 6.40 pulgadas",
            "bateria":"5.000 mAh",
            "camara":"50mp 2mp",
            "camara frontal": "16mp",
            "carga rapida": "33w"
        }
    },
    {
        "id":"02",
        "img" : "../assets/img/Realme 10.jpg",
        "nombre": "Realme 10",
        "precio":  340,
        "descripcion":{
            "memoria": "256 Gb",
            "ram": "8 Gb",
            "procesador": "6",
            "pantalla":"Super AMOLED de 6,5 pulgadas",
            "bateria":"4.500 mAh",
            "camara":"64mp 12mp 5mp 5mp",
            "camara frontal": "32mp",
            "carga rapida": "25w"
        }
    },
    {
        "id":"03",
        "img" : "../assets/img/redmi 9.jpg",
        "nombre": "Redmi 9",
        "precio":  320,
        "descripcion":{
            "memoria": "32 Gb",
            "ram": "2 Gb",
            "procesador": "Helio G25",
            "pantalla":"6.5pg",
            "bateria":"5000 mAh",
            "camara":"13mp",
            "camara frontal": "5mp",
            "carga rapida": "25w"
        }
    },
    {
        "id":"03 ",
        "img" : "../assets/img/redmi a1.webp",
        "nombre": "Redmi A1 ",
        "precio": 270,
        "descripcion":{
            "memoria": "32 Gb",
            "ram": "2 Gb",
            "procesador": "Helio A22",
            "pantalla":"1600 * 720 pixeles",
            "bateria":"5000 mAh",
            "camara":"8mp",
            "camara frontal": "5mp",
            "carga rapida": "10w"
        }
    },
    {
        "id":"03",
        "img" : "../assets/img/Note 8P.png",
        "nombre": "Note 8P",
        "precio": 250 ,
        "descripcion":{
            "memoria": "16 Gb",
            "ram": "2 Gb",
            "procesador": "Media Tek MT67",
            "pantalla":"5.5pg",
            "bateria":"2700 mAh",
            "camara":"8mp 2mp",
            "camara frontal": "5mp",
            "carga rapida": "25w"
        }
    },
    {
        "id":"03",
        "img" : "../assets/img/samsung galaxy a10.jpg",
        "nombre": "Samsung Galaxy A10",
        "precio": 210 ,
        "descripcion":{
            "memoria": "32 Gb",
            "ram": "2 Gb",
            "procesador": "Exynos 7884",
            "pantalla":"6.2 HD+",
            "bateria":"3.400 mAh",
            "camara":"13mp",
            "camara frontal": "5mp",
            "carga rapida": "25w"
        }
    }
];

//** CONSUMIENDO UNA API CON FETCH */
fetch("https://pokeapi.co/api/v2/ability/battle-armor")
    .then((res)=> res.json())
    .then((data)=>{
        const pokemons = data.results;
        pokemons.forEach((pokemon)=>{
            const section = document.createElement('section')
            contenedor.className = "section__div--carts"
            contenedor.innerHTML = `<img class="div__img--carts" src="${pokemon.img} " width="300" alt="samsung-galaxy-z-flip">
                                    <h4 class="div__h4--nombre--producto">${pokemon.nombre}</h3>
                                    <p class="div__p--descripcion--producto">${pokemon.descripcion}</p>`
        sections.appendChild(sections);
        })
    });

//** CARRITO  */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//** RECORRIENDO LOS PRODUCTOS  */
stockProductos.forEach((producto)=>{
    let contenedor = document.createElement("div");
    contenedor.className = "section__div--carts"
    contenedor.innerHTML = `<img class="div__img--carts" src="${producto.img} " width="300" alt="samsung-galaxy-z-flip">
                            <h4 class="div__h4--nombre--producto">${producto.nombre}</h3>
                            <p class="div__p--descripcion--producto">${producto.precio} $</p>
                            `;

    contenedorProd.append(contenedor);

//**BOTON PARA AÑADIR AL CARRTO */
    let comprar = document.createElement("button");
    comprar.className = "button__shop--plus"
    comprar.innerHTML = `
    <i class="bi bi-cart-plus"></i>
    `;
    contenedor.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            img:producto.img,
            nombre:producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito);
    });
});

//** CONTENEDOR DEL CARRITO  */
verCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML = ``
    modalContainer.style.display="flex";
    const modalHeader = document.createElement("div");
    modalContainer.className = "informacion--compra"
    modalContainer.innerHTML = `<h3>Carrito</h3>`;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("button");
    modalbutton.innerText = "X";
    modalbutton.className = "button"
    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display="none";
    })
    modalHeader.append(modalbutton);

//** MOSTRAMOS LOS PRODUCTOS QUE ESTAN EN EL CARRITO DE COMPRAS */
    carrito.forEach((producto) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal__content"
        carritoContent.innerHTML =
                        `<img class="img--cart" src="${producto.img}" width="100"">
                        <h4 class="h4--cart">${producto.nombre}</h3>
                        <p class="p--cart">${producto.precio} $</p>`
        modalContainer.append(carritoContent);
        saveLocal();
    });

//** FUNCION PARA SUMAR LOS ARTICULOS DE EL CARRITO DE COMPRAS */
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

//** CREAMOS UN  CONTENEDOR PARA MOSTRAR LA SUMA DE LOS PRODUCTOS */
    const totalBuying = document.createElement("div");
        totalBuying.className = "total--content";
        totalBuying.innerHTML = `total a pagar: ${total}$`
        modalContainer.append(totalBuying);
});

//**GUARDAMOS EN EL ALMACENAMIENTO LOCAL LOS PRODUCTOS DEL CARRITO */
const saveLocal = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};







