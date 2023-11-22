window.onload = () => {
    const itemInput = document.getElementById("itemInput");
    const listaCompras = document.getElementById("listaCompras");

    function agregarElemento() {
        const itemTexto = itemInput.value.trim();
        if (itemTexto !== "") {
            const nuevoItem = document.createElement("li");
            nuevoItem.textContent = itemTexto;
            
            const editarBtn = document.createElement("button");
            editarBtn.textContent = "Editar";
            editarBtn.addEventListener("click", function () {
                const nuevoNombre = prompt("Editar artículo:", itemTexto);
                if (nuevoNombre !== null && nuevoNombre !== "") {
                    nuevoItem.textContent = nuevoNombre;
                }
            });

            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.addEventListener("click", function () {
                listaCompras.removeChild(nuevoItem);
            });

            nuevoItem.appendChild(editarBtn);
            nuevoItem.appendChild(eliminarBtn);
            listaCompras.appendChild(nuevoItem);
            itemInput.value = "";
        }
    }

    const agregarBtn = document.getElementById("agregarBtn");
    agregarBtn.addEventListener("click", agregarElemento);

    const borrarTodoBtn = document.getElementById("borrarTodoBtn");
    borrarTodoBtn.addEventListener("click", function () {
        listaCompras.innerHTML = "";
    });
};