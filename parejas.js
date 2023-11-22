window.onload = () => {
    const cartas = [
        'img/bastos_1.jpg',
        'img/copas_1.jpg',
        'img/espadas_1.jpg',
        'img/oros_1.jpg',
        'img/bastos_1.jpg',
        'img/copas_1.jpg',
        'img/espadas_1.jpg',
        'img/oros_1.jpg',
    ];

    let primeraCarta = null;

    function barajarCartas() {
        for (let i = cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
        }
        mostrarCartas();
    }

    function mostrarCartas() {
        const contenedorCartas = document.getElementById('imagenContainer');
        contenedorCartas.innerHTML = '';

        for (let i = 0; i < cartas.length; i++) {
            const img = document.createElement('img');
            img.src = 'img/back.jpg';
            img.dataset.index = i;
            img.addEventListener('click', function() {
                revelarCarta(img);
            });
            contenedorCartas.appendChild(img);
        }
    }

    function revelarCarta(img) {
        const index = img.dataset.index;
        img.src = cartas[index];

        if (primeraCarta !== null && primeraCarta !== index) {
            const previamenteSeleccionada = document.querySelector(`[data-index="${primeraCarta}"]`);
            if (cartas[primeraCarta] === cartas[index]) {
                primeraCarta = null;
            } else {
                setTimeout(() => {
                    img.src = 'img/back.jpg';
                    previamenteSeleccionada.src = 'img/back.jpg';
                    primeraCarta = null;
                }, 500);
            }
        } else {
            primeraCarta = index;
        }
    }
    barajarCartas();
}