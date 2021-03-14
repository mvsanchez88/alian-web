class servicio {
    constructor (nombre, TipoV, PrecioBase, coeficiente) {

        this.nombre = nombre.toUpperCase();
        this.TipoV = TipoV;
        this.PrecioBase = PrecioBase
        this.coeficiente = coeficiente
        this.PrecioFinal = (PrecioBase * coeficiente).toFixed(2);

    }
    sumaIva() {
        this.PrecioFinal = (this.PrecioFinal * 1.21).toFixed(2)
    }

}


const servicios = [];
servicios.push(new servicio("Cambio de aceite", "Moto", "3000", "0.70"))
servicios.push(new servicio("Cambio de aceite", "Sedan", "3000", "1"))
servicios.push(new servicio("Cambio de aceite", "Hatchback", "3000", "1"))
servicios.push(new servicio("Cambio de aceite", "SUV", "3000", "1.35"))
servicios.push(new servicio("Cambio de aceite", "Utilitario", "3000", "1.35"))
servicios.push(new servicio("Cambio de aceite", "Pick-up", "3000", "1.45"))
servicios.push(new servicio("Cambio de aceite", "Sport - alta gama", "3000", "1.60"))

servicios.push(new servicio("Cambio de Filtros", "Moto", "2500", "0.70"))
servicios.push(new servicio("Cambio de Filtros", "Sedan", "2500", "1"))
servicios.push(new servicio("Cambio de Filtros", "Hatchback", "2500", "1"))
servicios.push(new servicio("Cambio de Filtros", "SUV", "2500", "1.35"))
servicios.push(new servicio("Cambio de Filtros", "Utilitario", "2500", "1.35"))
servicios.push(new servicio("Cambio de Filtros", "Pick-up", "2500", "1.45"))
servicios.push(new servicio("Cambio de Filtros", "Sport - alta gama", "2500", "1.60"))

servicios.push(new servicio("Cambio de Batería", "Moto", "4500", "0.70"))
servicios.push(new servicio("Cambio de Batería", "Sedan", "4500", "1"))
servicios.push(new servicio("Cambio de Batería", "Hatchback", "4500", "1"))
servicios.push(new servicio("Cambio de Batería", "SUV", "4500", "1.35"))
servicios.push(new servicio("Cambio de Batería", "Utilitario", "4500", "1.35"))
servicios.push(new servicio("Cambio de Batería", "Pick-up", "4500", "1.45"))
servicios.push(new servicio("Cambio de Batería", "Sport - alta gama", "4500", "1.60"))

servicios.push(new servicio("Polarizado", "Moto", "2000", "0.70"))
servicios.push(new servicio("Polarizado", "Sedan", "2000", "1"))
servicios.push(new servicio("Polarizado", "Hatchback", "2000", "1"))
servicios.push(new servicio("Polarizado", "SUV", "2000", "1.35"))
servicios.push(new servicio("Polarizado", "Utilitario", "2000", "1.35"))
servicios.push(new servicio("Polarizado", "Pick-up", "2000", "1.45"))
servicios.push(new servicio("Polarizado", "Sport - alta gama", "2000", "1.60"))

servicios.push(new servicio("Pulido Completo", "Moto", "2000", "0.70"))
servicios.push(new servicio("Pulido Completo", "Sedan", "2000", "1"))
servicios.push(new servicio("Pulido Completo", "Hatchback", "2000", "1"))
servicios.push(new servicio("Pulido Completo", "SUV", "2000", "1.35"))
servicios.push(new servicio("Pulido Completo", "Utilitario", "2000", "1.35"))
servicios.push(new servicio("Pulido Completo", "Pick-up", "2000", "1.45"))
servicios.push(new servicio("Pulido Completo", "Sport - alta gama", "2000", "1.60"))

servicios.push(new servicio("Pulido óptica", "Moto", "800", "0.70"))
servicios.push(new servicio("Pulido óptica", "Sedan", "800", "1"))
servicios.push(new servicio("Pulido óptica", "Hatchback", "800", "1"))
servicios.push(new servicio("Pulido óptica", "SUV", "800", "1.35"))
servicios.push(new servicio("Pulido óptica", "Utilitario", "800", "1.35"))
servicios.push(new servicio("Pulido óptica", "Pick-up", "800", "1.45"))
servicios.push(new servicio("Pulido óptica", "Sport - alta gama", "800", "1.60"))

servicios.push(new servicio("Cambio de líquidos", "Moto", "1500", "0.70"))
servicios.push(new servicio("Cambio de líquidos", "Sedan", "1500", "1"))
servicios.push(new servicio("Cambio de líquidos", "Hatchback", "1500", "1"))
servicios.push(new servicio("Cambio de líquidos", "SUV", "1500", "1.35"))
servicios.push(new servicio("Cambio de líquidos", "Utilitario", "1500", "1.35"))
servicios.push(new servicio("Cambio de líquidos", "Pick-up", "1500", "1.45"))
servicios.push(new servicio("Cambio de líquidos", "Sport - alta gama", "1500", "1.60"))

servicios.push(new servicio("Cambio de lámparas y luces", "Moto", "1000", "0.70"))
servicios.push(new servicio("Cambio de lámparas y luces", "Sedan", "1000", "1"))
servicios.push(new servicio("Cambio de lámparas y luces", "Hatchback", "1000", "1"))
servicios.push(new servicio("Cambio de lámparas y luces", "SUV", "1000", "1.35"))
servicios.push(new servicio("Cambio de lámparas y luces", "Utilitario", "1000", "1.35"))
servicios.push(new servicio("Cambio de lámparas y luces", "Pick-up", "1000", "1.45"))
servicios.push(new servicio("Cambio de lámparas y luces", "Sport - alta gama", "1000", "1.60"))

servicios.push(new servicio("Carga de gas Aire Acondicionado", "Moto", "3000", "0.70"))
servicios.push(new servicio("Carga de gas Aire Acondicionado", "Sedan", "3000", "1"))
servicios.push(new servicio("Carga de gas Aire Acondicionado", "Hatchback", "3000", "1"))
servicios.push(new servicio("Carga de gas Aire Acondicionado", "SUV", "3000", "1.35"))
servicios.push(new servicio("Carga de gas Aire Acondicionado", "Utilitario", "3000", "1.35"))
servicios.push(new servicio("Carga de gas Aire Acondicionado", "Pick-up", "3000", "1.45"))
servicios.push(new servicio("Carga de gas Aire Acondicionado", "Sport - alta gama", "3000", "1.60"))

for (const servicio of servicios)
    servicio.sumaIva();