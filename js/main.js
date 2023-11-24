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
        
        if (Items.length > 1 && item === clickedItem) {
            item.classList.add('isSelected');
            svgSameDataId.classList.remove('hidden');

            /* let paintButton = item.querySelector('.paintButton');
            if (!paintButton) {
                paintButton = document.createElement('button');
                paintButton.classList.add('paintButton');
                paintButton.id = itemDataId;      
                item.appendChild(paintButton);
            } else {
                document.remove('button');
            } */
        } else if (Items.length > 1) {
            item.classList.remove('isSelected');
            if (svgSameDataId) {
                svgSameDataId.classList.add('hidden');
            }
        }

    });
    
}

// EVENT/LISTENERS
figureItems.forEach(figItem => figItem.addEventListener('click', handleItemClick))

