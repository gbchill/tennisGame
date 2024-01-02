// Import necessary dependencies and components from React and other modules
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create a UserContext using createContext
export const UserContext = createContext({});

// Define a UserContextProvider component to manage user data and state
export function UserContextProvider({ children }) {
    // Initialize state variables for user data and readiness
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    // Use useEffect to fetch user data when the component mounts
    useEffect(() => {
        if (!user) {
            // Send a GET request to '/profile' to retrieve user data
            axios.get('/profile').then(({ data }) => {
                setUser(data); // Update the user state with the fetched data
                setReady(true); // Set readiness to true once user data is retrieved
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}
