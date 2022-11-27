const comidas =[
    {
        img: "https://vivirenelpoblado.com/wp-content/uploads/comida-de-mar.jpg",
        nombre: "pacifico mar",
        direccion:"Av 85 Nro. 45 - 85 Barranquilla",
        descripcion: "La zazon del pasifico colombiano",

    },
    {
        img: "https://taxilaxairport.com/wp-content/uploads/2022/05/Restaurante-italiano.jpg",
        nombre: "Italiano 65",
        direccion:"Av 45 Nro. 1 - 85 Medellín",
        descripcion: "El delicioso sabor de italia",

    },
    {
        img: "https://i.pinimg.com/550x/20/9b/06/209b06015142db3dc26aab0ac0ca12dd.jpg",
        nombre: "Fritos y Más",
        direccion:"Calle 45 Medellín",
        descripcion: "Fritos saludabeles de Medellin",

    },
    {
        img: "https://www.marketingdirecto.com/wp-content/uploads/2013/08/160.jpg",
        nombre: "Pollo frito ",
        direccion:"Cr 32 # 56 - 89",
        descripcion: "El pollofrito con sabor a colombia",

    },    
       
];

let card = document.getElementById ("container");

comidas.map((e)=>{
    card .innerHTML += `
    <div class="col">
    <div class="card">
      <img src="${e.img}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title text-center">${e.nombre}</h5>
        <p class="card-text text-center">${e.direccion}</p>
        <p class="card-text text-center"><small class="text-muted">${e.descripcion}</small></p>
        </div>
    </div>
  </div>
  `;
});


   
