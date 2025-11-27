function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.getElementById('cart-count');
    if (contador) {
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contador.textContent = totalItems;
    }
}

function eliminarDelCarrito(productoId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== productoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
    actualizarContadorCarrito();
}

function actualizarCantidad(productoId, nuevaCantidad) {
    if (nuevaCantidad < 1) return;
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const item = carrito.find(item => item.id === productoId);
    
    if (item) {
        item.cantidad = nuevaCantidad;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
        actualizarContadorCarrito();
    }
}

function calcularTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
}

function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const container = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total-price');
    
    if (carrito.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info">
                Tu carrito está vacío. <a href="index.html">Ir a la tienda</a>
            </div>
        `;
        totalElement.textContent = '0.00';
        return;
    }
    
    container.innerHTML = '';
    
    carrito.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'card mb-3';
        itemDiv.innerHTML = `
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${item.imagen}" class="img-fluid rounded-start" alt="${item.nombre}">
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="text-success h5">$${item.precio}</p>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Cantidad</label>
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary" onclick="actualizarCantidad(${item.id}, ${item.cantidad - 1})">-</button>
                                    <input type="text" class="form-control text-center" value="${item.cantidad}" readonly>
                                    <button class="btn btn-outline-secondary" onclick="actualizarCantidad(${item.id}, ${item.cantidad + 1})">+</button>
                                </div>
                            </div>
                            <div class="col-md-3 text-end">
                                <p class="h5 mb-3">$${(item.precio * item.cantidad).toFixed(2)}</p>
                                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(itemDiv);
    });
    
    totalElement.textContent = calcularTotal();
}

function finalizarCompra() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    alert('Gracias por tu compra. Total: $' + calcularTotal());
    localStorage.removeItem('carrito');
    renderizarCarrito();
    actualizarContadorCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    renderizarCarrito();
    
    const btnCheckout = document.getElementById('btn-checkout');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', finalizarCompra);
    }
});