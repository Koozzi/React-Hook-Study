# React Hook Study


\.
## ✔️ useState( initialValue )
1. 상태값을 초기화하는데 사용.
### `useState` Example
~~~javascript
const [item, setItem] = useState(1);
const incrementItem = () => setItem(item + 1);
const decrementItem = () => setItem(item - 1);
~~~
\.
## ✔️ useEffect(function, [...]) 
1. 페이지를 새로 업데이트 했을 때(Mount), function이 실행 됨.
2. [] 에 들어있는 값이 변했을 때, function이 실행 됨.

### `useEffect` Example

~~~javascript
const sayHello = () =>{
    console.log("Hello")
}
const [number, setNumber] = useState(0);
const [aNumber, setAnumber] = useState(0);
1. useEffect(sayHello, [number]);
2. useEffect(sayHello, []);
3. useEffect(sayHello);
~~~

#### 1. useEffect(sayHello, [number])
1. 페이지 새로고침을 하면(Mount) sayHello Funtion이 실행 O
2. number의 값이 변했을 때 sayHello Funtion이 실행 O
3. aNumber의 값이 변했을 는 sayHello Function이 실행 X 

#### 2. useEffect(sayHello, [])
1. 페이지 새로고침을 하면(Mount) sayHello Funtion이 실행 O
2. number의 값이 변했을 때 sayHello Funtion이 실행 X
3. aNumber의 값이 변했을 는 sayHello Function이 실행 X 

#### 3. useEffect(sayHello)
1. 페이지 새로고침을 하면(Mount) sayHello Funtion이 실행 O
2. number의 값이 변했을 때 sayHello Funtion이 실행 O
3. aNumber의 값이 변했을 는 sayHello Function이 실행 O