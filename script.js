const productos = [
  {
    nombre: "Remera Blanca",
    precio: "$3.000",
    imagen: "https://via.placeholder.com/200x250?text=Remera"
  },
  {
    nombre: "Pantalón Jeans",
    precio: "$7.000",
    imagen: "https://via.placeholder.com/200x250?text=Jeans"
  },
  {
    nombre: "Campera Negra",
    precio: "$12.000",
    imagen: "https://via.placeholder.com/200x250?text=Campera"
  }
];

const container = document.getElementById("product-container");

productos.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" />
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <a href="https://wa.me/549XXXXXXXXXX?text=Hola, me interesa ${producto.nombre}" target="_blank">Consultar</a>
  `;

  container.appendChild(div);
});
