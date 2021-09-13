
const tienda = [{nombre:"Lifting de pestañas", precio: 1500, tiempo: "2hs", zona:"pestañas"},
                {nombre:"Perfilado", precio: 800, tiempo: "40min", zona:"cejas" },
                {nombre:"Laminado", precio: 2000, tiempo: "1hs 30min", zona:"cejas"}

]


class Servicio {
    constructor(servicio) {
        this.nombre = servicio.nombre;
        this.precio = servicio.precio;
        this.tiempo = servicio.tiempo;
        this.zona = servicio.zona
    
    }
     
}

const extensiones = new Servicio({nombre:"Extensiones pelo por pelo", precio: 3000, tiempo: "3hs", zona:"pestañas"})
tienda.push(extensiones)


const busquedap = tienda.find(servicio => servicio.zona === "pestañas");
console.log(busquedap)

const busquedac = tienda.filter(servicio => servicio.zona === "cejas");
console.log(busquedac)



const nuevoValor = tienda.map (valor => valor.precio * 1.21 );
console.log (nuevoValor)

const ordenarPrecio = (valor) => {
    tienda.sort ((a,b) => {
        if (a[valor] > b [valor]){
            return 1;
        }
        if (a[valor] < b [valor]){
            return -1
        } 
        return 0

    })
}
ordenarPrecio("precio")
console.log(tienda)
