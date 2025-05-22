import './App.css';
import Profile from "./components/Profile";
import Avartar from "./components/Avartar";


function AppProfile() {
    const handleClick = (event) => {
        console.log(event)
        alert('클릭')
    }
    return (
    <>
        <button onClick={handleClick}>버튼</button>
        <Avartar
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHimwas4f9TIIu4_zKMFUAxeqmLiX5s27AQ&s"
            isNew="ture"
        />
        <Profile
            image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            typeText="ture"
            name="제임스킴"
            title="프론트엔드 개발자"
            isNew="ture"
        />
        <Profile
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHimwas4f9TIIu4_zKMFUAxeqmLiX5s27AQ&s"
            name="냠냐냠냠"
            title="프로 먹방러러"
        />
         <Profile
            image="https://thumb.mt.co.kr/06/2024/11/2024112613144258504_1.jpg"
            name="김도영"
            title="기아타이거즈 야구선수"
        />

    </>
    );
}

export default AppProfile;
