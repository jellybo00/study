import { useState } from 'react'
import './App.css'
import Box from './component/Box'
import GameBtn from './component/GameBtn'



// 1. 박스 2개 (타이틀, 사진, 결과값) 만들기
// 2. 가위 바위 보 버튼 
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3,4의 결과를 가지고 누가 이겼겼는지 승패를 따짐
// 6. 승패결과에 따라 테두리색 변경 (이기면 초록 , 지면 빨강, 비기면 검은색)
function App() {
    
    
  return (
    <>
        <div className='game_cont'>
            <Box 
                title='나'
                img='../src/assets/scissors_img.jpg'
                desc=''
            />
            <Box 
                title='컴퓨터'
                img=''
                desc=''
            />
        </div>
        <div className="btn_cont">
        <GameBtn 
            name='가위'
            BtnImg='../src/assets/scissors_img.jpg'
        />
        <GameBtn 
            name='바위'
            BtnImg='../src/assets/rock_img.jpg'
        />
        <GameBtn 
            name='보'
            BtnImg='../src/assets/paper_img.jpg'
        />
       </div>
       
    </>
  )
}

export default App
