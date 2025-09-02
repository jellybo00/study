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

const choice ={
    rock : {
        name : "Rock",
        img :"../src/assets/rock_img.jpg"
        
    },
    scissors : {
        name : "Scissors",
        img :"../src/assets/scissors_img.jpg"
    },
    paper: {
        name : "Paper",
        img :"../src/assets/paper_img.jpg"
    }
}

function App() {
    const [userSelect, setUserSelect] = useState(null)
    const [computerSelect, setcomputerSelect] = useState(null)
    const [result, setResult] = useState('')
    
    
    const play = (userChoice) => {
        // console.log('클릭',userChoice)
        setUserSelect(choice[userChoice]) 
        let computerChoice = randomChoice()
        setcomputerSelect(computerChoice)
        setResult(judgement(choice[userChoice],computerChoice))
    }
    
    const judgement=(user, computer)=> {
        console.log('user',user , 'computer', computer )
        
        // user == computer -> tie
        // user == rock, computer == scissors  -> user 이김
        // user == rock, computer == paper  -> user 짐
        
        // user == scissors, computer == paper  -> user 이김
        // user == scissors, computer == rock  -> user 짐
    
        // user == paper, computer == rock  -> user 이김
        // user == paper, computer == scissors  -> user 짐
        
        if(user.name == computer.name){
            return 'tie';
        } else if (user.name == 'Rock')
            return computer.name == 'Scissors' ? 'win' : 'lose';
        else if (user.name == 'Scissors')
            return computer.name == 'Paper' ? 'win' : 'lose';
        else if (user.name == 'Paper')
            return computer.name == 'Rock' ? 'win' : 'lose';
    }
    
    const randomChoice=()=>{
        let itemArray = Object.keys(choice) //객체에 키값만 뽑아서 array로 만들어주는 함수
        // console.log('itemArray', itemArray)
        
        let randomItem = Math.floor(Math.random()*itemArray.length)
        // console.log('randomValue', randomItem)
        
        let final = itemArray[randomItem]
        // console.log(final)
        
        return choice[final]
    }
    
  return (
    <>
        <div className='game_cont'>
            <Box 
                title='나'
                item={userSelect}
                result={result}
            />
            <Box 
                title='컴퓨터'
                item={computerSelect}
                result={result}
            />
        </div>
        <div className="btn_cont">
            <button onClick={()=> play("scissors")}>가위</button>
            <button onClick={()=> play("rock")}>바위</button>
            <button onClick={()=> play("paper")}>보</button>
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
