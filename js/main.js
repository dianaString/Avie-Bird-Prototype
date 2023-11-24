"use strict";

// VARIABLES
const figureItems = document.querySelectorAll(".figureItem");
const svgs = document.querySelectorAll(".svg");
const paintBtns = document.querySelectorAll(".paintBtn");
const paletteContainers = document.querySelectorAll(".paletteContainer");
const colorPalettes = document.querySelectorAll(".paletteContainer");

// Renderizar paleta de colores
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
    let itemColor = color.getAttribute("data-bg-color");
    if (itemColor) {
        color.style.backgroundColor = itemColor;
        color.style.cursor = "pointer";
    }
});

// FUNCIONES

const handleColorClick = (ev) => {
    const clickedItem = ev.target;
    const clickedItemColor = clickedItem.getAttribute("data-bg-color") 
    console.log('clickedItem', clickedItem)

    const paletteDataId = clickedItem.parentElement.parentElement.getAttribute("data-id");
    const svgSameDataId = document.querySelector(`.svg[data-id="${paletteDataId}"]`);

    console.log('paletteDataId', paletteDataId)
    console.log('svgSameDataId', svgSameDataId)

    svgSameDataId.style.color = clickedItemColor
};

// Abre las paletas de colores
const handlePaletteClick = (ev) => {
    const clickedItem = ev.target;
    const itemDataId = clickedItem.parentElement.getAttribute("data-id");
    const containerSameDataId = document.querySelector(
        `.paletteContainer[data-id="${itemDataId}"]`
    );

    paletteContainers.forEach((container) =>
        container.classList.add("semiHidden")
    );

    if (containerSameDataId.classList.contains("semiHidden")) {
        containerSameDataId.classList.remove("semiHidden");
    } else {
        containerSameDataId.classList.add("semiHidden");
    }
};

// Selecciona los item
const handleItemClick = (ev) => {
    const clickedItem = ev.target.closest(".item");

    if (!clickedItem) {
        return; // Salir de la función si no encuentra un elemento válido.
    } // (evita los null)

    const parent = clickedItem.parentElement;
    const Items = parent.querySelectorAll(".item");
    // se selecciona cada item dentro de cada figure en lugar de todos los item en general

    Items.forEach((item) => {
        // variables para cambiar los svgs
        const itemDataId = item.getAttribute("data-id");
        const svgSameDataId = document.querySelector(`.svg[data-id="${itemDataId}"]`);
        const paintBtn = item.querySelector(".paintBtn");

        if (Items.length > 1 && item === clickedItem) {
            item.classList.add("isSelected");
            svgSameDataId.classList.remove("hidden");
            paintBtn.classList.remove("hidden");
        } else if (Items.length > 1) {
            item.classList.remove("isSelected");
            paintBtn.classList.add("hidden");
            if (svgSameDataId) {
                svgSameDataId.classList.add("hidden");
            }
        }
    });
};

// EVENT/LISTENERS
figureItems.forEach((figItem) =>
    figItem.addEventListener("click", handleItemClick)
);
paintBtns.forEach((paintBtn) =>
    paintBtn.addEventListener("click", handlePaletteClick)
);
colorPalettes.forEach((palette) =>
    palette.addEventListener("click", handleColorClick)
);
