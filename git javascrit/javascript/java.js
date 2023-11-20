console.group("hola mundo");
var nombre="rfa";
console.log(nombre); //log para que aparesca directamente el console log

for (let i = 1; i < 13; i++) {
    console.log("7x"+i+"="+(7*i));// multiplicacion y concantenar
    
}
var persona=[
    {id: 1,
        nombre:"juan",
        apellido:"berna",
        cedula:12222
    },
      {id: 2,
        nombre:"juanito",
        apellido:"bernado",
        cedula:3333333
    },
    {id: 2,
        nombre:"juanito",
        apellido:"bernado",
        cedula:3333333
    },
]
persona.forEach(element => { //para que muestre el array persona
    if (element.cedula==12222) {
            console.log(element.id+" "+element.nombre+" "+element.cedula);

    }
});
var p=persona.find(p=> p.cedula);//find para un elemento
console.log(p);

var p=persona.filter(p=> p.cedula);//filter para varios elementos
console.log(p);

function agregar() {
    console.log("click");
    // debugger 
    // var cont=document.getElementById("contenedor");
    // cont.innerHTML="hola putito";
    // var cont=document.getElementsByClassName("content");
    // cont.innerHTML="hola putito";
    // var cont=document.getElementById("contenedor");
    // cont.append="putito";

    let tex=document.getElementById("text").value;
    var cont =document.getElementById("contenedor");
    cont.append(tex);
}

function addTabla() {
    let tab=document.getElementById("tabl").value;
    var cont=document.getElementById("content");
    for (let i = 1; i < 13; i++) {
        cont.append(tab+"x"+ i +"="+(tab*i));
        cont.append(document.createElement("br"))
    }
}
var contador=1;
function guardar() {
    var mitab=document.getElementById("mit");
    var res=document.getElementById("resultado");//para queme diga cuanto van
    res.innerHTML=contador;
    var filas=mitab.insertRow();
    
    var cel=filas.insertCell(0)
    cel.textContent=contador++;
    var cel=filas.insertCell(1)
    cel.textContent=document.getElementById("nombre").value;
    var cel1=filas.insertCell(2)
    cel1.textContent=document.getElementById("apellido").value;
    var cel2=filas.insertCell(3)
    cel2.textContent=document.getElementById("cedula").value;

   
}