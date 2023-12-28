import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import MovieLIst from './Component/MovieList';
import NumberGuessingGame from './Component/NumberGuessingGame';
import QuizApp from './Component/QuizApp';
import TodoList from './Component/TodoList';



function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
          <Routes>
            <Route path='/game' element={<NumberGuessingGame/>} />
          </Routes>
          <Routes>
            <Route path='/movie' element={<MovieLIst/>} />
          </Routes>
          <Routes>
            <Route path='/blog' element={<Blog/>} />
          </Routes>
          <Routes>
            <Route path='/todo' element={<TodoList/>} />
          </Routes>
          <Routes>
            <Route path='/quiz' element={<QuizApp/>} />
          </Routes>
          


        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;