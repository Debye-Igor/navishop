document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const nombre = document.getElementById('nombre').value
        const email = document.getElementById('email').value
        const mensaje = document.getElementById('mensaje').value
        
        alert(`Gracias ${nombre}, tu mensaje ha sido enviado. Te contactaremos pronto a ${email}`)
        
        form.reset()
    })
})