/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlBase = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('div#app');

// Internacionalización (Intl)
 // 1.- Format fechas
 // 2.- Format monedas

const formatPrice = price => {
    const newPrice = new window.Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(price)
    
    return newPrice; 
}

//web api
//conectarnos al servidor
window
    .fetch(`${urlBase}/api/avo`)
    //procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> renderizar
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => { //por cada uno de los items
            //console.log(item.name); //devuelve un listado de los nombres de los aguacates
            //Crear la imagen
            const imagen = document.createElement('img');
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            imagen.src = `${urlBase}${item.image}`;
            
            //Crear título
            const title = document.createElement('h2');
            title.textContent = item.name;
            //title.style = 'font-size: 2rem';  //primer metodo para agregar estilos
            //title.style.fontSize = '2rem'; //segundo metodo
            //title.className = 'muy-grande'; //tercer metodo
            title.className = "text-lg";//cuarto metodo, ocupando lo definido por "talwind"

            //Crear precio
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);
            price.className = "text-gray-600";

            //Crear contenedor para el título y el precio
            const priceAndTitle = document.createElement('div');
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            // Metemos todo dentro de una tarjeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, priceAndTitle);

            // Metemos todo dentro del contenedor principal
            const container = document.createElement('div');
            container.append(card);

            todosLosItems.push(container);
        });
        appNode.append(...todosLosItems);
    });


