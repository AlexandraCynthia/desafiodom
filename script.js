

function capturar(){

	function hamburguesa(id, nombre,tamanio, tipo, precio, stock){
		this.id=id;
		this.nombre=nombre;
		this.tamanio=tamanio;
		this.tipo=tipo;
		this.precio=precio;
		this.stock=stock;
	}
	
	

	let idCapturar = document.getElementById("inputId").value;
	let nombreCapturar = document.getElementById("inputnombre").value;
	let tamanCapturar= document.getElementById("inputTam").value;
	let tipoCapturar = document.getElementById("inputTipo").value;
	let precioCapturar = document.getElementById("inputprecio").value;
	let stockCapturar = document.getElementById("inputStock").value;

	if(tipoCapturar=="Carne"|| tipoCapturar=="Vegetariana"){
		nuevah = new hamburguesa(idCapturar,nombreCapturar,tamanCapturar,tipoCapturar,precioCapturar,stockCapturar)
		agregar();
	}else
	alert("corrige el tipo");

	
}

	
let baseDatos=[];

function agregar(){
	baseDatos.push(nuevah); 
	document.getElementById("tabla").innerHTML += `<tbody><th>${nuevah.id}</th><td>${nuevah.nombre}</td><td>${nuevah.tamanio}</td><td>${nuevah.tipo}</td><td>${nuevah.precio}</td><td>${nuevah.stock}</td></tbody>`;
};





///https://www.youtube.com/watch?v=goCeqBn15Ls


// class hamburguesa{
	
// 	constructor(id, nombre,tamanio, tipo, precio, stock){
// 		this.id=id;
// 		this.nombre=nombre;
// 		this.tamanio=tamanio;
// 		this.tipo=tipo;
// 		this.precio=precio;
// 		this.stock=stock;
// 	}

// 	calcularigv(){
// 		this.precio= this.precio*1.18;
// 	}

// 	sumarstock(stock){
// 		this.stock += Number(stock);
// 	}

// }


// //ingresando nuevos tipos de hamburguesas
// let hamb1 = new hamburguesa(1,"delicia","medium","vegetariana",18,20);
// let hamb2 = new hamburguesa(2,"flore","small", "carne",25,15);
// let hamb3 = new hamburguesa(3,"alpunto","large","carne",17,19);
// let hamb4 = new hamburguesa(4,"italina","medium","vegetariana",25,10);
// let hamb5 = new hamburguesa(5,"peruana","small", "carne",15,15);
// let hamb6 = new hamburguesa(6,"servia","medium","vegetariana",12,21);



// // El array de objetos se llamará hamburguesas
// const hamburguesas=[];
// hamburguesas.push(hamb1, hamb2,hamb3, hamb4, hamb5, hamb6);
// console.log(hamburguesas);



// let nombre = prompt("ACEPTAR para continuar, o SALIR");
	
// function agregarhamb(){	
// const idn= prompt("ingresar id");
// const nombren = prompt ("ingresar nombren");
// const tamanion= prompt ("ingresa tamaño");
// const tipon=prompt("ingresa el tipo");
// const precion=prompt("ingresa precio en soles");
// const stockn=prompt("ingresa el stock");


// let nuevaham = new hamburguesa(idn, nombren, tamanion, tipon, precion, stockn);
// hamburguesas.push(nuevaham);
// console.log(hamburguesas);
// }
			

//  while (nombre!=="SALIR"){
//  	agregarhamb()
// 	nombre = prompt("Si deseas ingresar más hamburgesas ACEPTAR/ SALIR");
 	
//  }
			



// // Filtrar las hamburguesas con precios mayores a S/20.00
// //let precio = prompt("ingresa el precio de la hamburguesa");
// let hamburgMasde20 = hamburguesas.filter((elemento)=>{
// 	return elemento.precio>=20;
// });
// console.log(hamburgMasde20);




// //Filtrar por nombre o parte del nombre de la hamburguesa

// let buscarhamb = prompt("Busca el nombre de tu hamburgesa favorita");
// let buscarh = hamburguesas.find((elemento)=>{
// 	return elemento.nombre==buscarhamb;
// });

// if(buscarh!=undefined){
// 	console.log(buscarh);
// }else{
// alert("Nombre de hamburguesa no encontrada");
// }




// //Para ordenar las hamburguesas de menor a mayor precio
// let ordenarhamb = ()=>{
// 	hamburguesas.sort((a,b)=>{
// 		if(a.precio<b.precio) return -1
// 			return 1
// 	})
// }	
// ordenarhamb();
// console.log(hamburguesas);


// //obtener array de id buscados

// let getById = (arrayId)=>{
// 	return hamburguesas.filter((hamburguesa)=>{
// 		if(arrayId.indexOf(hamburguesa.id)!=-1)return true
// 			return false;
// 	})
// }
// console.log(getById([1,3]))


// //armar un array con hamburguesas vegetarianas, y otro array con hamburguesas de carne

// let nuevoObj = ()=>{
// 	return hamburguesas.reduce((nuevoObj, hamburguesa)=>{
// 		if(hamburguesa.tipo=="carne"){
// 			nuevoObj.carne.push(hamburguesa)
// 		}else{
// 			nuevoObj.vegetariana.push(hamburguesa)
// 		}
// 			return nuevoObj
// 		},{ carne:[], vegetariana:[]})
// }
// console.log(nuevoObj());

 
// //calcular igv en hamb1

// hamb1.calcularigv();
// console.log(hamb1);  


// //agregando stock
// let nuevostock = prompt("ingresar el numero de hamburguesas a tu stock")

// hamb1.sumarstock(nuevostock);
