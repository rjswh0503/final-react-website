import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Blog from './Component/blog/Blog';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import NumberGuessingGame from './Component/Game/NumberGuessingGame';
import QuizApp from './Component/Game/QuizApp';
import MovieLIst from './Component/movie/MovieList';
import MusicPlayer from './Component/Music/MusicPlayer';
import TodoList from './Component/Todo/TodoList';
import Weather from './Component/weather/Weather';
import WeatherSearch from './Component/weather/WeatherSearch';



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
          <Routes>
            <Route path='/weather' element={<Weather/>} />
          </Routes>
          <Routes>
            <Route path='/weatherSearch' element={<WeatherSearch/>} />
          </Routes>
          <Routes>
            <Route path='/music' element={<MusicPlayer/>} />
          </Routes>
          


        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;