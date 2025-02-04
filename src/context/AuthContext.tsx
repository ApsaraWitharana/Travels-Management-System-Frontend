import { createContext, useEffect, useReducer } from "react";

// Retrieve the stored user from localStorage
const storedUser = localStorage.getItem("user");

// Initial state for the AuthContext
const initialState = {
    user: storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null,
    loading: false,
    error: null,
};

// Create the AuthContext
export const AuthContext = createContext(initialState);

// Auth reducer function to handle different actions
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return { ...state, user: null, loading: true, error: null };
        case "LOGIN_SUCCESS":
            return { ...state, user: action.payload, loading: false, error: null };
        case "LOGIN_FAIL":
            return { ...state, user: null, loading: false, error: action.payload };
        case "REGISTER_SUCCESS":
            return { ...state, user: action.payload, loading: false, error: null };
        case "LOGOUT":
            return { ...state, user: null, loading: false, error: null };
        default:
            return state;
    }
};

// AuthContextProvider component to provide the state to the rest of the app
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        // Store user in localStorage whenever the user state changes
        if (state.user) {
            localStorage.setItem("user", JSON.stringify(state.user));
        }
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
