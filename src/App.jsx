import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import Details from './components/Details';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:label" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
