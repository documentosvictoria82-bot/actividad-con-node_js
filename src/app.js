
import readline from 'readline'
import chalk from 'chalk'
import {suma, resta, multiplicar, dividir, elevado} from './calcular.js';

//console.log(suma(10,5))
//console.log(resta(10,5))
//console.log(multiplicar(10,5))
//console.log(dividir(10,1))
//console.log(elevado(10,2))

const leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarmenu(){
    console.log(chalk.blue('calculadora'))
    console.log('1. Suma')
    console.log('2. Resta')
    console.log('3. multiplicación')
    console.log('4.División')

    leer.question('Ingrese una opción: ', opcion => {
        switch(opcion){
            case '1':
                leer.question('digite el primer número a sumar: ', x =>{
                    let n1 = Number(x)
                    leer.question('digite el segundo número a sumar: ', y =>{
                        let n2 = Number(y)
                      console.log(suma(n1,n2))
                      console.log(chalk.green('Resultado')) 
                     mostrarmenu()
                    })
                   
                })
                
                break;
                default: 
                console.log(chalk.red('opción inválida'))
             mostrarmenu()
        case '2':
            leer.question('digite el número a restar: ', x =>{
                let n3 = Number(x)
            leer.question('digite el número a restar:', y =>{
                let  n4 = Number(y)
                console.log(resta(n3,n4))
                 console.log(chalk.green('Resultado')) 
                     mostrarmenu()
            })
            })
            break;
                console.log(chalk.red('opción inválida'))
             mostrarmenu()
            case '3':
            leer.question('digite el número a multiplicar: ', x =>{
                let n5 = Number(x)
            leer.question('digite el número a multiplicar:', y =>{
                let  n6 = Number(y)
                console.log(multiplicar(n5,n6))
                 console.log(chalk.green('Resultado')) 
                     mostrarmenu()
            })
            })
            break;
                console.log(chalk.red('opción inválida'))
             mostrarmenu()
            
            case '4':
            leer.question('digite el número a dividir: ', x =>{
                let n7 = Number(x)
            leer.question('digite el número a dividir:', y =>{
                let  n8 = Number(y)
                console.log(dividir(n7,n8))
                 console.log(chalk.green('Resultado')) 
                     mostrarmenu()
            })
            })
            break;
                console.log(chalk.red('opción inválida'))
             mostrarmenu()
            }
    })
}
mostrarmenu()