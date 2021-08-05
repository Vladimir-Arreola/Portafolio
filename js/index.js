var ejecucion = false;

function contactMe(){

    var contenedorAbout = document.getElementById("boutme");


    if(!ejecucion){
        //En caso de no haberse presionado el botón antes, creamos un elemento contenedor para la información de contacto
        var contenedor = document.createElement('div');
        contenedor.id = "contContact";
        contenedor.className = "contactame";
        contenedorAbout.appendChild(contenedor);

        var whats = document.createElement('div');
        whats.className = "info-contacto";

        var imgWhats = document.createElement('img');
        imgWhats.src = "../img/whats.png";
        imgWhats.alt = "WhatsApp";
        imgWhats.className = "icon-contact";

        var numero = document.createElement('p');
        numero.append("+52 384 101 3503");
        numero.className = "texto-contac"

        var gmail = document.createElement('div');
        gmail.className = "info-contacto";

        var gmailImg = document.createElement('img');
        gmailImg.src = "../img/gmail.png";
        gmailImg.alt = "Gmail";
        gmailImg.className = "icon-contact";

        var direccion = document.createElement('p');
        direccion.append("vladimx19@gmail.com");
        direccion.className = "texto-contac";

        gmail.appendChild(gmailImg);
        gmail.append(direccion);

        whats.appendChild(imgWhats);
        whats.append(numero);
        

        contenedor.appendChild(whats)
        contenedor.appendChild(gmail);

        //Cambiamos la ejecución a true para no poder volver a generar otro elemento HTML
        ejecucion = true;
    }else{
        var contenedor = document.getElementById('contContact');
        contenedor.remove();
        ejecucion = false;
    }
   
}