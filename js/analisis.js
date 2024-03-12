const verCulpable=()=>{

   // var adncriminal =  (document.getElementById("secuenciaHallada").value);

}


listaSospechosos = []

principalesSospechosos = []

const Comparar = () => {

    var adncriminal =  (document.getElementById("secuenciaHallada").value);


    let x = 0
    

    for (const ciudadano of listaCiudadanos){


        var coincidencia_actual = 0;

        var adn_actual = (ciudadano.codigo_adn)
        //console.log(adn_actual);

        var adn_actual_separado = (adn_actual.split(""));
        //console.log(adn_actual_separado)

        var sec_criminal_separada = adncriminal.split("");
        //console.log(sec_criminal_separada)


       for (let i = 0; i < 20; i++) {
            
            if (adn_actual_separado[i] == sec_criminal_separada[i]){
            coincidencia_actual=coincidencia_actual + 5;
            //console.log(coincidencia_actual);

            }

            listaSospechosos[x]=coincidencia_actual
            //console.log(listaSospechosos);


            }
            x++
        }

        let contador = 0
        let posicionMayor = 0

        let contador1 = 0
        let posicionMayor1 = 0

        let contador2 = 0
        let posicionMayor2 = 0

        let contador3 = 0
        let posicionMayor3 = 0



        let listaSospechosos1 = listaSospechosos
        listaSospechosos2 = listaSospechosos1
        listaSospechosos3 = listaSospechosos2
        listaSospechosos4 = listaSospechosos3

        mayorcoincidencia = 0;
        mayorcoincidencia1 = 0;
        mayorcoincidencia2 = 0;
        mayorcoincidencia3 = 0;




        //primer for 


        for (const sospechoso of listaSospechosos){
         
            
            
            if (sospechoso > mayorcoincidencia){
                posicionMayor = contador;
                mayorcoincidencia = sospechoso;
                //console.log(mayorcoincidencia)
                //console.log(sospechoso)
                //console.log(contador)
            }
            //console.log(posicionMayor)
            contador = contador+1
    }
 
    console.log(posicionMayor); 

    listaSospechosos1[posicionMayor] = 0;
    //console.log(listaSospechosos1); 


    for (const sospechoso of listaSospechosos1){
         
        if (sospechoso > mayorcoincidencia1){
        posicionMayor1 = contador1;
        mayorcoincidencia1 = sospechoso;
        //console.log(mayorcoincidencia)
        //console.log(sospechoso)
        //console.log(contador)
    }
    //console.log(posicionMayor)
    contador1 = contador1+1
}

console.log(posicionMayor1); 

listaSospechosos2[posicionMayor1] = 0;
//console.log(listaSospechosos2); 

    for (const sospechoso of listaSospechosos2){
         
     if (sospechoso > mayorcoincidencia2){
        posicionMayor2 = contador2;
        mayorcoincidencia2 = sospechoso;
    //console.log(mayorcoincidencia)
    //console.log(sospechoso)
    //console.log(contador)
}
//console.log(posicionMayor)
    contador2 = contador2+1
}

console.log(posicionMayor2); 

listaSospechosos3[posicionMayor2] = 0;
//
console.log(listaSospechosos3); 

for (const sospechoso of listaSospechosos3){
         
    if (sospechoso > mayorcoincidencia3){
       posicionMayor3 = contador3;
       mayorcoincidencia3 = sospechoso;
   //console.log(mayorcoincidencia)
   //console.log(sospechoso)
   //console.log(contador)
}
//console.log(posicionMayor)
   contador3 = contador3+1
}

console.log(posicionMayor3); 

listaSospechosos4[posicionMayor3] = 0;
console.log(listaSospechosos4);
const tablaCulpablesInput=document.getElementById("tablaCulpables");
    let datos = '';
  
        datos+=`<tr>

        <td>${listaCiudadanos[posicionMayor].nombre_completo}</td>
        </tr>
        <tr>
        <td>${listaCiudadanos[posicionMayor1].nombre_completo}</td>
        </tr>
        <tr>
        <td>${listaCiudadanos[posicionMayor2].nombre_completo}</td>
        </tr>`
            
 

        tablaCulpablesInput.innerHTML=datos;
}


principalesSospechosos = [posicionMayor, posicionMayor1, posicionMayor2, posicionMayor3]





const cargarTablaSospechosos=()=>{
    

}


