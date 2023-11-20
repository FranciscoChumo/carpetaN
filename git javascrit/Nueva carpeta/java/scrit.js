var datos=[];

function registrar(){
    //debugger
    let nombre = document.getElementById("nom").value;

    document.getElementById("nom").value="";

    let fecha=document.getElementById("fch").value;
   
    document.getElementById("fch").value="";

    let edd=document.getElementById("ed").value;
 
    document.getElementById("ed").value="";

    let sex=document.getElementById("x").value;

    datos.push(
        
        {
            nombre:nombre,
            fech:fecha,
            edad:edd,
            sexo:sex

        }
    );
    document.getElementById("x").value="";
    
    mostrardatos();

}
function mostrardatos(){
  
    var tabla= document.getElementById("tablaDatos");
    tabla.innerHTML = "";
    datos.forEach(element => {
        var filas=tabla.insertRow();
        
        var cel=filas.insertCell(0)
        cel.textContent=element.nombre;
        var cel=filas.insertCell(1)
        cel.textContent=element.fech;
        var cel1=filas.insertCell(2)
        cel1.textContent=element.edad;
        var cel2=filas.insertCell(3)
        cel2.textContent=element.sexo;
    });
  
      
}
function calcularEdad() {
    var fechaNacimiento = document.getElementById("fch").value;
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    
    var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    var mesActual = fechaActual.getMonth();
    var mesNacimiento = fechaNacimientoDate.getMonth();

    if (mesNacimiento > mesActual || (mesNacimiento === mesActual && fechaNacimientoDate.getDate() > fechaActual.getDate())) {
        edad--;
    }

    
}
function buscar(){
    if(nom==nom){
        alert('no se encontro');
    }
}
