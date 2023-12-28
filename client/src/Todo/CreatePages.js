import React, {useState} from 'react';

const CreatePage = ({addAction}) => {

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [genere, setGenere] = useState('');
    const [date, setDate] = useState('');



    //추가했을 때 작동할 버튼에 대한 함수 생성

    const handleSubmit = (e) => {
        e.preventDefault();

        //추가한 내용 넣어주기
        const newAction = {id, title, genere, date}
        addAction(newAction);

         //내용 넣어주고 나서 초기화 시키고 싶다면 초기화 셋 작성해주기

         //필수 아님x
         setId('');
         setTitle('');
         setGenere('');
         setDate('');

    };
    return (
        <>
            <h2>CreatePage</h2>
            <form onSubmit={handleSubmit}>
                <label>아이디 : </label>
                <input 
                type='text' value={id} onChange={(e) => 
                setId(e.target.value)}/>
                <br/>

                <label>제목 : </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>

                <label>내용 : </label>
                <input type='text' value={genere} onChange={(e) => setGenere(e.target.value)}/>
                <br/>

                <label>날짜 : </label>
                <input type='text' value={date} onChange={(e) => setDate(e.target.value)}/>
                <br/>
                <button type='submit'>할일 추가하기</button>


            </form>
        
        
        </>
    )




};

export default CreatePage;