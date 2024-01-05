import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import IndexPage from "./pages/IndexPage";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";
import RulesPage from "./pages/RulesPage";


function App() {
  return (
     <Routes>
     {/* Creates routes for different locations in the app */}
     <Route index element={<IndexPage/>} /> // Define the index page route
     <Route path="/game" element={<GamePage/>} />
     <Route path="/about" element={<AboutPage/>} />
     <Route path="/rules" element={<RulesPage/>} />
   </Routes>
  );
}

export default App;
