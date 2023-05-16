import './App.css';

import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavBar from './component/NavBar';


function App() {
  

 const [progress,setProgress] = useState({progress:0})
 let apiKey= '570aa56477fc41ff8dd88843cfb252fa'
  let pageSize=9;
  return (
         <>
         <Router>
       
         <NavBar />
         <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
         <Routes>
        <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News> } />
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News> } />
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"></News> } />
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"></News> } />
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"></News>} />

         </Routes>
         
         </Router>
        
         </>
  );
}

export default App;
