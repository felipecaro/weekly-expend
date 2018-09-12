export const validarPresupuesto = presupuesto => {
    let totalPresupuesto = parseInt(presupuesto, 10)|| 0;

    if(totalPresupuesto > 0 ) {
        return totalPresupuesto;
    } else {
        return false;
    }
}

export const revisarPresupuesto = (budget, left) => {
    let clase;
    // Comprobar el 25% 
    if( (budget / 4) >= left) {
         clase = 'alert alert-danger';
    } else if( (budget / 2) >= left) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 