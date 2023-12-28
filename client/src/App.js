import React, {useEffect, useState} from "react";
import axios from 'axios';

function AppCafe() {
  const [cafes, setCafes] = useState([]);
  const [newCafe, setNewCafe] = useState({NAME:'', PRICE:''});
  
  const addCafe = () => {
    axios.post('http://localhost:5003/api/cafe', newCafe)
    .then((response) =>{
      setCafes(response.data);
      setNewCafe({NAME:''}, {PRICE:''}); // DB에 저장 후 초기화 해주는 것
    })
    .catch((error) => console.error('에러가 발생했습니다.', error));
  };

  useEffect(() => {
    axios.get('http://localhost:5003/api/cafe')
    .then((response) => setCafes(response.data))
    .catch((error) => console.error('에러입니다', error));
  });

  return (
    <div>
      <h1>카페 메뉴</h1>
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.ID}>
            {cafe.NAME} - {cafe.PRICE}원
          </li>
        ))}
      </ul>
      <h2>새로운 카페 추가</h2>
      <label>이름: </label>
      <input type="text" value={newCafe.NAME} onChange={(e) => 
        setNewCafe({...newCafe, NAME: e.target.value})} />
        <br/>
      <label>가격: </label>
      <input type="text" value={newCafe.PRICE} onChange={(e) => 
        setNewCafe({...newCafe, PRICE: e.target.value})} />
        <br/>
      <button onClick={addCafe}>카페 추가하기</button>
    </div>
  );
}

export default AppCafe;


