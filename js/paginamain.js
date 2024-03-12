const homeInput = document.getElementById('home')
const formCiudadanosInput = document.getElementById('formCiudadanos')
const analisisADNInput = document.getElementById('analisisADN')



const formCiudadanos=()=>{
    homeInput.style.display="none";
    formCiudadanosInput.style.display="block";
    analisisADNInput.style.display="none";
}

const analisisADN=()=>{
    homeInput.style.display="none";
    formCiudadanosInput.style.display="none";
    analisisADNInput.style.display="block";

    cargarTablaSospechosos();
}

