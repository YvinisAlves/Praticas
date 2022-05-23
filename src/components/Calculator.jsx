import './style.css'
import React, { useState } from 'react'


export function Calculator(){
    const [calculo, setCalculo] = useState(['0']);

    function back(){
        if(calculo.length === 1){
            setCalculo('0')
        }
        else{
            var remove = []
            for(var fix = 0; fix < calculo.length-1; fix++){
                remove.push(calculo[fix])
            }
            setCalculo(remove.join(''))
        }
    }
    function checkOperator(){
        if(
            calculo[calculo.length-1] === '+' ||
            calculo[calculo.length-1] === '-' ||
            calculo[calculo.length-1] === '×' ||
            calculo[calculo.length-1] === '÷' 
            ){
                return true;
            }
            else{
                return false;
            }
    }
    function insertDot(){
        if(checkOperator() === true){
            setCalculo(calculo + '0.')
        }else if(calculo[calculo.length-1] === '.'){
            setCalculo(calculo + '')
        }else{
            setCalculo(calculo + '.')
        }
    }
    function insertOperator(operator){
        if(checkOperator() === true){
            var remove = []
            for(var fix = 0; fix < calculo.length-1; fix++){
                remove.push(calculo[fix])
            }
            setCalculo(remove.join('') + operator)
        }
        else{
            if(calculo[calculo.length-1] === '.'){
                setCalculo(calculo + '0' + operator)
            }
            else{
                setCalculo(calculo + operator)
            }
        }
    }
    function insert(numb){
        if(calculo[0] === '0' && (
                calculo[1] !== '.' &&
                calculo[1] !== '+' &&
                calculo[1] !== '-' &&
                calculo[1] !== '×' &&
                calculo[1] !== '÷'
                )){
            setCalculo(numb.toString())
        }
        else{
            setCalculo(calculo + numb.toString())
        }
    }
    
    function calculate(){
        var operation = []
        var operator = []
        for(var dig = 0; dig <= calculo.length; dig++){
            if (calculo[dig] ==='×'){
                operation.push(parseFloat(operator.join('')))
                operation.push('×')
                operator=[]
            }
            else if (calculo[dig] ==='÷'){
                operation.push(parseFloat(operator.join('')))
                operation.push('÷')
                operator=[]
            }
            else if (calculo[dig] ==='+'){
                operation.push(parseFloat(operator.join('')))
                operation.push('+')
                operator=[]
            }
            else if (calculo[dig] ==='-'){
                operation.push(parseFloat(operator.join('')))
                operation.push('-')
                operator=[]
            }
            else if(dig === calculo.length){
                if(calculo[dig-1] === '.'){
                    operator.push(calculo[dig])
                    operator.push('0')
                    operation.push(parseFloat(operator.join('')))
                    operator=[]
                }
                else{
                    operator.push(calculo[dig])
                    operation.push(parseFloat(operator.join('')))
                    operator=[]
                }
            }
            else{operator.push(calculo[dig])}
        }
        if(checkOperator() === true){
            operation.pop()
            operation.pop()
        }
        function handleFragments(arr){
            for(var contDone = arr.length-1; contDone >= 0; contDone--){
                if(arr[contDone] === "done"){
                    arr.splice([contDone],1)
                }
            }
        }
        for(var multDivi = 0; multDivi < operation.length; multDivi++){
            if(operation[multDivi] === '×'){
                operation[multDivi] = operation[multDivi-1] * operation[multDivi+1]
                operation[multDivi-1] = "done"
                operation.splice([multDivi+1],1)
            }
            if(operation[multDivi] === '÷'){
                if(operation[multDivi+1] === 0){
                    alert('Error! Divide by zero.')
                    operation = '0'
                    
                }
                else{
                    operation[multDivi] = operation[multDivi-1] / operation[multDivi+1]
                    operation[multDivi-1] = "done"
                    operation.splice([multDivi+1],1)
                }
            }
        }
        handleFragments(operation)
        for(var somaSub = 0; somaSub < operation.length; somaSub++){
            if(operation[somaSub] === '+'){
                operation[somaSub] = operation[somaSub-1] + operation[somaSub+1]
                operation[somaSub-1] = "done"
                operation.splice([somaSub+1],1)
            }
            if(operation[somaSub] === '-'){
                operation[somaSub] = operation[somaSub-1] - operation[somaSub+1]
                operation[somaSub-1] = "done"
                operation.splice([somaSub+1],1)
            }
        }
        handleFragments(operation)
        setCalculo(operation.toString())
    }

    return(
        <div className='calculadora'>
            <h1>Calculadora</h1>
            <p id='resultado'>{calculo}</p>
            <div id='operadores'>
                <table id='calc'>
                    <tbody>
                    <tr>
                        <td><button className="button" onClick={() => setCalculo('0')}>Clear</button></td>
                        <td><button className="button" onClick={back}>◄</button></td>
                        <td><button className="button" onClick={() => insertOperator('×')} >×</button></td>
                        <td><button className="button" onClick={() => insertOperator('÷')} >÷</button></td>
                    </tr>
                    <tr>
                        <td><button className="button" onClick={() => insert(7)}>7</button></td>
                        <td><button className="button" onClick={() => insert(8)}>8</button></td>
                        <td><button className="button" onClick={() => insert(9)}>9</button></td>
                        <td><button className="button" onClick={() => insertOperator('-')} >-</button></td>
                    </tr>
                    <tr>
                        <td><button className="button" onClick={() => insert(4)}>4</button></td>
                        <td><button className="button" onClick={() => insert(5)}>5</button></td>
                        <td><button className="button" onClick={() => insert(6)}>6</button></td>
                        <td><button className="button" onClick={() => insertOperator('+')}>+</button></td>
                    </tr>
                    <tr>
                        <td><button className="button" onClick={() => insert(1)}>1</button></td>
                        <td><button className="button" onClick={() => insert(2)}>2</button></td>
                        <td><button className="button" onClick={() => insert(3)}>3</button></td>
                        <td rowSpan='2'><button className="button" id="butequal" onClick={() => calculate()}>=</button></td>
                    </tr>
                    <tr>
                        <td colSpan='2'><button className="button" id="butzero" onClick={() => insert(0)}>0</button></td>
                        <td><button className="button" onClick={insertDot}>.</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => console.log(calculo)}>DEBUG</button>
        </div>
    )
}