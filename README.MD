# Proyecto Bootcamp Python fullstack Modulo 2 -Fundamentos desarrollo Front-End

## NaviShop - E-commerce Navideño

Tienda en línea de productos navideños desarrollada con HTML5, Bootstrap 5 y JavaScript.

## Descripción

NaviShop es una tienda virtual que ofrece productos navideños como árboles, luces LED, decoraciones y figuras. El proyecto implementa un carrito de compras funcional con almacenamiento local.

## Tecnologías

- HTML5 
- CSS
- Bootstrap 5.3.8
- JavaScript 
- LocalStorage 

## Estructura del Proyecto

```
ecommerce-frontend-m2/
├── index.html              # Página principal
├── detalle.html            # Detalle de producto
├── carrito.html            # Carrito de compras
├── contacto.html           # Formulario de contacto
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   ├── js/
│   │   ├── productos.js    # Catálogo de productos
│   │   ├── main.js         # Lógica principal
│   │   ├── detalle.js      # Lógica del detalle
│   │   ├── carrito.js      # Lógica del carrito
│   │   └── contacto.js     # Lógica del formulario
│   └── img/                # Imágenes de productos
└── README.md
```

## Características

- Diseño responsivo (mobile-first)
- Catálogo de 6 productos navideños
- Sistema de carrito con LocalStorage
- Contador de productos en navbar
- Precios formateados en pesos chilenos (función JS)
- Navegación (Home, Contacto, Carrito)
- Formulario de contacto
- Alertas de interacciones del usuario

## Funcionalidades

### Página Principal (index.html)
- Muestra productos en tarjetas (cards) de Bootstrap
- Botones para ver detalle y agregar al carrito
- Diseño en grilla responsive de 3 columnas

### Detalle de Producto (detalle.html)
- Información completa del producto
- Imagen ampliada
- Botón para agregar al carrito

### Carrito (carrito.html)
- Lista de productos agregados
- Visualización de cantidad y subtotales
- Total general
- Botón para eliminar productos
- Botón de finalizar compra
- Botón seguir comprando

### Contacto (contacto.html)
- Formulario con validación
- Información de contacto de la tienda
- Alerta de envío de correo

## Precios

Los precios están configurados en pesos chilenos (CLP) y se formatean automáticamente con separadores de miles (69.000, 14.990, etc.)

## Navegación

- **Home**: Catálogo completo de productos
- **Contacto**: Formulario y datos de contacto
- **Carrito**: Gestión de compras

## Repositorio GitHub

[https://github.com/Debye-Igor/navishop.git]

