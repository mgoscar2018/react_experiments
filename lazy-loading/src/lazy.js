//Aquí dejaremos todo el código relacionado con el Intersection Observer
let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
    const imgNode = intersectionEntry.target;
    imgNode.src = imgNode.dataset.src;
    imgNode.onload = () => {
        loadedImages += 1;
        logState();
    };
    observer.unobserve(imgNode);
};

export const registerImage = (image) => {
    observer.observe(image);
    totalImages += 1;
    logState();
};

function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}
/*
const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta en el rango de la pantalla
}

const accion = (entry) => {
    const container = entry.target;
    console.log("holis");
    //const imagen = container.firstChild; //primer metodo para obtener la imagen ya que de antemano se sabe que es el primer hijo dentro del contenedor
    const imagen = container.querySelector('img');
    imagen.src = imagen.dataset.src;
    //debugger;

    //desregistrar la imagen(unlisten) para evitar que siga observando
    observer.unobserve(container);
}

const observer = new IntersectionObserver( (entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
}
*/