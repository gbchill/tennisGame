import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import IndexPage from "./pages/IndexPage";
import GamePage from "./pages/GamePage";


function App() {
  return (
     <Routes>
     {/* Creates routes for different locations in the app */}
     <Route index element={<IndexPage/>} /> // Define the index page route
     <Route path="/game" element={<GamePage/>} />
   </Routes>
  );
}

export default App;
