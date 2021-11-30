/*simulador carrito*/ 

class Pizza {
    constructor(variedad, precio, extra) {
        this.variedad = variedad;
        this.precio = precio;
        this.extra = extra || [];
    }



    obtenerPrecio() {
        const precioDeExtra = this.extra.reduce((acum, value) => acum + value?.precio)
        return this.precio + precioDeExtra;
    }

}

class Acompaniamiento {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor(productos, delivery) {
        this.productos = productos || [];
        this.delivery = delivery;
        this.total = 0;
    }
    agregarInteres() {
        this.total = this.total * 1.1;
    }
    calcularTotal() {
        console.log("esto es lo que se agrega a carrito", this.productos);
        const precioTotal = this.productos.reduce((acum, value) => acum + value?.precio,0);
        this.total = precioTotal + this.delivery;
    }
    agregarCarrito(producto) {
        console.log("esto se agrega", producto);
        this.productos.push(producto);
        document.getElementById("alerta").innerHTML = "producto agregado al carrito";
    }
}

const carrito = new Carrito([], 200);
const muzzarella = new Pizza("muzzarella", 500);
document.getElementById("precio1").innerHTML = muzzarella.precio
const napolitana = new Pizza("napolitana", 550);
document.getElementById("precio2").innerHTML = napolitana.precio
const guarnicion = new Acompaniamiento("guarnicion", 150)


function agregarPizza() {
    let tipoVariedad = 0;
    while (tipoVariedad === 0) {
        let variedadDePizza = parseInt(prompt("¿Que variedad de pizza deseas?: \n Colocar 1 para muzarella y 2 para napolitana."));
        if (variedadDePizza === 1) {
            tipoVariedad = variedadDePizza;
        } else if (variedadDePizza === 2) {
            tipoVariedad = variedadDePizza;
        }
    }

    if (tipoVariedad === 1) {
        carrito.agregarCarrito(muzzarella);
        

    } else {
        carrito.agregarCarrito(napolitana);
    }
}

function agregarAcompaniamiento(){
    let tipoDeGuarnicion = 0;
    while (tipoDeGuarnicion === 0) {
        let tipoDeAcompaniamiento = parseInt(prompt("Desea agregar guarnición? \n coloque 1 para si, 2 para no"));
        if (tipoDeAcompaniamiento === 1) {
            tipoDeGuarnicion = tipoDeAcompaniamiento;
        }
        if(tipoDeAcompaniamiento === 2){
            tipoDeGuarnicion = tipoDeAcompaniamiento
        }
    }

    
    if (tipoDeGuarnicion === 1) {
        carrito.agregarCarrito(guarnicion);

    }
}

function eligirPago() {
    let i = 0;
    while (i === 0) {
        let pago = parseInt(prompt("¿Como desea abonar?: \n Colocar 1 para contado y 2 para credito."));
        if (pago === 1) {
            i = pago;
        } else if (pago === 2) {
            document.getElementById("recargo").innerHTML = "se agrega un racargo del 10%";
            carrito.agregarInteres()
            i = pago;
        }
    }
    document.getElementById("total").innerHTML = "El total a pagar es $" + carrito.total;
}

function calcular(){
    carrito.calcularTotal();  
}

function tomarPedidos() {
    let atender = parseInt(prompt("Desea ordenar? (coloque 1 para SI, coloque 2 para NO)"));

    if(atender === 1){
        while (atender === 1) {
            agregarPizza();
            agregarAcompaniamiento();
            atender = parseInt(prompt("Desea algo mas? coloque 1 para SI, coloque 2 para NO"));
        }
        calcular()
        eligirPago()
        
       
    }else{
        document.getElementById("spam").innerHTML = "Gracias :(";
    }
}

tomarPedidos();





function agregarElemento(){
    let hache1 = document.createElement("h1");
    let contenido = document.createTextNode("DOM: Document Object Model");
    hache1.appendChild(contenido);
    let insertar = document.getElementById("definicion");
    document.body.insertBefore(hache1, insertar).style.color= "brown";
    let parrafoPrincipal= document.createElement("definicion");
    parrafoPrincipal.innerHTML = "El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.";
    document.getElementById("definicion").appendChild(parrafoPrincipal).style.color = "beige"

}

document.body.onload = agregarElemento;

