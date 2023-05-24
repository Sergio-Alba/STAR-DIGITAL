
const verCarrito = document.querySelector("#verCarrito");
const modalContainer = document.querySelector("#modalContainer");
const x = document.querySelector("#x");

 //productos
const contenedorProd= document.getElementById("contenedorProductos");


const stockProductos= [
    {
        id: 1,
        nombre: "Audifonos Rosa Sony",
        precio: 80,
        img: "../assets/img/audifonos rosa sony.jpg",
    },
    {
        id: 2,
        nombre: "Celular z-flip",
        precio: 250,
        img: "../assets/img/samsung-galaxy-z-flip.jpg",
    },
    {
        id: 3,
        nombre: "Audifonos honor",
        precio: 60,
        img: "../assets/img/audifonos honor.jpg",
    }
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

stockProductos.forEach((producto)=>{
    let contenedor = document.createElement("div");
    contenedor.className = "section__div--carts"
    contenedor.innerHTML = `
    <img class="div__img--carts" src="${producto.img}" alt="samsung-galaxy-z-flip">
    <h4 class="div__h4--nombre--producto">${producto.nombre}</h3>
    <p class="div__p--descripcion--producto">Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.</p>
    <p class="div__p--descripcion--producto">${producto.precio} $</p>
    `;

    contenedorProd.append(contenedor);

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
verCarrito.addEventListener("click", ()=>{

    modalContainer.innerHTML = ``

    modalContainer.style.display="flex";


    const modalHeader = document.createElement("div");
    modalContainer.className = "informacion--compra"
    modalContainer.innerHTML = `
    <h3>Carrito</h3>`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("button");
    modalbutton.innerText = "X";
    modalbutton.className = "button"

    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display="none";
    })

    modalHeader.append(modalbutton);

    //se crean los productosen

    carrito.forEach((producto) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal__content"
        carritoContent.innerHTML =`
        <img class="img--cart" src="${producto.img}" ">
        <h4 class="h4--cart">${producto.nombre}</h3>
        <p class="p--cart">${producto.precio} $</p>
        `
        modalContainer.append(carritoContent);
        saveLocal();
    });

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const totalBuying = document.createElement("div");
        totalBuying.className = "total--content";
        totalBuying.innerHTML = `total a pagar: ${total}$`
        modalContainer.append(totalBuying);
});

//guardamos con el set item 
const saveLocal = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));

};
//exptraemos datos guardados



