import { useState } from 'react'
import './App.css'
import Box from './component/Box'

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0)
    const increasa = () => {
        counter = counter + 1;
        setCounter2(counter2+1);
        console.log('counter 클릭~! '+ counter + '/ counter2 클릭~!' + counter2)
    }
    
    //  1. 유저가 버튼 클릭
    //  2. counter+ 1 해서 1이 됨
    //  3. setState 함수 호출
    //  4. console.log 실행
    // 변수값은 1로 보이고 state값은 아직 안변했기 때문에 이전값 노출
    // ----- 함수 끝
    // app 다시 rander
    // let counter = 0 을 거치면서 counter 0으로 초기화
    // state값은 update가 되면서 다시 render함 그리고
    
    return (
        <>
            <div>{counter}</div>
            <div>state2 : {counter2}</div>
            <button onClick={increasa}>클릭</button>
            <Box 
                num="1"
                name="김도영"
            />
            <Box 
                num="2"
                name="최형우"
            />
            <Box 
                num="3"
                name="양현종"
            />
        </>
    )
}

export default App

