// Actualizar contador del carrito
function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('cart-count').textContent = total;
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const existe = carrito.find(item => item.id === id);
    
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    alert('Producto agregado al carrito');
}

// Mostrar productos en cards
function mostrarProductos() {
    const lista = document.getElementById('productos-lista');
    
    productos.forEach(producto => {
        lista.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="text-success fw-bold">$${producto.precio}</p>
                        <a href="detalle.html?id=${producto.id}" class="btn btn-primary btn-sm">Ver más</a>
                        <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-success btn-sm">Agregar</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// inniciar cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    mostrarProductos();
});