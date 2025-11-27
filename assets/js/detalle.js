// Obtener ID del producto de la URL
function obtenerIdURL() {
    const params = new URLSearchParams(window.location.search)
    return parseInt(params.get('id'))
}

// Actualizar contador del carrito
function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0)
    document.getElementById('cart-count').textContent = total
}

// Agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []
    
    const existe = carrito.find(item => item.id === id)
    
    if (existe) {
        existe.cantidad++
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        })
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarContador()
    alert('Producto agregado al carrito')
}

// Mostrar detalle del producto dinamicamente 
function mostrarDetalle() {
    const id = obtenerIdURL()
    const producto = productos.find(p => p.id === id)
    const contenedor = document.getElementById('detalle-producto')
    
    if (!producto) {
        contenedor.innerHTML = '<p class="alert alert-warning">Producto no encontrado</p>'
        return
    }
    
    contenedor.innerHTML = `
        <div class="col-md-6">
            <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.nombre}">
        </div>
        <div class="col-md-6">
            <h2>${producto.nombre}</h2>
            <p class="lead">${producto.descripcion}</p>
            <h3 class="text-success">$${formatearPrecio(producto.precio)}</h3>
            <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-success btn-lg">
                Agregar al carrito
            </button>
        </div>
    `
}

function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// imniciar
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador()
    mostrarDetalle()
})