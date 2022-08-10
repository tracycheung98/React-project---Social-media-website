import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Feed from "./Feed";
import MyAccount from "./MyAccount";
import Register from './Register';
import Header from './Global/components/Header'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/MyAccount" element={<MyAccount/>}/>
      <Route path="/Feed" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));



// ReactDOM.render(

//   <BrowserRouter>
//     <Routes>
      
//     </Routes>
//   </BrowserRouter>,
//   //  <React.StrictMode>
//   //   <Register />
//   //  </React.StrictMode>,
//   document.getElementById('root')
// );
