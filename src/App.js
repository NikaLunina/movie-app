import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import {  Route, Routes } from 'react-router-dom';

// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

// import RoutesList from '../src/config/Routes';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Home from './pages/Home';


function App() {
  return (
  
    <Routes>
            <Route
                path='/:category/search/:keyword'
                element={<Catalog/>}
            />
            <Route
                path='/:category/:id'
                element={<Detail/>}
            />
            <Route
                path='/:category'
                element={<Catalog/>}
            />
            <Route
                path='/'
                exact
                element={<Home/>}
            />
        </Routes>
   
  );
}

export default App;
