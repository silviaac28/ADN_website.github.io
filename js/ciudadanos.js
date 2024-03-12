const listaCiudadanos=[];


const loadCiudadanos= async()=>{
   
    try{
        listaCiudadanos.length=0;
        const respuesta=await fetch('http://localhost:3000/ciudadanos');

        if(!respuesta.ok){
           throw new Error('Error al cargar ciudadano. Estado: ',respuesta.status);
        }
        const Ciudadanos=await respuesta.json();
        listaCiudadanos.push(...Ciudadanos);

    }catch(error){
        console.error("Error al cargar Ciudadanos",error.message);
    }
}



const submitCiudadano=()=>{
    console.log("aqui estoy")
    const nombreCiudadanoInput=document.getElementById("nombreCiudadano")
    const direccionInput=document.getElementById("direccion")
    const telefonoInput=document.getElementById("telefono")
    const codigoADNInput=document.getElementById("codigoADN")


    const nombreCiudadano=nombreCiudadanoInput.value;
    const direccion=direccionInput.value;
    const telefono=telefonoInput.value;
    const codigoADN=codigoADNInput.value;


    const nuevoCiudadano={
        nombre_completo: nombreCiudadano,
        direccion: direccion,
        celular: telefono,
        codigo_adn: codigoADN
    }

  
    guardarCiudadano(nuevoCiudadano);

    nombreCiudadanoInput=value='';
    direccionInput=value='';
    telefonoInput=value='';
    codigoADNInput=value='';

    alert('Ciudadano creado con éxito!');


}


const guardarCiudadano= async(nuevoCiudadano)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/ciudadanos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoCiudadano),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el ciudadano. Estado: ',respuesta.status);
        }
        const ciudadanoCreado=await respuesta.json();
       
        
        console.log('ciudadano creado:', ciudadanoCreado);

    }catch(error){
        console.error("Error al cargar Ciudadanos",error.message);
    }
}
