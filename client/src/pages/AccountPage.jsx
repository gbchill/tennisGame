// Import necessary dependencies and components from React and other modules
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";

// Define the main component for the login page
export default function AccountPage() {
    // Define and initialize state variables for email, password, and redirection
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    // Define an async function to handle the login form submission
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            // Send a login request to the server with user input (email and password)
            const { data } = await axios.post('/login', { email, password }, { withCredentials: true });
            // Update the user data and show a success message
            setUser(data);
            alert('Login successful');
            setRedirect(true); // Set redirection to true to navigate to the home page
        } catch (e) {
            alert('Login failed'); // Show an error message if login fails
        }
    }

    // Check if a redirection is required
    if (redirect) {
        return <Navigate to={'/'} />; // Redirect to the home page
    }

    // Render the login form and related content
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Account</h1>
            </div>
        </div>
    );
}
