import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let post = '변수선언';

  return (
    <div>

      <div className="black-nav">
        <h4>Code Blog.</h4>
      </div>

      <h4>{ post }</h4>

      <h4 style={ {color: 'blue', fontSize: '24px'} }>JSX에서 Inline Style은 다음과 같이 작성해야 합니다.</h4>

    </div>
  )
}

export default App
