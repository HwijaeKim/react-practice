import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // let test = '변수선언';

  // a = 실제 변수값, b = state 변경을 도와주는 함수
  // 굳이 useState?: 그냥 변수는 변수값이 바뀌면 HTML에 자동으로 반영되지 않지만 useState는 변수값이 바뀌면 실시간으로 HTML에 반영됨
  let [post, changePost] = useState(['여자코트추천', '강남우동맛집', '파이썬독학']);
  let [like, changeLike] = useState(0);

  function likeF() {
    changeLike(like++)
  }

  // Destructuring 문법: JS의 배열과 비슷하지만 더 간편하게 작성 가능
  // let [c, d] = [1, 2]

  return (
    <div className='App'>



      <div className="black-nav">
        <h4>Code Blog.</h4>
      </div>

      {/* ... == 괄호 벗겨주세요(새로운 화살표로 저장해 주세요~) */}
      <button onClick={
        () => {
          let copy = [...post];
          copy.sort();
          changePost(copy)
        }

      }>가나다순 정렬</button>

      <div className='list'>
        <h4>{post[0]} <span onClick={likeF}>👍</span> {like} </h4>
        <p>2월 12일 발행</p>
      </div>

      <div className='list'>
        <h4>{post[1]}</h4>
        <p>2월 12일 발행</p>
      </div>

      <div className='list'>
        <h4>{post[2]}</h4>
        <p>2월 12일 발행</p>
      </div>

      <Modal />





    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
