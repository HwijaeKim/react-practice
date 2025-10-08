import { React, useState, useTransition, useDeferredValue } from 'react';

let a = new Array(10000).fill(0)

function Test() {
    let [name, setName] = useState('');

    // 늦게 처리(우선순위 먼저 처리)
    let [isPending, startTransition] = useTransition()
    // 이 변수(스테이트)는 늦게 처리
    let state = useDeferredValue(name)

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
        </div>
    )
}

export default Test;