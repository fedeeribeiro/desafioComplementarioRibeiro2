/* SITIO DE VENTA DE ENTRADAS PARA RECITALES */

// Pide nombre al usuario

let nombre_usuario = prompt("Ingrese su nombre:");

// Por si el usuario no ingresa nada
while(nombre_usuario == ""){
    nombre_usuario = prompt("ERROR. Por favor ingrese su nombre.");
}

// Mensaje de bienvenida
alert("¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!")
console.log("¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!")

// Funciones para calcular el precio en cuotas
function pago_en_cuotas(precio, cuotas){
    switch(cuotas){
        case 3:
            return precio_final = precio * 1.15;
        case 6:
            return precio_final = precio * 1.30;
        case 12:
            return precio_final = precio * 1.50;
    }
}

// Función para realizar el pago con tarjeta
function pago_con_tarjeta(){
    tarjeta = "";
    proveedor = prompt("Ingrese la compañía proveedora de su tarjeta:" + "\n" + "AMEX" + "\n" + "MasterCard" + "\n" + "Visa").toUpperCase();
    while(proveedor != "AMEX" && proveedor != "MASTERCARD" && proveedor != "VISA"){
        alert("ERROR. Ingrese una compañía válida.");
        console.log("ERROR. Ingrese una compañía válida.");
        proveedor = prompt("Ingrese la compañía proveedora de su tarjeta:" + "\n" + "AMEX" + "\n" + "MasterCard" + "\n" + "Visa").toUpperCase();
    }
    tarjeta += "Proveedor: " + proveedor + "\n";
    numero = prompt("Ingrese el número de su tarjeta:");
    while(numero.length != 16){
        alert("ERROR. Recuerde que el número de la tarjeta se compone por 16 dígitos.");
        console.log("ERROR. Recuerde que el número de la tarjeta se compone por 16 dígitos.");
        numero = prompt("Ingrese el número de su tarjeta:");
    }
    tarjeta += "Número: " + numero + "\n";
    nombre = prompt("Ingrese el nombre como figura en la tarjeta:").toUpperCase();
    while(nombre == ""){
        alert("ERROR. Dejó el campo vacío.");
        console.log("ERROR. Dejó el campo vacío.");
        nombre = prompt("Ingrese el nombre como figura en la tarjeta:").toUpperCase();
    }
    tarjeta += "Nombre: " + nombre + "\n";
    cvv = prompt("Ingrese el código de seguridad de su tarjeta:");
    while(cvv.length != 3 && cvv.length != 4){
        alert("ERROR. Recuerde que el código de seguridad de la tarjeta tiene entre 3 y 4 dígitos.");
        console.log("ERROR. Recuerde que el código de seguridad de la tarjeta tiene entre 3 y 4 dígitos.");
        cvv = prompt("Ingrese el código de seguridad de su tarjeta:");
    }
    tarjeta += "Código de seguridad: " + cvv;
    return alert("Los datos de su tarjeta son los siguientes:" + "\n" + tarjeta);
}

// Función para asignar el precio del show elegido
function precio(seleccionar_show){
    if(seleccionar_show == "DUA LIPA"){
        return precio_show = 7000;
    }else if(seleccionar_show == "IMAGINE DRAGONS"){
        return precio_show = 5500;
    }else if(seleccionar_show == "LOLLAPALOOZA"){
        return precio_show = 13500;
    }else if(seleccionar_show == "PRIMAVERA SOUND"){
        return precio_show = 10300;
    }else if(seleccionar_show == "COTI"){
        return precio_show = 2200;
    }else if(seleccionar_show == "HARRY STYLES"){
        return precio_show = 8800;
    }else if(seleccionar_show == "LAS LIGAS MENORES"){
        return precio_show = 1800;
    }else if(seleccionar_show == "RAYOS LASER"){
        return precio_show = 1800;
    }
}

// Función para asignar la cantidad de entradas que quedan para el show elegido
function disponibles(seleccionar_show){
    if(seleccionar_show == "DUA LIPA"){
        return entradas_disponibles = 2;
    }else if(seleccionar_show == "IMAGINE DRAGONS"){
        return entradas_disponibles = 0;
    }else if(seleccionar_show == "LOLLAPALOOZA"){
        return entradas_disponibles = 0;
    }else if(seleccionar_show == "PRIMAVERA SOUND"){
        return entradas_disponibles = 10;
    }else if(seleccionar_show == "COTI"){
        return entradas_disponibles = 6;
    }else if(seleccionar_show == "HARRY STYLES"){
        return entradas_disponibles = 0;
    }else if(seleccionar_show == "LAS LIGAS MENORES"){
        return entradas_disponibles = 7;
    }else if(seleccionar_show == "RAYOS LASER"){
        return entradas_disponibles = 5;
    }
}

// Función para calcular el precio total de las entradas para el show elegido
function precio_entradas(cantidad, precio){
    return precio_total = cantidad * precio;
}

// Creo una clase para luego armar un array en el que se vayan guardando las compras para distintos shows, como un carrito de compras
class Pedido{
    constructor(show, entradas, precio){
        this.show = show;
        this.entradas = entradas;
        this.precio = precio;
    }
}

// Creo array de carrito de compras
let carrito_de_compras = [];

/* ---------------ENCIERRO EL CÓDIGO EN UN BUCLE while PARA QUE EL USUARIO PUEDA COMPRAR TODAS LAS VECES QUE QUIERA--------------- */

let seguir_comprando = false;

let respuesta_inicial = prompt("Si desea comprar entradas ingrese la letra 'S'. De lo contrario, saldrá de la operación.").toLowerCase();

if(respuesta_inicial != "s"){
    seguir_comprando = false;
}else{
    seguir_comprando = true;
}

while(seguir_comprando){
    // Pedido de ingreso del show para el que desea comprar entradas
    let seleccionar_show = prompt("¿Para qué show querés comprar entradas?" + "\n" + "Estos son los shows disponibles:"
        + "\n" + "Dua Lipa" + "\n" + "Imagine Dragons" + "\n" + "Lollapalooza" + "\n" + "Primavera Sound" + "\n" + "Coti" + "\n" +
        "Harry Styles" + "\n" + "Las Ligas Menores" + "\n" + "Rayos Laser").toUpperCase();

    while(seleccionar_show != "DUA LIPA" && seleccionar_show != "COTI" && seleccionar_show != "IMAGINE DRAGONS" &&
        seleccionar_show != "LOLLAPALOOZA" && seleccionar_show != "PRIMAVERA SOUND" && seleccionar_show != "HARRY STYLES" &&
        seleccionar_show != "LAS LIGAS MENORES" && seleccionar_show != "RAYOS LASER"){
        alert("ERROR. Seleccione un show válido.");
        console.log("ERROR. Seleccione un show válido.");
        seleccionar_show = prompt("¿Para qué show querés comprar entradas?" + "\n" + "Estos son los shows disponibles:"
        + "\n" + "Dua Lipa" + "\n" + "Imagine Dragons" + "\n" + "Lollapalooza" + "\n" + "Primavera Sound" + "\n" + "Coti" + "\n" +
        "Harry Styles" + "\n" + "Las Ligas Menores" + "\n" + "Rayos Laser").toUpperCase();
    }

    let precio_show = 0;

    let entradas_disponibles = 0;

    precio_show = precio(seleccionar_show);

    entradas_disponibles = disponibles(seleccionar_show);

    // Veo si ya se hizo un pedido para el mismo show y resto a las entradas disponibles las pedidas anteriormente
    if(carrito_de_compras.length != 0){
        for(let pedido of carrito_de_compras){
            if(pedido.show == seleccionar_show){
                entradas_disponibles -= pedido.entradas;
            }
        } 
    }

    let respuesta_final = "";

    // Verificación de entradas disponibles y cálculo de precio total para el pedido hecho
    if(entradas_disponibles == 0){
        alert("Ya no quedan entradas disponibles para el show de " + seleccionar_show + ".");
        console.log("Ya no quedan entradas disponibles para el show de " + seleccionar_show + ".");
        respuesta_final = prompt("Si desea seguir comprando entradas ingrese la letra 'S'." + "\n" +
        "Si no quieres seguir comprando pero ya hiciste algún pedido, se pasará al carrito para terminar con la compra.").toLowerCase();
        
        if(respuesta_final != "s"){
            seguir_comprando = false;
        }else{
            seguir_comprando = true;
        }
    }else{
        alert("¡Excelente! Continuemos con la compra de entradas para el show de " + seleccionar_show + ".");
        console.log("¡Excelente! Continuemos con la compra de entradas para el show de " + seleccionar_show + ".");
        
        alert("El precio de las entradas para el show de " + seleccionar_show + " es de $" + precio_show + ".");
        console.log("El precio de las entradas para el show de " + seleccionar_show + " es de $" + precio_show + ".");

        // Pedido de ingreso de la cantidad de entradas que desea comprar
        let cant_entradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));

        while(cant_entradas != cant_entradas || cant_entradas < 1){
            alert("ERROR. Ingrese una cantidad válida de entradas para comprar.");
            cant_entradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));
        }
        
        while(cant_entradas > entradas_disponibles || cant_entradas != cant_entradas || cant_entradas < 1){
            alert("Lo siento, solo quedan " + entradas_disponibles + " entradas para el show de " + seleccionar_show + ".");
            console.log("Lo siento, solo quedan " + entradas_disponibles + " entradas para el show de " + seleccionar_show + ".");
            cant_entradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));
        }

        alert("¡Perfecto! El precio total de las entradas seleccionadas es $" + precio_entradas(cant_entradas, precio_show) + ".");
        console.log("¡Perfecto! El precio total de las entradas seleccionadas es $" + precio_entradas(cant_entradas, precio_show) + ".");
        respuesta_final = prompt("Si desea seguir comprando entradas ingrese la letra 'S'." + "\n" + 
        "De lo contrario, se pasará al carrito para terminar con la compra.").toLowerCase();
        
        carrito_de_compras.push(new Pedido(seleccionar_show, cant_entradas, precio_entradas(cant_entradas, precio_show)));
        
        if(respuesta_final != "s"){
            seguir_comprando = false;
        }else{
            seguir_comprando = true;
        }
    }
}
/* ---------------                              FIN DEL BUCLE while PRINCIPAL                              --------------- */

if(carrito_de_compras.length != 0){
    // Vista final del carrito de compras
    let pedido_final = "Tu carrito se compone de:" + "\n";

    let precio_total = 0;

    for(let pedido of carrito_de_compras){
        pedido_final += pedido.entradas.toString() + " entradas para el show de " + pedido.show + 
        ". El total por estas entradas es de $" + pedido.precio + "." + "\n";
        precio_total += pedido.precio;
    }

    alert(pedido_final);
    console.log(pedido_final);

    alert("El precio total de tu pedido es de $" + precio_total + ".");
    console.log("El precio total de tu pedido es de $" + precio_total + ".");

    // Se pasa a abonar la compra
    let modo_de_pago = "";

    let cuotas = 0;

    alert("Se puede abonar la compra al contado o en cuotas. Si se abona en cuotas, se efectúa un recargo.");
    console.log("Se puede abonar la compra al contado o en cuotas. Si se abona en cuotas, se efectúa un recargo.");

    modo_de_pago = prompt("¿Cómo desea abonar?." + "\n" + "Cuotas" + "\n" + "Al contado").toLowerCase();

    while(modo_de_pago != "cuotas" && modo_de_pago != "al contado"){
        alert("ERROR. Seleccione un modo de pago válido.");
        console.log("ERROR. Seleccione un modo de pago válido.");
        modo_de_pago = prompt("¿Cómo desea abonar?." + "\n" + "Cuotas" + "\n" + "Al contado").toLowerCase();
    }

    if(modo_de_pago == "cuotas"){
        cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desea. Pueden ser 3, 6 o 12."));
        while(cuotas != 3 && cuotas != 6 && cuotas != 12){
            alert("ERROR. Seleccione una cantidad de cuotas válida.");
            console.log("ERROR. Seleccione una cantidad de cuotas válida");
            cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desea. Pueden ser 3, 6 o 12."));
        }
        alert("El precio final a pagar es $" + pago_en_cuotas(precio_total, cuotas).toFixed(2) + ".");
        console.log("El precio final a pagar es $" + pago_en_cuotas(precio_total, cuotas).toFixed(2) + ".");
    }else{
        alert("El precio final a pagar es $" + precio_total + ".");
        console.log("El precio final a pagar es $" + precio_total + ".");
    }

    pago_con_tarjeta();

    alert("El pago se ha realizado correctamente." + "\n" + "¡Disfrutá de tus entradas!");
    console.log("El pago se ha realizado correctamente." + "\n" + "¡Disfrutá de tus entradas!");
}

alert("¡Que tengas un buen día!");
console.log("¡Que tengas un buen día!");