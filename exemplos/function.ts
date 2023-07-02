type input= number | string;

function somarValores(input1:input, input2:input){
    if(typeof input1=== 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }else{
        return input1 + input2;
    }
}

console.log(somarValores(1, 5));
console.log(somarValores('ola', ', tudo bem?'));
console.log(somarValores('1', 5));



// Somar valores numericos//


/*
function somarValoresNumericos(numero1: number, numero2:number):number{
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1, 3));*/

// Funçao do tipo VOID que nao roda mais nao retorna nada//

function printValoresNumericos(numero1: number, numero2: number) : void{
    console.log(numero1 + numero2)
}


//Callback//

/*function somarValoresNumericosEtratar(numero1: number, numero2:number, Callback:(numero:number)=>number):number{
    let resultado = numero1 + numero2;
    return Callback(resultado);
}

function aoQuadrado(numero: number):number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number):number{
    return numero / numero;
}

console.log(somarValoresNumericosEtratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosEtratar(1, 3, dividirPorEleMesmo))*/


