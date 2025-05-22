import './App.css';


function AppJSX() {
  const name ="보림"
  const list =['우유', '딸기', '바나나', '요거트']
  return (
  <>
    <h1 className="orange">{`Hello! ${name}`}</h1>
    <h2>냠</h2>
    <p>{name}</p>
    <ul>

      {list.map((item) => (
          <li>{item}</li>
      ))}


      {/* 풀어쓰면 ~ */}
      {list.map(function(item) {
        return  <li>{item}</li>
      })}
    </ul>
    <img
      style={{width : "200px", height: '200px'}}
      src="https://plus.unsplash.com/premium_photo-1700401698767-d6535274146d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
      alt="냠"
    />
  </>
  );
}

export default AppJSX;
