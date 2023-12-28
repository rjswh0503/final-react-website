import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreatePage from './CreatePages';
import ListPage from './ListPage';


function Todo() {
    //js로 state 상태관리
    const Home = () => <div>Home</div>;
    const[action, setAction] = useState([]);

    //생성하기
    const addAction = (newAction) => {
        setAction([...action, newAction]);

    }
    //삭제하기;

    //filter 
    const deleteAction = (id) => {
        setAction(action.filter((action) => action.id !== id));
    }

    return( 
        <Router>
            <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
          <Route
            path="/"
            element={<ListPage actions={action} deleteAction={deleteAction} />}
          />
          <Route
            path="/create"
            element={<CreatePage addAction={addAction} />}
          />
        </Routes>
            </>
        </Router>
    )
}

export default Todo;