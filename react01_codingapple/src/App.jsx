import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // let test = '변수선언';

  // a = 실제 변수값, b = state 변경을 도와주는 함수
  // 굳이 useState?: 그냥 변수는 변수값이 바뀌면 HTML에 자동으로 반영되지 않지만 useState는 변수값이 바뀌면 실시간으로 HTML에 반영됨
  let [post, changePost] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  let [like, changeLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  function likeF(index) {
    changeLike(like++)
  }

  function 글제목변경() {
    let copy = [...post];
    copy[0] = '여자코트추천';
    changePost(copy);
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

      {/* <div className='list'>
        <h4>{post[0]} <span onClick={likeF}>👍</span> {like} </h4>
        <p>2월 12일 발행</p>
      </div>

      <div className='list'>
        <h4>{post[1]}</h4>
        <p>2월 12일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => { setModal(modal == true ? false : true) }}>{post[2]}</h4>
        <p>2월 12일 발행</p>
      </div> */}

    {
      post.map(function(a, i){
        return (
          <div className='list' key={i}>
            <h4 onClick={() => setModal(true)}>{post[i]} <span onClick={ () => {
              let copy = [...like];
              copy[i] = copy[i] + 1;
              changeLike(copy);
            } }>👍</span> {like[i]} </h4>
            <p>2월 12일 발행</p>
          </div>
        )
      })
    }


    {/* 조건식 ? 참일 떄 실행할 코드 : 거짓일 때 실행할 코드 */}
    {
      modal == true ? <Modal post={post} 글제목변경={글제목변경}/> : null
    }





    </div>
  )
}

function 함수() {
  let a = 10;
}



function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
      <h4>{props.post[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글제목변경}>글수정</button>
    </div>
  )
}

export default App
