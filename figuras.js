console.group("cuadrado");

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm*2");

function areaCuadrado(lado){
    lado * lado;
}
//console.log("el area del cuadrado es: " + areaCuadrado);
console.groupEnd();



//triangulo
console.group("triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("la altura del triangulo es de:" + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


//console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm*2");
function areaTriangulo(base, altura){
    return (base * altura)/2;
}
//console.log("el el area del triangulo es: " + areaTriangulo);

console.groupEnd();

//circulo
console.group("circulo");

function diametroCirculo(radio){
    return radio * 2;
}



//const radioCirculo = 4;
//console.log("el radio del circulo es de:" + radioCirculo + "cm");
//const diametroCirculo = radioCirculo *2;
//console.log("el diametro del circulo es de:" + diametroCirculo + "cm");
const pi = Math.PI;



//console.log("el el pi del circulo es de:" + pi + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}


//console.log("el perimetro del circulo es de:" + perimetroCirculo + "cm");
function areaCirculo(radio){
    return (radio * radio) * pi;
} 
//console.log("el area del circulo es de:" + areaCirculo + "cm*2");


console.groupEnd();
