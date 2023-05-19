
import './App.css';
import api from './api/axiosConfig'
import React, { useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Cloth from './components/cloth/Cloth'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/notFound/NotFound';
import Coming from './components/notFound/Coming';

function App() {

  const [ clothes, setClothes] = useState();
  const [ cloth, setCloth] = useState();
  const [ movies, setMovies] = useState();
  const [ movie, setMovie] = useState();
  const [ reviews, setReviews] = useState();

  const getClothes = async() => {
    
    try {
      
      const response = await api.get("/api/v1/cloth");

      console.log(response.data)
      setClothes(response.data)

    } catch (error) {
      console.log(error)
    }


  }

  const getCloth = async (cdId) => {

    try {

      const response = await api.get(`/api/v1/cloth/${cdId}`);
      const singleCloth = response.data;

      singleCloth(singleCloth);

    } catch (error) {
      console.log(error);
    }
  }
  

  const getMovies = async() => {
    
    try {
      
      const response = await api.get("/api/v1/movie");

      console.log(response.data)
      setMovies(response.data)

    } catch (error) {
      console.log(error)
    }


  }

  const getMovieData = async (movieId) => {

    try {

      const response = await api.get(`/api/v1/movie/${movieId}`);
      const singleMovie = response.data;

      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
      

    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(()=>{
    getMovies();
    getClothes();
  }, [])

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home clothes={clothes}/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Cloth" element={<Cloth clothes={clothes}/>}></Route>
            <Route path="/MenCloth" element={<Coming/>}></Route>
            <Route path="/Accessory" element={<Coming/>}></Route>
            <Route path="/Shoes" element={<Coming/>}></Route>
            <Route path="/Other" element={<Coming/>}></Route>
            <Route path="/ContactUs" element={<About/>}></Route>
            <Route path="*" element={<NotFound/>}> </Route>
          </Route>

        </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
