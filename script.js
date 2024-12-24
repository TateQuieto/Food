
    const smoke_frame = [
        'imagenes/frame_picante/fuego1.png',
        'imagenes/frame_picante/fuego2.png', 
        'imagenes/frame_picante/fuego3.png', 
        'imagenes/frame_picante/fuego4.png',
        'imagenes/frame_picante/fuego5.png', 
        'imagenes/frame_picante/fuego6.png'
    ];
    
    const animation_smoke = document.getElementById('humo');
    let currentIndex = 0;
    
    function changeImage() {
        currentIndex = (currentIndex + 1) % smoke_frame.length; // Cicla de imágenes
        animation_smoke.src = smoke_frame[currentIndex]; // Cambia la imagen
    }
    
    // Llama a la función changeImage cada 500 ms (0.5 segundos)
    if (animation_smoke) {
        setInterval(changeImage, 100);
    } else {
        console.error("El elemento con id 'humo' no fue encontrado en el DOM.");
    }
    
    const header = document.getElementById("header");
    const logo  =document.getElementById("imagen_header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    