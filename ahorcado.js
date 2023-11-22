window.onload = () => {
    const palabrasAdivinar = ["mundo", "portatil", "programacion", "javascript", "web"];
    let palabraActualIndex = Math.floor(Math.random() * palabrasAdivinar.length);
    let palabraAdivinar = palabrasAdivinar[palabraActualIndex];
    let palabraMostrada = "_".repeat(palabraAdivinar.length);
    let intentosRestantes = 6;
    const letrasIncorrectas = [];

    const displayPalabra = document.getElementById("palabra");
    const displayLetrasIncorrectas = document.getElementById("wrong-letters");
    const displayIntentos = document.getElementById("attempts");
    const letterButtonsContainer = document.getElementById("letter-buttons");
    const playAgainButton = document.getElementById("restart");

    function actualizarDisplayPalabra() {
        displayPalabra.textContent = palabraMostrada;
    }

    function adivinarLetra(letra) {
        let letraAdivinada = false;
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (palabraAdivinar[i] === letra) {
                palabraMostrada = palabraMostrada.substr(0, i) + letra + palabraMostrada.substr(i + 1);
                letraAdivinada = true;
                
            }
        }

        if (!letraAdivinada) {
            letrasIncorrectas.push(letra);
            displayLetrasIncorrectas.textContent = letrasIncorrectas.join(", ");
            intentosRestantes--;
            
        }

        actualizarDisplayPalabra();

        if (palabraMostrada === palabraAdivinar) {
            displayPalabra.textContent = "Has ganado la palabra es: " + palabraAdivinar;
            deshabilitarBotones();
        } else if (intentosRestantes === 0) {
            displayPalabra.textContent = "Has perdido la palabra era: " + palabraAdivinar;
            deshabilitarBotones(); 
        }
       
    }

    function deshabilitarBotones() {
        for (let i = 0; i < letterButtonsContainer.children.length; i++) {
            const letterButton = letterButtonsContainer.children[i];
            letterButton.disabled = true; 
        }
    }

    function reiniciarJuego() {
        palabraActualIndex = Math.floor(Math.random() * palabrasAdivinar.length);
        palabraAdivinar = palabrasAdivinar[palabraActualIndex];
        palabraMostrada = "_".repeat(palabraAdivinar.length);
        intentosRestantes = 6;
        letrasIncorrectas.length = 0;
        displayLetrasIncorrectas.textContent = "";
        displayIntentos.textContent = intentosRestantes;
        deshabilitarBotones();
    
        for (let i = 0; i < 26; i++) {
            const letterButton = letterButtonsContainer.children[i];
            letterButton.disabled = false;
        }
    
        actualizarDisplayPalabra();
    }

    playAgainButton.addEventListener("click", reiniciarJuego);


    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);
        const letterButton = document.createElement("button");
        letterButton.classList.add("oculto");
        letterButton.textContent = letter;
        letterButton.addEventListener("click", function() {
            adivinarLetra(letter);
            this.disabled = true; 
            displayIntentos.textContent = intentosRestantes;
        });
        letterButtonsContainer.appendChild(letterButton);
        
    }

    actualizarDisplayPalabra();
}