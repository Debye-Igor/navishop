// Actualizar contador
function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0)
    document.getElementById('cart-count').textContent = total
}

// Eliminar producto
function eliminar(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []
    carrito = carrito.filter(item => item.id !== id)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarContador()
}

// Calcular total
function calcularTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
}

// Mostrar carrito
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const contenedor = document.getElementById('carrito-items')
    
    if (carrito.length === 0) {
        contenedor.innerHTML = '<p class="alert alert-info">El carrito está vacío</p>'
        document.getElementById('total').textContent = '0.00'
        return
    }
    
    contenedor.innerHTML = ''
    
    carrito.forEach(item => {
        contenedor.innerHTML += `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <h5>${item.nombre}</h5>
                            <p>Precio: $${item.precio}</p>
                            <p>Cantidad: ${item.cantidad}</p>
                            <p class="fw-bold">Subtotal: $${(item.precio * item.cantidad)}</p>
                            <button onclick="eliminar(${item.id})" class="btn btn-danger btn-sm">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    document.getElementById('total').textContent = calcularTotal()
}

// Finalizar compra
function comprar() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    
    if (carrito.length === 0) {
        alert('El carrito está vacío')
        return
    }
    
    alert('Compra realizada por $' + calcularTotal())
    localStorage.removeItem('carrito')
    mostrarCarrito()
    actualizarContador()
}

// Iniciar
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador()
    mostrarCarrito()
    document.getElementById('btn-comprar').addEventListener('click', comprar)
})