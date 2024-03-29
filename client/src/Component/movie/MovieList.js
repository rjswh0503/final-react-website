import React, {useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';


const MovieLIst = () =>{
    const [movies, setMovies] = useState([]);

    //외부에서 API를 통해서 영화 데이터를 가지고 오고 내가 원하는 내용만 보여주고 싶다.
    //then에다가 내가 원하는 내용만 가져올 수 있도록 요청


    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(response => {
            //가져온 데이터 중에서 필요한 정보만 가지고 와서 업데이트!
            const movieData = response.data.data.movies.map(movie => ({
                id : movie.id,
                title:movie.title,
                rating : movie.rating,
                poster : movie.medium_cover_image,
            }));
            setMovies(movieData);
        })
            .catch(error => {
                console.log('데이터 없음',error);
            });

    },[]);

    return (
        <>
                <div className='w-auto p-3 d-flex justify-content-center '>
                  
                        <Carousel 
                            data-bs-theme="dark"
                            controls={false}
                            indicators={false}
                            slide={false}
                        >
                            {movies.map(movie => (
                                <Carousel.Item>
                                    <div key={movie.id}>
                                        <MovieCard  movie={movie}/>
                                    </div>
                                </Carousel.Item>
                            ))}
                            
                        </Carousel>
                    
                </div>
        </>
    )

}

export default MovieLIst;