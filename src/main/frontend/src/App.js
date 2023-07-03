
import './App.css';
import api from './api/axiosConfig'
import React, { useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import AllCloth from './components/cloth/AllCloth'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/notFound/NotFound';
import Coming from './components/notFound/Coming';
import Cloth from './components/cloth/Cloth'
import Contact from './components/contact/Contact'


function App() {

  const [ clothes, setClothes] = useState();
  const [ cloth, setCloth] = useState();
  const [ clothByCat, setClothByCat] = useState();
  const [ banner, setBanner] = useState();
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

  const getClothByCat = async (categoryId) => {

    try{
        const response = await api.get(`/api/v1/cloth/category/${categoryId}`)
        setClothByCat(response.data)
    }catch(error){
      console.log(error)
    }


  }

  const getBanner = async (categoryId) => {

    try{
      const response = await api.get(`/banner/${categoryId}`)
      setBanner(response.data.image)
    }catch(error){
      console.log(error)
    }
  }
  

  useEffect(()=>{
    getClothes();
  }, [])

  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home clothes={clothes}/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route exact path="/Cloth" element={<Cloth getClothByCat = {getClothByCat} categoryId= {1} clothes = {clothByCat} getBanner = {getBanner} banner = {banner}/>}></Route>
            <Route exact path="/MenCloth" element={<Cloth getClothByCat = {getClothByCat} categoryId= {2} clothes = {clothByCat} getBanner = {getBanner} banner = {banner}/>}></Route>
            <Route exact path="/Accessory" element={<Cloth getClothByCat = {getClothByCat} categoryId= {3} clothes = {clothByCat} getBanner = {getBanner} banner = {banner}/>}></Route>
            <Route exact path="/Shoes" element={<Cloth getClothByCat = {getClothByCat} categoryId= {4} clothes = {clothByCat} getBanner = {getBanner} banner = {banner}/>}></Route>
            <Route exact path="/Other" element={<Cloth getClothByCat = {getClothByCat} categoryId= {5} clothes = {clothByCat} getBanner = {getBanner} banner = {banner}/>}></Route>
            <Route path="/ContactUs" element={<Contact/>}></Route>
            <Route path="*" element={<NotFound/>}> </Route>
          </Route>

        </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
