import { React, useState, useTransition, useDeferredValue, useEffect } from 'react';

let a = new Array(10000).fill(0)

function Test() {
    let [name, setName] = useState('');

    // 늦게 처리(우선순위 먼저 처리)
    let [isPending, startTransition] = useTransition()
    // 이 변수(스테이트)는 늦게 처리
    let state = useDeferredValue(name)


    let [count, setCount] = useState(0);
    let [age, setAge] = useState(20);

    useEffect(() => {
        if(count != 0 && count < 3) {
            setAge(age+1)
        }
    }, [count])

    // function addAge() {
    //     setCount(count+1)
    //     if(count < 3) {
    //         setAge(age+1)
    //     } else {
    //         alert('그만 더하세요');
    //     }
    // }


    return (
        <div className="test">
            {name}
            <input onChange={(e) => 
                startTransition(() => {
                    setName(e.target.value)
                })
            } />
            {isPending ? '로딩 중' :
            a.map(() => {
                return <div>{state}</div>
            })
                
            }

            <div className="age">
                <div>안녕하십니까 전 {age}</div>
                <button onClick={() => {setCount(count++)}}>누르면 한살먹기</button>
            </div>
        </div>
    )
}

export default Test;