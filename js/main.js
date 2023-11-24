'use strict'

// VARIABLES
const figureItems = document.querySelectorAll('.figureItem')
const svgs = document.querySelectorAll('.svg')

/* Renderizar paleta de colores */
const colors = document.querySelectorAll('.color');
colors.forEach((color) => {
    let itemColor = color.getAttribute('data-bg-color');
    if (itemColor) {
        color.style.backgroundColor = itemColor;
        color.style.cursor = 'pointer';
    }
});


// FUNCIONES



// Selecciona los item
const handleItemClick = (ev) => {
    const clickedItem = ev.target.closest('.item');

    if (!clickedItem) {
        return; // Salir de la función si no encuentra un elemento válido.
    }           // (evita los null)

    const parent = clickedItem.parentElement;
    const Items = parent.querySelectorAll('.item');
    // se selecciona cada item dentro de cada figure en lugar de todos los item en general

    Items.forEach((item) => {
        // variables para cambiar los svgs
        const itemDataId = item.getAttribute('data-id')
        const svgSameDataId = document.querySelector(`.svg[data-id="${itemDataId}"]`);
        
        if (Items.length > 1){
            if (item === clickedItem) {
                item.classList.add('isSelected');
                svgSameDataId.classList.remove('hidden');

                /* const paintButton = document.createElement('button');
                paintButton.classList.add('paintButton');
                paintButton.id = itemDataId;      
                item.appendChild(paintButton); */

            } else {
                item.classList.remove('isSelected');
                if (svgSameDataId) {
                    svgSameDataId.classList.add('hidden');
                }
            }
        }
    });
    
}

// EVENT/LISTENERS
figureItems.forEach(figItem => figItem.addEventListener('click', handleItemClick))

