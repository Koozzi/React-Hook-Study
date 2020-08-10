import React, { useState, useEffect } from 'react'

export default function UseEffect() {
    const sayHello = () => console.log("Hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, []);
    return (
        <div>
            <h1>useEffect</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    )
}

/*
useEffect(function1, arr[])
1. 페이지를 새로 업데이트 했을 때, function1이 실행 됨.
2. arr[]에 들어있는 값이 변했을 때, function1이 실행 됨.

<Example>
const sayHello = () =>{
    console.log("Hello")
}
const [number, setNumber] = useState(0);
const [aNumber, setAnumber] = useState(0);
1. useEffect(sayHello, [number]);
2. useEffect(sayHello, []);
3. useEffect(sayHello);

<Example 1>
1. 페이지 새로고침을 하면(Mount) sayHello Funtion이 실행 O
2. number의 값이 변했을 때 sayHello Funtion이 실행 O
3. aNumber의 값이 변했을 는 sayHello Function이 실행 X 

<Example 2>
1. 페이지 새로고침을 하면(Mount) sayHello Funtion이 실행 O
2. number의 값이 변했을 때 sayHello Funtion이 실행 X
3. aNumber의 값이 변했을 는 sayHello Function이 실행 X 

<Example 3>
1. 페이지 새로고침을 하면(Mount) sayHello Funtion이 실행 O
2. number의 값이 변했을 때 sayHello Funtion이 실행 O
3. aNumber의 값이 변했을 는 sayHello Function이 실행 O
*/