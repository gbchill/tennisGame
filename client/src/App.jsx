// Import necessary dependencies and components from React and other modules
import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import GamesPage from './pages/GamesPage';



import axios from 'axios';
import { UserContextProvider } from './UserContext';

// Configure the default base URL and credentials for axios requests
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

// Define the main App component
function App() {
  return (
    <UserContextProvider>
      <Routes>
        {/* Creates routes for different locations in the app */}
        <Route index element={<IndexPage />} /> // Define the index page route
        <Route path="/game" element={<GamesPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
