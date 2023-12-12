const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
let precioheladera = 150000;
let descuento = 15000;
let nuevoprecio = resta(precioheladera, descuento)

alert(nuevoprecio);



let respuesta = prompt ("Compra el producto?").toLowerCase();
if (respuesta === "si") { alert("Gracias por su compra");

} else { alert("Gracias por su visita")
  
};

