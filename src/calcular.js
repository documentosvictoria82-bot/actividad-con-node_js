export function suma (x,y) {
    return x+y;
}

export function resta (x,y){
    return x-y;
}

export function multiplicar (x,y){
    return x*y;
}

export function dividir (x,y){
    if(y!=0){
        return x/y;
    }else{
        return console.error('no se puede realizar'+error);
    }
}

export function elevado (x,y){
            return x**y;
    }    

// module.exports = {suma, resta, multiplicar, dividir, elevado}