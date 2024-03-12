const repeticionesAsignaturas = {};


// Mostramos el objeto con la cantidad de veces que aparece cada asignatura
console.log(repeticionesAsignaturas);
let asignaturaMasRepetida = null;
let maxRepeticiones = 0;

for (let asignaturaId in repeticionesAsignaturas) {
    
    if (repeticionesAsignaturas[asignaturaId] > maxRepeticiones) {
        asignaturaMasRepetida = asignaturaId;
        maxRepeticiones = repeticionesAsignaturas[asignaturaId];
    }
    
}
    console.log(totalPeriodo1)
    console.log(totalPeriodo2)

        datos+=`<tr>

            <td>${1}</td>
            <td>${totalPeriodo1}</td>
            <td>${asignaturaMasRepetida}</td>
            


            </tr>`

        datos+=`<tr>

        <td>${2}</td>
        <td>${totalPeriodo2}</td>
        <td>${asignaturaMasRepetida}</td>

        </tr>`
    //}
    console.log(datos);

    reportesInput.innerHTML=datos;


